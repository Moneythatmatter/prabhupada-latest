'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wifi,
  Wind,
  Tv,
  ConciergeBell,
  Sparkles,
  Bath,
  ExternalLink,
  Info,
  X,
  Check,
  Camera,
} from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';

const roomsData = [
  {
    id: 'family-quad-sharing',
    title: 'Family Quad Sharing',
    badgeTitle: 'FAMILY QUAD SHARING',
    description:
      "At Hotel Prabhupada, we pride ourselves on offering a home away from home. Our Family Quad Sharing are thoughtfully designed to meet your needs, whether you're visiting for business or pleasure. Each room comes with top-tier amenities, including a comfortable bed, an en-suite bathroom, and a well-lit desk area. Enjoy 24-hour room service and personalized attention for a seamless stay.",
    image: '/images/roomImage.png',
    bookingUrl:
      'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
    features: ['Quad Sharing Setup', 'En-Suite Bathroom', '24-Hour Room Service', 'Well-Lit Desk Area', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'executive-front-sea',
    title: 'Executive Front Sea Facing',
    badgeTitle: 'EXECUTIVE FRONT SEA FACING',
    description:
      'Designed as a sanctuary of peace and comfort, our Executive Front Sea Facing rooms feature elegant interiors, plush furnishings, and modern technology. Enjoy direct ocean views and true Odia hospitality for both short and extended stays.',
    image: '/images/hero2.png',
    bookingUrl:
      'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
    features: ['Direct Ocean View', 'Plush Furnishings', 'Air Conditioning', 'Free High-Speed Wi-Fi', 'In-Room Entertainment'],
  },
  {
    id: 'premier-room',
    title: 'Premier Room',
    badgeTitle: 'PREMIER ROOM',
    description:
      "Indulge in the luxury and comfort of Hotel Prabhupada's well-designed Premier Room. Offering a perfect blend of modern aesthetics and premium amenities, featuring high-speed internet, in-room entertainment, spacious en-suite bathrooms, and 24-hour concierge service for an elevated stay.",
    image: '/images/official-hero1.jpg',
    bookingUrl:
      'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
    features: ['Modern Aesthetics', 'High-Speed Internet', 'In-Room Entertainment', 'Spacious Bathroom', '24-Hour Concierge'],
  },
  {
    id: 'deluxe-balcony-sea-view',
    title: 'Deluxe With Balcony Sea View',
    badgeTitle: 'DELUXE WITH BALCONY SEA VIEW',
    description:
      'Thoughtfully designed for both business and leisure travelers, our Deluxe With Balcony Sea View rooms offer a comfortable bed, an en-suite bathroom, a well-lit desk area, and a private balcony with sea views. Enjoy 24-hour room service and personalized hospitality.',
    image: '/images/official-hero2.jpg',
    bookingUrl:
      'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
    features: ['Private Sea View Balcony', 'Well-Lit Desk Area', 'Air Conditioning', 'Free High-Speed Wi-Fi', '24-Hour Room Service'],
  },
  {
    id: 'superior-deluxe',
    title: 'Superior Deluxe Balcony Sea View',
    badgeTitle: 'SUPERIOR DELUXE BALCONY SEA VIEW',
    description:
      'Welcome to Hotel Prabhupada, where comfort meets luxury. Our Superior Deluxe Balcony Sea view offer the perfect blend of style and functionality, ideal for both business and leisure travelers. Each room features modern amenities, including high-speed Wi-Fi, flat-screen TVs, and plush bedding, ensuring a relaxing stay. Unwind in our elegantly furnished interiors, designed to provide you with the utmost comfort.',
    image: '/images/room-superior-deluxe.jpg',
    bookingUrl:
      'https://live.ipms247.com/booking/roomwisedata.php?hid=hotelprabhupada&roomtypeunkid=3636500000000000009',
    features: ['Sea View Balcony', 'Free High-Speed Wi-Fi', 'Air Conditioning', 'Flat-Screen TV', 'Daily Housekeeping'],
  },
  {
    id: 'suite-front',
    title: 'Suite Front Sea View',
    badgeTitle: 'SUITE FRONT SEA VIEW',
    description:
      'Discover the ultimate in relaxation at Hotel Prabhupada. Our Suite Front sea view offer a tranquil retreat. Each room is equipped with contemporary décor, premium bedding, and essential amenities such as complimentary Wi-Fi, in-room entertainment, and a dedicated workspace. Experience unparalleled hospitality and make your stay memorable with us.',
    image: '/images/room-suite.jpg',
    bookingUrl:
      'https://live.ipms247.com/booking/roomwisedata.php?hid=hotelprabhupada&roomtypeunkid=3636500000000000010',
    features: ['Front Ocean View', 'Spacious Seating Area', 'Free High-Speed Wi-Fi', 'Flat-Screen TV', 'En-Suite Bathroom'],
  },
];

const roomFeaturesList = [
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access.',
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Individual climate control.',
  },
  {
    icon: Tv,
    title: 'HD Television',
    description: 'Satellite & entertainment channels.',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Meticulous daily room cleaning.',
  },
  {
    icon: Bath,
    title: 'En-Suite Bathroom',
    description: 'Continuous hot & cold rain shower.',
  },
  {
    icon: ConciergeBell,
    title: '24×7 Room Service',
    description: 'Fresh multi-cuisine in-room dining.',
  },
];

