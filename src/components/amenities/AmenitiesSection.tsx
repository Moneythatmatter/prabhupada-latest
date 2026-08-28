'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { Wifi, ConciergeBell, Sparkles, Car, Bath, Wind, Bed, Tv, ArrowRight } from 'lucide-react';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';
import { FadeRise } from '@/hooks/useParallax';

const amenities = [
  {
    title: 'FREE WIFI',
    icon: Wifi,
    number: '01',
    description: 'High-speed optical fiber wireless internet across all rooms.',
  },
  {
    title: 'ROOM SERVICE',
    icon: ConciergeBell,
    number: '02',
    description: '24/7 in-room dining featuring local Odia & multi-cuisine dishes.',
  },
  {
    title: 'DAILY HOUSEKEEPING',
    icon: Sparkles,
    number: '03',
    description: 'Meticulous room cleaning, linen refresh, and sanitization.',
  },
  {
    title: 'FREE PARKING',
    icon: Car,
    number: '04',
    description: 'Spacious secure parking available for all guest vehicles.',
  },
  {
    title: 'BATHROOM',
    icon: Bath,
    number: '05',
    description: 'En-suite modern bathrooms with hot rain showers and toiletries.',
  },
  {
    title: 'AIR CONDITIONER',
    icon: Wind,
    number: '06',
    description: 'Whisper-quiet climate control in every luxury room.',
  },
  {
    title: 'KING SIZED BEDS',
    icon: Bed,
    number: '07',
    description: 'Pillow-top ergonomic mattresses with premium cotton linens.',
  },
  {
    title: 'HD TV',
    icon: Tv,
    number: '08',
    description: 'High-definition flat screen satellite TVs for entertainment.',
  },
];

export const AmenitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const blobY = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 60, reduceMotion ? 0 : -80]),
    { stiffness: 70, damping: 28 }
  );
  const blobYSlow = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -50]),
    { stiffness: 60, damping: 30 }
  );

  return (
    <section
      ref={sectionRef}
      className="pt-8 sm:pt-12 md:pt-16 pb-14 sm:pb-20 md:pb-28 text-[#1E293B] relative overflow-hidden"
    >
      <PatachitraBackdrop />

      {/* Soft parallax atmosphere */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full bg-[#C5A059]/10 blur-3xl will-change-transform"
        style={{ y: blobY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 w-[380px] h-[380px] rounded-full bg-[#C0392B]/08 blur-3xl will-change-transform"
        style={{ y: blobYSlow }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <FadeRise className="text-center max-w-[800px] mx-auto mb-10 sm:mb-16">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#8B1E1E] mb-2 sm:mb-3">
            Hotel Comforts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1827] tracking-tight leading-[1.12]">
            Amenities
          </h2>
          <PatachitraDivider className="mt-4 sm:mt-6" />
        </FadeRise>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {amenities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6%' }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="relative bg-white/90 backdrop-blur-[2px] p-5 sm:p-7 rounded-sm border border-[#E5DECE] border-t-[3px] border-t-[#8B1E1E] hover:border-[#C5A059]/80 hover:border-t-[#C0392B] shadow-sm hover:shadow-[0_18px_40px_rgba(12,24,39,0.1)] transition-colors duration-400 flex flex-col items-center justify-between text-center min-h-[200px] sm:min-h-[230px] group"
              >
                <span className="absolute top-4 right-5 font-serif text-xs font-light text-[#8B1E1E]/35 group-hover:text-[#C0392B] transition-colors">
                  {item.number}
                </span>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm bg-[#F8F0DC] group-hover:bg-[#0C1827] border border-[#C5A059]/35 group-hover:border-[#C5A059] flex items-center justify-center transition-all duration-400 shadow-sm group-hover:scale-105">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#C0392B] group-hover:text-[#C5A059] transition-colors duration-400" />
                </div>

                <div>
                  <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#0C1827] uppercase mt-4 group-hover:text-[#8B1E1E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#64748B] font-light mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-8 group-hover:w-12 h-px bg-gradient-to-r from-transparent via-[#8B1E1E] to-transparent transition-all duration-300 mt-4" />
              </motion.div>
            );
          })}
        </div>

        <FadeRise delay={0.15} className="text-center mt-10 sm:mt-14">
          <Link
            href="/amenities"
            className="inline-flex items-center justify-center gap-3 bg-[#0C1827] hover:bg-[#C5A059] text-white font-sans text-xs font-semibold tracking-[0.18em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto max-w-sm"
          >
            Explore All Amenities <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeRise>
      </div>
    </section>
  );
};
