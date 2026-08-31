'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TopBar } from './TopBar';

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

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const moreLinks = [
    { name: 'TESTIMONIALS', href: '/testimonials' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'BLOG', href: '/blog' },
    { name: 'PRIVACY POLICY', href: '/privacy-policy' },
    { name: 'REFUND POLICY', href: '/refund-policy' },
    { name: 'HOTEL POLICY', href: '/hotel-policy' },
    { name: 'TERMS & CONDITIONS', href: '/terms-conditions' },
    { name: "FAQ'S", href: '/faqs' },
    { name: 'ATTRACTION', href: '/attractions' },
  ];

  return (
    <>
      {/* Single fixed stack — TopBar + nav stay flush (no gap on scroll) */}
      <div className="fixed top-0 left-0 w-full z-[1000] pt-[env(safe-area-inset-top)]">
        <div
          className={`hidden md:block relative z-20 transition-[max-height,opacity,transform] duration-300 ease-out ${isScrolled
            ? 'max-h-0 opacity-0 -translate-y-1 pointer-events-none overflow-hidden'
            : 'max-h-12 opacity-100 translate-y-0 overflow-visible'
            }`}
        >
          <TopBar />
        </div>

        <header
          className={`relative z-10 w-full transition-all duration-300 ease-out ${isScrolled
            ? 'bg-[#0C1827]/96 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
            : 'bg-[#0C1827]/92 backdrop-blur-md sm:bg-[#0C1827] sm:backdrop-blur-none'
            }`}
        >
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent pointer-events-none" />
          <div
            className={`max-w-[1360px] mx-auto px-3 flex items-center justify-between gap-3 transition-all duration-300 ${isScrolled ? 'h-[56px] sm:h-[76px]' : 'h-[62px] sm:h-[94px] md:h-[102px]'
              }`}
          >

            {/* 1. Official Hotel Logo Container */}
            <Link href="/" className="flex items-center group py-1 h-full min-w-0 shrink">
              <div
                className={`relative transition-all duration-300 ${isScrolled
                  ? 'h-11 w-36 sm:h-14 sm:w-52 md:h-16 md:w-64'
                  : 'h-12 w-40 sm:h-[72px] sm:w-60 md:h-[82px] md:w-72 lg:h-[88px] lg:w-80'
                  }`}
              >
                <Image
                  src="/logos/official-logo.png"
                  alt="Hotel Prabhupada Official Logo"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 240px, 320px"
                  priority
                  className="object-contain object-left filter drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* 2. Desktop Navigation Menu matching original website links */}
            <nav className="hidden lg:flex items-center justify-center">
              <ul className="flex items-center gap-7 lg:gap-8 list-none m-0 p-0">
                <li>
                  <Link
                    href="/"
                    className={`font-sans text-[13px] font-semibold tracking-[0.16em] uppercase py-2 transition-colors duration-300 ${pathname === '/' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                      }`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`font-sans text-[13px] font-semibold tracking-[0.16em] uppercase py-2 transition-colors duration-300 ${pathname === '/about' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                      }`}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rooms"
                    className={`font-sans text-[13px] font-semibold tracking-[0.16em] uppercase py-2 transition-colors duration-300 ${pathname === '/rooms' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                      }`}
                  >
                    ROOMS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/amenities"
                    className={`font-sans text-[13px] font-semibold tracking-[0.16em] uppercase py-2 transition-colors duration-300 ${pathname === '/amenities' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                      }`}
                  >
                    AMENITIES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className={`font-sans text-[13px] font-semibold tracking-[0.16em] uppercase py-2 transition-colors duration-300 ${pathname === '/gallery' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                      }`}
                  >
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`font-sans text-[13px] font-semibold tracking-[0.16em] uppercase py-2 transition-colors duration-300 ${pathname.startsWith('/blog') ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                      }`}
                  >
                    BLOG
                  </Link>
                </li>

                {/* MORE Dropdown Menu */}
                <li
                  className="relative group py-2"
                  onMouseEnter={() => setMoreDropdownOpen(true)}
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  <button
                    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                    className="flex items-center gap-1 font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-white hover:text-[#C5A059] transition-colors focus:outline-none"
                  >
                    <span>MORE</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#C5A059] transition-transform duration-300 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Box matching original site */}
                  <AnimatePresence>
                    {moreDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-[#141F2E] border border-white/15 shadow-2xl rounded-sm py-3 z-[1100]"
                      >
                        <ul className="flex flex-col list-none m-0 p-0">
                          {moreLinks.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="px-6 py-2.5 font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-white/90 hover:text-[#C5A059] hover:bg-white/5 transition-colors block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={`font-sans text-[13px] font-semibold tracking-[0.16em] uppercase py-2 transition-colors duration-300 ${pathname === '/contact' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                      }`}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>

            {/* 3. CTA Right */}
            <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
              <a
                href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
                target="_blank"
                rel="noopener noreferrer"
                className="header-book-btn inline-flex items-center justify-center font-sans text-[10px] sm:text-[12px] md:text-[13px] uppercase rounded-sm px-3.5 py-2 sm:px-7 sm:py-3"
              >
                <span className="sm:hidden">Book Stay</span>
                <span className="hidden sm:inline">Book Your Stay</span>
              </a>

              {/* Social Icons right of Book Your Stay */}
              <div className="flex items-center gap-1.5 sm:gap-2">

                <a
                  href="https://www.instagram.com/hotelprabhupada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hotel Prabhupada Instagram"
                  title="Follow us on Instagram"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white/80 hover:text-[#C5A059] hover:bg-white/10 border border-white/10 transition-all duration-200"
                >
                  <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                <a
                  href="https://www.facebook.com/share/1CwS7yEET7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hotel Prabhupada Facebook"
                  title="Follow us on Facebook"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white/80 hover:text-[#C5A059] hover:bg-white/10 border border-white/10 transition-all duration-200"
                >
                  <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden h-9 w-9 flex items-center justify-center text-white/90 hover:text-[#E8A317] transition-colors rounded-sm border border-white/12 bg-white/[0.04] focus:outline-none"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Matches former in-flow TopBar height so page content isn't covered */}
      <div className="hidden md:block h-10" aria-hidden />

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#070F1A]/85 backdrop-blur-md z-[1040]"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 w-[min(320px,88vw)] h-full bg-[#070F1A] border-l border-white/10 z-[1050] p-6 sm:p-10 flex flex-col justify-between overflow-y-auto overscroll-contain"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="relative h-16 w-56">
                    <Image
                      src="/logos/official-logo.png"
                      alt="Hotel Prabhupada Logo"
                      fill
                      sizes="224px"
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white p-2 focus:outline-none hover:text-[#C5A059] transition-colors"
                    aria-label="Close Menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <ul className="flex flex-col gap-5 list-none m-0 p-0">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold tracking-widest uppercase block ${pathname === '/' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                        }`}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold tracking-widest uppercase block ${pathname === '/about' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                        }`}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rooms"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold tracking-widest uppercase block ${pathname === '/rooms' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                        }`}
                    >
                      ROOMS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/amenities"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold tracking-widest uppercase block ${pathname === '/amenities' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                        }`}
                    >
                      AMENITIES
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold tracking-widest uppercase block ${pathname === '/gallery' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                        }`}
                    >
                      GALLERY
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold tracking-widest uppercase block ${pathname.startsWith('/blog') ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                        }`}
                    >
                      BLOG
                    </Link>
                  </li>

                  {/* Mobile MORE Section */}
                  <li>
                    <button
                      onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                      className="w-full flex items-center justify-between font-sans text-sm font-semibold tracking-widest uppercase text-white hover:text-[#C5A059] py-1"
                    >
                      <span>MORE</span>
                      <ChevronDown className={`w-4 h-4 text-[#C5A059] transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileMoreOpen && (
                      <ul className="pl-4 mt-3 space-y-3 border-l border-white/10">
                        {moreLinks.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="font-sans text-xs font-medium tracking-wider uppercase text-white/80 hover:text-[#C5A059] block"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold tracking-widest uppercase block ${pathname === '/contact' ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                        }`}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 space-y-4">
                <a
                  href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-[#C5A059] hover:bg-[#B38E46] text-white font-sans text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm transition-all duration-300"
                >
                  Book Your Stay
                </a>

                <div className="flex items-center justify-center gap-3 pt-1">
                  <a
                    href="https://www.facebook.com/share/1CwS7yEET7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hotel Prabhupada Facebook"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-[#C5A059] bg-white/5 border border-white/10 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/hotelprabhupada"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hotel Prabhupada Instagram"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-[#C5A059] bg-white/5 border border-white/10 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
