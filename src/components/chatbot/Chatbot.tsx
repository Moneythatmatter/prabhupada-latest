'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Sparkles } from 'lucide-react';
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
            transition={{ delay: 2, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2 bg-[#0C1827] text-white border border-[#C5A059]/40 px-3.5 py-2 rounded-full shadow-2xl mb-3 cursor-pointer group hover:border-[#E8A317] transition-all"
            onClick={() => setIsOpen(true)}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8A317]" />
            <span className="text-xs font-sans text-white/90">
              Need help? Ask Hotel Prabhupada
            </span>
          </motion.div>
        )}

        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Open hotel assistant chat'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 border ${isOpen
              ? 'bg-[#0C1827] text-white border-[#f46429]'
              : 'bg-[#f46429] text-white border-white/20 hover:bg-[#e05318] shadow-[0_10px_25px_rgba(244,100,41,0.4)] hover:shadow-[0_12px_30px_rgba(244,100,41,0.6)]'
            }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#f46429]" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-white drop-shadow-sm" />
              {/* Pulsing online gold badge */}
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#070F1A] rounded-full flex items-center justify-center">
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
