'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wifi,
  ConciergeBell,
  Sparkles,
  Car,
  Bath,
  Wind,
  Bed,
  Tv,
  Check,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';

// The 8 Official Hotel Prabhupada Amenities
const officialAmenities = [
  {
    number: '01',
    title: 'FREE WIFI',
    icon: Wifi,
    description:
      'High-speed optical fiber wireless internet across all guest rooms, ocean balconies, and public lounges.',
  },
  {
    number: '02',
    title: 'ROOM SERVICE',
    icon: ConciergeBell,
    description:
      'Freshly prepared local Odia seafood, North Indian classics, and Continental meals delivered to your room.',
  },
  {
    number: '03',
    title: 'DAILY HOUSEKEEPING',
    icon: Sparkles,
    description:
      'Meticulous daily room sanitization, crisp cotton linen refresh, and premium luxury bath essentials.',
  },
  {
    number: '04',
    title: 'FREE PARKING',
    icon: Car,
    description:
      'Spacious secure parking facility available free of charge for guest vehicles.',
  },

  {
    number: '05',
    title: 'AIR CONDITIONER',
    icon: Wind,
    description:
      'Whisper-quiet split AC with individual temperature controls in every room for custom comfort.',
  },
  {
    number: '06',
    title: 'KING SIZED BEDS',
    icon: Bed,
    description:
      'Plush pillow-top ergonomic mattresses wrapped in crisp premium white cotton linens.',
  },
  {
    number: '07',
    title: 'HD TV',
    icon: Tv,
    description:
      'High-definition flat screen satellite television preloaded with entertainment and sports channels.',
  },
];

// Guest Comfort Highlights
const comfortHighlights = [
  {
    title: 'Comfortable & Spacious Rooms',
    desc: 'Ergonomically designed room layouts featuring fresh coastal sea breeze and serene decor.',
  },
  {
    title: 'Clean & Hygienic Standards',
    desc: 'Comprehensive sanitization protocols following luxury international hospitality norms.',
  },
  {
    title: 'Attentive & Friendly Staff',
    desc: '24/7 dedicated hospitality staff committed to making your Puri stay memorable.',
  },
  {
    title: 'Prime Beachfront Location',
    desc: 'Situated right on New Marine Drive Road, just steps away from Puri’s Golden Beach.',
  },
  {
    title: 'Fast & Reliable Wi-Fi',
    desc: 'High-speed optical fiber internet ensuring continuous connectivity for work or play.',
  },
];

