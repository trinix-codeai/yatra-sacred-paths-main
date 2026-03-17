import { Landmark, Mountain, Flower2, BookOpen, Compass, Sparkles } from "lucide-react";

const categories = [
  { icon: Landmark, name: "Char Dham", count: "4 sites", description: "Ultimate Hindu pilgrimage" },
  { icon: Sparkles, name: "Jyotirlinga", count: "12 sites", description: "Shiva's divine light" },
  { icon: Flower2, name: "Shakti Peeth", count: "51 sites", description: "Goddess power centres" },
  { icon: Mountain, name: "Himalayan Yatra", count: "30+ sites", description: "Sacred mountain shrines" },
  { icon: BookOpen, name: "Buddhist Circuit", count: "8 sites", description: "Path of enlightenment" },
  { icon: Compass, name: "Sikh Heritage", count: "10+ sites", description: "Gurudwara pilgrimage" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Explore By Category
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sacred Journeys For Every Faith
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="group bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 border border-border cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-saffron flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <cat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                {cat.name}
              </h3>
              <p className="text-muted-foreground text-xs font-body mb-1">{cat.description}</p>
              <span className="text-primary text-xs font-body font-semibold">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
