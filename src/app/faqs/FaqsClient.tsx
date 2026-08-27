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

interface FaqItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Hotel Prabhupada located?',
    answer: 'Hotel Prabhupada is located on New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India.',
  },
  {
    id: 'faq-2',
    question: 'Is Hotel Prabhupada near the beach?',
    answer: 'Yes. Hotel Prabhupada is located near the sea beach in Puri.',
  },
  {
    id: 'faq-3',
    question: 'Does Hotel Prabhupada have Wi-Fi?',
    answer: 'Yes. Wi-Fi is available for guests.',
  },
  {
    id: 'faq-4',
    question: 'Does Hotel Prabhupada have a swimming pool?',
    answer: 'Yes. Hotel Prabhupada has a swimming pool. Current pool timings and usage guidelines are available from the hotel.',
  },
  {
    id: 'faq-5',
    question: 'Does Hotel Prabhupada have a restaurant?',
    answer: 'Yes. Hotel Prabhupada has an in-house restaurant named Oris.',
  },
  {
    id: 'faq-6',
    question: 'What cuisines are served at Oris?',
    answer: 'Oris serves food that may include Indian, Bengali, and Chinese cuisine.',
  },
  {
    id: 'faq-7',
    question: 'What are the restaurant timings?',
    answer: (
      <div className="space-y-2">
        <p>The restaurant generally operates from approximately 7:00 AM to 11:00 PM.</p>
        <p>Breakfast is approximately 8:30 AM to 11:00 AM.</p>
        <p>Lunch is approximately 12:00 PM to 2:30 PM.</p>
        <p>Dinner is approximately 7:00 PM to 10:30 PM.</p>
        <p className="text-white/70">Guests may confirm the latest timings with Hotel Prabhupada.</p>
      </div>
    ),
  },
  {
    id: 'faq-8',
    question: 'Is parking available?',
    answer: 'Yes. Parking is available at Hotel Prabhupada. Current parking arrangements can be confirmed with the hotel.',
  },
  {
    id: 'faq-9',
    question: 'Does the hotel provide room service?',
    answer: 'Yes. Room service and in-room dining facilities are available.',
  },
  {
    id: 'faq-10',
    question: 'What room categories are available?',
    answer: (
      <div className="space-y-2">
        <p>Hotel Prabhupada offers room categories including:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/85">
          <li>Premier Room</li>
          <li>Deluxe Room</li>
          <li>Executive Room</li>
          <li>Family Room</li>
          <li>Superior Deluxe Balcony Sea View</li>
          <li>Suite Front Sea View</li>
        </ul>
        <p>Availability depends on selected travel dates.</p>
      </div>
    ),
  },
  {
    id: 'faq-11',
    question: 'Does Hotel Prabhupada have sea-view rooms?',
    answer: 'Yes. Sea-view room categories include Superior Deluxe Balcony Sea View and Suite Front Sea View, subject to current availability.',
  },
  {
    id: 'faq-12',
    question: 'How much does a room cost?',
    answer: (
      <div className="space-y-2">
        <p>Room rates vary according to the room category, travel dates, occupancy, meal plan, season, offers, and availability.</p>
        <p>Guests may share their check-in date, check-out date, and number of guests to receive the latest available options.</p>
      </div>
    ),
  },
  {
    id: 'faq-13',
    question: 'Is a room available today?',
    answer: (
      <div className="space-y-2">
        <p>Current room availability is based on Hotel Prabhupada&apos;s latest reservation inventory.</p>
        <p>Guests should provide:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/85">
          <li>Check-in date</li>
          <li>Check-out date</li>
          <li>Number of adults</li>
          <li>Number of children</li>
          <li>Preferred room category, if any</li>
        </ul>
        <p>This information can then be used to identify suitable available rooms.</p>
      </div>
    ),
  },
  {
    id: 'faq-14',
    question: 'Is Shree Jagannath Temple accessible from Hotel Prabhupada?',
    answer: (
      <div className="space-y-2">
        <p>Yes. Shree Jagannath Temple is one of the major attractions guests can visit while staying at Hotel Prabhupada.</p>
        <p>Actual travel time depends on traffic and local conditions.</p>
      </div>
    ),
  },
  {
    id: 'faq-15',
    question: 'Does Hotel Prabhupada have family rooms?',
    answer: 'Yes. Hotel Prabhupada offers a Family Room category designed for families and larger travelling parties.',
  },
  {
    id: 'faq-16',
    question: 'Does the hotel provide travel assistance?',
    answer: 'Yes. Hotel Prabhupada offers travel assistance or travel-desk services for guests.',
  },
  {
    id: 'faq-17',
    question: 'Can the hotel assist with Konark or Chilika sightseeing?',
    answer: 'Guests may enquire with the hotel travel desk regarding available sightseeing and transportation arrangements for destinations such as Konark and Chilika Lake.',
  },
  {
    id: 'faq-18',
    question: 'Is breakfast included with the room?',
    answer: (
      <div className="space-y-2">
        <p>Breakfast inclusion depends on the room plan selected at the time of booking.</p>
        <p>The latest booking information should be used to confirm whether breakfast is included.</p>
      </div>
    ),
  },
  {
    id: 'faq-19',
    question: 'Does the hotel provide laundry service?',
    answer: 'Laundry service is available according to the hotel&apos;s current service arrangements.',
  },
  {
    id: 'faq-20',
    question: 'Does Hotel Prabhupada have a spa?',
    answer: 'Ayurvedic spa services may be available. Guests may enquire regarding current treatments, prices, and operating hours.',
  },
  {
    id: 'faq-21',
    question: 'Can I request early check-in?',
    answer: 'Early check-in requests are handled according to room availability and the hotel&apos;s current check-in policy.',
  },
  {
    id: 'faq-22',
    question: 'Can I request late check-out?',
    answer: 'Late check-out requests are handled according to room availability and the hotel&apos;s current check-out policy.',
  },
  {
    id: 'faq-23',
    question: 'How can I contact Hotel Prabhupada?',
    answer: (
      <div className="space-y-2">
        <p className="font-medium text-white">Reservation phone numbers:</p>
        <p className="text-white/90">
          <a href="tel:+919583002951" className="text-[#E8A317] hover:underline">
            +91 9583002951
          </a>
          <br />
          <a href="tel:+919583002952" className="text-[#E8A317] hover:underline">
            +91 9583002952
          </a>
        </p>
        <p className="font-medium text-white pt-2">Reservation email:</p>
        <p>
          <a href="mailto:reservation@hotelprabhupada.com" className="text-[#E8A317] hover:underline">
            reservation@hotelprabhupada.com
          </a>
        </p>
        <p className="font-medium text-white pt-2">Website:</p>
        <p>
          <a href="https://www.hotelprabhupada.com" target="_blank" rel="noopener noreferrer" className="text-[#E8A317] hover:underline">
            www.hotelprabhupada.com
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
      subtitle="Hotel Prabhupada, Puri, Odisha"
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
              placeholder="Search frequently asked questions..."
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
