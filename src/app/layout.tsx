import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/chatbot/Chatbot';
import { FloatingActionMenu } from '@/components/layout/FloatingActionMenu';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotelprabhupada.com'),
  title: 'Best Pet Friendly Sea Facing Hotel in Puri Odisha | Hotel Prabhupada',
  description:
    'Stay at the best pet friendly, sea facing hotel in Puri, Odisha. Enjoy comfortable rooms, beach views, and a perfect stay near Puri beach.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hotel Prabhupada Puri | Best Pet Friendly Sea Facing Hotel',
    description:
      'Stay at the best pet friendly, sea facing hotel in Puri, Odisha. Enjoy comfortable rooms, beach views, and a perfect stay near Puri beach.',
    url: 'https://hotelprabhupada.com',
    siteName: 'Hotel Prabhupada',
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

const hotelJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  '@id': 'https://www.hotelprabhupada.com/#hotel',
  name: 'Hotel Prabhupada',
  url: 'https://www.hotelprabhupada.com/',
  description: 'A pet-friendly, sea-facing hotel on New Marine Drive Road in Puri, Odisha.',
  telephone: '+91-9583002952',
  email: 'reservation@hotelprabhupada.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'New Marine Drive Road, Near Light House',
    addressLocality: 'Puri',
    addressRegion: 'Odisha',
    postalCode: '752001',
    addressCountry: 'IN',
  },
  petsAllowed: true,
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Free Wi-Fi',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Free parking',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Swimming pool',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Restaurant',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Air conditioning',
      value: true,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#070F1A] text-white overflow-x-hidden w-full max-w-full relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hotelJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Header />
        <main className="min-w-0 w-full overflow-x-hidden">{children}</main>
        <Footer />
        <Chatbot />
        <FloatingActionMenu />
      </body>
    </html>
  );
}
