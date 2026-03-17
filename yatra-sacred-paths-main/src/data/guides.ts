export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  sections: { title: string; points: string[] }[];
  coverImage: string;
};

export const guides: Guide[] = [
  {
    slug: "first-time-pilgrims",
    title: "First-Time Pilgrim Starter Guide",
    excerpt: "Everything you need to know before your first yatra.",
    sections: [
      {
        title: "Before You Go",
        points: ["Choose a comfortable itinerary", "Get medical clearance", "Book early for peak season"],
      },
      {
        title: "Packing Essentials",
        points: ["Layered clothing", "Refillable water bottle", "Comfortable walking shoes"],
      },
      {
        title: "On the Journey",
        points: ["Stay hydrated", "Follow guide instructions", "Respect local customs"],
      },
    ],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Har_Ki_Pauri%2C_Haridwar.jpg",
  },
  {
    slug: "family-yatra",
    title: "Family Yatra Planning",
    excerpt: "Plan seamless pilgrimages for all age groups.",
    sections: [
      {
        title: "Kid Friendly Tips",
        points: ["Shorter walking stretches", "Flexible meal plans", "Engaging storytelling"],
      },
      {
        title: "Senior Comfort",
        points: ["Wheelchair access", "Medical assistance", "Rest days"],
      },
    ],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/3/3b/DASHASHWAMEDH_GHAT%2C_VARANASI.jpg",
  },
  {
    slug: "responsible-pilgrimage",
    title: "Responsible Pilgrimage Practices",
    excerpt: "Leave every sacred place better than you found it.",
    sections: [
      {
        title: "Sustainable Habits",
        points: ["Carry reusable items", "Avoid single-use plastics", "Respect wildlife"],
      },
      {
        title: "Community Respect",
        points: ["Support local artisans", "Dress modestly", "Participate in seva"],
      },
    ],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Gangotri_Ganga_Temple.jpg",
  },
  {
    slug: "temple-etiquette",
    title: "Temple Etiquette Basics",
    excerpt: "Know the customs and traditions before your visit.",
    sections: [
      {
        title: "Dress & Conduct",
        points: ["Modest attire", "Silence in sanctums", "Remove footwear"],
      },
      {
        title: "Offerings",
        points: ["Use approved offerings", "Avoid flash photography", "Follow priest guidance"],
      },
    ],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/5/55/Jagannath_Temple%2C_Puri.jpg",
  },
];
