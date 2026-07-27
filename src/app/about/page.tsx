import React from 'react';
import { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About Hotel Prabhupada | Premier Sea Facing Hotel in Puri',
  description:
    'Discover Hotel Prabhupada, the premier beachfront hotel in Puri, Odisha. Offering sea-facing rooms, pet-friendly hospitality, 24/7 reservations, and a prime location on New Marine Drive Road.',
};

export default function AboutPage() {
  return <AboutClient />;
}
