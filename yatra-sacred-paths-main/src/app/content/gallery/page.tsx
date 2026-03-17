import Image from "next/image";
import type { Metadata } from "next";
import { galleryItems } from "@/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Photo Gallery",
  description: "Moments captured from sacred journeys across India.",
  path: "/content/gallery",
});

export default function GalleryPage() {
  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Gallery</p>
        <h1 className="text-4xl font-display text-deep-brown md:text-5xl">Pilgrimage in pictures</h1>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {galleryItems.map((item) => (
          <div key={item.title} className="overflow-hidden rounded-2xl border border-border/60 bg-white/80">
            <div className="relative h-48">
              <Image src={item.src} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-deep-brown">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
