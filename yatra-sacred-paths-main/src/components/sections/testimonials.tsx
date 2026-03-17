import { testimonials } from "@/data";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Pilgrim Voices</p>
          <h2 className="section-title">Stories from the sacred path</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white/80">
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
                <div>
                  <p className="text-sm font-semibold text-deep-brown">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
