'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  PatachitraDivider,
  LotusMotif,
} from '@/components/patachitra/PatachitraMotifs';

const testimonials = [
  {
    quote:
      'Great experience staying in this hotel. Excellent location. Very near and working distance shopping area.',
    author: 'Santan P',
    rating: 5,
  },
  {
    quote:
      'Had a wonderful stay with my family. Pet friendly hotel. Excellent location. Stupendous service.',
    author: 'Arijit Mondal',
    rating: 5,
  },
  {
    quote:
      'The hotel has all the adequate amenities with a great ambience that made our stay very comfortable.',
    author: 'Bijeta M',
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [40, -50]), {
    stiffness: 70,
    damping: 28,
  });
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.08, 1.04]);
  const cardY = useSpring(useTransform(scrollYProgress, [0, 1], [28, -28]), {
    stiffness: 90,
    damping: 28,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 min-h-0 sm:min-h-[520px] md:min-h-[580px] text-white relative overflow-hidden bg-[#070F1A]"
    >
      {/* Landscape Pattachitra — fills section cleanly */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: bgY, scale: bgScale }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/patachitra-bg.png"
            alt="Traditional Odisha Pattachitra painting"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-[#070F1A]/30 sm:bg-[#070F1A]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070F1A]/55 via-[#070F1A]/25 to-[#070F1A]/60 sm:from-[#070F1A]/45 sm:via-[#070F1A]/18 sm:to-[#070F1A]/50" />
      </motion.div>

      <div className="absolute inset-1.5 sm:inset-3 md:inset-4 border border-[#E8A317]/50 sm:border-2 pointer-events-none z-[5]" />
      <div className="absolute inset-3 sm:inset-5 md:inset-6 border border-[#C0392B]/40 pointer-events-none z-[5] hidden sm:block" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          className="text-center max-w-[640px] mx-auto mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#E8A317] mb-2 drop-shadow-md">
            Guest Experience
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-[1.15] drop-shadow-lg">
            What Clients Say
          </h2>
          <PatachitraDivider light className="mt-3 sm:mt-4" />
        </motion.div>

        <motion.div
          className="pata-card-glass max-w-[680px] mx-auto relative rounded-sm will-change-transform"
          style={{ y: cardY }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 flex flex-col items-center px-5 sm:px-12 pt-7 sm:pt-11 pb-6 sm:pb-10">
            <LotusMotif size={22} tone="gold" className="mb-2 sm:mb-3 opacity-95 sm:hidden" />
            <LotusMotif size={28} tone="gold" className="mb-3 opacity-95 hidden sm:block" />
            <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-[#C0392B]/80 mb-3 sm:mb-4" />

            <div className="w-full min-h-[120px] sm:min-h-[150px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#E8A317] text-[#E8A317]" />
                    ))}
                  </div>

                  <blockquote className="font-serif text-sm sm:text-base md:text-lg font-light text-white/95 leading-relaxed mb-4 sm:mb-5 italic text-center max-w-[34rem]">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  <cite className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider text-[#E8A317] not-italic uppercase">
                    — {testimonials[current].author}
                  </cite>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-[#C5A059]/30">
              <div className="grid grid-cols-[40px_1fr_40px] items-center gap-1 sm:gap-2">
                <button
                  onClick={() =>
                    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  }
                  className="h-10 w-10 flex items-center justify-center text-[#E8A317]/80 hover:text-[#E8A317] transition-colors focus:outline-none border border-transparent hover:border-[#C5A059]/40 rounded-sm justify-self-start"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-2.5 h-10">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === i ? 'w-6 bg-[#E8A317]' : 'w-1.5 bg-white/30'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                  className="h-10 w-10 flex items-center justify-center text-[#E8A317]/80 hover:text-[#E8A317] transition-colors focus:outline-none border border-transparent hover:border-[#C5A059]/40 rounded-sm justify-self-end"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 border-t border-[#C5A059]/30 pt-5 sm:pt-6">
          <a
            href="https://www.google.com/maps/place/Hotel+Prabhupada/@19.7899492,85.8070141,17z/data=!4m11!3m10!1s0x3a19c5ccce332e3b:0x3e5550da010583ec!5m2!4m1!1i2!8m2!3d19.7899492!4d85.8070141!9m1!1b1!16s%2Fg%2F11b6dcvt28?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="pata-btn-outline inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-sans font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase px-4 py-3 sm:px-5 sm:py-2.5 rounded-sm transition-all duration-300 backdrop-blur-sm bg-[#070F1A]/55 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Google Reviews &rarr;
          </a>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g503703-d1150060-Reviews-Hotel_Prabhupada-Puri_Puri_District_Odisha.html"
            target="_blank"
            rel="noopener noreferrer"
            className="pata-btn-outline inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-sans font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase px-4 py-3 sm:px-5 sm:py-2.5 rounded-sm transition-all duration-300 backdrop-blur-sm bg-[#070F1A]/55 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            TripAdvisor &rarr;
          </a>
          <a
            href="https://live.ipms247.com/booking/reviewslist-hotelprabhupada"
            target="_blank"
            rel="noopener noreferrer"
            className="pata-btn inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-sans font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-white px-4 py-3 sm:px-5 sm:py-2.5 rounded-sm transition-all duration-300 w-full sm:w-auto"
          >
            Booking Reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
