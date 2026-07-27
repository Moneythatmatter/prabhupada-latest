'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, X, CheckCircle2, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { FadeRise } from '@/hooks/useParallax';
import { PatachitraDivider } from '@/components/patachitra/PatachitraMotifs';

export const ContactClient: React.FC = () => {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCallbackModalOpen(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <InnerPageHero
        overline="New Marine Drive · Puri"
        title="Contact Us"
        subtitle="Reach Hotel Prabhupada for reservations, queries, or a callback."
        image="/images/official-about.jpg"
        imageAlt="Contact Hotel Prabhupada Puri"
        cta={
          <button
            type="button"
            onClick={() => setCallbackModalOpen(true)}
            className="header-book-btn inline-flex items-center justify-center gap-2 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase rounded-sm px-8 py-3.5"
          >
            <PhoneCall className="w-4 h-4" />
            Request a Callback
          </button>
        }
      />

      <section className="bg-[#070F1A] text-white py-14 sm:py-20 md:py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 right-[-10%] w-[320px] h-[320px] rounded-full bg-[#C5A059]/10 blur-3xl"
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
          <FadeRise className="text-center mb-10 sm:mb-14">
            <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-2">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
              We Are Happy To Help
            </h2>
            <PatachitraDivider light className="mt-4 sm:mt-5" />
          </FadeRise>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 bg-[#0C1827] p-7 sm:p-9 rounded-sm border border-[#C5A059]/25 flex flex-col justify-between shadow-xl"
            >
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#E8A317] mb-2 tracking-wide">
                  Get in Touch
                </h3>
                <p className="font-sans text-sm text-white/70 font-light leading-relaxed mb-8">
                  Drop a message for any query
                </p>

                <div className="flex items-center gap-4 mb-10">
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g503703-d1150060-Reviews-Hotel_Prabhupada-Puri_Puri_District_Odisha.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#34E0A1]/10 border border-[#34E0A1]/30 rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                    title="Review us on TripAdvisor"
                  >
                    <div className="relative w-9 h-9">
                      <Image
                        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                        alt="TripAdvisor"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </a>

                  <a
                    href="https://live.ipms247.com/booking/reviewslist-hotelprabhupada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#003580]/20 border border-[#003580]/40 rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                    title="Book on Booking.com"
                  >
                    <span className="text-[#003580] bg-white px-2 py-0.5 rounded text-base font-black">B.</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCallbackModalOpen(true)}
                className="pata-btn w-full inline-flex items-center justify-center gap-2 text-white font-sans text-xs font-semibold tracking-[0.16em] uppercase py-3.5 rounded-sm"
              >
                <PhoneCall className="w-4 h-4" />
                Request a Callback
              </button>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 bg-[#0C1827] p-7 sm:p-9 rounded-sm border border-[#C5A059]/25 flex flex-col shadow-xl space-y-6"
            >
              <h3 className="font-serif text-2xl font-normal text-[#E8A317] tracking-wide">
                Contact Details
              </h3>

              <div className="space-y-6 font-sans text-sm sm:text-base font-light">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#C5A059] text-xs mb-1 uppercase tracking-wider">
                      Phone
                    </h4>
                    <a href="tel:+919583002952" className="block text-white/90 hover:text-[#E8A317] transition-colors">
                      +91 9583002952
                    </a>
                    <a href="tel:+919583002951" className="block text-white/90 hover:text-[#E8A317] transition-colors">
                      +91 9583002951
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#C5A059] text-xs mb-1 uppercase tracking-wider">
                      Email
                    </h4>
                    <a href="mailto:gm@hotelprabhupada.com" className="block text-white/90 hover:text-[#E8A317] transition-colors break-all">
                      gm@hotelprabhupada.com
                    </a>
                    <a href="mailto:reservation@hotelprabhupada.com" className="block text-white/90 hover:text-[#E8A317] transition-colors break-all">
                      reservation@hotelprabhupada.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#C5A059] text-xs mb-1 uppercase tracking-wider">
                      Address
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      New Marine Drive Road, Baliapanda, Puri, Odisha 752001, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 bg-[#0C1827] rounded-sm border border-[#C5A059]/25 overflow-hidden shadow-xl relative min-h-[380px] flex flex-col"
            >
              <div className="absolute top-4 right-4 z-10">
                <a
                  href="https://maps.google.com/?q=Hotel+Prabhupada+Puri+New+Marine+Drive+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white text-[#070F1A] font-sans text-xs font-semibold px-3.5 py-2 rounded-sm shadow-md hover:bg-[#E8A317] hover:text-[#070F1A] transition-all"
                >
                  <span>Open In Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6397395029315!2d85.80443917596041!3d19.789949181566838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c5ccce332e3b%3A0x3e5550da010583ec!2sHotel%20Prabhupada!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full flex-grow"
                title="Hotel Prabhupada Puri Google Map"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {callbackModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCallbackModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] bg-[#0C1827] border border-[#C5A059]/30 p-8 rounded-sm shadow-2xl z-[1200]"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="font-serif text-2xl font-normal text-[#E8A317]">
                  Request A Callback
                </h3>
                <button
                  type="button"
                  onClick={() => setCallbackModalOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#E8A317] mx-auto" />
                  <h4 className="font-serif text-xl text-white">Request Received!</h4>
                  <p className="font-sans text-sm text-white/70">
                    Our team at Hotel Prabhupada will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Query / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist your stay in Puri?"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8A317]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="header-book-btn w-full font-sans text-xs tracking-widest uppercase py-3.5 rounded-sm mt-2"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
