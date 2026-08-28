'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Copy, Check, User } from 'lucide-react';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
  isStreaming?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex items-start gap-2.5 my-3.5 transition-opacity duration-200 ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar Icon */}
      <div
        className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center shrink-0 border overflow-hidden relative ${
          isUser
            ? 'bg-gradient-to-br from-[#C5A059] to-[#8B1E1E] border-[#E8A317]/50 text-white shadow-md'
            : 'bg-[#0C1827] border-[#C5A059]/40 shadow-md'
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <Image
            src="/chatbot/mascot.gif"
            alt="Assistant Mascot"
            fill
            sizes="34px"
            className="object-cover"
            unoptimized
          />
        )}
      </div>

      {/* Message Content Container */}
      <div
        className={`relative max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
          isUser
            ? 'bg-gradient-to-r from-[#C5A059] to-[#B38E46] text-[#070F1A] font-medium rounded-tr-none'
            : 'bg-[#0C1827] text-white/90 border border-[#C5A059]/25 rounded-tl-none font-light'
        }`}
      >
        {/* Render formatted message content */}
        <div className="space-y-1.5 break-words">
          {formatMessageContent(message.content, isUser)}
        </div>

        {/* Streaming Cursor Animation */}
        {message.isStreaming && (
          <span className="inline-block w-1.5 h-4 ml-1 bg-[#E8A317] animate-pulse align-middle" />
        )}

        {/* Footer with copy button & timestamp */}
        {!isUser && !message.isStreaming && message.content && (
          <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/5 text-[10px] text-white/40">
            <span>{message.timestamp || 'Hotel Prabhupada Assistant'}</span>
            <button
              onClick={handleCopy}
              type="button"
              aria-label="Copy message"
              className="inline-flex items-center gap-1 hover:text-[#E8A317] transition-colors p-1 rounded hover:bg-white/5"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Parses markdown-like strings (bold, bullets, links) safely into React nodes.
 */
function formatMessageContent(content: string, isUser: boolean): React.ReactNode {
  if (!content) return null;

  const lines = content.split('\n');

  return lines.map((line, lineIdx) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return <div key={lineIdx} className="h-1.5" />;
    }

    // Bullet points
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 pl-1 my-0.5">
          <span
            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
              isUser ? 'bg-[#070F1A]' : 'bg-[#E8A317]'
            }`}
          />
          <span className="flex-1">{renderInlineStyles(trimmed.slice(2), isUser)}</span>
        </div>
      );
    }

    // Numbered lists (e.g. "1. ")
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 pl-1 my-0.5">
          <span
            className={`font-semibold shrink-0 text-xs mt-0.5 ${
              isUser ? 'text-[#070F1A]' : 'text-[#E8A317]'
            }`}
          >
            {numMatch[1]}.
          </span>
          <span className="flex-1">{renderInlineStyles(numMatch[2], isUser)}</span>
        </div>
      );
    }

    return (
      <p key={lineIdx} className="my-0.5">
        {renderInlineStyles(line, isUser)}
      </p>
    );
  });
}

/**
 * Formats inline bold text and markdown links [Label](url)
 */
function renderInlineStyles(text: string, isUser: boolean): React.ReactNode[] {
  // Regex pattern matching [Link text](url) or **bold text**
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    // Push preceding plain text
    if (match.index > lastIdx) {
      nodes.push(text.substring(lastIdx, match.index));
    }

    if (match[2] && match[3]) {
      // Link [text](url)
      const label = match[2];
      const url = match[3];
      const isInternal = url.startsWith('/');

      if (isInternal) {
        nodes.push(
          <Link
            key={`link-${match.index}`}
            href={url}
            className={`font-semibold underline underline-offset-2 transition-colors ${
              isUser
                ? 'text-[#070F1A] hover:text-black font-bold'
                : 'text-[#E8A317] hover:text-[#D4AF61] bg-[#E8A317]/10 px-1.5 py-0.5 rounded border border-[#E8A317]/30'
            }`}
          >
            {label} →
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={`ext-${match.index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-1 ${
              isUser
                ? 'text-[#070F1A] hover:text-black font-bold'
                : 'text-[#E8A317] hover:text-[#D4AF61] bg-[#E8A317]/10 px-1.5 py-0.5 rounded border border-[#E8A317]/30'
            }`}
          >
            {label} ↗
          </a>
        );
      }
    } else if (match[4]) {
      // Bold **text**
      nodes.push(
        <strong
          key={`bold-${match.index}`}
          className={isUser ? 'font-bold text-[#070F1A]' : 'font-semibold text-white'}
        >
          {match[4]}
        </strong>
      );
    }

    lastIdx = tokenRegex.lastIndex;
  }

  // Push remaining text
  if (lastIdx < text.length) {
    nodes.push(text.substring(lastIdx));
  }

  return nodes;
}
