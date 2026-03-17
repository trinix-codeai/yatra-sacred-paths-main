export type Destination = {
  slug: string;
  name: string;
  region: string;
  state: string;
  religion: string;
  type: string;
  summary: string;
  description: string;
  highlights: string[];
  rituals: string[];
  bestTime: string;
  durationDays: number;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  images: string[];
  featured: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "varanasi-kashi",
    name: "Varanasi (Kashi)",
    region: "North",
    state: "Uttar Pradesh",
    religion: "Hindu",
    type: "River Ghats",
    summary: "Witness the eternal Ganga Aarti, ancient ghats, and timeless rituals on the banks of the Ganges.",
    description:
      "Varanasi is one of the world’s oldest living cities. It is a sacred confluence of devotion, learning, and river-side rituals that draw pilgrims seeking moksha.",
    highlights: ["Ganga Aarti at Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sunrise boat ride"],
    rituals: ["Ganga Aarti", "Pind Daan", "Kashi Vishwanath Darshan"],
    bestTime: "October to March",
    durationDays: 3,
    priceFrom: 8900,
    rating: 4.8,
    reviewCount: 1240,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/DASHASHWAMEDH_GHAT%2C_VARANASI.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/DASHASHWAMEDH_GHAT%2C_VARANASI.jpg",
    ],
    featured: true,
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    region: "North",
    state: "Uttarakhand",
    religion: "Hindu",
    type: "Himalayan Shrine",
    summary: "A high-altitude Jyotirlinga amid snow peaks and spiritual treks.",
    description:
      "Kedarnath is nestled in the Garhwal Himalayas and revered for its ancient Shiva temple. The journey combines devotion, endurance, and breathtaking alpine vistas.",
    highlights: ["Kedarnath Temple", "Vasuki Tal trek", "Triyuginarayan visit"],
    rituals: ["Abhishekam", "Rudrabhishek", "Evening Aarti"],
    bestTime: "May to June, September to October",
    durationDays: 5,
    priceFrom: 16800,
    rating: 4.7,
    reviewCount: 890,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kedarnath_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kedarnath_Temple.jpg",
    ],
    featured: true,
  },
  {
    slug: "rameswaram",
    name: "Rameswaram",
    region: "South",
    state: "Tamil Nadu",
    religion: "Hindu",
    type: "Temple",
    summary: "A sacred island temple town known for its 22 holy wells and Ramanathaswamy Temple.",
    description:
      "Rameswaram is a char dham destination with sacred waters, serene beaches, and the majestic Ramanathaswamy Temple corridors.",
    highlights: ["Ramanathaswamy Temple", "Dhanushkodi", "Agni Theertham"],
    rituals: ["Teertha Snanam", "Rudrabhishek", "Sandhya Aarti"],
    bestTime: "October to April",
    durationDays: 4,
    priceFrom: 12900,
    rating: 4.6,
    reviewCount: 640,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Ramanathaswamy_temple_corridor.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Ramanathaswamy_temple_corridor.JPG",
    ],
    featured: false,
  },
  {
    slug: "ajmer-sharif",
    name: "Ajmer Sharif",
    region: "North",
    state: "Rajasthan",
    religion: "Muslim",
    type: "Dargah",
    summary: "The revered Sufi shrine of Khwaja Moinuddin Chishti in Ajmer.",
    description:
      "Ajmer Sharif Dargah welcomes devotees of all faiths, offering Qawwali evenings and spiritual solace.",
    highlights: ["Chishti Dargah", "Qawwali night", "Ana Sagar Lake"],
    rituals: ["Chadar Offering", "Langar", "Urs Pilgrimage"],
    bestTime: "October to March",
    durationDays: 2,
    priceFrom: 7200,
    rating: 4.5,
    reviewCount: 520,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Ajmer_Sharif_Dargah.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Ajmer_Sharif_Dargah.jpg",
    ],
    featured: false,
  },
  {
    slug: "golden-temple",
    name: "Golden Temple",
    region: "North",
    state: "Punjab",
    religion: "Sikh",
    type: "Gurudwara",
    summary: "Harmandir Sahib is the spiritual center of Sikhism and a beacon of seva and peace.",
    description:
      "The Golden Temple is renowned for its shimmering sanctum, sacred sarovar, and community langar that feeds thousands daily.",
    highlights: ["Amrit Sarovar", "Langar Seva", "Heritage walk"],
    rituals: ["Amrit Vela", "Gurbani Kirtan", "Seva"],
    bestTime: "November to March",
    durationDays: 3,
    priceFrom: 9800,
    rating: 4.9,
    reviewCount: 1320,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Golden_Temple_%28Amritsar%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Golden_Temple_%28Amritsar%29.jpg",
    ],
    featured: true,
  },
  {
    slug: "bodh-gaya",
    name: "Bodh Gaya",
    region: "East",
    state: "Bihar",
    religion: "Buddhist",
    type: "Monastery",
    summary: "The place of Buddha’s enlightenment and a serene seat of meditation.",
    description:
      "Bodh Gaya is home to the Mahabodhi Temple and a global network of monasteries that host meditation retreats.",
    highlights: ["Mahabodhi Temple", "Bodhi Tree", "Meditation sessions"],
    rituals: ["Chanting", "Meditation", "Lamp offerings"],
    bestTime: "November to February",
    durationDays: 3,
    priceFrom: 8400,
    rating: 4.7,
    reviewCount: 410,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bodh_gaya_Mahabodhi_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bodh_gaya_Mahabodhi_Temple.jpg",
    ],
    featured: false,
  },
  {
    slug: "velankanni",
    name: "Velankanni",
    region: "South",
    state: "Tamil Nadu",
    religion: "Christian",
    type: "Basilica",
    summary: "The revered Basilica of Our Lady of Good Health on India’s southeastern coast.",
    description:
      "Velankanni blends coastal charm with spiritual traditions, drawing pilgrims to its Marian basilica and healing prayers.",
    highlights: ["Basilica visit", "Healing prayers", "Beach walk"],
    rituals: ["Mass", "Candlelight procession", "Novena prayers"],
    bestTime: "December to February",
    durationDays: 3,
    priceFrom: 9500,
    rating: 4.6,
    reviewCount: 300,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Our_Lady_of_Good_Health_Basilica%2C_Velankanni_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Our_Lady_of_Good_Health_Basilica%2C_Velankanni_1.jpg",
    ],
    featured: false,
  },
  {
    slug: "kamakhya",
    name: "Kamakhya",
    region: "Northeast",
    state: "Assam",
    religion: "Hindu",
    type: "Temple",
    summary: "A powerful Shakti Peeth atop Nilachal Hill with rich tantric traditions.",
    description:
      "Kamakhya Temple is one of the most significant Shakti Peeths, revered for its mystical rituals and panoramic views of the Brahmaputra.",
    highlights: ["Kamakhya Temple", "Brahmaputra views", "Nilachal Hills"],
    rituals: ["Ambubachi Mela", "Devi Darshan", "Temple Parikrama"],
    bestTime: "October to March",
    durationDays: 3,
    priceFrom: 11000,
    rating: 4.5,
    reviewCount: 260,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kamakhya_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kamakhya_Temple.jpg",
    ],
    featured: false,
  },
];
