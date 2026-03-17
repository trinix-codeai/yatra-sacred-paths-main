export type PackageItineraryDay = {
  day: number;
  title: string;
  description: string;
  activities: string[];
};

export type Package = {
  slug: string;
  title: string;
  theme: string;
  durationDays: number;
  price: number;
  rating: number;
  reviewCount: number;
  overview: string;
  destinations: string[];
  startCities: string[];
  departures: string;
  maxGroupSize: number;
  inclusions: string[];
  exclusions: string[];
  itinerary: PackageItineraryDay[];
  images: string[];
  featured: boolean;
};

export const packages: Package[] = [
  {
    slug: "char-dham-yatra-2026",
    title: "Char Dham Sacred Circuit",
    theme: "Classic Yatra",
    durationDays: 10,
    price: 48500,
    rating: 4.8,
    reviewCount: 420,
    overview:
      "Complete the revered Char Dham pilgrimage with guided darshans, curated stays, and dedicated spiritual support.",
    destinations: ["Kedarnath", "Badrinath", "Gangotri", "Yamunotri"],
    startCities: ["Haridwar", "Dehradun"],
    departures: "Weekly departures from May to October",
    maxGroupSize: 18,
    inclusions: ["All transfers", "Premium stays", "Temple assistance", "Daily meals", "Medical support"],
    exclusions: ["Personal expenses", "Travel insurance", "Helicopter rides"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar",
        description: "Orientation, Ganga Aarti, and yatra briefing.",
        activities: ["Hotel check-in", "Evening Ganga Aarti", "Yatra kit distribution"],
      },
      {
        day: 2,
        title: "Haridwar to Yamunotri",
        description: "Drive to Barkot and trek to Yamunotri temple.",
        activities: ["Scenic drive", "Yamunotri darshan", "Thermal springs"] ,
      },
      {
        day: 3,
        title: "Yamunotri to Gangotri",
        description: "Proceed to Gangotri for rituals and evening prayers.",
        activities: ["Gangotri temple visit", "Bhagirathi aarti", "Local village walk"],
      },
      {
        day: 4,
        title: "Gangotri to Guptkashi",
        description: "Journey through alpine valleys to Guptkashi.",
        activities: ["Drive via Uttarkashi", "Temple stop", "Rest and acclimatization"],
      },
      {
        day: 5,
        title: "Kedarnath Darshan",
        description: "Trek or helicopter ride to Kedarnath.",
        activities: ["Kedarnath temple aarti", "Bhajan evening", "Local exploration"],
      },
      {
        day: 6,
        title: "Kedarnath to Badrinath",
        description: "Drive to Badrinath through Himalayan passes.",
        activities: ["Vishnuprayag stop", "Evening darshan", "Meditation session"],
      },
      {
        day: 7,
        title: "Badrinath Rituals",
        description: "Morning rituals and local sightseeing.",
        activities: ["Tapt Kund dip", "Mana village visit", "Evening aarti"],
      },
      {
        day: 8,
        title: "Badrinath to Rishikesh",
        description: "Return journey with meditation stop.",
        activities: ["River rafting (optional)", "Ashram visit", "Ganga view"],
      },
      {
        day: 9,
        title: "Rishikesh Wellness Day",
        description: "Yoga, wellness therapies, and market visit.",
        activities: ["Morning yoga", "Ayurvedic therapy", "Local market"],
      },
      {
        day: 10,
        title: "Departure",
        description: "Conclude the yatra with blessings and transfers.",
        activities: ["Breakfast", "Airport transfer", "Farewell"] ,
      },
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kedarnath_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Badrinath_temple.jpg",
    ],
    featured: true,
  },
  {
    slug: "kashi-prayagraj-sangam",
    title: "Kashi & Prayagraj Sacred Confluence",
    theme: "Family",
    durationDays: 5,
    price: 19800,
    rating: 4.7,
    reviewCount: 300,
    overview:
      "Experience the spiritual rhythm of Varanasi and the Triveni Sangam with river rituals and guided heritage walks.",
    destinations: ["Varanasi", "Prayagraj"],
    startCities: ["Varanasi"],
    departures: "Daily departures",
    maxGroupSize: 20,
    inclusions: ["Hotel stays", "Boat rides", "Local guides", "Breakfast"],
    exclusions: ["Flight tickets", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Varanasi",
        description: "Check-in and evening Ganga Aarti.",
        activities: ["Hotel check-in", "Ganga Aarti", "Heritage lane walk"],
      },
      {
        day: 2,
        title: "Varanasi Rituals",
        description: "Morning boat ride and temple darshan.",
        activities: ["Sunrise boat ride", "Kashi Vishwanath", "Sarnath visit"],
      },
      {
        day: 3,
        title: "Varanasi to Prayagraj",
        description: "Drive to Prayagraj and visit Sangam.",
        activities: ["Triveni Sangam rituals", "Anand Bhawan", "Evening aarti"],
      },
      {
        day: 4,
        title: "Prayagraj Heritage",
        description: "Temple visit and city exploration.",
        activities: ["Hanuman Mandir", "Local bazaar", "Cultural show"],
      },
      {
        day: 5,
        title: "Departure",
        description: "Transfers and farewell.",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/DASHASHWAMEDH_GHAT%2C_VARANASI.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Triveni_Sangam_in_Prayagraj.jpg",
    ],
    featured: true,
  },
  {
    slug: "buddhist-circuit",
    title: "Buddhist Enlightenment Circuit",
    theme: "Walking Circuit",
    durationDays: 7,
    price: 26500,
    rating: 4.6,
    reviewCount: 210,
    overview:
      "Trace the footsteps of the Buddha across Bodh Gaya, Sarnath, and Kushinagar with mindful experiences.",
    destinations: ["Bodh Gaya", "Sarnath", "Kushinagar"],
    startCities: ["Patna"],
    departures: "Twice monthly",
    maxGroupSize: 16,
    inclusions: ["Meditation sessions", "Guided tours", "Accommodation", "Breakfast"],
    exclusions: ["Flights", "Visa fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Bodh Gaya",
        description: "Welcome and introduction to meditation.",
        activities: ["Hotel check-in", "Meditation session", "Temple walk"],
      },
      {
        day: 2,
        title: "Mahabodhi Temple",
        description: "Deep dive into the sacred precincts.",
        activities: ["Mahabodhi darshan", "Monastery visits", "Evening chanting"],
      },
      {
        day: 3,
        title: "Bodh Gaya to Rajgir",
        description: "Explore Vulture Peak and hot springs.",
        activities: ["Rajgir cable car", "Vulture Peak", "Hot springs"],
      },
      {
        day: 4,
        title: "Nalanda Excursion",
        description: "Visit the ancient university ruins.",
        activities: ["Nalanda ruins", "Museum", "Local village visit"],
      },
      {
        day: 5,
        title: "Sarnath",
        description: "The first sermon site and stupa trails.",
        activities: ["Dhamek Stupa", "Chaukhandi stupa", "Museum"],
      },
      {
        day: 6,
        title: "Kushinagar",
        description: "Parinirvana temple and reflection session.",
        activities: ["Parinirvana temple", "Meditation", "Candle offering"],
      },
      {
        day: 7,
        title: "Departure",
        description: "Return transfers.",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bodh_gaya_Mahabodhi_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Dhamek_stupa%2C_Sarnath.jpg",
    ],
    featured: false,
  },
  {
    slug: "golden-triangle-sikh",
    title: "Sikh Heritage Triangle",
    theme: "Classic Yatra",
    durationDays: 4,
    price: 15500,
    rating: 4.9,
    reviewCount: 180,
    overview:
      "Explore Amritsar, Anandpur Sahib, and Chandigarh with Gurudwara darshans and cultural immersion.",
    destinations: ["Golden Temple", "Anandpur Sahib", "Chandigarh"],
    startCities: ["Amritsar"],
    departures: "Weekly departures",
    maxGroupSize: 22,
    inclusions: ["Guided darshan", "Heritage walk", "Breakfast"],
    exclusions: ["Flights", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Amritsar",
        description: "Golden Temple and evening kirtan.",
        activities: ["Golden Temple darshan", "Langar seva", "Local bazaar"],
      },
      {
        day: 2,
        title: "Amritsar Heritage",
        description: "Visit Jallianwala Bagh and Wagah ceremony.",
        activities: ["Heritage walk", "Wagah border", "Cultural dinner"],
      },
      {
        day: 3,
        title: "Anandpur Sahib",
        description: "Journey to Anandpur Sahib and Takht Sri Keshgarh.",
        activities: ["Takht visit", "Museum", "Evening ardas"],
      },
      {
        day: 4,
        title: "Departure",
        description: "Return transfers.",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Golden_Temple_%28Amritsar%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Takht_Sri_Kesgarh_Sahib_-_Anandpur_Sahib.jpg",
    ],
    featured: false,
  },
  {
    slug: "sacred-south",
    title: "Sacred South Temple Trail",
    theme: "Senior-Friendly",
    durationDays: 6,
    price: 24800,
    rating: 4.6,
    reviewCount: 240,
    overview:
      "A gentle paced journey across Rameswaram, Madurai, and Tiruchirappalli with comfort stays.",
    destinations: ["Rameswaram", "Madurai", "Trichy"],
    startCities: ["Madurai"],
    departures: "Every 10 days",
    maxGroupSize: 20,
    inclusions: ["AC transfers", "Temple assistance", "Breakfast & dinner"],
    exclusions: ["Flights", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Madurai Arrival",
        description: "Check-in and Meenakshi temple visit.",
        activities: ["Hotel check-in", "Meenakshi Temple", "Local markets"],
      },
      {
        day: 2,
        title: "Madurai to Rameswaram",
        description: "Drive to Rameswaram and temple rituals.",
        activities: ["Ramanathaswamy darshan", "Agni Theertham", "Evening aarti"],
      },
      {
        day: 3,
        title: "Rameswaram Sacred Wells",
        description: "Teertha snanam and Dhanushkodi excursion.",
        activities: ["Holy wells", "Dhanushkodi", "Coastal sunset"],
      },
      {
        day: 4,
        title: "Trichy",
        description: "Visit Rockfort and Srirangam temple.",
        activities: ["Rockfort", "Srirangam", "Rituals"],
      },
      {
        day: 5,
        title: "Kumbakonam Detour",
        description: "Temple cluster exploration.",
        activities: ["Darasuram", "Mahamaham tank", "Temple walk"],
      },
      {
        day: 6,
        title: "Departure",
        description: "Return transfers.",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Ramanathaswamy_temple_corridor.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Meenakshi_Temple_%286357522401%29.jpg",
    ],
    featured: true,
  },
];
