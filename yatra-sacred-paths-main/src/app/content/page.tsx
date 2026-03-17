import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { blogPosts, guides } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Content",
  description: "Read pilgrimage guides, travel tips, and inspiring stories.",
  path: "/content",
});

export default function ContentPage() {
  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Content</p>
        <h1 className="text-4xl font-display text-deep-brown md:text-5xl">Guides, stories & media</h1>
        <p className="max-w-2xl text-muted-foreground">
          Deepen your spiritual journey with our curated content and visual galleries.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
          <h2 className="text-2xl font-display text-deep-brown">Latest blog posts</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {blogPosts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link href={`/content/blog/${post.slug}`} className="font-semibold text-primary">
                  {post.title}
                </Link>
                <p className="text-xs text-muted-foreground">{post.readingTime}</p>
              </li>
            ))}
          </ul>
          <Link href="/content/blog" className="mt-4 inline-flex text-sm font-semibold text-primary">
            Browse all posts →
          </Link>
        </div>

        <div className="rounded-3xl border border-border/60 bg-secondary/50 p-6">
          <h2 className="text-2xl font-display text-deep-brown">Pilgrimage guides</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {guides.slice(0, 3).map((guide) => (
              <li key={guide.slug}>
                <Link href={`/content/guides/${guide.slug}`} className="font-semibold text-primary">
                  {guide.title}
                </Link>
                <p className="text-xs text-muted-foreground">{guide.excerpt}</p>
              </li>
            ))}
          </ul>
          <Link href="/content/guides" className="mt-4 inline-flex text-sm font-semibold text-primary">
            View all guides →
          </Link>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-border/60 bg-white/80 p-6">
        <h2 className="text-2xl font-display text-deep-brown">Photo gallery</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Explore moments from sacred journeys across India.
        </p>
        <Link href="/content/gallery" className="mt-4 inline-flex text-sm font-semibold text-primary">
          Visit gallery →
        </Link>
      </div>
    </section>
  );
}
