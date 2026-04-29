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
    slug: "amalfi",
    name: "Amalfi Coast",
    region: "Italy",
    image: "/photos/amalfi.jpg",
    blurb:
      "Cliffside palazzi, lemon-grove suppers, and a private boat to the secret coves of Capri.",
  },
  {
    slug: "rome",
    name: "Rome & The Tuscan Hills",
    region: "Italy",
    image: "/photos/rome.jpg",
    blurb:
      "A week between the Eternal City and a private villa in the cypress hills above Pienza.",
  },
];
