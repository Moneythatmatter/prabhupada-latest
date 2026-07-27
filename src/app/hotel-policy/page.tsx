import React from 'react';
import { Metadata } from 'next';
import { Building2, Clock, ShieldCheck, Users, Dog, Bed, AlertTriangle } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';

export const metadata: Metadata = {
  title: 'Hotel Policy | Hotel Prabhupada Puri',
  description: 'Official Hotel Policy and House Rules of Hotel Prabhupada, Puri, Odisha.',
};

export default function HotelPolicyPage() {
  return (
    <LegalPageShell
      title="Hotel Policy"
      breadcrumb="Hotel Policy"
      icon={<Building2 className="w-6 h-6" />}
    >
        <div className="bg-[#0C1827] p-8 sm:p-12 rounded-sm border border-[#C5A059]/20 space-y-8 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
          
          {/* 1. Check-in Policy */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E8A317]" /> Check-in Policy
            </h2>
            <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 space-y-2 text-white/90">
              <p>Our Standard check in time is 10 AM.</p>
              <p>Early check in is subject to availability with a chargeable basis.</p>
              <p className="flex items-start gap-2 pt-1 text-white">
                <ShieldCheck className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
                <span>Govt Issued ID like DL / Passport / AADHAAR / Voter Card is mandate during c/in.</span>
              </p>
            </div>
          </section>

          {/* 2. Check-out Policy */}
          <section className="space-y-3 pt-4 border-t border-[#C5A059]/20">
            <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E8A317]" /> Check-out Policy
            </h2>
            <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 space-y-2 text-white/90">
              <p>Our Standard check out time is 8 AM.</p>
              <p>Late checkout is subject to availability with a chargeable basis.</p>
              <p>Kindly Handover the room key at reception during check out.</p>
              <p className="text-white font-medium">All Bills Due must be settled before checkout from hotel.</p>
            </div>
          </section>

          {/* 3. Child Policy */}
          <section className="space-y-3 pt-4 border-t border-[#C5A059]/20">
            <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal flex items-center gap-2">
              <Users className="w-5 h-5 text-[#E8A317]" /> Child Policy
            </h2>
            <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 space-y-2 text-white/90">
              <p>Children’s above 10 years of age will be considered as an adult with @ Rs.1200+GST.</p>
              <p>Children’s between 7-10 years of age will be charged Rs.750+GST.</p>
              <p>Children have to be accompanied by their parents while staying in the room.</p>
            </div>
          </section>

          {/* 4. Pet Policy & Security Deposit */}
          <section className="space-y-3 pt-4 border-t border-[#C5A059]/20">
            <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal flex items-center gap-2">
              <Dog className="w-5 h-5 text-[#E8A317]" /> Pet Policy & Security Deposit
            </h2>
            <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 space-y-3 text-white/90">
              <p>A pet fee of Rs.1200/- will be charged to the guest upon arrival per day per night.</p>
              <p>During check in at Hotel one Security deposit charges will be applied to the guest of Rs.4000/- which is completely refundable at the time of check-out.</p>
              <p className="pt-2 border-t border-[#C5A059]/20">
                <strong>Pet-Friendly Areas</strong> - Pets are allowed only in the following areas: Guest Room, Main Lobby, Outside. Pets are not allowed in public areas where F&B is served.
              </p>
              <p className="text-white/80">
                Guest is responsible for cleaning up after the pet on hotel grounds and properly disposing of the waste in the outside dumpster or will be charged a fine of Rs.300/- against cleaning services.
              </p>
            </div>
          </section>

          {/* 5. Extra Person / Extra Bed Charges */}
          <section className="space-y-3 pt-4 border-t border-[#C5A059]/20">
            <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal flex items-center gap-2">
              <Bed className="w-5 h-5 text-[#E8A317]" /> Extra Person & Bed Charges
            </h2>
            <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 space-y-2 text-white/90">
              <p>An extra Person charges will be applied Rs.1200+GST on EP with an extra Bed.</p>
              <p>In case of any extra bed taken for children’s below 10 years of age Rs.1000+GST will be charged to the respective Guest account.</p>
            </div>
          </section>

          {/* 6. Cancellation & Amendment Policy */}
          <section className="space-y-3 pt-4 border-t border-[#C5A059]/20">
            <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#E8A317]" /> Cancellation & Amendment Policy
            </h2>
            <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 space-y-2 text-white/90">
              <p>Cancellation Prior to 7 days of the arrival date will be no charge.</p>
              <p>Cancellation Prior to 72 Hours of arrival will be charged 50% of the room tariff.</p>
              <p>Cancellation Prior to 24 Hours of arrival will be charged 100% of the room tariff.</p>
              <p>No refund/adjust on NO SHOW reservations.</p>
              <p>Any amendment of date will be considered as a cancellation of room reservation.</p>
            </div>
          </section>

        </div>
    </LegalPageShell>
  );
}
