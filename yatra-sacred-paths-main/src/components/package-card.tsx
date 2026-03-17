import Image from "next/image";
import Link from "next/link";
import { Package } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatCurrency, formatRating } from "@/lib/format";

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Card className="overflow-hidden shadow-lg shadow-black/5">
      <div className="relative h-48">
        <Image src={pkg.images[0]} alt={pkg.title} fill className="object-cover" />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge>{pkg.theme}</Badge>
          <Badge className="bg-white/80 text-deep-brown">{pkg.durationDays} days</Badge>
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-display text-deep-brown">{pkg.title}</h3>
        <p className="text-sm text-muted-foreground">{pkg.overview}</p>
      </CardHeader>
      <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{pkg.destinations.join(" · ")}</span>
        <span>{formatRating(pkg.rating)} ★ ({pkg.reviewCount})</span>
      </CardContent>
      <CardFooter>
        <span className="text-base font-semibold text-deep-brown">{formatCurrency(pkg.price)}</span>
        <Link href={`/packages/${pkg.slug}`} className="text-sm font-semibold text-primary">
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}
