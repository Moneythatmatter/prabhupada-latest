import type { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { WeatherAQISection } from '@/components/weather/WeatherAQISection';
import { AboutSection } from '@/components/about/AboutSection';
import { RoomsSection } from '@/components/rooms/RoomsSection';
import { FacilitiesSection } from '@/components/facilities/FacilitiesSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { AttractionsSection } from '@/components/attractions/AttractionsSection';
import { WhyChooseUsSection } from '@/components/why-choose-us/WhyChooseUsSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WeatherAQISection />
      <AboutSection />
      <RoomsSection />
      <FacilitiesSection />
      {/* <AmenitiesSection /> */}
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AttractionsSection />
    </>
  );
}

