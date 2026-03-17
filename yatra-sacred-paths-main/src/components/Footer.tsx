import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-brown py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              🙏 Yatra India
            </h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed mb-4">
              Your trusted companion for spiritual journeys across India. Connecting devotees with sacred destinations since 2020.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["All Destinations", "Yatra Packages", "About Us", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/50 hover:text-primary font-body text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Yatras */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Popular Yatras</h4>
            <ul className="space-y-2">
              {["Char Dham", "Vaishno Devi", "Amarnath", "Kailash Mansarovar", "Shirdi"].map((yatra) => (
                <li key={yatra}>
                  <a href="#" className="text-primary-foreground/50 hover:text-primary font-body text-sm transition-colors">
                    {yatra}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-primary-foreground/50 font-body text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +91 1800-123-YATRA
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/50 font-body text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                namaste@yatraindia.com
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/50 font-body text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                New Delhi, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-sm">
            © 2026 Yatra India. All rights reserved. | Made with 🙏 for devotees worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
