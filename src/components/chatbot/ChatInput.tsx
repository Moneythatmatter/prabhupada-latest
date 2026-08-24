'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

const MAX_CHAR_LIMIT = 500;

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isLoading,
  disabled = false,
}) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || disabled) return;
    onSendMessage(trimmed);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= MAX_CHAR_LIMIT) {
      setInput(val);
      // Auto-adjust height up to 120px
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${Math.min(
          textareaRef.current.scrollHeight,
          120
        )}px`;
      }
    }
  };

  const isSendDisabled = !input.trim() || isLoading || disabled;

  return (
    <div className="p-3 sm:p-3.5 bg-[#0C1827] border-t border-[#C5A059]/20 relative">
      <div className="flex items-end gap-2 bg-[#070F1A] border border-[#C5A059]/30 focus-within:border-[#E8A317] rounded-xl px-3 py-2 transition-colors shadow-inner">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={
            isLoading
              ? 'Assistant is typing...'
              : 'Ask about rooms, policies, pool, dining...'
          }
          disabled={isLoading || disabled}
          rows={1}
          className="w-full bg-transparent text-white placeholder-white/40 text-xs sm:text-sm font-sans focus:outline-none resize-none max-h-[100px] py-1 leading-relaxed"
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={isSendDisabled}
          aria-label="Send message"
          className={`p-2 rounded-lg shrink-0 transition-all duration-200 ${
            isSendDisabled
              ? 'bg-white/5 text-white/20 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#D4AF61] to-[#C5A059] text-[#070F1A] hover:from-[#F0D78C] hover:to-[#D4AF61] shadow-md transform active:scale-95'
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between mt-1.5 px-1 text-[10px] text-white/40">
        <span className="hidden sm:inline-flex items-center gap-1">
          Press <kbd className="bg-white/10 px-1 py-0.5 rounded text-[9px]">Enter ↵</kbd> to send
        </span>
        <span className="sm:hidden">Hotel Prabhupada AI</span>
        <span>
          {input.length}/{MAX_CHAR_LIMIT}
        </span>
      </div>
    </div>
  );
};
