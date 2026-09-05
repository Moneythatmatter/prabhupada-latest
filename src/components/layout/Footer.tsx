'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Building2 } from 'lucide-react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070F1A] text-white pt-14 sm:pt-24 pb-8 sm:pb-12 border-t border-white/10 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[220px] rounded-full bg-[#C5A059]/08 blur-3xl"
      />
      {/* Half mandala — bottom center, flat edge on bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[420px] h-[210px] sm:w-[640px] sm:h-[320px] md:w-[820px] md:h-[410px] -translate-x-1/2"
      >
        <Image
          src="/images/footer-mandala-half.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 420px, (max-width: 768px) 640px, 820px"
          className="object-contain object-bottom opacity-[0.05] sm:opacity-[0.06]"
          unoptimized
        />
      </div>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pb-10 sm:pb-16 border-b border-[#C5A059]/20">
          <div className="lg:col-span-4">
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
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 text-[#E8A317] font-sans text-[10px] sm:text-xs font-medium tracking-widest uppercase bg-[#C0392B]/15 border border-[#C5A059]/30 px-3 sm:px-4 py-2 rounded-sm">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> New Marine Drive Road, Puri
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/share/1CwS7yEET7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hotel Prabhupada Facebook"
                  className="w-8 h-8 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E8A317] flex items-center justify-center hover:bg-[#E8A317] hover:text-[#070F1A] hover:border-[#E8A317] transition-all duration-200"
                  title="Follow us on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/hotelprabhupada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hotel Prabhupada Instagram"
                  className="w-8 h-8 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E8A317] flex items-center justify-center hover:bg-[#E8A317] hover:text-[#070F1A] hover:border-[#E8A317] transition-all duration-200"
                  title="Follow us on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Official TripAdvisor Travelers' Choice 2026 Award */}
            <div className="mt-6 pt-5 border-t border-[#C5A059]/20">
              <span className="block font-sans text-[10px] tracking-widest uppercase font-semibold text-[#E8A317] mb-2.5">
                Official Recognition
              </span>
              <a
                href="https://www.tripadvisor.in/Hotel_Review-g503703-d1150060-Reviews-Hotel_Prabhupada-Puri_Puri_District_Odisha.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group bg-white/[0.04] hover:bg-white/[0.08] border border-[#C5A059]/30 hover:border-[#E8A317] px-3.5 py-2.5 rounded-sm transition-all duration-300"
                title="Hotel Prabhupada Puri - TripAdvisor Travelers' Choice 2026 Winner"
              >
                <div className="relative w-12 h-14 shrink-0">
                  <Image
                    src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2026_LL.png"
                    alt="TripAdvisor Travelers' Choice 2026 Award Winner Hotel Prabhupada"
                    fill
                    sizes="48px"
                    className="object-contain group-hover:scale-105 transition-transform"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-sm font-medium text-white group-hover:text-[#E8A317] transition-colors">
                    Travelers&apos; Choice 2026
                  </span>
                  <span className="font-sans text-[11px] text-white/60 font-light">
                    TripAdvisor Best of Best
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
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
                <Link href="/blog" className="hover:text-[#C5A059] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="hover:text-[#C5A059] transition-colors">
                  Puri Attractions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#C5A059] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#C5A059] transition-colors">
                  Guest Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A059] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
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
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl font-normal text-[#E8A317] mb-6 tracking-wider uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4 font-sans text-sm font-light text-white/80 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                <span>New Marine Drive Rd, Near light house, Puri, Odisha 752001</span>
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
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/60 font-light border-t border-white/5 mt-4 sm:mt-0">

          <div className="flex items-center gap-1.5 text-white/70">
            <span>Powered by</span>

            <Building2 className="w-3.5 h-3.5 text-[#E8A317] shrink-0" />
            <Link href="https://ritgb.com" target="_blank" rel="noopener noreferrer"> <span className="font-semibold text-white/85 tracking-wider">RITGB</span>
            </Link>
          </div>
          <p>Hotel Prabhupada © . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
