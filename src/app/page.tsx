import { Hero } from '@/components/hero/Hero';
import { AboutSection } from '@/components/about/AboutSection';
import { RoomsSection } from '@/components/rooms/RoomsSection';
import { AmenitiesSection } from '@/components/amenities/AmenitiesSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { AttractionsSection } from '@/components/attractions/AttractionsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <TestimonialsSection />
      <AttractionsSection />
    </>
  );
}
