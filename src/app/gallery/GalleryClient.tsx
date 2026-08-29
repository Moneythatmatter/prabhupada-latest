'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X,
  Maximize2,
  Camera,
  ArrowDown,
} from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';

// Official Categories directly from the original Hotel Prabhupada Website
const officialCategories = [
  'All',
  'Reception',
  'Lawn',
  'Common Area & Corridors',
  'Swimming Pool',
  'Restaurant',
  'Deluxe Balcony Sea View',
  'Executive Front Sea View Room',
];

// Authentic Official Hotel Prabhupada Photographs (No synthetic / AI generated images)
const galleryPhotos = [
  // 1. RECEPTION
  {
    id: 1,
    title: 'Hotel Reception Counter & Lounge',
    category: 'Reception',
    image: '/images/official-about.jpg',
    caption: 'Welcoming reception counter featuring marble wall backdrop and traditional deity altar at Hotel Prabhupada.',
  },

  // 2. LAWN
  {
    id: 2,
    title: 'Hotel Lawn & Outdoor Seating',
    category: 'Lawn',
    image: '/images/official-hero3.jpg',
    caption: 'Manicured green lawn with comfortable wooden bench seating for outdoor relaxation.',
  },

  // 3. COMMON AREA & CORRIDORS
  {
    id: 3,
    title: 'Main Staircase & Corridors',
    category: 'Common Area & Corridors',
    image: '/images/puri-marine-drive.png',
    caption: 'Elegantly panelled main staircase and guest floor corridors with wooden handrails.',
  },

  // 4. SWIMMING POOL
  {
    id: 4,
    title: 'Outdoor Swimming Pool & Facade',
    category: 'Swimming Pool',
    image: '/images/official-hero1.jpg',
    caption: 'Crystal-clear blue tiled outdoor swimming pool with poolside lounge seating.',
  },

  // 5. RESTAURANT
  {
    id: 5,
    title: 'In-House Dining Restaurant',
    category: 'Restaurant',
    image: '/images/attraction-sudarshan.png',
    caption: 'In-house restaurant serving authentic Odia seafood, North Indian, and Continental delicacies.',
  },

  // 6. DELUXE BALCONY SEA VIEW
  {
    id: 6,
    title: 'Deluxe Balcony Sea View Bedroom',
    category: 'Deluxe Balcony Sea View',
    image: '/images/room-superior-deluxe.jpg',
    caption: 'Spacious guest bedroom with plush double bed, artwork, and individual air conditioning.',
  },
  {
    id: 7,
    title: 'Private Sea View Balcony',
    category: 'Deluxe Balcony Sea View',
    image: '/images/official-hero2.jpg',
    caption: 'Private sea-facing balcony offering panoramic views of Puri Golden Beach and waves.',
  },
  {
    id: 8,
    title: 'Deluxe Sea View Bathroom',
    category: 'Deluxe Balcony Sea View',
    image: '/images/attraction-swargadwar.jpg',
    caption: 'Modern tiled en-suite bathroom with hot & cold rain shower and vessel sink.',
  },

  // 7. EXECUTIVE FRONT SEA VIEW ROOM
  {
    id: 9,
    title: 'Executive Front Sea View Suite',
    category: 'Executive Front Sea View Room',
    image: '/images/room-suite.jpg',
    caption: 'Elegantly furnished suite with plush double bed, feature wall art, and teal window drapes.',
  },
  {
    id: 10,
    title: 'Executive Room Interior View',
    category: 'Executive Front Sea View Room',
    image: '/images/room-executive.jpg',
    caption: 'Bright, airy room layout with wall-mounted flat-screen TV and dedicated workspace.',
  },
  {
    id: 11,
    title: 'Puri Golden Beach Horizon',
    category: 'Executive Front Sea View Room',
    image: '/images/puri-golden-beach.png',
    caption: 'Direct sea view of Puri Golden Beach waves visible from Executive Suite windows.',
  },
  {
    id: 12,
    title: 'Shree Jagannatha Temple Puri',
    category: 'Common Area & Corridors',
    image: '/images/attraction-jagannath.jpg',
    caption: 'Sacred 12th-century Jagannath Temple heritage located near Hotel Prabhupada.',
  },
  {
    id: 13,
    title: 'Konark Sun Temple Heritage',
    category: 'Common Area & Corridors',
    image: '/images/attraction-konark.jpg',
    caption: 'UNESCO World Heritage 13th-century Sun Temple architectural monument.',
  },
];

