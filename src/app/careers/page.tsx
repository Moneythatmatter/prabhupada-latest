import React from 'react';
import { Metadata } from 'next';
import { CareersClient } from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers at Hotel Prabhupada | Career Opportunities in Puri',
  description:
    'Hotel Prabhupada provides opportunities for individuals interested in building a rewarding career in the hospitality industry. Learn about career opportunities and recruitment procedures.',
  openGraph: {
    title: 'Career Opportunities at Hotel Prabhupada Puri',
    description:
      'Hotel Prabhupada welcomes talented, dedicated, and service-oriented individuals who wish to grow in the hospitality sector in Puri, Odisha.',
    url: 'https://www.hotelprabhupada.com/careers',
    siteName: 'Hotel Prabhupada',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
