'use client';

import React, { useState, useEffect } from 'react';
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
    <div className="relative inline-block text-left z-[1020]">
      {/* Hidden Google Translate div */}
      <div id="google_translate_element" className="hidden" />

      {/* Selector Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-[#4A4540] hover:text-[#FF8C1A] bg-white border border-[#E8DFD4] px-3 py-1.5 rounded-full transition-all duration-300 focus:outline-none"
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-[#FF8C1A]" />
        <span>{currentLanguage.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-[#6B6560] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-44 bg-white border border-[#E8DFD4] shadow-2xl rounded-xl py-2 z-[1050]"
          >
            <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#FF8C1A] border-b border-[#E8DFD4]">
              Select Language
            </div>
            <ul className="list-none p-0 m-0">
              {languages.map((lang) => {
                const isSelected = selectedLang === lang.code;
                return (
                  <li key={lang.code}>
                    <button
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-sans transition-colors ${
                        isSelected
                          ? 'text-[#FF8C1A] bg-[#EFEBE7] font-semibold'
                          : 'text-[#4A4540] hover:text-[#2F2F2F] hover:bg-[#EFEBE7]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{lang.nativeName}</span>
                        <span className="text-[10px] text-[#6B6560]">({lang.name})</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#FF8C1A]" />}
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
