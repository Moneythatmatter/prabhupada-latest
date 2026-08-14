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
  number: string;
};

const facilities: Facility[] = [
  {
    title: 'Swimming Pool',
    description:
      'Refresh in our outdoor pool after a day by the Puri coast — blue water, open sky, and easy poolside lounging.',
    icon: Waves,
    image: '/images/official-hero1.jpg',
    number: '01',
  },
  {
    title: 'Conference Hall',
    description:
      'A well-equipped space for meetings, celebrations, and gatherings — ready for business or family occasions.',
    icon: Presentation,
    image: '/images/about-hotel.png',
    number: '02',
  },
  {
    title: 'Guest Lounge',
    description:
      'A calm shared lounge to relax, connect, and unwind between temple visits and beach walks.',
    icon: Sofa,
    image: '/images/official-about.jpg',
    number: '03',
  },
  {
    title: 'Spa',
    description:
      'Rejuvenating treatments for restful wellness during your stay — unwind after a day of exploring Puri.',
    icon: Flower2,
    image: '/images/room-suite.jpg',
    number: '04',
  },
  {
    title: 'Restaurant',
    description:
      'In-house dining with Odia flavours and multi-cuisine options, served in a warm, welcoming setting.',
    icon: UtensilsCrossed,
    image: '/images/attraction-sudarshan.png',
    number: '05',
  },
  {
    title: 'Lawn',
    description:
      'Open green lawn for leisure, photos, and outdoor moments — quiet greenery on New Marine Drive.',
    icon: Trees,
    image: '/images/official-hero3.jpg',
    number: '06',
  },
  {
    title: 'Elevator',
    description:
      'Convenient lift access for easy movement across floors — comfort from lobby to room.',
    icon: ArrowUpDown,
    image: '/images/puri-marine-drive.png',
    number: '07',
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
    offset: ['start end', 'start 22%'],
  });

  const rawOpacity: MotionValue<number> = useTransform(
    coverProgress,
    [0, 0.45, 0.85, 1],
    reduceMotion || isLast ? [1, 1, 1, 1] : [1, 0.85, 0.2, 0]
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
      className="sticky top-[5.5rem] sm:top-24 mb-[32vh] sm:mb-[40vh] md:mb-[48vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{
          opacity,
          scale,
          transformOrigin: 'center top',
        }}
        className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-[#E5DECE] bg-[#FBF8F1] shadow-[0_18px_50px_rgba(12,24,39,0.14)] will-change-transform"
      >
        <div
          className={`lg:col-span-7 relative min-h-[220px] sm:min-h-[300px] lg:min-h-[360px] ${
            reverse ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <ParallaxImage
            src={item.image}
            alt={item.title}
            sizes="(max-width: 1024px) 100vw, 60vw"
            distance={36}
            className="absolute inset-0"
            imageClassName="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0C1827]/35 via-transparent to-transparent pointer-events-none"
          />
          <span
            className={`absolute top-4 sm:top-6 font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-white/30 leading-none ${
              reverse ? 'right-5 sm:right-8' : 'left-5 sm:left-8'
            }`}
          >
            {item.number}
          </span>
          <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-sans text-[10px] tracking-[0.2em] uppercase text-white/80">
            {index + 1} / {total}
          </span>
        </div>

        <div
          className={`lg:col-span-5 flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-11 lg:px-12 bg-[#FBF8F1] ${
            reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="mb-4 sm:mb-5 flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-[#F8F0DC] border border-[#C5A059]/40 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#C0392B]" />
            </div>
            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8B1E1E]">
              Facility {item.number}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-[2.1rem] font-normal text-[#0C1827] tracking-tight leading-tight mb-3 sm:mb-4">
            {item.title}
          </h3>
          <div className="w-12 h-px bg-gradient-to-r from-[#C5A059] to-transparent mb-4 sm:mb-5" />
          <p className="font-sans text-sm sm:text-base text-[#64748B] font-light leading-relaxed max-w-md">
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
      className="py-14 sm:py-20 md:py-28 text-[#1E293B] relative overflow-x-clip border-b border-[#8B1E1E]/10"
    >
      <PatachitraBackdrop />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-24 -left-28 w-[360px] h-[360px] rounded-full bg-[#C5A059]/12 blur-3xl will-change-transform"
        style={{ y: blobY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-32 -right-24 w-[400px] h-[400px] rounded-full bg-[#C0392B]/08 blur-3xl will-change-transform"
        style={{ y: blobYAlt }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <FadeRise className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#8B1E1E] mb-2 sm:mb-3">
            Hotel Property Highlights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1827] tracking-tight leading-[1.12]">
            Facilities
          </h2>
          <PatachitraDivider className="mt-4 sm:mt-6" />
          <p className="mt-5 sm:mt-6 font-sans text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
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
          {/* Keeps sticky active long enough for the last card to fully cover the previous */}
          <div className="h-[45vh] sm:h-[55vh] pointer-events-none" aria-hidden />
        </div>
      </div>
    </section>
  );
};
