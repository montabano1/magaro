// Single source of truth for client testimonials.
// `pullQuote` is the short version for compact placements (page bands, hero spots).
// `fullQuote` is what appears on the dedicated /testimonials page.

export type Testimonial = {
  id: string;
  category: "golf" | "journeys";
  initials: string;
  location: string;
  trip: string;
  pullQuote: string;
  fullQuote: string;
};

export const testimonials: Testimonial[] = [
  // ── Golf ────────────────────────────────────────────────────────────
  {
    id: "jz-first-golf",
    category: "golf",
    initials: "J.Z.",
    location: "Irvington, NY",
    trip: "First golf trip",
    pullQuote:
      "Having never planned a golf trip, I was unsure of many things. Peter had both firm answers and valued suggestions — from group dynamics to courses to hotels.",
    fullQuote:
      "Having never planned (or participated in) a golf trip, I was unsure of many things. Peter Magaro was a godsend. While my buddies kept thanking me for putting together such a great trip, I was shifting much of the credit to Peter. From advice on how to handle the group dynamic, to insight on where to go, what courses to play, and what hotels and restaurants to consider, Peter had both firm answers and valued suggestions. I highly recommend Remarkable Travel Design.",
  },
  {
    id: "ai-us-ireland",
    category: "golf",
    initials: "A.I.",
    location: "New York, NY",
    trip: "Repeat client · US & Ireland",
    pullQuote:
      "I've relied on Pete's meticulously planned golf trips several times, in the US and Ireland. Pete always delivers — golf, lodging and meals.",
    fullQuote:
      "I've relied on Pete's meticulously planned golf trips several times, in the US and Ireland. Pete always delivers with golf, lodging and meals. 100% recommend for that once-in-a-lifetime (or more) golf experience.",
  },
  {
    id: "jh-many-trips",
    category: "golf",
    initials: "J.H.",
    location: "Scarsdale, NY",
    trip: "Repeat client · Kohler, Pinehurst, Pebble",
    pullQuote:
      "Peter nails every detail; from accommodations to tee times to transportation and dining reservations, it's all taken care of.",
    fullQuote:
      "I've had the pleasure of going on many amazing golf trips over the years, planned by Peter Magaro. Locations include, but are not limited to: Kohler (Whistling Straits, Black Wolf Run, the Irish), Pinehurst, Kiawah Island, Sea Island, Streamsong, Pebble Beach and the Monterey Peninsula (Pebble, Spanish Bay, Spyglass, Poppy Hills). What makes these trips so special and enjoyable, other than the incredible locations themselves, is that Peter nails every detail; from accommodations, to tee times, to transportation and dining reservations, it's all taken care of. I can't recommend him highly enough.",
  },
  {
    id: "ji-pinehurst-50th",
    category: "golf",
    initials: "J.I.",
    location: "New York, NY",
    trip: "Pinehurst · 50th birthday",
    pullQuote:
      "Had a fabulous time celebrating a friend's 50th birthday at Pinehurst. Peter did an amazing job planning our stay.",
    fullQuote:
      "Had a fabulous time celebrating a friend's 50th birthday at Pinehurst. Peter did an amazing job planning our stay, which included accommodations, golf and all meals. Would highly recommend his services to everyone.",
  },
  {
    id: "sp-pinehurst-50th",
    category: "golf",
    initials: "S.P.",
    location: "Windham, NY",
    trip: "Pinehurst · 50th birthday",
    pullQuote:
      "Every detail was perfectly handled with a first-class touch. If you're looking for a first-class trip without having to think or worry — Peter is your guy.",
    fullQuote:
      "50th birthday trip to Pinehurst with a large group. Every detail was perfectly handled with a first-class touch. From accommodations to tee times to transportation to restaurants, everything had been thought of. If you're looking for a first-class trip without having to think or worry about the details — Peter is your guy.",
  },
  {
    id: "tv-eight-golfers",
    category: "golf",
    initials: "T.V.",
    location: "New York, NY",
    trip: "Buddies trip · 8 golfers",
    pullQuote:
      "Everything was set up ahead of time, no detail was missed. His planning let us focus on having fun and hitting the occasional good shot.",
    fullQuote:
      "Pete and his team put together an amazing golf trip for our group of 8 golfers. Everything — golf, hotel, flights, restaurants — was set up ahead of time, no detail was missed. His planning allowed us to focus on having fun and hitting the occasional good shot at one of the fantastic golf courses he selected for us.",
  },
  {
    id: "kc-wisconsin",
    category: "golf",
    initials: "K.C.",
    location: "Tarrytown, NY",
    trip: "Wisconsin · 12 golfers",
    pullQuote:
      "All we had to do was get on the plane and Pete handled everything else. Fantastic trip with no stress (other than the actual golf).",
    fullQuote:
      "Pete organized a great trip to Wisconsin for 12 people. We played Whistling Straits, Black Wolf Run (River and Meadows) and Erin Hills. Pete covered every detail from transportation, lodging and meals. All we had to do was get on the plane and Pete handled everything else. Fantastic trip with no stress (other than the actual golf).",
  },
  {
    id: "sw-multiple-trips",
    category: "golf",
    initials: "S.W.",
    location: "New York, NY",
    trip: "Repeat client · Kohler, Pebble, Streamsong",
    pullQuote:
      "Pete is very knowledgeable and detail-oriented. He wants you to have the best golf trips, and he delivers.",
    fullQuote:
      "Pete has planned multiple golf trips for us that have been fantastic. Kohler/Erin Hills as well as Pebble Beach and also Streamsong. Every detail was handled and organized — flights, hotels, tee times, restaurants and ground transportation. Pete is very knowledgeable and detail-oriented. He wants you to have the best golf trips, and he delivers.",
  },
  {
    id: "mw-pebble",
    category: "golf",
    initials: "M.W.",
    location: "New York, NY",
    trip: "Pebble Beach",
    pullQuote:
      "Pete is excellent as a guide and agent. He comes to this as a fine golfer and someone with fine attention to detail.",
    fullQuote:
      "Pete is excellent as a guide and agent. He comes to this as a fine golfer and someone with fine attention to detail. Highly recommended. Great for ideas and execution and everything in between.",
  },
  {
    id: "jc-whistling-straits",
    category: "golf",
    initials: "J.C.",
    location: "Irvington, NY",
    trip: "Repeat client · Whistling Straits",
    pullQuote:
      "He is meticulous with his planning. He is passionate about golf and travel. I look forward to my next one.",
    fullQuote:
      "I have been on a few trips Peter has organized. He is meticulous with his planning. He is passionate about golf and travel. I look forward to my next one.",
  },
  {
    id: "km-pinehurst-glasgow",
    category: "golf",
    initials: "K.M.",
    location: "Glasgow, Scotland",
    trip: "Pinehurst · International group",
    pullQuote:
      "From start to finish the entire trip was seamless. Everyone in the group loved it — all parts of the trip were Class A.",
    fullQuote:
      "From start to finish the entire trip was seamless — transport, travel, accommodation, food and of course the quality of the courses, the tee times. Everything worked perfectly. Everyone in the group loved it. All parts of the trip were Class A and a great value for the money.",
  },
  {
    id: "jd-multiple-locations",
    category: "golf",
    initials: "J.D.",
    location: "Briarcliff Manor, NY",
    trip: "Repeat client · Multiple destinations",
    pullQuote:
      "What really stood out was the seamless balance between activity and relaxation. Peter ensured we had enough time to enjoy each destination without ever feeling rushed.",
    fullQuote:
      "Peter Magaro has planned several trips for us across different locations, and each one has been absolutely outstanding. From start to finish, every detail was thoughtfully arranged — top-notch accommodations, smooth travel logistics, and perfectly timed transitions between each stage of the journey. What really stood out was the seamless balance between activity and relaxation. Peter ensured we had enough time to enjoy each destination without ever feeling rushed. His planning took the stress out of travel and let us truly enjoy the experience. We're already looking forward to the next adventure he plans for us.",
  },
  {
    id: "dc-pinehurst-sixteen",
    category: "golf",
    initials: "D.C.",
    location: "New York, NY",
    trip: "Pinehurst · 16 golfers",
    pullQuote:
      "Pete planned a golf trip for 16 golfers at Pinehurst. Every part of the trip was flawless. Best trip ever.",
    fullQuote:
      "Pete planned a golf trip for 16 golfers at Pinehurst. Every part of the trip was flawless and he made everything very easy. Best trip ever.",
  },

  // ── Journeys (Lisa) ─────────────────────────────────────────────────
  {
    id: "ed-banff-ski",
    category: "journeys",
    initials: "E.D.",
    location: "Norfolk, VA",
    trip: "Banff · 6-day ski trip",
    pullQuote:
      "I called her from the airport when my flight was cancelled, and she handled it with ease — set me up on an overnight in Calgary. I was free to simply enjoy myself.",
    fullQuote:
      "I asked Lisa to design a six-day ski trip to Banff, Canada, and she handled every detail seamlessly — the rental car, the condo (I really wanted a space with a kitchen and laundry), ski gear rentals. She even arranged an all-mountain lift ticket on my budget. I called her from the airport when my flight was cancelled, and she handled that with ease too, setting me up on an unexpected overnight in Calgary. Lisa also shared insider tips that made the trip even more enjoyable — the best of each of the three mountains for my ski level (Lake Louise, Sunshine Village, Mt. Norquay), helpful local apps, where to eat downtown and grocery shop, what to pack for Banff's weather, and where to find the shortest lift lines. Thanks to her thoughtful planning, I was free to simply enjoy myself without worrying about logistics — and ski trips have many logistics. My trip exceeded my expectations in every way. I left feeling happy, accomplished, and recharged.",
  },
  {
    id: "et-bryce-zion",
    category: "journeys",
    initials: "E.T.",
    location: "Mancos, CO",
    trip: "Bryce & Zion · Friends",
    pullQuote:
      "She booked exactly the type of place we were looking for — away from the crowds, quiet, still close to the park. So much more fun with Lisa in the background.",
    fullQuote:
      "Lisa is an incredibly detailed, astute, and knowledgeable travel designer. She planned a trip to Bryce and Zion National Park for my friends and me, and made sure to book exactly the type of place we were looking for — away from the crowds, quiet, and still close to the park. She made dining recommendations and reservations for every day, and accurately planned driving times and scenic routes between the two parks. We had a blast, and it was so much more fun with Lisa in the background to take the weight of planning off our shoulders and check in case we had any more questions. I will never do a big trip without Remarkable Travel Design as my travel planning partner.",
  },
  {
    id: "c-asbury-park",
    category: "journeys",
    initials: "C.",
    location: "Beacon, NY",
    trip: "Asbury Park · Solo getaway",
    pullQuote:
      "I reached out to Lisa during a stressful time at work. Almost immediately she came back with the perfect solution — a thoughtfully planned beach trip. Exactly what I needed.",
    fullQuote:
      "I reached out to Lisa during an especially stressful time at work, knowing I needed a quick escape. Almost immediately, she came back with the perfect solution: a thoughtfully planned beach trip to Asbury Park. It was exactly what I needed — nearby, relaxing, affordable, and refreshing. Lisa handled every detail seamlessly. From the hotel reservations to dinner plans and even a concert. She also shared insider tips that made the trip even more enjoyable — which stretch of beach was best, what to pack, where to park. Thanks to her thoughtful planning, I was free to simply enjoy myself without worrying about logistics. I left feeling recharged.",
  },
  {
    id: "as-charleston-sedona",
    category: "journeys",
    initials: "A.S.",
    location: "Harvard, MA",
    trip: "Charleston & Sedona · Girls' trips",
    pullQuote:
      "What stood out most was the pacing — all the downtime we needed to relax and catch up, while still experiencing the rich history, culture, and beauty of each place.",
    fullQuote:
      "I've taken two girls' trips with Remarkable — one to Charleston and one to Sedona — and both were incredible. What stood out most was the pacing: we had all the downtime we needed to relax and catch up with each other, while still experiencing the rich history, culture, and beauty of each place. Everything was thoughtfully planned and stress-free, which made the trips feel both fun and restorative. If you're looking for travel that blends authentic discovery with the ease of having every detail handled, I can't recommend Remarkable enough.",
  },
  {
    id: "bh-charleston-reunion",
    category: "journeys",
    initials: "B.H.",
    location: "Monroe, CT",
    trip: "Charleston · Girls' reunion",
    pullQuote:
      "She found us an incredible house, walkable to the historic district. Restaurant and rooftop recommendations were spot-on — not a single disappointing meal.",
    fullQuote:
      "Lisa made our Charleston girls' reunion absolutely perfect from start to finish. She found us an incredible house, walkable to the historic district and the French Quarter, so we could easily stroll to everything we wanted to see. The Fort Sumter and Slave Museum tours she arranged were fascinating. Her restaurant and rooftop bar recommendations and reservations were spot-on — we didn't have a single disappointing meal or drink. Thanks to Lisa's expert planning, we could just focus on catching up and enjoying our time together instead of worrying about the details.",
  },
];

export function getTestimonials(category?: "golf" | "journeys") {
  if (!category) return testimonials;
  return testimonials.filter((t) => t.category === category);
}

export function getTestimonialById(id: string) {
  return testimonials.find((t) => t.id === id);
}
