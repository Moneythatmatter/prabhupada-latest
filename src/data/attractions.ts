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
    image: '/images/jagannath-temple.jpeg',
    featured: true,
  },
  {
    title: 'Swargadwar Sea Beach & Shopping',
    description:
      'Vibrant golden beach waves and popular coastal markets within easy reach of the hotel.',
    image: '/images/attraction-swargadwar.jpeg',
    featured: true,
  },
  {
    title: 'Konark Sun Temple & Heritage',
    description:
      'Iconic 13th-century UNESCO World Heritage monument and architectural wonder nearby.',
    image: '/images/konark_sun.jpeg',
    featured: true,
  },
  {
    title: 'Chilika Lake',
    description:
      'Asia’s largest brackish lagoon — ideal for boat rides, birdwatching, and scenic day trips.',
    image: '/images/chilka_lake.jpeg',
  },
  {
    title: 'Sudarshan Crafts Museum',
    description:
      'A showcase of traditional Odisha crafts, Pattachitra art, and local artisan heritage.',
    image: '/images/attraction-sudarshan.jpeg',
  },
  {
    title: 'Mata Math',
    description:
      'A serene seaside matha in Puri, known for its spiritual calm and coastal heritage setting.',
    image: '/images/mata_math.jpeg',
  },
  {
    title: 'Bedi Hanuman',
    description:
      'Sacred Daria Hanuman temple by the sea, believed to guard Puri’s shore with divine protection.',
    image: '/images/bedi_hanuman.jpeg',
  },
  {
    title: 'Siddha Mahavir',
    description:
      'A revered Hanuman shrine near Puri, visited by devotees seeking strength, peace, and blessings.',
    image: '/images/siddha_mahavir.jpeg',
  },
  {
    title: 'Om Kareswar Temple',
    description:
      'A peaceful local Shiva shrine near Puri, ideal for quiet darshan and spiritual reflection.',
    image: '/images/omkareshwar_temple.jpeg',
  },
  {
    title: 'Blue Flag Beach',
    description:
      'A clean, eco-certified coastal stretch near Puri, perfect for a safe and refreshing beach outing.',
    image: '/images/blue_flag_beach.jpeg',
  },
  {
    title: 'Gundicha Temple',
    description:
      'The garden house of Lord Jagannath, where the deities stay during the famous Rath Yatra festival.',
    image: '/images/gundicha_temple.jpeg',
  },
  {
    title: 'Mausi Maa Temple',
    description:
      'Temple of Goddess Ardhashini (Mausi Maa), known for the sacred poda pitha offering during Rath Yatra.',
    image: '/images/mausi_maa_temple.jpeg',
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
    image: '/images/pipli.png',
  },
  {
    title: 'Rama Chandi Temple',
    description:
      'Seaside temple of Goddess Ramachandi near the Konark coast, blending devotion with ocean views.',
    image: '/images/rama_chandi_temple.jpeg',
  },
];

export const featuredAttractions = attractions.filter((a) => a.featured);
