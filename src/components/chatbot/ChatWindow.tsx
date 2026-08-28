'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, RotateCcw, Sparkles, MessageCircleQuestion, AlertCircle } from 'lucide-react';
import { ChatMessage, Message } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onSendMessage: (text: string) => void;
  onClearHistory: () => void;
  onClose: () => void;
  suggestedQuestions: string[];
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  isLoading,
  error,
  onSendMessage,
  onClearHistory,
  onClose,
  suggestedQuestions,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'end',
      });
    }
  };

  useEffect(() => {
    scrollToBottom(true);
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full w-full bg-[#070F1A] text-white rounded-2xl overflow-hidden border border-[#C5A059]/35 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      {/* 1. Header with Hotel Prabhupada Branding */}
      <div className="bg-[#0C1827] px-4 py-3.5 border-b border-[#C5A059]/25 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#E8A317] to-[#8B1E1E] p-0.5 shadow-md flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-full bg-[#0C1827] overflow-hidden relative">
              <Image
                src="/chatbot/greeting-mascot.gif"
                alt="Hotel Prabhupada Mascot"
                fill
                sizes="40px"
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0C1827] rounded-full z-10" />
          </div>

          <div>
            <h3 className="font-serif text-base text-[#E8A317] font-semibold leading-none">
              Hotel Prabhupada
            </h3>
            <p className="text-[11px] text-white/60 font-sans mt-0.5 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Assistant · Always Online
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 text-white/70">
          <button
            type="button"
            onClick={onClearHistory}
            title="Reset conversation"
            className="p-2 hover:text-[#E8A317] hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Reset conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            title="Close chat"
            className="p-2 hover:text-[#C0392B] hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Messages Viewport */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
      >
        {/* Odia Motif Subtle Watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]"
        >
          <div className="w-72 h-72 rounded-full border-[12px] border-[#C5A059]" />
        </div>

        {/* Render all messages */}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-[#E8A317] my-2 pl-2">
            <div className="w-7 h-7 rounded-full bg-[#0C1827] border border-[#C5A059]/30 overflow-hidden relative shrink-0">
              <Image
                src="/chatbot/mascot.gif"
                alt="Typing Mascot"
                fill
                sizes="28px"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-1 bg-[#0C1827] border border-[#C5A059]/20 px-3 py-2 rounded-2xl rounded-tl-none">
              <span className="w-1.5 h-1.5 bg-[#E8A317] rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-[#E8A317] rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-[#E8A317] rounded-full animate-bounce" />
            </div>
          </div>
        )}

        {/* Error notification */}
        {error && (
          <div className="bg-[#8B1E1E]/30 border border-[#C0392B]/50 rounded-xl p-3 my-2 text-xs text-rose-200 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#C0392B] mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Suggested Quick Questions (shown if message count <= 1) */}
        {messages.length <= 1 && !isLoading && (
          <div className="pt-2 pb-1 space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] text-[#C5A059] font-medium tracking-wide uppercase px-1">
              <MessageCircleQuestion className="w-3.5 h-3.5" />
              Suggested Questions
            </div>
            <div className="flex flex-wrap gap-1.5">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSendMessage(q)}
                  className="text-left text-xs bg-[#0C1827]/90 hover:bg-[#C5A059]/15 border border-[#C5A059]/30 hover:border-[#E8A317] text-white/90 px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Input Controls */}
      <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
    </div>
  );
};
