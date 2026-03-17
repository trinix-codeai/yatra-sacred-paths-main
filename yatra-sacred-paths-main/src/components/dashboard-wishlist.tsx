import Link from "next/link";
import { destinations } from "@/data";

export function DashboardWishlist() {
  const wishlist = destinations.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Wishlist</h1>
        <p className="text-sm text-muted-foreground">Your saved destinations and packages.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {wishlist.map((destination) => (
          <div key={destination.slug} className="rounded-2xl border border-border/60 bg-white/80 p-4">
            <p className="text-sm font-semibold text-deep-brown">{destination.name}</p>
            <p className="text-xs text-muted-foreground">{destination.region} · {destination.religion}</p>
            <Link href={`/destinations/${destination.slug}`} className="mt-2 inline-flex text-xs font-semibold text-primary">
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
