"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/auth-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/providers/auth-provider";

export default function RegisterPage() {
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signUp({
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
    });
    router.push("/dashboard");
  };

  return (
    <section className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-16 md:px-8">
      <AuthCard title="Create your pilgrim account" description="Save bookings, wishlist, and personalized itineraries.">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Full name" required />
          <Input name="email" type="email" placeholder="Email address" required />
          <Input name="phone" placeholder="Phone number" required />
          <Input name="password" type="password" placeholder="Create a password" required />
          <Button type="submit" size="lg" className="w-full">Create account</Button>
        </form>
        <div className="text-sm text-muted-foreground">
          Already registered? <Link href="/auth/login" className="text-primary">Sign in</Link>
        </div>
      </AuthCard>
    </section>
  );
}
