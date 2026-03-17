import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

const bookings = [
  { id: "BK-1024", name: "Anita Kapoor", package: "Char Dham Sacred Circuit", status: "Paid" },
  { id: "BK-1025", name: "Ravinder Singh", package: "Sikh Heritage Triangle", status: "Pending" },
  { id: "BK-1026", name: "Meera Iyer", package: "Sacred South Temple Trail", status: "Paid" },
];

export const metadata: Metadata = buildMetadata({
  title: "Admin · Bookings",
  description: "Review pilgrim bookings and payment status.",
  path: "/admin/bookings",
});

export default function AdminBookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Manage bookings</h1>
        <p className="text-sm text-muted-foreground">Track confirmations, payments, and support requests.</p>
      </div>
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr>
              <th className="pb-3">Booking ID</th>
              <th className="pb-3">Pilgrim</th>
              <th className="pb-3">Package</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-muted-foreground">
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-t border-border/60">
                <td className="py-3 font-semibold text-deep-brown">{booking.id}</td>
                <td className="py-3">{booking.name}</td>
                <td className="py-3">{booking.package}</td>
                <td className="py-3">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
