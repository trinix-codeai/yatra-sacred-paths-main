export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Anita Kapoor",
    location: "Mumbai",
    quote: "The Char Dham circuit was perfectly organized. Every darshan felt effortless.",
    rating: 5,
  },
  {
    name: "Ravinder Singh",
    location: "Chandigarh",
    quote: "Golden Temple experience was serene. Loved the thoughtful seva opportunities.",
    rating: 5,
  },
  {
    name: "Lobsang Tsering",
    location: "Dharamshala",
    quote: "The Buddhist circuit included daily meditation sessions that were deeply moving.",
    rating: 4,
  },
  {
    name: "Maria Fernandes",
    location: "Goa",
    quote: "Velankanni trip was well paced for our family. Great stays and guidance.",
    rating: 5,
  },
];
