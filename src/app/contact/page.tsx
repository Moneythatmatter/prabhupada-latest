import React from 'react';
import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Hotel Prabhupada Puri',
  description: 'Get in touch with Hotel Prabhupada, Puri. View phone numbers (+91 9583002952 / +91 9583002951), email addresses, New Marine Drive location address, interactive Google Map, and request a call back.',
};

export default function ContactPage() {
  return <ContactClient />;
}
