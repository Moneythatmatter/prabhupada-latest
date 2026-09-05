"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, ShieldCheck, Clock, Utensils } from "lucide-react";
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from "@/components/patachitra/PatachitraMotifs";

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [60, -60]), {
    stiffness: 80,
    damping: 28,
  });
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), {
    stiffness: 90,
    damping: 28,
  });
  const badgeY = useSpring(useTransform(scrollYProgress, [0, 1], [-16, 28]), {
    stiffness: 85,
    damping: 26,
  });

  const highlightCards = [
    {
      icon: MapPin,
      title: "Best Location",
      description:
        "Nestled in the heart of Puri, Odisha, our hotel boasts the best location, offering easy access to top attractions, Swargadwar beach, and scenic ocean views, ensuring an unforgettable stay for our guests.",
    },
    {
      icon: ShieldCheck,
      title: "Best Rate Guarantee",
      description:
        "Book directly with us and enjoy our Best Rate Guarantee, ensuring you receive the lowest available rates for your stay.",
    },
    {
      icon: Clock,
      title: "Reservations 24/7",
      description:
        "Reservations available round-the-clock, ensuring seamless booking convenience for our guests, anytime, anywhere.",
    },
    {
      icon: Utensils,
      title: "Complimentary Breakfast",
      description:
        "Enjoy a complimentary breakfast buffet featuring a delicious array of options during your stay at our hotel.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-36 text-[#1E293B] relative overflow-hidden"
    >
      <PatachitraBackdrop />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-center mb-14 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[280px] sm:h-[480px] md:h-[540px] w-full group overflow-hidden rounded-sm">
              <motion.div
                className="absolute inset-[-14%] will-change-transform"
                style={{ y: imageY }}
              >
                <Image
                  src="/images/official-about.webp"
                  alt="Hotel Prabhupada Exterior Ocean View Building Puri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ y: badgeY }}
              className="absolute -bottom-4 right-3 sm:-bottom-6 sm:right-6 bg-[#0C1827] text-white p-4 sm:p-7 rounded-sm shadow-2xl max-w-[200px] sm:max-w-[260px] border border-[#C5A059]/80 z-20 will-change-transform"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B1E1E] via-[#C5A059] to-[#8B1E1E]" />
              <span className="block font-serif text-xl sm:text-3xl font-normal text-[#C5A059] mb-1">
                Puri, Odisha
              </span>
              <p className="font-sans text-[10px] sm:text-[11px] font-semibold text-white/80 tracking-[0.16em] sm:tracking-[0.2em] uppercase">
                Hotel Prabhupada
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 will-change-transform pt-4 sm:pt-0 text-center lg:text-left"
            style={{ y: textY }}
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#8B1E1E] mb-3 sm:mb-4">
              Coastal Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1827] tracking-tight leading-[1.15] mb-3 sm:mb-4">
              About Hotel Prabhupada
            </h2>
            <PatachitraDivider className="mb-6 sm:mb-8" />

            <div className="max-w-xl mx-auto lg:mx-0 space-y-4 sm:space-y-6 font-sans text-sm sm:text-base md:text-lg text-[#64748B] font-light leading-relaxed mb-8 sm:mb-10 text-left">
              <p>
                Welcome to Hotel Prabhupada, a premier destination for comfort
                and style in Puri, Odisha — where costal elegance meets
                Divinity. Our hotel offers a blend of elegance and convenience,
                featuring a variety of rooms and suites designed to provide a
                restful and enjoyable stay. Each room is equipped with modern
                amenities to ensure your comfort and satisfaction.
              </p>
              <p className="hidden sm:block">
                Ideally situated in Puri, Odisha, Hotel Prabhupada offers easy
                access to the city&apos;s attractions, business centers, and
                entertainment venues. Whether you are traveling for business or
                pleasure, our location is perfect for exploring. Our dedicated
                staff is committed to providing exceptional service and ensuring
                that every guest has a memorable stay.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/about"
                className="pata-btn inline-flex items-center justify-center text-white font-sans text-xs font-semibold tracking-[0.14em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Discover More &rarr;
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="pt-10 sm:pt-16 border-t border-[#8B1E1E]/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {highlightCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white p-5 sm:p-8 rounded-sm border border-[#E5DECE] border-t-[3px] border-t-[#8B1E1E] hover:border-[#C5A059] hover:border-t-[#C0392B] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto rounded-sm bg-[#F8F0DC] group-hover:bg-[#0C1827] flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300 border border-[#C5A059]/30">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#C0392B] group-hover:text-[#C5A059] transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C1827] mb-2 sm:mb-3 text-center">
                      {card.title}
                    </h3>
                    <p className="font-sans text-sm text-[#64748B] font-light leading-relaxed text-center">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
