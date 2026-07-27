import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#070F1A] text-white/85 text-xs py-2 border-b border-white/10">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 flex justify-between items-center">
        <ul className="flex items-center gap-7 list-none m-0 p-0">
          <li className="flex items-center gap-2 tracking-wider">
            <Phone className="w-3.5 h-3.5 text-[#C0392B] shrink-0" />
            <a href="tel:+919583002952" className="hover:text-[#C5A059] transition-colors">
              +91 9583002952
            </a>
            <span className="text-white/40">/</span>
            <a href="tel:+919583002951" className="hover:text-[#C5A059] transition-colors">
              +91 9583002951
            </a>
          </li>
          <li className="flex items-center gap-2 tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#C0392B] shrink-0" />
            <a
              href="mailto:reservation@hotelprabhupada.com"
              className="hover:text-[#C5A059] transition-colors"
            >
              reservation@hotelprabhupada.com
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/75 tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#C0392B] shrink-0" />
            <span>New Marine Drive Road, Baliapanda, Puri, Odisha</span>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};
