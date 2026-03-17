"use client";

import * as React from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/format";

export function DashboardBookings() {
  const [bookings, setBookings] = React.useState<any[]>([]);

  React.useEffect(() => {
    const stored = JSON.parse(window.localStorage.getItem("yatra_bookings") || "[]") as any[];
    setBookings(stored);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Your bookings</h1>
        <p className="text-sm text-muted-foreground">Track upcoming yatras, payment status, and traveler details.</p>
      </div>
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
        {bookings.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            No bookings found. <Link href="/packages" className="text-primary">Browse packages</Link>
          </div>
        ) : (
          <div className="space-y-3">
            {bookings.map((booking) => (
              <div key={booking.id} className="rounded-2xl border border-border/60 bg-secondary/40 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-deep-brown">{booking.packageTitle}</p>
                    <p className="text-xs text-muted-foreground">{booking.travelers} travelers · {booking.paymentProvider}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-deep-brown">{formatCurrency(booking.total)}</p>
                    <p className="text-xs text-muted-foreground">{booking.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
