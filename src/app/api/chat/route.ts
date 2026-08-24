import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { buildSystemPrompt } from '@/lib/ai/systemPrompt';
import { checkRateLimit } from '@/lib/ai/rateLimiter';
import { getGroundedFallbackResponse } from '@/lib/knowledge/fallbackMatcher';

export const runtime = 'nodejs';

interface IncomingMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'anonymous-user';

    const rateLimit = checkRateLimit(clientIp, 30, 60_000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Too many requests. Please wait ${rateLimit.resetSeconds} seconds before sending another message.`,
        },
        { status: 429, headers: { 'Retry-After': String(rateLimit.resetSeconds) } }
      );
    }

    // 2. Parse and Validate Request Body
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request: "messages" array is required.' },
        { status: 400 }
      );
    }

    const rawMessages: IncomingMessage[] = body.messages;

    // Validate individual messages
    for (const msg of rawMessages) {
      if (!msg || typeof msg.content !== 'string' || !['user', 'assistant', 'system'].includes(msg.role)) {
        return NextResponse.json(
          { error: 'Invalid message format in conversation history.' },
          { status: 400 }
        );
      }
      if (msg.content.trim().length === 0) {
        return NextResponse.json(
          { error: 'Message cannot be empty.' },
          { status: 400 }
        );
      }
      if (msg.content.length > 1000) {
        return NextResponse.json(
          { error: 'Message exceeds maximum allowed length of 1000 characters.' },
          { status: 400 }
        );
      }
    }

    // Keep the most recent 10 messages for conversation context
    const recentMessages = rawMessages.slice(-10).map((msg) => ({
      role: msg.role,
      content: msg.content.trim(),
    }));

    const lastUserMessage = [...recentMessages].reverse().find((m) => m.role === 'user')?.content || '';

    const apiKey = process.env.OPENAI_API_KEY;

    // 3. If OpenAI Key is present, attempt OpenAI streaming
    if (apiKey) {
      try {
        const openai = new OpenAI({ apiKey });
        const systemPrompt = buildSystemPrompt();

        const openaiStream = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...recentMessages,
          ],
          temperature: 0.3,
          max_tokens: 600,
          stream: true,
        });

        const encoder = new TextEncoder();
        const customReadable = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of openaiStream) {
                const content = chunk.choices[0]?.delta?.content || '';
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              }
              controller.close();
            } catch (err: unknown) {
              console.error('Error during OpenAI stream:', err);
              controller.error(err);
            }
          },
        });

        return new Response(customReadable, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
          },
        });
      } catch (openaiErr: unknown) {
        console.warn(
          'OpenAI API returned an error (fallback engaged):',
          openaiErr instanceof Error ? openaiErr.message : openaiErr
        );
        // Fall through to the grounded fallback generator below
      }
    }

    // 4. Grounded Knowledge Fallback Stream (ensures 100% uptime & accurate answers)
    const fallbackAnswer = getGroundedFallbackResponse(lastUserMessage);
    const encoder = new TextEncoder();

    const fallbackReadable = new ReadableStream({
      async start(controller) {
        // Stream text in simulated small chunks for natural appearance
        const words = fallbackAnswer.split(' ');
        for (let i = 0; i < words.length; i++) {
          const chunk = (i === 0 ? '' : ' ') + words[i];
          controller.enqueue(encoder.encode(chunk));
          // Brief typing delay
          await new Promise((resolve) => setTimeout(resolve, 25));
        }
        controller.close();
      },
    });

    return new Response(fallbackReadable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: unknown) {
    const errorDetails = error instanceof Error ? error.message : 'Unknown server error.';
    console.error('Chat API unexpected error:', errorDetails);

    return NextResponse.json(
      {
        error:
          'We encountered an issue connecting to our assistant. Please try again or contact our front desk at +91 9583002952.',
      },
      { status: 500 }
    );
  }
}
