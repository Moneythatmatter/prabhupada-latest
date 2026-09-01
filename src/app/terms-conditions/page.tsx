import React from 'react';
import { Metadata } from 'next';
import { FileText, CheckCircle2, ShieldCheck, Link2, AlertOctagon, Dog, Users, Waves } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';
import { HOTEL_POLICIES } from '@/data/hotelPolicies';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hotel Prabhupada Puri',
  description: 'Official Terms & Conditions and Guest Agreement of Hotel Prabhupada, Puri, Odisha.',
};

export default function TermsConditionsPage() {
  const {
    propertyDamagePolicy,
    visitorsPolicy,
    identificationPolicy,
    cancellationPolicy,
    swimmingPoolPolicy,
    petPolicy,
  } = HOTEL_POLICIES;

  return (
    <LegalPageShell
      title="Terms & Conditions"
      breadcrumb="Terms & Conditions"
      subtitle="Official Guest Terms & Property Conditions for Hotel Prabhupada, Puri"
      icon={<FileText className="w-6 h-6" />}
    >
      <div className="bg-[#0C1827] p-8 sm:p-12 rounded-sm border border-[#C5A059]/20 space-y-8 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
        
        {/* Introductory Preamble */}
        <section className="space-y-4">
          <p className="text-white/90">
            Please read these Terms and Conditions carefully as these conditions incorporate the basis on which bookings for Hotel Prabhupada are accepted. The Terms and Conditions below apply to all direct bookings made via the hotel’s official website, front desk, and authorized reservation systems.
          </p>
          <p className="text-white/70">
            Registered Address: Hotel Prabhupada, New Marine Drive Rd, near Light House, Puri, Odisha 752001.
          </p>
          <p className="text-[#E8A317] font-medium">
            By making a reservation or using this Site, you agree to be bound by these terms and conditions.
          </p>
        </section>

        {/* Section: Valid ID Requirements */}
        <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
          <h2 className="font-serif text-xl text-[#E8A317] font-normal flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E8A317]" /> {identificationPolicy.title}
          </h2>
          <p>
            As per Government of India notification, every resident guest is required to carry valid proof of identity (Passport, Driving License, AADHAAR Card, or Voter ID) and present it at check-in. <strong className="text-white">PAN Card is NOT accepted as a valid identification proof.</strong> Foreign nationals must present a valid Passport and valid Indian Visa on arrival. The hotel reserves the right to refuse check-in without valid ID.
          </p>
        </section>

        {/* Section: Cancellation & Reservation Policy */}
        <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
          <h2 className="font-serif text-xl text-[#E8A317] font-normal">Reservation & Cancellation Terms</h2>
          <p>
            Individual reservations are subject to our standard cancellation policy:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-white/90">
            <li><strong>More than 2 days before check-in:</strong> Free Cancellation (0% charge).</li>
            <li><strong>0 to 2 days before check-in:</strong> Non-refundable (Full stay charge applied).</li>
            <li><strong>No Show:</strong> 100% Non-refundable / No adjustment.</li>
            <li><strong>Festival Periods:</strong> NO CANCELLATION & AMENDMENT TO BE MADE DURING FESTIVAL PERIODS (Durga Puja, Holi, Diwali, Christmas & New Year).</li>
          </ul>
        </section>

        {/* Section: Property Damage Policy */}
        <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
          <h2 className="font-serif text-xl text-[#E8A317] font-normal flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-[#E8A317]" /> {propertyDamagePolicy.title}
          </h2>
          <div className="space-y-2">
            {propertyDamagePolicy.rules.map((rule, idx) => (
              <p key={idx} className="text-white/85">
                • {rule.text}
              </p>
            ))}
          </div>
        </section>

        {/* Section: Visitor's Policy */}
        <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
          <h2 className="font-serif text-xl text-[#E8A317] font-normal flex items-center gap-2">
            <Users className="w-5 h-5 text-[#E8A317]" /> {visitorsPolicy.title}
          </h2>
          <div className="space-y-2">
            {visitorsPolicy.rules.map((rule, idx) => (
              <p key={idx} className="text-white/85">
                • {rule.text}
              </p>
            ))}
          </div>
        </section>

        {/* Section: Swimming Pool & Pet Guidelines */}
        <section className="pt-4 border-t border-[#C5A059]/20 space-y-4">
          <h2 className="font-serif text-xl text-[#E8A317] font-normal flex items-center gap-2">
            <Waves className="w-5 h-5 text-[#E8A317]" /> Swimming Pool & Pet Guidelines
          </h2>
          <div className="space-y-2 text-white/85">
            <p>
              • <strong>Swimming Pool:</strong> Proper swimming costume is mandatory. In-house guests without a proper swimming costume will be charged {swimmingPoolPolicy.costumeCharge} for pool usage. Outside guests are strictly not permitted.
            </p>
            <p>
              • <strong>Pet Policy:</strong> Pet accommodation fee is {petPolicy.feeDetails.dailyFee}. A refundable security deposit of {petPolicy.feeDetails.securityDeposit} is collected at check-in (refunded after check-out inspection). Only domesticated dogs and cats are allowed (max 1 pet or 2 small pets; dangerous breeds excluded). Mandatory check-in documents (anti-rabies vaccination, pet passport/licence, signed waiver) are required. Pets are allowed only in designated areas (Guest Room, Garden/Lawn, Lobby Lounge) and strictly prohibited in F&B outlets, swimming pool area, spa, gym, and banquet rooms. Pets must be leashed/in carriers in public spaces. Waste must be cleaned immediately, failing which a fine of {petPolicy.feeDetails.cleaningFine} will be charged.
            </p>
          </div>
        </section>

        {/* Section: Revisions */}
        <section className="pt-4 border-t border-[#C5A059]/20 space-y-3">
          <h2 className="font-serif text-xl text-[#E8A317] font-normal">Revisions to Terms</h2>
          <p>
            We may revise these terms & conditions from time to time by updating this posting. The revised terms will take effect when they are posted. Your continued use of the Site and hotel services constitutes acceptance of these revised terms.
          </p>
        </section>

        {/* Section: Hyperlinking */}
        <section className="pt-4 border-t border-[#C5A059]/20 space-y-4">
          <h2 className="font-serif text-xl text-[#E8A317] font-normal flex items-center gap-2">
            <Link2 className="w-5 h-5 text-[#E8A317]" /> Hyperlinking to our Website
          </h2>
          <p className="text-white/90">
            Government agencies, search engines, news organizations, and online directory distributors may link to our website without prior written approval, provided the link is not deceptive and does not falsely imply sponsorship or endorsement.
          </p>
        </section>

      </div>
    </LegalPageShell>
  );
}
