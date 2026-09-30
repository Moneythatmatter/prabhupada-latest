'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';
import { FadeRise } from '@/hooks/useParallax';

interface HomeFaqItem {
  id: string;
  question: string;
  answer: string;
}

const HOME_FAQS: HomeFaqItem[] = [
  {
    id: 'faq-pet-friendly',
    question: 'Which hotel in Puri offers pet-friendly stays?',
    answer:
      'Hotel Prabhupada in Puri offers pet-friendly stays. Located on New Marine Drive near Puri Beach.',
  },
  {
    id: 'faq-sea-facing-rooms',
    question: 'Which hotel in Puri offers sea-facing rooms?',
    answer:
      'Hotel Prabhupada in Puri offers sea-facing rooms. Located on New Marine Drive, the hotel has Executive rooms and Suites with front sea views, along with Superior Deluxe Balcony rooms offering side sea views. Choose your preferred view when booking.',
  },
  {
    id: 'faq-front-sea-view-balconies',
    question: 'Which hotels in Puri offer front sea-view rooms or balconies with a sea view?',
    answer:
      'Hotel Prabhupada offers front sea-view Executive rooms and Suites, plus Superior Deluxe Balcony rooms with side sea views.',
  },
  {
    id: 'faq-family-comfort-safety',
    question: 'Which hotel in Puri is a good choice for families looking for comfort and safety?',
    answer:
      'Hotel Prabhupada offers family accommodation in Puri, including non-sea-view Family Quad rooms with two beds. Families can also enjoy an in-house restaurant and outdoor swimming pool.',
  },
  {
    id: 'faq-budget-family-rooms',
    question: 'Which hotel in Puri offers family rooms for travellers planning a budget-friendly stay?',
    answer:
      'Hotel Prabhupada offers Family Quad rooms that families can consider when comparing accommodation costs in Puri.',
  },
  {
    id: 'faq-car-parking',
    question: 'Which hotel in Puri has car parking?',
    answer:
      'If you’re considering Hotel Prabhupada, confirm parking availability directly with the hotel before booking.',
  },
];

export const HomeFaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(HOME_FAQS[0].id);
  const reduceMotion = useReducedMotion();

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Structured Data (Schema.org FAQPage) for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="home-faq-heading"
      className="py-16 sm:py-24 md:py-32 text-[#1E293B] relative overflow-hidden bg-[#FAF8F5]/80 border-t border-[#E5DECE]"
    >
      <PatachitraBackdrop />

      {/* Structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="max-w-[1020px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <FadeRise className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#8B1E1E] mb-2 sm:mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#8B1E1E]" />
            Frequently Asked Questions
          </span>
          <h2
            id="home-faq-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1827] tracking-tight leading-[1.15]"
          >
            Got Questions? We Have Answers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B] font-light max-w-xl mx-auto">
            Everything you need to know about rooms, views, family stays, and amenities at Hotel Prabhupada, Puri.
          </p>
          <PatachitraDivider className="mt-4 sm:mt-6" />
        </FadeRise>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <motion.div
                key={faq.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'bg-white border-[#C5A059] shadow-[0_8px_28px_rgba(197,160,89,0.14)] ring-1 ring-[#C5A059]/40'
                    : 'bg-white/80 hover:bg-white border-[#E5DECE] hover:border-[#C5A059]/60 shadow-[0_2px_10px_rgba(12,24,39,0.03)]'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                    <span
                      aria-hidden="true"
                      className={`font-serif text-sm sm:text-base font-semibold transition-colors duration-200 shrink-0 ${isOpen ? 'text-[#8B1E1E]' : 'text-[#C5A059]'
                        }`}
                    >
                      {itemNumber}
                    </span>
                    <h3
                      className={`font-serif text-base sm:text-lg md:text-xl font-normal transition-colors leading-snug ${isOpen ? 'text-[#0C1827] font-medium' : 'text-[#1E293B]'
                        }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    aria-hidden="true"
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border ${isOpen
                        ? 'rotate-180 bg-[#8B1E1E] border-[#8B1E1E] text-white shadow-sm'
                        : 'bg-[#FAF8F5] border-[#E5DECE] text-[#64748B] hover:text-[#0C1827]'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 sm:pl-[4.25rem] border-t border-[#F1EAE0] text-sm sm:text-base leading-relaxed text-[#475569] font-light">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
