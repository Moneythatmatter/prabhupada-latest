import React from 'react';
import { Metadata } from 'next';
import { AttractionsClient } from './AttractionsClient';

export const metadata: Metadata = {
  title: 'Attractions | Hotel Prabhupada Puri',
  description: 'Explore top Puri tourist attractions near Hotel Prabhupada: Shree Jagannatha Temple, Swargadwar Sea Beach, Sudarshan Crafts Museum, Konark Sun Temple, and Chilika Lake.',
};

export default function AttractionsPage() {
  return <AttractionsClient />;
}
