"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Package } from "@/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/format";

const PAYMENT_OPTIONS = ["Razorpay", "Paytm"];

type BookingFormProps = {
  pkg: Package;
};

export function BookingForm({ pkg }: BookingFormProps) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [paymentProvider, setPaymentProvider] = React.useState(PAYMENT_OPTIONS[0]);
  const [travelers, setTravelers] = React.useState(1);

  const total = pkg.price * travelers;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const id = crypto.randomUUID();
    const booking = {
      id,
      packageSlug: pkg.slug,
      packageTitle: pkg.title,
      travelers,
      total,
      paymentProvider,
      status: "Confirmed",
      date: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      const existing = JSON.parse(window.localStorage.getItem("yatra_bookings") || "[]") as typeof booking[];
      window.localStorage.setItem("yatra_bookings", JSON.stringify([booking, ...existing]));
    }

    setTimeout(() => {
      setLoading(false);
      router.push(`/booking/confirmation/${id}`);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" placeholder="Full name" required />
        <Input name="phone" placeholder="Phone number" required />
        <Input name="email" type="email" placeholder="Email address" required />
        <Select name="departure">
          <option>Preferred departure city</option>
          {pkg.startCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Select value={String(travelers)} onChange={(event) => setTravelers(Number(event.target.value))}>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value} traveler{value > 1 ? "s" : ""}
            </option>
          ))}
        </Select>
        <Select value={paymentProvider} onChange={(event) => setPaymentProvider(event.target.value)}>
          {PAYMENT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              Pay with {option}
            </option>
          ))}
        </Select>
      </div>

      <Textarea name="notes" placeholder="Special requests or accessibility needs" />

      <div className="rounded-2xl border border-border/60 bg-secondary/40 p-4 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Package price</span>
          <span>{formatCurrency(pkg.price)} x {travelers}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-base font-semibold text-deep-brown">
          <span>Total payable</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <p className="mt-2 text-xs">Payments are simulated for demo. Integrate Razorpay/Paytm API to go live.</p>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Processing payment..." : `Confirm & Pay with ${paymentProvider}`}
      </Button>
    </form>
  );
}
