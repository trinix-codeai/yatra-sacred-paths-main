import { Clock, MapPin, Users, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Char Dham Yatra",
    description: "Visit Yamunotri, Gangotri, Kedarnath & Badrinath in one sacred journey.",
    duration: "12 Days / 11 Nights",
    groupSize: "15–25 pilgrims",
    price: "₹28,999",
    originalPrice: "₹35,000",
    locations: "Uttarakhand",
    highlights: ["Helicopter option", "Meals included", "Expert guide"],
    tag: "Most Popular",
  },
  {
    title: "Jyotirlinga Circuit",
    description: "Experience the divine energy of all 12 Jyotirlingas across India.",
    duration: "18 Days / 17 Nights",
    groupSize: "10–20 pilgrims",
    price: "₹45,999",
    originalPrice: "₹55,000",
    locations: "Pan India",
    highlights: ["AC transport", "3-star hotels", "All darshans"],
    tag: "Premium",
  },
  {
    title: "Buddhist Circuit",
    description: "Trace the footsteps of Lord Buddha from Lumbini to Kushinagar.",
    duration: "8 Days / 7 Nights",
    groupSize: "10–15 pilgrims",
    price: "₹18,999",
    originalPrice: "₹22,000",
    locations: "UP, Bihar, Nepal",
    highlights: ["Meditation sessions", "Buddhist monks", "Cultural tours"],
    tag: "Spiritual",
  },
];

const PackagesSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Curated Experiences
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Yatra Packages
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Hassle-free pilgrimage tours with accommodation, meals, transport, and expert guidance included.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={pkg.title}
              className="bg-popover rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-saffron text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {pkg.tag}
                  </span>
                  <div className="text-right">
                    <span className="text-muted-foreground line-through text-sm font-body">
                      {pkg.originalPrice}
                    </span>
                    <div className="text-2xl font-display font-bold text-foreground flex items-center">
                      {pkg.price}
                    </div>
                    <span className="text-muted-foreground text-xs font-body">per person</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-5">
                  {pkg.description}
                </p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <Clock className="w-4 h-4 text-primary" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <Users className="w-4 h-4 text-primary" />
                    {pkg.groupSize}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <MapPin className="w-4 h-4 text-primary" />
                    {pkg.locations}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-muted text-muted-foreground text-xs font-body px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button variant="hero" size="lg" className="w-full rounded-xl font-body">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
