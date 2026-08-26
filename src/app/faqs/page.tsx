import React from 'react';
import { Metadata } from 'next';
import { FaqsClient } from './FaqsClient';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ's) | Hotel Prabhupada Puri",
  description:
    'Find answers to frequently asked questions about Hotel Prabhupada, Puri. Information on check-in/check-out timings, room categories, in-house restaurant (Oris), swimming pool, pet policy, location, and travel assistance.',
  openGraph: {
    title: "FAQ's | Hotel Prabhupada Puri",
    description:
      'Frequently asked questions about rooms, dining, check-in policies, swimming pool, and location at Hotel Prabhupada, New Marine Drive, Puri.',
    url: 'https://hotelprabhupada.com/faqs',
    siteName: 'Hotel Prabhupada',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FAQsPage() {
  return <FaqsClient />;
}
