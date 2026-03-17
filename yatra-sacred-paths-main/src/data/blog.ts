export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  coverImage: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rituals-of-varanasi",
    title: "Rituals of Varanasi: A Dawn-to-Dusk Journey",
    excerpt: "From sunrise boat rides to the mystical Ganga Aarti, explore the living rituals of Kashi.",
    content: [
      "Begin the day with a silent boat ride along the ghats as the city wakes to temple bells.",
      "Witness the intricate offerings, chants, and lamps that illuminate Dashashwamedh Ghat each evening.",
      "Balance your pilgrimage with quiet moments at lesser-known ghats and heritage lanes.",
    ],
    author: "Aditi Sharma",
    date: "2026-01-18",
    readingTime: "6 min read",
    category: "Rituals",
    tags: ["Varanasi", "Ganga Aarti", "Heritage"],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/3/3b/DASHASHWAMEDH_GHAT%2C_VARANASI.jpg",
  },
  {
    slug: "kedarnath-prep-guide",
    title: "Kedarnath Preparation Guide for First-Time Pilgrims",
    excerpt: "Pack smart and train right for a safe, comfortable yatra to Kedarnath.",
    content: [
      "Layered clothing, hydration salts, and a steady pace make all the difference at altitude.",
      "Plan acclimatization stops and keep essential medicines handy.",
      "Our guided teams ensure medical support and temple assistance at every step.",
    ],
    author: "Rohit Bansal",
    date: "2025-12-12",
    readingTime: "5 min read",
    category: "Preparation",
    tags: ["Kedarnath", "Himalayan", "Checklist"],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kedarnath_Temple.jpg",
  },
  {
    slug: "sacred-south-temples",
    title: "Sacred South: Temple Trails of Tamil Nadu",
    excerpt: "A curated trail of Dravidian marvels and coastal sanctuaries.",
    content: [
      "Madurai’s Meenakshi Temple sets the tone with vibrant gopurams and devotional music.",
      "Rameswaram offers holy baths and a serene island setting for reflection.",
      "Slow-paced itineraries are ideal for multi-generational travel.",
    ],
    author: "Meera Iyer",
    date: "2026-02-02",
    readingTime: "7 min read",
    category: "Destinations",
    tags: ["Tamil Nadu", "Rameswaram", "Madurai"],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Meenakshi_Temple_%286357522401%29.jpg",
  },
  {
    slug: "buddhist-circuit-mindful",
    title: "Mindful Stops on the Buddhist Circuit",
    excerpt: "Meditation-focused highlights across Bodh Gaya, Rajgir, and Sarnath.",
    content: [
      "Plan early morning meditations at the Bodhi Tree for a quiet, reflective experience.",
      "Include monastery visits for cultural immersion and dharma talks.",
      "Guided sessions help travelers deepen their understanding of the Buddha’s path.",
    ],
    author: "Tenzin Dorjee",
    date: "2025-11-28",
    readingTime: "6 min read",
    category: "Wellness",
    tags: ["Bodh Gaya", "Meditation", "Circuit"],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bodh_gaya_Mahabodhi_Temple.jpg",
  },
  {
    slug: "pilgrim-safety",
    title: "Pilgrim Safety Checklist for 2026",
    excerpt: "Essential tips to stay safe, healthy, and organized during your yatra.",
    content: [
      "Carry digital copies of your documents and store emergency contacts in your phone.",
      "Stay hydrated, avoid overexertion, and travel with a trusted group.",
      "Use verified accommodations and transport partners for peace of mind.",
    ],
    author: "Team Yatra",
    date: "2026-02-20",
    readingTime: "4 min read",
    category: "Travel Tips",
    tags: ["Safety", "Checklist", "Planning"],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Har_Ki_Pauri%2C_Haridwar.jpg",
  },
];
