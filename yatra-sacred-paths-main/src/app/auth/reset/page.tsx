"use client";

import Link from "next/link";
import { AuthCard } from "@/components/auth-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/providers/auth-provider";

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await resetPassword({ emailOrPhone: String(formData.get("emailOrPhone")) });
  };

  return (
    <section className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-16 md:px-8">
      <AuthCard title="Reset password" description="We will send a reset link to your email or phone.">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="emailOrPhone" placeholder="Email or phone" required />
          <Button type="submit" size="lg" className="w-full">Send reset link</Button>
        </form>
        <div className="text-sm text-muted-foreground">
          Remembered your password? <Link href="/auth/login" className="text-primary">Back to sign in</Link>
        </div>
      </AuthCard>
    </section>
  );
}
