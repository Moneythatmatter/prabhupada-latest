'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, RotateCcw, MessageCircleQuestion, AlertCircle } from 'lucide-react';
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

const WHATSAPP_URL =
  'https://wa.me/919583002952?text=Hello%20Hotel%20Prabhupada%2C%20I%20would%20like%20to%20inquire%20about%20room%20booking%20and%20availability.';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.951 1.178-.175.2-.351.225-.651.075-.3-.15-1.267-.467-2.414-1.489-.892-.796-1.494-1.78-1.669-2.08-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.631-.926-2.233-.244-.587-.492-.507-.676-.517-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.802.375-.276.3-1.052 1.028-1.052 2.508s1.077 2.906 1.228 3.107c.15.2 2.12 3.237 5.136 4.54.717.31 1.277.495 1.714.634.72.229 1.375.197 1.893.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zM12.042 21.87c-1.776 0-3.518-.477-5.044-1.38l-.361-.215-3.749.983 1-3.655-.236-.375a9.834 9.834 0 0 1-1.51-5.263c0-5.443 4.43-9.873 9.879-9.873 2.636 0 5.115 1.027 6.98 2.892a9.82 9.82 0 0 1 2.887 6.982c0 5.445-4.431 9.89-9.886 9.89zm8.41-18.3C18.232 1.348 15.258.18 12.04 .18 5.518.18.196 5.503.196 12.025c0 2.085.545 4.12 1.581 5.918L0 24l6.236-1.636a11.78 11.78 0 0 0 5.805 1.514h.005c6.521 0 11.844-5.324 11.844-11.847 0-3.163-1.232-6.136-3.438-8.461z" />
  </svg>
);

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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="p-2 hover:text-[#25D366] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
          </a>
          <button
            type="button"
            onClick={onClearHistory}
            title="Reset conversation"
            className="p-2 hover:text-[#E8A317] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Reset conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            title="Close chat"
            className="p-2 hover:text-[#C0392B] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
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
