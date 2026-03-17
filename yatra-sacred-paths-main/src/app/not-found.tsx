import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-20 text-center md:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Lost on the sacred path</p>
      <h1 className="mt-4 text-4xl font-display text-deep-brown md:text-5xl">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist. Return to the home page or explore destinations.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/" className="w-full sm:w-auto">
          <Button size="lg">Back to Home</Button>
        </Link>
        <Link href="/destinations" className="w-full sm:w-auto">
          <Button variant="outline" size="lg">Explore Destinations</Button>
        </Link>
      </div>
    </section>
  );
}
