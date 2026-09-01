import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { LegalPageShell } from '@/components/layout/LegalPageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hotel Prabhupada Puri',
  description: 'Official Privacy Policy of Hotel Prabhupada, Puri, Odisha.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      breadcrumb="Privacy Policy"
      icon={<ShieldCheck className="w-6 h-6" />}
    >
      <div className="bg-[#0C1827] p-8 sm:p-12 rounded-sm border border-[#C5A059]/20 space-y-8 font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
        {/* Introductory Paragraph */}
        <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed border-b border-[#C5A059]/20 pb-6">
          Hotel Prabhupada (“We,” “Us,” “Our”) has measures to protect your Personal Data. We shall ensure you that your Personal Data is handled in accordance with Personal Data Protection regulations at New Marine Drive Rd, Near light house, Puri, Odisha 752001, India.
        </p>

        {/* Section 1: Terms and Definitions */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal">
            Terms and Definitions
          </h2>
          <p className="text-white/80">
            Terms and Definitions used in this Privacy Notice are set out in the details as below:
          </p>
          <ul className="space-y-3 pl-2">
            <li className="p-3.5 bg-white/[0.03] rounded-lg border border-white/5">
              <strong className="text-white font-medium">Personal Data:</strong> Means as specified in clause 2 “Types of Personal Data Collected”.
            </li>
            <li className="p-3.5 bg-white/[0.03] rounded-lg border border-white/5">
              <strong className="text-white font-medium">Data Controller:</strong> Means a natural or legal person who has powers and duties to make decision regarding the collection, storage, usage and disclosure of Personal Data.
            </li>
            <li className="p-3.5 bg-white/[0.03] rounded-lg border border-white/5">
              <strong className="text-white font-medium">Data Processor:</strong> Means a natural or legal person who proceeds the collection, storage, usage or disclosure of Personal Data according to the order or on behalf of Data Controller; however, such natural or legal person who proceeds such activities is not Data Controller.
            </li>
            <li className="p-3.5 bg-white/[0.03] rounded-lg border border-white/5">
              <strong className="text-white font-medium">Data Subject:</strong> Means any individual person who can be identified, directly or indirectly, via Personal Data.
            </li>
            <li className="p-3.5 bg-white/[0.03] rounded-lg border border-white/5">
              <strong className="text-white font-medium">Person:</strong> Means a natural person.
            </li>
            <li className="p-3.5 bg-white/[0.03] rounded-lg border border-white/5">
              <strong className="text-white font-medium">DPO:</strong> Data Protection Officer.
            </li>
          </ul>
        </section>

        {/* Section 2: Types of Personal Data Collected */}
        <section className="space-y-4 pt-4 border-t border-[#C5A059]/20">
          <h2 className="font-serif text-xl sm:text-2xl text-[#E8A317] font-normal">
            Types of Personal Data Collected
          </h2>
          <p className="text-white/80">
            Personal data refers to information about an individual from which that person can be identified whether by either a direct or an indirect means. However, Personal Data does not include information of deceased person and anonymous data.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
              <h3 className="font-semibold text-white mb-1">Identity Data:</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Data about individuals which can be used to identify specific individual, whether by a direct or an indirect means such as name, surname, date/ month/ year of birth, gender, ID number, driving license number, passport number and marital status.
              </p>
            </div>

            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
              <h3 className="font-semibold text-white mb-1">Contact Data:</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Such as email address and phone number.
              </p>
            </div>

            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
              <h3 className="font-semibold text-white mb-1">Sensitive Data:</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Such as ethnicity, beliefs, religion, health information (including food and general allergies) and biometric data, including criminal history data. In the event that we have unintentionally received it and has no intention to collect such data, and the data is not intended to be used to facilitate your stays at our hotels, We will not process your sensitive data.
              </p>
            </div>

            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
              <h3 className="font-semibold text-white mb-1">Financial and Transactional Data:</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Such as bank account number, credit card number and debit card number, monthly income and payment information.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Contact & Data Subject Rights */}
        <section className="pt-6 border-t border-[#C5A059]/20 space-y-4">
          <p className="text-white/90">
            If you wish to exercise data subject rights or if you have any question or complaint, you can contact us via:
          </p>
          <div className="p-6 bg-[#070F1A] rounded-xl border border-[#E8A317]/30 space-y-2">
            <h3 className="font-serif text-lg text-white font-normal">Hotel Prabhupada</h3>
            <p className="flex items-start gap-2 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
              <span>New Marine Drive Rd, Near light house, Puri, Odisha 752001, India</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-white/80 pt-1">
              <Mail className="w-4 h-4 text-[#E8A317] shrink-0" />
              <span>Email: <a href="mailto:gm@hotelprabhupada.com" className="text-[#E8A317] underline">gm@hotelprabhupada.com</a></span>
            </p>
          </div>
        </section>
      </div>
    </LegalPageShell>
  );
}
