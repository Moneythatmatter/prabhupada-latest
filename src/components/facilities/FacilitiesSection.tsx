'use client';

import React, { useMemo, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';
import {
  Waves,
  Presentation,
  Sofa,
  Flower2,
  UtensilsCrossed,
  Trees,
  ArrowUpDown,
  type LucideIcon,
} from 'lucide-react';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';
import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { FadeRise } from '@/hooks/useParallax';

type Facility = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  number: string;
};

const facilities: Facility[] = [
  {
    title: 'Swimming Pool',
    description:
      'Refresh in our outdoor pool after a day by the Puri coast — blue water, open sky, and easy poolside lounging.',
    icon: Waves,
    image: '/images/swimming_pool.webp',
    alt: 'Outdoor swimming pool and sun deck at Hotel Prabhupada Puri',
    number: '01',
  },
  {
    title: 'Conference Hall',
    description:
      'A well-equipped space for meetings, celebrations, and gatherings — ready for business or family occasions.',
    icon: Presentation,
    image: '/images/conference_hall.webp',
    alt: 'Conference and banquet hall setup for corporate meetings and family events',
    number: '02',
  },
  {
    title: 'Guest Lounge',
    description:
      'A calm shared lounge to relax, connect, and unwind between temple visits and beach walks.',
    icon: Sofa,
    image: '/images/guest_lounge.webp',
    alt: 'Relaxing guest lounge with comfortable seating at Hotel Prabhupada',
    number: '03',
  },
  {
    title: 'Spa',
    description:
      'Rejuvenating treatments for restful wellness during your stay — unwind after a day of exploring Puri.',
    icon: Flower2,
    image: '/images/spa.webp',
    alt: 'Ayurvedic wellness and rejuvenating spa therapies at Hotel Prabhupada',
    number: '04',
  },
  {
    title: 'Restaurant',
    description:
      'In-house dining with Odia flavours and multi-cuisine options, served in a warm, welcoming setting.',
    icon: UtensilsCrossed,
    image: '/images/oris_restaurant.webp',
    alt: 'Oris restaurant serving authentic Odia delicacies and multi-cuisine meals',
    number: '05',
  },
  {
    title: 'Lawn',
    description:
      'Open green lawn for leisure, photos, and outdoor moments — quiet greenery on New Marine Drive.',
    icon: Trees,
    image: '/images/lawn.webp',
    alt: 'Lush landscaped open garden lawn facing New Marine Drive Puri',
    number: '06',
  },
];

