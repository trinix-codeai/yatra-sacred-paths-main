import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { destinations, packages, blogPosts } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Admin",
  description: "Manage destinations, packages, and bookings.",
  path: "/admin",
});

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Admin overview</h1>
        <p className="text-sm text-muted-foreground">Monitor bookings, content, and pilgrim accounts.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Active destinations", value: destinations.length },
          { label: "Packages", value: packages.length },
          { label: "Blog posts", value: blogPosts.length },
        ].map((card) => (
          <div key={card.label} className="rounded-2xl border border-border/60 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-deep-brown">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-border/60 bg-secondary/50 p-6">
        <h2 className="text-lg font-semibold text-deep-brown">Operational checklist</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Review upcoming departures and transport readiness.</li>
          <li>• Validate payment reconciliation with Razorpay/Paytm.</li>
          <li>• Update content and seasonal advisories.</li>
        </ul>
      </div>
    </div>
  );
}
