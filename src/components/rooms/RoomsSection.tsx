"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Camera } from "lucide-react";
import {
  PatachitraDivider,
  LotusMotif,
} from "@/components/patachitra/PatachitraMotifs";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { FadeRise } from "@/hooks/useParallax";

const featuredRooms = [
  {
    title: "Family Quad Sharing",
    badgeTitle: "FAMILY QUAD SHARING",
    description:
      "At Hotel Prabhupada, we pride ourselves in offering a home away from home. Our Family Quad Sharing are thoughtfully designed to meet your needs, whether you're visiting for business or pleasure. Each room comes with top-tier amenities, including a comfortable bed, an en-suite bathroom, and a well-lit desk area.",
    image: "/images/official-about.webp",
    bookingUrl: "https://live.ipms247.com/booking/book-rooms-hotelprabhupada",
    exploreUrl: "/rooms",
  },
  {
    title: "Executive Front Sea Facing",
    badgeTitle: "EXECUTIVE FRONT SEA FACING",
    description:
      "Designed as a sanctuary of peace and comfort, our Executive Front Sea Facing rooms feature elegant interiors, plush furnishings, and modern technology. Enjoy direct ocean views and true Odia hospitality for both short and extended stays.",
    image: "/images/room-executive.webp",
    bookingUrl: "https://live.ipms247.com/booking/book-rooms-hotelprabhupada",
    exploreUrl: "/rooms",
  },
  {
    title: "Superior Deluxe Balcony Sea View",
    badgeTitle: "SUPERIOR DELUXE BALCONY SEA VIEW",
    description:
      "Welcome to Hotel Prabhupada, where comfort meets luxury. Our Superior Deluxe Balcony Sea view offer the perfect blend of style and functionality, featuring high-speed Wi-Fi, flat-screen TVs, and plush bedding.",
    image: "/images/room-superior-deluxe.webp",
    bookingUrl:
      "https://live.ipms247.com/booking/roomwisedata.php?hid=hotelprabhupada&roomtypeunkid=3636500000000000009",
    exploreUrl: "/rooms",
  },
  {
    title: "Suite Front Sea View",
    badgeTitle: "SUITE FRONT SEA VIEW",
    description:
      "Discover the ultimate in relaxation at Hotel Prabhupada. Our Suite Front sea view offer a tranquil retreat with contemporary décor, premium bedding, and essential amenities.",
    image: "/images/room-suite.webp",
    bookingUrl:
      "https://live.ipms247.com/booking/roomwisedata.php?hid=hotelprabhupada&roomtypeunkid=3636500000000000010",
    exploreUrl: "/rooms",
  },
];

export const RoomsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [reduceMotion ? 0 : 50, reduceMotion ? 0 : -70],
    ),
    { stiffness: 65, damping: 28 },
  );
  const glowYAlt = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [reduceMotion ? 0 : 30, reduceMotion ? 0 : -40],
    ),
    { stiffness: 70, damping: 30 },
  );

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-36 bg-[#070F1A] text-white relative overflow-hidden"
    >
      {/* Gold corner ornaments — same asset, flipped per corner */}
      {(
        [
          {
            pos: "top-0 left-0",
            flip: "-scale-x-100",
            anchor: "object-top-right",
          },
          { pos: "top-0 right-0", flip: "", anchor: "object-top-right" },
          {
            pos: "bottom-0 left-0",
            flip: "-scale-x-100 -scale-y-100",
            anchor: "object-top-right",
          },
          {
            pos: "bottom-0 right-0",
            flip: "-scale-y-100",
            anchor: "object-top-right",
          },
        ] as const
      ).map(({ pos, flip, anchor }) => (
        <div
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute ${pos} z-0 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] ${flip}`}
        >
          <Image
            src="/images/rooms-corner-ornament-v2.webp"
            alt=""
            fill
            sizes="(max-width: 640px) 140px, (max-width: 768px) 200px, 260px"
            className={`object-contain ${anchor} opacity-40 sm:opacity-50`}
            unoptimized
          />
        </div>
      ))}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-[#C5A059]/08 blur-3xl will-change-transform z-0"
        style={{ y: glowY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-[#C0392B]/07 blur-3xl will-change-transform z-0"
        style={{ y: glowYAlt }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent z-0" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <FadeRise className="text-center max-w-[800px] mx-auto mb-10 sm:mb-20">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#E8A317] mb-2 sm:mb-3">
            Accommodations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.12]">
            Rooms & Suites
          </h2>
          <PatachitraDivider light className="mt-4 sm:mt-6" />
        </FadeRise>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              className="pata-card-dark relative rounded-sm overflow-hidden transition-shadow duration-500 hover:border-[#E8A317] hover:shadow-[0_24px_50px_rgba(192,57,43,0.2)] flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-[240px] sm:h-[340px] md:h-[400px] w-full overflow-hidden bg-[#070F1A]">
                  {room.image ? (
                    <>
                      <ParallaxImage
                        src={room.image}
                        alt={room.title}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="absolute inset-0"
                        imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        distance={56}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1827] via-[#0C1827]/20 to-transparent opacity-90" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[#070F1A] flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-3">
                        <Camera className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-base font-normal text-white/90 tracking-wide mb-1">
                        Official Photo Pending
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 inset-x-0 z-10 p-3 sm:p-5">
                    <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-[#070F1A]/75 via-[#0C1827]/85 to-[#070F1A]/75 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
                      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#E8A317]/70 to-transparent" />
                      <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8A317]/35 to-transparent" />
                      <span className="relative font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] sm:tracking-[0.28em] text-[#F0D78C] uppercase block text-center leading-snug">
                        {room.badgeTitle}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8 md:p-10 relative">
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <LotusMotif
                      size={18}
                      tone="gold"
                      className="opacity-80 shrink-0 mt-1 sm:mt-0"
                    />
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-white group-hover:text-[#E8A317] transition-colors">
                      {room.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {room.description}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-8 md:px-10 pb-5 sm:pb-8 md:pb-10 flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={room.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pata-btn w-full sm:flex-1 inline-flex items-center justify-center text-white font-sans text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm transition-all duration-300"
                >
                  Book Now &rarr;
                </a>
                <Link
                  href="/rooms"
                  className="pata-btn-outline w-full sm:flex-1 inline-flex items-center justify-center font-sans text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm transition-all duration-300"
                >
                  Explore Room
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeRise delay={0.1} className="text-center mt-10 sm:mt-20">
          <Link
            href="/rooms"
            className="pata-btn-outline inline-flex items-center justify-center font-sans text-xs font-semibold tracking-[0.16em] uppercase px-6 sm:px-10 py-3.5 sm:py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto max-w-sm"
          >
            View More Accommodations &rarr;
          </Link>
        </FadeRise>
      </div>
    </section>
  );
};