export const RoomsClient: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<(typeof roomsData)[0] | null>(null);

  return (
    <>
      <InnerPageHero
        overline="Accommodations"
        title="Rooms & Suites"
        subtitle="Comfortable accommodations designed for a relaxing stay at Hotel Prabhupada."
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Hotel Prabhupada Luxury Rooms & Suites"
      />

      {/* 2. Room Listing Showcase */}
      <section className="py-28 lg:py-32 text-[#070F1A] relative overflow-hidden">
        <PatachitraBackdrop />
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          <FadeRise className="text-center max-w-[700px] mx-auto mb-20">
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-3">
              Luxury Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616] tracking-tight leading-[1.15]">
              Choose Your Stay
            </h2>
            <PatachitraDivider className="mt-6" />
          </FadeRise>

          {/* 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {roomsData.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[20px] border border-[#E5DECE] overflow-hidden hover:border-[#E8A317] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between h-full group"
              >
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Image Container with Badge Overlay */}
                    <div className="relative h-[250px] sm:h-[280px] w-full overflow-hidden bg-[#161616]">
                      {room.image ? (
                        <>
                          <ParallaxImage
                            src={room.image}
                            alt={room.title}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="absolute inset-0"
                            imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            distance={36}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-transparent to-transparent pointer-events-none" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-[#161616] flex flex-col items-center justify-center p-6 text-center">
                          <div className="w-12 h-12 rounded-full bg-[#E8A317]/10 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] mb-2.5 group-hover:scale-110 transition-transform duration-300">
                            <Camera className="w-5 h-5" />
                          </div>
                          <span className="font-serif text-sm font-normal text-white/90 tracking-wide mb-1">
                            Official Photo Pending
                          </span>
                          <span className="font-sans text-[10px] text-[#E8A317] font-light uppercase tracking-[0.18em]">
                            Image Upload Pending
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-0 inset-x-0 z-10 p-3">
                        <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-[#070F1A]/75 via-[#0C1827]/85 to-[#070F1A]/75 backdrop-blur-md px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
                          <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#E8A317]/70 to-transparent" />
                          <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8A317]/35 to-transparent" />
                          <span className="relative font-sans text-[11px] font-semibold tracking-[0.22em] text-[#F0D78C] uppercase block text-center truncate">
                            {room.badgeTitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 sm:p-7 pb-4">
                      <h3 className="font-serif text-2xl font-normal text-[#161616] mb-3 group-hover:text-[#E8A317] transition-colors leading-tight">
                        {room.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed mb-5 line-clamp-3">
                        {room.description}
                      </p>

                      {/* Room Feature Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {room.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider text-[#161616] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E5DECE]"
                          >
                            <Check className="w-3 h-3 text-[#E8A317]" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions - Fixed at Bottom */}
                  <div className="p-6 sm:p-7 pt-2 mt-auto flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="pata-btn w-full sm:w-1/2 inline-flex items-center justify-center gap-2 text-white font-sans text-xs font-semibold tracking-[0.14em] uppercase px-5 py-3.5 rounded-sm"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                    <a
                      href={room.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pata-btn-outline w-full sm:w-1/2 inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.14em] uppercase px-5 py-3.5 rounded-sm transition-all duration-300"
                    >
                      <span>Book Now</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. In-Room Features Section (Minimalist Luxury Design) */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#E5DECE] text-[#070F1A] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
          <FadeRise className="text-center max-w-[700px] mx-auto mb-14 lg:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616] tracking-tight leading-[1.15]">
              In-Room Amenities
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6B6B6B] font-light mt-3">
              Thoughtfully curated comforts for a relaxing stay.
            </p>
            <PatachitraDivider className="mt-5" />
          </FadeRise>

          {/* 3 Cards per row desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {roomFeaturesList.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-5 sm:p-6 rounded-[18px] border border-[#E5DECE] hover:border-[#E8A317] shadow-sm hover:shadow-xl hover:shadow-[#E8A317]/10 transition-all duration-300 hover:-translate-y-[6px] flex flex-col justify-center h-full group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[#F8F0DC] group-hover:bg-[#E8A317] border border-[#E5DECE]/60 flex items-center justify-center mb-4 transition-colors duration-300 shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8A317] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#161616] mb-1 group-hover:text-[#E8A317] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] font-light leading-snug line-clamp-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 sm:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRoom(null)}
              className="absolute inset-0 bg-[#070F1A]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[24px] max-w-[700px] w-full p-8 sm:p-10 shadow-2xl border border-[#E8A317]/30 z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#161616] hover:bg-[#161616] hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A317] mb-2">
                Room Overview
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#161616] mb-4">
                {selectedRoom.title}
              </h3>

              <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 border border-[#E5DECE] bg-[#161616]">
                {selectedRoom.image ? (
                  <Image
                    src={selectedRoom.image}
                    alt={selectedRoom.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#161616] flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8A317]/10 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] mb-2.5">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-sm font-normal text-white/90 tracking-wide mb-1">
                      Official Photo Pending
                    </span>
                    <span className="font-sans text-[10px] text-[#E8A317] font-light uppercase tracking-[0.18em]">
                      Image Upload Pending
                    </span>
                  </div>
                )}
              </div>

              <p className="font-sans text-sm text-[#6B6B6B] font-light leading-relaxed mb-6">
                {selectedRoom.description}
              </p>

              <div className="mb-8">
                <h4 className="font-serif text-lg text-[#161616] mb-3">Highlights & Included Amenities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedRoom.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-[#161616]">
                      <div className="w-4 h-4 rounded-full bg-[#E8A317]/20 flex items-center justify-center text-[#E8A317]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="pata-btn-outline px-6 py-3 rounded-sm text-xs font-semibold tracking-wider uppercase"
                >
                  Close
                </button>
                <a
                  href={selectedRoom.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-book-btn inline-flex items-center justify-center px-8 py-3 rounded-sm text-xs font-semibold tracking-wider uppercase"
                >
                  Book Now &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
