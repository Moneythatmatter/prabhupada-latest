'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

/* 1. Brand Icons */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.951 1.178-.175.2-.351.225-.651.075-.3-.15-1.267-.467-2.414-1.489-.892-.796-1.494-1.78-1.669-2.08-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.631-.926-2.233-.244-.587-.492-.507-.676-.517-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.802.375-.276.3-1.052 1.028-1.052 2.508s1.077 2.906 1.228 3.107c.15.2 2.12 3.237 5.136 4.54.717.31 1.277.495 1.714.634.72.229 1.375.197 1.893.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zM12.042 21.87c-1.776 0-3.518-.477-5.044-1.38l-.361-.215-3.749.983 1-3.655-.236-.375a9.834 9.834 0 0 1-1.51-5.263c0-5.443 4.43-9.873 9.879-9.873 2.636 0 5.115 1.027 6.98 2.892a9.82 9.82 0 0 1 2.887 6.982c0 5.445-4.431 9.89-9.886 9.89zm8.41-18.3C18.232 1.348 15.258.18 12.04 .18 5.518.18.196 5.503.196 12.025c0 2.085.545 4.12 1.581 5.918L0 24l6.236-1.636a11.78 11.78 0 0 0 5.805 1.514h.005c6.521 0 11.844-5.324 11.844-11.847 0-3.163-1.232-6.136-3.438-8.461z" />
  </svg>
);

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const TripAdvisorIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 -96 512.2 512.2"
    fill="black"
    aria-hidden="true"
  >
    <path d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z" />
    <circle cx="128.4" cy="191.9" r="31.9" />
    <path d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z" />
    <circle cx="384.4" cy="191.9" r="31.9" />
    <path d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z" />
  </svg>
);

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Hotel_Review-g503703-d1150060-Reviews-Hotel_Prabhupada-Puri_Puri_District_Odisha.html';
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Hotel+Prabhupada/@19.7899492,85.8070141,17z/data=!4m11!3m10!1s0x3a19c5ccce332e3b:0x3e5550da010583ec!5m2!4m1!1i2!8m2!3d19.7899492!4d85.8070141!9m1!1b1!16s%2Fg%2F11b6dcvt28?entry=ttu';
const WHATSAPP_URL =
  'https://wa.me/919583002952?text=Hello%20Hotel%20Prabhupada%2C%20I%20would%20like%20to%20inquire%20about%20room%20booking%20and%20availability.';

