import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BookingConfirmation } from "@/components/booking-confirmation";

export const metadata: Metadata = buildMetadata({
  title: "Booking Confirmation",
  description: "Your yatra booking is confirmed.",
  path: "/booking/confirmation",
});

export default function BookingConfirmationPage({ params }: { params: { id: string } }) {
  return (
    <section className="container mx-auto px-4 py-16 md:px-8">
      <BookingConfirmation bookingId={params.id} />
    </section>
  );
}
