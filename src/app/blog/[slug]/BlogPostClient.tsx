'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock3, ArrowLeft, User, HelpCircle, ChevronDown } from 'lucide-react';
import { FadeRise } from '@/hooks/useParallax';
import {
  PatachitraBackdrop,
  PatachitraDivider,
} from '@/components/patachitra/PatachitraMotifs';
import { type BlogPost, formatBlogDate, blogs } from '@/data/blogs';

type BlogPostClientProps = {
  post: BlogPost;
};

export const BlogPostClient: React.FC<BlogPostClientProps> = ({ post }) => {
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const renderFormattedText = (text: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const linkText = match[1];
      let href = match[2];

      if (href.includes('hotelprabhupada.com/attraction')) {
        href = '/attractions';
      } else if (href.includes('hotelprabhupada.com/rooms')) {
        href = '/rooms';
      } else if (href === 'https://www.hotelprabhupada.com/' || href === 'https://www.hotelprabhupada.com') {
        href = '/';
      }

      const isInternal = href.startsWith('/');
      if (isInternal) {
        parts.push(
          <Link
            key={match.index}
            href={href}
            className="text-[#8B1E1E] font-medium underline underline-offset-4 decoration-[#8B1E1E]/40 hover:text-[#C0392B] hover:decoration-[#C0392B] transition-colors"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B1E1E] font-medium underline underline-offset-4 decoration-[#8B1E1E]/40 hover:text-[#C0392B] hover:decoration-[#C0392B] transition-colors"
          >
            {linkText}
          </a>
        );
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderParagraph = (text: string, index: number) => {
    // Section Heading (e.g. ## Heading)
    if (text.startsWith('## ')) {
      const title = text.replace(/^##\s+/, '');
      return (
        <div key={index} className="pt-8 pb-2 mt-8 border-t border-[#E5DECE]">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0C1827] font-semibold flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8A317] inline-block shrink-0" />
            {renderFormattedText(title)}
          </h2>
        </div>
      );
    }

    // Numbered Fact Title (e.g. 1. Title)
    const matchFact = text.match(/^(\d+)\.\s+(.*)$/);
    if (matchFact) {
      const num = matchFact[1].padStart(2, '0');
      const title = matchFact[2];
      return (
        <div key={index} className="pt-6 pb-1">
          <h3 className="font-serif text-xl sm:text-2xl text-[#0C1827] font-semibold flex items-start gap-3.5 leading-snug">
            <span className="flex items-center justify-center min-w-[2.25rem] h-9 rounded-full bg-[#8B1E1E] text-white font-sans text-xs font-bold tracking-wider shrink-0 mt-0.5 shadow-sm">
              {num}
            </span>
            <span className="pt-0.5 text-[#0C1827]">{renderFormattedText(title)}</span>
          </h3>
        </div>
      );
    }

    return (
      <p key={index} className="text-[#475569] font-light leading-relaxed">
        {renderFormattedText(text)}
      </p>
    );
  };

  return (
    <>
      <section className="relative h-[42vh] min-h-[320px] max-h-[480px] w-full flex items-end justify-center bg-[#070F1A] overflow-hidden pt-16 sm:pt-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#070F1A]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A] via-[#070F1A]/50 to-[#070F1A]/40" />

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-5 sm:px-8 pb-10 sm:pb-14 text-center text-white">
          <FadeRise>
            <span className="inline-block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#E8A317] mb-3">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.2] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/80 font-sans">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#E8A317]" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-[#E8A317]" />
                {formatBlogDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="w-3.5 h-3.5 text-[#E8A317]" />
                {post.readTime}
              </span>
            </div>
          </FadeRise>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden text-[#1E293B]">
        <PatachitraBackdrop />
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 relative z-10">
          <FadeRise>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.14em] uppercase text-[#8B1E1E] hover:text-[#C0392B] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </FadeRise>

          <FadeRise delay={0.08}>
            <p className="font-serif text-xl sm:text-2xl text-[#0C1827] leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <PatachitraDivider className="mb-8 sm:mb-10" />
          </FadeRise>

          <FadeRise delay={0.12}>
            <div className="space-y-5 font-sans text-base sm:text-lg text-[#475569] font-light leading-relaxed">
              {post.content.map((paragraph, index) => renderParagraph(paragraph, index))}
            </div>
          </FadeRise>

          {post.faqs && post.faqs.length > 0 && (
            <FadeRise delay={0.14} className="mt-12 sm:mt-16 pt-8 border-t border-[#E5DECE]">
              <div className="mb-6">
                <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A317]">
                  Got Questions?
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0C1827] font-normal mt-1">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-3">
                {post.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#E5DECE] rounded-sm bg-[#FDFBF7] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif text-base sm:text-lg text-[#0C1827] font-medium hover:text-[#8B1E1E] transition-colors"
                      >
                        <span className="flex items-center gap-3 pr-4">
                          <HelpCircle className="w-5 h-5 text-[#E8A317] shrink-0" />
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#8B1E1E] shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#E5DECE]/50 font-sans font-light bg-white/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeRise>
          )}

          <FadeRise delay={0.15} className="mt-10 sm:mt-12 pt-8 border-t border-[#E5DECE]">
            <a
              href="https://live.ipms247.com/booking/book-rooms-hotelprabhupada"
              target="_blank"
              rel="noopener noreferrer"
              className="header-book-btn inline-flex items-center justify-center font-sans text-xs tracking-[0.14em] uppercase rounded-sm px-8 py-3.5"
            >
              Book Your Stay
            </a>
          </FadeRise>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-12 sm:py-16 bg-[#070F1A] text-white relative overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
            <FadeRise className="text-center mb-8 sm:mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
                More Articles
              </h2>
              <PatachitraDivider light className="mt-4" />
            </FadeRise>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group rounded-sm border border-[#C5A059]/25 bg-[#0C1827] overflow-hidden hover:border-[#E8A317]/50 transition-colors"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#E8A317]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-white mt-1.5 leading-snug group-hover:text-[#E8A317] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

