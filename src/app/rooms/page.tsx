import React from 'react';
import { Metadata } from 'next';
import { RoomsClient } from './RoomsClient';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Hotel Prabhupada Puri | Sea Facing Hotel',
  description:
    'Explore sea-facing luxury rooms & suites at Hotel Prabhupada, Puri. Featuring Premier Room (Non Sea View), Deluxe Balcony (Side Sea View), Superior Deluxe Balcony (Side Sea View), Family Quad (Non Sea View), Executive (Front Sea View), and Suite (Front Sea View) near Puri Beach.',
  alternates: {
    canonical: '/rooms',
  },
};

export default function RoomsPage() {
  return <RoomsClient />;
}

