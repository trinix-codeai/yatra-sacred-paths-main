import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Stories, rituals, and practical guidance for pilgrimage travel.",
  path: "/content/blog",
});

export default function BlogPage() {
  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Blog</p>
        <h1 className="text-4xl font-display text-deep-brown md:text-5xl">Pilgrimage journal</h1>
        <p className="max-w-2xl text-muted-foreground">
          Insights, rituals, and stories from sacred journeys across India.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-2xl border border-border/60 bg-white/80 shadow-lg shadow-black/5">
            <div className="relative h-44">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{post.category}</p>
              <h2 className="mt-2 text-xl font-display text-deep-brown">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>{post.readingTime}</span>
              </div>
              <Link href={`/content/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
