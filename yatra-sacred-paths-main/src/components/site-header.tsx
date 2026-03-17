"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/providers/auth-provider";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 text-xl font-display text-deep-brown">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">Y</span>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-deep-brown">
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <Link href="/dashboard" className="text-sm font-semibold text-deep-brown">
                Welcome, {user.name}
              </Link>
              <Button variant="outline" size="sm" onClick={signOut}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-sm font-semibold text-deep-brown">
                Sign in
              </Link>
              <Link href="/auth/register" className={cn("rounded-full", "bg-primary px-4 py-2 text-sm font-semibold text-white")}
              >
                Start Planning
              </Link>
            </>
          )}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-deep-brown lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-deep-brown">
                {link.title}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              {user ? (
                <Button variant="outline" size="sm" onClick={signOut}>
                  Sign out
                </Button>
              ) : (
                <>
                  <Link href="/auth/login" className="text-sm font-semibold text-deep-brown">
                    Sign in
                  </Link>
                  <Link href="/auth/register" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                    Start Planning
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
