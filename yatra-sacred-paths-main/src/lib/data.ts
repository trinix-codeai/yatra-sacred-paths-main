import { blogPosts, destinations, guides, packages } from "@/data";

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getPackageBySlug(slug: string) {
  return packages.find((pkg) => pkg.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getFeaturedDestinations() {
  return destinations.filter((destination) => destination.featured);
}

export function getFeaturedPackages() {
  return packages.filter((pkg) => pkg.featured);
}

export function getRelatedPackagesForDestination(destinationName: string) {
  const normalized = destinationName.toLowerCase().replace(/\s*\(.*?\)\s*/g, "").trim();
  return packages.filter((pkg) =>
    pkg.destinations.some((destination) => {
      const candidate = destination.toLowerCase();
      return candidate.includes(normalized) || normalized.includes(candidate);
    })
  );
}
