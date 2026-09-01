export interface TestimonialItem {
  id: string;
  name: string;
  location?: string;
  rating: number;
  trip_type?: string;
  title?: string;
  review: string;
  created_at: string;
  is_approved?: boolean;
}

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'google-rev-1',
    name: 'Sunil Mundravale',
    location: 'Local Guide · Family Group',
    rating: 5,
    trip_type: 'Holiday | Family',
    title: 'Wonderful Experience & Superb Hospitality for 3 Families',
    review:
      'We have three families having total members of 10. We have alloted this Hotel by our booking Compay. We have stayed there for total three days and we had a wonderful experience at Prabhupada Hotel! The ambiance is warm and welcoming. The location is prime and just front of Beach. All rooms have sufficient vantilation, Sea view. A special mention to all restaurant and Kitchen Staff for preparing such delicious and perfectly balanced dishes — every bite was full of flavor. They offer us a traditional and local dishes which was very testy. All reseption Staff including Manager was very positive attituted. Room Service was quick and fast. We have received Mahaprasad from Pandit and for taking it we request and ask Permission to Reception for seating arragement. The housekeeping staff arrange beautiful arragement. In short overall experince of Hotel Prabhupada was very excellent and definately we will prefer this property again and again.',
    created_at: '2026-06-01T10:30:00Z',
    is_approved: true,
  },
  {
    id: 'google-rev-2',
    name: 'Sayan Dutta',
    location: 'Local Guide',
    rating: 4,
    trip_type: 'Vacation',
    title: 'Swankiest Interior Decor on the Lighthouse Line',
    review:
      "This hotel has the swankiest interior decor of all the hotels on the Lighthouse line in Puri. Modern, crisp, and beautifully curated, the rooms give you the feel of living in a fine and dandy corporate hotel keeping up with the times. The Wi-Fi? Smooth and flawless. The room upkeep? No complaints there, thanks to a competent housekeeping team with Mr. Munna at the helm.\n\nNow, coming to the food, it was so tasty and so on point that I only managed to take two pictures of the lunch meal we had, mostly because we were too busy stuffing our faces. Compliments to the Chef and his team; from the Shukto to a mean crab curry to delicate penne in white sauce, they nailed it all with sheer finesse.\n\nThe breakfast could improve a tad, but the inclusion of those tomatoey, tangy Yippee noodles with corn was a nice touch at the morning buffet. We stayed in rooms 103 and 105, it was a pleasant and comfortable stay. Definitely value for money and a stone’s throw away from the beach, expiriance.\n\nI’ll definitely board here again. I’m giving it a 4-star review even though the stay was flawless, only because I’m holding that 5th star for when I come back to stay in one of their sea-facing rooms. Thank you, for the memorable weekend.",
    created_at: '2026-04-12T14:20:00Z',
    is_approved: true,
  },
  {
    id: 'google-rev-3',
    name: 'Dibakar Patra',
    location: 'Google Reviewer',
    rating: 5,
    trip_type: 'Vacation',
    title: 'Best Hotel Located Right on the Beach',
    review:
      "Best Hotel located right on the beach , cleaned rooms with excellent ambience of their restaurant, food was little over priced but taste was authentic. Rooms are without windows quite surprised by seeing this.\n\nBut anyway service part was excellent in Housekeeping and Restaurant but the reception staff's seems to be not friendly and did not even noticing their guests.\n\nPool side is just next to a local pond , I will suggest not to enter the pool, it's broken tiles may hurt you, water was smelling very bad, you can not just allow your kids into the pool & pool attendant behaves like the Hotel owner,does not wear proper uniform ,upon asking left the place unattended.\n\nHotel Management should look into the same seriously, it's unacceptable doings.\n\nRest was absolutely ok.",
    created_at: '2026-07-01T09:15:00Z',
    is_approved: true,
  },
  {
    id: 'google-rev-4',
    name: 'Aditya Singh',
    location: 'Family Vacation',
    rating: 5,
    trip_type: 'Vacation',
    title: 'Bahot Achha Hotel Aur Khana To Gajab Ka Tha',
    review:
      'Main apni family ke saath ghumne gai thi bahot achha hotel hai aur khana to gajab ka tha aur unka service staff bahot achhe the specialy subhadra. Sanatan rojalin aur restaurant manager mr khadiratna ji. Rooms: 5, Service: 5, Location: 5. Hotel highlights: Luxury, Great view, High-tech.',
    created_at: '2026-08-01T11:10:00Z',
    is_approved: true,
  },
  {
    id: 'google-rev-5',
    name: 'Srestha Mukhopadhyay',
    location: 'West Bengal',
    rating: 5,
    trip_type: 'Holiday',
    title: 'Superb Sea View Rooms & Warm Pet-Friendly Hospitality',
    review:
      'We stayed in the executive front sea view rooms...rooms location , each service was good,hospitality superb , reception prompt , food taste & quality excellent .very friendly with our lil pet dog . Sanatan ,food manager & Amar the hotel staff are the best...ever smiling & happy to help always.Their crab & sizzler were excellent actually each food item we had was very good .\n\nNow the cons...\nA proper extra bed should be provided in the best category of rooms...the sofa is not at all comfortable to sleep on for the extra person when we are paying extra for that extra person....\nAnd tandoor was closed .whereas all over puri in all restaurants tandoor was available ...food item need to be more .\nAnd if balcony could be added in the best category room & suite that would have been much better as balcony is basic in puri....some alteration can be thought of I guess .The pool & garden area should be decorated more .\n\nOverall very good stay & special mention to their GM Mr Prakash through whom the reservation & everyday coordination was done ,such a helpful cordial man I must stay ...keep it up sir',
    created_at: '2026-06-10T16:45:00Z',
    is_approved: true,
  },



];
