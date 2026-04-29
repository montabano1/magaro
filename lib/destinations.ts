export type Destination = {
  slug: string;
  name: string;
  region: string;
  image: string;
  blurb: string;
};

export const destinations: Destination[] = [
  {
    slug: "pebble-beach",
    name: "Pebble Beach",
    region: "California, USA",
    image: "/photos/pebble-18.webp",
    blurb:
      "Tee times where the Pacific meets the fairway — paired with rooms at The Lodge.",
  },
  {
    slug: "ireland",
    name: "Old Head & Southwest Ireland",
    region: "Ireland",
    image: "/photos/old-head.webp",
    blurb:
      "Linksland from Old Head to Ballybunion, with a manor house and a peat fire to come home to.",
  },
  {
    slug: "st-lucia",
    name: "The Pitons",
    region: "St. Lucia, Caribbean",
    image: "/photos/pitons.jpg",
    blurb:
      "Twin volcanic peaks, a private hillside villa above Soufrière, and a sailboat for the day.",
  },
  {
    slug: "sand-valley",
    name: "Sand Valley",
    region: "Wisconsin, USA",
    image: "/photos/sand-valley.webp",
    blurb:
      "America's heath. Five courses including The Lido and Mammoth Dunes — walking only.",
  },
  {
    slug: "tuscany",
    name: "Tuscany",
    region: "Italy",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=85&auto=format&fit=crop",
    blurb:
      "Private villa stays with truffle hunts at dawn and quiet rooms in San Gimignano.",
  },
  {
    slug: "amalfi",
    name: "Amalfi Coast",
    region: "Italy",
    image:
      "https://images.unsplash.com/photo-1533165850316-2455d4129dde?w=1600&q=85&auto=format&fit=crop",
    blurb:
      "Cliffside palazzi, lemon-grove suppers, and a private boat to the secret coves of Capri.",
  },
];
