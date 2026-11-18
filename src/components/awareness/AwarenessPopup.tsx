'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const STORAGE_KEY = 'hp_awareness_popup_seen';

export const AwarenessPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem(STORAGE_KEY);
      if (!hasSeen) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // If localStorage is unavailable in private mode, fail gracefully
    }
  }, []);

  // Allow manual trigger for testing via window.showAwarenessPopup() or custom event
  useEffect(() => {
    const handleTrigger = () => setIsOpen(true);
    window.addEventListener('show-awareness-popup', handleTrigger);
    (window as unknown as { showAwarenessPopup?: () => void }).showAwarenessPopup = () => setIsOpen(true);

    return () => {
      window.removeEventListener('show-awareness-popup', handleTrigger);
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore if localStorage is unavailable
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Important Awareness Notice"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-6"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#070F1A]/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative z-10 w-full max-w-[640px] md:max-w-[720px] max-h-[92vh] rounded-lg border border-[#C5A059]/40 bg-[#0C1827] shadow-[0_24px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col"
          >
            {/* Top Bar with Title and Close Button */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#070F1A] border-b border-[#C5A059]/20 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8A317] inline-block animate-pulse" />
                <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#E8A317]">
                  Important Notice
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close notice"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#8B1E1E] text-white/80 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A317]/50 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Awareness Image Container with overflow handling */}
            <div className="relative w-full overflow-y-auto bg-[#050B13] p-1.5 sm:p-3 flex items-center justify-center">
              <picture className="w-full flex justify-center">
                <source srcSet="/awareness/awareness.webp" type="image/webp" />
                <img
                  src="/awareness/awareness.png"
                  alt="Hotel Prabhupada - Important Awareness Notice"
                  width={900}
                  height={650}
                  className="w-full h-auto max-h-[70vh] object-contain rounded select-none pointer-events-none"
                  loading="eager"
                />
              </picture>
            </div>

            {/* Bottom Action Footer */}
            <div className="flex items-center justify-end px-4 py-3 bg-[#070F1A] border-t border-[#C5A059]/20 gap-3 shrink-0">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B1E1E] to-[#A02323] hover:from-[#9E2222] hover:to-[#B52727] text-white font-sans text-xs tracking-wider uppercase font-semibold py-2.5 px-6 rounded-sm shadow-md transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E8A317]/50 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Continue to Website</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
