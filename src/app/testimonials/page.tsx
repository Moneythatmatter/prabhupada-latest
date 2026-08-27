import React from 'react';
import { Metadata } from 'next';
import { MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';

export const metadata: Metadata = {
  title: 'Guest Testimonials | Hotel Prabhupada Puri',
  description:
    'Read guest testimonials and reviews about stay experiences, hospitality, dining, and room comfort at Hotel Prabhupada, Puri.',
  openGraph: {
    title: 'Guest Testimonials | Hotel Prabhupada Puri',
    description:
      'Guest reviews and experiences at Hotel Prabhupada, New Marine Drive Road, Baliapanda, Puri, Odisha.',
    url: 'https://hotelprabhupada.com/testimonials',
    siteName: 'Hotel Prabhupada',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return (
    <LegalPageShell
      title="Testimonials"
      breadcrumb="Testimonials"
      subtitle="Hotel Prabhupada, Puri, Odisha"
      icon={<MessageSquareQuote className="w-6 h-6" />}
    >
      <div className="bg-[#0C1827] p-8 sm:p-12 rounded-sm border border-[#C5A059]/20 space-y-8 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
        {/* Guest Testimonials Section */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal">
            Guest Testimonials
          </h2>
          <p className="text-white/85 leading-relaxed">
            Guest reviews and experiences help future travellers understand the comfort,
            hospitality, and services offered by Hotel Prabhupada.
          </p>
        </section>

        {/* Feedback Focus Areas */}
        <section className="space-y-4 pt-6 border-t border-[#C5A059]/20">
          <p className="text-white/90 font-normal">
            Hotel Prabhupada welcomes valuable feedback from guests regarding:
          </p>
          <ul className="space-y-2.5 list-none p-0 m-0 text-white/80">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
              <span>Room comfort, cleanliness, and amenities</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
              <span>Hotel location and accessibility to Puri beach</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
              <span>Restaurant and dining experience</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
              <span>Staff hospitality and service quality</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
              <span>Family and leisure stay experience</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
              <span>Overall satisfaction during their visit</span>
            </li>
          </ul>
        </section>

        {/* Informing Booking Decisions & Sharing Feedback */}
        <section className="space-y-4 pt-6 border-t border-[#C5A059]/20">
          <p className="text-white/85 leading-relaxed">
            The testimonial section features guest experiences and reviews to help visitors make
            informed booking decisions.
          </p>
          <p className="text-white/85 leading-relaxed">
            Guests are encouraged to share their feedback and stay experiences with Hotel Prabhupada.
          </p>
        </section>
      </div>
    </LegalPageShell>
  );
}
