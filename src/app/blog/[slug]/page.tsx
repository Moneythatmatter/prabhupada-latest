import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogs, getBlogBySlug } from '@/data/blogs';
import { BlogPostClient } from './BlogPostClient';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return {
      title: 'Blog | Hotel Prabhupada Puri',
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }
  return {
    title: `${post.title} | Hotel Prabhupada Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.hotelprabhupada.com${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://www.hotelprabhupada.com',
    },
    publisher: {
      '@type': 'Hotel',
      name: 'Hotel Prabhupada',
      url: 'https://www.hotelprabhupada.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.hotelprabhupada.com/blog/${post.slug}`,
    },
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, '\\u003c'),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <BlogPostClient post={post} />
    </>
  );
}
