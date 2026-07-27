import React from 'react';
import { Metadata } from 'next';
import { RoomsClient } from './RoomsClient';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Hotel Prabhupada Puri | Sea Facing Hotel',
  description:
    'Explore sea-facing luxury rooms & suites at Hotel Prabhupada, Puri. Featuring Family Quad Sharing, Executive Front Sea Facing, Premier Room, Deluxe With Balcony Sea View, Superior Deluxe Balcony Sea View, and Suite Front Sea View near Puri Beach.',
};

export default function RoomsPage() {
  return <RoomsClient />;
}

