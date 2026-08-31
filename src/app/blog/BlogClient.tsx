'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Clock3, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';
import { formatBlogDate, getRecentBlogs } from '@/data/blogs';

const INITIAL_COUNT = 4;

export const BlogClient: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const recentBlogs = getRecentBlogs();
  const visibleBlogs = showAll ? recentBlogs : recentBlogs.slice(0, INITIAL_COUNT);
  const hasMore = recentBlogs.length > INITIAL_COUNT;
  const [featured, ...gridPosts] = visibleBlogs;

  return (
    <>
      <InnerPageHero
        overline="Stories from Puri"
        title="Hotel Blog"
        subtitle="Travel tips, heritage guides, and stay inspiration from Hotel Prabhupada."
        image="/images/official-hero3.webp"
        imageAlt="Hotel Prabhupada Blog"
      />

      <section className="py-14 sm:py-20 md:py-28 text-[#1E293B] relative overflow-hidden">
        <PatachitraBackdrop />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          <FadeRise className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
            <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8B1E1E] mb-2">
              Insights & Inspiration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0C1827] tracking-tight">
              Recent Articles
            </h2>
            <PatachitraDivider className="mt-4 sm:mt-6" />
          </FadeRise>

          {featured ? (
            <FadeRise className="mb-8 sm:mb-12">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-sm border border-[#E5DECE] bg-white shadow-sm hover:shadow-[0_20px_44px_rgba(12,24,39,0.1)] transition-shadow"
              >
                <div className="relative lg:col-span-7 h-56 sm:h-72 lg:h-auto min-h-[280px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#070F1A]/10" />
                  <span className="absolute top-4 left-4 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase bg-[#E8A317] text-[#0C1827] px-2.5 py-1 rounded-sm">
                    Latest
                  </span>
                </div>
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block w-fit font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8B1E1E] mb-3">
                    {featured.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0C1827] leading-snug mb-3 group-hover:text-[#8B1E1E] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="font-sans text-sm text-[#64748B] font-light leading-relaxed mb-5">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] font-sans mb-5">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5 text-[#C0392B]" />
                      {formatBlogDate(featured.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="w-3.5 h-3.5 text-[#C0392B]" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.14em] uppercase text-[#0C1827] group-hover:text-[#8B1E1E] transition-colors">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeRise>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            <AnimatePresence initial={false}>
              {gridPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  className="bg-white rounded-sm border border-[#E5DECE] overflow-hidden shadow-sm hover:shadow-[0_18px_40px_rgba(12,24,39,0.1)] hover:border-[#C5A059]/70 transition-all group flex flex-col"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A]/55 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase bg-[#0C1827]/85 text-[#E8A317] px-2.5 py-1 rounded-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-xl font-normal text-[#0C1827] leading-snug mb-2 group-hover:text-[#8B1E1E] transition-colors">
                        {post.title}
                      </h3>
                      <p className="font-sans text-sm text-[#64748B] font-light leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#64748B] font-sans pt-3 border-t border-[#E5DECE]">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-[#C0392B]" />
                          {formatBlogDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="w-3.5 h-3.5 text-[#C0392B]" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {hasMore ? (
            <FadeRise delay={0.1} className="text-center mt-10 sm:mt-14">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="pata-btn-outline inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    View More Blogs <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
              {!showAll ? (
                <p className="mt-3 font-sans text-xs text-[#64748B] font-light">
                  Showing {INITIAL_COUNT} of {recentBlogs.length} articles
                </p>
              ) : null}
            </FadeRise>
          ) : null}
        </div>
      </section>
    </>
  );
};
