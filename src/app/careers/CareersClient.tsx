'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  FileText,
  X,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Users,
  ArrowRight,
  Utensils,
  ChefHat,
  Compass,
  HeartHandshake,
  Wrench,
  ShieldCheck,
  Building2,
  FileCheck2,
  HelpCircle,
  Loader2,
  ChevronDown,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';
import { uploadResumeToSupabase } from '@/lib/supabaseClient';

const DEPARTMENTS = [
  {
    name: 'Front Office',
    icon: Building2,
    desc: 'Front desk operations, guest reception, check-in, and guest communication.',
  },
  {
    name: 'Housekeeping',
    icon: Sparkles,
    desc: 'Room preparation, linen care, hygiene standards, and property cleanliness.',
  },
  {
    name: 'Food and Beverage Service',
    icon: Utensils,
    desc: 'Dining service, restaurant hospitality, and beverage operations.',
  },
  {
    name: 'Kitchen Operations',
    icon: ChefHat,
    desc: 'Culinary preparation, kitchen management, food safety, and cooking.',
  },
  {
    name: 'Guest Relations',
    icon: HeartHandshake,
    desc: 'Assisting guests, addressing special requests, and ensuring a comfortable stay.',
  },
  {
    name: 'Travel Desk',
    icon: Compass,
    desc: 'Assisting guests with local sightseeing, Puri itineraries, and transport.',
  },
  {
    name: 'Administration',
    icon: ShieldCheck,
    desc: 'Operational management, accounts, coordination, and office administration.',
  },
  {
    name: 'Maintenance',
    icon: Wrench,
    desc: 'Property upkeep, electrical, plumbing, and facility maintenance.',
  },
  {
    name: 'Other hospitality roles',
    icon: Briefcase,
    desc: 'Various specialized and support hospitality positions across hotel operations.',
  },
];

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

