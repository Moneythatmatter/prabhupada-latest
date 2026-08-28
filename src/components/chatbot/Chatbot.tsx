'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import { Message } from './ChatMessage';

const SUGGESTED_QUESTIONS = [
  'What room categories are available?',
  'Tell me about the restaurant Oris',
  'Does the hotel have sea-view rooms?',
  'Where is Hotel Prabhupada located?',
  'What facilities and amenities do you provide?',
  'How can I contact reservation?',
];

const INITIAL_MESSAGE: Message = {
  id: 'welcome-1',
  role: 'assistant',
  content:
    "Hi! 👋 Welcome to **Hotel Prabhupada**, Puri. I'm here to assist you with room details, dining at Oris, hotel facilities, location, sightseeing assistance, and reservations. How can I help you today?",
  timestamp: 'Just now',
};

const STORAGE_KEY = 'hp_chat_history';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch {
        // Ignore storage errors
      }
    }
    return [INITIAL_MESSAGE];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // 2. Persist chat to sessionStorage
  useEffect(() => {
    if (messages.length > 1 || (messages.length === 1 && messages[0].id !== 'welcome-1')) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // Ignore storage errors
      }
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setError(null);
    setHasInteracted(true);

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const assistantPlaceholderId = `assistant-${Date.now()}`;
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Convert messages to API format
      const payloadMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(
          errJson.error || `Error ${res.status}: Failed to fetch response from assistant.`
        );
      }

      if (!res.body) {
        throw new Error('Readable stream not supported by browser.');
      }

      // Add empty streaming assistant message
      const initialAssistantMessage: Message = {
        id: assistantPlaceholderId,
        role: 'assistant',
        content: '',
        isStreaming: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, initialAssistantMessage]);

      // Read streaming chunks
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedContent += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantPlaceholderId
              ? { ...msg, content: accumulatedContent }
              : msg
          )
        );
      }

      // Finalize message streaming status
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantPlaceholderId
            ? { ...msg, content: accumulatedContent, isStreaming: false }
            : msg
        )
      );
    } catch (err: unknown) {
      const errMessage =
        err instanceof Error
          ? err.message
          : 'Unable to reach the assistant. Please try again.';
      setError(errMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([INITIAL_MESSAGE]);
    setError(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <>
      {/* 1. Floating Chat Trigger Button (Stacked above WhatsApp) */}
      <div className="fixed bottom-20 right-5 sm:bottom-22 sm:right-6 z-[999] flex flex-col items-end">
        {/* Floating helper nudge bubble when chat hasn't been opened */}
        {!isOpen && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2.5 bg-[#0C1827] text-white border border-[#C5A059]/40 pl-2 pr-3.5 py-1.5 rounded-full shadow-2xl mb-3 cursor-pointer group hover:border-[#E8A317] transition-all"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-[#E8A317]/50 bg-[#070F1A]">
              <Image
                src="/chatbot/mascot.gif"
                alt="Assistant Mascot"
                fill
                sizes="28px"
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="text-xs font-sans text-white/90 group-hover:text-[#E8A317] transition-colors">
              Need help? Ask Hotel Prabhupada
            </span>
          </motion.div>
        )}

        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Open hotel assistant chat'}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 ${
            isOpen
              ? 'bg-[#0C1827] text-white border-2 border-[#E8A317]'
              : 'bg-[#0C1827] border-2 border-[#E8A317]/80 hover:border-[#E8A317] shadow-[0_10px_25px_rgba(232,163,23,0.35)] hover:shadow-[0_12px_32px_rgba(232,163,23,0.55)]'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#E8A317]" />
          ) : (
            <>
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#070F1A]">
                <Image
                  src="/chatbot/mascot.gif"
                  alt="Hotel Prabhupada Assistant Mascot"
                  fill
                  sizes="64px"
                  className="object-cover object-center scale-105"
                  unoptimized
                  priority
                />
              </div>
              {/* Pulsing online badge on top right of the floating button */}
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-emerald-500 border-2 border-[#0C1827] rounded-full flex items-center justify-center z-20 shadow-md">
                <span className="w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* 2. Chat Panel Modal / Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[998] sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-[999] inset-x-3 bottom-20 top-auto sm:inset-auto sm:bottom-36 sm:right-6 w-auto sm:w-[410px] h-[78vh] sm:h-[580px] max-h-[640px] flex"
            >
              <ChatWindow
                messages={messages}
                isLoading={isLoading}
                error={error}
                onSendMessage={handleSendMessage}
                onClearHistory={handleClearHistory}
                onClose={() => setIsOpen(false)}
                suggestedQuestions={SUGGESTED_QUESTIONS}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
