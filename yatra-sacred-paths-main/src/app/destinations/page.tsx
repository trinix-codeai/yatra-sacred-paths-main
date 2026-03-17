import type { Metadata } from "next";
import { destinations } from "@/data";
import { DestinationsExplorer } from "@/components/sections/destinations-explorer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Destinations",
  description: "Browse pilgrimage destinations by region, religion, and sacred traditions.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Destinations</p>
        <h1 className="text-4xl font-display text-deep-brown md:text-5xl">Sacred places across India</h1>
        <p className="max-w-2xl text-muted-foreground">
          Explore holy cities, temples, monasteries, and heritage trails curated by faith, region, and travel style.
        </p>
      </div>
      <div className="mt-10">
        <DestinationsExplorer destinations={destinations} />
      </div>
    </section>
  );
}
