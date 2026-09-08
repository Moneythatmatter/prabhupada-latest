import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Maintenance() {
  return (
    <div className="min-h-screen w-full bg-[#070F1A] text-white flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#E8A317]/5 rounded-full blur-3xl pointer-events-none -top-24 -left-24" />
      <div className="absolute w-[400px] h-[400px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none -bottom-24 -right-24" />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center space-y-6">
        {/* Hotel Logo */}
        <div className="relative h-16 w-52 sm:h-20 sm:w-64 mb-1">
          <Image
            src="/logos/official-logo.png"
            alt="Hotel Prabhupada Logo"
            fill
            sizes="256px"
            className="object-contain"
            priority
          />
        </div>

        {/* Maintenance Badge */}
        <span className="inline-block px-3.5 py-1 text-[11px] font-semibold tracking-widest text-[#E8A317] uppercase bg-[#E8A317]/10 border border-[#E8A317]/30 rounded-full">
          Scheduled Maintenance
        </span>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-wide">
          We&apos;ll be right back
        </h1>

        {/* Message */}
        <p className="font-sans text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-md">
          Hotel Prabhupada&apos;s website is undergoing scheduled maintenance.
          Please check back in a few hours.
        </p>

        {/* Direct Inquiries & Booking Contacts */}
        <div className="pt-6 border-t border-white/10 w-full space-y-3 font-sans text-xs sm:text-sm text-white/70 font-light">
          <p className="text-white/50 text-xs uppercase tracking-wider">
            For urgent reservations & inquiries:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/90">
            <a
              href="tel:+919583002952"
              className="flex items-center gap-1.5 hover:text-[#E8A317] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8A317]" />
              <span>+91 9583002952</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+919583002951"
              className="flex items-center gap-1.5 hover:text-[#E8A317] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8A317]" />
              <span>+91 9583002951</span>
            </a>
          </div>
          <div>
            <a
              href="mailto:reservation@hotelprabhupada.com"
              className="inline-flex items-center gap-1.5 hover:text-[#E8A317] transition-colors text-white/80"
            >
              <Mail className="w-3.5 h-3.5 text-[#E8A317]" />
              <span>reservation@hotelprabhupada.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
