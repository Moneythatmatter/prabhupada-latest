import React from 'react';
import { Metadata } from 'next';
import { AmenitiesClient } from './AmenitiesClient';

export const metadata: Metadata = {
  title: 'Amenities & Facilities | Hotel Prabhupada Puri | Sea Facing Luxury',
  description:
    'Explore world-class luxury amenities at Hotel Prabhupada, Puri. Enjoy high-speed Wi-Fi, room service, ocean-view air-conditioned comfort, free parking, and attentive Indian hospitality near Puri Beach.',
  alternates: {
    canonical: '/amenities',
  },
};

const amenitiesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.hotelprabhupada.com/amenities#webpage',
      url: 'https://www.hotelprabhupada.com/amenities',
      name: 'Amenities & Facilities | Hotel Prabhupada Puri | Sea Facing Luxury',
      description:
        'Explore world-class luxury amenities at Hotel Prabhupada, Puri. Enjoy high-speed Wi-Fi, room service, ocean-view air-conditioned comfort, free parking, and attentive Indian hospitality near Puri Beach.',
      inLanguage: 'en-IN',
      isPartOf: { '@id': 'https://www.hotelprabhupada.com/#website' },
      about: { '@id': 'https://www.hotelprabhupada.com/#hotel' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.hotelprabhupada.com/images/official-hero1.webp',
      },
      breadcrumb: { '@id': 'https://www.hotelprabhupada.com/amenities#breadcrumb' },
      mainEntity: { '@id': 'https://www.hotelprabhupada.com/amenities#amenitylist' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.hotelprabhupada.com/amenities#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hotelprabhupada.com/' },
        { '@type': 'ListItem', position: 2, name: 'Amenities', item: 'https://www.hotelprabhupada.com/amenities' },
      ],
    },
    {
      '@type': 'Hotel',
      '@id': 'https://www.hotelprabhupada.com/#hotel',
      name: 'Hotel Prabhupada',
      url: 'https://www.hotelprabhupada.com/',
      telephone: '+91-9583002952',
      email: 'reservation@hotelprabhupada.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'New Marine Drive Road, Near Light House',
        addressLocality: 'Puri',
        addressRegion: 'Odisha',
        postalCode: '752001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.7899492,
        longitude: 85.8070141,
      },
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Free Wi-Fi',
          description:
            'High-speed optical fiber wireless internet across all guest rooms and public areas within the premises.',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Room Service',
          description:
            'Freshly prepared local Odia seafood, North Indian classics, and Continental meals delivered to your room.',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Daily Housekeeping',
          description: 'Daily room sanitization, crisp cotton linen refresh, and premium bath essentials.',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Limited Free Parking',
          description: 'Secure parking facility available free of charge for guest vehicles.',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Air Conditioning',
          description: 'Split AC with individual temperature controls in every room.',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'King-Size Beds',
          description: 'Pillow-top mattresses with crisp white cotton linens.',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'HD Television',
          description: 'High-definition flat screen satellite television with entertainment and sports channels.',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: '24/7 Staff Assistance',
          description: '24/7 dedicated hospitality staff for guest assistance.',
          value: true,
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.hotelprabhupada.com/amenities#amenitylist',
      name: 'Hotel Prabhupada Amenities and Facilities',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Free Wi-Fi',
          description:
            'High-speed optical fiber wireless internet across all guest rooms and public areas within the premises.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Room Service',
          description: 'Local Odia seafood, North Indian classics, and Continental meals delivered to your room.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Daily Housekeeping',
          description: 'Daily room sanitization, cotton linen refresh, and premium bath essentials.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Limited Free Parking',
          description: 'Secure parking facility available free of charge for guest vehicles.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Air Conditioner',
          description: 'Split AC with individual temperature controls in every room.',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'King-Sized Beds',
          description: 'Pillow-top mattresses with crisp white cotton linens.',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'HD TV',
          description: 'High-definition flat screen satellite television with entertainment and sports channels.',
        },
      ],
    },
  ],
};

export default function AmenitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amenitiesSchema).replace(/</g, '\\u003c'),
        }}
      />
      <AmenitiesClient />
    </>
  );
}
