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

  // 3. Pet Policy & Guidelines
  petPolicy: {
    id: 'pet-policy',
    title: 'Pet Policy & Guidelines',
    shortTitle: 'Pet Policy',
    badge: 'Pet Friendly Guidelines',
    iconName: 'Dog',
    objective:
      'To establish clear guidelines for accommodating pets while ensuring hygiene, safety, and comfort for all guests and maintaining the luxury standards of the hotel.',
    description:
      'Hotel Prabhupada warmly accommodates guests travelling with pets while upholding strict standards of hygiene, safety, and tranquility for all guests. All pet owners are required to adhere to the following comprehensive policy guidelines:',
    permittedPets: {
      animalType: 'Only domesticated dogs and cats allowed.',
      quantity: 'Maximum 1 Pet per room or 2 small Pets.',
      breedRestrictions: 'Potentially dangerous breeds are strictly not allowed.',
      otherAnimals: 'Birds, reptiles, and exotic animals are excluded.',
    },
    mandatoryDocumentation: [
      'Vaccination certificate (anti-rabies must be current & valid)',
      'Pet passport / licence (dog passport, cat licence)',
      'Medical clearance if pet was sick within the last 72 hours',
      'Pet waiver form signed by guest upon check-in',
    ],
    feeDetails: {
      dailyFee: 'Rs. 1,200/- per day per night',
      dailyFeeNote: 'Daily pet accommodation fee as per hotel policy.',
      securityDeposit: 'Rs. 4,000/- per room',
      depositType: 'Refundable Security Deposit',
      depositNote: 'Deposit refunded after check-out inspection if no damage or excessive cleaning is needed.',
      cleaningDisinfectionFee: 'Non-refundable cleaning / disinfection fee as per room category',
      cleaningFine: 'Rs. 300/-',
      fineNote: 'Applicable if pet waste is not cleaned up immediately by owner and disposed of in outside dumpsters.',
    },
    checkInProcess: [
      'Pet Policy Agreement to be signed at the front desk',
      'Present all mandatory vaccination records, pet passport/licence & health certificates',
      'Security deposit and applicable fees to be settled',
      'Hang "Pet in Room" door hanger (guest must display throughout stay)',
    ],
    guestResponsibilities: [
      {
        title: 'Leash / Carrier',
        text: 'Pets must be leashed or in carrier in all public areas of the property at all times.',
      },
      {
        title: 'Owner Presence',
        text: 'Owner must accompany pet in public areas at all times.',
      },
      {
        title: 'Unattended Pets',
        text: 'Maximum two hours unattended; notify Front Desk if leaving pet in room.',
      },
      {
        title: 'Hotel Property Protection',
        text: 'Hotel property (towels, linen, bedsheets) is strictly not for pet use.',
      },
      {
        title: 'No Bed / Sofa',
        text: 'Guest must not allow pets on bed or sofa.',
      },
      {
        title: 'No Bathing',
        text: 'Pets cannot bathe in room bathroom or shower.',
      },
      {
        title: 'Noise Control',
        text: 'Guest is responsible for pet noise; disruptive pets may be removed.',
      },
    ],
    allowedAreas: [
      'Guest room (only occupied assigned room)',
      'Garden / lawn (owner must clean waste)',
      'Lobby lounge',
    ],
    prohibitedAreas: [
      'Restaurants and food outlets (including Oris Restaurant)',
      'Banquet / function rooms',
      'Swimming pool area',
      'Spa / salon',
      'Fitness center / gym',
      'Any area designated by Hotel Management',
    ],
    housekeepingProtocol: [
      'Guest must remove pet from room during housekeeping or coordinate convenient time with Front Office.',
      'If pet left: guest must be present when staff enters the room.',
      'Use privacy sign (DND) if housekeeping is not needed.',
      'Clean pet waste immediately if found; charges will apply to guest account if not cleaned.',
    ],
    damageAndLiability: [
      'Guest bears full responsibility for all damage or injury caused by pet.',
      'Stained linen: Charged at double laundry rate.',
      'Permanent stains: Replacement fee applied.',
      'Security deposit becomes non-refundable if damage occurs.',
      'Hotel not liable for pet injury, illness, or loss.',
    ],
    exceptions: {
      serviceAnimals: {
        title: 'Service Animals',
        description:
          'Service Animals are always welcome — not subject to pet policy. No fees, restrictions, or documentation required for legitimate service animals.',
      },
      peakSeason: {
        title: 'Peak Season',
        description:
          'Hotel may refuse pet admission during peak season. A limited quota of pet-friendly rooms applies.',
      },
    },
    nonComplianceActions: [
      {
        situation: 'Policy violation (Ongoing)',
        action: 'The hotel reserves the right to discontinue services without refund; may evict.',
      },
      {
        situation: 'Damage caused',
        action: 'Charge will be deducted from the security deposit or billed to the guest account.',
      },
    ],
    documentationAttachments: [
      'Pet Policy Agreement (signed)',
      'Pet Waiver Form',
      'Vaccination Checklist',
      'Damage Deposit Receipt',
    ],
    rules: [
      {
        text: 'Permitted Pets: Only domesticated dogs and cats allowed (Maximum 1 Pet per room or 2 small Pets). Potentially dangerous breeds, birds, reptiles, and exotic animals are strictly excluded.',
        highlight: 'Domesticated dogs & cats only (Max 1 pet or 2 small pets)',
      },
      {
        text: 'Mandatory Check-in Documentation: Vaccination certificate (anti-rabies must be current & valid), pet passport/licence (dog passport, cat licence), medical clearance if sick within 72 hours, and signed Pet Waiver Form.',
        highlight: 'Vaccination certificate, passport/licence & signed waiver form',
        important: true,
      },
      {
        text: 'Fees & Deposits: Daily pet accommodation fee of Rs. 1,200/- per day per night, cleaning/disinfection fee, and Rs. 4,000/- refundable security deposit (refunded after check-out inspection if no damage/excessive cleaning needed).',
        highlight: 'Rs. 1,200/night fee + Rs. 4,000/- refundable security deposit',
      },
      {
        text: 'Check-in Process: Sign Pet Policy Agreement, present all vaccination & health documents, pay security deposit, and hang "Pet in Room" door hanger throughout the entire stay.',
        highlight: '"Pet in Room" door hanger displayed throughout stay',
      },
      {
        text: 'Public Area Conduct: Pets must be leashed or in carrier in all public areas and accompanied by owner at all times. Maximum 2 hours unattended in room (notify Front Desk).',
        highlight: 'Leashed/carrier at all times; max 2 hours unattended',
      },
      {
        text: 'Room Rules: Hotel towels and linen are NOT for pet use. Pets are strictly not allowed on beds or sofas. Pets cannot bathe in room bathroom/shower.',
        highlight: 'No pets on bed/sofa; hotel linen not for pet use; no bathing in shower',
      },
      {
        text: 'Restricted vs Allowed Zones: Allowed in Guest Room, Garden/Lawn, and Lobby Lounge only. Strictly prohibited in Restaurants/food outlets, Banquet rooms, Swimming pool area, Spa/salon, and Fitness center/gym.',
        highlight: 'Allowed: Room, Lawn, Lobby Lounge. Restricted: F&B, Pool, Spa, Gym, Banquets',
        important: true,
      },
      {
        text: 'Housekeeping Protocol: Guest must remove pet or be present during housekeeping. Clean pet waste immediately or a cleaning fine of Rs. 300/- applies.',
        highlight: 'Guest present for housekeeping; Rs. 300/- fine if waste not cleaned',
      },
      {
        text: 'Damage & Liability: Guest bears full responsibility for damage/injury. Stained linen charged at double laundry rate; permanent stains charged at replacement fee. Hotel not liable for pet illness or loss.',
        highlight: 'Double laundry charge for stained linen; full replacement fee for damage',
      },
      {
        text: 'Exceptions: Service Animals are always welcome with zero fees or pet policy restrictions. During peak season, hotel may restrict pet admission due to limited room quota.',
        highlight: 'Service animals exempt from fees; peak season quota applies',
      },
      {
        text: 'Non-Compliance: Ongoing policy violation may result in service discontinuation and eviction without refund. Damage costs deducted from deposit.',
        important: true,
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