function StackFacilityCard({
  item,
  index,
  total,
  cardRef,
  nextRef,
}: {
  item: Facility;
  index: number;
  total: number;
  cardRef: React.RefObject<HTMLDivElement | null>;
  nextRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = item.icon;
  const reverse = index % 2 === 1;
  const isLast = index === total - 1;

  // Fade is driven by the NEXT card rising over this one.
  // Scroll up reverses that progress → opacity returns to 1.
  const { scrollYProgress: coverProgress } = useScroll({
    target: nextRef ?? cardRef,
    offset: ['start end', 'start 20%'],
  });

  const rawOpacity: MotionValue<number> = useTransform(
    coverProgress,
    [0, 0.4, 0.8, 1],
    reduceMotion || isLast ? [1, 1, 1, 1] : [1, 0.9, 0.25, 0]
  );
  const opacity = useSpring(rawOpacity, { stiffness: 140, damping: 28, mass: 0.35 });

  const rawScale = useTransform(
    coverProgress,
    [0, 1],
    reduceMotion || isLast ? [1, 1] : [1, 0.97]
  );
  const scale = useSpring(rawScale, { stiffness: 140, damping: 28, mass: 0.35 });

  return (
    <div
      ref={cardRef}
      className={`sticky top-[5rem] sm:top-24 ${isLast ? 'mb-[6vh]' : 'mb-[6vh] sm:mb-[8vh] md:mb-[10vh]'}`}
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{
          opacity,
          scale,
          transformOrigin: 'center top',
        }}
        className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-[#E5DECE] bg-[#FBF8F1] shadow-[0_14px_40px_rgba(12,24,39,0.12)] will-change-transform rounded-sm"
      >
        <div
          className={`lg:col-span-7 relative min-h-[200px] sm:min-h-[260px] lg:min-h-[320px] ${reverse ? 'lg:order-2' : 'lg:order-1'
            }`}
        >
          <ParallaxImage
            src={item.image}
            alt={item.alt}
            sizes="(max-width: 1024px) 100vw, 60vw"
            distance={24}
            className="absolute inset-0"
            imageClassName="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0C1827]/70 via-black/10 to-transparent pointer-events-none"
          />
          <span
            className={`absolute top-3 sm:top-5 font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white/30 leading-none select-none ${reverse ? 'right-4 sm:right-7' : 'left-4 sm:left-7'
              }`}
          >
            {item.number}
          </span>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-3 pointer-events-none">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/90 shrink-0 drop-shadow-sm font-medium">
              {index + 1} / {total}
            </span>
          </div>
        </div>

        <div
          className={`lg:col-span-5 flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8 bg-[#FBF8F1] ${reverse ? 'lg:order-1' : 'lg:order-2'
            }`}
        >
          <div className="mb-3 sm:mb-4 flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-[#F8F0DC] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C0392B]" />
            </div>
            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8B1E1E]">
              Facility {item.number}
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl md:text-[1.85rem] font-normal text-[#0C1827] tracking-tight leading-tight mb-2.5 sm:mb-3">
            {item.title}
          </h3>
          <div className="w-10 sm:w-12 h-px bg-gradient-to-r from-[#C5A059] to-transparent mb-3 sm:mb-4" />
          <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#64748B] font-light leading-relaxed max-w-md">
            {item.description}
          </p>
        </div>
      </motion.article>
    </div>
  );
}

export const FacilitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const cardRefs = useMemo(
    () => facilities.map(() => React.createRef<HTMLDivElement>()),
    []
  );

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const blobY = useSpring(
    useTransform(sectionProgress, [0, 1], [reduceMotion ? 0 : 70, reduceMotion ? 0 : -90]),
    { stiffness: 65, damping: 28 }
  );
  const blobYAlt = useSpring(
    useTransform(sectionProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -55]),
    { stiffness: 70, damping: 30 }
  );

  return (
    <section
      ref={sectionRef}
      className="pt-10 sm:pt-14 md:pt-16 pb-4 sm:pb-6 md:pb-8 text-[#1E293B] relative  overflow-x-clip"
    >
      <PatachitraBackdrop />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          className="pointer-events-none absolute top-24 -left-28 w-[360px] h-[360px] rounded-full bg-[#C5A059]/12 blur-3xl will-change-transform"
          style={{ y: blobY }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-32 -right-24 w-[400px] h-[400px] rounded-full bg-[#C0392B]/08 blur-3xl will-change-transform"
          style={{ y: blobYAlt }}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <FadeRise className="text-center max-w-[720px] mx-auto mb-8 sm:mb-10">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#8B1E1E] mb-2 sm:mb-2.5">
            Hotel Property Highlights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1827] tracking-tight leading-[1.12]">
            Facilities
          </h2>
          <PatachitraDivider className="mt-3 sm:mt-5" />
          <p className="mt-4 sm:mt-5 font-sans text-xs sm:text-sm md:text-base text-[#64748B] font-light leading-relaxed">
            Scroll down — each card sticks, the next stacks over it, and the one behind fades away.
          </p>
        </FadeRise>

        <div className="relative">
          {facilities.map((item, index) => (
            <StackFacilityCard
              key={item.title}
              item={item}
              index={index}
              total={facilities.length}
              cardRef={cardRefs[index]}
              nextRef={cardRefs[index + 1]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