export const FloatingActionMenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Click outside to close mobile radial menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpenChatbot = () => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  // 4 mobile radial items along 90° (up) to 180° (left) arc
  const mobileRadius = 94;
  const mobileActions = [
    {
      id: 'tripadvisor',
      name: 'TripAdvisor',
      angle: 90,
      href: TRIPADVISOR_URL,
      bgClass: 'bg-[#00AA6C] text-white shadow-[0_8px_20px_rgba(0,170,108,0.45)]',
      icon: <TripAdvisorIcon className="w-5 h-5" />,
    },
    {
      id: 'google-reviews',
      name: 'Google Reviews',
      angle: 120,
      href: GOOGLE_REVIEWS_URL,
      bgClass: 'bg-white text-gray-800 border border-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)]',
      icon: <GoogleIcon className="w-5 h-5" />,
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot',
      angle: 150,
      onClick: handleOpenChatbot,
      bgClass: 'bg-[#0C1827] text-[#E8A317] border border-[#C5A059]/60 shadow-[0_8px_20px_rgba(232,163,23,0.35)]',
      icon: (
        <div className="relative w-7 h-7 rounded-full overflow-hidden flex items-center justify-center bg-[#070F1A]">
          <Image
            src="/chatbot/mascot.gif"
            alt="AI Assistant"
            fill
            sizes="28px"
            className="object-cover scale-105"
            unoptimized
          />
        </div>
      ),
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      angle: 180,
      href: WHATSAPP_URL,
      bgClass: 'bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.45)]',
      icon: <WhatsAppIcon className="w-6 h-6" />,
    },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE ONLY: Floating '+' button with semi-circle radial expansion     */}
      {/* ========================================================================= */}
      <div ref={mobileRef} className="md:hidden fixed bottom-5 right-5 z-[997] select-none">
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {mobileActions.map((action, index) => {
                const rad = (action.angle * Math.PI) / 180;
                const targetX = Math.round(mobileRadius * Math.cos(rad));
                const targetY = -Math.round(mobileRadius * Math.sin(rad));

                const content = (
                  <>
                    {action.icon}
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#0C1827]/95 backdrop-blur-md text-white text-[10px] font-sans font-medium tracking-wide rounded-md border border-white/15 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30">
                      {action.name}
                    </span>
                  </>
                );

                return (
                  <motion.div
                    key={action.id}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    animate={{ scale: 1, opacity: 1, x: targetX, y: targetY }}
                    exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 340,
                      damping: 20,
                      delay: index * 0.035,
                    }}
                    className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center pointer-events-auto"
                  >
                    {action.href ? (
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={action.name}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 active:scale-95 ${action.bgClass}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={action.onClick}
                        aria-label={action.name}
                        className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 active:scale-95 cursor-pointer ${action.bgClass}`}
                      >
                        {content}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </>
          )}
        </AnimatePresence>

        {/* Main Mobile '+' Trigger Button */}
        <motion.button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close quick menu' : 'Open quick contact and review menu'}
          aria-expanded={mobileMenuOpen}
          whileTap={{ scale: 0.94 }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_28px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer border-2 ${mobileMenuOpen
            ? 'bg-[#0C1827] text-[#C5A059] border-[#C5A059] shadow-[0_12px_32px_rgba(197,160,89,0.4)]'
            : 'bg-gradient-to-tr from-[#C5A059] via-[#D4AF37] to-[#E8A317] text-[#070F1A] border-white/30 shadow-[0_10px_28px_rgba(197,160,89,0.45)]'
            }`}
        >
          {!mobileMenuOpen && (
            <span className="absolute inset-0 rounded-full bg-[#E8A317] opacity-35 animate-ping pointer-events-none" />
          )}
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Plus className="w-7 h-7 stroke-[1.5]" />
          </motion.div>
        </motion.button>
      </div>

      <div className="hidden md:flex fixed bottom-6 left-6 z-[997] flex-col gap-3.5 items-start select-none">
        {/* TripAdvisor Button */}
        <div className="relative group flex items-center">
          <motion.a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Review Hotel Prabhupada on TripAdvisor"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-13 h-13 rounded-full bg-[#00AA6C] hover:bg-[#008f5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,170,108,0.4)] hover:shadow-[0_12px_30px_rgba(0,170,108,0.6)] border border-white/20 transition-all duration-300 cursor-pointer"
          >
            <TripAdvisorIcon className="w-6 h-6" />
          </motion.a>
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-[#0C1827] text-white text-xs font-sans rounded-full border border-[#00AA6C]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            TripAdvisor Reviews
          </span>
        </div>

        {/* Google Reviews Button */}
        <div className="relative group flex items-center">
          <motion.a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Review Hotel Prabhupada on Google Maps"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-13 h-13 rounded-full bg-white hover:bg-slate-50 text-gray-850 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] border border-slate-200 transition-all duration-300 cursor-pointer"
          >
            <GoogleIcon className="w-6 h-6" />
          </motion.a>
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-[#0C1827] text-white text-xs font-sans rounded-full border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Google Reviews
          </span>
        </div>
      </div>

      <div className="hidden md:flex fixed bottom-6 right-6 z-[997] flex-col gap-3.5 items-end select-none">
        {/* AI Chatbot Button */}
        <div className="relative group flex items-center flex-row-reverse">
          <motion.button
            type="button"
            onClick={handleOpenChatbot}
            aria-label="Ask Hotel Prabhupada AI Assistant"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="relative w-13 h-13 rounded-full bg-[#0C1827] hover:bg-[#142336] text-[#E8A317] border-2 border-[#E8A317]/80 hover:border-[#E8A317] flex items-center justify-center shadow-[0_10px_25px_rgba(232,163,23,0.35)] hover:shadow-[0_12px_32px_rgba(232,163,23,0.55)] transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#070F1A]">
              <Image
                src="/chatbot/mascot.gif"
                alt="Hotel Prabhupada Assistant Mascot"
                fill
                sizes="52px"
                className="object-cover object-center scale-105"
                unoptimized
                priority
              />
            </div>
            {/* Online indicator */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0C1827] rounded-full flex items-center justify-center z-20 shadow-md">
              <span className="w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
            </span>
          </motion.button>
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0C1827] text-white text-xs font-sans rounded-full border border-[#C5A059]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Ask AI Assistant
          </span>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group flex items-center flex-row-reverse">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Hotel Prabhupada on WhatsApp"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="relative w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] border border-white/20 transition-all duration-300 cursor-pointer"
          >
            <WhatsAppIcon className="w-7 h-7 fill-current drop-shadow-sm" />
            {/* Online indicator */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-white border-2 border-[#25D366] rounded-full flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            </span>
          </motion.a>
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0C1827] text-white text-xs font-sans rounded-full border border-[#25D366]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>
      </div>
    </>
  );
};