export const CareersClient: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    experience: '',
    coverNote: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStage, setSubmitStage] = useState<'idle' | 'uploading' | 'sending' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    department: string;
    email: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const handleFileChange = (file: File | null) => {
    setFileError(null);
    setSubmitError(null);
    if (!file) {
      setResumeFile(null);
      return;
    }

    const fileName = file.name.toLowerCase();
    const hasValidExt = ALLOWED_EXTENSIONS.some((ext) => fileName.endsWith(ext));
    const hasValidType = ALLOWED_FILE_TYPES.includes(file.type);

    if (!hasValidExt && !hasValidType) {
      setFileError('Please upload a valid PDF or Word document (.pdf, .doc, .docx).');
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileError('File size exceeds the 5MB limit. Please upload a smaller file.');
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!resumeFile) {
      setFileError('Please attach your resume or CV before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStage('uploading');

    try {
      // 1. Upload resume to Supabase Storage
      const resumeUrl = await uploadResumeToSupabase(resumeFile);

      // 2. Dispatch application data to Resend email API route
      setSubmitStage('sending');
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          position: formData.department,
          experience: formData.experience,
          coverNote: formData.coverNote,
          resumeUrl,
          resumeFileName: resumeFile.name,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ||
            'We were unable to process your application. Please check your details and try again.'
        );
      }

      // Success transition
      setIsSubmitted(true);
      setSubmittedData({
        fullName: formData.fullName,
        department: formData.department,
        email: formData.email,
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        department: '',
        experience: '',
        coverNote: '',
      });
      setResumeFile(null);
      setSubmitStage('idle');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'An unexpected error occurred while submitting your application.';
      console.error('Career application submission error:', err);
      setSubmitError(errorMessage);
      setSubmitStage('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <InnerPageHero
        overline="Hotel Prabhupada · Puri"
        title="Career Opportunities at Hotel Prabhupada"
        subtitle="Hotel Prabhupada provides opportunities for individuals interested in building a rewarding career in the hospitality industry."
        image="/images/official-about.jpg"
        imageAlt="Career Opportunities at Hotel Prabhupada Puri"
        cta={
          <button
            type="button"
            onClick={() => {
              if (formSectionRef.current) {
                formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="header-book-btn inline-flex items-center justify-center gap-2 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase rounded-sm px-8 py-3.5 cursor-pointer"
          >
            <Briefcase className="w-4 h-4" />
            Submit Application
          </button>
        }
      />

      {/* Main Section */}
      <div className="bg-[#070F1A] text-white py-14 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-12 right-[-8%] w-[420px] h-[420px] rounded-full bg-[#C5A059]/08 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-24 left-[-10%] w-[380px] h-[380px] rounded-full bg-[#8B1E1E]/08 blur-3xl"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10 space-y-16 sm:space-y-24">
          {/* Welcome & Philosophy */}
          <section className="text-center max-w-3xl mx-auto">
            <FadeRise>
              <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-3">
                Join Our Team
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-snug">
                Welcome to Hotel Prabhupada Hospitality Careers
              </h2>
              <PatachitraDivider light className="my-5" />
              <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed">
                Hotel Prabhupada welcomes talented, dedicated, and service-oriented individuals
                who wish to grow in the hospitality sector.
              </p>
            </FadeRise>
          </section>

          {/* Departments Grid */}
          <section>
            <FadeRise className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-2">
                Departments
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                Career Opportunities by Department
              </h3>
              <p className="font-sans text-sm text-white/70 font-light mt-2">
                Career opportunities may be available in various departments across our property:
              </p>
            </FadeRise>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {DEPARTMENTS.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <motion.div
                    key={dept.name}
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-[#0C1827] p-6 sm:p-7 rounded-sm border border-[#C5A059]/20 hover:border-[#E8A317]/50 transition-colors shadow-lg flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/25 flex items-center justify-center mb-4 text-[#E8A317] group-hover:bg-[#E8A317] group-hover:text-[#070F1A] transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-lg sm:text-xl font-normal text-white mb-2">
                        {dept.name}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                        {dept.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#E8A317] font-medium">
                      <span>Hospitality Role</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Career Information Details */}
          <section className="bg-[#0C1827] rounded-sm border border-[#C5A059]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0C1827] via-[#0E1F35] to-[#070F1A] opacity-95"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-15"
            />
            <div className="relative z-10 max-w-4xl mx-auto">
              <FadeRise className="text-center mb-8 sm:mb-10">
                <span className="inline-block font-sans text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-2">
                  Guidelines &amp; Overview
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  Career Information
                </h3>
                <PatachitraDivider light className="mt-4" />
              </FadeRise>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#070F1A]/90 border border-[#C5A059]/25 rounded-sm p-6 flex items-start gap-4 hover:border-[#E8A317]/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#E8A317]/10 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white font-medium mb-1">
                      Current Job Openings
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      Contact hotel management for available positions and upcoming vacancies.
                    </p>
                  </div>
                </div>

                <div className="bg-[#070F1A]/90 border border-[#C5A059]/25 rounded-sm p-6 flex items-start gap-4 hover:border-[#E8A317]/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#E8A317]/10 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white font-medium mb-1">
                      Eligibility Requirements
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      Based on the specific role, department requirements, and relevant experience.
                    </p>
                  </div>
                </div>

                <div className="bg-[#070F1A]/90 border border-[#C5A059]/25 rounded-sm p-6 flex items-start gap-4 hover:border-[#E8A317]/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#E8A317]/10 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white font-medium mb-1">
                      Application Process
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      Submit your resume through the official hotel communication channels.
                    </p>
                  </div>
                </div>

                <div className="bg-[#070F1A]/90 border border-[#C5A059]/25 rounded-sm p-6 flex items-start gap-4 hover:border-[#E8A317]/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#E8A317]/10 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white font-medium mb-1">
                      Recruitment Contact
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      Contact Hotel Prabhupada management directly for career opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center p-5 bg-[#070F1A] border border-[#E8A317]/30 rounded-sm">
                <p className="font-serif text-base sm:text-lg text-[#E8A317] font-normal">
                  Join Hotel Prabhupada and become a part of a team committed to providing excellent
                  hospitality experiences to guests.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Channels & Application Form */}
          <section ref={formSectionRef} className="scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Official Hotel Communication Channels */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#0C1827] p-7 sm:p-9 rounded-sm border border-[#C5A059]/25 shadow-xl">
                  <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-2">
                    Official Communication
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white mb-3 tracking-wide">
                    Hotel Management Desk
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                    Candidates interested in joining Hotel Prabhupada can contact the hotel for
                    information about current openings and application procedures:
                  </p>

                  <div className="space-y-4 font-sans text-xs sm:text-sm font-light border-t border-white/10 pt-5">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#C5A059] text-[11px] uppercase tracking-wider font-medium">
                          General Manager Email
                        </p>
                        <a
                          href="mailto:gm@hotelprabhupada.com?subject=Career%20Enquiry%20-%20Hotel%20Prabhupada"
                          className="text-white/90 hover:text-[#E8A317] transition-colors break-all"
                        >
                          gm@hotelprabhupada.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#C5A059] text-[11px] uppercase tracking-wider font-medium">
                          Reservation Email
                        </p>
                        <a
                          href="mailto:reservation@hotelprabhupada.com"
                          className="text-white/90 hover:text-[#E8A317] transition-colors break-all"
                        >
                          reservation@hotelprabhupada.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#C5A059] text-[11px] uppercase tracking-wider font-medium">
                          Reservation Phone Numbers
                        </p>
                        <div className="space-y-1">
                          <a
                            href="tel:+919583002951"
                            className="block text-white/90 hover:text-[#E8A317] transition-colors"
                          >
                            +91 9583002951
                          </a>
                          <a
                            href="tel:+919583002952"
                            className="block text-white/90 hover:text-[#E8A317] transition-colors"
                          >
                            +91 9583002952
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#C5A059] text-[11px] uppercase tracking-wider font-medium">
                          Hotel Address
                        </p>
                        <p className="text-white/80 leading-relaxed">
                          New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Online Resume Submission Form */}
              <div className="lg:col-span-8">
                <div className="bg-[#0C1827] p-7 sm:p-10 rounded-sm border border-[#C5A059]/25 shadow-2xl relative">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="py-12 px-4 text-center space-y-5"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#E8A317]/15 border border-[#E8A317]/40 flex items-center justify-center mx-auto text-[#E8A317]">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>

                      <span className="inline-block font-sans text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317]">
                        Application Submitted
                      </span>

                      <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                        Thank You, {submittedData?.fullName || 'Applicant'}!
                      </h3>

                      <p className="font-sans text-sm sm:text-base text-white/75 font-light max-w-lg mx-auto leading-relaxed">
                        Your application for{' '}
                        <strong className="text-[#E8A317] font-medium">
                          {submittedData?.department || 'the selected department'}
                        </strong>{' '}
                        has been successfully received by Hotel Prabhupada management.
                      </p>

                      <div className="p-4 bg-white/5 border border-white/10 rounded-sm max-w-md mx-auto text-xs text-white/70 font-light leading-relaxed">
                        Our management will review your details based on role requirements and current openings.
                      </div>

                      <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="header-book-btn inline-flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase rounded-sm px-7 py-3.5 cursor-pointer"
                        >
                          Submit Another Application
                        </button>
                        <Link
                          href="/"
                          className="pata-btn-outline inline-flex items-center justify-center font-sans text-xs tracking-widest uppercase rounded-sm px-7 py-3.5"
                        >
                          Back to Home
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8 pb-4 border-b border-white/10">
                        <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-1">
                          Official Application Portal
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                          Submit Your Resume
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-white/70 font-light mt-1">
                          Submit your resume through the official hotel communication channels below.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="career-fullName"
                              className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                            >
                              Full Name <span className="text-[#8B1E1E]">*</span>
                            </label>
                            <input
                              id="career-fullName"
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={(e) =>
                                setFormData({ ...formData, fullName: e.target.value })
                              }
                              placeholder="e.g. Rajesh Kumar"
                              className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/35 transition-colors"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="career-email"
                              className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                            >
                              Email Address <span className="text-[#8B1E1E]">*</span>
                            </label>
                            <input
                              id="career-email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="e.g. rajesh@example.com"
                              className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/35 transition-colors"
                            />
                          </div>
                        </div>

                        {/* Phone & Experience Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="career-phone"
                              className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                            >
                              Phone Number <span className="text-[#8B1E1E]">*</span>
                            </label>
                            <input
                              id="career-phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              placeholder="e.g. +91 98765 43210"
                              className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/35 transition-colors"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="career-experience"
                              className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                            >
                              Experience Level <span className="text-[#8B1E1E]">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="career-experience"
                                required
                                value={formData.experience}
                                onChange={(e) =>
                                  setFormData({ ...formData, experience: e.target.value })
                                }
                                className="w-full bg-[#0C1827] border border-white/15 rounded-sm pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] transition-colors cursor-pointer appearance-none"
                              >
                                <option value="" disabled className="bg-[#0C1827] text-white/50">
                                  Select experience
                                </option>
                                <option value="Fresher" className="bg-[#0C1827]">
                                  Fresher / Entry Level
                                </option>
                                <option value="1-3 Years" className="bg-[#0C1827]">
                                  1–3 Years
                                </option>
                                <option value="3-5 Years" className="bg-[#0C1827]">
                                  3–5 Years
                                </option>
                                <option value="5+ Years" className="bg-[#0C1827]">
                                  5+ Years
                                </option>
                              </select>
                              <ChevronDown className="w-4 h-4 text-[#E8A317] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Department Selection */}
                        <div>
                          <label
                            htmlFor="career-department"
                            className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                          >
                            Department of Interest <span className="text-[#8B1E1E]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="career-department"
                              required
                              value={formData.department}
                              onChange={(e) =>
                                setFormData({ ...formData, department: e.target.value })
                              }
                              className="w-full bg-[#0C1827] border border-white/15 rounded-sm pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] transition-colors cursor-pointer appearance-none"
                            >
                              <option value="" disabled className="bg-[#0C1827] text-white/50">
                                Select a department
                              </option>
                              {DEPARTMENTS.map((dept) => (
                                <option key={dept.name} value={dept.name} className="bg-[#0C1827]">
                                  {dept.name}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-[#E8A317] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>

                        {/* Resume File Upload */}
                        <div>
                          <label
                            htmlFor="career-resume-file"
                            className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                          >
                            Resume / CV Attachment <span className="text-[#8B1E1E]">*</span>
                          </label>

                          <div
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            onDrop={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                                handleFileChange(e.dataTransfer.files[0]);
                              }
                            }}
                            className={`border-2 border-dashed rounded-sm p-6 text-center cursor-pointer transition-all duration-200 ${fileError
                              ? 'border-[#8B1E1E]/70 bg-[#8B1E1E]/05'
                              : resumeFile
                                ? 'border-[#E8A317]/80 bg-[#E8A317]/05'
                                : 'border-white/20 bg-white/[0.02] hover:border-[#E8A317]/50 hover:bg-white/[0.04]'
                              }`}
                          >
                            <input
                              ref={fileInputRef}
                              id="career-resume-file"
                              type="file"
                              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  handleFileChange(e.target.files[0]);
                                }
                              }}
                            />

                            {resumeFile ? (
                              <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
                                <div className="flex items-center gap-3 text-left">
                                  <div className="w-10 h-10 rounded-sm bg-[#E8A317]/15 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] shrink-0">
                                    <FileText className="w-5 h-5" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-white truncate">
                                      {resumeFile.name}
                                    </p>
                                    <p className="text-xs text-white/50">
                                      {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setResumeFile(null);
                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                  }}
                                  className="p-1.5 text-white/50 hover:text-[#8B1E1E] rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
                                  title="Remove attached file"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <UploadCloud className="w-8 h-8 mx-auto text-[#E8A317]" />
                                <p className="text-sm text-white/90 font-normal">
                                  <span className="text-[#E8A317] font-semibold underline underline-offset-2">
                                    Click to upload
                                  </span>{' '}
                                  or drag and drop your resume
                                </p>
                                <p className="text-xs text-white/50">
                                  Supported formats: PDF, DOC, DOCX (Max size: 5 MB)
                                </p>
                              </div>
                            )}
                          </div>

                          {fileError && (
                            <p
                              role="alert"
                              className="mt-2 text-xs text-[#E8A317] flex items-center gap-1.5 font-medium"
                            >
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              {fileError}
                            </p>
                          )}
                        </div>

                        {/* Cover Note */}
                        <div>
                          <label
                            htmlFor="career-coverNote"
                            className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                          >
                            Cover Note / Message <span className="text-white/40">(Optional)</span>
                          </label>
                          <textarea
                            id="career-coverNote"
                            rows={4}
                            value={formData.coverNote}
                            onChange={(e) =>
                              setFormData({ ...formData, coverNote: e.target.value })
                            }
                            placeholder="Briefly share your background, key skills, and interest in Hotel Prabhupada..."
                            className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/35 transition-colors resize-y"
                          />
                        </div>

                        {/* Error Alert Box */}
                        {submitError && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 rounded-sm bg-[#8B1E1E]/20 border border-[#8B1E1E]/60 text-white flex items-start justify-between gap-3 text-xs"
                          >
                            <div className="flex items-start gap-2.5">
                              <AlertCircle className="w-4 h-4 text-[#E8A317] shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <p className="font-semibold text-[#E8A317]">Submission Failed</p>
                                <p className="text-white/80 leading-relaxed">{submitError}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setSubmitError(null)}
                              className="text-white/50 hover:text-white transition-colors p-1"
                              title="Dismiss error"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="header-book-btn w-full font-sans text-xs tracking-widest uppercase py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <span className="inline-flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin text-[#E8A317]" />
                                {submitStage === 'uploading'
                                  ? 'Uploading Resume to Storage...'
                                  : submitStage === 'sending'
                                    ? 'Dispatching Application...'
                                    : 'Submitting Application...'}
                              </span>
                            ) : (
                              <>
                                <span>Submit Application</span>
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </button>

                          <p className="mt-3 text-center text-[11px] text-white/50">
                            By submitting this application, you agree to allow Hotel Prabhupada management
                            to keep your details on file for available positions and recruitment procedures.
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
