export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
};

/** Hotel Prabhupada blog posts — travel, stay tips & Puri heritage */
export const blogs: BlogPost[] = [
  {
    slug: 'best-time-to-visit-puri',
    title: 'Best Time to Visit Puri for a Perfect Sea-Facing Stay',
    excerpt:
      'Plan your trip around weather, festivals, and beach days so your stay at Hotel Prabhupada feels effortless.',
    content: [
      'Puri is a year-round destination, but the most comfortable months for a sea-facing stay usually fall between October and March. Mild temperatures, clearer skies, and calm evenings make beach walks and temple visits especially pleasant.',
      'If you love festivals, schedule your trip around Rath Yatra for an unforgettable cultural experience. Book early during peak pilgrimage seasons, as rooms near New Marine Drive fill quickly.',
      'Summer can be warmer and humid, yet early mornings by the sea still feel refreshing. Monsoon months bring dramatic skies and quieter beaches — ideal if you prefer a peaceful coastal retreat.',
      'At Hotel Prabhupada, sea-facing rooms and pet-friendly hospitality make any season feel welcoming. Pair your stay with nearby visits to Jagannath Temple, Swargadwar Beach, and Konark for a complete Puri experience.',
    ],
    date: '2026-06-12',
    author: 'Hotel Prabhupada',
    category: 'Travel Tips',
    image: '/images/puri-golden-beach.png',
    readTime: '4 min read',
    featured: true,
  },
  {
    slug: 'pet-friendly-hotel-in-puri',
    title: 'Why Hotel Prabhupada Is Ideal for Pet-Friendly Holidays in Puri',
    excerpt:
      'Travel with your furry companions without compromise — comfort, location, and warm hospitality included.',
    content: [
      'Finding a truly pet-friendly hotel near Puri Beach can be challenging. Hotel Prabhupada welcomes guests traveling with pets, so your holiday stays together from check-in to checkout.',
      'Our rooms are designed for restful comfort, with modern amenities and easy access to New Marine Drive. After a day of exploring, return to a calm space where both you and your pet can unwind.',
      'Nearby beaches and open coastal stretches make morning and evening walks easy. Combine that with our attentive staff and flexible stay experience for a holiday that feels like home.',
      'Whether you are visiting for leisure, pilgrimage, or a family getaway, a pet-friendly sea-facing stay in Puri starts with the right hotel — and we are happy to host you.',
    ],
    date: '2026-05-28',
    author: 'Hotel Prabhupada',
    category: 'Hotel Stay',
    image: '/images/official-hero2.jpg',
    readTime: '3 min read',
    featured: true,
  },
  {
    slug: 'jagannath-temple-visit-guide',
    title: 'A Guest Guide to Visiting Shree Jagannath Temple from Our Hotel',
    excerpt:
      'How to plan darshan, timing, and nearby stops while staying close to Puri’s spiritual heart.',
    content: [
      'Shree Jagannath Temple is the soul of Puri and one of India’s most sacred pilgrimage destinations. Staying at Hotel Prabhupada places you within convenient reach of the temple and the old city.',
      'Dress modestly, carry only essential belongings, and check darshan timings in advance. Early mornings are often calmer, while festival days are vibrant and crowded — plan accordingly.',
      'After temple visit, many guests explore Mausi Maa Temple, Gundicha Temple, and local sweet shops for authentic Odia flavours. Our team can help you arrange local guidance if needed.',
      'Return to your sea-facing room for quiet recovery after a spiritually rich day. Comfortable beds, attentive service, and coastal air make the evening as memorable as the darshan itself.',
    ],
    date: '2026-05-10',
    author: 'Hotel Prabhupada',
    category: 'Heritage',
    image: '/images/attraction-jagannath.jpg',
    readTime: '5 min read',
  },
  {
    slug: 'explore-raghurajpur-pipli',
    title: 'Day Trips from Puri: Raghurajpur & Pipli Craft Villages',
    excerpt:
      'Discover Pattachitra art and colourful applique work on easy day trips from Hotel Prabhupada.',
    content: [
      'Beyond beaches and temples, Puri is a gateway to Odisha’s living craft traditions. Raghurajpur, often called an ideal crafts village, is famous for Pattachitra painting and traditional artistry.',
      'Pipli, known for vivid applique work, is another must-visit. From ceremonial canopies to decorative textiles, the town bursts with colour and handmade detail.',
      'Both destinations make excellent half-day or full-day excursions from Hotel Prabhupada. Start early, carry cash for artisan purchases, and leave time to chat with local craftspeople.',
      'Back at the hotel, enjoy lawn time, poolside refreshment, or simply rest in your room with ocean air — the perfect close to a day of culture and creativity.',
    ],
    date: '2026-04-22',
    author: 'Hotel Prabhupada',
    category: 'Attractions',
    image: '/images/patachitra-bg.png',
    readTime: '4 min read',
  },
  {
    slug: 'sea-facing-rooms-puri',
    title: 'What Makes a Sea-Facing Room Stay Special in Puri',
    excerpt:
      'Wake up to ocean light, coastal breeze, and the calm rhythm of New Marine Drive.',
    content: [
      'A sea-facing room transforms a regular hotel stay into a coastal escape. At Hotel Prabhupada, selected rooms open toward the sea, offering natural light and refreshing breeze throughout the day.',
      'Guests often begin mornings with balcony views, then head out for beach walks or temple visits. Evenings settle into soft horizons — ideal for quiet conversation, reading, or family time.',
      'Our sea-facing categories include executive and suite options designed for comfort, with modern amenities and thoughtful hospitality. Pet-friendly policies add extra ease for traveling families.',
      'If you are booking for a romantic getaway, pilgrimage break, or weekend reset, choose a sea-facing room and let Puri’s coastline set the mood for your stay.',
    ],
    date: '2026-04-05',
    author: 'Hotel Prabhupada',
    category: 'Hotel Stay',
    image: '/images/room-suite.jpg',
    readTime: '3 min read',
  },
  {
    slug: 'konark-and-blue-flag-beach',
    title: 'Konark Sun Temple & Blue Flag Beach: A Coastal Heritage Circuit',
    excerpt:
      'Pair UNESCO architecture with a clean eco-certified beach stretch for a memorable Puri outing.',
    content: [
      'Konark Sun Temple remains one of Odisha’s greatest architectural treasures. Its stone craftsmanship and historic significance make it a highlight for first-time and returning visitors alike.',
      'Nearby coastal stretches, including Blue Flag Beach areas around Puri, offer cleaner leisure spaces for families seeking a safer beach experience. Combine heritage and shoreline in one scenic circuit.',
      'From Hotel Prabhupada, this makes an excellent full-day itinerary: temple visit, light lunch, beach time, and sunset return along Marine Drive.',
      'Ask our front desk for local timing tips and transport suggestions so your day flows smoothly from culture to coast.',
    ],
    date: '2026-03-18',
    author: 'Hotel Prabhupada',
    category: 'Attractions',
    image: '/images/attraction-konark.jpg',
    readTime: '4 min read',
    featured: true,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((post) => post.slug === slug);
}

export function getFeaturedBlogs(): BlogPost[] {
  return blogs.filter((post) => post.featured);
}

export function getRecentBlogs(): BlogPost[] {
  return [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
