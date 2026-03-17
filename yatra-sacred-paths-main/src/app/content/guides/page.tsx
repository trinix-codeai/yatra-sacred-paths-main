import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pilgrimage Guides",
  description: "Practical guidance and etiquette for sacred journeys.",
  path: "/content/guides",
});

export default function GuidesPage() {
  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Guides</p>
        <h1 className="text-4xl font-display text-deep-brown md:text-5xl">Pilgrimage guides</h1>
        <p className="max-w-2xl text-muted-foreground">Learn customs, planning tips, and responsible travel practices.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <div key={guide.slug} className="rounded-3xl border border-border/60 bg-white/80 p-6">
            <h2 className="text-2xl font-display text-deep-brown">{guide.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{guide.excerpt}</p>
            <Link href={`/content/guides/${guide.slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary">
              Read guide
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
