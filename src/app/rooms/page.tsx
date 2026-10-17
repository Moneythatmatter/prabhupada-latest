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

const roomsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.hotelprabhupada.com/rooms#webpage',
      url: 'https://www.hotelprabhupada.com/rooms',
      name: 'Rooms & Suites | Hotel Prabhupada Puri | Sea Facing Hotel',
      description:
        'Explore sea-facing luxury rooms & suites at Hotel Prabhupada, Puri. Featuring Premier Room (Non Sea View), Deluxe Balcony (Side Sea View), Superior Deluxe Balcony (Side Sea View), Family Quad (Non Sea View), Executive (Front Sea View), and Suite (Front Sea View) near Puri Beach.',
      inLanguage: 'en-IN',
      isPartOf: { '@id': 'https://www.hotelprabhupada.com/#website' },
      about: { '@id': 'https://www.hotelprabhupada.com/#hotel' },
      breadcrumb: { '@id': 'https://www.hotelprabhupada.com/rooms#breadcrumb' },
      mainEntity: { '@id': 'https://www.hotelprabhupada.com/rooms#roomlist' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.hotelprabhupada.com/rooms#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hotelprabhupada.com/' },
        { '@type': 'ListItem', position: 2, name: 'Rooms & Suites', item: 'https://www.hotelprabhupada.com/rooms' },
      ],
    },
    {
      '@type': 'Hotel',
      '@id': 'https://www.hotelprabhupada.com/#hotel',
      name: 'Hotel Prabhupada',
      url: 'https://www.hotelprabhupada.com/',
      telephone: '+91-9583002952',
      email: 'reservation@hotelprabhupada.com',
      petsAllowed: true,
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
      containsPlace: [
        { '@id': 'https://www.hotelprabhupada.com/rooms#premier-room' },
        { '@id': 'https://www.hotelprabhupada.com/rooms#deluxe-balcony' },
        { '@id': 'https://www.hotelprabhupada.com/rooms#superior-deluxe-balcony' },
        { '@id': 'https://www.hotelprabhupada.com/rooms#family-quad' },
        { '@id': 'https://www.hotelprabhupada.com/rooms#executive' },
        { '@id': 'https://www.hotelprabhupada.com/rooms#suite' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.hotelprabhupada.com/rooms#roomlist',
      name: 'Rooms & Suites at Hotel Prabhupada, Puri',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.hotelprabhupada.com/rooms#premier-room' } },
        { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.hotelprabhupada.com/rooms#deluxe-balcony' } },
        { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.hotelprabhupada.com/rooms#superior-deluxe-balcony' } },
        { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.hotelprabhupada.com/rooms#family-quad' } },
        { '@type': 'ListItem', position: 5, item: { '@id': 'https://www.hotelprabhupada.com/rooms#executive' } },
        { '@type': 'ListItem', position: 6, item: { '@id': 'https://www.hotelprabhupada.com/rooms#suite' } },
      ],
    },
    {
      '@type': 'HotelRoom',
      '@id': 'https://www.hotelprabhupada.com/rooms#premier-room',
      name: 'Premier Room (Non Sea View)',
      description:
        'Premier Room (Non Sea View) at Hotel Prabhupada, thoughtfully designed with modern aesthetics and essential luxury amenities, featuring air conditioning, high-speed Wi-Fi, smart TV, tea/coffee maker, and personalized hospitality for a serene stay in Puri.',
      url: 'https://www.hotelprabhupada.com/rooms',
      image: 'https://www.hotelprabhupada.com/images/official-hero1.webp',
      bed: { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'King-size bed', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioner (AC)', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'High-speed Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea/Coffee Maker', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea Poi & Chairs', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Mini Fridge', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'RO Water with Alkaline Refilled Bottle', value: true },
      ],
    },
    {
      '@type': 'HotelRoom',
      '@id': 'https://www.hotelprabhupada.com/rooms#deluxe-balcony',
      name: 'Deluxe Balcony (Side Sea View)',
      description:
        'Deluxe Balcony (Side Sea View) is designed for both spiritual and leisure travelers, with a comfortable bed, en-suite bathroom, well-lit desk area, and a private balcony overlooking coastal ocean vistas.',
      url: 'https://www.hotelprabhupada.com/rooms',
      image: 'https://www.hotelprabhupada.com/images/deluxe-balcony.png',
      bed: { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'King-size bed', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Private Balcony', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Side Sea View', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioner (AC)', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'High-speed Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea/Coffee Maker', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Mini Fridge', value: true },
      ],
    },
    {
      '@type': 'HotelRoom',
      '@id': 'https://www.hotelprabhupada.com/rooms#superior-deluxe-balcony',
      name: 'Superior Deluxe Balcony (Side Sea View)',
      description:
        'Superior Deluxe Balcony (Side Sea View) blends style and seaside functionality for spiritual and leisure travelers, with modern amenities and plush bedding. Elevator is accessible till 2nd floor (not preferable for senior citizens).',
      url: 'https://www.hotelprabhupada.com/rooms',
      image: 'https://www.hotelprabhupada.com/images/superior-deluxe-balcony-view.png',
      bed: { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'King-size bed', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Private Balcony', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Side Sea View', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioner (AC)', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'High-speed Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea/Coffee Maker', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Mini Fridge', value: true },
      ],
    },
    {
      '@type': 'HotelRoom',
      '@id': 'https://www.hotelprabhupada.com/rooms#family-quad',
      name: 'Family Quad (Non Sea View)',
      description:
        'Family Quad (Non Sea View) rooms are designed for families and travelling groups, with 2 comfortable double beds, en-suite bathroom, smart TV, tea/coffee maker, and personalized room service.',
      url: 'https://www.hotelprabhupada.com/rooms',
      image: 'https://www.hotelprabhupada.com/images/family-quad.png',
      bed: { '@type': 'BedDetails', numberOfBeds: 2, typeOfBed: 'Double' },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: '2 Double Beds', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioner (AC)', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'High-speed Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea/Coffee Maker', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea Poi & Chairs', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Mini Fridge', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'RO Water with Alkaline Refilled Bottle', value: true },
      ],
    },
    {
      '@type': 'HotelRoom',
      '@id': 'https://www.hotelprabhupada.com/rooms#executive',
      name: 'Executive (Front Sea View)',
      description:
        'Executive (Front Sea View) features elegant interiors, plush furnishings, modern technology and panoramic front ocean views, suitable for both short and extended stays.',
      url: 'https://www.hotelprabhupada.com/rooms',
      image: 'https://www.hotelprabhupada.com/images/hero2.webp',
      bed: { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'King-size bed', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Long Deewan Seating', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Panoramic Front Sea View', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioner (AC)', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Room Humidifier', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'High-speed Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Bathrobe & Slippers', value: true },
      ],
    },
    {
      '@type': 'HotelRoom',
      '@id': 'https://www.hotelprabhupada.com/rooms#suite',
      name: 'Suite (Front Sea View)',
      description:
        'Suite (Front Sea View) is an expansive ocean retreat with contemporary décor, plush king bedding, a dedicated sofa seating area, 43-inch Smart TV, dual air conditioner, and full VIP amenities.',
      url: 'https://www.hotelprabhupada.com/rooms',
      image: 'https://www.hotelprabhupada.com/images/room-suite.webp',
      bed: { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'King-size bed', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Dedicated Sofa Set', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Dual Air Conditioner', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Panoramic Front Sea View', value: true },
        { '@type': 'LocationFeatureSpecification', name: '43-inch Smart TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Fruit Platter & Snacks', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Plush Bathrobe & Slippers', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Hair Dryer', value: true },
      ],
    },
  ],
};

export default function RoomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roomsSchema).replace(/</g, '\\u003c'),
        }}
      />
      <RoomsClient />
    </>
  );
}


