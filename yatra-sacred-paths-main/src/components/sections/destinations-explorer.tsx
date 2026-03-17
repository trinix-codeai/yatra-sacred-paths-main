"use client";

import * as React from "react";
import { Destination, destinationTypes, regions, religions } from "@/data";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { DestinationCard } from "@/components/destination-card";

export function DestinationsExplorer({ destinations }: { destinations: Destination[] }) {
  const [search, setSearch] = React.useState("");
  const [religion, setReligion] = React.useState("All");
  const [region, setRegion] = React.useState("All");
  const [type, setType] = React.useState("All");

  const filtered = React.useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch = destination.name.toLowerCase().includes(search.toLowerCase());
      const matchesReligion = religion === "All" || destination.religion === religion;
      const matchesRegion = region === "All" || destination.region === region;
      const matchesType = type === "All" || destination.type === type;
      return matchesSearch && matchesReligion && matchesRegion && matchesType;
    });
  }, [destinations, search, religion, region, type]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-lg shadow-black/5 md:grid-cols-[2fr_repeat(3,1fr)]">
        <Input
          placeholder="Search destinations, temples, ghats..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Select value={religion} onChange={(event) => setReligion(event.target.value)}>
          <option value="All">All Religions</option>
          {religions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select value={region} onChange={(event) => setRegion(event.target.value)}>
          <option value="All">All Regions</option>
          {regions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="All">All Types</option>
          {destinationTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border/60 bg-white/60 p-10 text-center text-muted-foreground">
          No destinations match your filters. Try adjusting your search.
        </div>
      )}
    </div>
  );
}
