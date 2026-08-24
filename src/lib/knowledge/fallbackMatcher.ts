import { HOTEL_INFO } from './hotelKnowledge';

/**
 * Intelligent deterministic fallback matcher grounded in hotel knowledge.
 * Used when OpenAI API is temporarily unreachable or credits are exhausted.
 */
export function getGroundedFallbackResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // 0. Greetings
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|namaste)\b/i.test(q)) {
    return `Hello! Welcome to **Hotel Prabhupada**, Puri. 🙏

How can I assist you with your stay today? Feel free to ask about:
- 🛏️ [Rooms & Suites](/rooms)
- 🏊 [Swimming Pool & Amenities](/amenities)
- 🐾 [Pet Policies](/hotel-policy)
- ⏰ [Check-in & Check-out Times](/hotel-policy)
- 📍 [Location & Directions](/contact)
- 💳 [Direct Online Booking](${HOTEL_INFO.contact.directBookingUrl})`;
  }
  if (q.includes('check-in') || q.includes('check in') || q.includes('check-out') || q.includes('check out') || q.includes('timing') || q.includes('time')) {
    return `Here are the check-in and check-out policies for **Hotel Prabhupada**:

- **Check-in Time:** ${HOTEL_INFO.policies.checkIn.standardTime} (Early check-in is subject to availability on a chargeable basis)
- **Check-out Time:** ${HOTEL_INFO.policies.checkOut.standardTime} (Late check-out is subject to availability on a chargeable basis)
- **ID Requirement:** Valid Govt-issued ID (AADHAAR / Voter Card / DL / Passport) is mandatory during check-in.

For more details, visit our [Hotel Policy](/hotel-policy) page.`;
  }

  // 2. Pet Policy
  if (q.includes('pet') || q.includes('dog') || q.includes('cat') || q.includes('animal')) {
    return `Yes! **Hotel Prabhupada** is proud to be one of the best pet-friendly sea-facing hotels in Puri. 🐾

- **Pet Fee:** ${HOTEL_INFO.policies.petPolicy.dailyFee}
- **Security Deposit:** ${HOTEL_INFO.policies.petPolicy.securityDeposit}
- **Permitted Areas:** Guest Room, Main Lobby, and Outside hotel grounds. (Pets are not allowed in public dining/F&B areas).
- **Rules:** Guests must clean up after their pets or a ₹300 cleaning fine applies.

Read the complete rules on our [Hotel Policy](/hotel-policy) page.`;
  }

  // 3. Swimming Pool
  if (q.includes('pool') || q.includes('swim')) {
    return `Yes, **Hotel Prabhupada** features an outdoor swimming pool where guests can relax and enjoy the coastal Puri breeze under the open sky.

You can learn more about our facilities here: [Hotel Amenities](/amenities).`;
  }

  // 4. Gym / Fitness Center (Negative Constraint)
  if (q.includes('gym') || q.includes('fitness') || q.includes('workout')) {
    return `**Hotel Prabhupada** does not currently have a gym or fitness center on property.

However, we offer an outdoor swimming pool, open green lawn on New Marine Drive, wellness spa, and easy direct access to Puri beach for morning walks. Please feel free to reach our front desk at **${HOTEL_INFO.contact.phones[0]}** for any further assistance.`;
  }

  // 5. Rooms & Accommodation
  if (q.includes('room') || q.includes('stay') || q.includes('suite') || q.includes('family') || q.includes('deluxe') || q.includes('sea view') || q.includes('ocean')) {
    return `**Hotel Prabhupada** offers 6 comfortable and sea-facing room categories:

1. **Family Quad Sharing** - Ideal for families and groups with quad bedding and 24-hr room service.
2. **Executive Front Sea Facing** - Premium ocean-facing room with direct sea views.
3. **Premier Room** - Contemporary luxury with optical fiber high-speed internet & 24h concierge.
4. **Deluxe With Balcony Sea View** - Private balcony overlooking the Bay of Bengal.
5. **Superior Deluxe Balcony Sea View** - Panoramic coastal views, flat-screen HD TV & plush bedding.
6. **Suite Front Sea View** - Expansive tranquil retreat with dedicated workspace and living area.

👉 [View All Rooms & Photos](/rooms) | [Book Online](${HOTEL_INFO.contact.directBookingUrl})`;
  }

  // 6. Dining / Food / Breakfast / Restaurant
  if (q.includes('food') || q.includes('dining') || q.includes('restaurant') || q.includes('breakfast') || q.includes('meal') || q.includes('lunch') || q.includes('dinner')) {
    return `**Dining at Hotel Prabhupada:**

- **In-House Restaurant:** Multi-cuisine dining offering authentic Odia delicacies, fresh coastal seafood, and North Indian favorites.
- **24-Hour Room Service:** In-room dining available 24/7 with an overnight menu.
- **Breakfast:** Complimentary buffet breakfast is included in eligible room plans.

Explore our [Hotel Amenities](/amenities) for full details.`;
  }

  // 7. Location / Address / Distance / Direction
  if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('reach') || q.includes('map') || q.includes('beach') || q.includes('temple')) {
    return `**Hotel Prabhupada Location:**

📍 **Address:** ${HOTEL_INFO.location.address}
🌊 **Area:** Right on New Marine Drive Road, Baliapanda, directly facing Puri beach and minutes away from Swargadwar Beach and Shree Jagannatha Temple.

👉 [Open in Google Maps](${HOTEL_INFO.location.googleMapsUrl}) | [Contact Us](/contact)`;
  }

  // 8. Cancellation & Refund Policy
  if (q.includes('cancel') || q.includes('refund') || q.includes('amendment')) {
    return `**Cancellation & Refund Policy:**

- **Prior to 7 Days:** No cancellation fee (100% refund).
- **7 Days to 72 Hours:** 50% of the room tariff is charged.
- **Within 24 Hours / No-Show:** 100% of the room tariff is charged (non-refundable).
- **Date Amendments:** Date modifications are treated as a cancellation of the current booking.

Read our full terms at [Refund Policy](/refund-policy).`;
  }

  // 9. Extra Bed & Child Policy
  if (q.includes('child') || q.includes('kid') || q.includes('extra bed') || q.includes('extra person')) {
    return `**Child & Extra Bed Charges:**

- **Children above 10 years:** Considered adults @ ₹1,200 + GST.
- **Children 7–10 years:** ₹750 + GST.
- **Extra bed for child < 10 years:** ₹1,000 + GST.
- **Extra adult bed (EP):** ₹1,200 + GST.

Please see our [Hotel Policy](/hotel-policy) for more information.`;
  }

  // 10. Contact / Phone / Email / Booking
  if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('email') || q.includes('book') || q.includes('reservation')) {
    return `**Contact Hotel Prabhupada:**

- 📞 **Phone:** ${HOTEL_INFO.contact.phones.join(' / ')}
- ✉️ **Email:** ${HOTEL_INFO.contact.emails.join(' / ')}
- 🌐 **Direct Booking:** [Book Directly Online](${HOTEL_INFO.contact.directBookingUrl})
- 📍 **Address:** ${HOTEL_INFO.location.address}

Visit our [Contact Us](/contact) page to request a callback.`;
  }

  // 11. Nearby Attractions
  if (q.includes('attraction') || q.includes('sightseeing') || q.includes('visit') || q.includes('jagannath') || q.includes('konark') || q.includes('chilika')) {
    return `**Popular Attractions Near Hotel Prabhupada:**

1. **Shree Jagannatha Temple** (12th-century sacred heritage temple)
2. **Swargadwar Sea Beach & Market** (Golden sands & artisan shopping)
3. **Konark Sun Temple** (UNESCO World Heritage monument)
4. **Chilika Lake** (Asia's largest brackish lagoon & boating)
5. **Blue Flag Beach** (Clean, certified eco-beach)
6. **Raghurajpur Heritage Village** (Renowned Pattachitra art masters)

👉 [Explore All Attractions](/attractions)`;
  }

  // Default helpful response
  return `Thank you for reaching out to **Hotel Prabhupada**!

I can help you with:
- 🛏️ [Rooms & Suites](/rooms)
- 🐾 [Pet Policy & Deposits](/hotel-policy)
- 🏊 [Facilities & Pool](/amenities)
- ⏰ [Check-in & Check-out Times](/hotel-policy)
- 📍 [Location & Directions](/contact)
- 💳 [Direct Online Booking](${HOTEL_INFO.contact.directBookingUrl})

For personalized assistance or special booking requests, our front desk team is happy to assist you 24/7 at **${HOTEL_INFO.contact.phones[0]}** or **${HOTEL_INFO.contact.emails[0]}**.`;
}
