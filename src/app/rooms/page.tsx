import React from 'react';
import { Metadata } from 'next';
import { RoomsClient } from './RoomsClient';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Hotel Prabhupada Puri | Sea Facing Hotel',
  description:
    'Explore sea-facing luxury rooms & suites at Hotel Prabhupada, Puri. Featuring Premier Room (Non Sea facing), Deluxe Balcony side sea view, Superior Deluxe Balcony Side sea View, Family Quad (Non sea facing), Executive Front Sea View, and Suite Front Sea view near Puri Beach.',
  alternates: {
    canonical: '/rooms',
  },
};

export default function RoomsPage() {
  return <RoomsClient />;
}

