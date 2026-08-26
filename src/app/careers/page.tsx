import React from 'react';
import { Metadata } from 'next';
import { CareersClient } from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers at Hotel Prabhupada | Join Our Hospitality Team in Puri',
  description:
    'Explore career opportunities at Hotel Prabhupada, Puri. Apply for positions in Front Office, Housekeeping, Food & Beverage, Culinary, and Hotel Operations on New Marine Drive Road.',
  openGraph: {
    title: 'Careers at Hotel Prabhupada Puri | Hospitality Opportunities',
    description:
      'Join the team at Hotel Prabhupada, New Marine Drive, Puri. Submit your resume and application online for hospitality career opportunities.',
    url: 'https://hotelprabhupada.com/careers',
    siteName: 'Hotel Prabhupada',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
