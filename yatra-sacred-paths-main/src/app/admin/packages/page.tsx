import type { Metadata } from "next";
import { packages } from "@/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admin · Packages",
  description: "Manage yatra packages, pricing, and availability.",
  path: "/admin/packages",
});

export default function AdminPackagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Manage packages</h1>
        <p className="text-sm text-muted-foreground">Update itineraries, pricing, and departure schedules.</p>
      </div>
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr>
              <th className="pb-3">Package</th>
              <th className="pb-3">Theme</th>
              <th className="pb-3">Duration</th>
              <th className="pb-3">Price</th>
            </tr>
          </thead>
          <tbody className="text-sm text-muted-foreground">
            {packages.map((pkg) => (
              <tr key={pkg.slug} className="border-t border-border/60">
                <td className="py-3 font-semibold text-deep-brown">{pkg.title}</td>
                <td className="py-3">{pkg.theme}</td>
                <td className="py-3">{pkg.durationDays} days</td>
                <td className="py-3">₹{pkg.price.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
