'use client';

import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  X,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { LegalPageShell } from '@/components/layout/LegalPageShell';
import { HOTEL_POLICIES } from '@/data/hotelPolicies';
import Link from 'next/link';

interface FaqItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Hotel Prabhupada located?',
    answer: 'Hotel Prabhupada is located on New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India, just steps from the sea beach.',
  },
  {
    id: 'faq-2',
    question: 'What are the check-in and check-out timings?',
    answer: (
      <div className="space-y-2">
        <p>
          Standard <strong>Check-in time is {HOTEL_POLICIES.checkInOutPolicy.standardCheckIn}</strong> and standard <strong>Check-out time is {HOTEL_POLICIES.checkInOutPolicy.standardCheckOut}</strong>.
        </p>
        <p>Early check-in and late check-out are subject to room availability and applicable charges.</p>
        <p className="text-white/70">For details, see our <Link href="/hotel-policy" className="text-[#E8A317] hover:underline">Hotel Policy</Link>.</p>
      </div>
    ),
  },
  {
    id: 'faq-3',
    question: 'What valid identification (ID) proof is required at check-in?',
    answer: (
      <div className="space-y-2">
        <p>As per Government regulations, every guest must carry and present a valid government-issued photo ID at check-in:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li><strong>Indian Residents:</strong> Passport, Driving License, AADHAAR Card, or Voter ID.</li>
          <li><strong>PAN Card:</strong> <span className="text-amber-400 font-medium">PAN card is NOT accepted</span> as a valid ID proof.</li>
          <li><strong>Foreign Nationals:</strong> Original Passport and valid Indian Visa are mandatory.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'faq-4',
    question: 'Is Hotel Prabhupada pet-friendly? What are the pet charges & rules?',
    answer: (
      <div className="space-y-2">
        <p>
          Yes! Hotel Prabhupada warmly accommodates pets under the following comprehensive guidelines:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li><strong>Permitted Pets:</strong> Domesticated dogs and cats only (Max 1 pet per room or 2 small pets; dangerous breeds excluded).</li>
          <li><strong>Pet Fee:</strong> {HOTEL_POLICIES.petPolicy.feeDetails.dailyFee} (daily pet accommodation fee).</li>
          <li><strong>Security Deposit:</strong> {HOTEL_POLICIES.petPolicy.feeDetails.securityDeposit} (refundable at check-out subject to room inspection).</li>
          <li><strong>Mandatory Documentation:</strong> Anti-rabies vaccination certificate, pet passport/licence, medical clearance (if sick within 72 hrs), and signed Pet Waiver Form.</li>
          <li><strong>Allowed Areas:</strong> Guest Room (occupied), Garden / Lawn, and Lobby Lounge only (must be on leash or in carrier in public areas).</li>
          <li><strong>Restricted Areas:</strong> Strictly prohibited in Restaurants & F&B outlets, Banquet rooms, Swimming pool area, Spa/salon, and Fitness center.</li>
          <li><strong>In-Room Rules:</strong> "Pet in Room" door hanger must be displayed; pets not allowed on beds/sofas; cannot bathe in hotel bathrooms; max 2 hours unattended (notify Front Desk).</li>
          <li><strong>Service Animals:</strong> Legitimate service animals are always welcome without any fees or restrictions.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'faq-5',
    question: 'What is the Swimming Pool policy and costume rental / charges?',
    answer: (
      <div className="space-y-2">
        <p>
          Hotel Prabhupada has an outdoor swimming pool exclusive to in-house guests:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li>Proper swimming costume is mandatory while entering the pool.</li>
          <li>All in-house guests will be charged <strong>{HOTEL_POLICIES.swimmingPoolPolicy.costumeCharge}</strong> for pool usage if found without a proper swimming costume.</li>
          <li>Outside guests are strictly not allowed to use the pool.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'faq-6',
    question: "What is the Visitor's Policy?",
    answer: (
      <div className="space-y-2">
        <p>For guest safety and comfort, the following visitor rules apply:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li>Every visitor must register in the Visitor&apos;s Register at Reception.</li>
          <li>Visitors are not allowed in guest rooms; they can be seated at Reception. (Allowed in rooms only if accompanied in person by the in-house guest).</li>
          <li>No visitors are allowed inside the property after <strong>20:00 hrs (8:00 PM)</strong>.</li>
          <li>External photographers must report at the Security Gate before entry.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'faq-7',
    question: 'What is the Cancellation & Refund Policy?',
    answer: (
      <div className="space-y-2">
        <p>For individual room reservations:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li><strong>More than 2 days before check-in:</strong> Free Cancellation (No charges applied).</li>
          <li><strong>0 to 2 days before check-in:</strong> Non-refundable (Full stay charge applied).</li>
          <li><strong>No Show:</strong> No refund or adjustment.</li>
          <li><strong>Festival Periods:</strong> NO CANCELLATION & AMENDMENT during Durga Puja, Holi, Diwali, Christmas & New Year.</li>
        </ul>
        <p className="text-white/70 pt-1">
          Read the complete terms on our <Link href="/refund-policy" className="text-[#E8A317] hover:underline">Refund Policy</Link> page.
        </p>
      </div>
    ),
  },
  {
    id: 'faq-8',
    question: 'What is the Property Damage Policy?',
    answer: (
      <div className="space-y-2">
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li>In case of any damage to hotel property by an in-house guest, actual repair/replacement costs will be charged to the guest account.</li>
          <li>In case of any loss or damage by a visitor, the cost will be recovered from the visitor or the hosting guest.</li>
          <li>Property damage assessment and charges solely depend upon the decision of Hotel Prabhupada management.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'faq-9',
    question: 'What cuisines are served at Oris Restaurant?',
    answer: 'Oris, our in-house multi-cuisine restaurant, serves authentic Indian, Bengali, and Chinese delicacies daily from 7:00 AM to 11:00 PM.',
  },
  {
    id: 'faq-10',
    question: 'What are the restaurant timings?',
    answer: (
      <div className="space-y-2">
        <p>The restaurant operates daily from approximately 7:00 AM to 11:00 PM.</p>
        <ul className="list-disc pl-5 space-y-1 text-white/85">
          <li><strong>Breakfast:</strong> ~8:00 AM to 10:30 AM</li>
          <li><strong>Lunch:</strong> ~12:00 PM to 2:30 PM</li>
          <li><strong>Dinner:</strong> ~7:00 PM to 10:30 PM</li>
        </ul>
        <p className="text-white/70">24-hour room service is also available for in-room dining.</p>
      </div>
    ),
  },
  {
    id: 'faq-11',
    question: 'What room categories are available?',
    answer: (
      <div className="space-y-2">
        <p>Hotel Prabhupada offers 6 room categories:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/85">
          <li>Premier Room</li>
          <li>Deluxe Room</li>
          <li>Executive Room</li>
          <li>Family Room</li>
          <li>Superior Deluxe Balcony Sea View</li>
          <li>Suite Front Sea View</li>
        </ul>
        <p className="text-white/70">
          Visit our <Link href="/rooms" className="text-[#E8A317] hover:underline">Rooms & Suites</Link> page to view details and photos.
        </p>
      </div>
    ),
  },
  {
    id: 'faq-12',
    question: 'Is parking and Wi-Fi available at the hotel?',
    answer: 'Yes. High-speed optical fiber Wi-Fi is complimentary across all rooms and public areas, and spacious on-site parking is available free of charge for guest vehicles.',
  },
  {
    id: 'faq-13',
    question: 'Does the hotel assist with Jagannath Temple, Konark, and Chilika sightseeing?',
    answer: 'Yes. Our 24/7 front desk and travel desk provide comprehensive assistance with Shree Jagannath Temple visits, cab bookings, local sightseeing tours to Konark Sun Temple and Chilika Lake, as well as railway station and airport transfers.',
  },
  {
    id: 'faq-14',
    question: 'How can I contact Hotel Prabhupada for reservations?',
    answer: (
      <div className="space-y-2">
        <p className="font-medium text-white">Reservation Phone Numbers:</p>
        <p className="text-white/90">
          <a href="tel:+919583002951" className="text-[#E8A317] hover:underline">
            +91 9583002951
          </a>{' '}
          /{' '}
          <a href="tel:+919583002952" className="text-[#E8A317] hover:underline">
            +91 9583002952
          </a>
        </p>
        <p className="font-medium text-white pt-1">Reservation Email:</p>
        <p>
          <a href="mailto:reservation@hotelprabhupada.com" className="text-[#E8A317] hover:underline">
            reservation@hotelprabhupada.com
          </a>
        </p>
        <p className="font-medium text-white pt-1">Direct Online Booking:</p>
        <p>
          <a
            href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8A317] hover:underline"
          >
            Live Instant Booking Portal
          </a>
        </p>
      </div>
    ),
  },
];

export const FaqsClient: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const reduceMotion = useReducedMotion();

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return FAQ_DATA;

    return FAQ_DATA.filter((faq) => {
      const questionMatch = faq.question.toLowerCase().includes(query);
      const answerText = typeof faq.answer === 'string' ? faq.answer.toLowerCase() : '';
      return questionMatch || answerText.includes(query);
    });
  }, [searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <LegalPageShell
      title="Frequently Asked Questions"
      breadcrumb="FAQ's"
      subtitle="Find answers to common questions regarding policies, rooms, dining, and facilities at Hotel Prabhupada, Puri"
      icon={<HelpCircle className="w-6 h-6" />}
    >
      <div className="space-y-6 font-sans">
        {/* Search Bar */}
        <div className="relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#C5A059] absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search policies, check-in, pet rules, pool, cancellation..."
              className="w-full bg-[#0C1827] border border-[#C5A059]/30 rounded-sm pl-12 pr-10 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#E8A317] focus:ring-1 focus:ring-[#E8A317]/50 transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-sm border transition-all duration-300 overflow-hidden shadow-lg ${isOpen
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
                      className={`font-serif text-base sm:text-lg font-normal transition-colors leading-snug ${isOpen ? 'text-[#E8A317]' : 'text-white'
                        }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border ${isOpen
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
                No questions found matching &ldquo;<span className="text-white font-medium">{searchQuery}</span>&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="header-book-btn inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm cursor-pointer"
              >
                View All FAQs
              </button>
            </div>
          )}
        </div>
      </div>
    </LegalPageShell>
  );
};
