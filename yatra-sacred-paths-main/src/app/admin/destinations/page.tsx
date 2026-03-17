import type { Metadata } from "next";
import { destinations } from "@/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admin · Destinations",
  description: "Manage pilgrimage destinations.",
  path: "/admin/destinations",
});

export default function AdminDestinationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Manage destinations</h1>
        <p className="text-sm text-muted-foreground">Add, edit, or archive destination listings.</p>
      </div>
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr>
              <th className="pb-3">Destination</th>
              <th className="pb-3">Region</th>
              <th className="pb-3">Religion</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-muted-foreground">
            {destinations.map((destination) => (
              <tr key={destination.slug} className="border-t border-border/60">
                <td className="py-3 font-semibold text-deep-brown">{destination.name}</td>
                <td className="py-3">{destination.region}</td>
                <td className="py-3">{destination.religion}</td>
                <td className="py-3">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
