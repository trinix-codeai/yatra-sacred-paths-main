"use client";

import * as React from "react";
import Link from "next/link";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";

export function DashboardOverview() {
  const { user } = useAuth();
  const [bookings, setBookings] = React.useState<any[]>([]);

  React.useEffect(() => {
    const stored = JSON.parse(window.localStorage.getItem("yatra_bookings") || "[]") as any[];
    setBookings(stored);
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-lg shadow-black/5">
        <h1 className="text-3xl font-display text-deep-brown">Namaste, {user?.name || "Pilgrim"}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Manage your upcoming yatras, wishlist, and profile preferences.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Upcoming trips", value: bookings.length },
          { label: "Wishlist items", value: 4 },
          { label: "Total spent", value: formatCurrency(bookings.reduce((sum, item) => sum + (item.total || 0), 0)) },
        ].map((card) => (
          <div key={card.label} className="rounded-2xl border border-border/60 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-deep-brown">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-border/60 bg-secondary/50 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-deep-brown">Recent bookings</h2>
          <Link href="/dashboard/bookings" className="text-sm font-semibold text-primary">
            View all
          </Link>
        </div>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          {bookings.length === 0 && <p>No bookings yet. Start a new yatra today.</p>}
          {bookings.slice(0, 2).map((booking) => (
            <div key={booking.id} className="rounded-2xl border border-border/60 bg-white/70 p-3">
              <p className="text-sm font-semibold text-deep-brown">{booking.packageTitle}</p>
              <p className="text-xs text-muted-foreground">
                {booking.travelers} travelers · {booking.paymentProvider} · {booking.status}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/packages">
            <Button size="sm">Browse packages</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
