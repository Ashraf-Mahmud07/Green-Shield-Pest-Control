import type { ServiceArea } from "@/types";

/** City / service-area pages. Each entry renders through the shared area template. */
export const serviceAreas: ServiceArea[] = [
  {
    slug: "austin",
    city: "Austin",
    state: "TX",
    headline: "Austin's Hometown Pest Control Experts",
    intro:
      "From Barton Hills bungalows to Mueller new-builds, GreenShield has protected Austin homes and businesses since 2009. Our technicians live here, know which neighborhoods back up to greenbelt scorpion habitat, and time treatments to Austin's unique urban pest pressure.",
    localPests: [
      { name: "Fire Ants", note: "Thrive in Austin lawns and parkland; peak swarming after spring rains." },
      { name: "Roof Rats", note: "Heavy pressure in tree-canopied central neighborhoods like Hyde Park and Tarrytown." },
      { name: "Mosquitoes", note: "Creek corridors and the Lady Bird Lake basin drive season-long activity." },
      { name: "Scorpions", note: "Common along the western greenbelt edges — Barton Creek, Travis Country." },
      { name: "Subterranean Termites", note: "Among the highest pressure zones in Texas; annual inspection strongly advised." },
    ],
    services: ["ant-control", "rodent-control", "mosquito-control", "termite-control", "cockroach-control", "wildlife-control"],
    benefits: [
      "Same-day service across all Austin ZIP codes",
      "Technicians based in-city — average response under 4 hours",
      "Greenbelt-edge scorpion and snake expertise",
      "Trusted by 20,000+ Austin households",
    ],
    review: {
      quote:
        "Two other companies couldn't solve our roof rat problem in Hyde Park. GreenShield found entry points at the roofline the others never checked, sealed everything, and we haven't heard a sound in over a year.",
      author: "Melissa T.",
      neighborhood: "Hyde Park",
    },
    faqs: [
      {
        question: "Do you service all of Austin?",
        answer:
          "Yes — every ZIP code inside city limits plus the surrounding metro, from Circle C to Wells Branch. Most Austin appointments are available same-day or next-day.",
      },
      {
        question: "Are scorpions really that common in Austin?",
        answer:
          "Along the western hills and greenbelt edges, yes. Striped bark scorpions enter homes through gaps as thin as a credit card. Our perimeter program includes scorpion-specific treatments for west Austin homes.",
      },
    ],
    zipCodes: ["78701", "78703", "78704", "78745", "78748", "78749", "78751", "78757", "78759"],
    metaDescription:
      "Pest control in Austin, TX — same-day local service for ants, rodents, termites, mosquitoes & more. 4.9★ rated, licensed & guaranteed since 2009.",
  },
  {
    slug: "round-rock",
    city: "Round Rock",
    state: "TX",
    headline: "Round Rock Pest Control You Can Count On",
    intro:
      "Round Rock's rapid growth means new construction backing up to farmland and creek corridors — a perfect storm for displaced rodents, fire ants, and termites exploring fresh foundations. GreenShield's Round Rock team specializes in protecting both established Round Rock neighborhoods and brand-new builds.",
    localPests: [
      { name: "Fire Ants", note: "Former ranchland soil carries dense mound populations into new subdivisions." },
      { name: "Field Mice & Rats", note: "Construction displacement pushes rodents into adjacent finished homes." },
      { name: "Termites", note: "New slabs without pre-treatment are prime targets within 3–5 years." },
      { name: "Wasps", note: "New-home eaves and covered patios see heavy spring nest founding." },
    ],
    services: ["ant-control", "rodent-control", "termite-control", "wasp-removal", "preventive-pest-control"],
    benefits: [
      "New-construction protection specialists",
      "Builder warranty inspection documentation",
      "Same-week service throughout Williamson County",
      "Neighborhood pricing for HOA group service",
    ],
    review: {
      quote:
        "We moved into a new build off University Blvd and had fire ant mounds everywhere within a month. GreenShield treated the whole yard, and two years later we're still mound-free.",
      author: "Derek W.",
      neighborhood: "Paloma Lake",
    },
    faqs: [
      {
        question: "My home is brand new — do I really need pest control?",
        answer:
          "New construction disturbs established pest habitat, and fresh landscaping plus moist new sod actively attracts ants and termites. The first two years are actually the highest-risk window for new homes.",
      },
      {
        question: "Do you offer HOA or neighborhood group rates in Round Rock?",
        answer:
          "Yes — when multiple neighbors sign up on the same service route, everyone saves. Ask about our neighborhood program when you call.",
      },
    ],
    zipCodes: ["78664", "78665", "78681"],
    metaDescription:
      "Round Rock, TX pest control — fire ant, rodent & termite specialists for new builds and established homes. Licensed, local & guaranteed.",
  },
  {
    slug: "cedar-park",
    city: "Cedar Park",
    state: "TX",
    headline: "Cedar Park & Leander Pest Protection",
    intro:
      "Cedar Park sits where Hill Country limestone meets suburban lawns — which means scorpions, spiders, and snakes alongside the usual suburban ant and rodent pressure. Our Cedar Park technicians are Hill Country pest specialists first and foremost.",
    localPests: [
      { name: "Striped Bark Scorpions", note: "Limestone terrain makes Cedar Park one of the metro's top scorpion zones." },
      { name: "Brown Recluse Spiders", note: "Garages and attics in established neighborhoods are prime harborage." },
      { name: "Rock Squirrels & Rats", note: "Stone landscaping and greenbelts sustain steady rodent pressure." },
      { name: "Carpenter Ants", note: "Mature oaks in older sections support large colonies." },
    ],
    services: ["spider-control", "rodent-control", "ant-control", "snake-removal", "preventive-pest-control", "wildlife-control"],
    benefits: [
      "Hill Country scorpion treatment expertise",
      "Snake removal with rapid response times",
      "Serving Cedar Park, Leander & Brushy Creek",
      "Quarterly plans tuned to limestone-terrain pests",
    ],
    review: {
      quote:
        "Scorpions in the bathtub twice a month until we called GreenShield. Their tech explained exactly how they were getting in, sealed the weep holes properly, and treated the perimeter. Zero scorpions since.",
      author: "Amanda R.",
      neighborhood: "Buttercup Creek",
    },
    faqs: [
      {
        question: "Why does Cedar Park have so many scorpions?",
        answer:
          "Striped bark scorpions live naturally in the limestone and leaf litter of the Hill Country. Development pushes them toward homes, where weep holes and door gaps offer easy entry. Targeted perimeter and void treatments are extremely effective.",
      },
      {
        question: "Do you cover Leander and Liberty Hill too?",
        answer:
          "Yes — our Cedar Park route covers Leander, Brushy Creek, and most of Liberty Hill with the same response times.",
      },
    ],
    zipCodes: ["78613", "78641", "78630"],
    metaDescription:
      "Cedar Park & Leander pest control — Hill Country scorpion, spider & rodent specialists. Local techs, same-week service, pest-free guarantee.",
  },
  {
    slug: "georgetown",
    city: "Georgetown",
    state: "TX",
    headline: "Georgetown's Trusted Local Exterminators",
    intro:
      "From the historic square's century-old buildings to Sun City's manicured neighborhoods, Georgetown properties face everything from old-structure rodent pressure to open-land fire ants. GreenShield brings the right program to each — with the courteous, on-time service Georgetown expects.",
    localPests: [
      { name: "Rodents", note: "Historic downtown structures offer generations-old entry routes." },
      { name: "Fire Ants", note: "Open terrain and irrigated lawns keep mound pressure high." },
      { name: "Termites", note: "Older pier-and-beam homes near downtown carry elevated risk." },
      { name: "Mosquitoes", note: "The San Gabriel River corridor drives summer-long activity." },
    ],
    services: ["rodent-control", "ant-control", "termite-control", "mosquito-control", "preventive-pest-control"],
    benefits: [
      "Historic-structure rodent exclusion experience",
      "Senior-friendly scheduling and clear communication",
      "Sun City resident discounts",
      "Full Williamson County coverage",
    ],
    review: {
      quote:
        "GreenShield has serviced our Sun City home quarterly for four years. Always on time, always a phone call ahead, and we simply never see bugs. Exactly what you want from a service company.",
      author: "Carol & Jim H.",
      neighborhood: "Sun City",
    },
    faqs: [
      {
        question: "Can you treat older pier-and-beam homes near downtown Georgetown?",
        answer:
          "Yes — pier-and-beam structures are actually easier to inspect and treat thoroughly than slabs. Our technicians are experienced with the crawl-space access and exclusion work these homes need.",
      },
      {
        question: "Do you offer discounts for Sun City residents?",
        answer:
          "We do — ask about our Sun City neighborhood rate when scheduling. Many of your neighbors are already on our routes.",
      },
    ],
    zipCodes: ["78626", "78628", "78633"],
    metaDescription:
      "Georgetown, TX pest control — rodents, fire ants, termites & mosquitoes. Historic home specialists & Sun City discounts. Licensed & insured.",
  },
  {
    slug: "pflugerville",
    city: "Pflugerville",
    state: "TX",
    headline: "Pflugerville Pest Control, Fast & Guaranteed",
    intro:
      "Pflugerville's blend of established neighborhoods, new development, and blackland prairie soil creates persistent ant, rodent, and roach pressure. GreenShield's Pflugerville route runs daily — which means fast scheduling and technicians who know your neighborhood's specific pest patterns.",
    localPests: [
      { name: "Odorous House Ants", note: "Blackland clay soil shifts drive ants indoors after every heavy rain." },
      { name: "German Cockroaches", note: "Steady pressure in dense multifamily and rental housing." },
      { name: "House Mice", note: "Field-adjacent subdivisions see waves each fall." },
      { name: "Mosquitoes", note: "Retention ponds and creek tributaries breed steady summer populations." },
    ],
    services: ["ant-control", "cockroach-control", "rodent-control", "mosquito-control", "preventive-pest-control"],
    benefits: [
      "Daily routes mean next-day appointments",
      "Rental & multifamily property programs",
      "Rain-triggered ant response service",
      "Serving Pflugerville, Hutto & Manor",
    ],
    review: {
      quote:
        "Every time it rained hard, ants poured into our kitchen. GreenShield explained the clay-soil issue, treated inside and out, and now heavy rain is just rain. Should have called them two years earlier.",
      author: "Priya S.",
      neighborhood: "Falcon Pointe",
    },
    faqs: [
      {
        question: "Why do ants invade Pflugerville homes after rain?",
        answer:
          "Blackland prairie clay swells when saturated, flooding shallow ant colonies and driving them into the nearest dry structure. Perimeter treatments with non-repellent products intercept them before they reach the kitchen.",
      },
      {
        question: "Do you service rental properties and duplexes?",
        answer:
          "Yes — we work with owners, property managers, and tenants across Pflugerville, with documentation for lease compliance and unit-to-unit treatment coordination where needed.",
      },
    ],
    zipCodes: ["78660", "78664", "78653"],
    metaDescription:
      "Pflugerville, TX pest control — ants, roaches, rodents & mosquitoes handled fast. Next-day service, rental property programs, guaranteed results.",
  },
  {
    slug: "lakeway",
    city: "Lakeway",
    state: "TX",
    headline: "Lakeway & Bee Cave Pest Specialists",
    intro:
      "Lake Travis luxury homes sit in prime Hill Country wildlife habitat — which means scorpions, snakes, raccoons, and carpenter ants come with the view. GreenShield's Lakeway service combines discreet, estate-quality service with serious wildlife and Hill Country pest expertise.",
    localPests: [
      { name: "Scorpions", note: "Limestone bluffs and landscape boulders are natural harborage." },
      { name: "Rat Snakes & Copperheads", note: "Wooded lots and water proximity bring regular encounters." },
      { name: "Raccoons & Ringtails", note: "Attic intrusions are common in canyon-edge homes." },
      { name: "Carpenter Ants", note: "Mature oak canopies support large structural colonies." },
    ],
    services: ["wildlife-control", "snake-removal", "spider-control", "ant-control", "mosquito-control", "preventive-pest-control"],
    benefits: [
      "Estate and luxury home service standards",
      "Wildlife exclusion for canyon-edge properties",
      "Discreet unmarked service available",
      "Serving Lakeway, Bee Cave & The Hills",
    ],
    review: {
      quote:
        "After a copperhead on the patio and a raccoon in the attic in the same month, GreenShield handled both — removal, exclusion, and a prevention plan. Professional from first call to final walkthrough.",
      author: "Steven M.",
      neighborhood: "Rough Hollow",
    },
    faqs: [
      {
        question: "Can you make our property less attractive to snakes?",
        answer:
          "Substantially, yes. Rodent control removes their food source, and habitat modifications — sealed gaps, managed ground cover, cleared debris — remove shelter. Our Lakeway customers see dramatic reductions in encounters.",
      },
      {
        question: "Do you offer service without visible branding?",
        answer:
          "Yes — unmarked vehicle service is available on request at no extra charge, and our technicians follow gate and staff protocols for managed communities.",
      },
    ],
    zipCodes: ["78734", "78738", "78669"],
    metaDescription:
      "Lakeway & Bee Cave pest control — scorpions, snakes, wildlife & luxury home service on Lake Travis. Discreet, licensed & guaranteed.",
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
