"use client";

import * as React from "react";
import { Package, packageThemes } from "@/data";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { PackageCard } from "@/components/package-card";

export function PackagesExplorer({ packages }: { packages: Package[] }) {
  const [search, setSearch] = React.useState("");
  const [theme, setTheme] = React.useState("All");

  const filtered = React.useMemo(() => {
    return packages.filter((pkg) => {
      const matchesSearch = pkg.title.toLowerCase().includes(search.toLowerCase());
      const matchesTheme = theme === "All" || pkg.theme === theme;
      return matchesSearch && matchesTheme;
    });
  }, [packages, search, theme]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-lg shadow-black/5 md:grid-cols-[2fr_1fr]">
        <Input
          placeholder="Search yatra packages..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Select value={theme} onChange={(event) => setTheme(event.target.value)}>
          <option value="All">All Themes</option>
          {packageThemes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border/60 bg-white/60 p-10 text-center text-muted-foreground">
          No packages match your filters. Try another theme or keyword.
        </div>
      )}
    </div>
  );
}
