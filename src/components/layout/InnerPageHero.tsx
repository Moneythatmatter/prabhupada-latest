'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1] as const;

type InnerPageHeroProps = {
  title: string;
  overline?: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  cta?: React.ReactNode;
};

/** Shared inner-page hero — first-load stagger + scroll parallax */
export function InnerPageHero({
  title,
  overline,
  subtitle,
  image,
  imageAlt = '',
  cta,
}: InnerPageHeroProps) {
  const [ready, setReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), {
    stiffness: 80,
    damping: 30,
  });
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), {
    stiffness: 85,
    damping: 30,
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.35]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[460px] sm:min-h-[500px] md:min-h-[540px] w-full flex flex-col items-center justify-center bg-[#070F1A] overflow-hidden pt-32 sm:pt-36 md:pt-44 pb-14 sm:pb-16 md:pb-20"
    >
      <motion.div
        className="absolute inset-0 w-full h-[118%] -top-[9%] will-change-transform"
        style={{ y: bgY }}
        initial={reduceMotion ? false : { scale: 1.12, opacity: 0.45 }}
        animate={ready ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 1.6, ease: easeOut }}
      >
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#070F1A]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070F1A]/60 via-[#070F1A]/45 to-[#070F1A]/92 pointer-events-none" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center text-white max-w-[900px] mx-auto px-5 sm:px-8 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
        initial={reduceMotion ? false : 'hidden'}
        animate={ready ? 'show' : 'hidden'}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.12,
              delayChildren: reduceMotion ? 0 : 0.2,
            },
          },
        }}
      >
        {overline ? (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, letterSpacing: '0.4em' },
              show: {
                opacity: 1,
                y: 0,
                letterSpacing: '0.22em',
                transition: { duration: 0.85, ease: easeOut },
              },
            }}
            className="flex flex-col items-center mb-3 sm:mb-4"
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317]">
              {overline}
            </span>
            <motion.span
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                show: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.65, ease: easeOut },
                },
              }}
              className="mt-3 h-px w-12 origin-center bg-gradient-to-r from-transparent via-[#E8A317]/80 to-transparent"
            />
          </motion.div>
        ) : null}

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.95, ease: easeOut },
            },
          }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.15] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
        >
          {title}
        </motion.h1>

        {subtitle ? (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: easeOut },
              },
            }}
            className="mt-4 sm:mt-5 font-sans text-sm sm:text-lg font-light text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        ) : null}

        {cta ? (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 22, scale: 0.94 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: easeOut },
              },
            }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {cta}
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  );
}
