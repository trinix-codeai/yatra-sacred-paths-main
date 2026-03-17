import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { DashboardOverview } from "@/components/dashboard-overview";

export const metadata: Metadata = buildMetadata({
  title: "Dashboard",
  description: "Manage your bookings, profile, and pilgrimage preferences.",
  path: "/dashboard",
});

export default function DashboardPage() {
  return <DashboardOverview />;
}
