import React from 'react';
import { Metadata } from 'next';
import {
  Building2,
  Clock,
  ShieldCheck,
  Users,
  Dog,
  Bed,
  AlertTriangle,
  Waves,
  AlertOctagon,
  CheckCircle2,
  Sparkles,
  CalendarX,
  CreditCard,
  Camera,
} from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';
import { HOTEL_POLICIES } from '@/data/hotelPolicies';

export const metadata: Metadata = {
  title: 'Hotel Policy & House Rules | Hotel Prabhupada Puri',
  description:
    'Official Hotel Policies, Pet Policy, Identification Requirements, Pool Guidelines, Cancellation Terms, and House Rules of Hotel Prabhupada, Puri, Odisha.',
};

export default function HotelPolicyPage() {
  const {
    identificationPolicy,
    cancellationPolicy,
    petPolicy,
    visitorsPolicy,
    swimmingPoolPolicy,
    propertyDamagePolicy,
    checkInOutPolicy,
    childAndExtraBedPolicy,
  } = HOTEL_POLICIES;

  return (
    <LegalPageShell
      title="Hotel Policy & House Rules"
      breadcrumb="Hotel Policy"
      subtitle="Official Guidelines & Guest Rules of Hotel Prabhupada, Puri"
      icon={<Building2 className="w-6 h-6" />}
    >
      <div className="space-y-10 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
        
        {/* Intro Banner */}
        <div className="bg-[#0C1827] p-6 sm:p-8 rounded-sm border border-[#C5A059]/30 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A317]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#E8A317]/20 border border-[#E8A317]/50 flex items-center justify-center shrink-0 text-[#E8A317]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-normal">
                Welcome to Hotel Prabhupada, Puri
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                To ensure a safe, comfortable, and memorable coastal stay for all our guests, please review our official house rules, government identification mandates, and property guidelines below.
              </p>
            </div>
          </div>
        </div>

        {/* 1. Valid Identification Card Required (Mandatory) */}
        <section id="id-policy" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl relative">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Mandatory Notification
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {identificationPolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-[#E8A317]/20 text-[#E8A317] border border-[#E8A317]/40 px-3 py-1 rounded-full font-medium">
              {identificationPolicy.badge}
            </span>
          </div>

          <p className="text-white/85 text-sm sm:text-base leading-relaxed">
            {identificationPolicy.description}
          </p>

          <div className="space-y-3">
            {identificationPolicy.rules.map((rule, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-start gap-3.5 transition-colors ${
                  rule.important
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-100'
                    : 'bg-white/[0.03] border-white/5 text-white/90'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base leading-relaxed">
                  <span>{rule.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-red-950/30 border border-red-500/30 rounded-xl text-red-200 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p>
              <strong>Important Notice:</strong> PAN Card is <u>NOT</u> accepted as a valid identification proof for check-in. Foreign nationals must present both a valid Passport and valid Visa upon arrival.
            </p>
          </div>
        </section>

        {/* 2. Cancellation & Amendment Policy for Individual Reservations */}
        <section id="cancellation-policy" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Individual Reservations
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {cancellationPolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-[#E8A317]/20 text-[#E8A317] border border-[#E8A317]/40 px-3 py-1 rounded-full font-medium">
              {cancellationPolicy.badge}
            </span>
          </div>

          <p className="text-white/85 text-sm sm:text-base">
            {cancellationPolicy.description}
          </p>

          {/* Timeline Grid */}
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
                  <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                    {item.period}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {item.policy}
                </p>
              </div>
            ))}
          </div>

          {/* Festival Clause Box */}
          <div className="p-5 bg-gradient-to-r from-[#E8A317]/15 to-transparent border border-[#E8A317]/40 rounded-xl space-y-2.5">
            <div className="flex items-center gap-2 text-[#E8A317] font-serif text-base sm:text-lg font-medium">
              <CalendarX className="w-5 h-5" />
              <span>{cancellationPolicy.festivalPeriodClause.title}</span>
            </div>
            <p className="text-white text-sm sm:text-base font-medium">
              {cancellationPolicy.festivalPeriodClause.text}
            </p>
            <p className="text-white/70 text-xs sm:text-sm">
              Applicable festival periods: {cancellationPolicy.festivalPeriodClause.festivals.join(', ')}.
            </p>
          </div>

          {/* General Cancellation Rules */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            {cancellationPolicy.generalRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <span className="text-[#E8A317] font-bold">•</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Pet Policy & Security Deposit */}
        <section id="pet-policy" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <Dog className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Pet Friendly Stays
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {petPolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-medium">
              {petPolicy.badge}
            </span>
          </div>

          <p className="text-white/85 text-sm sm:text-base">
            {petPolicy.description}
          </p>

          {/* Key Pet Fee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white/[0.04] rounded-xl border border-white/10 space-y-1">
              <span className="text-xs text-white/60 uppercase tracking-wider block">Pet Stay Fee</span>
              <div className="text-lg sm:text-xl font-serif text-[#E8A317] font-medium">
                {petPolicy.feeDetails.dailyFee}
              </div>
              <p className="text-xs text-white/70">{petPolicy.feeDetails.dailyFeeNote}</p>
            </div>

            <div className="p-4 bg-white/[0.04] rounded-xl border border-white/10 space-y-1">
              <span className="text-xs text-white/60 uppercase tracking-wider block">Security Deposit</span>
              <div className="text-lg sm:text-xl font-serif text-[#E8A317] font-medium">
                {petPolicy.feeDetails.securityDeposit}
              </div>
              <p className="text-xs text-white/70">{petPolicy.feeDetails.depositNote}</p>
            </div>

            <div className="p-4 bg-white/[0.04] rounded-xl border border-white/10 space-y-1">
              <span className="text-xs text-white/60 uppercase tracking-wider block">Waste Cleaning Fine</span>
              <div className="text-lg sm:text-xl font-serif text-amber-300 font-medium">
                {petPolicy.feeDetails.cleaningFine}
              </div>
              <p className="text-xs text-white/70">{petPolicy.feeDetails.fineNote}</p>
            </div>
          </div>

          {/* Allowed vs Restricted Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <h4 className="text-emerald-400 font-medium text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Pet-Friendly Areas
              </h4>
              <p className="text-white/85 text-xs sm:text-sm">
                Pets are allowed in: <strong className="text-white">{petPolicy.allowedAreas.join(', ')}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <h4 className="text-rose-400 font-medium text-sm flex items-center gap-2">
                <AlertOctagon className="w-4 h-4" /> Restricted Areas
              </h4>
              <p className="text-white/85 text-xs sm:text-sm">
                {petPolicy.prohibitedAreas.join('. ')}.
              </p>
            </div>
          </div>

          {/* Pet Rules List */}
          <div className="space-y-3">
            {petPolicy.rules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Visitor's Policy */}
        <section id="visitors-policy" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Guest & Property Security
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {visitorsPolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-[#E8A317]/20 text-[#E8A317] border border-[#E8A317]/40 px-3 py-1 rounded-full font-medium">
              {visitorsPolicy.badge}
            </span>
          </div>

          <p className="text-white/85 text-sm sm:text-base">
            {visitorsPolicy.description}
          </p>

          <div className="space-y-3">
            {visitorsPolicy.rules.map((rule, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  rule.important
                    ? 'bg-[#E8A317]/10 border-[#E8A317]/30 text-white'
                    : 'bg-white/[0.03] border-white/5 text-white/90'
                }`}
              >
                {rule.text.includes('Photographers') ? (
                  <Camera className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                )}
                <p className="text-sm sm:text-base leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Swimming Pool & Pool Costume / Rental Policy */}
        <section id="pool-policy" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Recreation & Hygiene
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {swimmingPoolPolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full font-medium">
              {swimmingPoolPolicy.badge}
            </span>
          </div>

          <p className="text-white/85 text-sm sm:text-base">
            {swimmingPoolPolicy.description}
          </p>

          <div className="p-4 bg-[#070F1A] rounded-xl border border-[#E8A317]/30 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs text-white/60 uppercase tracking-wider block">Usage Without Proper Costume Charge</span>
              <span className="font-serif text-lg sm:text-xl text-[#E8A317] font-medium">
                {swimmingPoolPolicy.costumeCharge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-md">
              Applicable to in-house guests entering the swimming pool without standard swimming attire.
            </p>
          </div>

          <div className="space-y-3">
            {swimmingPoolPolicy.rules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Property Damage Policy */}
        <section id="damage-policy" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Property Care & Responsibility
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {propertyDamagePolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full font-medium">
              {propertyDamagePolicy.badge}
            </span>
          </div>

          <p className="text-white/85 text-sm sm:text-base">
            {propertyDamagePolicy.description}
          </p>

          <div className="space-y-3">
            {propertyDamagePolicy.rules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Check-in & Check-out Timings */}
        <section id="timings" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Daily Operations
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {checkInOutPolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-[#E8A317]/20 text-[#E8A317] border border-[#E8A317]/40 px-3 py-1 rounded-full font-medium">
              {checkInOutPolicy.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white/[0.04] rounded-xl border border-white/10 space-y-1">
              <span className="text-xs text-white/60 uppercase tracking-wider block">Standard Check-in Time</span>
              <div className="text-2xl font-serif text-[#E8A317] font-medium">
                {checkInOutPolicy.standardCheckIn}
              </div>
              <p className="text-xs text-white/70">Early check-in is subject to availability and chargeable.</p>
            </div>

            <div className="p-5 bg-white/[0.04] rounded-xl border border-white/10 space-y-1">
              <span className="text-xs text-white/60 uppercase tracking-wider block">Standard Check-out Time</span>
              <div className="text-2xl font-serif text-[#E8A317] font-medium">
                {checkInOutPolicy.standardCheckOut}
              </div>
              <p className="text-xs text-white/70">Late check-out is subject to availability and chargeable.</p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/10">
            {checkInOutPolicy.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0 mt-0.5" />
                <span>{rule.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Child Policy & Extra Bed Charges */}
        <section id="child-extra-bed" className="bg-[#0C1827] p-6 sm:p-10 rounded-sm border border-[#C5A059]/30 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A317]/20 border border-[#E8A317] flex items-center justify-center text-[#E8A317] shrink-0">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8A317] block">
                  Occupancy & Tariffs
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {childAndExtraBedPolicy.title}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-[#E8A317]/20 text-[#E8A317] border border-[#E8A317]/40 px-3 py-1 rounded-full font-medium">
              {childAndExtraBedPolicy.badge}
            </span>
          </div>

          <div className="space-y-3">
            {childAndExtraBedPolicy.rules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-white/[0.03] rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </LegalPageShell>
  );
}
