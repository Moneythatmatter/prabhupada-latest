'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';

const attractionItems = [
  {
    title: 'SHREE JAGANNATHA TEMPLE PURI',
    image: '/images/attraction-jagannath.jpg',
    description: 'Sacred 12th-century temple in the heart of Puri.',
  },
  {
    title: 'SWARGADWAR SEA BEACH',
    image: '/images/attraction-swargadwar.jpg',
    description: 'Golden beach waves and coastal markets nearby.',
  },
  {
    title: 'SUDARSHAN CRAFTS MUSEUM',
    image: '/images/attraction-sudarshan.png',
    description: 'Traditional Odisha crafts and Pattachitra heritage.',
  },
  {
    title: 'KONARK SUN TEMPLE',
    image: '/images/attraction-konark.jpg',
    description: 'UNESCO World Heritage architectural wonder.',
  },
  {
    title: 'CHILIKA LAKE',
    image: '/images/attraction-chilika.jpg',
    description: 'Asia’s largest brackish lagoon, a short drive away.',
  },
];

export const AttractionsClient: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <InnerPageHero
        overline="Explore Puri · Odisha Heritage"
        title="Nearby Attractions"
        subtitle="Discover temples, beaches, and heritage sites around Hotel Prabhupada."
        image="/images/attraction-jagannath.jpg"
        imageAlt="Attractions near Hotel Prabhupada Puri"
        cta={
          <a
            href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
            target="_blank"
            rel="noopener noreferrer"
            className="header-book-btn inline-flex items-center justify-center font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase rounded-sm px-8 py-3.5"
          >
            Book Your Stay
          </a>
        }
      />

      <section className="py-14 sm:py-20 md:py-28 text-[#1E293B] relative overflow-hidden">
        <PatachitraBackdrop />
        <div
          aria-hidden
          className="pointer-events-none absolute top-20 right-[-8%] w-[280px] h-[280px] rounded-full bg-[#C5A059]/12 blur-3xl"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          <FadeRise className="text-center max-w-[720px] mx-auto mb-10 sm:mb-16">
            <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8B1E1E] mb-2">
              Coastal Heritage Trail
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0C1827] tracking-tight">
              Must-Visit Places Near Us
            </h2>
            <PatachitraDivider className="mt-4 sm:mt-6" />
          </FadeRise>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-6 sm:mb-8">
            {attractionItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="relative h-[360px] sm:h-[440px] w-full rounded-sm overflow-hidden group border border-[#E5DECE] bg-white shadow-sm hover:shadow-[0_20px_44px_rgba(12,24,39,0.12)] transition-shadow"
              >
                <ParallaxImage
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0"
                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                  distance={40}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A]/90 via-[#070F1A]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-center">
                  <h3 className="font-sans text-sm sm:text-base font-semibold tracking-[0.16em] text-white uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-white/75 font-light mb-3">
                    {item.description}
                  </p>
                  <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#E8A317] to-transparent mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-[940px] mx-auto">
            {attractionItems.slice(3, 5).map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : 0.15 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="relative h-[360px] sm:h-[440px] w-full rounded-sm overflow-hidden group border border-[#E5DECE] bg-white shadow-sm hover:shadow-[0_20px_44px_rgba(12,24,39,0.12)] transition-shadow"
              >
                <ParallaxImage
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0"
                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                  distance={40}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A]/90 via-[#070F1A]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-center">
                  <h3 className="font-sans text-sm sm:text-base font-semibold tracking-[0.16em] text-white uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-white/75 font-light mb-3">
                    {item.description}
                  </p>
                  <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#E8A317] to-transparent mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>

          <FadeRise delay={0.1} className="text-center mt-12 sm:mt-16">
            <Link
              href="/contact"
              className="pata-btn inline-flex items-center justify-center text-white font-sans text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm"
            >
              Plan Your Visit &rarr;
            </Link>
          </FadeRise>
        </div>
      </section>
    </>
  );
};
