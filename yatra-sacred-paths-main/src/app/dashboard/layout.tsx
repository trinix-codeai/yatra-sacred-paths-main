import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/bookings", label: "Bookings" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/wishlist", label: "Wishlist" },
  { href: "/dashboard/reviews", label: "Reviews" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-[240px_1fr] md:px-8">
      <aside className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-lg shadow-black/5">
        <h2 className="text-xl font-display text-deep-brown">Pilgrim Dashboard</h2>
        <nav className="mt-6 space-y-3 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block rounded-xl px-3 py-2 text-muted-foreground hover:bg-secondary/60 hover:text-deep-brown">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </section>
  );
}
