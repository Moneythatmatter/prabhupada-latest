import React from 'react';
import { Metadata } from 'next';
import { AmenitiesClient } from './AmenitiesClient';

export const metadata: Metadata = {
  title: 'Amenities & Facilities | Hotel Prabhupada Puri | Sea Facing Luxury',
  description:
    'Explore world-class luxury amenities at Hotel Prabhupada, Puri. Enjoy high-speed Wi-Fi, room service, ocean-view air-conditioned comfort, free parking, and attentive Indian hospitality near Puri Beach.',
};

export default function AmenitiesPage() {
  return <AmenitiesClient />;
}
