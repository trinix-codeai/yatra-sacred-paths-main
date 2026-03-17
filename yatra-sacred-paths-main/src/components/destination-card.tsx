import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatCurrency, formatRating } from "@/lib/format";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Card className="overflow-hidden shadow-lg shadow-black/5">
      <div className="relative h-48">
        <Image src={destination.images[0]} alt={destination.name} fill className="object-cover" />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge>{destination.religion}</Badge>
          <Badge className="bg-white/80 text-deep-brown">{destination.region}</Badge>
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-display text-deep-brown">{destination.name}</h3>
        <p className="text-sm text-muted-foreground">{destination.summary}</p>
      </CardHeader>
      <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{destination.state}</span>
        <span>{formatRating(destination.rating)} ★ ({destination.reviewCount})</span>
      </CardContent>
      <CardFooter>
        <span className="text-base font-semibold text-deep-brown">From {formatCurrency(destination.priceFrom)}</span>
        <Link href={`/destinations/${destination.slug}`} className="text-sm font-semibold text-primary">
          Explore
        </Link>
      </CardFooter>
    </Card>
  );
}