export const AmenitiesClient: React.FC = () => {
  return (
    <div className="bg-[#070F1A] text-white selection:bg-[#E8A317] selection:text-white">
      <InnerPageHero
        overline="LUXURY EXPERIENCE"
        title="Our Amenities"
        subtitle="Every room is designed to provide comfort, convenience and relaxation during your stay at Hotel Prabhupada."
        image="/images/official-hero1.webp"
        imageAlt="Hotel Prabhupada Puri Luxury Room"
        cta={
          <a
            href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
            target="_blank"
            rel="noopener noreferrer"
            className="header-book-btn inline-flex items-center justify-center gap-2 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase rounded-sm px-8 py-3.5"
          >
            Book Your Stay <ExternalLink className="w-4 h-4" />
          </a>
        }
      />

      {/* ==========================================
          2. AMENITIES OVERVIEW & 8 CARDS GRID
         ========================================== */}
      <section className="py-24 md:py-32 text-[#070F1A] relative overflow-hidden">
        <PatachitraBackdrop />

        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10">
          <FadeRise className="text-center max-w-[700px] mx-auto mb-16">
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-3">
              HOTEL COMFORTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#161616] tracking-tight leading-[1.15]">
              Everything You Need for a Comfortable Stay
            </h2>
            <p className="font-sans text-base text-[#475569] font-light leading-relaxed mt-4">
              At Hotel Prabhupada, we combine traditional Odishan warmth with essential hotel comforts to make every guest feel relaxed and at home.
            </p>
            <PatachitraDivider className="mt-6" />
          </FadeRise>

          {/* 8 Official Feature Cards Grid (4 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {officialAmenities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-white p-8 rounded-sm border border-[#E5DECE] hover:border-[#E8A317] shadow-sm hover:shadow-2xl hover:shadow-[#E8A317]/10 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-between text-center min-h-[250px] group"
                >
                  {/* Micro Number Indicator */}
                  <span className="absolute top-4 right-5 font-serif text-xs font-light text-[#E8A317]/40 group-hover:text-[#E8A317] transition-colors">
                    {item.number}
                  </span>

                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-sm bg-[#FAF8F5] group-hover:bg-[#161616] border border-[#E5DECE]/60 group-hover:border-[#161616] flex items-center justify-center transition-all duration-400 shadow-sm group-hover:scale-110">
                    <IconComponent className="w-7 h-7 text-[#E8A317] transition-colors duration-400" />
                  </div>

                  {/* Amenity Title & Description */}
                  <div>
                    <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#161616] uppercase mt-6 group-hover:text-[#E8A317] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#6B6B6B] font-light leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Bottom Accent Line */}
                  <div className="w-0 group-hover:w-12 h-[2px] bg-[#E8A317] transition-all duration-300 mt-4 rounded-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. GUEST COMFORT SECTION (Split Layout)
         ========================================== */}
      <section className="py-24 sm:py-32 bg-[#070F1A] text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Hotel Lifestyle Image */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
                <ParallaxImage
                  src="/images/official-about.webp"
                  alt="Hotel Prabhupada Guest Comfort & View"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0"
                  imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  distance={48}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A]/80 via-transparent to-transparent" />

                {/* Overlapping Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-[#161616]/90 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center shrink-0 text-[#E8A317]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-normal text-white">Beachfront Tranquility</h4>
                    <p className="font-sans text-xs text-white/75 font-light">Experience scenic coastal sea breezes from your private balcony.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text & Bullet Points */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <FadeRise>
                <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-3">
                  WORLD-CLASS HOSPITALITY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-4">
                  Designed Around Your Comfort
                </h2>
                <PatachitraDivider light className="mb-6" />
                <p className="font-sans text-base text-white/80 font-light leading-relaxed mb-8">
                  Every aspect of Hotel Prabhupada is thoughtfully crafted to offer you peace of mind. From hygiene standards to personalized assistance, we make sure your Puri getaway feels effortless and luxurious.
                </p>
              </FadeRise>

              {/* 5 Bullet Points */}
              <div className="space-y-4">
                {comfortHighlights.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#E8A317]/40 hover:bg-white/[0.06] transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#E8A317]/20 border border-[#E8A317]/50 flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5 group-hover:bg-[#E8A317] group-hover:text-white transition-all">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-white tracking-wide group-hover:text-[#E8A317] transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-white/70 font-light mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. CALL TO ACTION (CTA - Light Luxury Theme)
         ========================================== */}
      <section className="relative py-24 sm:py-32 text-[#070F1A] overflow-hidden border-t border-[#E5DECE]">
        <PatachitraBackdrop />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 text-center">
          <FadeRise className="max-w-[760px] mx-auto">
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-4">
              UNFORGETTABLE COASTAL RETREAT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#161616] mb-6 leading-[1.12]">
              Ready for Your Stay?
            </h2>
            <PatachitraDivider className="mb-6" />
            <p className="font-sans text-base sm:text-lg text-[#475569] font-light leading-relaxed mb-10">
              Immerse yourself in coastal luxury, sea views, and warm Odisha hospitality at Hotel Prabhupada. Book direct with us to secure guaranteed best rates and special inclusions.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
                target="_blank"
                rel="noopener noreferrer"
                className="header-book-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-sans text-xs sm:text-sm tracking-[0.16em] uppercase px-9 py-4 rounded-sm"
              >
                Book Now <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="pata-btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase px-9 py-4 rounded-sm transition-all duration-300"
              >
                Contact Us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeRise>
        </div>
      </section>
    </div>
  );
};
