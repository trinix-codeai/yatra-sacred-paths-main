import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage =
  "https://upload.wikimedia.org/wikipedia/commons/3/3b/DASHASHWAMEDH_GHAT%2C_VARANASI.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p
          className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Discover Sacred India
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Your Spiritual
          <br />
          <span className="text-gradient-saffron">Journey Awaits</span>
        </h1>
        <p
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Explore ancient temples, sacred rivers, and divine destinations across India.
          Plan your yatra with curated pilgrimage packages.
        </p>

        {/* Search Bar */}
        <div
          className="max-w-3xl mx-auto bg-popover/95 backdrop-blur-md rounded-2xl p-3 shadow-elevated animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-xl bg-muted">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="bg-transparent w-full text-foreground placeholder:text-muted-foreground font-body outline-none"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted md:w-48">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                placeholder="When?"
                className="bg-transparent w-full text-foreground placeholder:text-muted-foreground font-body outline-none"
              />
            </div>
            <Button variant="secondary" size="lg" className="rounded-xl gap-2">
              <Search className="w-5 h-5" />
              Search
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { value: "500+", label: "Sacred Sites" },
            { value: "100+", label: "Yatra Packages" },
            { value: "50K+", label: "Happy Pilgrims" },
            { value: "28", label: "States Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-primary-foreground/60 font-body text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
