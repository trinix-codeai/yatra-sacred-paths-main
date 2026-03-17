import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides } from "@/data";
import { getGuideBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/content/guides/${guide.slug}`,
  });
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-14 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-display text-deep-brown md:text-5xl">{guide.title}</h1>
        <p className="mt-3 text-muted-foreground">{guide.excerpt}</p>
        <div className="relative mt-8 h-72 overflow-hidden rounded-3xl">
          <Image src={guide.coverImage} alt={guide.title} fill className="object-cover" />
        </div>
        <div className="mt-8 space-y-6">
          {guide.sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-border/60 bg-white/80 p-5">
              <h2 className="text-xl font-semibold text-deep-brown">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {section.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
