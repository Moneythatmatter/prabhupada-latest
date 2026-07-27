import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Best Pet Friendly Sea Facing Hotel in Puri Odisha | Hotel Prabhupada',
  description:
    'Stay at the best pet friendly, sea facing hotel in Puri, Odisha. Enjoy comfortable rooms, beach views, and a perfect stay near Puri beach.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#070F1A] text-white overflow-x-hidden">
        <Header />
        <main className="min-w-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
