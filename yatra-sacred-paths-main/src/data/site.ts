export const siteConfig = {
  name: "Yatra Sacred Paths",
  description:
    "Discover and book spiritual pilgrimage tours to sacred sites across India. Char Dham, Jyotirlinga, Buddhist Circuit and more. Plan your yatra today!",
  url: "https://yatra-sacred-paths.com",
  contact: {
    phone: "+91 80000 12345",
    email: "support@yatrasacredpaths.com",
    address: "B-14, Temple Lane, Varanasi, Uttar Pradesh, India",
  },
};

export const navLinks = [
  { title: "Destinations", href: "/destinations" },
  { title: "Packages", href: "/packages" },
  { title: "Content", href: "/content" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Admin", href: "/admin" },
];

export const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "/destinations" },
      { label: "Packages", href: "/packages" },
      { label: "Pilgrimage Guides", href: "/content/guides" },
      { label: "Gallery", href: "/content/gallery" },
    ],
  },
  {
    title: "Plan",
    links: [
      { label: "Booking", href: "/packages" },
      { label: "Travel Insurance", href: "/content/guides" },
      { label: "FAQs", href: "/content/guides" },
      { label: "Support", href: "/content" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/content" },
      { label: "Blog", href: "/content/blog" },
      { label: "Careers", href: "/content" },
      { label: "Contact", href: "/content" },
    ],
  },
];

export const religions = ["Hindu", "Buddhist", "Sikh", "Muslim", "Christian", "Jain"];
export const regions = ["North", "South", "East", "West", "Central", "Northeast"];
export const destinationTypes = [
  "Temple",
  "River Ghats",
  "Himalayan Shrine",
  "Monastery",
  "Basilica",
  "Gurudwara",
  "Dargah",
];

export const packageThemes = ["Classic Yatra", "Luxury", "Family", "Senior-Friendly", "Walking Circuit"];
