import React from 'react';
import { Metadata } from 'next';
import { RefreshCw, Clock, ShieldAlert, CreditCard, AlertCircle, CalendarX, CheckCircle2 } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';
import { HOTEL_POLICIES } from '@/data/hotelPolicies';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Hotel Prabhupada Puri',
  description:
    'Official Refund & Cancellation Policy for Individual Reservations at Hotel Prabhupada, Puri, Odisha. Cancellation deadlines, festive periods, and refund processing details.',
};

export default function RefundPolicyPage() {
  const { cancellationPolicy } = HOTEL_POLICIES;

  return (
    <LegalPageShell
      title="Refund & Cancellation Policy"
      breadcrumb="Refund Policy"
      subtitle="Cancellation terms & refund procedures for Hotel Prabhupada, Puri"
      icon={<RefreshCw className="w-6 h-6" />}
    >
      <div className="space-y-8 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
        
        {/* Main Cancellation Timeline Grid */}
        <section className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Standard Timeline
                </span>
                <h2 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  Individual Reservation Cancellation Policy
                </h2>
              </div>
            </div>
            <span className="text-xs bg-[#E8A317]/20 text-[#E8A317] border border-[#E8A317]/40 px-3 py-1 rounded-full font-medium">
              Official Policy
            </span>
          </div>

          <p className="text-white/85 text-sm sm:text-base">
            Cancellation terms apply based on the timeframe between your cancellation request and the scheduled check-in date:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cancellationPolicy.timeline.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border flex flex-col justify-between space-y-3 ${
                  item.refundable
                    ? 'bg-emerald-950/20 border-emerald-500/30'
                    : 'bg-rose-950/20 border-rose-500/30'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-2 ${
                      item.refundable
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}
                  >
                    {item.charge}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-medium">
                    {item.period}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {item.policy}
                </p>
              </div>
            ))}
          </div>

          {/* Festival Period Rule */}
          <div className="p-5 bg-gradient-to-r from-[#E8A317]/15 to-transparent border border-[#E8A317]/40 rounded-xl space-y-2.5">
            <div className="flex items-center gap-2 text-[#E8A317] font-serif text-base sm:text-lg font-medium">
              <CalendarX className="w-5 h-5" />
              <span>{cancellationPolicy.festivalPeriodClause.title}</span>
            </div>
            <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
              {cancellationPolicy.festivalPeriodClause.text}
            </p>
            <p className="text-white/70 text-xs sm:text-sm">
              All bookings made for dates during {cancellationPolicy.festivalPeriodClause.festivals.join(', ')} are strictly non-cancellable, non-amendable, and non-refundable.
            </p>
          </div>
        </section>

        {/* Detailed Refund & Amendment Terms */}
        <section className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-4 shadow-xl">
          <h3 className="font-serif text-xl text-[#E8A317] font-normal flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#E8A317]" /> Additional Refund & Modification Rules
          </h3>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              <strong>Date Amendments:</strong> Any amendment of date will be considered as a cancellation of the existing room reservation and is subject to the applicable cancellation charges.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              <strong>Early Departures:</strong> Guests departing earlier than scheduled will not be refunded for the remaining unstayed nights.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              <strong>Group Bookings:</strong> Refund policies for group reservations may vary according to the signed group sales contract.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-[#070F1A] rounded-xl border border-[#E8A317]/30 flex items-start gap-3.5 mt-4">
            <CreditCard className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 font-medium leading-relaxed">
              <strong>Refund Processing Timeline:</strong> Approved refunds may take up to 7–10 business days to reflect in your original payment account, depending on your banking provider or payment gateway.
            </p>
          </div>
        </section>

      </div>
    </LegalPageShell>
  );
}
