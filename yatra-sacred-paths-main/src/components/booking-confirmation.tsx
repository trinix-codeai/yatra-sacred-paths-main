"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";

export function BookingConfirmation({ bookingId }: { bookingId: string }) {
  const [booking, setBooking] = React.useState<any>(null);

  React.useEffect(() => {
    const stored = JSON.parse(window.localStorage.getItem("yatra_bookings") || "[]") as any[];
    const found = stored.find((item) => item.id === bookingId);
    setBooking(found || null);
  }, [bookingId]);

  if (!booking) {
    return (
      <div className="rounded-3xl border border-border/60 bg-white/80 p-8 text-center">
        <h1 className="text-3xl font-display text-deep-brown">Booking confirmed</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Your payment has been processed. Booking details will appear here shortly.
        </p>
        <Link href="/dashboard/bookings" className="mt-6 inline-flex">
          <Button size="lg">Go to bookings</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border/60 bg-white/80 p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Confirmation</p>
      <h1 className="mt-3 text-3xl font-display text-deep-brown">Booking #{booking.id.slice(0, 8)}</h1>
      <p className="mt-2 text-sm text-muted-foreground">Status: {booking.status}</p>

      <div className="mt-6 grid gap-4 rounded-2xl border border-border/60 bg-secondary/40 p-4 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Package</span>
          <span className="font-semibold text-deep-brown">{booking.packageTitle}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Travelers</span>
          <span>{booking.travelers}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Payment</span>
          <span>{booking.paymentProvider}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span className="font-semibold text-deep-brown">{formatCurrency(booking.total)}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/dashboard/bookings" className="w-full sm:w-auto">
          <Button size="lg" className="w-full">Manage booking</Button>
        </Link>
        <Link href="/destinations" className="w-full sm:w-auto">
          <Button variant="outline" size="lg" className="w-full">Plan another yatra</Button>
        </Link>
      </div>
    </div>
  );
}
