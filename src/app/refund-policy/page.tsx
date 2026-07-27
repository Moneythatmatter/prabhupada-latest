import React from 'react';
import { Metadata } from 'next';
import { RefreshCw, Clock, ShieldAlert, CreditCard, AlertCircle } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';

export const metadata: Metadata = {
  title: 'Refund Policy | Hotel Prabhupada Puri',
  description: 'Official Refund & Cancellation Policy of Hotel Prabhupada, Puri, Odisha.',
};

export default function RefundPolicyPage() {
  return (
    <LegalPageShell
      title="Refund & Cancellation Policy"
      breadcrumb="Refund Policy"
      icon={<RefreshCw className="w-6 h-6" />}
    >
        <div className="bg-[#0C1827] p-8 sm:p-12 rounded-sm border border-[#C5A059]/20 space-y-6 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
          
          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Cancellations made up to 48 hours before the check-in date qualify for a full refund, minus processing fees.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Cancellations made within 24–48 hours before check-in incur a 50% charge of the booking amount.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Cancellations within 24 hours of check-in or no-shows are non-refundable.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Guests departing earlier than scheduled will not be refunded for the remaining nights.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Bookings under special promotional or discounted rates are non-refundable unless stated in the promotion terms.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <RefreshCw className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Date changes are subject to availability and may incur additional charges or rate adjustments.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Some rates or packages may be non-refundable regardless of the cancellation date; these will be noted at booking.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <RefreshCw className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              Refund policies for group bookings may vary. Please refer to your group contract for specific terms or contact our team for details.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 leading-relaxed">
              In case of unforeseen events such as natural disasters or government restrictions, Hotel Prabhupada reserves the right to offer alternative solutions in place of refunds, subject to policy adjustments.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-[#070F1A] rounded-xl border border-[#E8A317]/30 flex items-start gap-3.5 mt-4">
            <CreditCard className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
            <p className="text-white/90 font-medium leading-relaxed">
              Refunds may take up to 7–10 business days to process, depending on the payment method and financial institution.
            </p>
          </div>

        </div>
    </LegalPageShell>
  );
}
