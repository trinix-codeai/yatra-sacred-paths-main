import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/destination-card";
import { PackageCard } from "@/components/package-card";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { blogPosts, destinations, packages } from "@/data";

export default function HomePage() {
  const featuredDestinations = destinations.filter((destination) => destination.featured).slice(0, 3);
  const featuredPackages = packages.filter((pkg) => pkg.featured).slice(0, 3);

  return (
    <div>
      <section className="bg-ritual py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <Badge className="bg-gold text-deep-brown">Sacred Journeys 2026</Badge>
            <h1 className="mt-4 text-4xl font-display text-deep-brown md:text-5xl lg:text-6xl">
              Plan your Yatra with confidence, comfort, and soul.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover curated pilgrimages across India with expert guides, trusted stays, and seamless booking support.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/destinations">
                <Button size="lg">Explore Destinations</Button>
              </Link>
              <Link href="/packages">
                <Button variant="outline" size="lg">Browse Packages</Button>
              </Link>
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl border border-border/60 bg-white/80 p-6 text-sm text-muted-foreground shadow-lg shadow-black/5 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em]">Trips curated</p>
                <p className="mt-2 text-2xl font-semibold text-deep-brown">250+</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em]">Pilgrims served</p>
                <p className="mt-2 text-2xl font-semibold text-deep-brown">18K+</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em]">On-ground guides</p>
                <p className="mt-2 text-2xl font-semibold text-deep-brown">120+</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-saffron/20 to-transparent" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-xl shadow-black/10">
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Triveni_Sangam_in_Prayagraj.jpg"
                  alt="Triveni Sangam, Prayagraj"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Featured Circuit</p>
                <h3 className="text-2xl font-display text-deep-brown">Kashi, Prayagraj & Ayodhya</h3>
                <p className="text-sm text-muted-foreground">
                  Three sacred cities, daily rituals, and curated stays with expert spiritual facilitation.
                </p>
                <Link href="/packages/kashi-prayagraj-sangam" className="text-sm font-semibold text-primary">
                  View itinerary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Destinations</p>
            <h2 className="section-title">Sacred places across every path</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Link href="/destinations" className="text-sm font-semibold text-primary">
              View all destinations →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Packages</p>
            <h2 className="section-title">Curated yatras with seamless booking</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Link href="/packages" className="text-sm font-semibold text-primary">
              Browse all packages →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Why Yatra</p>
            <h2 className="section-title">Pilgrimage planning made effortless</h2>
            <p className="mt-4 text-muted-foreground">
              Our teams handle logistics, rituals, and on-ground coordination so you can focus on devotion and discovery.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Verified temple assistance",
                "Trusted stays and transport",
                "Local guides & interpreters",
                "Flexible payment options",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border/60 bg-white/70 p-4 text-sm text-deep-brown">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border/60 bg-white/70 p-6 shadow-lg shadow-black/5">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Upcoming departures</p>
            <div className="mt-4 space-y-4">
              {packages.slice(0, 3).map((pkg) => (
                <div key={pkg.slug} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-deep-brown">{pkg.title}</p>
                    <p className="text-xs text-muted-foreground">{pkg.departures}</p>
                  </div>
                  <Link href={`/packages/${pkg.slug}`} className="text-xs font-semibold text-primary">
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Insights</p>
            <h2 className="section-title">Pilgrimage stories and guides</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-2xl border border-border/60 bg-white/80 shadow-lg shadow-black/5">
                <div className="relative h-44">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{post.category}</p>
                  <h3 className="mt-2 text-lg font-display text-deep-brown">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Link href={`/content/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
