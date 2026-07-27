'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

const slides = [
  {
    overline: 'Odisha Heritage · Sea Facing Stay',
    title: 'Welcome to an Enchanting Wonderland',
    subtitle:
      'Stay at the best pet friendly, sea facing hotel in Puri, Odisha. Enjoy comfortable rooms, beach views, and a perfect stay near Puri beach.',
    image: '/images/official-hero1.jpg',
    alt: 'Authentic Hotel Prabhupada Ocean View Puri Odisha',
  },
  {
    overline: 'PET-FRIENDLY HOSPITALITY',
    title: 'Best Pet-Friendly Hotel in Puri',
    subtitle:
      'Stay at one of the best pet-friendly hotels in Puri, where you and your furry companions can enjoy a relaxing stay with modern amenities, comfortable rooms, and warm hospitality near Puri Beach.',
    image: '/images/official-hero2.jpg',
    alt: 'Hotel Prabhupada Superior Sea Facing Balcony View',
  },
  {
    overline: 'BEACHFRONT LUXURY EXPERIENCE',
    title: 'Best Beachfront Hotel in Puri',
    subtitle:
      'Experience an unforgettable stay at one of the best beachfront hotels in Puri. Wake up to beautiful sea views and enjoy premium comfort on New Marine Drive Road.',
    image: '/images/official-hero3.jpg',
    alt: 'Hotel Prabhupada New Marine Drive Puri Location',
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ready, setReady] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 220]), {
    stiffness: 80,
    damping: 30,
  });
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 110]), {
    stiffness: 80,
    damping: 30,
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const enterTimer = window.setTimeout(() => setHasEntered(true), reduceMotion ? 0 : 1100);
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => {
      window.clearTimeout(enterTimer);
      window.clearInterval(timer);
    };
  }, [ready, reduceMotion]);

  /** Longer stagger on first paint; quicker on later slides */
  const baseDelay = !hasEntered && !reduceMotion ? 0.28 : 0.05;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[68svh] sm:min-h-[100svh] sm:h-[100svh] flex items-end sm:items-center justify-center bg-[#070F1A] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
        style={{ y: bgY }}
        initial={reduceMotion ? false : { scale: 1.14, opacity: 0.4 }}
        animate={ready ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 1.8, ease: easeOut }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.image}
            initial={false}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1.03 : 1.0,
            }}
            transition={{
              opacity: { duration: 1.4, ease: 'easeInOut' },
              scale: { duration: currentSlide === index ? 7.5 : 0.8, ease: 'linear' },
            }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: currentSlide === index ? 2 : 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority
              className="object-cover object-[center_35%] sm:object-center"
            />
            <div className="absolute inset-0 bg-[#070F1A]/35 sm:bg-[#070F1A]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070F1A]/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A] via-[#070F1A]/55 to-transparent sm:from-[#070F1A]/80 sm:via-[#070F1A]/35 sm:to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 pt-[4.75rem] pb-9 sm:pt-20 sm:pb-0 text-center text-white will-change-transform"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
      >
        <div className="grid grid-cols-1 grid-rows-1 items-center justify-center max-w-[880px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -16, transition: { duration: 0.4 } }
              }
              transition={{ duration: 0.55, ease: easeOut }}
              className="col-start-1 row-start-1 w-full mx-auto"
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: baseDelay, ease: easeOut }}
                className="flex flex-col items-center mb-3 sm:mb-5"
              >
                <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[#E8A317]">
                  {slides[currentSlide].overline}
                </span>
                <motion.span
                  initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.55, delay: baseDelay + 0.08, ease: easeOut }}
                  className="mt-3 h-px w-12 origin-center bg-gradient-to-r from-transparent via-[#E8A317]/80 to-transparent"
                />
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 0.12, ease: easeOut }}
                className="font-serif text-[1.85rem] leading-[1.2] sm:text-5xl md:text-6xl font-normal tracking-tight sm:leading-[1.12] text-white mb-3.5 sm:mb-6 [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: baseDelay + 0.22, ease: easeOut }}
                className="font-sans text-[0.9rem] sm:text-lg md:text-xl font-light text-white/85 max-w-[32rem] mx-auto mb-6 sm:mb-10 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] line-clamp-2 sm:line-clamp-none"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: baseDelay + 0.32, ease: easeOut }}
              >
                <a
                  href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-book-btn inline-flex items-center justify-center font-sans text-[11px] sm:text-[12px] tracking-[0.16em] uppercase rounded-sm px-8 py-3.5 sm:px-10 sm:py-4 min-h-[44px] sm:min-h-[48px]"
                >
                  Book Now
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.85, ease: easeOut }}
          className="flex items-center justify-center gap-2 mt-7 sm:mt-14"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 focus:outline-none ${
                currentSlide === index
                  ? 'w-6 bg-[#E8A317]'
                  : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, delay: 1.15, ease: easeOut }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-3 text-white/75 text-[11px] tracking-[0.2em] uppercase cursor-pointer hover:text-[#C5A059] transition-colors"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-white/30 relative overflow-hidden">
          <div className="w-full h-3 bg-[#C5A059] absolute top-0 left-0 animate-scroll-line" />
        </div>
      </motion.div>
    </section>
  );
};
