import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packages } from "@/data";
import { getPackageBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { BookingForm } from "@/components/booking-form";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return buildMetadata({
    title: `Book ${pkg.title}`,
    description: "Secure your pilgrimage seats with a simple booking flow and payment options.",
    path: `/book/${pkg.slug}`,
  });
}

export default function BookingPage({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-14 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Booking</p>
          <h1 className="mt-3 text-4xl font-display text-deep-brown">Reserve {pkg.title}</h1>
          <p className="mt-3 text-muted-foreground">
            Complete the form below to confirm your yatra. Payment is simulated for now and can be wired to Razorpay/Paytm.
          </p>
          <div className="mt-8 rounded-3xl border border-border/60 bg-white/80 p-6 shadow-lg shadow-black/5">
            <BookingForm pkg={pkg} />
          </div>
        </div>
        <div className="rounded-3xl border border-border/60 bg-secondary/50 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Package summary</p>
          <h2 className="mt-3 text-2xl font-display text-deep-brown">{pkg.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{pkg.overview}</p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p>Duration: {pkg.durationDays} days</p>
            <p>Starts from: {pkg.startCities.join(", ")}</p>
            <p>Departures: {pkg.departures}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
