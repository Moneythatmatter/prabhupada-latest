'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  ShieldCheck,
  Clock,
  Utensils,
  Phone,
  Mail,
  Navigation,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ParallaxImage } from '@/components/motion/ParallaxImage';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';

const whyChooseCards = [
  {
    icon: MapPin,
    title: 'Best Location',
    description:
      'Nestled in the heart of Puri, Odisha, our hotel boasts the best location, offering easy access to top attractions, Swargadwar beach, and scenic ocean views, ensuring an unforgettable stay for our guests.',
  },
  {
    icon: ShieldCheck,
    title: 'Best Rate Guarantee',
    description:
      'Book directly with us and enjoy our Best Rate Guarantee, ensuring you receive the lowest available rates for your stay.',
  },
  {
    icon: Clock,
    title: 'Reservations 24/7',
    description:
      'Reservations available round-the-clock, ensuring seamless booking convenience for our guests, anytime, anywhere.',
  },
  {
    icon: Utensils,
    title: 'Free Breakfast',
    description:
      'Enjoy a complimentary breakfast buffet featuring a delicious array of options during your stay at our hotel.',
  },
];

const attractionsData = [
  {
    title: 'Shree Jagannatha Temple Puri',
    description:
      'The world-famous sacred heritage temple located near Hotel Prabhupada in the heart of Puri.',
    image: '/images/attraction-jagannath.jpg',
    mapsUrl: 'https://maps.google.com/?q=Shree+Jagannath+Temple+Puri+Odisha',
  },
  {
    title: 'Swargadwar Sea Beach & Shopping',
    description:
      'Vibrant golden beach waves and famous coastal shopping markets within walking distance.',
    image: '/images/attraction-swargadwar.jpg',
    mapsUrl: 'https://maps.google.com/?q=Swargadwar+Beach+Puri+Odisha',
  },
  {
    title: 'Konark Sun Temple & Heritage',
    description:
      'Iconic 13th-century UNESCO World Heritage monument architectural wonder nearby.',
    image: '/images/attraction-konark.jpg',
    mapsUrl: 'https://maps.google.com/?q=Konark+Sun+Temple+Odisha',
  },
];

