import type { MetadataRoute } from "next";
import { blogPosts, destinations, guides, packages, siteConfig } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteConfig.url, lastModified: now },
    { url: `${siteConfig.url}/destinations`, lastModified: now },
    { url: `${siteConfig.url}/packages`, lastModified: now },
    { url: `${siteConfig.url}/content`, lastModified: now },
    { url: `${siteConfig.url}/dashboard`, lastModified: now },
    ...destinations.map((destination) => ({
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      lastModified: now,
    })),
    ...packages.map((pkg) => ({
      url: `${siteConfig.url}/packages/${pkg.slug}`,
      lastModified: now,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/content/blog/${post.slug}`,
      lastModified: now,
    })),
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/content/guides/${guide.slug}`,
      lastModified: now,
    })),
  ];
}
