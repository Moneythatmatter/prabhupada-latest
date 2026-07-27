import React from 'react';
import { Metadata } from 'next';
import { FileText, CheckCircle2, ShieldCheck, Link2 } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hotel Prabhupada Puri',
  description: 'Official Terms & Conditions of Hotel Prabhupada, Puri, Odisha.',
};

export default function TermsConditionsPage() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      breadcrumb="Terms & Conditions"
      icon={<FileText className="w-6 h-6" />}
    >
        <div className="bg-[#0C1827] p-8 sm:p-12 rounded-sm border border-[#C5A059]/20 space-y-8 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
          
          {/* Introductory Preamble */}
          <section className="space-y-4">
            <p className="text-white/90">
              Please read these Terms and Conditions carefully as these conditions incorporate the basis on which bookings for the Hotel Prabhupada Hotel is accepted. The Terms and Conditions below are for bookings made directly via the hotels’ websites and payments via payment gateway systems through the Waetiya Limited. Registered Address: New Marine Drive Road, Baliapanda, Puri,Odisha 752001,India
            </p>
            <p className="text-[#E8A317] font-medium">
              By using this Site, you agree to be bound by these terms and conditions.
            </p>
          </section>

          {/* Section: Revisions */}
          <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
            <h2 className="font-serif text-xl text-[#E8A317] font-normal">Revisions to Terms</h2>
            <p>
              We may revise these terms & conditions from time to time by updating this posting. The revised terms will take effect when they are posted. Your use of some parts or features of the Site may be governed by additional terms and conditions. Where this is the case you will be notified accordingly of those additional terms and conditions.
            </p>
          </section>

          {/* Section: Departure & Requests */}
          <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
            <h2 className="font-serif text-xl text-[#E8A317] font-normal">Early Departure & Requests</h2>
            <p>
              The property reserves the right to charge an early departure fee in the event a guest departs earlier than the original departure date.
            </p>
            <p className="text-white/70 italic">
              On request. Please contact the Front Office. Additional fees may be applied.
            </p>
          </section>

          {/* Section: Cancellation & Reservation Policy */}
          <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
            <h2 className="font-serif text-xl text-[#E8A317] font-normal">Reservation & Cancellation Terms</h2>
            <p>
              Each rate booked at Hotel Prabhupada Hotel, is subject to a Cancellation Policy. Failure to check in on the reserved arrival date will incur a penalty charge as detailed in the Cancellation Policy of the rate booked. We reserve the right to cancel or modify reservations under the circumstances where it appears that a customer has provided an invalid credit card, engaged in fraudulent or inappropriate activity, or the reservations contain or resulted from a mistake or error. In addition, we also reserve the right to cancel or amend bookings if they do not adhere to our terms & conditions. If a guest chooses to shorten their stay or check out early, a penalty charge will apply, as detailed in the Cancellation Policy associated with the rate booked. In the cases of the aforementioned booking cancellations, Hotel Prabhupada Hotel has no obligation to guarantee new available bookings or best rates. A new booking at the best available rate will need to be made by the guest at the time of the new reservation.
            </p>
          </section>

          {/* Section: Proof of Payment & Validation */}
          <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
            <h2 className="font-serif text-xl text-[#E8A317] font-normal">Proof of Payment & Verification</h2>
            <p>
              As a condition of using this website, you agree to provide proof of payment to the hotel reservations department within 48 hours of the time of booking and will indicate the reservation confirmation number on the proof of payment. You will be fully responsible for any banking fees and/or costs required to complete the bank funds transaction(s). Furthermore, you acknowledge that the reservation may be canceled by the hotel if proof of payment is not submitted to the hotel within the 48-hour notice period. You will be responsible for any cancellation or no show penalties that might be incurred and hereby acknowledge that booking and personal contact information provided is correct for the hotel’s validation purposes.
            </p>
          </section>

          {/* Section: Hyperlinking & Linking Rights */}
          <section className="pt-4 border-t border-[#C5A059]/20 space-y-4">
            <h2 className="font-serif text-xl text-[#E8A317] font-normal flex items-center gap-2">
              <Link2 className="w-5 h-5 text-[#E8A317]" /> Hyperlinking to our Website
            </h2>
            <p className="text-white/90">
              The following organizations may link to our website without prior written approval:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2 text-[#E8A317]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                <span className="text-white/85">Government agencies;</span>
              </li>
              <li className="flex items-start gap-2 text-[#E8A317]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                <span className="text-white/85">Search engines;</span>
              </li>
              <li className="flex items-start gap-2 text-[#E8A317]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                <span className="text-white/85">News organizations;</span>
              </li>
              <li className="flex items-start gap-2 text-[#E8A317]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                <span className="text-white/85">Online directory distributors may link to our website in the same manner as they hyperlink to the websites of other listed businesses; and</span>
              </li>
              <li className="flex items-start gap-2 text-[#E8A317]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                <span className="text-white/85">System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</span>
              </li>
            </ul>
          </section>

        </div>
    </LegalPageShell>
  );
}
