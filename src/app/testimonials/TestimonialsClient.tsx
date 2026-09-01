'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Star,
  Quote,
  MessageSquarePlus,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Calendar,
  Sparkles,
  HeartHandshake,
  Send,
  Filter,
  Award,
  ChevronDown,
  QrCode,
  ExternalLink,
  X,
  Copy,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraDivider,
  LotusMotif,
} from '@/components/patachitra/PatachitraMotifs';
import { DEFAULT_TESTIMONIALS, TestimonialItem } from '@/data/defaultTestimonials';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Hotel+Prabhupada/@19.7899492,85.8070141,17z/data=!4m11!3m10!1s0x3a19c5ccce332e3b:0x3e5550da010583ec!5m2!4m1!1i2!8m2!3d19.7899492!4d85.8070141!9m1!1b1!16s%2Fg%2F11b6dcvt28?entry=ttu';

const TRIPADVISOR_REVIEWS_URL =
  'https://www.tripadvisor.com/Hotel_Review-g503703-d1150060-Reviews-Hotel_Prabhupada-Puri_Puri_District_Odisha.html';

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const TripAdvisorIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 -96 512.2 512.2"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z" />
    <circle cx="128.4" cy="191.9" r="31.9" />
    <path d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z" />
    <circle cx="384.4" cy="191.9" r="31.9" />
    <path d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z" />
  </svg>
);

const TRIP_TYPES = [
  'Family Stay',
  'Couple Getaway',
  'Pet-Friendly Vacation',
  'Pilgrimage & Leisure',
  'Friends Trip',
  'Solo Traveler',
  'Business Stay',
];

const RATING_LABELS: Record<number, string> = {
  1: '1 Star - Poor',
  2: '2 Stars - Fair',
  3: '3 Stars - Good',
  4: '4 Stars - Very Good',
  5: '5 Stars - Excellent',
};

