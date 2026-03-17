import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { DashboardReviews } from "@/components/dashboard-reviews";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description: "Review your pilgrimage experiences.",
  path: "/dashboard/reviews",
});

export default function DashboardReviewsPage() {
  return <DashboardReviews />;
}
