import { Hero } from '@/components/hero/Hero';
import { WeatherAQISection } from '@/components/weather/WeatherAQISection';
import { AboutSection } from '@/components/about/AboutSection';
import { RoomsSection } from '@/components/rooms/RoomsSection';
import { FacilitiesSection } from '@/components/facilities/FacilitiesSection';
import { AmenitiesSection } from '@/components/amenities/AmenitiesSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { AttractionsSection } from '@/components/attractions/AttractionsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <WeatherAQISection />
      <AboutSection />
      <RoomsSection />
      <FacilitiesSection />
      <AmenitiesSection />
      <TestimonialsSection />
      <AttractionsSection />
    </>
  );
}

