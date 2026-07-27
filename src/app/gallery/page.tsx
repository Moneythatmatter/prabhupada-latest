import React from 'react';
import { Metadata } from 'next';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = {
  title: 'Photo Gallery | Hotel Prabhupada Puri | Sea Facing Hotel',
  description:
    'Browse photos of sea-facing luxury rooms, suites, ocean balcony views, beachfront ambiance, and nearby Puri attractions at Hotel Prabhupada, Puri, Odisha.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