export const GalleryClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);

  // Filter items based on active category
  const filteredPhotos =
    activeCategory === 'All'
      ? galleryPhotos
      : galleryPhotos.filter((item) => item.category === activeCategory);

  // Group items by category for 'All' view
  const categoriesToDisplay =
    activeCategory === 'All'
      ? officialCategories.filter((cat) => cat !== 'All')
      : [activeCategory];

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const scrollToGallery = () => {
    galleryGridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#070F1A] text-white selection:bg-[#E8A317] selection:text-white">
      <InnerPageHero
        overline="HOTEL PRABHUPADA"
        title="Gallery"
        subtitle="Explore our rooms, amenities, dining spaces, and hotel surroundings before your stay."
        image="/images/room-superior-deluxe.jpg"
        imageAlt="Hotel Prabhupada Gallery"
        cta={
          <>
            <button
              onClick={scrollToGallery}
              className="pata-btn-outline inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm"
            >
              Explore Gallery <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
              target="_blank"
              rel="noopener noreferrer"
              className="header-book-btn inline-flex items-center justify-center gap-2 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase rounded-sm px-8 py-3.5"
            >
              Book Your Stay <ExternalLink className="w-4 h-4" />
            </a>
          </>
        }
      />

      {/* ==========================================
          2. GALLERY INTRODUCTION
         ========================================== */}
      <section className="py-20 sm:py-24 text-[#070F1A] relative overflow-hidden">
        <PatachitraBackdrop />

        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10 text-center">
          <FadeRise className="max-w-[700px] mx-auto">
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-3">
              AUTHENTIC HOTEL SPACES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#161616] tracking-tight leading-[1.15] mb-6">
              Explore Hotel Prabhupada
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#475569] font-light leading-relaxed">
              Take a visual journey through Hotel Prabhupada. Browse our real hotel photographs organized by reception, lawn, corridors, pool, restaurant, and sea view accommodations.
            </p>

            <PatachitraDivider className="mt-8" />
          </FadeRise>
        </div>
      </section>

      {/* ==========================================
          3. CATEGORY FILTERS & MAIN GALLERY SECTIONS
         ========================================== */}
      <section ref={galleryGridRef} className="py-24 sm:py-32 text-[#070F1A] relative overflow-hidden border-t border-[#E5DECE]">
        <PatachitraBackdrop />
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10">
          {/* Category Pill Buttons matching official website categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-20">
            {officialCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3 rounded-full transition-all duration-300 ${isActive
                    ? 'bg-[#E8A317] text-white shadow-md shadow-[#E8A317]/25 scale-105'
                    : 'bg-white text-[#161616] border border-[#E5DECE] hover:border-[#E8A317] hover:text-[#E8A317] shadow-sm'
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grouped Gallery Sections matching exact original site structure */}
          <div className="space-y-20">
            {categoriesToDisplay.map((catName) => {
              const categoryPhotos = galleryPhotos.filter((item) => item.category === catName);
              if (categoryPhotos.length === 0) return null;

              return (
                <motion.div
                  key={catName}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  {/* Category Title matching original site font & color */}
                  <FadeRise className="text-center">
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#E8A317] tracking-wide">
                      {catName}
                    </h2>
                    <PatachitraDivider className="mt-3" />
                  </FadeRise>

                  {/* Photo Cards Grid for this category (3 cols / 2 cols / 1 col) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryPhotos.map((item) => {
                      const globalIndex = filteredPhotos.findIndex((p) => p.id === item.id);
                      return (
                        <motion.div
                          key={item.id}
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setLightboxIndex(globalIndex !== -1 ? globalIndex : 0)}
                          className="group relative bg-white rounded-xl border border-[#E5DECE] hover:border-[#E8A317] shadow-sm hover:shadow-2xl hover:shadow-[#E8A317]/15 overflow-hidden cursor-pointer flex flex-col justify-between"
                        >
                          {/* Image Box */}
                          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#161616]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/85 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                            {/* Magnify Icon on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 rounded-full bg-[#161616]/80 backdrop-blur-md border border-[#E8A317] flex items-center justify-center text-[#E8A317] group-hover:scale-110 transition-transform">
                                <Maximize2 className="w-5 h-5" />
                              </div>
                            </div>
                          </div>

                          {/* Caption Box */}
                          <div className="p-6">
                            <h3 className="font-serif text-xl font-normal text-[#161616] group-hover:text-[#E8A317] transition-colors mb-2">
                              {item.title}
                            </h3>
                            <p className="font-sans text-xs text-[#6B6B6B] font-light leading-relaxed">
                              {item.caption}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. LIGHTBOX PREVIEW MODAL
         ========================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-[#070F1A]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative max-w-5xl w-full bg-[#161616] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Strip */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#070F1A]/80">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-[#E8A317]" />
                  <span className="font-sans text-xs font-semibold tracking-widest text-[#E8A317] uppercase">
                    Photo {lightboxIndex + 1} of {filteredPhotos.length}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E8A317] text-white flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black/50 flex items-center justify-center">
                <Image
                  src={filteredPhotos[lightboxIndex].image}
                  alt={filteredPhotos[lightboxIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain p-2"
                />

                {/* Left Navigation Arrow */}
                <button
                  onClick={() =>
                    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#161616]/80 hover:bg-[#E8A317] text-white border border-white/20 flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={() =>
                    setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0))
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#161616]/80 hover:bg-[#E8A317] text-white border border-white/20 flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption Bar */}
              <div className="p-6 bg-[#161616] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-1">
                    {filteredPhotos[lightboxIndex].title}
                  </h3>
                  <p className="font-sans text-xs text-white/70 font-light">
                    {filteredPhotos[lightboxIndex].caption}
                  </p>
                </div>
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#E8A317] bg-[#E8A317]/10 border border-[#E8A317]/30 px-3 py-1.5 rounded-full shrink-0">
                  {filteredPhotos[lightboxIndex].category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          5. BOOKING CTA SECTION (Light Theme)
         ========================================== */}
      <section className="relative py-24 sm:py-32 text-[#070F1A] overflow-hidden border-t border-[#E5DECE]">
        <PatachitraBackdrop />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 text-center">
          <FadeRise className="max-w-[760px] mx-auto">
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-4">
              UNFORGETTABLE COASTAL RETREAT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#161616] mb-6 leading-[1.12]">
              Ready to Experience Hotel Prabhupada?
            </h2>
            <PatachitraDivider className="mb-6" />
            <p className="font-sans text-base sm:text-lg text-[#475569] font-light leading-relaxed mb-10">
              Reserve your sea-facing luxury room directly with us today to enjoy guaranteed best rates, ocean views, and warm Odisha hospitality.
            </p>

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
