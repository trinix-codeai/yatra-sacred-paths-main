import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations } from "@/data";
import { getDestinationBySlug, getRelatedPackagesForDestination } from "@/lib/data";
import { formatCurrency, formatRating } from "@/lib/format";
import { buildMetadata, destinationJsonLd } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) return {};
  return buildMetadata({
    title: destination.name,
    description: destination.summary,
    path: `/destinations/${destination.slug}`,
  });
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) {
    notFound();
  }

  const relatedPackages = getRelatedPackagesForDestination(destination.name);
  const jsonLd = destinationJsonLd({
    name: destination.name,
    description: destination.description,
    image: destination.images[0],
    location: destination.state,
  });

  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <Script id="destination-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="relative h-72 overflow-hidden rounded-3xl">
            <Image src={destination.images[0]} alt={destination.name} fill className="object-cover" />
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>{destination.religion}</Badge>
              <Badge className="bg-white/80 text-deep-brown">{destination.region}</Badge>
              <Badge className="bg-white/80 text-deep-brown">{destination.type}</Badge>
            </div>
            <h1 className="text-4xl font-display text-deep-brown md:text-5xl">{destination.name}</h1>
            <p className="text-muted-foreground">{destination.description}</p>
          </div>

          <div className="mt-8 grid gap-6 rounded-3xl border border-border/60 bg-white/70 p-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-deep-brown">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {destination.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-deep-brown">Rituals & Darshan</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {destination.rituals.map((ritual) => (
                  <li key={ritual}>• {ritual}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-lg shadow-black/5">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Quick facts</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-deep-brown">Best time:</span> {destination.bestTime}
              </p>
              <p>
                <span className="font-semibold text-deep-brown">Ideal duration:</span> {destination.durationDays} days
              </p>
              <p>
                <span className="font-semibold text-deep-brown">Starting from:</span> {formatCurrency(destination.priceFrom)}
              </p>
              <p>
                <span className="font-semibold text-deep-brown">Rating:</span> {formatRating(destination.rating)} ★ ({destination.reviewCount})
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/packages" className="w-full">
                <Button size="lg" className="w-full">View Packages</Button>
              </Link>
              <Link href="/auth/register" className="w-full">
                <Button variant="outline" size="lg" className="w-full">Get a Custom Plan</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-secondary/50 p-6">
            <h3 className="text-lg font-semibold text-deep-brown">Recommended packages</h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              {relatedPackages.length === 0 && <p>No packages yet. Reach out for a custom itinerary.</p>}
              {relatedPackages.map((pkg) => (
                <Link key={pkg.slug} href={`/packages/${pkg.slug}`} className="block rounded-2xl border border-border/60 bg-white/70 p-3">
                  <p className="text-sm font-semibold text-deep-brown">{pkg.title}</p>
                  <p className="text-xs text-muted-foreground">{pkg.durationDays} days · {pkg.theme}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
