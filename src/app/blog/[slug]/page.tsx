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
    return { title: 'Blog | Hotel Prabhupada Puri' };
  }
  return {
    title: `${post.title} | Hotel Prabhupada Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
