import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    text: "The Char Dham Yatra package was beautifully organized. Every detail was taken care of — from the helicopter ride to Kedarnath to the evening aarti at Badrinath. Truly life-changing!",
    rating: 5,
    trip: "Char Dham Yatra",
  },
  {
    name: "Rajesh Patel",
    location: "Ahmedabad",
    text: "As a senior citizen, I was worried about the logistics. But the team made everything so comfortable. The Jyotirlinga circuit was the best spiritual experience of my life.",
    rating: 5,
    trip: "Jyotirlinga Circuit",
  },
  {
    name: "Amita Singh",
    location: "Kolkata",
    text: "The Buddhist Circuit tour gave me such inner peace. The meditation sessions at Bodh Gaya and the guided tours were incredibly insightful. Highly recommended!",
    rating: 5,
    trip: "Buddhist Circuit",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Pilgrim Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Pilgrims Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-popover rounded-2xl p-8 shadow-card border border-border relative animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current text-gold" />
                ))}
              </div>
              <p className="font-body text-foreground/80 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-muted-foreground text-sm">
                  {t.location} · {t.trip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
