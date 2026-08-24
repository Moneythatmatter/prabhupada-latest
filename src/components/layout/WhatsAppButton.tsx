'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '919583002952',
  defaultMessage = 'Hello Hotel Prabhupada, I would like to inquire about room booking and availability.',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[997] flex items-center flex-row-reverse group">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hotel Prabhupada on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 border border-white/20"
      >
        {/* Subtle pulsing background ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.951 1.178-.175.2-.351.225-.651.075-.3-.15-1.267-.467-2.414-1.489-.892-.796-1.494-1.78-1.669-2.08-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.631-.926-2.233-.244-.587-.492-.507-.676-.517-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.802.375-.276.3-1.052 1.028-1.052 2.508s1.077 2.906 1.228 3.107c.15.2 2.12 3.237 5.136 4.54.717.31 1.277.495 1.714.634.72.229 1.375.197 1.893.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zM12.042 21.87c-1.776 0-3.518-.477-5.044-1.38l-.361-.215-3.749.983 1-3.655-.236-.375a9.834 9.834 0 0 1-1.51-5.263c0-5.443 4.43-9.873 9.879-9.873 2.636 0 5.115 1.027 6.98 2.892a9.82 9.82 0 0 1 2.887 6.982c0 5.445-4.431 9.89-9.886 9.89zm8.41-18.3C18.232 1.348 15.258.18 12.04 .18 5.518.18.196 5.503.196 12.025c0 2.085.545 4.12 1.581 5.918L0 24l6.236-1.636a11.78 11.78 0 0 0 5.805 1.514h.005c6.521 0 11.844-5.324 11.844-11.847 0-3.163-1.232-6.136-3.438-8.461z" />
        </svg>

        {/* Online green indicator dot */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-white border-2 border-[#25D366] rounded-full flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
        </span>
      </motion.a>

      {/* Hover tooltip on desktop (appears to the left of the button) */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-[#0C1827] text-white text-xs font-sans rounded-full border border-[#25D366]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </div>
  );
};
