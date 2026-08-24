/**
 * Comprehensive Knowledge Base for Hotel Prabhupada, Puri, Odisha
 * Grounded in the actual website content.
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
  tagline: 'Best Pet Friendly Sea Facing Hotel in Puri, Odisha',
  location: {
    address: 'New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India',
    area: 'Baliapanda / New Marine Drive, Puri',
    googleMapsUrl: 'https://maps.google.com/?q=Hotel+Prabhupada+Puri+New+Marine+Drive+Road',
    directionsNote: 'Located on New Marine Drive Road facing the sea, within easy reach of Swargadwar Beach and Shree Jagannatha Temple.',
  },
  contact: {
    phones: ['+91 9583002952', '+91 9583002951'],
    emails: ['gm@hotelprabhupada.com', 'reservation@hotelprabhupada.com'],
    websiteUrl: 'https://hotelprabhupada.com',
    directBookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
  },
  policies: {
    checkIn: {
      standardTime: '10:00 AM',
      earlyCheckIn: 'Early check-in is subject to availability and provided on a chargeable basis.',
      idRequirement: 'Mandatory presentation of a valid Government-issued photo ID (Driving License, Passport, AADHAAR, or Voter ID Card) at check-in for all adult guests.',
    },
    checkOut: {
      standardTime: '08:00 AM',
      lateCheckOut: 'Late check-out is subject to availability and provided on a chargeable basis.',
      procedure: 'Guests must handover the room key at reception during check-out. All pending dues and bills must be settled prior to departure.',
    },
    petPolicy: {
      isPetFriendly: true,
      dailyFee: '₹1,200 per pet per day/night.',
      securityDeposit: '₹4,000 security deposit collected at check-in, completely refundable at check-out upon room inspection.',
      permittedAreas: 'Guest Room, Main Lobby, and Outside hotel grounds.',
      restrictedAreas: 'Pets are strictly not allowed in public Food & Beverage (dining/restaurant) areas.',
      rules: 'Guests are responsible for cleaning up after pets. Waste must be disposed of in outside dumpsters. A ₹300 cleaning fine applies for non-compliance.',
    },
    childAndExtraBed: {
      childAbove10: 'Children above 10 years of age are considered adults @ ₹1,200 + GST.',
      childBetween7And10: 'Children between 7-10 years of age are charged ₹750 + GST.',
      childExtraBedBelow10: 'In case an extra bed is requested for children below 10 years of age, ₹1,000 + GST applies.',
      adultExtraBed: 'Extra person/bed charges are ₹1,200 + GST on EP (European Plan).',
      supervision: 'Children must be accompanied by their parents/guardians at all times in guest rooms.',
    },
    cancellationAndRefund: {
      priorTo7Days: 'Free cancellation (no charge) if cancelled at least 7 days before the arrival date.',
      priorTo72Hours: '50% of the room tariff is charged if cancelled between 7 days and 72 hours prior to arrival.',
      priorTo24HoursOrNoShow: '100% of the room tariff is charged (no refund) if cancelled within 24 hours of arrival or in case of No-Show.',
      amendmentPolicy: 'Any amendment of booking dates is treated as a cancellation of the existing reservation and is subject to standard cancellation rules.',
      bookingPortals: 'Bookings made via third-party OTAs (like Booking.com, MakeMyTrip, etc.) must be amended or cancelled through the respective booking platform.',
    },
    smokingPolicy: 'The hotel is entirely non-smoking throughout all indoor spaces and guest rooms.',
    paymentMethods: 'All major credit cards, debit cards, and standard digital payment methods are accepted at check-in and checkout.',
  },
  rooms: [
    {
      id: 'family-quad-sharing',
      name: 'Family Quad Sharing',
      badgeTitle: 'FAMILY QUAD SHARING',
      description: 'Thoughtfully designed family room setup for business or leisure. Features comfortable quad sleeping arrangements, en-suite bathroom, well-lit desk area, 24-hour room service, and free high-speed Wi-Fi.',
      features: ['Quad Sharing Setup', 'En-Suite Bathroom', '24-Hour Room Service', 'Well-Lit Desk Area', 'Free High-Speed Wi-Fi'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'executive-front-sea',
      name: 'Executive Front Sea Facing',
      badgeTitle: 'EXECUTIVE FRONT SEA FACING',
      description: 'Sanctuary of peace and comfort featuring direct ocean views of the Puri coastline, elegant interiors, plush furnishings, whisper-quiet split air conditioning, and modern entertainment.',
      features: ['Direct Ocean View', 'Plush Furnishings', 'Air Conditioning', 'Free High-Speed Wi-Fi', 'In-Room Entertainment'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'premier-room',
      name: 'Premier Room',
      badgeTitle: 'PREMIER ROOM',
      description: 'Luxury and comfort combining modern aesthetics with premium amenities: high-speed optical fiber internet, in-room satellite entertainment, spacious en-suite bathroom, and 24-hour concierge service.',
      features: ['Modern Aesthetics', 'High-Speed Internet', 'In-Room Entertainment', 'Spacious Bathroom', '24-Hour Concierge'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'deluxe-balcony-sea-view',
      name: 'Deluxe With Balcony Sea View',
      badgeTitle: 'DELUXE WITH BALCONY SEA VIEW',
      description: 'Features a private sea-facing balcony with views of Puri beach, comfortable bedding, well-lit desk, en-suite bathroom, air conditioning, and 24-hour room service.',
      features: ['Private Sea View Balcony', 'Well-Lit Desk Area', 'Air Conditioning', 'Free High-Speed Wi-Fi', '24-Hour Room Service'],
      bookingUrl: 'https://live.ipms247.com/booking/book-rooms-hotelprabhupada',
      exploreUrl: '/rooms',
    },
    {
      id: 'superior-deluxe',
      name: 'Superior Deluxe Balcony Sea View',
      badgeTitle: 'SUPERIOR DELUXE BALCONY SEA VIEW',
      description: 'Perfect blend of style and functional luxury with panoramic balcony sea views, high-speed Wi-Fi, flat-screen HD TV, plush bedding, daily housekeeping, and Odia hospitality.',
      features: ['Sea View Balcony', 'Free High-Speed Wi-Fi', 'Air Conditioning', 'Flat-Screen TV', 'Daily Housekeeping'],
      bookingUrl: 'https://live.ipms247.com/booking/roomwisedata.php?hid=hotelprabhupada&roomtypeunkid=3636500000000000009',
      exploreUrl: '/rooms',
    },
    {
      id: 'suite-front',
      name: 'Suite Front Sea View',
      badgeTitle: 'SUITE FRONT SEA VIEW',
      description: 'The ultimate tranquil retreat offering frontal panoramic sea views, contemporary coastal décor, spacious seating area, premium king bedding, dedicated workspace, and luxury en-suite bathroom.',
      features: ['Front Ocean View', 'Spacious Seating Area', 'Free High-Speed Wi-Fi', 'Flat-Screen TV', 'En-Suite Bathroom'],
      bookingUrl: 'https://live.ipms247.com/booking/roomwisedata.php?hid=hotelprabhupada&roomtypeunkid=3636500000000000010',
      exploreUrl: '/rooms',
    },
  ] as RoomInfo[],
  amenities: [
    { name: 'Free High-Speed Wi-Fi', description: 'Optical fiber wireless internet in all guest rooms, balconies, and public lounges.' },
    { name: '24-Hour Room Service', description: 'Freshly prepared Odia seafood, North Indian dishes, and Continental delicacies delivered to your room.' },
    { name: 'Daily Housekeeping', description: 'Daily room sanitization, fresh cotton linens, and luxury bath essentials.' },
    { name: 'Free Secure Parking', description: 'Spacious on-site secure parking facility available free of charge for guest vehicles.' },
    { name: 'Modern En-Suite Bathrooms', description: 'Tiled bathrooms with continuous hot & cold water rain showers and toiletries.' },
    { name: 'Split Air Conditioning', description: 'Whisper-quiet split AC with individual room temperature controls.' },
    { name: 'King Sized Beds', description: 'Plush ergonomic mattresses wrapped in crisp premium white cotton linens.' },
    { name: 'HD Satellite TV', description: 'High-definition flat screen television with entertainment, news, and sports channels.' },
  ] as AmenityInfo[],
  facilities: [
    { name: 'Swimming Pool', description: 'Outdoor rooftop/poolside pool for relaxation under the open Puri sky.' },
    { name: 'In-House Restaurant', description: 'Multi-cuisine dining featuring authentic Odia delicacies, fresh seafood, and vegetarian specialties.' },
    { name: 'Conference Hall', description: 'Fully equipped hall for business meetings, conferences, and family celebrations.' },
    { name: 'Guest Lounge', description: 'Quiet, air-conditioned shared lounge to relax between temple visits and beach walks.' },
    { name: 'Wellness Spa', description: 'Rejuvenating body treatments and wellness therapies.' },
    { name: 'Open Green Lawn', description: 'Spacious manicured lawn on New Marine Drive for outdoor leisure, events, and photos.' },
    { name: 'Elevator / Lift', description: 'Convenient elevator access serving all floors from lobby to rooms.' },
  ] as FacilityInfo[],
  dining: {
    inHouseRestaurant: 'The in-house restaurant serves authentic Odia cuisine, coastal seafood, North Indian dishes, and continental options.',
    roomDiningHours: '24 hours in-room dining available with a curated overnight menu.',
    breakfast: 'Complimentary buffet breakfast is available for eligible room plans.',
  },
  attractions: [
    { name: 'Shree Jagannatha Temple Puri', description: 'The famous 12th-century sacred temple in the heart of Puri.' },
    { name: 'Swargadwar Sea Beach & Market', description: 'Vibrant golden beach waves and coastal handicraft markets nearby.' },
    { name: 'Konark Sun Temple', description: 'Iconic 13th-century UNESCO World Heritage architectural wonder.' },
    { name: 'Chilika Lake', description: 'Asia’s largest brackish lagoon for boating and dolphin/birdwatching.' },
    { name: 'Blue Flag Beach Puri', description: 'Clean, certified eco-friendly beach with clean waters and promenade.' },
    { name: 'Sudarshan Crafts Museum', description: 'Traditional Odisha stone carving and Odia artisan heritage.' },
    { name: 'Raghurajpur Heritage Village', description: 'Famous heritage craft village known for master Pattachitra painters.' },
    { name: 'Pipli', description: 'Famous town for vibrant applique and textile handicrafts.' },
  ] as AttractionInfo[],
  negativeConstraints: [
    'Gym / Fitness Centre: Hotel Prabhupada does not currently have a gym or fitness centre on premise.',
    'Smoking: Strictly not allowed in any room or indoor area (100% non-smoking hotel).',
    'Third-party OTA bookings: Modifications or cancellations for bookings made on third-party websites (Agoda, MakeMyTrip, Booking.com) cannot be done directly by the hotel; guests must contact their booking platform.',
  ],
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
