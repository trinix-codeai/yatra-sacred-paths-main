import type { Metadata } from "next";
import { blogPosts, guides } from "@/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admin · Content",
  description: "Manage blog posts and guides.",
  path: "/admin/content",
});

export default function AdminContentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Manage content</h1>
        <p className="text-sm text-muted-foreground">Publish new stories and update pilgrimage guides.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
          <h2 className="text-lg font-semibold text-deep-brown">Blog posts</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {blogPosts.map((post) => (
              <li key={post.slug}>• {post.title}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
          <h2 className="text-lg font-semibold text-deep-brown">Guides</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {guides.map((guide) => (
              <li key={guide.slug}>• {guide.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
