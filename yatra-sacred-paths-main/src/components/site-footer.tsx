import Link from "next/link";
import { footerLinks, siteConfig } from "@/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <h3 className="text-2xl font-display text-deep-brown">{siteConfig.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-deep-brown">{group.title}</h4>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-deep-brown">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>Built for modern pilgrims · Secure payments · 24/7 support</p>
        </div>
      </div>
    </footer>
  );
}
