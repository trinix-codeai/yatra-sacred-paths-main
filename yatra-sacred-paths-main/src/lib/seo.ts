import type { Metadata } from "next";
import { siteConfig } from "@/data";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function destinationJsonLd({
  name,
  description,
  image,
  location,
}: {
  name: string;
  description: string;
  image: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name,
    description,
    image,
    touristType: ["Pilgrimage"],
    includesAttraction: {
      "@type": "TouristAttraction",
      name: location,
    },
  };
}

export function packageJsonLd({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Trip",
    name,
    description,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price,
      availability: "https://schema.org/InStock",
    },
  };
}
