import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { DashboardProfile } from "@/components/dashboard-profile";

export const metadata: Metadata = buildMetadata({
  title: "Profile",
  description: "Manage your profile and pilgrim preferences.",
  path: "/dashboard/profile",
});

export default function DashboardProfilePage() {
  return <DashboardProfile />;
}
