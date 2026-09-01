import React from 'react';
import { Metadata } from 'next';
import { TestimonialsClient } from './TestimonialsClient';

export const metadata: Metadata = {
  title: 'Guest Testimonials & Reviews | Hotel Prabhupada Puri',
  description:
    'Read real guest reviews and submit your stay feedback for Hotel Prabhupada, New Marine Drive Rd, near Light House, Puri, Odisha 752001.',
  openGraph: {
    title: 'Guest Testimonials & Reviews | Hotel Prabhupada Puri',
    description:
      'Guest reviews and experiences at Hotel Prabhupada, New Marine Drive Rd, near Light House, Puri, Odisha 752001.',
    url: 'https://hotelprabhupada.com/testimonials',
    siteName: 'Hotel Prabhupada',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
