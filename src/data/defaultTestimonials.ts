export interface TestimonialItem {
  id: string;
  name: string;
  location?: string;
  rating: number;
  trip_type?: string;
  title?: string;
  review: string;
  created_at: string;
  is_approved?: boolean;
}

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [];
