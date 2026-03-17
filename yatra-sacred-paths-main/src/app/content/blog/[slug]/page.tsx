import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data";
import { getBlogPostBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/content/blog/${post.slug}`,
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-14 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{post.category}</p>
        <h1 className="mt-4 text-4xl font-display text-deep-brown md:text-5xl">{post.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="relative mt-8 h-72 overflow-hidden rounded-3xl">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
        <div className="prose prose-lg mt-8 max-w-none text-deep-brown">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
