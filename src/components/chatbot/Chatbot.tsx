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

  // 3. Listen for open-chatbot event from FloatingActionMenu
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpenChat);
    return () => window.removeEventListener('open-chatbot', handleOpenChat);
  }, []);

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
            className="fixed z-[999] inset-x-3 bottom-24 top-auto sm:inset-auto sm:bottom-28 sm:right-6 w-auto sm:w-[410px] h-[78vh] sm:h-[580px] max-h-[640px] flex"
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
  );
};
