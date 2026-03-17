import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function DashboardReviews() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Reviews</h1>
        <p className="text-sm text-muted-foreground">Share your experience to guide fellow pilgrims.</p>
      </div>
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
        <p className="text-sm font-semibold text-deep-brown">Leave a review</p>
        <Textarea placeholder="Describe your yatra experience..." className="mt-3" />
        <Button className="mt-4">Submit review</Button>
      </div>
    </div>
  );
}
