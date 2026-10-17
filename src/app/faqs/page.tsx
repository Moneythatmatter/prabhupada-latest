import React from 'react';
import { Metadata } from 'next';
import { FaqsClient } from './FaqsClient';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ's) | Hotel Prabhupada Puri",
  description:
    'Find answers to frequently asked questions about Hotel Prabhupada, Puri. Information on check-in/check-out timings, room categories, in-house restaurant (Oris), swimming pool, pet policy, location, and travel assistance.',
  alternates: {
    canonical: '/faqs',
  },
  openGraph: {
    title: "FAQ's | Hotel Prabhupada Puri",
    description:
      'Frequently asked questions about rooms, dining, check-in policies, swimming pool, and location at Hotel Prabhupada, New Marine Drive, Puri.',
    url: 'https://hotelprabhupada.com/faqs',
    siteName: 'Hotel Prabhupada',
    locale: 'en_IN',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': 'https://www.hotelprabhupada.com/faqs#faqpage',
      url: 'https://www.hotelprabhupada.com/faqs',
      name: "Frequently Asked Questions (FAQ's) | Hotel Prabhupada Puri",
      description:
        'Find answers to frequently asked questions about Hotel Prabhupada, Puri: check-in and check-out timings, ID requirements, pet policy, swimming pool, visitors, cancellation, rooms, parking, Wi-Fi and reservations.',
      inLanguage: 'en-IN',
      isPartOf: { '@id': 'https://www.hotelprabhupada.com/#website' },
      about: { '@id': 'https://www.hotelprabhupada.com/#hotel' },
      breadcrumb: { '@id': 'https://www.hotelprabhupada.com/faqs#breadcrumb' },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where is Hotel Prabhupada located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hotel Prabhupada is located on New Marine Drive Road, Near light house, Puri, Odisha 752001, just steps from the sea beach.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the check-in and check-out timings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard check-in time is 11:00 AM and standard check-out time is 09:00 AM. Early check-in and late check-out are subject to room availability and are chargeable.',
          },
        },
        {
          '@type': 'Question',
          name: 'What valid identification (ID) proof is required at check-in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Every guest must present valid photo identification at check-in. Accepted Indian proof of identity is a Passport, Driving License, Aadhaar Card or Voter's Card. PAN Card is not accepted. Foreign nationals must present a valid Passport and a valid Indian Visa. The hotel may refuse check-in if no valid ID is provided.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is Hotel Prabhupada pet-friendly? What are the pet charges and rules?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Hotel Prabhupada accommodates domesticated dogs and cats, with a maximum of 1 pet per room or 2 small pets. Potentially dangerous breeds, birds, reptiles and exotic pets are not allowed. The pet stay fee is Rs. 1,200 per day, with a refundable security deposit of Rs. 4,000 per room. A valid anti-rabies vaccination certificate and a signed pet waiver form are required at check-in. Pets must be leashed or in a carrier in public areas and are not allowed in restaurants, the swimming pool area, banquet rooms, spa or gym. Service animals are always welcome. The hotel may refuse pet admission during peak season, and a limited quota of pet-friendly rooms applies.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Swimming Pool policy and charges?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The outdoor swimming pool is exclusive to registered in-house guests; outside guests are not allowed. Guests must wear proper swimming attire, and in-house guests found in the pool without a proper swimming costume are charged Rs. 150 per head. Children must be accompanied by an adult guardian at all times in and around the pool area.',
          },
        },
        {
          '@type': 'Question',
          name: "What is the Visitor's Policy?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Every visitor must be registered at the Reception in the Visitor's Register. Visitors are not allowed inside guest rooms and may be seated in the Reception lounge; in special cases they may enter a room only when accompanied in person by the registered in-house guest. No visitors are allowed inside the property after 8:00 PM. External photographers and media crews must report at the Security Gate before entering.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Cancellation and Refund Policy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For individual reservations, cancellation more than 2 days before check-in is free with no charges. Cancellations within 2 days (48 hours) of check-in are non-refundable and the full stay charge applies, as do no-shows. No cancellation or amendment is allowed during festival periods (Durga Puja, Holi, Diwali, Christmas and New Year), and any change of dates is treated as a cancellation. Approved refunds are processed to the original payment source within 7 to 10 business days. For bookings made through OTAs or travel agents, cancellations and refunds must be processed through that booking channel.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Property Damage Policy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Guests are expected to treat hotel property, fixtures, fittings and amenities with reasonable care. For damage caused by an in-house guest, the actual replacement or repair cost is charged to the guest's account. Damage or loss caused by a visitor is recovered from the visitor or from the hosting registered guest. Charges are based on the assessment of Hotel Prabhupada management.",
          },
        },
        {
          '@type': 'Question',
          name: 'What room categories are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hotel Prabhupada offers six room categories: Premier Room (Non Sea View), Deluxe Balcony (Side Sea View), Superior Deluxe Balcony (Side Sea View), Family Quad (Non Sea View), Executive (Front Sea View) and Suite (Front Sea View).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is parking and Wi-Fi available at the hotel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Limited free parking is available for guest vehicles, and free high-speed optical fiber Wi-Fi is available in all guest rooms and public areas within the premises.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Hotel Prabhupada for reservations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can call +91 9583002952 or +91 9583002951, email reservation@hotelprabhupada.com, message the hotel on WhatsApp at +91 9583002952, or book online through the Book Your Stay option on the website.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.hotelprabhupada.com/faqs#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hotelprabhupada.com/' },
        { '@type': 'ListItem', position: 2, name: "FAQ's", item: 'https://www.hotelprabhupada.com/faqs' },
      ],
    },
  ],
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <FaqsClient />
    </>
  );
}
