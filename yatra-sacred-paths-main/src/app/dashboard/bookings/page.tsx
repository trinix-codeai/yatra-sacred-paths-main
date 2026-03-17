import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { DashboardBookings } from "@/components/dashboard-bookings";

export const metadata: Metadata = buildMetadata({
  title: "Bookings",
  description: "Review your yatra bookings and payment status.",
  path: "/dashboard/bookings",
});

export default function DashboardBookingsPage() {
  return <DashboardBookings />;
}
