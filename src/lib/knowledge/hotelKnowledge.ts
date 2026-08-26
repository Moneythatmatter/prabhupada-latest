/**
 * Comprehensive Knowledge Base for Hotel Prabhupada, Puri, Odisha
 * Grounded in PRABHUPADA_INFO.md (Official Source of Truth).
 */

export interface RoomInfo {
  id: string;
  name: string;
  badgeTitle: string;
  description: string;
  features: string[];
  bookingUrl: string;
  exploreUrl: string;
}

export interface FacilityInfo {
  name: string;
  description: string;
}

export interface AmenityInfo {
  name: string;
  description: string;
}

export interface AttractionInfo {
  name: string;
  description: string;
}

export const HOTEL_INFO = {
  name: 'Hotel Prabhupada',
  tagline: 'Comfortable Hospitality & Sea-Facing Accommodation in Puri, Odisha',
  location: {
    address: 'New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India',
    area: 'Baliapanda / New Marine Drive Road, Puri',
    googleMapsUrl: 'https://maps.google.com/?q=Hotel+Prabhupada+Puri+New+Marine+Drive+Road',
    directionsNote: 'Situated on New Marine Drive Road near the sea beach, providing convenient access to Shree Jagannath Temple, Swargadwar, Konark, and Chilika Lake.',
  },
  contact: {
    phones: ['+91 9583002951', '+91 9583002952'],
    emails: ['reservation@hotelprabhupada.com', 'gm@hotelprabhupada.com'],
    websiteUrl: 'https://www.hotelprabhupada.com',
    directBookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
  },
  policies: {
    checkIn: {
      standardTime: 'Handled as per hotel policy (Contact reservation for exact slot)',
      earlyCheckIn: 'Early check-in requests are handled according to room availability and current hotel policy.',
      idRequirement: 'Guests should carry valid government-issued identification (AADHAAR, Voter ID, Driving License, or Passport for Indian guests and Passport/Visa for foreign nationals).',
    },
    checkOut: {
      standardTime: 'Handled as per hotel policy',
      lateCheckOut: 'Late check-out requests are handled according to room availability and current hotel policy.',
      procedure: 'Guests settle any incidental bills and return room keys at the reception during departure.',
    },
    petPolicy: {
      description: 'Pet accommodation is subject to Hotel Prabhupada management policy and prior confirmation.',
      rules: 'Please confirm specific pet policy terms and designated areas with hotel management prior to arrival.',
    },
    childAndExtraBed: {
      childPolicy: 'Families travelling with children are welcome. Child accommodation and meal charges follow hotel policy based on age and selected plan.',
      extraPerson: 'Extra-person and extra-mattress accommodation depends on room category and current hotel policy.',
    },
    cancellationAndRefund: {
      cancellation: 'Cancellation terms vary based on room rate, booking source, travel dates, and season. Provided according to confirmed booking plan.',
      refund: 'Refund conditions follow approved hotel policy and reservation terms.',
      modifications: 'Booking modifications (dates, room category, number of guests) are handled per current hotel modification policy.',
    },
    smokingPolicy: 'Smoking rules follow hotel guidelines and local regulations for guest safety and comfort.',
    paymentMethods: 'Cash, Debit cards, Credit cards, UPI, Bank transfer, and Online payment gateways are accepted.',
  },
  rooms: [
    {
      id: 'premier-room',
      name: 'Premier Room',
      badgeTitle: 'PREMIER ROOM',
      description: 'Designed to provide guests with a comfortable stay and essential room amenities. Suitable for couples, individual travellers, short stays, and business travellers.',
      features: ['Essential Amenities', 'High-Speed Wi-Fi', 'Room Service Access', 'Housekeeping', 'Comfortable Bedding'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'deluxe-room',
      name: 'Deluxe Room',
      badgeTitle: 'DELUXE ROOM',
      description: 'Provides spacious and comfortable accommodation with a larger bedroom area compared to Premier Room. Suitable for couples, families, leisure travellers, and longer stays.',
      features: ['Spacious Layout', 'En-Suite Bathroom', 'Wi-Fi & Television', 'Daily Housekeeping', '24-Hour Room Service'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'executive-room',
      name: 'Executive Room',
      badgeTitle: 'EXECUTIVE ROOM',
      description: 'Offers an enhanced accommodation experience with a higher level of comfort and room amenities compared with the Deluxe Room. Suitable for travellers who prefer upgraded comfort.',
      features: ['Enhanced Comfort', 'Upgraded Furnishings', 'Smart TV / Entertainment', 'High-Speed Wi-Fi', 'Plush Bedding'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'family-room',
      name: 'Family Room',
      badgeTitle: 'FAMILY ROOM',
      description: 'Designed for families and larger travelling parties who prefer additional sleeping space and comfortable accommodation together. Perfect for small groups, relatives, and parents travelling with children.',
      features: ['Extra Sleeping Capacity', 'Family Configuration', 'En-Suite Bathroom', 'Room Service', 'High-Speed Wi-Fi'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'superior-deluxe-balcony-sea-view',
      name: 'Superior Deluxe Balcony Sea View',
      badgeTitle: 'SUPERIOR DELUXE BALCONY SEA VIEW',
      description: 'Designed for guests wishing to enjoy a sea-view experience. Includes a private balcony overlooking the sea, modern furnishings, and scenic coastal atmosphere.',
      features: ['Private Balcony', 'Sea View', 'Flat-Screen TV', 'High-Speed Wi-Fi', 'Modern Room Furnishings'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'suite-front-sea-view',
      name: 'Suite Front Sea View',
      badgeTitle: 'SUITE FRONT SEA VIEW',
      description: 'Premium accommodation category designed for guests looking for a spacious and enhanced stay experience with a front-facing sea view, workspace, and premium bedding.',
      features: ['Front Sea View', 'Spacious Seating & Workspace', 'Premium Bedding', 'In-Room Entertainment', 'Modern Furnishings'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
  ] as RoomInfo[],
  amenities: [
    { name: 'High-Speed Wi-Fi', description: 'Available throughout the hotel for seamless guest connectivity.' },
    { name: 'Room Service & In-Room Dining', description: 'Available with a diverse menu selection delivered right to your room.' },
    { name: 'Daily Housekeeping', description: 'Professional housekeeping services to keep your room fresh and clean.' },
    { name: 'Parking', description: 'On-site parking facility available for guests travelling by car.' },
    { name: 'Smart TV & Television', description: 'In-room entertainment channels for leisure and relaxation.' },
    { name: 'Laundry Service', description: 'Laundry and garment care services available for guests.' },
    { name: 'Power Backup & Security', description: '24/7 power backup, CCTV surveillance, and security services.' },
    { name: 'Luggage Storage & Cloak Room', description: 'Safe storage for guest luggage before check-in or after check-out.' },
  ] as AmenityInfo[],
  facilities: [
    { name: 'Swimming Pool', description: 'Outdoor swimming pool for guest recreation and relaxation.' },
    { name: 'In-House Restaurant (Oris)', description: 'Multi-cuisine restaurant offering Indian, Bengali, and Chinese cuisines.' },
    { name: 'Ayurvedic Spa', description: 'Ayurvedic spa treatments, wellness therapies, and relaxation services.' },
    { name: 'Travel Desk & Local Assistance', description: 'Assistance with sightseeing tours, Jagannath temple visits, transfers, and cabs.' },
    { name: 'Open Green Lawn', description: 'Spacious lawn area for outdoor leisure and relaxation.' },
    { name: 'Welcome Drink', description: 'Refreshing welcome drink upon guest arrival.' },
  ] as FacilityInfo[],
  restaurant: {
    name: 'Oris',
    cuisines: ['Indian cuisine', 'Bengali cuisine', 'Chinese cuisine'],
    operatingDays: 'Monday through Sunday (Daily)',
    timings: {
      general: 'Approximately 7:00 AM to 11:00 PM',
      breakfast: 'Approximately 8:30 AM to 11:00 AM',
      lunch: 'Approximately 12:00 PM to 2:30 PM',
      dinner: 'Approximately 7:00 PM to 10:30 PM',
    },
    breakfastInfo: 'Available through the restaurant or selected room booking meal plans.',
  },
  attractions: [
    { name: 'Shree Jagannath Temple', description: 'One of the most sacred pilgrimage and cultural destinations in India.' },
    { name: 'Puri Sea Beach', description: 'Located right near the hotel along New Marine Drive Road.' },
    { name: 'Swargadwar', description: 'Famous coastal hub for local shopping, beach activities, and seafood.' },
    { name: 'Sudarshan Crafts Museum', description: 'Celebrated cultural centre for Odisha traditional arts and stone sculptures.' },
    { name: 'Konark Sun Temple', description: 'UNESCO World Heritage 13th-century monument accessible from Puri.' },
    { name: 'Chilika Lake', description: 'Asia’s largest coastal lagoon, famous for boating and biodiversity.' },
  ] as AttractionInfo[],
  internalLinks: {
    rooms: '/rooms',
    amenities: '/amenities',
    hotelPolicy: '/hotel-policy',
    refundPolicy: '/refund-policy',
    faqs: '/faqs',
    attractions: '/attractions',
    about: '/about',
    contact: '/contact',
    bookingEngine: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
  },
};

