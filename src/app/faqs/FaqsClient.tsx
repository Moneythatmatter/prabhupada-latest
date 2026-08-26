'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  BedDouble,
  Utensils,
  ShieldCheck,
  Compass,
  X,
  PhoneCall,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { LegalPageShell } from '@/components/layout/LegalPageShell';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string | React.ReactNode;
}

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'location', label: 'Location & Contact', icon: MapPin },
  { id: 'rooms', label: 'Rooms & Stays', icon: BedDouble },
  { id: 'dining', label: 'Dining & Restaurant', icon: Utensils },
  { id: 'amenities', label: 'Amenities & Pool', icon: Sparkles },
  { id: 'policies', label: 'Policies & Check-in', icon: ShieldCheck },
  { id: 'travel', label: 'Travel & Sightseeing', icon: Compass },
];

const FAQ_DATA: FaqItem[] = [
  // 1. Location & Contact
  {
    id: 'loc-1',
    category: 'location',
    question: 'Where is Hotel Prabhupada located?',
    answer: (
      <div className="space-y-2">
        <p>
          Hotel Prabhupada is located at{' '}
          <strong className="text-white font-medium">
            New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India
          </strong>
          .
        </p>
        <p>
          The hotel is situated right along the coastal stretch of Puri, providing peaceful surroundings,
          sea views, and convenient connectivity to the beach and main city attractions.
        </p>
      </div>
    ),
  },
  {
    id: 'loc-2',
    category: 'location',
    question: 'Is Hotel Prabhupada near the sea beach in Puri?',
    answer:
      'Yes, Hotel Prabhupada is located right along New Marine Drive Road near the sea beach. Guests can easily walk to the beach to enjoy the coastal atmosphere, sunrise, and ocean waves.',
  },
  {
    id: 'loc-3',
    category: 'location',
    question: 'How far is Hotel Prabhupada from Shree Jagannath Temple and Swargadwar?',
    answer:
      'Hotel Prabhupada is approximately 3.5 to 4.5 km from Shree Jagannath Temple and about 2 to 2.5 km from the lively Swargadwar market. Our 24/7 front desk and travel desk can easily arrange auto-rickshaws or private cabs for quick transfers.',
  },
  {
    id: 'loc-4',
    category: 'location',
    question: 'How can I contact Hotel Prabhupada for direct reservations or inquiries?',
    answer: (
      <div className="space-y-2">
        <p>You can reach our reservation and front desk team through the following official channels:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>
            <strong>Reservation Phone:</strong>{' '}
            <a href="tel:+919583002951" className="text-[#E8A317] hover:underline">
              +91 9583002951
            </a>{' '}
            /{' '}
            <a href="tel:+919583002952" className="text-[#E8A317] hover:underline">
              +91 9583002952
            </a>
          </li>
          <li>
            <strong>Reservation Email:</strong>{' '}
            <a href="mailto:reservation@hotelprabhupada.com" className="text-[#E8A317] hover:underline">
              reservation@hotelprabhupada.com
            </a>
          </li>
          <li>
            <strong>General Manager Email:</strong>{' '}
            <a href="mailto:gm@hotelprabhupada.com" className="text-[#E8A317] hover:underline">
              gm@hotelprabhupada.com
            </a>
          </li>
          <li>
            <strong>Website:</strong>{' '}
            <a href="https://www.hotelprabhupada.com" className="text-[#E8A317] hover:underline">
              www.hotelprabhupada.com
            </a>
          </li>
        </ul>
      </div>
    ),
  },

  // 2. Rooms & Stays
  {
    id: 'room-1',
    category: 'rooms',
    question: 'What room categories are available at Hotel Prabhupada?',
    answer: (
      <div className="space-y-2">
        <p>Hotel Prabhupada offers multiple accommodation categories to suit couples, families, and groups:</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-white/85">
          <li>
            <strong className="text-[#E8A317]">Premier Room:</strong> Comfortable standard room ideal for couples, solo travelers, and short leisure or business stays.
          </li>
          <li>
            <strong className="text-[#E8A317]">Deluxe Room:</strong> Spacious accommodation offering extra floor area for longer, relaxed vacations.
          </li>
          <li>
            <strong className="text-[#E8A317]">Executive Room:</strong> Upgraded comfort featuring enhanced interior furnishings and premium room amenities.
          </li>
          <li>
            <strong className="text-[#E8A317]">Family Room:</strong> Generously sized room designed with additional sleeping space for families traveling with children or parents.
          </li>
          <li>
            <strong className="text-[#E8A317]">Superior Deluxe Balcony Sea View:</strong> Beautiful room featuring a private balcony and views toward the Bay of Bengal.
          </li>
          <li>
            <strong className="text-[#E8A317]">Suite Front Sea View:</strong> Our premier luxury suite offering expansive living space, front-facing ocean panorama, workspace, and VIP guest conveniences.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 'room-2',
    category: 'rooms',
    question: 'Does Hotel Prabhupada have sea-view rooms with balconies?',
    answer:
      'Yes, we offer Superior Deluxe Balcony Sea View rooms as well as Suite Front Sea View suites. Both categories provide scenic ocean views and refreshing coastal sea breezes, subject to availability at the time of booking.',
  },
  {
    id: 'room-3',
    category: 'rooms',
    question: 'Can I request an extra mattress or extra bed?',
    answer:
      'Yes, extra person accommodation and rollaway beds/mattresses can be arranged for select room categories based on room capacity and prevailing hotel extra-person policies. Please inform us during reservation so we can prepare your room prior to arrival.',
  },
  {
    id: 'room-4',
    category: 'rooms',
    question: 'Is Hotel Prabhupada pet-friendly?',
    answer:
      'Yes, Hotel Prabhupada welcomes pet parents! We offer pet-friendly accommodation options. We kindly request guests traveling with pets to notify hotel management in advance so that suitable arrangements and room allocations can be prepared.',
  },
  {
    id: 'room-5',
    category: 'rooms',
    question: 'How do room prices and availability work?',
    answer:
      'Room tariffs and live availability vary based on your check-in date, check-out date, room category, occupancy count, meal plan, and season (e.g. festivals like Ratha Yatra or peak winter holidays). You can check live rates and book instantly on our website or contact our reservation desk.',
  },

  // 3. Dining & Restaurant
  {
    id: 'dining-1',
    category: 'dining',
    question: 'Does Hotel Prabhupada have an in-house restaurant?',
    answer: (
      <p>
        Yes, Hotel Prabhupada features a multi-cuisine in-house restaurant named{' '}
        <strong className="text-[#E8A317] font-medium">Oris</strong>. The restaurant serves hotel guests
        as well as visiting diners in a warm and hygienic atmosphere.
      </p>
    ),
  },
  {
    id: 'dining-2',
    category: 'dining',
    question: 'What cuisines are served at Oris restaurant?',
    answer:
      'Oris restaurant serves authentic Indian cuisine (including North Indian and Odia favorites), traditional Bengali delicacies, and popular Chinese dishes prepared with fresh, quality ingredients.',
  },
  {
    id: 'dining-3',
    category: 'dining',
    question: 'What are the operating hours for the restaurant and meals?',
    answer: (
      <div className="space-y-2">
        <p>Oris operates daily from Monday through Sunday between approximately 7:00 AM and 11:00 PM:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li><strong>Breakfast:</strong> ~8:30 AM to 11:00 AM</li>
          <li><strong>Lunch:</strong> ~12:00 PM to 2:30 PM</li>
          <li><strong>Dinner:</strong> ~7:00 PM to 10:30 PM</li>
        </ul>
        <p className="text-xs text-white/60">
          * Timings may vary slightly based on seasonal requirements. Guests may confirm specific timings with the front desk.
        </p>
      </div>
    ),
  },
  {
    id: 'dining-4',
    category: 'dining',
    question: 'Is room service and in-room dining available?',
    answer:
      'Yes, room service and in-room dining facilities are available for guests who prefer to enjoy meals, beverages, or snacks in the privacy of their room.',
  },
  {
    id: 'dining-5',
    category: 'dining',
    question: 'Is breakfast included with room bookings?',
    answer:
      'Breakfast inclusion depends on the meal plan selected at the time of reservation (e.g. European Plan - Room Only vs. Continental Plan - Breakfast Included). Guests on room-only plans can also order breakfast a la carte or opt for breakfast buffets when available.',
  },

  // 4. Amenities & Pool
  {
    id: 'amen-1',
    category: 'amenities',
    question: 'Does Hotel Prabhupada have a swimming pool?',
    answer:
      'Yes, Hotel Prabhupada features an on-premise swimming pool for hotel guests. Pool access is subject to daily operating hours, appropriate swimwear, and guest safety regulations.',
  },
  {
    id: 'amen-2',
    category: 'amenities',
    question: 'Is complimentary Wi-Fi available throughout the hotel?',
    answer:
      'Yes, complimentary high-speed Wi-Fi internet is available across all guest rooms, suites, and public hotel areas. Network access details are provided at check-in.',
  },
  {
    id: 'amen-3',
    category: 'amenities',
    question: 'Is vehicle parking available at Hotel Prabhupada?',
    answer:
      'Yes, on-site vehicle parking is available for guests traveling by personal car or private vehicle. Contact our front desk upon arrival for parking entry guidance.',
  },
  {
    id: 'amen-4',
    category: 'amenities',
    question: 'Does the hotel offer an Ayurvedic spa or wellness services?',
    answer:
      'Yes, Ayurvedic wellness and rejuvenation spa therapies may be scheduled during your stay. Guests may inquire with our front desk regarding available treatment menus, therapy durations, and appointment scheduling.',
  },
  {
    id: 'amen-5',
    category: 'amenities',
    question: 'What other facilities and conveniences are provided?',
    answer:
      'Hotel Prabhupada provides 24/7 power backup, CCTV surveillance security, luggage storage and cloakroom facilities, daily housekeeping, laundry assistance, travel desk support, in-room television, and beach assistance.',
  },

  // 5. Policies & Check-in
  {
    id: 'pol-1',
    category: 'policies',
    question: 'What are the standard Check-in and Check-out timings?',
    answer: (
      <div className="space-y-1.5">
        <p>
          Our standard check-in time is <strong className="text-[#E8A317]">10:00 AM</strong> and standard check-out time is <strong className="text-[#E8A317]">8:00 AM</strong>.
        </p>
        <p className="text-xs text-white/70">
          Early check-in and late check-out requests are subject to room availability on the date of travel and hotel policies.
        </p>
      </div>
    ),
  },
  {
    id: 'pol-2',
    category: 'policies',
    question: 'What government identification is required at the time of check-in?',
    answer: (
      <div className="space-y-2">
        <p>
          In accordance with Indian government regulations and hotel security guidelines, all adult guests must present valid government-approved original photo identification at check-in:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>
            <strong>Indian Nationals:</strong> Aadhaar Card, Passport, Driving License, or Voter ID Card. <em>(Note: PAN Card is NOT accepted as valid address/identity proof).</em>
          </li>
          <li>
            <strong>Foreign Nationals:</strong> Valid Passport and valid Indian Visa / e-Visa / OCI card.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'pol-3',
    category: 'policies',
    question: 'What payment methods are accepted by Hotel Prabhupada?',
    answer:
      'We accept all major Credit Cards (Visa, MasterCard, RuPay), Debit Cards, UPI payment apps (Google Pay, PhonePe, Paytm, BHIM), Net Banking / Bank Transfers, and Cash.',
  },
  {
    id: 'pol-4',
    category: 'policies',
    question: 'What is the cancellation and refund policy?',
    answer:
      'Cancellation and refund eligibility depends on the confirmed booking plan, room category, and platform terms chosen at the time of booking. For direct bookings through our website or hotel desk, our reservations team can assist you with applicable policy guidelines. For reservations made through third-party travel portals, changes must be processed through that portal.',
  },
  {
    id: 'pol-5',
    category: 'policies',
    question: 'What is the child policy for stays?',
    answer:
      'Children are warmly welcomed at Hotel Prabhupada. Complimentary stay allowances for young children and charges for extra mattresses or kids’ meals follow our hotel child policy based on the room category selected.',
  },

  // 6. Travel & Sightseeing
  {
    id: 'trav-1',
    category: 'travel',
    question: 'Does Hotel Prabhupada provide travel and sightseeing assistance?',
    answer:
      'Yes, our travel desk provides comprehensive travel assistance for guests visiting Puri and surrounding Odisha destinations, including car rentals, guided tour suggestions, and transport bookings.',
  },
  {
    id: 'trav-2',
    category: 'travel',
    question: 'Can the hotel assist with Shree Jagannath Temple visit guidance?',
    answer:
      'Yes, our front desk team is happy to provide general local guidance on temple darshan schedules, transportation options to the temple gate, shoe-stand/cloakroom locations, and local customs for a peaceful pilgrimage experience.',
  },
  {
    id: 'trav-3',
    category: 'travel',
    question: 'Can the hotel arrange day trips to Konark Sun Temple and Chilika Lake?',
    answer:
      'Yes, our travel desk can arrange reliable private cabs for day excursions to the UNESCO World Heritage Konark Sun Temple (approx. 35 km via the scenic Marine Drive), Chilika Lake / Satapada for dolphin watching (approx. 50 km), Pipili applique village, and Raghurajpur heritage craft village.',
  },
  {
    id: 'trav-4',
    category: 'travel',
    question: 'Are railway station and airport transfers available?',
    answer:
      'Yes, pick-up and drop transfers for Puri Railway Station (approx. 4 km) and Biju Patnaik International Airport in Bhubaneswar (approx. 60 km) can be arranged upon prior request with our travel desk.',
  },
];

export const FaqsClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const reduceMotion = useReducedMotion();

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const questionMatch = faq.question.toLowerCase().includes(query);
      const answerText = typeof faq.answer === 'string' ? faq.answer.toLowerCase() : '';
      return matchesCategory && (questionMatch || answerText.includes(query));
    });
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <LegalPageShell
      title="Frequently Asked Questions"
      breadcrumb="FAQ's"
      subtitle="Everything you need to know about staying at Hotel Prabhupada, Puri"
      icon={<HelpCircle className="w-6 h-6" />}
    >
      <div className="space-y-8 font-sans">
        {/* Search Bar */}
        <div className="relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#C5A059] absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., check-in, pool, restaurant, beach, temple...)"
              className="w-full bg-[#0C1827] border border-[#C5A059]/30 rounded-sm pl-12 pr-10 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#E8A317] focus:ring-1 focus:ring-[#E8A317]/50 transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1.5 text-white/50 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
          {FAQ_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A059] text-[#070F1A] border-[#C5A059] shadow-md font-bold'
                    : 'bg-[#0C1827] text-white/75 border-white/15 hover:border-[#C5A059]/50 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#070F1A]' : 'text-[#E8A317]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-sm border transition-all duration-300 overflow-hidden shadow-lg ${
                    isOpen
                      ? 'bg-[#0C1827] border-[#C5A059]/60 ring-1 ring-[#C5A059]/20'
                      : 'bg-[#0C1827]/80 border-white/10 hover:border-[#C5A059]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`font-serif text-base sm:text-lg font-normal transition-colors leading-snug ${
                        isOpen ? 'text-[#E8A317]' : 'text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border ${
                        isOpen
                          ? 'rotate-180 bg-[#E8A317]/20 border-[#E8A317]/40 text-[#E8A317]'
                          : 'bg-white/5 border-white/15 text-white/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/10 text-sm sm:text-base leading-relaxed text-white/80 font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="bg-[#0C1827] p-8 text-center rounded-sm border border-white/15 space-y-4">
              <p className="text-white/70 text-sm">
                No questions found matching &ldquo;<span className="text-white font-medium">{searchQuery}</span>&rdquo; in this category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="header-book-btn inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm cursor-pointer"
              >
                View All FAQs
              </button>
            </div>
          )}
        </div>

        {/* Quick Contact & Assistance Card */}
        <div className="bg-[#0C1827] p-6 sm:p-8 rounded-sm border border-[#C5A059]/30 shadow-xl mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-1">
                Need More Assistance?
              </span>
              <h3 className="font-serif text-2xl font-normal text-white">
                Have a Question Not Listed Here?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/70 font-light mt-1 max-w-xl">
                Our front desk and reservation team at Hotel Prabhupada is available 24/7 to assist
                you with bookings, room availability, or special requests.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+919583002951"
                className="header-book-btn inline-flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase px-6 py-3.5 rounded-sm"
              >
                <PhoneCall className="w-4 h-4" />
                Call +91 9583002951
              </a>
              <Link
                href="/contact"
                className="pata-btn-outline inline-flex items-center justify-center font-sans text-xs tracking-wider uppercase px-5 py-3.5 rounded-sm"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LegalPageShell>
  );
};
