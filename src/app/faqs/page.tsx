import React from 'react';
import { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';

export const metadata: Metadata = {
  title: "FAQ's | Hotel Prabhupada Puri",
  description: 'Frequently Asked Questions about Hotel Prabhupada, Puri.',
};

const faqs = [
  {
    q: 'What is Check in Check Out Time?',
    a: 'Check in is at 10 AM, check out is at 8 AM.',
  },
  {
    q: 'Do you allow smoking on property? In the rooms?',
    a: 'Our hotel is entirely non-smoking.',
  },
  {
    q: 'Do you offer room service? What are the hours?',
    a: 'Yes, we offer In Room Dining 24 hours a day, with a limited overnight menu.',
  },
  {
    q: 'Do you have a pool?',
    a: 'Yes, our two pools are located on our 16th floor rooftop.',
  },
  {
    q: 'How do I get to the hotel?',
    a: 'Please see our Maps + Directions page on Google.',
  },
  {
    q: 'I booked on a website other than the hotel website and I need to make a change to my reservation. How do I do this?',
    a: 'In this situation, you would have to contact the customer service department at the website you used to make your reservation.',
  },
  {
    q: 'Will your rooms allow rollaway beds/cribs/playards? Is there a charge?',
    a: 'Some of our rooms can accommodate cribs or rollaway beds. There is a per night rental fee for all rollaway beds.',
  },
  {
    q: 'Is my ID required at check in?',
    a: 'We do require presentation of a valid government-issued identification at the time of check-in.',
  },
  {
    q: 'Can I check in with my debit card?',
    a: 'We absolutely take debit cards at check-in.',
  },
  {
    q: 'What forms of payment are accepted to pay for my room?',
    a: 'All major credit cards are accepted.',
  },
];

export default function FAQsPage() {
  return (
    <LegalPageShell
      title="Frequently Asked Questions"
      breadcrumb="FAQ's"
      icon={<HelpCircle className="w-6 h-6" />}
    >
      <div className="space-y-4 font-sans text-white/80 font-light">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#0C1827] p-6 sm:p-8 rounded-sm border border-[#C5A059]/20"
          >
            <h3 className="font-serif text-lg text-[#E8A317] font-normal mb-2">{faq.q}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/75">{faq.a}</p>
          </div>
        ))}
      </div>
    </LegalPageShell>
  );
}
