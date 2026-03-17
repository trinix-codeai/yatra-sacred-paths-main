import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packages } from "@/data";
import { getPackageBySlug } from "@/lib/data";
import { formatCurrency, formatRating } from "@/lib/format";
import { buildMetadata, packageJsonLd } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return buildMetadata({
    title: pkg.title,
    description: pkg.overview,
    path: `/packages/${pkg.slug}`,
  });
}

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) {
    notFound();
  }

  const jsonLd = packageJsonLd({
    name: pkg.title,
    description: pkg.overview,
    price: pkg.price,
  });

  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <Script id="package-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="relative h-72 overflow-hidden rounded-3xl">
            <Image src={pkg.images[0]} alt={pkg.title} fill className="object-cover" />
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>{pkg.theme}</Badge>
              <Badge className="bg-white/80 text-deep-brown">{pkg.durationDays} days</Badge>
            </div>
            <h1 className="text-4xl font-display text-deep-brown md:text-5xl">{pkg.title}</h1>
            <p className="text-muted-foreground">{pkg.overview}</p>
          </div>

          <div className="mt-8 rounded-3xl border border-border/60 bg-white/70 p-6">
            <h3 className="text-lg font-semibold text-deep-brown">Itinerary</h3>
            <div className="mt-4 space-y-4">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="rounded-2xl border border-border/60 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-deep-brown">Day {day.day}: {day.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{day.description}</p>
                  <ul className="mt-2 text-xs text-muted-foreground">
                    {day.activities.map((activity) => (
                      <li key={activity}>• {activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-lg shadow-black/5">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Booking snapshot</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-deep-brown">Price:</span> {formatCurrency(pkg.price)} per person
              </p>
              <p>
                <span className="font-semibold text-deep-brown">Rating:</span> {formatRating(pkg.rating)} ★ ({pkg.reviewCount})
              </p>
              <p>
                <span className="font-semibold text-deep-brown">Departures:</span> {pkg.departures}
              </p>
              <p>
                <span className="font-semibold text-deep-brown">Starts from:</span> {pkg.startCities.join(", ")}
              </p>
              <p>
                <span className="font-semibold text-deep-brown">Group size:</span> Up to {pkg.maxGroupSize} pilgrims
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href={`/book/${pkg.slug}`} className="w-full">
                <Button size="lg" className="w-full">Book this Yatra</Button>
              </Link>
              <Link href="/auth/register" className="w-full">
                <Button variant="outline" size="lg" className="w-full">Request a callback</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-secondary/50 p-6">
            <h3 className="text-lg font-semibold text-deep-brown">Inclusions</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {pkg.inclusions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-deep-brown">Exclusions</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {pkg.exclusions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
