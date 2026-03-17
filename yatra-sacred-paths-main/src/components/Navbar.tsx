import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-bold text-primary-foreground">
            🙏 Yatra India
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Destinations", "Packages", "About", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-foreground/70 hover:text-primary font-body text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+911800123" className="flex items-center gap-1 text-primary-foreground/70 font-body text-sm">
              <Phone className="w-4 h-4" />
              1800-123-YATRA
            </a>
            <Button variant="hero" size="sm" className="rounded-lg font-body">
              Book Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {["Destinations", "Packages", "About", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary font-body text-sm py-2 transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button variant="hero" size="sm" className="rounded-lg font-body mt-2 w-fit">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
