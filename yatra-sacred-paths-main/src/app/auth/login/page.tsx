"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/auth-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/providers/auth-provider";

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signIn({
      emailOrPhone: String(formData.get("emailOrPhone")),
      password: String(formData.get("password")),
    });
    router.push("/dashboard");
  };

  return (
    <section className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-16 md:px-8">
      <AuthCard title="Welcome back" description="Sign in with email or phone to access your bookings.">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="emailOrPhone" placeholder="Email or phone" required />
          <Input name="password" type="password" placeholder="Password" required />
          <Button type="submit" size="lg" className="w-full">Sign in</Button>
        </form>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link href="/auth/reset" className="text-primary">Forgot password?</Link>
          <p>
            New to Yatra? <Link href="/auth/register" className="text-primary">Create an account</Link>
          </p>
        </div>
      </AuthCard>
    </section>
  );
}
