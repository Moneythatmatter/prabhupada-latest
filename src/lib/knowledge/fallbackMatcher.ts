import { HOTEL_INFO } from './hotelKnowledge';
import { HOTEL_POLICIES } from '@/data/hotelPolicies';

/**
 * Intelligent deterministic fallback matcher grounded in PRABHUPADA_INFO.md and HOTEL_POLICIES.
 * Used when OpenAI API is offline, unreachable, or as an instant deterministic response.
 */
export function getGroundedFallbackResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // 0. Greetings
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|namaste)\b/i.test(q)) {
    return `Hello! Welcome to **Hotel Prabhupada**, Puri. 🙏

How can I assist you with your stay today? Feel free to ask about:
- 🛏️ [Room Categories](/rooms)
- 🍽️ [In-House Restaurant (Oris)](/amenities)
- 🏊 [Facilities & Swimming Pool](/amenities)
- ⏰ [Check-in & Policies](/hotel-policy)
- 📍 [Location & Attractions](/contact)
- 💳 [Direct Online Booking](${HOTEL_INFO.contact.directBookingUrl})`;
  }

  // 1. Pet Policy
  if (q.includes('pet') || q.includes('dog') || q.includes('cat') || q.includes('animal')) {
    return `**Pet Policy & Guidelines at Hotel Prabhupada:**

Hotel Prabhupada accommodates domesticated dogs and cats! 🐾

- **Permitted Pets:** Domesticated dogs and cats only (Max 1 pet per room or 2 small pets; dangerous breeds excluded).
- **Pet Fee:** ${HOTEL_POLICIES.petPolicy.feeDetails.dailyFee}
- **Security Deposit:** ${HOTEL_POLICIES.petPolicy.feeDetails.securityDeposit} (refundable upon check-out inspection).
- **Mandatory Documents:** Valid anti-rabies vaccination certificate, pet passport/licence, medical clearance (if sick in last 72 hrs), and signed Pet Waiver Form.
- **Allowed Areas:** Assigned Guest Room, Garden/Lawn, and Lobby Lounge (must be leashed or in carrier).
- **Restricted Areas:** Strictly prohibited in Restaurants & dining outlets, Banquet rooms, Swimming pool area, Spa, and Gym.
- **In-Room Rules:** Display "Pet in Room" door hanger; pets prohibited on beds/sofas; cannot bathe in hotel bathrooms; max 2 hours unattended (notify Front Desk).
- **Service Animals:** Legitimate service animals are exempt from pet fees and restrictions.

👉 [Read Complete Pet Policy](/hotel-policy#pet-policy)`;
  }

  // 2. Identification / ID Proof / PAN Card
  if (
    q.includes('identification') ||
    q.includes('id proof') ||
    q.includes('id card') ||
    q.includes('pan card') ||
    q.includes('aadhaar') ||
    q.includes('passport') ||
    q.includes('voter') ||
    q.includes('driving license')
  ) {
    return `**Valid Identification (ID) Policy:**

As per Government notification, all guests must present valid identification at check-in:
- **Indian Residents:** Passport, Driving License, AADHAAR Card, or Voter's Card.
- **PAN Card:** ⚠️ **PAN card is NOT accepted** as valid identification proof.
- **Foreign Nationals:** Valid Passport and valid Indian Visa on arrival.
- The hotel reserves the right to refuse check-in if valid ID is not provided.

👉 [View Hotel Policy](/hotel-policy#id-policy)`;
  }

  // 3. Swimming Pool & Pool Costume / Charges
  if (q.includes('pool') || q.includes('swim') || q.includes('costume')) {
    return `**Swimming Pool Guidelines:**

Hotel Prabhupada features an outdoor swimming pool for in-house guests:
- **Attire:** All guests must wear proper swimming costumes while entering the pool.
- **Usage Fee (Without Costume):** In-house guests will be charged **${HOTEL_POLICIES.swimmingPoolPolicy.costumeCharge}** for pool usage if without proper swimming attire.
- **Outside Guests:** Outside guests are strictly not allowed for pool usage (exclusive to in-house guests).

👉 [View Facilities](/amenities)`;
  }

  // 4. Visitor's Policy
  if (q.includes('visitor') || q.includes('guest visit') || q.includes('photographer')) {
    return `**Visitor's Policy at Hotel Prabhupada:**

- Every visitor must register at Reception in the **Visitor’s Register**.
- Visitors are not allowed in guest rooms (they may be seated in the Reception lounge), unless accompanied in person by the registered in-house guest.
- **Curfew:** No visitors are allowed inside the property after **20:00 hrs (8:00 PM)**.
- **Photographers:** External photographers must report at the Security Gate upon arrival.

👉 [Read Hotel Policy](/hotel-policy#visitors-policy)`;
  }

  // 5. Property Damage
  if (q.includes('damage') || q.includes('fine') || q.includes('broken') || q.includes('loss')) {
    return `**Property Damage Policy:**

- Damage caused by an in-house guest will be charged at actual repair/replacement cost to the guest account.
- Damage or losses caused by a visitor will be recovered from the visitor or hosting in-house guest.
- Property damage charges are solely determined by the management of Hotel Prabhupada.

👉 [View Hotel Policy](/hotel-policy#damage-policy)`;
  }

  // 6. Restaurant / Food / Dining / Oris / Breakfast
  if (
    q.includes('restaurant') ||
    q.includes('oris') ||
    q.includes('food') ||
    q.includes('dining') ||
    q.includes('breakfast') ||
    q.includes('lunch') ||
    q.includes('dinner') ||
    q.includes('cuisine') ||
    q.includes('meal')
  ) {
    return `**Dining at Hotel Prabhupada:**

Hotel Prabhupada has an in-house restaurant named **Oris**.

- **Cuisines:** Indian cuisine, Bengali cuisine, and Chinese cuisine.
- **Operating Days:** Open Monday through Sunday (Daily).
- **Restaurant Timings:**
  - General hours: Approximately 7:00 AM to 11:00 PM
  - **Breakfast:** Approximately 8 AM to 10:30 AM
  - **Lunch:** Approximately 12:00 PM to 2:30 PM
  - **Dinner:** Approximately 7:00 PM to 10:30 PM
- **Room Service:** In-room dining and room service facilities are available.
- **Breakfast:** Available through the restaurant or selected room booking meal plans.

For more details, visit our [Hotel Amenities](/amenities) page.`;
  }

  // 7. Rooms & Accommodation
  if (
    q.includes('room') ||
    q.includes('stay') ||
    q.includes('suite') ||
    q.includes('deluxe') ||
    q.includes('premier') ||
    q.includes('family') ||
    q.includes('sea view') ||
    q.includes('ocean') ||
    q.includes('balcony')
  ) {
    return `**Hotel Prabhupada offers the following room categories:**

1. **Premier Room** – Comfortable standard accommodation suitable for couples, individual travellers, and short stays.
2. **Deluxe Room** – Spacious accommodation with a larger bedroom area, ideal for couples and families.
3. **Executive Room** – Upgraded comfort and enhanced room amenities.
4. **Family Room** – Designed with additional sleeping capacity for families, parents with children, or small groups.
5. **Superior Deluxe Balcony Sea View** – Scenic stay featuring a private balcony and views toward the sea.
6. **Suite Front Sea View** – Premium accommodation offering a front-facing sea view and dedicated living/workspace.

👉 [View Room Details](/rooms) | [Book Online](${HOTEL_INFO.contact.directBookingUrl})`;
  }

  // 8. Room Pricing / Rates / Availability
  if (
    q.includes('cost') ||
    q.includes('price') ||
    q.includes('rate') ||
    q.includes('tariff') ||
    q.includes('availab') ||
    q.includes('book today') ||
    q.includes('how much')
  ) {
    return `Room rates and availability at **Hotel Prabhupada** vary according to your travel dates, room category, number of guests, meal plan, and seasonal demand.

To check the latest rates and available rooms:
- Share your **check-in date**, **check-out date**, and **number of adults/children**, or
- Visit our official [Online Booking Portal](${HOTEL_INFO.contact.directBookingUrl}), or
- Call our reservation desk directly at **+91 9583002951** / **+91 9583002952**.`;
  }

  // 9. Location / Address / Distance / Beach
  if (
    q.includes('location') ||
    q.includes('address') ||
    q.includes('where') ||
    q.includes('reach') ||
    q.includes('map') ||
    q.includes('beach') ||
    q.includes('sea')
  ) {
    return `**Hotel Prabhupada Location:**

📍 **Address:** New Marine Drive Rd, near Light House, Puri, Odisha 752001, India.
🌊 **Location Highlights:** Situated right near the sea beach in Puri, offering convenient access to the beach, Swargadwar, Shree Jagannath Temple, Konark Sun Temple, and Chilika Lake.

👉 [Open in Google Maps](${HOTEL_INFO.location.googleMapsUrl}) | [Contact Us](/contact)`;
  }

  // 10. Check-in & Check-out Timings
  if (
    q.includes('check-in') ||
    q.includes('check in') ||
    q.includes('check-out') ||
    q.includes('check out') ||
    q.includes('timing')
  ) {
    return `**Check-in & Check-out at Hotel Prabhupada:**

- **Standard Check-in Time:** ${HOTEL_POLICIES.checkInOutPolicy.standardCheckIn}
- **Standard Check-out Time:** ${HOTEL_POLICIES.checkInOutPolicy.standardCheckOut}
- **Early Check-in & Late Check-out:** Subject to room availability on a chargeable basis.
- **ID Proof Requirement:** Valid government-issued photo ID (AADHAAR, Voter ID, Driving License, or Passport for Indian nationals; Passport/Visa for foreign nationals) is mandatory. PAN Card is NOT accepted.

👉 [View Hotel Policy](/hotel-policy)`;
  }

  // 11. Cancellation, Refund & Booking Modifications
  if (q.includes('cancel') || q.includes('refund') || q.includes('modification') || q.includes('change date')) {
    return `**Cancellation & Refund Policy (Individual Reservations):**

- **More than 2 days before check-in:** Free Cancellation (No charges applied).
- **0 to 2 days before check-in:** Non-refundable (Full stay charge applied).
- **No Show:** No refund or adjustment.
- **Festival Periods:** **NO CANCELLATION & AMENDMENT** during Durga Puja, Holi, Diwali, Christmas & New Year.
- **Refund Timeline:** Approved refunds are processed within 7–10 business days.

👉 [Read Refund Policy](/refund-policy)`;
  }

  // 12. Spa / Ayurvedic Spa
  if (q.includes('spa') || q.includes('ayurved') || q.includes('massage') || q.includes('wellness')) {
    return `**Ayurvedic Spa Services:**

Ayurvedic spa services and wellness therapies are available at Hotel Prabhupada. Guests may enquire at the reception or travel desk for available treatments, timings, and appointments.

Explore our [Hotel Amenities](/amenities) for more information.`;
  }

  // 13. Shree Jagannath Temple & Sightseeing / Travel Desk
  if (
    q.includes('temple') ||
    q.includes('jagannath') ||
    q.includes('sightseeing') ||
    q.includes('konark') ||
    q.includes('chilika') ||
    q.includes('attraction') ||
    q.includes('tour') ||
    q.includes('taxi') ||
    q.includes('transfer') ||
    q.includes('airport') ||
    q.includes('railway')
  ) {
    return `**Travel Assistance & Sightseeing:**

Hotel Prabhupada provides a travel desk and local assistance for:
- **Shree Jagannath Temple Visits:** General local guidance, transportation, and visit assistance.
- **Puri Sea Beach & Swargadwar:** Convenient beachside location.
- **Sudarshan Crafts Museum:** Local arts and cultural heritage.
- **Konark Sun Temple & Chilika Lake:** Sightseeing transportation and taxi arrangements.
- **Transfers:** Railway station and airport transfer assistance upon request.

👉 [Explore Nearby Attractions](/attractions)`;
  }

  // 14. Parking & Wi-Fi & Facilities
  if (
    q.includes('parking') ||
    q.includes('wifi') ||
    q.includes('wi-fi') ||
    q.includes('internet') ||
    q.includes('facility') ||
    q.includes('amenities') ||
    q.includes('laundry')
  ) {
    return `**Facilities & Amenities at Hotel Prabhupada:**

- 📶 **High-Speed Wi-Fi** throughout the property
- 🚗 **Parking** available on-site
- 🏊 **Swimming Pool** for guests
- 🍽️ **In-House Restaurant (Oris)** & Room Service
- 🧹 **Daily Housekeeping** & Laundry Service
- 🌿 **Open Lawn Area**
- 🔒 **24/7 Security, CCTV, & Power Backup**
- 🧳 **Luggage Storage & Cloak Room**
- 🌿 **Ayurvedic Spa Services**
- 🗺️ **Travel Desk & Temple Visit Assistance**

👉 [View All Amenities](/amenities)`;
  }

  // 15. Contact & Booking
  if (
    q.includes('contact') ||
    q.includes('phone') ||
    q.includes('call') ||
    q.includes('email') ||
    q.includes('number') ||
    q.includes('website')
  ) {
    return `**Contact Hotel Prabhupada:**

- 📞 **Reservation Phones:** +91 9583002951 / +91 9583002952
- ✉️ **Reservation Email:** reservation@hotelprabhupada.com
- ✉️ **General Manager Email:** gm@hotelprabhupada.com
- 🌐 **Website:** [www.hotelprabhupada.com](https://www.hotelprabhupada.com)
- 📍 **Address:** New Marine Drive Rd, near Light House, Puri, Odisha 752001, India

👉 [Book Online](${HOTEL_INFO.contact.directBookingUrl}) | [Contact Page](/contact)`;
  }

  // 16. Careers & Job Openings
  if (
    q.includes('career') ||
    q.includes('job') ||
    q.includes('vacancy') ||
    q.includes('vacancies') ||
    q.includes('hiring') ||
    q.includes('recruitment') ||
    q.includes('work with us') ||
    q.includes('apply')
  ) {
    return `**Careers at Hotel Prabhupada:**

We are always looking for passionate hospitality professionals and enthusiastic freshers to join our team in Puri!

- **Departments:** Front Office, Food & Beverage (Oris Restaurant), Housekeeping, Kitchen & Culinary, and Operations.
- **How to apply:** Visit our [Careers Page](/careers) to submit your online application and upload your resume.
- **Direct HR Email:** You can also email your CV directly to **gm@hotelprabhupada.com**.

👉 [Explore Careers & Apply Online](/careers)`;
  }

  // Default helpful response
  return `Thank you for contacting **Hotel Prabhupada**, Puri!

I can assist you with:
- 🛏️ [Room Categories](/rooms)
- 🍽️ [In-House Restaurant (Oris)](/amenities)
- 🏊 [Facilities & Swimming Pool](/amenities)
- ⏰ [Check-in & Policies](/hotel-policy)
- 📍 [Location & Nearby Places](/contact)
- 💳 [Direct Online Booking](${HOTEL_INFO.contact.directBookingUrl})

For immediate reservations or customized inquiries, please contact our team at **+91 9583002951** / **+91 9583002952** or email **reservation@hotelprabhupada.com**.`;
}
