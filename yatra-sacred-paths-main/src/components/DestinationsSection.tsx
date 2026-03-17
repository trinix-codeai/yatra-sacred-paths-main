import { Star, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    religion: "Sikh",
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Golden_Temple_%28Amritsar%29.jpg",
    bestTime: "Oct–Mar",
  },
  {
    name: "Kedarnath Temple",
    location: "Uttarakhand",
    religion: "Hindu",
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kedarnath_Temple.jpg",
    bestTime: "May–Jun, Sep–Oct",
  },
  {
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    religion: "Hindu",
    rating: 4.7,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Meenakshi_Temple_%286357522401%29.jpg",
    bestTime: "Oct–Mar",
  },
  {
    name: "Mahabodhi Temple",
    location: "Bodh Gaya, Bihar",
    religion: "Buddhist",
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bodh_gaya_Mahabodhi_Temple.jpg",
    bestTime: "Oct–Feb",
  },
  {
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    religion: "Hindu",
    rating: 4.7,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Jagannath_Temple%2C_Puri.jpg",
    bestTime: "Jul (Rath Yatra)",
  },
  {
    name: "Ramanathaswamy",
    location: "Rameswaram, TN",
    religion: "Hindu",
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Ramanathaswamy_temple_corridor.JPG",
    bestTime: "Oct–Apr",
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Sacred Destinations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Pilgrimage Sites
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Discover the most revered spiritual destinations across India, spanning all faiths and traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  {dest.religion}
                </span>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-foreground/70 backdrop-blur-sm text-primary-foreground text-xs font-body px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-current text-gold" />
                  {dest.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {dest.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm font-body mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-muted-foreground text-xs font-body">
                    <Clock className="w-3.5 h-3.5" />
                    Best: {dest.bestTime}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary font-body text-sm">
                    Explore →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="font-body rounded-xl">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