export const AboutClient: React.FC = () => {
  return (
    <>
      <InnerPageHero
        overline="Coastal Heritage"
        title="About Hotel Prabhupada"
        subtitle="Sea-facing hospitality in Puri, inspired by Odisha’s living Pattachitra tradition."
        image="/images/official-about.jpg"
        imageAlt="Hotel Prabhupada Puri Exterior View"
        cta={
          <a
            href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
            target="_blank"
            rel="noopener noreferrer"
            className="header-book-btn inline-flex items-center justify-center font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase rounded-sm px-8 py-3.5"
          >
            Book Your Stay
          </a>
        }
      />

      {/* 2. Authentic About Section */}
      <section className="py-20 sm:py-28 lg:py-32 text-[#070F1A] overflow-hidden relative">
        <PatachitraBackdrop />
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative h-[320px] sm:h-[520px] md:h-[580px] w-full rounded-sm overflow-hidden shadow-2xl group">
                <ParallaxImage
                  src="/images/official-about.jpg"
                  alt="Hotel Prabhupada Beach Front View Puri"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0"
                  imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  distance={48}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Floating Badge */}
              <div className="absolute -bottom-6 -right-2 md:right-8 bg-[#161616] text-white p-6 sm:p-7 rounded-[20px] shadow-2xl border border-[#E8A317]/40 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1 text-[#E8A317]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-serif text-2xl sm:text-3xl font-normal">
                    Puri, Odisha
                  </span>
                </div>
                <p className="font-sans text-[11px] font-semibold text-white/80 tracking-[0.2em] uppercase">
                  Hotel Prabhupada
                </p>
              </div>
            </motion.div>

            {/* Right: Exact Verbatim Original Content */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-4">
                Hospitality & Excellence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616] tracking-tight leading-[1.14] mb-8">
                Welcome to Hotel Prabhupada
              </h2>

              <div className="space-y-7 font-sans text-lg md:text-[19px] text-[#475569] font-light leading-relaxed">
                <p>
                  Welcome to Hotel Prabhupada, a premier destination for comfort and style in Puri, Odisha. Our hotel offers a blend of elegance and convenience, featuring a variety of rooms and suites designed to provide a restful and enjoyable stay. Each room is equipped with modern amenities to ensure your comfort and satisfaction.
                </p>
                <p>
                  Ideally situated in Puri, Odisha, Hotel Prabhupada offers easy access to the city’s attractions, business centers, and entertainment venues. Whether you are traveling for business or pleasure, our location is perfect for exploring the local area. Our dedicated staff is committed to providing exceptional service and ensuring that every guest has a memorable stay.
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-book-btn inline-flex items-center justify-center font-sans text-xs tracking-[0.16em] uppercase px-10 py-4 rounded-sm"
                >
                  Book Your Stay
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Authentic Features) */}
      <section className="py-28 lg:py-32 bg-white border-t border-[#E5DECE] text-[#070F1A]">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-3">
              Guest Value & Comfort
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616] tracking-tight leading-[1.15]">
              Why Choose Hotel Prabhupada
            </h2>
            <PatachitraDivider className="mt-4 sm:mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#FAF8F5] p-8 md:p-10 rounded-[20px] border border-[#E5DECE] hover:border-[#E8A317] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#E8A317]/10 group-hover:bg-[#161616] flex items-center justify-center mb-6 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-[#E8A317] transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-[#161616] mb-3">
                      {card.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6B6B6B] font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Authentic Nearby Attractions (With Explicit View on Maps Button) */}
      <section className="py-28 lg:py-32 bg-[#FAF8F5] border-t border-[#E5DECE] text-[#070F1A]">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-3">
              Explore Puri Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616] tracking-tight leading-[1.15]">
              Nearby Attractions
            </h2>
            <PatachitraDivider className="mt-4 sm:mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractionsData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[20px] border border-[#E5DECE] overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#E8A317] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/75 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-normal text-[#161616] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6B6B6B] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#E8A317] hover:text-[#161616] transition-colors"
                  >
                    <span>View on Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Authentic Contact Information Section */}
      <section className="py-28 lg:py-32 bg-white border-t border-[#E5DECE] text-[#070F1A]">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authentic Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#E8A317] mb-3">
                Reach Out To Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616] tracking-tight leading-[1.15] mb-8">
                Get in Touch with Hotel Prabhupada
              </h2>

              <div className="space-y-6 font-sans text-base text-[#475569] mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#161616] flex items-center justify-center shrink-0 border border-[#E8A317]/30">
                    <MapPin className="w-6 h-6 text-[#E8A317]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-1">
                      Address
                    </p>
                    <p className="text-[#161616] font-medium">
                      New Marine Drive Road, Swargadwar, Puri, Odisha 752001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#161616] flex items-center justify-center shrink-0 border border-[#E8A317]/30">
                    <Phone className="w-6 h-6 text-[#E8A317]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-1">
                      Phone
                    </p>
                    <p className="text-[#161616] font-medium">
                      +91 94370 23456 / +91 6752 231234
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#161616] flex items-center justify-center shrink-0 border border-[#E8A317]/30">
                    <Mail className="w-6 h-6 text-[#E8A317]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-1">
                      Email
                    </p>
                    <p className="text-[#161616] font-medium">
                      info@hotelprabhupada.com / booking@hotelprabhupada.com
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=Hotel+Prabhupada+Puri+Odisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#161616] hover:bg-[#E8A317] text-white font-sans text-xs font-semibold tracking-[0.16em] uppercase px-9 py-4.5 rounded-sm transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#E8A317]/25 hover:-translate-y-1"
                >
                  <Navigation className="w-4 h-4 text-[#E8A317]" />
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Right Column: Google Maps Location Frame */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative h-[420px] w-full rounded-[24px] overflow-hidden shadow-2xl border border-[#E5DECE] hover:border-[#E8A317] transition-colors">
                <iframe
                  title="Hotel Prabhupada Puri Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.193080766442!2d85.81938531538356!3d19.792582986681023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c43b0d000001%3A0x6b49911956c3cb!2sHotel%20Prabhupada!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.2] contrast-[1.05]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
