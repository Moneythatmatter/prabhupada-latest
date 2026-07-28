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
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';
import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { FadeRise } from '@/hooks/useParallax';
import { featuredAttractions } from '@/data/attractions';

export const AttractionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const driftY = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 45, reduceMotion ? 0 : -55]),
    { stiffness: 70, damping: 28 }
  );

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-36 text-[#1E293B] relative overflow-hidden"
    >
      <PatachitraBackdrop />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-20 right-[-10%] w-[300px] h-[300px] rounded-full bg-[#C5A059]/12 blur-3xl will-change-transform"
        style={{ y: driftY }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <FadeRise className="text-center max-w-[800px] mx-auto mb-10 sm:mb-20">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.28em] uppercase text-[#8B1E1E] mb-2 sm:mb-3">
            Explore Puri · Odisha Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1827] tracking-tight leading-[1.15]">
            Nearby Attractions & Heritage
          </h2>
          <PatachitraDivider className="mt-4 sm:mt-6" />
        </FadeRise>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {featuredAttractions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              className="bg-white/95 rounded-sm border border-[#E5DECE] overflow-hidden hover:border-[#C5A059]/70 transition-colors duration-300 hover:shadow-[0_20px_44px_rgba(12,24,39,0.1)] group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                  <ParallaxImage
                    src={item.image}
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="absolute inset-0"
                    imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    distance={42}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1827]/75 via-[#0C1827]/15 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8A317]/50 to-transparent" />
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0C1827] mb-2 sm:mb-3 group-hover:text-[#8B1E1E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#64748B] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeRise delay={0.12} className="text-center mt-10 sm:mt-16">
          <Link
            href="/attractions"
            className="header-book-btn inline-flex items-center justify-center font-sans text-xs tracking-[0.14em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto max-w-sm"
          >
            Explore All Attractions &rarr;
          </Link>
        </FadeRise>
      </div>
    </section>
  );
};
