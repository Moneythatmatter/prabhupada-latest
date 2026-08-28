'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeRise } from '@/hooks/useParallax';
import { PatachitraDivider } from '@/components/patachitra/PatachitraMotifs';

type LegalPageShellProps = {
  title: string;
  breadcrumb: string;
  subtitle?: string;
  /** Pass a rendered element, e.g. `<HelpCircle className="w-6 h-6" />` — not the component type */
  icon: React.ReactNode;
  children: React.ReactNode;
};

/** Shared shell for FAQ + policy pages — navy theme + entrance motion */
export function LegalPageShell({
  title,
  breadcrumb,
  subtitle = 'Hotel Prabhupada, Puri, Odisha',
  icon,
  children,
}: LegalPageShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#070F1A] text-white min-h-screen pt-32 sm:pt-36 md:pt-44 pb-20 sm:pb-24 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-[-8%] w-[340px] h-[340px] rounded-full bg-[#C5A059]/08 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-10%] w-[300px] h-[300px] rounded-full bg-[#C0392B]/06 blur-3xl"
      />

      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 relative z-10">
        <FadeRise>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#E8A317] uppercase tracking-[0.18em] mb-5">
            <Link href="/" className="hover:text-[#C5A059] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/35" />
            <span className="text-white/70">{breadcrumb}</span>
          </div>
        </FadeRise>

        <FadeRise delay={0.08} className="flex items-center gap-4 mb-3 sm:mb-4">
          <div className="w-12 h-12 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/35 flex items-center justify-center text-[#E8A317]">
            {icon}
          </div>
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
              {title}
            </h1>
            <p className="font-sans text-xs text-white/55 font-light mt-1">{subtitle}</p>
          </div>
        </FadeRise>

        <FadeRise delay={0.12}>
          <PatachitraDivider light className="mb-8 sm:mb-10 !mx-0" />
        </FadeRise>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
