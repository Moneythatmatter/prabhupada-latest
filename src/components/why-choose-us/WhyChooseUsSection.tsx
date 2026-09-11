"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Landmark, Compass, PawPrint, Droplets } from "lucide-react";
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from "@/components/patachitra/PatachitraMotifs";
import { FadeRise } from "@/hooks/useParallax";

interface WhyChooseItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Landmark,
    title: "Temple Darshan Assistance",
    description:
      "Thoughtful assistance with temple darshan arrangements, making your spiritual visit more seamless.",
  },
  {
    icon: Compass,
    title: "Travel Assistance",
    description:
      "From local guidance to travel arrangements, we are here to make exploring Puri easier.",
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly Stay",
    description:
      "Because your four-legged companions deserve to be part of the journey too.",
  },
  {
    icon: Droplets,
    title: "Complimentary Steam",
    description:
      "Unwind and refresh with a complimentary steam experience after a day in Puri.",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-16 sm:py-24 md:py-32 text-[#1E293B] relative overflow-hidden bg-[#FAF8F5]/60 border-t border-[#E5DECE]"
    >
      <PatachitraBackdrop />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <FadeRise className="text-center max-w-[760px] mx-auto mb-12 sm:mb-20">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.28em] uppercase text-[#8B1E1E] mb-2 sm:mb-3">
            Thoughtful Hospitality & Comfort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1827] tracking-tight leading-[1.15]">
            Why Choose Us
          </h2>
          <PatachitraDivider className="mt-4 sm:mt-6" />
        </FadeRise>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white p-6 sm:p-8 rounded-sm border border-[#E5DECE] border-t-[3px] border-t-[#8B1E1E] hover:border-[#C5A059] hover:border-t-[#C0392B] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-[#F8F0DC] group-hover:bg-[#0C1827] flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 border border-[#C5A059]/30">
                    <IconComponent className="w-6 h-6 text-[#C0392B] group-hover:text-[#C5A059] transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0C1827] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
