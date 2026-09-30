import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/chatbot/Chatbot';
import { FloatingActionMenu } from '@/components/layout/FloatingActionMenu';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-3ZQ87ZQPXK';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hotelprabhupada.com'),
  title: 'Pet-Friendly Hotel in Puri for Families | Hotel Prabhupada',
  description:
    'Plan a family getaway with your pet at Hotel Prabhupada in Puri. Explore sea-view rooms, enjoy coastal comfort and book your stay on New Marine Drive.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pet-Friendly Hotel in Puri for Families | Hotel Prabhupada',
    description:
      'Plan a family getaway with your pet at Hotel Prabhupada in Puri. Explore sea-view rooms, enjoy coastal comfort and book your stay on New Marine Drive.',
    url: 'https://www.hotelprabhupada.com',
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
      <head>
        {/* Preconnect to TripAdvisor domains used by the widget scripts */}
        <link rel="preconnect" href="https://www.jscache.com" />
        <link rel="preconnect" href="https://static.tacdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.tripadvisor.in" />
      </head>
      <body className="antialiased bg-[#070F1A] text-white overflow-x-hidden w-full max-w-full relative">
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
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
