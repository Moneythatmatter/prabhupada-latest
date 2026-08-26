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
  Inbox,
  ArrowRight,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { FadeRise } from '@/hooks/useParallax';
import { PatachitraDivider } from '@/components/patachitra/PatachitraMotifs';

const DEPARTMENT_OPTIONS = [
  'Front Office & Guest Relations',
  'Food & Beverage Service',
  'Housekeeping & Property Care',
  'Kitchen & Culinary',
  'Accounts & Administration',
  'Maintenance & Engineering',
  'Security & Transportation',
  'General / Any Department',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      setFileError('Please attach your resume or CV before submitting.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      resumeFileName: resumeFile.name,
      resumeFileSize: `${(resumeFile.size / (1024 * 1024)).toFixed(2)} MB`,
      submittedAt: new Date().toISOString(),
    };

    console.log('Hotel Prabhupada Career Application Submitted:', payload);

    setTimeout(() => {
      setIsSubmitting(false);
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
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1000);
  };

  return (
    <>
      <InnerPageHero
        overline="Join Our Team · Puri"
        title="Careers at Hotel Prabhupada"
        subtitle="We are always looking for passionate individuals to join our hospitality team in Puri. Submit your profile below for upcoming opportunities."
        image="/images/official-about.jpg"
        imageAlt="Careers at Hotel Prabhupada Puri"
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
            Submit Your CV
          </button>
        }
      />

      <div className="bg-[#070F1A] text-white py-14 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-12 right-[-8%] w-[380px] h-[380px] rounded-full bg-[#C5A059]/08 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-24 left-[-10%] w-[360px] h-[360px] rounded-full bg-[#C0392B]/08 blur-3xl"
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
          {/* Current Vacancies Status — Clean Empty State */}
          <section className="mb-14 sm:mb-20">
            <FadeRise className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-2">
                Open Positions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
                Current Openings
              </h2>
              <PatachitraDivider light className="mt-4 sm:mt-5" />
            </FadeRise>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto bg-[#0C1827] rounded-sm border border-[#C5A059]/25 p-8 sm:p-12 text-center shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mx-auto mb-5 text-[#C5A059]">
                <Inbox className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-white mb-3">
                No Active Vacancies at Present
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-xl mx-auto mb-6">
                We currently do not have any specific open positions listed. However, we regularly
                review applications and welcome resumes for future requirements across all
                departments.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (formSectionRef.current) {
                    formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase px-6 py-3 bg-white/5 hover:bg-[#C5A059] hover:text-[#070F1A] text-[#C5A059] border border-[#C5A059]/30 rounded-sm transition-all duration-300 cursor-pointer"
              >
                <span>Send General Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </section>

          {/* Hospitality Values — Understated */}
          <section className="mb-14 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#0C1827] p-6 sm:p-8 rounded-sm border border-[#C5A059]/20 shadow-xl flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mb-5 text-[#E8A317]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-normal text-white mb-2">
                  Hospitality Experience
                </h3>
                <p className="font-sans text-sm text-white/70 font-light leading-relaxed">
                  Opportunities to work in a premier beachfront hotel environment on New Marine
                  Drive, Puri.
                </p>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="bg-[#0C1827] p-6 sm:p-8 rounded-sm border border-[#C5A059]/20 shadow-xl flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-sm bg-[#C0392B]/10 border border-[#C0392B]/30 flex items-center justify-center mb-5 text-[#C0392B]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-normal text-white mb-2">
                  Supportive Work Culture
                </h3>
                <p className="font-sans text-sm text-white/70 font-light leading-relaxed">
                  A respectful team atmosphere, fair policies, and on-duty meal provisions for staff
                  members.
                </p>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="bg-[#0C1827] p-6 sm:p-8 rounded-sm border border-[#C5A059]/20 shadow-xl flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-sm bg-[#34E0A1]/10 border border-[#34E0A1]/30 flex items-center justify-center mb-5 text-[#34E0A1]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-normal text-white mb-2">
                  Prime Puri Location
                </h3>
                <p className="font-sans text-sm text-white/70 font-light leading-relaxed">
                  Located near Puri Beach and Swargadwar, easily accessible for local candidates.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Application Form Section */}
          <section ref={formSectionRef} className="scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct HR Inquiries */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#0C1827] p-7 sm:p-9 rounded-sm border border-[#C5A059]/25 shadow-xl">
                  <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-2">
                    Direct Contact
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white mb-3 tracking-wide">
                    HR &amp; Management Desk
                  </h3>
                  <p className="font-sans text-sm text-white/70 font-light leading-relaxed mb-6">
                    You may also email your resume directly to our management desk or reach out via
                    phone:
                  </p>

                  <div className="space-y-4 font-sans text-xs sm:text-sm font-light border-t border-white/10 pt-5">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#C5A059] text-[11px] uppercase tracking-wider font-medium">
                          Email Resume
                        </p>
                        <a
                          href="mailto:gm@hotelprabhupada.com?subject=Job%20Application%20-%20Hotel%20Prabhupada"
                          className="text-white/90 hover:text-[#E8A317] transition-colors break-all"
                        >
                          gm@hotelprabhupada.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#C5A059] text-[11px] uppercase tracking-wider font-medium">
                          Hotel Desk
                        </p>
                        <a
                          href="tel:+919583002952"
                          className="text-white/90 hover:text-[#E8A317] transition-colors"
                        >
                          +91 9583002952
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#C5A059] text-[11px] uppercase tracking-wider font-medium">
                          Hotel Address
                        </p>
                        <p className="text-white/80">
                          New Marine Drive Road, Baliapanda, Puri, Odisha 752001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Application Form */}
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
                        Application Received
                      </span>

                      <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                        Thank You, {submittedData?.fullName || 'Applicant'}!
                      </h3>

                      <p className="font-sans text-sm sm:text-base text-white/75 font-light max-w-lg mx-auto leading-relaxed">
                        Your application for{' '}
                        <strong className="text-[#E8A317] font-medium">
                          {submittedData?.department || 'the selected department'}
                        </strong>{' '}
                        has been successfully received by Hotel Prabhupada. A record has been logged for{' '}
                        <span className="text-white font-medium">{submittedData?.email}</span>.
                      </p>

                      <div className="p-4 bg-white/5 border border-white/10 rounded-sm max-w-md mx-auto text-xs text-white/70 font-light leading-relaxed">
                        Our management team will keep your CV on file and contact you directly when an
                        opening matching your profile becomes available.
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
                          Online Application
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                          Submit Your Profile
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-white/70 font-light mt-1">
                          Please complete the details below and attach your latest resume.
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
                              Full Name <span className="text-[#C0392B]">*</span>
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
                              Email Address <span className="text-[#C0392B]">*</span>
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
                              Phone Number <span className="text-[#C0392B]">*</span>
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
                              Hospitality Experience <span className="text-[#C0392B]">*</span>
                            </label>
                            <select
                              id="career-experience"
                              required
                              value={formData.experience}
                              onChange={(e) =>
                                setFormData({ ...formData, experience: e.target.value })
                              }
                              className="w-full bg-[#0C1827] border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] transition-colors cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#0C1827] text-white/50">
                                Select your experience level
                              </option>
                              <option value="Fresher / 0-1 Year" className="bg-[#0C1827]">
                                Fresher / 0–1 Year
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
                          </div>
                        </div>

                        {/* Department of Interest */}
                        <div>
                          <label
                            htmlFor="career-department"
                            className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                          >
                            Department / Area of Interest <span className="text-[#C0392B]">*</span>
                          </label>
                          <select
                            id="career-department"
                            required
                            value={formData.department}
                            onChange={(e) =>
                              setFormData({ ...formData, department: e.target.value })
                            }
                            className="w-full bg-[#0C1827] border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] transition-colors cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#0C1827] text-white/50">
                              Select a department
                            </option>
                            {DEPARTMENT_OPTIONS.map((dept) => (
                              <option key={dept} value={dept} className="bg-[#0C1827]">
                                {dept}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Resume File Upload */}
                        <div>
                          <label
                            htmlFor="career-resume-file"
                            className="block text-xs uppercase tracking-wider text-white/80 mb-1.5 font-medium"
                          >
                            Resume / Curriculum Vitae (CV) <span className="text-[#C0392B]">*</span>
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
                            className={`border-2 border-dashed rounded-sm p-6 text-center cursor-pointer transition-all duration-200 ${
                              fileError
                                ? 'border-[#C0392B]/70 bg-[#C0392B]/05'
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
                                  className="p-1.5 text-white/50 hover:text-[#C0392B] rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
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
                              className="mt-2 text-xs text-[#C0392B] flex items-center gap-1.5 font-medium"
                            >
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              {fileError}
                            </p>
                          )}
                        </div>

                        {/* Cover Note / Message */}
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
                            placeholder="Briefly introduce yourself, your current location, notice period, or relevant skills..."
                            className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/35 transition-colors resize-y"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="header-book-btn w-full font-sans text-xs tracking-widest uppercase py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <span>Submitting Application...</span>
                            ) : (
                              <>
                                <span>Submit Application</span>
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </button>

                          <p className="mt-3 text-center text-[11px] text-white/50">
                            By submitting this application, you agree to allow Hotel Prabhupada to
                            keep your details on file for future hiring considerations.
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
