'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Building2 } from 'lucide-react';

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
          className={`p-2 rounded-lg shrink-0 transition-all duration-200 ${isSendDisabled
              ? 'bg-white/5 text-white/20 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#D4AF61] to-[#C5A059] text-[#070F1A] hover:from-[#F0D78C] hover:to-[#D4AF61] shadow-md transform active:scale-95'
            }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>



      {/* Powered by RITGB Label */}
      <div className="flex items-center justify-center gap-1.5 pt-2 pb-0.5 text-[11px] text-white/50 font-sans tracking-wide border-t border-white/5 mt-2">
        <span>Powered by</span>
        <Building2 className="w-3.5 h-3.5 text-[#E8A317] shrink-0" />
        <span className="font-semibold text-white/85 tracking-wider">RITGB</span>
      </div>
    </div>
  );
};
