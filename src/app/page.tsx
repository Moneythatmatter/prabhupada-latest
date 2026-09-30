import type { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { WeatherAQISection } from '@/components/weather/WeatherAQISection';
import { AboutSection } from '@/components/about/AboutSection';
import { RoomsSection } from '@/components/rooms/RoomsSection';
import { FacilitiesSection } from '@/components/facilities/FacilitiesSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { AttractionsSection } from '@/components/attractions/AttractionsSection';
import { WhyChooseUsSection } from '@/components/why-choose-us/WhyChooseUsSection';
import { HomeFaqSection } from '@/components/faq/HomeFaqSection';
import { getWeatherData } from '@/lib/weather';

export const revalidate = 600;

export const metadata: Metadata = {
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
  },
};

export default async function Home() {
  const weatherData = await getWeatherData();

  return (
    <>
      <Hero />
      <WeatherAQISection initialData={weatherData} />
      <AboutSection />
      <RoomsSection />
      <FacilitiesSection />
      {/* <AmenitiesSection /> */}
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AttractionsSection />
      <HomeFaqSection />
    </>
  );
}
