import React from 'react';
import { Metadata } from 'next';
import { BlogClient } from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog | Hotel Prabhupada Puri',
  description:
    'Read travel tips, Puri heritage guides, and stay inspiration from Hotel Prabhupada — the pet-friendly sea-facing hotel in Puri, Odisha.',
};

export default function BlogPage() {
  return <BlogClient />;
}
