export type Attraction = {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

/** Nearby attractions around Hotel Prabhupada, Puri */
export const attractions: Attraction[] = [
  {
    title: 'Shree Jagannatha Temple Puri',
    description:
      'The world-famous 12th-century sacred temple in the heart of Puri, a must-visit for every guest.',
    image: '/images/attraction-jagannath.jpg',
    featured: true,
  },
  {
    title: 'Swargadwar Sea Beach & Shopping',
    description:
      'Vibrant golden beach waves and popular coastal markets within easy reach of the hotel.',
    image: '/images/attraction-swargadwar.jpg',
    featured: true,
  },
  {
    title: 'Konark Sun Temple & Heritage',
    description:
      'Iconic 13th-century UNESCO World Heritage monument and architectural wonder nearby.',
    image: '/images/attraction-konark.jpg',
    featured: true,
  },
  {
    title: 'Chilika Lake',
    description:
      'Asia’s largest brackish lagoon — ideal for boat rides, birdwatching, and scenic day trips.',
    image: '/images/attraction-chilika.jpg',
  },
  {
    title: 'Sudarshan Crafts Museum',
    description:
      'A showcase of traditional Odisha crafts, Pattachitra art, and local artisan heritage.',
    image: '/images/attraction-sudarshan.png',
  },
  {
    title: 'Mata Math',
    description:
      'A serene seaside matha in Puri, known for its spiritual calm and coastal heritage setting.',
    image: '/images/attraction-jagannath.jpg',
  },
  {
    title: 'Bedi Hanuman',
    description:
      'Sacred Daria Hanuman temple by the sea, believed to guard Puri’s shore with divine protection.',
    image: '/images/puri-golden-beach.png',
  },
  {
    title: 'Siddha Mahavir',
    description:
      'A revered Hanuman shrine near Puri, visited by devotees seeking strength, peace, and blessings.',
    image: '/images/attraction-konark.jpg',
  },
  {
    title: 'Om Kareswar Temple',
    description:
      'A peaceful local Shiva shrine near Puri, ideal for quiet darshan and spiritual reflection.',
    image: '/images/attraction-jagannath.jpg',
  },
  {
    title: 'Blue Flag Beach',
    description:
      'A clean, eco-certified coastal stretch near Puri, perfect for a safe and refreshing beach outing.',
    image: '/images/puri-golden-beach.png',
  },
  {
    title: 'Gundicha Temple',
    description:
      'The garden house of Lord Jagannath, where the deities stay during the famous Rath Yatra festival.',
    image: '/images/attraction-jagannath.jpg',
  },
  {
    title: 'Mausi Maa Temple',
    description:
      'Temple of Goddess Ardhashini (Mausi Maa), known for the sacred poda pitha offering during Rath Yatra.',
    image: '/images/attraction-sudarshan.png',
  },
  {
    title: 'Raghurajpur',
    description:
      'An ideal heritage crafts village renowned for Pattachitra painting and living Odisha folk art.',
    image: '/images/patachitra-bg.png',
  },
  {
    title: 'Pipli',
    description:
      'Colourful applique-work town famous for vibrant canopies, umbrellas, and traditional textile crafts.',
    image: '/images/attraction-sudarshan.png',
  },
  {
    title: 'Rama Chandi Temple',
    description:
      'Seaside temple of Goddess Ramachandi near the Konark coast, blending devotion with ocean views.',
    image: '/images/puri-marine-drive.png',
  },
];

export const featuredAttractions = attractions.filter((a) => a.featured);
