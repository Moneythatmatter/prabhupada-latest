/**
 * Official Hotel Policies Data for Hotel Prabhupada, Puri
 * Centralized data source for Pet Policy, Visitor's Policy, Pool Policy,
 * Property Damage, Identification Requirements, Cancellation & Refund,
 * Check-in/Check-out, and Child & Extra Bed charges.
 */

export interface PolicyRuleItem {
  text: string;
  highlight?: string;
  important?: boolean;
}

export interface PolicySection {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  description?: string;
  badge?: string;
  items: PolicyRuleItem[];
  subsections?: {
    subtitle: string;
    items: string[];
  }[];
  finePrint?: string;
}

export const HOTEL_POLICIES = {
  // 1. Valid Identification Card Required
  identificationPolicy: {
    id: 'identification-policy',
    title: 'Valid Identification Card Required',
    shortTitle: 'ID Requirements',
    badge: 'Government Mandatory',
    iconName: 'ShieldCheck',
    description:
      'As per Government of India regulations and local administration notifications, every guest staying at the hotel must provide valid photo identification at check-in.',
    rules: [
      {
        text: 'Every Indian resident guest is required to carry proof of identity and present it at the time of check-in.',
        important: true,
      },
      {
        text: "Accepted Indian proof of identity: Guest's Passport, Driving License, AADHAAR Card, or Voter's Card.",
        highlight: 'Passport, Driving License, AADHAAR, Voter ID',
      },
      {
        text: 'PAN Card would NOT be accepted as a valid identification proof as per government guidelines.',
        highlight: 'PAN card is NOT accepted',
        important: true,
      },
      {
        text: 'Foreign nationals must present a valid Passport and valid Indian Visa upon arrival at the hotel.',
        highlight: 'Valid Passport and Visa mandatory for foreign nationals',
      },
      {
        text: 'The hotel reserves the right to refuse check-in in case no valid identification proof is provided.',
        important: true,
      },
    ],
  },

  // 2. Cancellation & Amendment Policy for Individual Reservation
  cancellationPolicy: {
    id: 'cancellation-policy',
    title: 'Reservation & Cancellation Policy (Individual Reservations)',
    shortTitle: 'Cancellation & Refunds',
    badge: 'Standard Booking Terms',
    iconName: 'AlertTriangle',
    description:
      'Official cancellation, refund, and modification guidelines for individual room reservations at Hotel Prabhupada, Puri.',
    timeline: [
      {
        period: 'More than 2 days before check-in',
        policy: 'Free Cancellation. No charges will be applied.',
        charge: '0% (Full Refund)',
        refundable: true,
      },
      {
        period: '0 to 2 days before check-in (Within 48 hours)',
        policy: 'Non-refundable. Full stay charge will be applied.',
        charge: '100% Charge',
        refundable: false,
      },
      {
        period: 'No Show',
        policy: 'No refund or adjustment on NO SHOW reservations.',
        charge: '100% Charge',
        refundable: false,
      },
    ],
    festivalPeriodClause: {
      title: 'Festival & Peak Holiday Periods Policy',
      text: 'NO CANCELLATION & AMENDMENT TO BE MADE DURING FESTIVAL PERIODS i.e. Durga Puja, Holi, Diwali, Christmas & New Year.',
      festivals: ['Durga Puja', 'Holi', 'Diwali', 'Christmas', 'New Year'],
      rule: 'All reservations during these dates are 100% non-cancellable, non-amendable, and non-refundable.',
    },
    generalRules: [
      'Any amendment of dates will be considered as a cancellation of the existing room reservation.',
      'Approved refunds (if applicable) are processed back to the original payment source within 7–10 business days.',
      'For bookings made via third-party OTAs/travel agents, cancellations and refunds must be processed through the respective booking channel.',
    ],
  },

  // 3. Pet Policy & Security Deposit
  petPolicy: {
    id: 'pet-policy',
    title: 'Pet Policy & Guidelines',
    shortTitle: 'Pet Policy',
    badge: 'Pet Friendly',
    iconName: 'Dog',
    description:
      'Hotel Prabhupada warmly welcomes pets. To ensure a comfortable and harmonious environment for all guests, the following pet guidelines apply:',
    feeDetails: {
      dailyFee: 'Rs. 1,200/- per day per night',
      dailyFeeNote: 'Charged to the guest upon arrival per pet.',
      securityDeposit: 'Rs. 4,000/-',
      depositType: 'Refundable Security Deposit',
      depositNote: 'Collected during check-in and completely refundable at the time of check-out subject to room inspection.',
      cleaningFine: 'Rs. 300/-',
      fineNote: 'Applicable if waste is not properly cleaned and disposed of in designated outside dumpsters.',
    },
    allowedAreas: [
      'Guest Room',
      'Main Lobby',
      'Poolside',
      'Lawn Area',
    ],
    prohibitedAreas: [
      'Public areas where Food & Beverages (F&B) are served (including Oris Restaurant dining area)',
    ],
    rules: [
      {
        text: 'A pet fee of Rs. 1200/- will be charged to the guest upon arrival per day per night.',
        highlight: 'Rs. 1200/- per day per night',
      },
      {
        text: 'During check-in, a security deposit of Rs. 4000/- will be applied, which is completely refundable at check-out.',
        highlight: 'Rs. 4000/- refundable security deposit',
      },
      {
        text: 'Pet-Friendly Areas: Pets are allowed only in Guest Rooms, Main Lobby, Poolside, and Lawn areas.',
        highlight: 'Guest Room, Main Lobby, Poolside & Lawn',
      },
      {
        text: 'Pets are strictly NOT allowed in public areas where F&B is served (including indoor restaurant dining).',
        important: true,
      },
      {
        text: 'Guest is responsible for cleaning up after the pet on hotel grounds and properly disposing of waste in the outside dumpster, or will be charged a fine of Rs. 300/- against cleaning services.',
        highlight: 'Rs. 300/- fine if not cleaned',
      },
    ],
  },

  // 4. Visitor's Policy
  visitorsPolicy: {
    id: 'visitors-policy',
    title: "Visitor's Policy & Security Rules",
    shortTitle: "Visitor's Policy",
    badge: 'Security & Safety',
    iconName: 'Users',
    description:
      "To ensure the safety, privacy, and peaceful stay of all in-house guests, Hotel Prabhupada enforces the following visitor guidelines:",
    rules: [
      {
        text: 'Every visitor must be registered at the Reception in the Visitor’s Register upon entering the hotel.',
        highlight: "Mandatory Registration in Visitor's Register",
      },
      {
        text: 'Visitors are not allowed inside guest rooms; they are welcome to be comfortably seated at the Reception lounge.',
        highlight: 'Seated at Reception lounge only',
      },
      {
        text: 'In special cases, visitors may be allowed to guest rooms only if accompanied in person by the registered in-house guest.',
      },
      {
        text: 'No visitors are allowed inside the property after 20:00 hrs (8:00 PM).',
        highlight: 'No visitors allowed after 20:00 hrs (8:00 PM)',
        important: true,
      },
      {
        text: 'Especially for Photographers: All external photographers and media crews must report at the Security Gate before entering the premises.',
        highlight: 'Photographers must report at Security Gate',
        important: true,
      },
    ],
  },

  // 5. Swimming Pool & Pool Costume / Rental Policy
  swimmingPoolPolicy: {
    id: 'pool-policy',
    title: 'Swimming Pool & Attire Policy',
    shortTitle: 'Pool Policy',
    badge: 'Recreation & Hygiene',
    iconName: 'Waves',
    description:
      'Our outdoor swimming pool is maintained to the highest hygiene standards for the exclusive enjoyment of our in-house guests.',
    costumeCharge: 'Rs. 150/- per head',
    rules: [
      {
        text: 'All in-house guests will be charged Rs. 150/- per head for the usage of the swimming pool if found without a proper swimming costume.',
        highlight: 'Rs. 150/- per head if without proper swimming costume',
        important: true,
      },
      {
        text: 'All guests should use proper swimming costume while entering the pool.',
        highlight: 'Proper swimming costume mandatory',
      },
      {
        text: 'Outside guests are strictly NOT allowed for pool usage (facility is exclusive to registered in-house guests).',
        highlight: 'Exclusive to in-house guests only',
        important: true,
      },
      {
        text: 'Children must be accompanied by an adult guardian at all times in and around the pool area.',
      },
    ],
  },

  // 6. Property Damage Policy
  propertyDamagePolicy: {
    id: 'damage-policy',
    title: 'Property Damage & Loss Policy',
    shortTitle: 'Property Damage',
    badge: 'Guest Responsibility',
    iconName: 'AlertOctagon',
    description:
      'Guests are expected to treat the hotel property, fixtures, fittings, and amenities with reasonable care.',
    rules: [
      {
        text: 'In case of any damage to the property by the in-house guest, the actual replacement/repair cost will be charged to the in-house guest account.',
        highlight: 'Actual repair/replacement cost charged to in-house guest',
      },
      {
        text: 'In case of any losses or damage to the property by a visitor, the amount has to be recovered directly from the visitor.',
      },
      {
        text: 'In case of any losses to the property by a guest’s visitor, the cost will be recovered from the visitor or from the hosting registered guest.',
        highlight: 'Recovered from visitor / host guest',
      },
      {
        text: 'Property damage charges solely depend upon the assessment and decision of the management of Hotel Prabhupada.',
        highlight: 'Sole discretion of Hotel Prabhupada Management',
        important: true,
      },
    ],
  },

  // 7. Check-in & Check-out Policy
  checkInOutPolicy: {
    id: 'checkin-checkout-policy',
    title: 'Standard Check-in & Check-out Timings',
    shortTitle: 'Timings',
    badge: 'Daily Operations',
    iconName: 'Clock',
    standardCheckIn: '10:00 AM',
    standardCheckOut: '08:00 AM',
    rules: [
      { text: 'Standard Check-in time is 10:00 AM.' },
      { text: 'Standard Check-out time is 08:00 AM.' },
      { text: 'Early check-in is subject to room availability on a chargeable basis.' },
      { text: 'Late check-out is subject to room availability on a chargeable basis.' },
      { text: 'Kindly handover the room key at the reception desk upon check-out.' },
      { text: 'All incidental and room bills due must be fully settled before check-out.', important: true },
    ],
  },

  // 8. Child Policy & Extra Person / Bed Charges
  childAndExtraBedPolicy: {
    id: 'child-extra-bed-policy',
    title: 'Child Policy & Extra Person / Bed Charges',
    shortTitle: 'Child & Extra Bed',
    badge: 'Occupancy & Tariffs',
    iconName: 'Bed',
    rules: [
      {
        text: 'Children above 10 years of age will be considered as an adult at Rs. 1,200 + GST.',
        highlight: 'Above 10 years: Rs. 1,200 + GST (Adult rate)',
      },
      {
        text: 'Children between 7 to 10 years of age will be charged Rs. 750 + GST.',
        highlight: '7–10 years: Rs. 750 + GST',
      },
      {
        text: 'Children must be accompanied by their parents while staying in the room.',
      },
      {
        text: 'An extra person charge will be applied at Rs. 1,200 + GST on EP (European Plan) with an extra bed.',
        highlight: 'Extra Person: Rs. 1,200 + GST on EP with extra bed',
      },
      {
        text: 'In case an extra bed is taken for children below 10 years of age, Rs. 1,000 + GST will be charged to the guest account.',
        highlight: 'Extra Bed for child <10 yrs: Rs. 1,000 + GST',
      },
    ],
  },
};
