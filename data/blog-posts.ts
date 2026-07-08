import type { BlogPost } from "@/types";

export const blogCategories = [
  "Pest Guides",
  "Seasonal Tips",
  "Homeowners",
  "Commercial",
  "Health & Safety",
  "News",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-know-if-you-have-termites",
    title: "How to Know If You Have Termites: 7 Warning Signs Homeowners Miss",
    category: "Pest Guides",
    excerpt:
      "Termites cause $5 billion in damage yearly — almost all of it before homeowners notice a thing. Here are the early signs that matter, and the ones that mean call today.",
    date: "2026-06-24",
    readMinutes: 7,
    author: { name: "Miguel Santos", role: "Termite Division Lead" },
    imageAlt: "Close-up of termite mud tubes running up a concrete foundation wall",
    featured: true,
    tags: ["termites", "inspection", "home protection"],
    content: [
      {
        paragraphs: [
          "Termites are called the silent destroyer for a reason: a mature colony can feed on your home for two to five years before the first visible sign appears. By then, the average repair bill tops $3,000 — and your homeowner's insurance almost certainly won't cover a cent of it.",
          "The good news is that termites do leave evidence, if you know where to look. After seventeen years and tens of thousands of Central Texas inspections, these are the seven signs our inspectors check first.",
        ],
      },
      {
        heading: "1. Mud Tubes on the Foundation",
        paragraphs: [
          "Subterranean termites — the kind responsible for the vast majority of Texas damage — must stay moist to survive. They build pencil-width mud highways from the soil up your foundation to reach wood. Check your slab edges, garage corners, and plumbing penetrations. An active tube, broken open, reveals cream-colored workers inside.",
        ],
      },
      {
        heading: "2. Hollow-Sounding Wood",
        paragraphs: [
          "Termites eat wood from the inside out, leaving a thin veneer of paint or surface grain. Tap baseboards, window sills, and door frames with a screwdriver handle: healthy wood sounds solid, infested wood sounds papery. In advanced cases, the screwdriver punches straight through.",
        ],
      },
      {
        heading: "3. Discarded Wings on Window Sills",
        paragraphs: [
          "Each spring, colonies release winged reproducers called swarmers. After their brief flight, they shed their wings — and piles of identical, translucent wings on window sills or in spider webs are a definitive sign a colony is nearby, possibly inside.",
        ],
      },
      {
        heading: "4. Blistered or Bubbling Paint",
        paragraphs: [
          "Termite activity introduces moisture into walls, which shows up as blistered paint or drywall that looks water-damaged when no leak exists. If your painter can't explain it, your inspector probably can.",
        ],
      },
      {
        heading: "5. Sticking Doors and Windows",
        paragraphs: [
          "As termites feed, they deposit moisture-laden soil into galleries, warping frames. Doors and windows that suddenly stick — especially in spring — deserve a closer look at the surrounding wood.",
        ],
      },
      {
        heading: "6. Frass (Drywood Termite Droppings)",
        paragraphs: [
          "Drywood termites push tiny, ridged pellets — resembling coarse sand or ground pepper — out of kick-holes near their galleries. Small conical piles under wooden furniture, beams, or window frames warrant immediate inspection.",
        ],
      },
      {
        heading: "7. Pinholes in Drywall",
        paragraphs: [
          "Termites occasionally break through drywall paper and reseal the hole with soil. A scattering of pinpricks with tiny dirt specks is subtle — and one of the most commonly missed signs on this list.",
        ],
      },
      {
        heading: "What to Do If You Spot Any of These",
        paragraphs: [
          "Don't disturb the evidence — breaking tubes or spraying store-bought products scatters the colony and makes professional treatment harder. Photograph what you found, note the location, and schedule a professional inspection. GreenShield termite inspections are free, take about 45 minutes, and give you a documented answer either way.",
          "And if you find nothing on this list? In Central Texas, an annual professional inspection is still the cheapest termite insurance that exists.",
        ],
      },
    ],
  },
  {
    slug: "why-rodents-enter-homes-in-winter",
    title: "Why Rodents Enter Homes in Winter (and How to Stop Them at the Door)",
    category: "Seasonal Tips",
    excerpt:
      "The first cold front sends mice and rats searching for warmth — and your home is the best option on the block. Here's how they get in and how to shut the door for good.",
    date: "2026-01-08",
    readMinutes: 6,
    author: { name: "Dana Whitfield", role: "Senior Wildlife & Rodent Specialist" },
    imageAlt: "A house mouse squeezing through a small gap beneath a garage door in winter",
    featured: true,
    tags: ["rodents", "winter", "exclusion"],
    content: [
      {
        paragraphs: [
          "Every year, the week after Central Texas's first real cold front, our phones light up with the same report: scratching in the attic, droppings in the pantry, something scurrying behind the dishwasher. It's not a coincidence — it's biology on a schedule.",
          "Rodents don't hibernate. When temperatures drop, their outdoor food supply collapses at exactly the moment their bodies need more calories to stay warm. A heated structure with stored food isn't just attractive; it's survival.",
        ],
      },
      {
        heading: "How They Actually Get In",
        paragraphs: [
          "A mouse fits through a gap the width of a pencil (about 1/4 inch); a rat needs only a quarter-sized hole. The most common winter entry points we document are garage door corner gaps, gaps around A/C line penetrations, unscreened weep holes, roof returns where fascia meets shingles, and dryer vents with broken flaps.",
          "Roof rats — the dominant species in tree-heavy Austin neighborhoods — enter high, traveling branches to the roofline. If you hear noise above the ceiling rather than in the walls, think roof, not foundation.",
        ],
      },
      {
        heading: "Why Traps Alone Don't Work",
        paragraphs: [
          "Trapping removes individuals; it doesn't remove the opening, the scent trail marking it, or the conditions that attracted rodents in the first place. As long as the doorway stays open, winter replaces every rodent you remove.",
          "Real winter rodent control is exclusion: sealing every entry point with materials rodents can't chew — steel mesh, hardware cloth, metal flashing — after removing the animals currently inside. Done properly, it's a permanent fix, not a subscription to trap-checking.",
        ],
      },
      {
        heading: "Your Pre-Winter Checklist",
        paragraphs: ["Before the first November front, walk your home's perimeter and check these:"],
        list: [
          "Garage door seals — daylight at the corners means mouse access",
          "Door sweeps on all exterior doors",
          "Gaps where cables, pipes, and A/C lines enter walls",
          "Tree limbs within 6 feet of the roofline (trim them)",
          "Pet food and bird seed stored in chew-proof containers",
          "Firewood stacked away from the house and off the ground",
        ],
      },
      {
        heading: "Already Hearing Noises?",
        paragraphs: [
          "Act quickly — a pair of mice becomes a colony in weeks, and rodents gnaw wiring year-round. A professional inspection maps every entry point and quantifies the population, and combined trapping-plus-exclusion typically reaches zero activity within two to three weeks. GreenShield's rodent exclusion work is warrantied, because sealed correctly means sealed for good.",
        ],
      },
    ],
  },
  {
    slug: "bed-bug-warning-signs-after-travel",
    title: "Bed Bug Warning Signs After Travel: A 10-Minute Check That Saves Months of Stress",
    category: "Health & Safety",
    excerpt:
      "Bed bugs don't come from dirty homes — they come home from trips. This quick post-travel routine catches hitchhikers before they establish.",
    date: "2026-05-19",
    readMinutes: 5,
    author: { name: "Keisha Lawrence", role: "Bed Bug Program Manager" },
    imageAlt: "Traveler inspecting luggage on a hard floor after returning from a trip",
    tags: ["bed bugs", "travel", "prevention"],
    content: [
      {
        paragraphs: [
          "Here's the uncomfortable truth about bed bugs: hygiene has nothing to do with it. Five-star resorts get them. Hospital wards get them. What every infestation shares isn't dirt — it's travel. Bed bugs are hitchhikers, and luggage is their vehicle of choice.",
          "The difference between a $0 problem and a multi-room treatment usually comes down to the first 48 hours after you get home. This is the routine our bed bug team recommends to every customer.",
        ],
      },
      {
        heading: "At the Hotel: 2 Minutes of Prevention",
        paragraphs: [
          "Before unpacking anything, put your luggage in the bathtub or on the luggage rack — never on the bed or carpeted floor. Pull back the fitted sheet at the head of the bed and check the mattress seams and the corners behind the headboard for pepper-like fecal spots, rust stains, or shed skins. Clear? Unpack normally. Not clear? Request a different room, at least two floors away.",
        ],
      },
      {
        heading: "When You Get Home: The 10-Minute Routine",
        paragraphs: ["This routine breaks the chain even if something did climb aboard:"],
        list: [
          "Unpack luggage on a hard floor (garage or entryway), never on beds or sofas",
          "Run all clothing — worn or not — through a dryer on high heat for 30 minutes",
          "Vacuum the luggage inside and out, then empty the vacuum outside",
          "Store suitcases in the garage or sealed in a large plastic bag, not under the bed",
        ],
      },
      {
        heading: "Early Signs You Brought Something Home",
        paragraphs: [
          "Bed bug bites typically appear in lines or clusters of two to three, often on skin exposed during sleep — arms, shoulders, neck. But roughly a third of people don't react to bites at all, so physical evidence matters more: rust-colored spots on sheets, dark fecal dots along mattress piping, or a shed amber-colored skin in the bed frame.",
          "One critical warning: do not fog, bomb, or blanket-spray. Consumer foggers scatter bed bugs into walls and neighboring rooms, turning a contained problem into a whole-home infestation.",
        ],
      },
      {
        heading: "If You Find Evidence",
        paragraphs: [
          "Isolate the room, launder bedding on high heat, and get a professional inspection quickly — early infestations confined to one bed are dramatically faster and cheaper to eliminate. GreenShield bed bug inspections are discreet, unmarked-vehicle, and free. Catching it in week one instead of month three is the whole game.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prevent-mosquitoes-in-your-yard",
    title: "How to Prevent Mosquitoes in Your Yard: The Standing Water Audit",
    category: "Seasonal Tips",
    excerpt:
      "Mosquitoes breeding in your yard can complete their life cycle in a bottle cap of water. This weekend audit eliminates the sources most homeowners never find.",
    date: "2026-04-10",
    readMinutes: 6,
    author: { name: "Miguel Santos", role: "Termite Division Lead" },
    imageAlt: "Homeowner emptying standing rainwater from a plant saucer in a backyard garden",
    tags: ["mosquitoes", "yard", "prevention", "summer"],
    content: [
      {
        paragraphs: [
          "The mosquitoes biting you at dusk were probably born within 200 feet of your patio chair. Most species that plague Texas backyards — especially the aggressive, day-biting Aedes mosquitoes — breed in small artificial containers, not in distant swamps. Which means the single highest-impact thing you can do is a systematic standing-water audit of your own property.",
          "A mosquito needs only seven to ten days and a few tablespoons of water to go from egg to biting adult. Here's where that water hides.",
        ],
      },
      {
        heading: "The Obvious Suspects",
        paragraphs: ["Start with the containers everyone knows about but rarely empties on schedule:"],
        list: [
          "Plant saucers and cache pots (the #1 source we find)",
          "Birdbaths — change water twice weekly",
          "Buckets, watering cans, and kids' toys",
          "Pet water bowls refreshed daily",
          "Tarps and pool covers with pooled folds",
        ],
      },
      {
        heading: "The Hidden Sources Pros Look For",
        paragraphs: [
          "When our technicians audit a property, the breeding sites customers are shocked by are almost always these: clogged gutters holding an invisible inch of water; corrugated downspout extensions whose ridges trap water for weeks; French drain inlets; bromeliads and other water-holding plants; trash can lids flipped upside down; and the drip trays under rarely moved planters.",
          "One clogged gutter can out-produce every bucket in the neighborhood. If you do only one thing from this article, have your gutters checked.",
        ],
      },
      {
        heading: "For Water You Can't Dump",
        paragraphs: [
          "Rain barrels, ornamental ponds, and drainage features don't have to be breeding sites. Mosquito dunks containing Bti — a bacterial larvicide harmless to pets, birds, and fish — stop larvae from maturing and last about a month. Screen rain barrel inlets with fine mesh as a first line.",
        ],
      },
      {
        heading: "When the Audit Isn't Enough",
        paragraphs: [
          "If your property borders a creek, greenbelt, or a neighbor's neglected pool, source elimination alone won't get you to a comfortable patio. That's when a professional barrier program — treating the shaded foliage where adult mosquitoes rest during the day — makes the difference. GreenShield's seasonal program combines both: we audit and fix the breeding sites, then maintain a barrier that intercepts the mosquitoes flying in from elsewhere.",
        ],
      },
    ],
  },
  {
    slug: "how-often-should-a-business-schedule-pest-control",
    title: "How Often Should a Business Schedule Pest Control? An Honest Framework",
    category: "Commercial",
    excerpt:
      "Monthly? Quarterly? Weekly? The right commercial service frequency depends on your industry's risk profile — here's the framework we use to build client programs.",
    date: "2026-03-05",
    readMinutes: 8,
    author: { name: "Robert Klein", role: "Commercial Accounts Director" },
    imageAlt: "Pest control technician reviewing a digital service report with a restaurant manager",
    tags: ["commercial", "restaurants", "compliance"],
    content: [
      {
        paragraphs: [
          "When business owners ask how often they need pest control, they're really asking two questions: what does my risk actually require, and what will my auditors and inspectors expect to see? The honest answer is that frequency should be driven by your industry's risk profile — not by a vendor's revenue goals.",
          "Here's the framework we use when designing commercial programs, industry by industry.",
        ],
      },
      {
        heading: "Weekly to Biweekly: Food Service & Food Processing",
        paragraphs: [
          "Restaurants, commercial kitchens, bakeries, and food processing facilities operate with constant food, moisture, and delivery traffic — the three inputs every pest needs. German cockroach and rodent pressure in food service is relentless, and a single sighting during a health inspection has real consequences.",
          "Weekly or biweekly service keeps monitoring devices checked frequently enough to catch introductions before they become established populations — and produces the documentation trail health departments and third-party auditors (AIB, SQF) expect.",
        ],
      },
      {
        heading: "Monthly: Healthcare, Hospitality, Multifamily & Warehousing",
        paragraphs: [
          "Hotels, senior living facilities, apartment communities, and distribution centers share a common risk pattern: high traffic and constant inbound goods, but less concentrated food waste than restaurants. Monthly service with well-placed monitoring stations catches bed bug introductions, stored product pests, and rodent activity within one cycle.",
          "For multifamily properties, monthly common-area service plus responsive unit treatments is the standard that keeps small problems from becoming building-wide ones.",
        ],
      },
      {
        heading: "Quarterly: Offices, Retail & Professional Spaces",
        paragraphs: [
          "Standard office and retail environments without food prep can typically maintain excellent control on a quarterly exterior-focused program with interior monitoring. The key is a provider who inspects and documents rather than just sprays — because in low-pressure environments, early detection is the entire value.",
        ],
      },
      {
        heading: "The Documentation Question",
        paragraphs: [
          "Whatever your frequency, commercial pest control without documentation is half a service. A proper program includes a device map, service reports with findings and materials, pest sighting logs your staff can contribute to, and trend reporting that shows pressure rising before it becomes visible. If you're audited — by a health department, a corporate parent, or a food-safety scheme — this paper trail is what passes or fails you.",
          "GreenShield builds every commercial program around the client's actual audit requirements. If you're not sure what yours are, that's the first conversation to have — and ours is free.",
        ],
      },
    ],
  },
  {
    slug: "why-pests-return-after-diy-treatment",
    title: "Why Pests Return After DIY Treatment (It's Not Bad Luck)",
    category: "Homeowners",
    excerpt:
      "The spray worked — for two weeks. Then the ants, roaches, or mice came back. Here's the biology behind the DIY rebound, and what actually breaks the cycle.",
    date: "2026-02-12",
    readMinutes: 6,
    author: { name: "Dana Whitfield", role: "Senior Wildlife & Rodent Specialist" },
    imageAlt: "Frustrated homeowner looking at a returning ant trail on a kitchen counter",
    featured: true,
    tags: ["DIY", "prevention", "home treatment"],
    content: [
      {
        paragraphs: [
          "It's the most common story we hear on first visits: 'I sprayed, it worked for a couple of weeks, and then they came back worse.' It feels like bad luck or a tougher-than-average infestation. It's neither — it's the predictable result of how consumer products interact with pest biology.",
        ],
      },
      {
        heading: "You Treated the Symptom Population",
        paragraphs: [
          "The pests you can see are a small fraction of the infestation — roughly 5% for ants (the foragers) and about 10–20% for cockroaches. Contact sprays kill exactly that visible fraction while the queen, the egg cases, and the nest population remain untouched. Two weeks is simply how long it takes the colony to replace its losses.",
        ],
      },
      {
        heading: "Repellents Scatter Colonies",
        paragraphs: [
          "Most consumer sprays are pyrethroid repellents — insects detect and avoid them. Spray a repellent across an ant trail and the colony doesn't die; it reroutes, or worse, it buds: the colony splits into multiple smaller colonies, each with its own queen. One kitchen problem becomes three wall-void problems. German cockroaches respond similarly, dispersing from a treated cabinet into adjacent rooms.",
          "Professional products for these pests are deliberately non-repellent — undetectable, slow-acting, and transferred nest-mate to nest-mate until the treatment reaches the queen. The colony eliminates itself. That mechanism simply isn't available on the retail shelf.",
        ],
      },
      {
        heading: "Nothing Addressed Why They Came",
        paragraphs: [
          "Every infestation has an entry point and an attractant — a gap under the door, a moisture source, a food supply, a warm void. Sprays address none of these. Professional service pairs treatment with the unglamorous work that makes results stick:",
        ],
        list: [
          "Sealing the entry points pests actually use",
          "Correcting moisture conditions that sustain them",
          "Removing food access and harborage",
          "Placing monitoring to verify — not assume — elimination",
        ],
      },
      {
        heading: "When DIY Is Fine — and When It Isn't",
        paragraphs: [
          "Honest answer: sealed food storage, door sweeps, caulking gaps, and a fly swatter are DIY wins we cheer for. A few individual pests wandering in seasonally rarely need a professional. But an established colony, anything that bites or stings dangerously, anything inside walls, and every rodent problem beyond a single mouse — those have a biology that retail products are structurally unable to beat. The rebound isn't your fault. It's the product's ceiling.",
        ],
      },
    ],
  },
  {
    slug: "what-to-do-before-a-pest-control-visit",
    title: "What to Do Before a Pest Control Visit: A Simple Prep Guide",
    category: "Homeowners",
    excerpt:
      "A little preparation makes your treatment dramatically more effective. Here's exactly what to do — and what NOT to do — before your technician arrives.",
    date: "2026-05-02",
    readMinutes: 4,
    author: { name: "Keisha Lawrence", role: "Bed Bug Program Manager" },
    imageAlt: "Tidy kitchen counters cleared and prepared ahead of a scheduled pest control treatment",
    tags: ["preparation", "service visit", "homeowners"],
    content: [
      {
        paragraphs: [
          "Good news first: for most modern pest treatments, preparation is minimal — the days of emptying every cabinet and vacating for hours are largely over. But a few simple steps genuinely improve results, and a couple of well-intentioned mistakes can undermine the whole visit. Here's the short version we send every new customer.",
        ],
      },
      {
        heading: "Do These Before Any Visit",
        paragraphs: ["Fifteen minutes covers it:"],
        list: [
          "Note where you've seen activity — photos with timestamps help enormously",
          "Clear access to baseboards, under sinks, and problem areas",
          "Pick up pet bowls, toys, and children's items from treatment zones",
          "Secure pets in an untreated room or outside during service",
          "Mow the lawn if you're getting a yard treatment — short grass lets product reach the soil",
        ],
      },
      {
        heading: "The One Big DON'T",
        paragraphs: [
          "Don't deep-clean or spray store-bought products right before the visit. Wiping down baseboards removes the pheromone trails your technician reads like a map, and DIY sprays can repel pests away from professional bait placements — actively making the treatment less effective. Save the deep clean for a few days after service (your technician will tell you exactly when).",
        ],
      },
      {
        heading: "Service-Specific Prep",
        paragraphs: [
          "Some treatments come with their own short checklist: flea services need floors vacuumed and washable pet bedding laundered; bed bug treatments come with a specific written prep sheet (follow it exactly — over-prepping spreads bugs); rodent exclusion needs attic and garage access cleared. Whatever you book, GreenShield sends the right prep list with your confirmation, so there's no guesswork.",
        ],
      },
      {
        heading: "After the Visit",
        paragraphs: [
          "Expect to see some pest activity for a few days — treatments flush pests from harborage, and baits need time to work through colonies. That's the treatment succeeding, not failing. Your service report explains what was done, what to watch for, and when we'll follow up. And if anything seems off between visits, re-services are free on every plan. Just call.",
        ],
      },
    ],
  },
  {
    slug: "signs-of-a-cockroach-infestation",
    title: "5 Signs of a Cockroach Infestation (Before You Ever See a Roach)",
    category: "Pest Guides",
    excerpt:
      "Roaches are nocturnal and expert hiders — by the time you see one in daylight, the population is established. Learn the earlier evidence that gives you a head start.",
    date: "2026-06-08",
    readMinutes: 5,
    author: { name: "Robert Klein", role: "Commercial Accounts Director" },
    imageAlt: "Flashlight inspection revealing cockroach droppings along a kitchen cabinet hinge",
    tags: ["cockroaches", "identification", "kitchen"],
    content: [
      {
        paragraphs: [
          "Cockroaches are among the most successful animals on earth precisely because you don't see them. They're nocturnal, they flatten into cracks a coin couldn't enter, and they've evolved to avoid open spaces. A German cockroach population can reach the hundreds inside a kitchen before a single daylight sighting.",
          "That's why the early evidence matters more than the insect itself. Here's what to look for — flashlight recommended.",
        ],
      },
      {
        heading: "1. Droppings That Look Like Ground Pepper",
        paragraphs: [
          "German cockroach droppings resemble coarse black pepper or coffee grounds and accumulate where roaches congregate: cabinet hinges, drawer corners, under the sink, and along the tops of door frames. Larger roaches leave cylindrical, ridged droppings the size of a grain of rice. Concentrations of droppings literally map the harborage for you.",
        ],
      },
      {
        heading: "2. Egg Cases in Hidden Corners",
        paragraphs: [
          "Roach egg cases (oothecae) are small, brown, purse-shaped capsules — a German roach case holds up to 48 eggs. Check behind the refrigerator, inside cabinet hinges, under small appliances, and in the gap where the counter meets the wall. Finding empty cases means at least one generation has already hatched.",
        ],
      },
      {
        heading: "3. A Musty, Oily Odor",
        paragraphs: [
          "Established roach populations produce a distinctive smell — musty, greasy, slightly sweet — from aggregation pheromones. If a cabinet or the area behind an appliance has developed an odor cleaning doesn't fix, take it seriously. In our experience, customers who report 'a smell they can't place' almost always have a significant population.",
        ],
      },
      {
        heading: "4. Smear Marks Along Runways",
        paragraphs: [
          "In humid areas, roaches leave irregular brown smear marks along walls and horizontal surfaces where they travel repeatedly. Look along the wall-floor junction behind the trash can and under the sink.",
        ],
      },
      {
        heading: "5. Shed Skins",
        paragraphs: [
          "Roaches molt five to eight times growing to adulthood, leaving translucent amber exoskeletons near harborage. Multiple sizes of shed skins is the single clearest sign of an actively breeding population — every size represents a different generation.",
        ],
      },
      {
        heading: "Found Two or More of These?",
        paragraphs: [
          "Skip the fogger — it will scatter the population deeper into your walls (we wrote a whole article on why DIY treatments rebound). An established roach population needs gel baiting, growth regulators, and follow-up verification. GreenShield's roach program resolves most infestations in two to six weeks, guaranteed. The free inspection will tell you exactly what you're dealing with.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
