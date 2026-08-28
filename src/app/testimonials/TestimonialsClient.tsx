'use client';

import React, { useState, useEffect, useRef } from 'react';
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
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraDivider,
  LotusMotif,
} from '@/components/patachitra/PatachitraMotifs';
import { TestimonialItem } from '@/data/defaultTestimonials';

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
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | 'all'>('all');

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
          if (data.testimonials && Array.isArray(data.testimonials)) {
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
        image="/images/patachitra-bg.png"
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
          
          {/* Overview Rating Stats Header */}
          <section className="bg-[#0C1827] rounded-sm border border-[#C5A059]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0C1827] via-[#0E1F35] to-[#070F1A] opacity-95"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-15"
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center text-center md:text-left">
              
              <div className="space-y-2 border-b md:border-b-0 md:border-r border-[#C5A059]/25 pb-6 md:pb-0 md:pr-6">
                <span className="inline-block font-sans text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317]">
                  Guest Satisfaction
                </span>
                <div className="flex items-center justify-center md:justify-start gap-3">
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

              <div className="space-y-2 border-b md:border-b-0 md:border-r border-[#C5A059]/25 pb-6 md:pb-0 md:pr-6">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#E8A317]">
                  <Award className="w-5 h-5" />
                  <span className="font-sans text-sm font-semibold tracking-wider uppercase">
                    Puri Beach Hospitality
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                  Prime location on New Marine Drive Road with authentic Odia dining, pet-friendly comfort & ocean views.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <a
                  href="https://www.google.com/maps/place/Hotel+Prabhupada/@19.7899492,85.8070141,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider py-2.5 px-4 rounded-sm text-center bg-[#070F1A] border border-[#C5A059]/40 text-[#E8A317] hover:bg-[#E8A317] hover:text-[#070F1A] transition-colors font-medium shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Google Reviews
                </a>
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g503703-d1150060-Reviews-Hotel_Prabhupada-Puri_Puri_District_Odisha.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider py-2.5 px-4 rounded-sm text-center bg-[#070F1A] border border-[#C5A059]/40 text-[#E8A317] hover:bg-[#E8A317] hover:text-[#070F1A] transition-colors font-medium shadow-sm"
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  TripAdvisor Reviews
                </a>
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
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/15 rounded-sm px-3 py-1.5 text-xs text-white">
                    <Filter className="w-3.5 h-3.5 text-[#E8A317]" />
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="bg-transparent text-white focus:outline-none cursor-pointer pr-2"
                    >
                      <option value="all" className="bg-[#0C1827] text-white">All Trip Types</option>
                      {TRIP_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-[#0C1827] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/15 rounded-sm px-3 py-1.5 text-xs text-white">
                    <Star className="w-3.5 h-3.5 text-[#E8A317] fill-[#E8A317]" />
                    <select
                      value={selectedRatingFilter}
                      onChange={(e) =>
                        setSelectedRatingFilter(
                          e.target.value === 'all' ? 'all' : Number(e.target.value)
                        )
                      }
                      className="bg-transparent text-white focus:outline-none cursor-pointer pr-2"
                    >
                      <option value="all" className="bg-[#0C1827] text-white">All Ratings</option>
                      <option value={5} className="bg-[#0C1827] text-white">5 Stars Only</option>
                      <option value={4} className="bg-[#0C1827] text-white">4 Stars</option>
                      <option value={3} className="bg-[#0C1827] text-white">3 Stars</option>
                    </select>
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
                            <span className="flex items-center gap-1 text-emerald-400/90 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Verified Guest
                            </span>
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
                                className={`w-6 h-6 transition-colors ${
                                  active
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
                      <select
                        id="review-tripType"
                        value={formData.tripType}
                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                        className="w-full h-11 bg-[#0C1827] border border-white/15 rounded-sm px-3.5 text-sm text-white focus:outline-none focus:border-[#E8A317] transition-colors cursor-pointer"
                      >
                        {TRIP_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#0C1827]">
                            {type}
                          </option>
                        ))}
                      </select>
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
    </>
  );
};
