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
    address: 'New Marine Drive Rd, near Light House, Puri, Odisha 752001, India',
    area: 'Near Light House, New Marine Drive Rd, Puri',
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
      standardTime: '10:00 AM',
      earlyCheckIn: 'Early check-in requests are handled according to room availability and current hotel policy on a chargeable basis.',
      idRequirement: 'Every Indian resident guest must carry valid proof of identity (Passport, Driving License, AADHAAR Card, or Voter ID). PAN Card is NOT accepted. Foreign nationals must present a valid Passport and valid Visa.',
    },
    checkOut: {
      standardTime: '08:00 AM',
      lateCheckOut: 'Late check-out requests are handled according to room availability and current hotel policy on a chargeable basis.',
      procedure: 'Guests settle any incidental bills and return room keys at the reception during departure.',
    },
    identification: {
      acceptedIds: 'Passport, Driving License, AADHAAR Card, Voter ID for Indian residents. Passport and valid Visa for foreign nationals.',
      panAccepted: false,
      panNotice: 'PAN Card is NOT accepted as valid identification proof.',
    },
    petPolicy: {
      objective: 'To establish clear guidelines for accommodating pets while ensuring hygiene, safety, and comfort for all guests and maintaining luxury standards.',
      permittedPets: 'Domesticated dogs and cats only. Maximum 1 pet per room or 2 small pets. Potentially dangerous breeds not allowed. Birds, reptiles, and exotic animals excluded.',
      mandatoryDocumentation: 'Vaccination certificate (current & valid anti-rabies), pet passport/licence, medical clearance if sick within last 72 hours, and signed Pet Waiver Form.',
      petFee: 'Rs. 1,200/- per day per night daily accommodation fee; non-refundable cleaning/disinfection fee applies.',
      securityDeposit: 'Rs. 4,000/- refundable security deposit per room (refunded after check-out inspection if no damage/excessive cleaning needed).',
      checkInProcess: 'Pet Policy Agreement signed at check-in, documents submitted, deposit paid, and "Pet in Room" door hanger must be displayed throughout the stay.',
      guestResponsibilities: 'Pets must be leashed/in carrier in all public areas and accompanied by owner. Max 2 hours unattended in room (notify Front Desk). Hotel towels/linen are NOT for pet use. Pets not allowed on bed/sofa. No bathing in hotel bathroom. Noise control mandatory.',
      allowedAreas: 'Guest Room (only occupied assigned room), Garden / Lawn (owner must clean waste), Lobby Lounge.',
      prohibitedAreas: 'Restaurants & food outlets, banquet/function rooms, swimming pool area, spa/salon, fitness center/gym, and any area designated by hotel management.',
      housekeeping: 'Guest must remove pet from room during housekeeping or coordinate convenient time; guest must be present if pet is in room when staff enters. Display DND sign if not needed.',
      cleaningFine: 'Rs. 300/- fine if pet waste is not cleaned up immediately by owner and disposed of in outside dumpsters.',
      damageAndLiability: 'Guest bears full responsibility for damage/injury. Stained linen charged at double laundry rate; replacement fee for permanent stains/damage. Security deposit becomes non-refundable if damage occurs. Hotel not liable for pet injury, illness, or loss.',
      serviceAnimals: 'Service Animals are always welcome — not subject to pet policy (no fees, breed restrictions, or standard documentation required).',
      peakSeason: 'Hotel may refuse pet admission during peak seasons/festivals due to limited pet room quotas.',
      nonCompliance: 'Ongoing violation may result in service discontinuation and eviction without refund. Damage deducted from deposit.',
    },
    visitorsPolicy: {
      registration: "Every visitor must be registered at Reception in the Visitor's Register.",
      roomAccess: 'Visitors are not allowed in guest rooms (seated at Reception); allowed in rooms only if accompanied in person by the in-house guest.',
      curfew: 'No visitors allowed inside the property after 20:00 hrs (8:00 PM).',
      photographers: 'External photographers must report at the Security Gate.',
    },
    swimmingPool: {
      costumeRequirement: 'Proper swimming costume is mandatory while entering the pool.',
      withoutCostumeCharge: 'Rs. 150/- per head charged to in-house guests for pool usage if without a proper swimming costume.',
      outsideGuests: 'Outside guests are strictly not allowed for pool usage (exclusive to in-house guests).',
    },
    propertyDamage: {
      inHouseGuest: 'In case of damage by in-house guest, actual repair/replacement cost is charged to the in-house guest.',
      visitorDamage: 'Losses or damage by a visitor will be recovered from the visitor or hosting guest.',
      discretion: 'Property damage charges solely depend upon the decision and assessment of Hotel Prabhupada management.',
    },
    childAndExtraBed: {
      childAbove10: 'Children above 10 years considered adult @ Rs. 1,200 + GST.',
      child7To10: 'Children 7-10 years charged Rs. 750 + GST.',
      extraPerson: 'Extra person charged Rs. 1,200 + GST on EP with extra bed.',
      extraBedChildUnder10: 'Extra bed for children under 10 charged Rs. 1,000 + GST.',
    },
    cancellationAndRefund: {
      moreThan2Days: 'More than 2 days before check-in: Free Cancellation. No charges will be applied.',
      zeroTo2Days: '0 to 2 days before check-in: Non-refundable. Full stay charge will be applied.',
      noShow: 'No refund/adjust on NO SHOW.',
      festivals: 'NO CANCELLATION & AMENDMENT during festival periods (Durga Puja, Holi, Diwali, Christmas & New Year).',
      refundTimeline: 'Approved refunds are processed back to the original payment source within 7–10 business days.',
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
      breakfast: 'Approximately 8:00 AM to 10:30 AM',
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

