import type { Metadata } from "next";
import { packages } from "@/data";
import { PackagesExplorer } from "@/components/sections/packages-explorer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Yatra Packages",
  description: "Choose curated pilgrimage packages with detailed itineraries and flexible pricing.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Packages</p>
        <h1 className="text-4xl font-display text-deep-brown md:text-5xl">Curated Yatra experiences</h1>
        <p className="max-w-2xl text-muted-foreground">
          Compare itineraries, inclusions, and travel themes. Every package is designed for comfort, devotion, and ease.
        </p>
      </div>
      <div className="mt-10">
        <PackagesExplorer packages={packages} />
      </div>
    </section>
  );
}
