'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FadeRise } from '@/hooks/useParallax';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070F1A] text-white pt-14 sm:pt-24 pb-8 sm:pb-12 border-t border-white/10 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[220px] rounded-full bg-[#C5A059]/08 blur-3xl"
      />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pb-10 sm:pb-16 border-b border-[#C5A059]/20">
          <FadeRise className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5 sm:mb-6">
              <div className="relative h-12 w-48 sm:h-14 sm:w-56">
                <Image
                  src="/logos/official-logo.png"
                  alt="Hotel Prabhupada Logo"
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="font-sans text-sm text-white/75 font-light leading-relaxed mb-6 sm:mb-8 max-w-sm">
              Welcome to Hotel Prabhupada, a premier destination for comfort and style in Puri, Odisha — inspired by the colours and craft of Odisha&apos;s Patachitra tradition. Experience coastal elegance, pet-friendly stay, and scenic ocean views on New Marine Drive.
            </p>
            <div className="inline-flex items-center gap-2 text-[#E8A317] font-sans text-[10px] sm:text-xs font-medium tracking-widest uppercase bg-[#C0392B]/15 border border-[#C5A059]/30 px-3 sm:px-4 py-2 rounded-sm">
              <MapPin className="w-3.5 h-3.5 shrink-0" /> New Marine Drive Road, Puri
            </div>
          </FadeRise>

          <FadeRise delay={0.08} className="lg:col-span-3">
            <h4 className="font-serif text-xl font-normal text-[#E8A317] mb-6 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm font-light text-white/80 list-none p-0 m-0">
              <li>
                <Link href="/" className="hover:text-[#C5A059] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#C5A059] transition-colors">
                  Accommodations / Rooms
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-[#C5A059] transition-colors">
                  Hotel Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C5A059] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="hover:text-[#C5A059] transition-colors">
                  Puri Attractions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A059] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </FadeRise>

          <FadeRise delay={0.14} className="lg:col-span-2">
            <h4 className="font-serif text-xl font-normal text-[#E8A317] mb-6 tracking-wider uppercase">
              Hotel Policies
            </h4>
            <ul className="space-y-3 font-sans text-sm font-light text-white/80 list-none p-0 m-0">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#C5A059] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#C5A059] transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/hotel-policy" className="hover:text-[#C5A059] transition-colors">
                  Hotel Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-[#C5A059] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#C5A059] transition-colors">
                  FAQ&apos;s
                </Link>
              </li>
            </ul>
          </FadeRise>

          <FadeRise delay={0.2} className="lg:col-span-3">
            <h4 className="font-serif text-xl font-normal text-[#E8A317] mb-6 tracking-wider uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4 font-sans text-sm font-light text-white/80 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                <span>New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C0392B] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919583002952" className="hover:text-[#C5A059] transition-colors">
                    +91 9583002952
                  </a>
                  <a href="tel:+919583002951" className="hover:text-[#C5A059] transition-colors">
                    +91 9583002951
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C0392B] shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:reservation@hotelprabhupada.com" className="hover:text-[#C5A059] transition-colors">
                    reservation@hotelprabhupada.com
                  </a>
                  <a href="mailto:gm@hotelprabhupada.com" className="hover:text-[#C5A059] transition-colors">
                    gm@hotelprabhupada.com
                  </a>
                </div>
              </li>
            </ul>
          </FadeRise>
        </div>

        <FadeRise delay={0.1} className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/60 font-light">
          <p>Hotel Prabhupada © . All rights reserved.</p>
          <p>Official Website Redesign</p>
        </FadeRise>
      </div>
    </footer>
  );
};
