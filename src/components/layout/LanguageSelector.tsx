'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
];

export const LanguageSelector: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add Google Translate script dynamically if not present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,or,bn',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // Trigger Google Translate frame select
    const translateCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (translateCombo) {
      translateCombo.value = langCode;
      translateCombo.dispatchEvent(new Event('change'));
    }
  };

  const currentLanguage = languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-[9999]">
      {/* Hidden Google Translate div */}
      <div id="google_translate_element" className="hidden" />

      {/* Selector Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-[#0C1827] hover:text-[#C5A059] bg-white hover:bg-slate-50 border border-white/20 px-3 py-1.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none cursor-pointer"
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>{currentLanguage.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-[#0C1827]/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-[#0C1827] text-white border border-[#C5A059]/40 shadow-2xl rounded-xl py-2 z-[9999999]"
          >
            <div className="px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#C5A059] border-b border-white/10">
              Select Language
            </div>
            <ul className="list-none p-0 m-0 py-1">
              {languages.map((lang) => {
                const isSelected = selectedLang === lang.code;
                return (
                  <li key={lang.code}>
                    <button
                      type="button"
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-sans transition-colors cursor-pointer ${isSelected
                          ? 'text-[#C5A059] bg-white/10 font-semibold'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="text-[11px] text-white/50">({lang.name})</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
