"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardProfile() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Profile</h1>
        <p className="text-sm text-muted-foreground">Update your pilgrim details for faster bookings.</p>
      </div>
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input defaultValue={user?.name} placeholder="Full name" />
          <Input defaultValue={user?.email} placeholder="Email address" />
          <Input defaultValue={user?.phone} placeholder="Phone number" />
          <Input placeholder="Emergency contact" />
        </div>
        <Button className="mt-6">Save changes</Button>
      </div>
    </div>
  );
}
