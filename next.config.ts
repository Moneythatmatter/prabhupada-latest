import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/hotel-prabhupada-superior-deluxe-balcony-sea-view.html',
        destination: '/rooms/superior-deluxe-balcony-sea-view',
        permanent: true,
      },
      {
        source: '/hotel-prabhupada-deluxe-with-balcony-sea-view.html',
        destination: '/rooms/deluxe-with-balcony-sea-view',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/contactus.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/rooms.html',
        destination: '/rooms',
        permanent: true,
      },
      {
        source: '/faq.html',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/refund-policy.html',
        destination: '/refund-policy',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/attraction.html',
        destination: '/attractions',
        permanent: true,
      },
      {
        source: '/amenities.html',
        destination: '/amenities',
        permanent: true,
      },
      {
        source: '/hotel-policy.html',
        destination: '/hotel-policy',
        permanent: true,
      },
      {
        source: '/hotel-prabhupada-premier-room.html',
        destination: '/rooms/premier-room',
        permanent: true,
      },
      {
        source: '/hotel-prabhupada-suite-front-sea-view.html',
        destination: '/rooms/suite-front-sea-view',
        permanent: true,
      },
      {
        source: '/hotel-prabhupada-family-quad-sharing.html',
        destination: '/rooms/family-quad-sharing',
        permanent: true,
      },
      {
        source: '/hotel-prabhupada-executive-front-sea-facing.html',
        destination: '/rooms/executive-front-sea-facing',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/sustainable-tourism-minimizing-your-environmental-footprint.html',
        destination: '/blog/sustainable-tourism',
        permanent: true,
      },
      {
        source: '/adventure-travel-for-seniors-active-vacations-for-mature-explorers.html',
        destination: '/blog/adventure-travel-for-seniors',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;