export const TestimonialsClient: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | 'all'>('all');
  const [activeQrModal, setActiveQrModal] = useState<'google' | 'tripadvisor' | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 5,
    tripType: 'Family Stay',
    title: '',
    review: '',
  });

  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const formSectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Fetch testimonials on mount
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch('/api/testimonials');
        if (res.ok) {
          const data = await res.json();
          if (data.testimonials && Array.isArray(data.testimonials) && data.testimonials.length > 0) {
            setTestimonials(data.testimonials);
          }
        }
      } catch (err) {
        console.warn('Could not fetch testimonials from API, using default list:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadTestimonials();
  }, []);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!formData.name.trim()) {
      setSubmitError('Please enter your name.');
      return;
    }

    if (!formData.review.trim() || formData.review.trim().length < 5) {
      setSubmitError('Please write a review with at least 5 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          location: formData.location.trim() || undefined,
          rating: formData.rating,
          trip_type: formData.tripType,
          title: formData.title.trim() || undefined,
          review: formData.review.trim(),
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to submit review. Please try again.');
      }

      // Add new testimonial to top of list
      if (result.testimonial) {
        setTestimonials((prev) => [result.testimonial, ...prev]);
      }

      setSubmitSuccess('Thank you! Your review has been submitted and posted successfully.');
      setFormData({
        name: '',
        location: '',
        rating: 5,
        tripType: 'Family Stay',
        title: '',
        review: '',
      });

      // Clear success message after 6 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 6000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred while posting your review.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filtered reviews
  const filteredTestimonials = testimonials.filter((item) => {
    if (selectedFilter !== 'all' && item.trip_type !== selectedFilter) {
      return false;
    }
    if (selectedRatingFilter !== 'all' && item.rating !== selectedRatingFilter) {
      return false;
    }
    return true;
  });

  const totalReviews = testimonials.length;
  const avgRating = totalReviews > 0
    ? (testimonials.reduce((acc, curr) => acc + (curr.rating || 5), 0) / totalReviews).toFixed(1)
    : '5.0';

  return (
    <>
      <InnerPageHero
        overline="Hotel Prabhupada · Puri"
        title="Guest Testimonials & Reviews"
        subtitle="Read real experiences from families, couples, and pilgrims who enjoyed their seaside stay at Hotel Prabhupada, Puri."
        image="/images/patachitra-bg.webp"
        imageAlt="Hotel Prabhupada Guest Testimonials and Reviews"
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
            <MessageSquarePlus className="w-4 h-4" />
            Share Your Review
          </button>
        }
      />

      <div className="bg-[#070F1A] text-white py-12 sm:py-20 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 right-[-10%] w-[450px] h-[450px] rounded-full bg-[#C5A059]/08 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-20 left-[-8%] w-[400px] h-[400px] rounded-full bg-[#8B1E1E]/08 blur-3xl"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10 space-y-16 sm:space-y-20">

          {/* Overview Rating Stats Header with Google & TripAdvisor QR Cards */}
          <section className="bg-[#0C1827] rounded-sm border border-[#C5A059]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0C1827] via-[#0E1F35] to-[#070F1A] opacity-95"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-15"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Col 1: Guest Satisfaction */}
              <div className="lg:col-span-3 space-y-2 border-b lg:border-b-0 lg:border-r border-[#C5A059]/25 pb-6 lg:pb-0 lg:pr-6 text-center lg:text-left">
                <span className="inline-block font-sans text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317]">
                  Guest Satisfaction
                </span>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="font-serif text-4xl sm:text-5xl font-medium text-white">
                    {avgRating}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-[#E8A317]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E8A317] text-[#E8A317]" />
                      ))}
                    </div>
                    <p className="font-sans text-xs text-white/90 font-medium">
                      Based on {totalReviews} guest reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Col 2: Puri Beach Hospitality Message */}
              <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-[#C5A059]/25 pb-6 lg:pb-0 lg:pr-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#E8A317]">
                  <Award className="w-5 h-5" />
                  <span className="font-sans text-sm font-semibold tracking-wider uppercase">
                    Puri Beach Hospitality
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                  Prime location on New Marine Drive Road with authentic Odia dining, pet-friendly comfort & ocean views.
                </p>
              </div>

              {/* Col 3: Google & TripAdvisor QR Cards */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3.5 sm:gap-4">

                {/* 1. Google Review QR Card */}
                <div className="w-full sm:w-auto flex-1 max-w-[230px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#E8A317]/50 rounded-sm p-3 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="flex items-center gap-1.5 mb-2">
                    <GoogleIcon className="w-4 h-4" />
                    <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-white">
                      Google Review
                    </span>
                  </div>

                  {/* QR Image Container */}
                  <button
                    type="button"
                    onClick={() => setActiveQrModal('google')}
                    className="relative w-20 h-20 bg-white p-1 rounded-sm shadow-md transition-transform duration-300 group-hover:scale-105 cursor-pointer focus:outline-none"
                    title="Click to expand Google Review QR Code"
                  >
                    <Image
                      src="/images/qr/google-review-qr.png"
                      alt="Scan Google Review QR Code Hotel Prabhupada"
                      fill
                      sizes="80px"
                      className="object-contain p-0.5"
                    />
                    <div className="absolute inset-0 bg-[#0C1827]/0 group-hover:bg-[#0C1827]/10 transition-colors flex items-center justify-center" />
                  </button>

                  <div className="mt-2.5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveQrModal('google')}
                      className="text-[10px] uppercase tracking-wider font-semibold text-[#E8A317] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <QrCode className="w-3 h-3" />
                      Scan QR
                    </button>
                    <span className="text-white/20">·</span>
                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-wider font-medium text-white/75 hover:text-white flex items-center gap-1"
                    >
                      Link <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* 2. TripAdvisor Review QR Card */}
                <div className="w-full sm:w-auto flex-1 max-w-[230px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#00AA6C]/50 rounded-sm p-3 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="text-[#00AA6C]">
                      <TripAdvisorIcon className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-white">
                      TripAdvisor
                    </span>
                  </div>

                  {/* QR Image Container */}
                  <button
                    type="button"
                    onClick={() => setActiveQrModal('tripadvisor')}
                    className="relative w-20 h-20 bg-white p-1 rounded-sm shadow-md transition-transform duration-300 group-hover:scale-105 cursor-pointer focus:outline-none"
                    title="Click to expand TripAdvisor Review QR Code"
                  >
                    <Image
                      src="/images/qr/tripadvisor-review-qr.png"
                      alt="Scan TripAdvisor Review QR Code Hotel Prabhupada"
                      fill
                      sizes="80px"
                      className="object-contain p-0.5"
                    />
                    <div className="absolute inset-0 bg-[#0C1827]/0 group-hover:bg-[#0C1827]/10 transition-colors flex items-center justify-center" />
                  </button>

                  <div className="mt-2.5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveQrModal('tripadvisor')}
                      className="text-[10px] uppercase tracking-wider font-semibold text-[#00AA6C] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <QrCode className="w-3 h-3" />
                      Scan QR
                    </button>
                    <span className="text-white/20">·</span>
                    <a
                      href={TRIPADVISOR_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-wider font-medium text-white/75 hover:text-white flex items-center gap-1"
                    >
                      Link <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </section>


          {/* Main 2-Column Section: Left is Reviews List, Right is Write Review Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">

            {/* Left Column: Reviews Feed */}
            <div className="lg:col-span-7 space-y-6">

              {/* Header & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                    Guest Experiences
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 font-light mt-1">
                    Showing {filteredTestimonials.length} reviews
                  </p>
                </div>

                {/* Filter Selector */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative flex items-center bg-white/5 border border-white/15 rounded-sm px-3 py-1.5 text-xs text-white">
                    <Filter className="w-3.5 h-3.5 text-[#E8A317] mr-1.5 shrink-0" />
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="bg-transparent text-white focus:outline-none cursor-pointer pr-6 appearance-none text-xs"
                    >
                      <option value="all" className="bg-[#0C1827] text-white">All Trip Types</option>
                      {TRIP_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-[#0C1827] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#E8A317] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div className="relative flex items-center bg-white/5 border border-white/15 rounded-sm px-3 py-1.5 text-xs text-white">
                    <Star className="w-3.5 h-3.5 text-[#E8A317] fill-[#E8A317] mr-1.5 shrink-0" />
                    <select
                      value={selectedRatingFilter}
                      onChange={(e) =>
                        setSelectedRatingFilter(
                          e.target.value === 'all' ? 'all' : Number(e.target.value)
                        )
                      }
                      className="bg-transparent text-white focus:outline-none cursor-pointer pr-6 appearance-none text-xs"
                    >
                      <option value="all" className="bg-[#0C1827] text-white">All Ratings</option>
                      <option value={5} className="bg-[#0C1827] text-white">5 Stars Only</option>
                      <option value={4} className="bg-[#0C1827] text-white">4 Stars</option>
                      <option value={3} className="bg-[#0C1827] text-white">3 Stars</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#E8A317] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              {isLoading ? (
                <div className="py-16 text-center text-white/60 space-y-3">
                  <Loader2 className="w-8 h-8 animate-spin text-[#E8A317] mx-auto" />
                  <p className="font-sans text-sm">Loading guest reviews...</p>
                </div>
              ) : filteredTestimonials.length === 0 ? (
                <div className="bg-[#0C1827] p-8 sm:p-12 text-center rounded-sm border border-white/10 space-y-4">
                  <Quote className="w-10 h-10 text-[#E8A317]/50 mx-auto" />
                  <div className="space-y-1 max-w-md mx-auto">
                    <p className="text-white font-serif text-xl">
                      {testimonials.length === 0
                        ? 'No guest reviews posted yet'
                        : 'No reviews found matching the selected filter'}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-white/60 font-light">
                      {testimonials.length === 0
                        ? 'Be the first guest to share your stay experience at Hotel Prabhupada, Puri!'
                        : 'Try adjusting your trip type or star rating filter to see more reviews.'}
                    </p>
                  </div>
                  {testimonials.length === 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (formSectionRef.current) {
                          formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="header-book-btn inline-flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase rounded-sm px-6 py-2.5 cursor-pointer mt-2"
                    >
                      <MessageSquarePlus className="w-4 h-4" />
                      Write the First Review
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFilter('all');
                        setSelectedRatingFilter('all');
                      }}
                      className="text-xs text-[#E8A317] hover:underline block mx-auto mt-2"
                    >
                      Reset filters
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {filteredTestimonials.map((item, idx) => (
                      <motion.article
                        key={item.id || idx}
                        initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                        className="bg-[#0C1827] p-6 sm:p-7 rounded-sm border border-[#C5A059]/20 hover:border-[#E8A317]/50 transition-colors shadow-lg relative group"
                      >
                        {/* Top Row: Stars & Trip Type */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(item.rating || 5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-[#E8A317] text-[#E8A317]"
                              />
                            ))}
                          </div>
                          {item.trip_type && (
                            <span className="text-[10px] font-sans uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8A317]/10 text-[#E8A317] border border-[#E8A317]/30">
                              {item.trip_type}
                            </span>
                          )}
                        </div>

                        {/* Title if present */}
                        {item.title && (
                          <h4 className="font-serif text-lg font-normal text-white mb-2 leading-snug">
                            {item.title}
                          </h4>
                        )}

                        {/* Review Body */}
                        <blockquote className="font-sans text-sm sm:text-base text-white/85 font-light leading-relaxed mb-4 italic">
                          &ldquo;{item.review}&rdquo;
                        </blockquote>

                        {/* Author Footer */}
                        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-sans font-semibold text-[#E8A317] tracking-wider uppercase">
                              {item.name}
                            </span>
                            {item.location && (
                              <span className="text-white/50 flex items-center gap-1 font-light">
                                <MapPin className="w-3 h-3 text-[#C5A059]" />
                                {item.location}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3 text-white/40 text-[11px]">
                            {item.created_at && (
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(item.created_at).toLocaleDateString('en-IN', {
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </span>
                            )}
                            {item.id?.startsWith('google-rev-') ? (
                              <a
                                href={GOOGLE_REVIEWS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-white/80 hover:text-white font-medium bg-white/5 hover:bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full transition-colors"
                              >
                                <GoogleIcon className="w-3 h-3" />
                                <span>Google Review</span>
                              </a>
                            ) : (
                              <span className="flex items-center gap-1 text-emerald-400/90 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Verified Guest
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Right Column: Write a Review Form */}
            <div className="lg:col-span-5">
              <section
                ref={formSectionRef}
                className="bg-[#0C1827] p-7 sm:p-9 rounded-sm border border-[#C5A059]/30 shadow-2xl sticky top-24"
              >
                <div className="mb-6 pb-4 border-b border-white/10">
                  <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-1">
                    Guest Feedback
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    Share Your Stay Experience
                  </h3>
                  <p className="font-sans text-xs text-white/70 font-light mt-1">
                    Help fellow travelers know about your stay at Hotel Prabhupada.
                  </p>
                </div>

                {/* Success Alert */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-sm bg-[#E8A317]/10 border border-[#E8A317]/40 text-white flex items-start gap-3 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#E8A317]">Review Submitted!</p>
                      <p className="text-white/80 mt-0.5 leading-relaxed">{submitSuccess}</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Alert */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-sm bg-[#8B1E1E]/20 border border-[#8B1E1E]/60 text-white flex items-start gap-3 text-xs"
                  >
                    <AlertCircle className="w-5 h-5 text-[#E8A317] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#E8A317]">Could not submit</p>
                      <p className="text-white/80 mt-0.5 leading-relaxed">{submitError}</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  {/* Interactive Star Rating Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/80 mb-2 font-medium">
                      Your Rating <span className="text-[#8B1E1E]">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 p-2 bg-white/5 border border-white/15 rounded-sm">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const active = (hoveredStar ?? formData.rating) >= star;
                          return (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setFormData({ ...formData, rating: star })}
                              onMouseEnter={() => setHoveredStar(star)}
                              onMouseLeave={() => setHoveredStar(null)}
                              className="p-1 text-white/30 hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                              aria-label={`Rate ${star} star`}
                            >
                              <Star
                                className={`w-6 h-6 transition-colors ${active
                                    ? 'fill-[#E8A317] text-[#E8A317]'
                                    : 'text-white/30'
                                  }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                      <span className="text-xs text-[#E8A317] font-medium">
                        {RATING_LABELS[hoveredStar ?? formData.rating]}
                      </span>
                    </div>
                  </div>

                  {/* Name & Location Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    <div>
                      <div className="flex items-center justify-between min-h-[22px] mb-1.5">
                        <label
                          htmlFor="review-name"
                          className="text-xs uppercase tracking-wider text-white/85 font-medium"
                        >
                          Your Name <span className="text-[#8B1E1E]">*</span>
                        </label>
                      </div>
                      <input
                        id="review-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rameshwar Das"
                        className="w-full h-11 bg-white/5 border border-white/15 rounded-sm px-3.5 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between min-h-[22px] mb-1.5">
                        <label
                          htmlFor="review-location"
                          className="text-xs uppercase tracking-wider text-white/85 font-medium"
                        >
                          City / State
                        </label>
                        <span className="text-[10px] text-white/40 uppercase tracking-wider font-light">
                          Optional
                        </span>
                      </div>
                      <input
                        id="review-location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Kolkata, WB"
                        className="w-full h-11 bg-white/5 border border-white/15 rounded-sm px-3.5 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Trip Type & Review Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    <div>
                      <div className="flex items-center justify-between min-h-[22px] mb-1.5">
                        <label
                          htmlFor="review-tripType"
                          className="text-xs uppercase tracking-wider text-white/85 font-medium"
                        >
                          Trip Type
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          id="review-tripType"
                          value={formData.tripType}
                          onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                          className="w-full h-11 bg-[#0C1827] border border-white/15 rounded-sm pl-3.5 pr-10 text-sm text-white focus:outline-none focus:border-[#E8A317] transition-colors cursor-pointer appearance-none"
                        >
                          {TRIP_TYPES.map((type) => (
                            <option key={type} value={type} className="bg-[#0C1827]">
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#E8A317] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between min-h-[22px] mb-1.5">
                        <label
                          htmlFor="review-title"
                          className="text-xs uppercase tracking-wider text-white/85 font-medium"
                        >
                          Review Title
                        </label>
                        <span className="text-[10px] text-white/40 uppercase tracking-wider font-light">
                          Optional
                        </span>
                      </div>
                      <input
                        id="review-title"
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. Wonderful beach view"
                        className="w-full h-11 bg-white/5 border border-white/15 rounded-sm px-3.5 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <div className="flex items-center justify-between min-h-[22px] mb-1.5">
                      <label
                        htmlFor="review-text"
                        className="text-xs uppercase tracking-wider text-white/85 font-medium"
                      >
                        Your Review <span className="text-[#8B1E1E]">*</span>
                      </label>
                    </div>
                    <textarea
                      id="review-text"
                      rows={4}
                      required
                      value={formData.review}
                      onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                      placeholder="Share your stay experience, room comfort, hospitality, dining, or suggestions..."
                      className="w-full bg-white/5 border border-white/15 rounded-sm p-3.5 text-sm text-white focus:outline-none focus:border-[#E8A317] placeholder:text-white/30 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="header-book-btn w-full font-sans text-xs tracking-widest uppercase py-3.5 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-[#E8A317]" />
                          Posting Review...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Review</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[10px] text-white/40">
                      Reviews are instantly published to help future guests of Hotel Prabhupada.
                    </p>
                  </div>
                </form>
              </section>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive QR Code Modal */}
      <AnimatePresence>
        {activeQrModal && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveQrModal(null)}
              className="absolute inset-0 bg-[#070F1A]/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm bg-[#0C1827] border border-[#C5A059]/40 rounded-sm shadow-2xl p-6 sm:p-7 text-center z-10 text-white"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveQrModal(null)}
                className="absolute top-4 right-4 p-1.5 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close QR Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title & Brand Icon */}
              <div className="flex items-center justify-center gap-2 mb-2">
                {activeQrModal === 'google' ? (
                  <GoogleIcon className="w-5 h-5" />
                ) : (
                  <div className="text-[#00AA6C]">
                    <TripAdvisorIcon className="w-5 h-5" />
                  </div>
                )}
                <h4 className="font-serif text-xl font-normal text-white">
                  {activeQrModal === 'google' ? 'Google Review QR' : 'TripAdvisor QR'}
                </h4>
              </div>

              <p className="font-sans text-xs text-white/70 font-light mb-5">
                Point your phone camera at the QR code to open and leave your review for Hotel Prabhupada, Puri.
              </p>

              {/* QR Image with High Contrast White Border */}
              <div className="relative w-52 h-52 mx-auto bg-white p-3 rounded-sm shadow-xl border border-white/20 mb-5 flex items-center justify-center">
                <Image
                  src={
                    activeQrModal === 'google'
                      ? '/images/qr/google-review-qr.png'
                      : '/images/qr/tripadvisor-review-qr.png'
                  }
                  alt={
                    activeQrModal === 'google'
                      ? 'Google Review QR Code'
                      : 'TripAdvisor Review QR Code'
                  }
                  fill
                  sizes="208px"
                  className="object-contain p-1"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={
                    activeQrModal === 'google' ? GOOGLE_REVIEWS_URL : TRIPADVISOR_REVIEWS_URL
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-sm bg-[#C5A059] hover:bg-[#B38E46] text-white transition-colors shadow-md"
                >
                  <span>Open {activeQrModal === 'google' ? 'Google' : 'TripAdvisor'} Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() =>
                    handleCopyLink(
                      activeQrModal === 'google' ? GOOGLE_REVIEWS_URL : TRIPADVISOR_REVIEWS_URL
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-wider py-2.5 px-4 rounded-sm bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/15 transition-colors cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Review Link</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

