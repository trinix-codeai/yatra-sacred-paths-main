import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { DashboardWishlist } from "@/components/dashboard-wishlist";

export const metadata: Metadata = buildMetadata({
  title: "Wishlist",
  description: "Saved destinations and packages for your future yatras.",
  path: "/dashboard/wishlist",
});

export default function DashboardWishlistPage() {
  return <DashboardWishlist />;
}
