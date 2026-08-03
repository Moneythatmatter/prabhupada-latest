export type FAQItem = {
  question: string;
  answer: string;
};

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
  faqs?: FAQItem[];
};

/** Hotel Prabhupada blog posts — travel, stay tips & Puri heritage */
export const blogs: BlogPost[] = [
  {
    slug: '15-interesting-facts-about-jagannath-temple',
    title: '15 Interesting Facts About Jagannath Temple That Will Surprise You',
    excerpt:
      'Every year, millions of devotees and travellers make their way to Puri, drawn by the spiritual aura of the Jagannath Temple. Discover fifteen fascinating facts that make this sacred shrine unlike any other.',
    content: [
      "Every year, millions of devotees and travellers make their way to Puri, drawn by the spiritual aura of the Jagannath Temple. Some come to seek blessings, some arrive to witness the grandeur of Rath Yatra, while others simply want to experience one of India's most revered pilgrimage sites.",
      "Yet, the temple offers far more than religious significance. It is a place where history, architecture, rituals, and centuries-old traditions come together in remarkable ways. If you have ever wondered why is Jagannath Temple so famous, or wanted to know about some interesting facts about Jagannath Temple, you are in the right place. Here are fifteen fascinating facts that make this sacred shrine unlike any other.",
      "1. The Temple is One of India's Four Char Dham Pilgrimage Sites",
      "For Hindus, the Jagannath Temple is one of the sacred Char Dham pilgrimage destinations, alongside Badrinath, Dwarka, and Rameswaram. Completing this spiritual circuit is believed to be one of life's most sacred journeys. This alone makes Puri one of the country's most visited pilgrimage destinations throughout the year.",
      "2. Lord Jagannath's Idol Looks Unlike Any Other Deity",
      "One of the first things visitors notice is that Lord Jagannath, Balabhadra, and Goddess Subhadra do not resemble traditional Hindu idols. Their large circular eyes, simplified facial features, and unfinished wooden forms have intrigued devotees and historians for centuries. According to temple tradition, the idols were intentionally left unfinished, giving rise to one of the most enduring history and mysteries of Jagannath Temple.",
      "3. The Deities are Made of Wood, Not Stone",
      "Unlike most ancient temples where idols are carved from stone or metal, the deities here are carved from sacred neem wood. Even more fascinating is the Nabakalebara ritual, during which the wooden idols are ceremonially replaced with newly carved ones. This rare event takes place every 12 to 19 years, depending on the Hindu lunar calendar, making it one of the temple's most significant traditions.",
      "4. The Nilachakra is More Than Just a Symbol",
      "At the top of the temple stands the iconic Nilachakra (also spelled Neelachakra), an eight-spoked wheel crafted from an alloy of eight metals. A popular belief says that wherever you stand around the temple, the Nilachakra appears to face you. Whether viewed as an architectural illusion or a spiritual symbol, it remains one of the most talked-about hidden facts about Jagannath Temple Puri.",
      "5. The Temple Flag is Changed Every Single Day",
      "Every day, a temple servitor climbs the towering temple structure—without modern safety equipment—to replace the Temple Flag known as Patita Pabana Bana. The ritual has continued for centuries. According to temple rituals, the tradition of changing the flag must never be interrupted, making it one of the temple's most respected daily ceremonies. It is believed that if the flag is not changed even for one day, the temple will have to remain closed for 18 years. Watching this ritual from Bada Danda, the grand avenue leading to the temple, is an unforgettable experience.",
      "6. The Temple Kitchen is Among the Largest in the World",
      "Few places demonstrate community dining like the Jagannath Temple. The temple kitchen prepares Mahaprasad for thousands of devotees every day using hundreds of traditional clay pots stacked over wood-fired ovens. Despite the enormous number of visitors, the temple's food management system has amazed travellers for generations.",
      "7. Anand Bazaar is Unlike Any Other Marketplace",
      "Inside the temple complex lies Anand Bazaar, where devotees can purchase Mahaprasad after it has been offered to Lord Jagannath. More than just food, Mahaprasad is regarded as a sacred offering that symbolizes equality and togetherness. One of the most beautiful traditions associated with it is that social distinctions fade away before Mahaprasad. Regardless of caste, status, or background, devotees partake in it as equals, reflecting Lord Jagannath's message of inclusivity and shared devotion. It is this spirit of unity that makes Anand Bazaar much more than a marketplace—it is a living expression of Jagannath culture.",
      "8. Every Ritual Follows a Timetable That Has Survived Centuries",
      "From the first morning prayers to the final rituals at night, the temple follows an elaborate daily schedule that has remained largely unchanged for generations. These temple rituals are performed by different groups of hereditary servitors, each entrusted with specific responsibilities passed down through families. It's one of the many reasons devotees return again and again—every visit offers a chance to witness a different part of this living tradition.",
      "9. The Garuda Stambha Holds Special Significance",
      "Before entering through the Singhadwara, many pilgrims pause at the Garuda Stambha, a beautifully carved pillar dedicated to Lord Vishnu's divine mount, Garuda. According to tradition, offering prayers here before proceeding for darshan is considered especially auspicious.",
      "10. Rath Yatra is More Than Just a Festival",
      "The world-famous Rath Yatra is not simply a procession—it represents Lord Jagannath's annual journey to the Gundicha Temple. The festival includes several important rituals such as Chhera Pahanra, where the Gajapati King ceremonially sweeps the chariots, Bahuda Yatra, marking the return journey, Suna Besha, when the deities are adorned with gold ornaments, and Niladri Bije, which marks their return to the sanctum. Each ritual carries deep symbolic meaning and reflects centuries of living tradition.",
      "11. The Ratna Singhasana is the Heart of the Sanctum",
      "Inside the sanctum, the deities are seated on the revered Ratna Singhasana. For devotees, this sacred throne is not merely an architectural feature—it represents the divine seat of Lord Jagannath and forms the spiritual centre of the temple.",
      "12. The Temple is Filled with Stories, Legends, and Living Traditions",
      "Ask ten local devotees about the temple, and you will likely hear ten different stories. Some speak of miracles. Others share fascinating temple legends passed down through generations. If you are interested in faith, folklore, or history, these stories contribute to the enduring secrets of Jagannath Temple that continue to captivate visitors.",
      "13. Millions Visit Every Year for Different Reasons",
      "Some arrive seeking blessings. Some come to fulfil family traditions. Others are fascinated by the architecture, the history, or the cultural significance. This unique blend of spirituality and heritage explains why millions visit Jagannath Temple every year, making it one of India's most important destinations for religious tourism.",
      "14. The Temple is the Centre of Jagannath Culture",
      "The influence of Lord Jagannath extends well beyond the temple walls. Local music, dance, cuisine, festivals, handicrafts, and even everyday life in Puri reflect the deep-rooted traditions associated with Jagannath culture. To truly understand Puri, one must understand the temple's role in shaping the city's identity.",
      "15. Every Visit Reveals Something New",
      "Perhaps the most fascinating fact is that no two visits to Jagannath Temple ever feel the same. Visit during Snana Purnima, Anavasara, Rath Yatra, Nabakalebara, or on an ordinary weekday, and you will witness different rituals, different crowds, and different experiences. That is what makes this ancient temple so timeless—it continues to offer something new to every visitor.",
      "## Planning Your Visit to Jagannath Temple",
      "If you're visiting for the first time, try to arrive early in the morning to avoid long queues and experience the temple during its peaceful hours. Dress modestly, follow the temple guidelines, and set aside enough time to explore nearby landmarks such as Bada Danda, local markets, and Puri Beach.",
      "While the temple is the centrepiece of the journey, taking time to experience Puri's food, culture, and heritage makes the trip far more rewarding.",
      "## Stay Close to the Temple for a More Relaxed Experience",
      "Many travellers find that staying near the temple allows them to enjoy Puri at a comfortable pace. Instead of rushing through everything in a single day, you can attend an early morning darshan, spend time at Puri Beach, explore local markets, and return for evening rituals without worrying about long commutes.",
      "If you are looking for accommodation that offers convenient access to both the Jagannath Temple and the beach, Hotel Prabhupada Puri is a practical choice. Whether you are travelling with family, planning a spiritual retreat, or simply exploring Puri Heritage, staying nearby gives you the flexibility to experience the city beyond its landmarks.",
      "## Final Thoughts",
      "The Jagannath Temple is much more than an ancient monument. It is a living centre of faith where rituals continue uninterrupted, traditions are preserved across generations, and every visit offers a deeper understanding of Odisha's spiritual heritage.",
      "If you are planning your own spiritual journey to Puri, take your time. Beyond the architecture and the legends lies an experience that stays with you long after you have left the temple gates."
    ],
    faqs: [
      {
        question: 'Why is Jagannath Temple so famous?',
        answer:
          'It is one of the Char Dham pilgrimage sites and is renowned for its unique traditions, annual Rath Yatra, ancient rituals, and deep spiritual significance.',
      },
      {
        question: 'What makes Jagannath Temple unique?',
        answer:
          'Its wooden deities, centuries-old rituals, Mahaprasad tradition, Nabakalebara ceremony, and cultural importance make it unlike any other Hindu temple.',
      },
      {
        question: 'What is the Nilachakra?',
        answer:
          'The Nilachakra is the sacred eight-spoked wheel mounted atop the temple and is one of its most recognizable symbols.',
      },
      {
        question: 'What is Nabakalebara?',
        answer:
          'Nabakalebara is the ceremonial replacement of the wooden idols of Lord Jagannath, Balabhadra, Goddess Subhadra, and Sudarshan, performed at specific intervals based on the lunar calendar.',
      },
      {
        question: 'Which is the best time to visit Jagannath Temple?',
        answer:
          'You can visit all year around. However, the winter months (October to February) are pleasant for sightseeing, while Rath Yatra offers a unique spiritual experience for those comfortable with large crowds.',
      },
      {
        question: 'How much time should I spend at Jagannath Temple?',
        answer:
          'Plan at least one full day to experience the temple, nearby markets, Anand Bazaar, and the surrounding heritage attractions.',
      },
      {
        question: 'Where should I stay when visiting Jagannath Temple?',
        answer:
          'Choosing accommodation near the temple, such as Hotel Prabhupada Puri, allows you to explore the temple, Puri Beach, and nearby attractions conveniently.',
      },
    ],
    date: '2026-08-03',
    author: 'Hotel Prabhupada',
    category: 'Heritage',
    image: '/images/jagannath-temple.png',
    readTime: '6 min read',
    featured: true,
  },
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
