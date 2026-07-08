import type { Service } from "@/types";

/**
 * Full content for every dedicated service page.
 * Each entry feeds the shared service page template, cards, menus,
 * sitemap entries, and JSON-LD Service schema.
 */
export const services: Service[] = [
  {
    slug: "ant-control",
    name: "Ant Control & Extermination",
    shortName: "Ant Control",
    category: "insects",
    icon: "bug",
    featured: true,
    excerpt:
      "Colony-level ant elimination that stops the trail at its source — not just the ants you can see.",
    heroTagline: "Stop the trail. Eliminate the colony.",
    overview: [
      "One ant on the counter usually means thousands behind the walls. Ants leave invisible pheromone trails that guide the entire colony to food and moisture inside your home, which is why spraying the ones you see never solves the problem — the colony simply reroutes.",
      "GreenShield technicians identify the exact species — fire ants, carpenter ants, odorous house ants, or rover ants — because each requires a different strategy. We combine non-repellent treatments, targeted baiting, and exterior barrier protection so workers carry the treatment back to the queen and the colony collapses at the source.",
    ],
    signs: [
      "Visible ant trails along baseboards, countertops, or window sills",
      "Small piles of soil or sand near foundation cracks and pavement joints",
      "Wood shavings (frass) near sills or beams — a hallmark of carpenter ants",
      "Winged swarmers appearing indoors, especially in spring",
      "Faint rustling sounds inside walls in quiet rooms",
    ],
    risks: [
      {
        title: "Food Contamination",
        description:
          "Ants travel through garbage, drains, and decay before crossing your kitchen counters, spreading bacteria such as Salmonella and E. coli.",
      },
      {
        title: "Structural Damage",
        description:
          "Carpenter ants hollow out sound wood to build galleries. Left untreated, they weaken framing, sills, and decks year after year.",
      },
      {
        title: "Painful Stings",
        description:
          "Fire ants attack in numbers, and their stings can trigger serious allergic reactions in children, seniors, and pets.",
      },
    ],
    treatment: [
      {
        title: "Species Identification & Inspection",
        description:
          "We trace trails to entry points and nests, identify the species, and map moisture conditions attracting them.",
      },
      {
        title: "Targeted Colony Treatment",
        description:
          "Non-repellent products and slow-acting baits are placed along foraging routes so workers transfer the treatment to the queen.",
      },
      {
        title: "Entry Point Sealing",
        description:
          "We treat and document gaps around plumbing, weep holes, and foundation cracks that ants use as highways into your home.",
      },
      {
        title: "Exterior Barrier & Monitoring",
        description:
          "A protective perimeter treatment plus follow-up visits confirm the colony is eliminated — and keep new ones from moving in.",
      },
    ],
    prevention: [
      "Wipe counters and sweep floors daily to remove food residue and scent trails",
      "Store sweets, pet food, and grains in sealed containers",
      "Fix dripping faucets and A/C condensation lines — ants need water more than food",
      "Trim shrubs and tree limbs so they don't touch siding or the roofline",
      "Seal cracks in the foundation and gaps around utility penetrations",
    ],
    whyProfessional:
      "Store-bought sprays are repellents — they kill a few workers and scatter the colony into multiple new nests (a process called budding), making infestations worse. Professional non-repellent treatments are undetectable to ants, so the colony destroys itself from within. We also address the species-specific behavior DIY products ignore.",
    faqs: [
      {
        question: "How long does professional ant treatment take to work?",
        answer:
          "Most customers see a dramatic drop in activity within 48 hours. Complete colony elimination typically takes 1–2 weeks as baits work their way to the queen. We schedule a follow-up to confirm full control.",
      },
      {
        question: "Are ant treatments safe for my kids and pets?",
        answer:
          "Yes. We use EPA-registered products applied at targeted, low-volume rates in areas children and pets can't access. Your technician will walk you through any brief re-entry times before treating.",
      },
      {
        question: "Why do ants keep coming back after I spray?",
        answer:
          "Consumer sprays kill only the foragers you see — roughly 5% of the colony — while the queen keeps laying up to 800 eggs a day. Until the colony itself is eliminated, the trail always returns.",
      },
    ],
    related: ["cockroach-control", "termite-control", "preventive-pest-control"],
    metaDescription:
      "Professional ant control in Austin, TX. Colony-level elimination of fire ants, carpenter ants & more with a pest-free guarantee. Free inspection.",
    imageAlt:
      "GreenShield technician applying targeted ant treatment along a kitchen baseboard",
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control & Extermination",
    shortName: "Cockroach Control",
    category: "insects",
    icon: "bug",
    featured: true,
    excerpt:
      "Fast, discreet roach elimination using gel baits, growth regulators, and sanitation guidance that keeps them gone.",
    heroTagline: "See one roach? There are hundreds you don't.",
    overview: [
      "Cockroaches are the most resilient pest we treat — a single German cockroach female can produce 30,000 descendants in a year, and roaches can survive weeks without food. By the time you spot one during the day, the population behind your appliances and inside wall voids is already established.",
      "Our roach program pairs professional gel baits and insect growth regulators (IGRs) with crack-and-crevice treatment in the harborage areas roaches actually live in. The IGR breaks the breeding cycle so the infestation can't rebound — the step DIY treatments always miss.",
    ],
    signs: [
      "Live roaches scattering when you turn on the kitchen light at night",
      "Pepper-like droppings in drawers, cabinets, and along baseboards",
      "Brown egg cases (oothecae) behind appliances or in cabinet hinges",
      "A musty, oily odor in kitchens or bathrooms",
      "Smear marks along walls where roaches travel",
    ],
    risks: [
      {
        title: "Asthma & Allergies",
        description:
          "Roach droppings and shed skins are a leading trigger of childhood asthma — the CDC links cockroach allergens to increased attacks in urban homes.",
      },
      {
        title: "Disease Transmission",
        description:
          "Roaches carry Salmonella, E. coli, and at least 33 kinds of bacteria picked up in sewers and drains, depositing them on food-prep surfaces.",
      },
      {
        title: "Rapid Infestation Growth",
        description:
          "One egg case carries up to 48 nymphs. A minor problem becomes a severe infestation in a single season without intervention.",
      },
    ],
    treatment: [
      {
        title: "Inspection & Species ID",
        description:
          "German, American, Oriental, and smoky brown roaches each demand different tactics. We flush and map harborage areas first.",
      },
      {
        title: "Gel Baiting & Crack-and-Crevice Treatment",
        description:
          "Professional-grade baits are placed precisely where roaches feed and travel — inside hinges, voids, and appliance motors.",
      },
      {
        title: "Insect Growth Regulator Application",
        description:
          "IGRs prevent nymphs from maturing and reproducing, collapsing the population instead of just knocking it down.",
      },
      {
        title: "Sanitation Plan & Follow-Up",
        description:
          "You receive a written prep and sanitation checklist, plus scheduled follow-ups until monitoring stations confirm elimination.",
      },
    ],
    prevention: [
      "Eliminate standing water in sinks and fix leaking pipes — roaches die faster from thirst than hunger",
      "Take trash out nightly and use bins with tight-fitting lids",
      "Vacuum kitchen floors regularly to remove crumbs and roach egg cases",
      "Seal gaps around plumbing penetrations under sinks",
      "Never leave pet food out overnight",
    ],
    whyProfessional:
      "Foggers and sprays repel roaches deeper into walls and can make baiting programs fail by contaminating bait placements. Professional control uses baits roaches actively seek out, growth regulators that stop reproduction, and monitoring to verify true elimination — not just fewer sightings.",
    faqs: [
      {
        question: "How fast can you get rid of cockroaches?",
        answer:
          "Light infestations are usually resolved in 2–3 weeks. Heavy German roach infestations may take 4–6 weeks and a follow-up visit or two, because we must eliminate every generation as eggs hatch.",
      },
      {
        question: "Do I need to empty my kitchen cabinets before treatment?",
        answer:
          "For most gel-bait treatments, no — that's one advantage over fogging. Your technician will give you a short, specific prep list before your appointment.",
      },
      {
        question: "Will roaches come back after treatment?",
        answer:
          "Not if the program is completed. Our recurring plans include monitoring and exterior treatment to stop reintroduction — roaches often hitchhike in via boxes, groceries, and used appliances.",
      },
    ],
    related: ["ant-control", "fly-control", "preventive-pest-control"],
    metaDescription:
      "Guaranteed cockroach extermination in Austin, TX. German roach specialists using gel baits & IGRs. Discreet service, free inspection, pest-free guarantee.",
    imageAlt:
      "Technician placing professional gel bait inside a kitchen cabinet hinge to eliminate cockroaches",
  },
  {
    slug: "rodent-control",
    name: "Rodent Control & Exclusion",
    shortName: "Rodent Control",
    category: "rodents",
    icon: "rat",
    featured: true,
    excerpt:
      "Complete rat and mouse programs: removal, entry-point exclusion, and attic sanitation — guaranteed.",
    heroTagline: "Removal is step one. Exclusion is the cure.",
    overview: [
      "Mice squeeze through gaps the width of a pencil; rats need only a quarter-sized hole. That's why trapping alone never ends a rodent problem — new rodents follow the scent trails of the last ones straight through the same openings. Real rodent control means sealing the building.",
      "GreenShield's rodent program combines strategic trapping and stations with full-perimeter exclusion work: sealing entry points with rodent-proof materials, from foundation gaps to roof returns. We finish with attic inspection and sanitation options, so the evidence — and the odor that attracts new rodents — is gone.",
    ],
    signs: [
      "Scratching or scurrying sounds in walls, ceilings, or the attic at night",
      "Droppings along baseboards, in the pantry, under sinks, or in the garage",
      "Gnaw marks on wiring, food packaging, or structural wood",
      "Greasy rub marks along walls where rodents travel",
      "Pets staring intently at walls or appliances",
    ],
    risks: [
      {
        title: "Electrical Fire Hazard",
        description:
          "Rodents gnaw constantly to wear down their teeth — and chewed wiring is implicated in an estimated 20–25% of fires of unknown origin.",
      },
      {
        title: "Serious Disease",
        description:
          "Rats and mice spread hantavirus, leptospirosis, and salmonellosis through droppings, urine, and contaminated surfaces.",
      },
      {
        title: "Insulation & Property Damage",
        description:
          "A rodent colony can trash attic insulation in months, costing thousands in energy loss and remediation.",
      },
    ],
    treatment: [
      {
        title: "Full-Property Inspection",
        description:
          "We inspect roofline to foundation — including attic and crawl space — to identify species, population size, and every entry point.",
      },
      {
        title: "Strategic Trapping & Baiting",
        description:
          "Tamper-resistant stations and snap traps are placed on active runways, positioned safely away from children and pets.",
      },
      {
        title: "Exclusion & Rodent-Proofing",
        description:
          "Entry points are sealed with steel mesh, hardware cloth, and sealants rodents can't chew through — the step that makes results permanent.",
      },
      {
        title: "Sanitation & Monitoring",
        description:
          "We remove carcasses and droppings, offer attic remediation, and monitor stations until activity reaches zero.",
      },
    ],
    prevention: [
      "Store firewood at least 20 feet from the house and off the ground",
      "Keep tree limbs trimmed 6+ feet from the roofline — roof rats are expert climbers",
      "Store bird seed, pet food, and bulk pantry goods in metal or thick plastic bins",
      "Install door sweeps on exterior and garage doors",
      "Declutter garages and storage areas to remove nesting harborage",
    ],
    whyProfessional:
      "DIY traps catch individuals, but rodents are neophobic — they avoid new objects — and breed faster than casual trapping removes them. Professionals read rub marks, droppings, and gnawing patterns to intercept actual runways, then seal the structure so the problem is solved rather than managed forever.",
    faqs: [
      {
        question: "What's the difference between rats and mice in treatment?",
        answer:
          "Roof rats travel elevated routes and enter high; mice live close to food sources and enter low. Trap style, placement height, and exclusion priorities differ completely — which is why identification comes first.",
      },
      {
        question: "Do you use poison inside my house?",
        answer:
          "We avoid interior rodenticides in living spaces to prevent odor issues from rodents dying in walls. Indoors we rely on trapping; any bait is secured in locked, tamper-resistant stations placed strategically outside.",
      },
      {
        question: "How long does rodent exclusion take?",
        answer:
          "Most homes are fully sealed in a single visit after inspection. Active infestations typically reach zero activity within 2–3 weeks of combined trapping and exclusion.",
      },
    ],
    related: ["wildlife-control", "snake-removal", "preventive-pest-control"],
    metaDescription:
      "Rat & mouse control in Austin, TX with permanent exclusion. Trapping, entry-point sealing & attic sanitation. Licensed, guaranteed. Free inspection.",
    imageAlt:
      "Pest control specialist sealing a rodent entry point at a home's foundation with steel mesh",
  },
  {
    slug: "termite-control",
    name: "Termite Control & Prevention",
    shortName: "Termite Control",
    category: "insects",
    icon: "shield",
    featured: true,
    excerpt:
      "Advanced liquid barriers and bait systems that protect your largest investment from the silent destroyer.",
    heroTagline: "$5 billion in damage a year. None of it insured.",
    overview: [
      "Termites cause more than $5 billion in property damage in the U.S. every year — and homeowners insurance covers none of it. Subterranean termites work invisibly inside walls 24 hours a day, and by the time damage is visible, colonies of up to a million insects have often been feeding for years.",
      "GreenShield offers both of the industry's proven solutions: complete liquid soil treatments using non-repellent termiticide, and discreet in-ground bait systems monitored year-round. Every termite job starts with a comprehensive inspection using moisture meters and infrared scanning to find activity before it finds your equity.",
    ],
    signs: [
      "Mud tubes climbing foundation walls, piers, or plumbing penetrations",
      "Hollow-sounding or blistered wood in floors, trim, or window sills",
      "Discarded wings on window sills after spring swarms",
      "Doors and windows that suddenly stick from warped frames",
      "Pinholes in drywall with soil-like specks around them",
    ],
    risks: [
      {
        title: "Uninsured Structural Damage",
        description:
          "The average termite repair bill exceeds $3,000 — and severe cases reach tens of thousands. Insurance policies exclude termite damage almost universally.",
      },
      {
        title: "Silent, Continuous Feeding",
        description:
          "A mature subterranean colony consumes wood around the clock, 365 days a year. Damage compounds every month treatment is delayed.",
      },
      {
        title: "Reduced Home Value",
        description:
          "Termite history must be disclosed at sale. Untreated activity can derail closings and slash offers.",
      },
    ],
    treatment: [
      {
        title: "Comprehensive Termite Inspection",
        description:
          "Foundation, crawl space, attic, and exterior wood are inspected with moisture meters and sounding tools; findings are documented with photos.",
      },
      {
        title: "Liquid Barrier Treatment",
        description:
          "A continuous treated zone of non-repellent termiticide is trenched and injected around the foundation — termites pass through it and transfer it colony-wide.",
      },
      {
        title: "Bait System Installation (Alternative)",
        description:
          "Discreet in-ground stations intercept foraging termites with a growth inhibitor that eliminates the entire colony over time.",
      },
      {
        title: "Annual Monitoring & Warranty",
        description:
          "Your protection is backed by annual re-inspections and a renewable damage warranty, transferable if you sell your home.",
      },
    ],
    prevention: [
      "Keep mulch, soil, and siding at least 6 inches from foundation wood",
      "Fix grade and drainage issues so water flows away from the slab",
      "Repair leaking outdoor faucets and A/C drip lines near the foundation",
      "Store firewood and lumber away from the house, off the ground",
      "Schedule an annual professional termite inspection — early detection saves thousands",
    ],
    whyProfessional:
      "Termite control isn't a spray — it's civil engineering with chemistry. Effective liquid treatments require trenching, drilling, and precise volume calculations (hundreds of gallons for an average home), and misapplied barriers leave invisible gaps termites find. Professional treatment also comes with the warranty lenders and buyers expect.",
    faqs: [
      {
        question: "Liquid treatment or bait stations — which is better?",
        answer:
          "Liquid barriers deliver the fastest knockdown for active infestations; bait systems excel for prevention and homes where trenching is impractical. Many customers combine both. Your inspector will recommend the right fit after seeing the structure.",
      },
      {
        question: "How often should my home be inspected for termites?",
        answer:
          "Annually, at minimum, in Central Texas — our climate supports some of the highest subterranean termite pressure in the country. Inspections are free with any GreenShield protection plan.",
      },
      {
        question: "Is termite treatment disruptive to my family?",
        answer:
          "No. Liquid applications target the soil outside and under the slab; there's no need to vacate. Bait station installation is entirely exterior and takes a few hours.",
      },
    ],
    related: ["ant-control", "preventive-pest-control", "seasonal-pest-control"],
    metaDescription:
      "Termite treatment & prevention in Austin, TX. Liquid barriers, bait systems, free inspections & renewable damage warranty from licensed specialists.",
    imageAlt:
      "Termite inspector examining mud tubes on a home foundation with a flashlight",
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control & Yard Treatment",
    shortName: "Mosquito Control",
    category: "insects",
    icon: "mosquito",
    featured: true,
    excerpt:
      "Take your backyard back with barrier treatments, breeding-site elimination, and season-long protection.",
    heroTagline: "Your yard. Your evenings. No mosquitoes.",
    overview: [
      "Texas evenings should belong to you, not to mosquitoes. These pests do more than ruin barbecues — they're the deadliest animal on earth, transmitting West Nile virus, Zika, and heartworm to pets. And they can breed in a bottle cap of standing water in under a week.",
      "Our mosquito program treats the places mosquitoes actually live: the undersides of leaves, dense shade vegetation, and moist harborage zones. We combine barrier applications with larvicide for un-drainable water and a property audit that eliminates breeding sites — cutting populations up to 90% within days.",
    ],
    signs: [
      "Getting bitten in your yard during morning or evening hours",
      "Mosquitoes resting on shaded walls, fences, and under decks",
      "Standing water in gutters, plant saucers, toys, or low spots",
      "Larvae ('wigglers') visible in birdbaths or containers",
      "Increased activity after rain or irrigation",
    ],
    risks: [
      {
        title: "Serious Disease Vectors",
        description:
          "Mosquitoes in Texas transmit West Nile virus and encephalitis; the Aedes species here can carry Zika, dengue, and chikungunya.",
      },
      {
        title: "Heartworm in Pets",
        description:
          "A single infected mosquito bite can transmit potentially fatal heartworm to dogs and cats.",
      },
      {
        title: "Unusable Outdoor Space",
        description:
          "Heavy mosquito pressure effectively shrinks your home by the entire square footage of your yard, patio, and pool deck.",
      },
    ],
    treatment: [
      {
        title: "Property & Breeding-Site Audit",
        description:
          "We locate every standing-water source and shaded resting zone, then give you a simple fix-list for what we can't treat.",
      },
      {
        title: "Barrier Application",
        description:
          "A backpack-mist application coats the underside of foliage and resting surfaces where mosquitoes hide during the day.",
      },
      {
        title: "Larvicide Treatment",
        description:
          "Un-drainable water — French drains, ornamental ponds, low spots — gets a targeted larvicide that stops the breeding cycle safely.",
      },
      {
        title: "Season-Long Reapplication",
        description:
          "Visits every 21–30 days from March through October keep protection continuous through peak Texas mosquito season.",
      },
    ],
    prevention: [
      "Tip and toss standing water weekly — buckets, saucers, toys, tarps",
      "Clean gutters so water flows freely and doesn't pool",
      "Change birdbath water twice a week",
      "Keep grass cut and vegetation thinned to reduce resting sites",
      "Run a fan on patios — mosquitoes are weak fliers",
    ],
    whyProfessional:
      "Citronella candles and zappers don't reduce populations, and store-bought foggers last hours at best. Professional barrier treatments bind to foliage and keep working for weeks, while larvicides stop the next generation before it flies. It's the difference between swatting mosquitoes and not having them.",
    faqs: [
      {
        question: "Is mosquito treatment safe for bees and butterflies?",
        answer:
          "We apply targeted treatments to shaded resting areas — not blooming plants — and time applications to avoid pollinator activity. Botanical-based options are available for customers who want them.",
      },
      {
        question: "How long before I can use my yard after treatment?",
        answer:
          "Once the application dries — usually 30–45 minutes — your yard is ready for kids, pets, and cookouts.",
      },
      {
        question: "When does mosquito season start in Central Texas?",
        answer:
          "Activity ramps up in March and can run into November. Starting treatments early in spring keeps populations from ever establishing.",
      },
    ],
    related: ["flea-control", "tick-control", "seasonal-pest-control"],
    metaDescription:
      "Mosquito control in Austin, TX — barrier treatments, larviciding & breeding-site elimination. Up to 90% fewer mosquitoes. Season-long plans available.",
    imageAlt:
      "Technician applying a backyard mosquito barrier treatment to dense shrubs with a backpack mister",
  },
  {
    slug: "bed-bug-control",
    name: "Bed Bug Treatment & Elimination",
    shortName: "Bed Bug Control",
    category: "insects",
    icon: "bedbug",
    featured: true,
    excerpt:
      "Discreet, thorough bed bug elimination with follow-up verification — because 'mostly gone' isn't gone.",
    heroTagline: "Sleep tight again. Guaranteed.",
    overview: [
      "Bed bugs are the most stressful pest infestation a family can face — and one of the hardest to eliminate. They hide in cracks the width of a credit card, survive months without feeding, and hitchhike home in luggage, furniture, and backpacks. No amount of cleaning causes or cures them.",
      "GreenShield's bed bug protocol leaves nothing to chance: a meticulous inspection of every harborage zone, a multi-material treatment combining residual products, steam, and mattress encasements, and scheduled re-inspections until monitoring confirms total elimination. Service is always unmarked-vehicle discreet.",
    ],
    signs: [
      "Itchy bite clusters in lines or zigzags, often on arms and shoulders",
      "Rust-colored blood spots on sheets and pillowcases",
      "Pepper-like fecal dots along mattress seams and box springs",
      "Shed pale-amber skins in mattress tufts and bed frame joints",
      "A sweet, musty odor in severe infestations",
    ],
    risks: [
      {
        title: "Sleep Loss & Anxiety",
        description:
          "Bed bug infestations are strongly linked to insomnia and anxiety — the psychological toll often outweighs the physical bites.",
      },
      {
        title: "Rapid Spread",
        description:
          "Bed bugs migrate between rooms and units through walls and outlets. One infested bedroom becomes a whole-home problem in weeks.",
      },
      {
        title: "Skin Reactions & Infection",
        description:
          "Bites can trigger allergic reactions, and scratching opens the door to secondary skin infections, especially in children.",
      },
    ],
    treatment: [
      {
        title: "Canine-Grade Detailed Inspection",
        description:
          "We inspect mattresses, frames, outlets, baseboards, and furniture within 15 feet of sleeping areas to map the full extent of activity.",
      },
      {
        title: "Multi-Material Treatment",
        description:
          "Residual applications, targeted steam for heat-sensitive zones, and crack-and-crevice dusts attack bed bugs at every life stage — including eggs.",
      },
      {
        title: "Encasement & Interception",
        description:
          "Mattress encasements trap remaining bugs and interception monitors under bed legs verify that treatment is working.",
      },
      {
        title: "Follow-Up Verification",
        description:
          "Re-inspection at 2 and 4 weeks confirms elimination. We don't close the case until the monitors do.",
      },
    ],
    prevention: [
      "Inspect hotel headboards and luggage racks when traveling; keep bags off beds",
      "Run clothes through a hot dryer for 30 minutes after trips",
      "Never bring curbside furniture or unchecked used mattresses home",
      "Use light-colored mattress encasements to make early detection easy",
      "Reduce bedroom clutter that provides hiding places",
    ],
    whyProfessional:
      "Bed bugs are the definitive don't-DIY pest. Consumer foggers scatter them into walls and adjacent rooms, and most retail sprays fail against today's resistant strains — and none reliably kill eggs. Professional treatment combines materials and follow-up verification that break the life cycle completely, the first time.",
    faqs: [
      {
        question: "Do I have to throw away my mattress?",
        answer:
          "Almost never. Professional treatment plus a quality encasement salvages the vast majority of mattresses — replacing an untreated mattress in an untreated room just infests the new one.",
      },
      {
        question: "How did I get bed bugs? My home is clean.",
        answer:
          "Cleanliness is irrelevant to bed bugs — they feed on blood, not filth. Travel, guests, secondhand furniture, and shared laundry are the usual routes. It can happen to anyone.",
      },
      {
        question: "How should I prepare for bed bug treatment?",
        answer:
          "We send a simple prep sheet: launder and bag bedding, clear under beds, and pull furniture slightly from walls. Over-prepping (moving items between rooms) can actually spread bugs, so follow the sheet as written.",
      },
    ],
    related: ["flea-control", "cockroach-control", "preventive-pest-control"],
    metaDescription:
      "Discreet bed bug extermination in Austin, TX with follow-up verification. Multi-treatment protocol kills all life stages. Free inspection & guarantee.",
    imageAlt:
      "Technician inspecting a mattress seam with a flashlight during a bed bug inspection",
  },
  {
    slug: "spider-control",
    name: "Spider Control & Web Removal",
    shortName: "Spider Control",
    category: "insects",
    icon: "spider",
    excerpt:
      "Control for black widows, brown recluses, and web-building spiders — plus the insects that attract them.",
    heroTagline: "Fewer insects. Fewer spiders. It's that simple.",
    overview: [
      "Most Texas spiders are harmless — but the two that aren't, black widows and brown recluses, both thrive in Central Texas garages, closets, and storage areas. And even harmless species become a problem when webs coat your eaves and egg sacs hatch hundreds of spiderlings indoors.",
      "Effective spider control targets both the spiders and their food supply. Our service combines de-webbing of eaves and entryways, crack-and-crevice treatment of harborage zones, and a perimeter barrier that reduces the insect populations spiders follow inside.",
    ],
    signs: [
      "Webs concentrated around eaves, light fixtures, and window frames",
      "Messy, irregular webs low in garages or behind storage — a widow signature",
      "Spiders in bathtubs, sinks, or along baseboards at night",
      "White, papery egg sacs in corners and under furniture",
      "An uptick in other insects — spiders follow food",
    ],
    risks: [
      {
        title: "Medically Significant Bites",
        description:
          "Black widow venom is neurotoxic and brown recluse bites can cause necrotic wounds requiring medical care — both species hide in exactly the boxes and clothing piles people reach into.",
      },
      {
        title: "Rapid Population Growth",
        description:
          "A single egg sac holds 150–300 spiderlings. A few unnoticed sacs become an infestation in one season.",
      },
      {
        title: "Underlying Insect Problems",
        description:
          "Heavy spider activity signals a thriving insect population feeding them — often the bigger hidden issue.",
      },
    ],
    treatment: [
      {
        title: "Inspection & Species Identification",
        description:
          "We identify the species present — especially medically significant ones — and locate harborage and web zones.",
      },
      {
        title: "Web & Egg Sac Removal",
        description:
          "Eaves, soffits, entryways, and garage corners are de-webbed, removing egg sacs before they hatch.",
      },
      {
        title: "Targeted Harborage Treatment",
        description:
          "Cracks, voids, weep holes, and storage-area harborage receive precise applications where spiders hunt and hide.",
      },
      {
        title: "Perimeter & Prey Reduction",
        description:
          "An exterior barrier reduces the insect food supply, making your home fundamentally less attractive to spiders.",
      },
    ],
    prevention: [
      "Shake out shoes, gloves, and stored clothing before use",
      "Store garage and closet items in sealed plastic bins, not cardboard",
      "Switch exterior bulbs to warm-toned LEDs that attract fewer insects",
      "Keep firewood, lumber, and debris away from the house",
      "Seal gaps under doors and around windows",
    ],
    whyProfessional:
      "Spiders' long legs keep their bodies above treated surfaces, so generic sprays underperform against them. Professional control works because it removes webs and egg sacs, treats the specific crevices spiders occupy, and cuts off their food supply — a systems approach DIY can't replicate.",
    faqs: [
      {
        question: "Are brown recluses common in Austin?",
        answer:
          "Yes — Central Texas is firmly in the brown recluse range. They favor undisturbed storage: attics, garages, closets, and cardboard boxes. Careful inspection of these zones is part of every spider service.",
      },
      {
        question: "Will one treatment eliminate spiders forever?",
        answer:
          "A single service knocks down current activity dramatically. Because spiders reinvade from surrounding landscape, quarterly barrier maintenance is what keeps them out long-term.",
      },
      {
        question: "Should I be worried about a spider bite I found?",
        answer:
          "Most 'spider bites' are actually other insect bites or skin conditions. If you have an expanding wound, severe pain, or flu-like symptoms after a suspected bite, seek medical care promptly — and save the spider if safely possible for identification.",
      },
    ],
    related: ["ant-control", "preventive-pest-control", "seasonal-pest-control"],
    metaDescription:
      "Spider control in Austin, TX — black widow & brown recluse specialists. De-webbing, targeted treatment & prevention barriers. Free inspection.",
    imageAlt:
      "Technician removing spider webs from a home's eaves with an extension de-webbing tool",
  },
  {
    slug: "fly-control",
    name: "Fly Control & Sanitation Programs",
    shortName: "Fly Control",
    category: "insects",
    icon: "fly",
    excerpt:
      "From house flies to drain flies and fruit flies — source elimination programs that actually end the buzzing.",
    heroTagline: "Find the source. End the swarm.",
    overview: [
      "Flies are a sanitation pest: every fly problem has a breeding source, and until that source is found — a drain biofilm, a garbage area, a moisture pocket — no amount of swatting or spraying helps. Different species point to different sources, which is why identification drives our whole approach.",
      "GreenShield's fly program pairs inspection-driven source elimination with targeted treatments: bio-remediation foams for drain flies, baits and traps for house flies, and exclusion recommendations for structural gaps. For restaurants and commercial kitchens, we build ongoing monitoring programs that satisfy health inspectors.",
    ],
    signs: [
      "Persistent flies in kitchens or around trash areas despite cleaning",
      "Small dark flies emerging from sink or floor drains",
      "Fruit flies hovering near produce, drains, or recycling bins",
      "Clusters of flies on sunny exterior walls in fall (cluster flies)",
      "Maggots in trash receptacles — an active breeding site",
    ],
    risks: [
      {
        title: "Disease Mechanical Transmission",
        description:
          "House flies transfer over 65 diseases — including dysentery and typhoid pathogens — moving from waste to food-contact surfaces.",
      },
      {
        title: "Health Code Violations",
        description:
          "For food businesses, visible fly activity is among the most commonly cited health violations and a direct threat to inspection scores.",
      },
      {
        title: "Signal of Hidden Problems",
        description:
          "Drain and phorid fly infestations often reveal broken pipes, moisture intrusion, or organic buildup that's causing structural harm.",
      },
    ],
    treatment: [
      {
        title: "Species ID & Source Inspection",
        description:
          "The species tells us where to look — drains, soil, trash, or decaying matter. We find and document every breeding source.",
      },
      {
        title: "Source Elimination & Bio-Remediation",
        description:
          "Organic buildup in drains and grease traps is treated with microbial foams that consume the breeding material itself.",
      },
      {
        title: "Baiting, Trapping & Light Units",
        description:
          "Targeted fly baits, discreet insect light traps, and exterior applications intercept adult flies.",
      },
      {
        title: "Sanitation & Exclusion Plan",
        description:
          "You receive a written plan covering door sweeps, air curtains, waste handling, and cleaning gaps to keep flies from returning.",
      },
    ],
    prevention: [
      "Empty and clean trash bins weekly, keeping lids tightly closed",
      "Flush and brush floor and sink drains regularly to remove biofilm",
      "Refrigerate ripe produce and rinse recycling before binning",
      "Keep exterior doors closed or protected with screens and air curtains",
      "Pick up pet waste in the yard promptly — the #1 fly breeding site at homes",
    ],
    whyProfessional:
      "Fly sprays kill the adults you see while the breeding site produces hundreds more per day. Professionals identify the species, trace it to its actual source, and eliminate the breeding material with commercial bio-remediation tools — ending the cycle rather than thinning the swarm.",
    faqs: [
      {
        question: "Why do I still have drain flies after pouring bleach down the drain?",
        answer:
          "Bleach flows past the biofilm the larvae live in without penetrating it. The gel-like organic layer must be physically brushed out or consumed by microbial treatments — that's what our bio-remediation foam does.",
      },
      {
        question: "Can you help our restaurant pass health inspections?",
        answer:
          "Yes — commercial fly management with documented monitoring is one of our specialties. We provide service reports, trend logs, and corrective-action documentation that inspectors and auditors expect.",
      },
      {
        question: "What are the tiny flies in my bathroom?",
        answer:
          "Usually drain flies breeding in the sink overflow or floor drain — occasionally phorid flies, which can indicate a plumbing break under the slab. We identify which one before treating, because the fixes are very different.",
      },
    ],
    related: ["cockroach-control", "ant-control", "preventive-pest-control"],
    metaDescription:
      "Fly control for homes & restaurants in Austin, TX. Drain fly bio-remediation, source elimination & commercial monitoring programs. Free inspection.",
    imageAlt:
      "Technician applying bio-remediation foam to a commercial kitchen floor drain to eliminate drain flies",
  },
  {
    slug: "flea-control",
    name: "Flea Control & Home Treatment",
    shortName: "Flea Control",
    category: "insects",
    icon: "flea",
    excerpt:
      "Coordinated home, yard, and pet-timing treatment that breaks the flea life cycle — not just the adults.",
    heroTagline: "Break the cycle. Free your home (and your pets).",
    overview: [
      "Only 5% of a flea infestation is adult fleas on your pet — the other 95% is eggs, larvae, and pupae embedded in carpet, pet bedding, and shaded soil outside. That's why treating the pet alone, or bombing the house alone, always fails: the reservoir keeps hatching for weeks.",
      "Our flea program treats the entire cycle at once: interior applications with insect growth regulators that sterilize emerging fleas, exterior treatment of shaded pet-rest areas, and coordination guidance with your veterinarian's pet treatment so every leg of the triangle is covered on the same timeline.",
    ],
    signs: [
      "Pets scratching, biting at fur, or developing red, irritated skin",
      "Small dark insects jumping on carpet, pet bedding, or socks",
      "'Flea dirt' — black pepper-like specks that turn red when wet",
      "Bites around your ankles and lower legs",
      "White sock test: fleas visible on white socks after walking carpeted rooms",
    ],
    risks: [
      {
        title: "Pet Health Complications",
        description:
          "Fleas cause allergic dermatitis, transmit tapeworms, and can cause anemia in puppies, kittens, and senior pets.",
      },
      {
        title: "Human Bites & Disease",
        description:
          "Fleas bite people too, and can transmit murine typhus — cases of which have been rising in Central Texas.",
      },
      {
        title: "Explosive Reinfestation",
        description:
          "One female flea lays 40–50 eggs daily, and pupae can lie dormant for months before hatching — the 'pupal window' that defeats one-shot treatments.",
      },
    ],
    treatment: [
      {
        title: "Interior Inspection & Mapping",
        description:
          "We identify hot spots — pet rest areas, carpet edges, furniture — and confirm flea activity versus other biting pests.",
      },
      {
        title: "Interior Treatment with IGR",
        description:
          "Carpets, rugs, and cracks receive an adulticide plus insect growth regulator that prevents eggs and larvae from ever maturing.",
      },
      {
        title: "Exterior Shaded-Zone Treatment",
        description:
          "Dog runs, under decks, and shaded soil where pets rest are treated to stop reinfestation from outside.",
      },
      {
        title: "Follow-Up Through the Pupal Window",
        description:
          "A scheduled follow-up catches fleas hatching from treatment-resistant pupae, closing the loop on the life cycle.",
      },
    ],
    prevention: [
      "Keep pets on year-round veterinarian-recommended flea prevention",
      "Vacuum carpets, rugs, and upholstery twice weekly during flea season (empty the canister outside)",
      "Wash pet bedding weekly in hot water",
      "Mow and thin shaded, moist areas of the yard where fleas develop",
      "Deter wildlife — raccoons, opossums, and feral cats reseed yards with fleas",
    ],
    whyProfessional:
      "Flea foggers can't reach under furniture or into carpet fibers where 95% of the population lives, and they don't stop dormant pupae. Professional treatment pairs precise application with growth regulators and a follow-up timed to the pupal hatch — the coordinated, whole-cycle attack fleas can't survive.",
    faqs: [
      {
        question: "Why am I still seeing fleas two weeks after treatment?",
        answer:
          "That's the pupal window: cocooned fleas are protected from any treatment and hatch over 2–4 weeks. The residual and IGR kill them shortly after they emerge — continued vacuuming actually speeds this up by triggering hatches.",
      },
      {
        question: "Do my pets need to leave during treatment?",
        answer:
          "Pets (and people) simply stay off treated surfaces until dry — typically 2–3 hours. Fish tanks should be covered and pumps turned off. We'll give you the full checklist when booking.",
      },
      {
        question: "Can I get fleas without owning a pet?",
        answer:
          "Absolutely — wildlife in the crawl space or attic, previous owners' pets, and even secondhand rugs are common sources. Petless flea infestations usually point to a wildlife issue we should inspect for.",
      },
    ],
    related: ["tick-control", "wildlife-control", "mosquito-control"],
    metaDescription:
      "Flea extermination in Austin, TX — whole-cycle home & yard treatment with IGRs plus follow-up. Safe for families & coordinated with pet care.",
    imageAlt:
      "Technician treating carpet edges and pet resting areas inside a living room for fleas",
  },
  {
    slug: "tick-control",
    name: "Tick Control & Yard Protection",
    shortName: "Tick Control",
    category: "insects",
    icon: "tick",
    excerpt:
      "Barrier and habitat treatments that protect your family and pets from Lyme, spotted fever, and more.",
    heroTagline: "Enjoy the outdoors without the tick checks.",
    overview: [
      "Ticks don't jump or fly — they quest, waiting on tall grass and brush edges for a host to brush past. That predictable behavior is their weakness: treating the transition zones between lawn and woods, fence lines, and shaded leaf litter intercepts ticks exactly where they hunt.",
      "GreenShield's tick program combines targeted barrier applications in these quest zones with habitat modification guidance that makes your property hostile to ticks and the wildlife that carries them. It pairs naturally with our flea and mosquito services for complete yard protection.",
    ],
    signs: [
      "Ticks found on pets, family members, or clothing after yard time",
      "Ticks visible questing on tall grass blades and shrub tips",
      "Heavy wildlife traffic — deer, raccoons, feral cats — through the yard",
      "Overgrown brush, leaf litter, or wood piles bordering the lawn",
      "Neighbors reporting tick encounters",
    ],
    risks: [
      {
        title: "Serious Tick-Borne Disease",
        description:
          "Texas ticks transmit Rocky Mountain spotted fever, ehrlichiosis, tularemia, and Lyme disease — and the Lone Star tick can trigger alpha-gal red meat allergy.",
      },
      {
        title: "Pet Illness",
        description:
          "Dogs are highly vulnerable to tick-borne ehrlichiosis and anaplasmosis, and heavy infestations can cause tick paralysis.",
      },
      {
        title: "Long Questing Season",
        description:
          "In Central Texas, mild winters mean tick activity nearly year-round, with peaks from spring through fall.",
      },
    ],
    treatment: [
      {
        title: "Habitat Inspection & Risk Map",
        description:
          "We identify quest zones — lawn edges, fence lines, shaded litter, wildlife trails — and rank treatment priorities.",
      },
      {
        title: "Targeted Barrier Application",
        description:
          "Acaricide applications focus on transition zones and shaded harborage rather than blanket-spraying open lawn.",
      },
      {
        title: "Habitat Modification Plan",
        description:
          "We show you where mulch borders, brush clearing, and wildlife deterrence will permanently cut tick pressure.",
      },
      {
        title: "Seasonal Reapplication",
        description:
          "Scheduled treatments through the active season maintain the barrier as new ticks are introduced by wildlife.",
      },
    ],
    prevention: [
      "Keep grass mowed short and clear brush from lawn edges",
      "Create a 3-foot gravel or mulch border between woods and lawn",
      "Stack firewood neatly, off the ground, away from the house",
      "Keep pets on veterinarian-recommended tick prevention year-round",
      "Do quick tick checks after outdoor time — especially behind knees, waistband, and hairline",
    ],
    whyProfessional:
      "Effective tick control requires knowing where ticks quest — most DIY spraying covers open lawn where ticks rarely wait, missing the shaded edge habitat entirely. Professional applications put the right material precisely in quest zones and pair it with habitat changes that address why ticks are there at all.",
    faqs: [
      {
        question: "How soon after treatment is my yard safe for kids and pets?",
        answer:
          "Once the application has dried — typically under an hour. Your technician will confirm the all-clear time at service.",
      },
      {
        question: "Can you treat for ticks and mosquitoes together?",
        answer:
          "Yes — our yard protection bundle covers ticks, fleas, and mosquitoes on the same visit schedule, at a bundled rate. It's our most popular warm-season service.",
      },
      {
        question: "I found an attached tick — what should I do?",
        answer:
          "Remove it with fine-tipped tweezers, gripping close to the skin and pulling straight up. Save it in a sealed bag for identification, note the date, and watch for rash or fever for 30 days. Then have your yard evaluated — one attached tick usually means more questing.",
      },
    ],
    related: ["flea-control", "mosquito-control", "wildlife-control"],
    metaDescription:
      "Professional tick control in Austin, TX. Targeted quest-zone treatments & habitat modification protect family & pets from tick-borne disease.",
    imageAlt:
      "Specialist treating the brushy transition zone between a lawn and wooded fence line for ticks",
  },
  {
    slug: "wasp-removal",
    name: "Wasp & Hornet Nest Removal",
    shortName: "Wasp Removal",
    category: "insects",
    icon: "wasp",
    excerpt:
      "Safe, same-day removal of wasp, hornet, and yellow jacket nests — without anyone getting stung.",
    heroTagline: "Don't grab the ladder. Grab the phone.",
    overview: [
      "Paper wasps under the eaves, yellow jackets in the ground or wall voids, mud daubers in the garage — stinging insects are the pest problem most likely to send a homeowner to urgent care, usually mid-DIY attempt on a ladder. Yellow jackets in particular defend nests aggressively and can sting repeatedly.",
      "Our technicians remove nests safely with professional protective equipment, extension tools, and treatments that eliminate the colony — including the returning foragers a knocked-down nest leaves behind. Same-day service is available for nests near doorways, play areas, and patios.",
    ],
    signs: [
      "Visible umbrella-shaped paper nests under eaves, railings, or grills",
      "Steady wasp traffic in and out of a wall crack, vent, or hole in the ground",
      "A buzzing sound inside a wall void — a hidden colony",
      "Mud tube clusters on walls and ceilings (mud daubers)",
      "Aggressive wasps defending an area of the yard",
    ],
    risks: [
      {
        title: "Multiple-Sting Attacks",
        description:
          "Unlike bees, wasps and hornets sting repeatedly, and yellow jackets recruit nestmates to attack — dangerous for anyone, life-threatening for the allergic.",
      },
      {
        title: "Anaphylaxis Risk",
        description:
          "Stinging insects send over 500,000 Americans to emergency rooms yearly; severe allergic reactions can develop even in people stung safely before.",
      },
      {
        title: "Structural Colonies",
        description:
          "Yellow jacket colonies in wall voids can grow to thousands and chew through drywall into living spaces if disturbed or poisoned incorrectly.",
      },
    ],
    treatment: [
      {
        title: "Species & Nest Assessment",
        description:
          "We identify the species and locate the true nest — often not where the wasps are most visible — and assess safe access.",
      },
      {
        title: "Protected Colony Treatment",
        description:
          "Using full protective gear and extension equipment, we treat the colony at its source, including hidden void nests.",
      },
      {
        title: "Nest Removal",
        description:
          "Where accessible, the physical nest is removed to prevent reoccupation, secondary pests, and staining.",
      },
      {
        title: "Deterrent & Prevention Treatment",
        description:
          "Eaves, soffits, and previous nest sites are treated to discourage next season's queens from rebuilding.",
      },
    ],
    prevention: [
      "Seal gaps in soffits, siding, and around utility penetrations in early spring",
      "Keep garbage and recycling bins tightly closed — sugars attract foragers",
      "Fill abandoned rodent burrows where yellow jackets nest",
      "Knock down small early-season starter nests (only when new and golf-ball sized)",
      "Schedule spring eave treatments before queens establish colonies",
    ],
    whyProfessional:
      "Wasp control is a safety issue, not a chemistry one. Spraying a nest from a ladder puts you at eye level with an aggravated colony and no escape route, and treating wall-void yellow jackets incorrectly can drive thousands of them into your house. Professionals have the gear, angles, and materials to end it without an ER visit.",
    faqs: [
      {
        question: "Wasps keep coming back to where the nest was — why?",
        answer:
          "Returning foragers navigate to the nest site for days. Our treatment includes a residual application at the site so returners are eliminated instead of rebuilding.",
      },
      {
        question: "Is it a wasp nest or a beehive?",
        answer:
          "Papery gray material means wasps or hornets; visible golden comb means honey bees. Send us a photo — bees are handled through our live-relocation bee service, never destroyed unnecessarily.",
      },
      {
        question: "How fast can you remove a nest near my door?",
        answer:
          "Nests in high-traffic areas qualify for same-day or next-morning service in most of our coverage area. Call before noon and we're usually there the same afternoon.",
      },
    ],
    related: ["bee-removal", "seasonal-pest-control", "preventive-pest-control"],
    metaDescription:
      "Same-day wasp, hornet & yellow jacket nest removal in Austin, TX. Safe, professional colony elimination with prevention treatments. Call now.",
    imageAlt:
      "Technician in protective suit removing a paper wasp nest from a home's eave with an extension pole",
  },
  {
    slug: "bee-removal",
    name: "Live Bee Removal & Relocation",
    shortName: "Bee Removal",
    category: "insects",
    icon: "bee",
    excerpt:
      "Humane honey bee swarm and hive removal with live relocation to local apiaries whenever possible.",
    heroTagline: "We save the bees — and your siding.",
    overview: [
      "Honey bees are essential pollinators, and GreenShield treats them that way: swarms and accessible hives are removed alive and relocated to partner apiaries in the Austin area whenever it's safely possible. But a colony in your wall is still a real problem — comb, honey, and brood inside a structure attract robbing insects, rodents, and cause serious moisture damage if simply poisoned and left.",
      "Our bee specialists assess whether you're seeing a temporary swarm (often gone in 48 hours), an established structural colony, or Africanized bees requiring different handling. Structural removals include opening the void, removing all comb and honey, and sealing the cavity so it's never recolonized.",
    ],
    signs: [
      "A hanging cluster of thousands of bees on a branch or fence (a swarm)",
      "Steady bee traffic into a wall gap, soffit, water meter box, or shed",
      "Humming audible through a wall, especially in the afternoon",
      "Honey or dark staining seeping through drywall or paint",
      "Sudden defensive behavior near a structure — possible Africanized colony",
    ],
    risks: [
      {
        title: "Structural Honey Damage",
        description:
          "An established colony can store 40+ pounds of honey. If the colony dies or leaves, that honey melts, ferments, and destroys drywall and framing.",
      },
      {
        title: "Africanized Bee Defense",
        description:
          "Africanized colonies — established in Central Texas — defend nests in far greater numbers and pursue much farther than European honey bees.",
      },
      {
        title: "Recolonization",
        description:
          "Abandoned comb scent attracts new swarms for years. Removals that skip comb extraction and sealing almost always repeat.",
      },
    ],
    treatment: [
      {
        title: "Assessment: Swarm vs. Colony",
        description:
          "We determine whether bees are a resting swarm, a new arrival, or an established colony with comb — each has a different best response.",
      },
      {
        title: "Live Capture & Relocation",
        description:
          "Swarms and accessible colonies are captured alive — queen included — and relocated to partner apiaries.",
      },
      {
        title: "Structural Comb Removal",
        description:
          "For wall and soffit colonies, we open the cavity, remove all comb, honey, and brood, and treat the void.",
      },
      {
        title: "Sealing & Repair Coordination",
        description:
          "Entry points are sealed and the scent neutralized to prevent recolonization; we coordinate with your contractor on cosmetic repair.",
      },
    ],
    prevention: [
      "Seal gaps larger than 1/8 inch in siding, soffits, and around pipes each spring",
      "Screen weep holes with stainless mesh designed to allow drainage",
      "Fill or cover cavities: irrigation boxes, grills, hollow posts, unused equipment",
      "Remove or seal hollow trees and old comb from previous colonies",
      "Call quickly when scout bees appear — colonies establish within days",
    ],
    whyProfessional:
      "Spraying a honey bee colony is both a loss for local pollinators and a guarantee of future damage — dead colonies leave honey that rots and comb scent that recruits the next swarm. Professional removal saves the bees where possible, and always removes what makes your structure attractive to the next colony.",
    faqs: [
      {
        question: "A swarm just landed in my tree — should I panic?",
        answer:
          "No — swarms are honey bees at their most docile, since they have no hive to defend. Keep people and pets away and call us; if we can capture it, relocation is often free or low-cost. Most swarms move on within 24–72 hours anyway.",
      },
      {
        question: "Do you kill bees?",
        answer:
          "Only as a last resort — typically confirmed Africanized colonies or situations where live removal would be unsafe. Our first option is always live relocation with our apiary partners.",
      },
      {
        question: "Will my homeowner's insurance cover bee removal?",
        answer:
          "Usually not the removal itself, but resulting repairs sometimes qualify. We provide detailed documentation and photos you can submit with a claim.",
      },
    ],
    related: ["wasp-removal", "wildlife-control", "preventive-pest-control"],
    metaDescription:
      "Humane live bee removal & relocation in Austin, TX. Swarm capture, structural hive extraction & recolonization prevention by bee specialists.",
    imageAlt:
      "Bee specialist carefully transferring a live honey bee colony into a relocation box",
  },
  {
    slug: "silverfish-control",
    name: "Silverfish Control",
    shortName: "Silverfish",
    category: "insects",
    icon: "fish",
    excerpt:
      "Protect books, photos, fabrics, and stored keepsakes from these moisture-loving paper eaters.",
    heroTagline: "Protect what they'd love to eat.",
    overview: [
      "Silverfish are ancient, wingless insects that feed on starches and cellulose — which in your home means book bindings, photographs, wallpaper paste, important documents, and natural fabrics. They thrive in the humid, undisturbed spaces of a home: attics, closets, bathrooms, and storage boxes.",
      "Because silverfish can live for years and survive months without food, established populations don't fade on their own. Our program combines targeted treatment of harborage zones with the moisture-control corrections that make infestations possible in the first place.",
    ],
    signs: [
      "Fast, wriggling silver insects in sinks, tubs, or when moving stored boxes",
      "Irregular holes and grazed-surface damage on paper, photos, or wallpaper",
      "Yellowish stains and pepper-like droppings in drawers or boxes",
      "Damage to book bindings, linens, or stored clothing",
      "Shed scales that look like glitter dust in drawers and closets",
    ],
    risks: [
      {
        title: "Irreplaceable Item Damage",
        description:
          "Family photos, documents, books, and heirloom fabrics are silverfish staples — and unlike furniture, they often can't be replaced.",
      },
      {
        title: "Allergen Contribution",
        description:
          "Silverfish scales and droppings are a documented indoor allergen that can aggravate sensitive individuals.",
      },
      {
        title: "Moisture Problem Indicator",
        description:
          "A thriving silverfish population signals humidity or moisture intrusion that may also be inviting mold and other pests.",
      },
    ],
    treatment: [
      {
        title: "Harborage Inspection",
        description:
          "We locate activity zones — attics, closets, bath traps, storage areas — and the humidity conditions supporting them.",
      },
      {
        title: "Targeted Crack & Void Treatment",
        description:
          "Residual applications and desiccant dusts are placed in the cracks, voids, and undisturbed zones where silverfish live.",
      },
      {
        title: "Moisture Correction Plan",
        description:
          "We identify the humidity sources — ventilation gaps, leaks, condensation — and give you the specific fixes.",
      },
      {
        title: "Monitoring & Follow-Up",
        description:
          "Sticky monitors verify control; silverfish are long-lived, so we confirm rather than assume elimination.",
      },
    ],
    prevention: [
      "Run a dehumidifier in damp rooms; target under 50% relative humidity",
      "Store keepsakes, photos, and documents in sealed plastic bins — not cardboard",
      "Fix leaks and improve bathroom/attic ventilation",
      "Vacuum closet floors and shelf corners regularly",
      "Reduce paper clutter piles that provide food and harborage",
    ],
    whyProfessional:
      "Silverfish hide in deep cracks and insulation where surface sprays never reach, and they reproduce slowly enough that infestations build unnoticed for years. Professional desiccant dusts placed inside voids provide years of control, while our moisture assessment fixes the root condition DIY treatments ignore.",
    faqs: [
      {
        question: "Are silverfish harmful to people or pets?",
        answer:
          "They don't bite or spread disease — their damage is to belongings. The main health note is their contribution to indoor allergens in heavy infestations.",
      },
      {
        question: "Why do I only see them at night?",
        answer:
          "Silverfish are strongly nocturnal and photophobic — they flee light instantly. Daytime sightings usually indicate a large population competing for harborage.",
      },
      {
        question: "How do I protect stored photos and documents?",
        answer:
          "Sealed polypropylene bins with tight lids, stored off the floor in low-humidity spaces. Add a silica gel pack for archival boxes. We'll point out your high-risk storage areas during inspection.",
      },
    ],
    related: ["cockroach-control", "preventive-pest-control", "seasonal-pest-control"],
    metaDescription:
      "Silverfish extermination in Austin, TX. Protect books, photos & fabrics with targeted void treatments plus moisture correction. Free inspection.",
    imageAlt:
      "Close inspection of a storage closet shelf for silverfish activity and paper damage",
  },
  {
    slug: "wildlife-control",
    name: "Wildlife Removal & Exclusion",
    shortName: "Wildlife Control",
    category: "wildlife",
    icon: "squirrel",
    excerpt:
      "Humane removal of raccoons, squirrels, opossums, and bats — plus exclusion repairs that keep them out.",
    heroTagline: "Humane removal. Permanent exclusion.",
    overview: [
      "The scratching in your attic at 2 AM is rarely 'nothing.' Raccoons, squirrels, opossums, and bats treat attics and crawl spaces as ready-made dens — warm, dry, and predator-free. Once inside, they tear ductwork, soak insulation with waste, and gnaw wiring.",
      "GreenShield's wildlife program is humane-first and exclusion-focused: we identify the animal, remove or evict it using one-way doors and live traps in compliance with Texas wildlife regulations, then repair every entry point with animal-proof materials. Bats receive special handling — they're protected, beneficial, and require precisely timed exclusion.",
    ],
    signs: [
      "Heavy thumping or scratching in the attic — at night (raccoons) or dawn/dusk (squirrels)",
      "Torn soffits, lifted shingles, or a hole at a roofline junction",
      "Droppings in the attic, staining on ceilings, or a strong ammonia odor",
      "Insulation compressed into trails and nests",
      "Guano accumulating below a gable vent or shutter (bats)",
    ],
    risks: [
      {
        title: "Disease & Parasite Exposure",
        description:
          "Raccoons carry raccoon roundworm and can carry rabies; bat guano can harbor histoplasmosis; all wildlife imports fleas, ticks, and mites into the structure.",
      },
      {
        title: "Fire & Water Damage",
        description:
          "Gnawed wiring and torn ductwork are standard wildlife damage; entry holes also become water intrusion points every time it rains.",
      },
      {
        title: "Contaminated Insulation",
        description:
          "Wildlife waste saturates attic insulation, cutting its R-value and creating odor that attracts the next animal.",
      },
    ],
    treatment: [
      {
        title: "Full Attic & Exterior Inspection",
        description:
          "We identify the species, count entry points, and document damage with photos you can use for insurance.",
      },
      {
        title: "Humane Removal or Eviction",
        description:
          "One-way doors let animals exit without re-entry; live trapping is used where required, always checking for dependent young first.",
      },
      {
        title: "Exclusion Repairs",
        description:
          "Entry points are sealed with heavy-gauge screening, flashing, and chew-proof materials — roofline to foundation.",
      },
      {
        title: "Sanitation & Restoration",
        description:
          "Waste removal, disinfection, deodorizing, and insulation remediation options return the attic to a healthy state.",
      },
    ],
    prevention: [
      "Trim branches 6–8 feet back from the roofline",
      "Cap chimneys and screen gable, ridge, and soffit vents",
      "Secure pet doors at night and never leave pet food outside",
      "Keep garbage in locking-lid cans stored in the garage until pickup",
      "Inspect the roofline each season for new gaps, lifted shingles, or torn screens",
    ],
    whyProfessional:
      "Wildlife work is regulated, hazardous, and unforgiving of mistakes: seal a raccoon's kits inside and the mother will tear through your roof to reach them. Professionals time evictions to breeding seasons, comply with Texas Parks & Wildlife rules (especially for bats), and back exclusion repairs with a warranty.",
    faqs: [
      {
        question: "Is there an animal in my attic or just mice?",
        answer:
          "Sound is a good clue: light scurrying suggests rodents; heavy thumping or vocal chatter suggests raccoons; rapid rolling sounds at dawn suggest squirrels. Our inspection confirms it from droppings, tracks, and entry size.",
      },
      {
        question: "What do you do with animals after removal?",
        answer:
          "Whenever regulations allow, animals are released unharmed. Texas law restricts relocation for some species, and our specialists handle each case in full compliance — we'll explain exactly what happens for your animal.",
      },
      {
        question: "What if there are babies in my attic?",
        answer:
          "This is exactly why timing matters. We locate and reunite young with the mother during eviction — she'll relocate them herself through the one-way system. Sealing them in is inhumane and causes worse damage.",
      },
    ],
    related: ["rodent-control", "bird-control", "snake-removal"],
    metaDescription:
      "Humane wildlife removal in Austin, TX — raccoons, squirrels, opossums & bats. One-way eviction, exclusion repairs & attic restoration. Licensed.",
    imageAlt:
      "Wildlife specialist installing a one-way exclusion door at a raccoon entry point on a roofline",
  },
  {
    slug: "snake-removal",
    name: "Snake Removal & Prevention",
    shortName: "Snake Removal",
    category: "wildlife",
    icon: "worm",
    excerpt:
      "Fast, safe removal of venomous and non-venomous snakes plus habitat changes that keep them away.",
    heroTagline: "Back away. Call us. We handle the rest.",
    overview: [
      "Central Texas is home to both harmless rat snakes that control rodents and four venomous groups — copperheads, cottonmouths, rattlesnakes, and coral snakes. Telling them apart at a glance in tall grass isn't a gamble worth taking, and most snakebites happen during amateur removal attempts.",
      "Our snake service offers rapid response for removal — same-day for confirmed sightings inside homes or garages — plus the part that actually matters long-term: eliminating what attracted the snake. Snakes follow food (rodents) and shelter (cover, gaps, debris). Fix those and snakes stop showing up.",
    ],
    signs: [
      "A snake sighted in the yard, garage, pool area, or inside the home",
      "Shed snake skins near the foundation, woodpiles, or in the garage",
      "Serpentine tracks across dusty floors or sandy soil",
      "Sudden drop in rodent sounds — a predator may have moved in",
      "Heavy rodent activity — the food source that draws snakes",
    ],
    risks: [
      {
        title: "Venomous Snakebite",
        description:
          "Copperheads cause the most bites in Texas — they freeze rather than flee, and their camouflage is exceptional. Bites mean an ER visit and often antivenom.",
      },
      {
        title: "Pets at High Risk",
        description:
          "Curious dogs are bitten far more often than people, usually on the face — a veterinary emergency with a five-figure treatment cost.",
      },
      {
        title: "Indicated Rodent Problem",
        description:
          "A snake near the house is nearly always following prey. The rodent population feeding it is the underlying infestation.",
      },
    ],
    treatment: [
      {
        title: "Rapid-Response Removal",
        description:
          "A trained specialist safely captures and removes the snake — venomous or not — with professional tools, no harm to you or the animal.",
      },
      {
        title: "Property Habitat Assessment",
        description:
          "We identify cover, gaps under slabs and sheds, debris piles, and moisture that make your property snake-friendly.",
      },
      {
        title: "Prey Elimination Program",
        description:
          "Rodent control removes the food source — the single most effective long-term snake deterrent that exists.",
      },
      {
        title: "Exclusion & Deterrence",
        description:
          "Gaps under doors, slabs, and skirting are sealed; snake-proof mesh can be installed on fencing around play areas.",
      },
    ],
    prevention: [
      "Keep grass short and remove brush, rock, and wood piles near the home",
      "Seal gaps under garage doors, sheds, decks, and foundation skirting",
      "Control rodents — no food means no reason to visit",
      "Store firewood off the ground and away from the house",
      "Use a flashlight in the yard at night during warm months",
    ],
    whyProfessional:
      "Misidentifying a venomous snake is a hospital trip, and even 'dead' snakes retain a bite reflex for hours. Professional handlers identify species instantly, remove the animal legally and safely, and — unlike a one-off catch — fix the rodent and habitat conditions so the next snake doesn't follow the same trail in.",
    faqs: [
      {
        question: "What should I do while waiting for the technician?",
        answer:
          "Keep eyes on the snake from a safe distance (at least 6 feet) if you can do so safely, keep pets and kids inside, and don't attempt to trap or kill it. If it's indoors, close the door to that room and put a towel at the gap.",
      },
      {
        question: "Do snake repellent granules work?",
        answer:
          "Independent testing consistently shows commercial snake repellents perform poorly. Habitat modification and rodent control outperform every repellent on the market — that's where we focus.",
      },
      {
        question: "Should harmless snakes be removed too?",
        answer:
          "Rat snakes are excellent rodent control, and in a back fence line many customers leave them be. But any snake in a garage, pool, or play area should be professionally relocated — we're happy to do it humanely.",
      },
    ],
    related: ["rodent-control", "wildlife-control", "preventive-pest-control"],
    metaDescription:
      "Same-day snake removal in Austin, TX — venomous & non-venomous. Safe capture, habitat modification & rodent control to keep snakes away.",
    imageAlt:
      "Trained specialist safely capturing a snake with professional tongs near a home's foundation",
  },
  {
    slug: "bird-control",
    name: "Bird Control & Deterrent Systems",
    shortName: "Bird Control",
    category: "wildlife",
    icon: "bird",
    excerpt:
      "Humane deterrents — netting, spikes, and exclusion — that end roosting, nesting, and cleanup costs.",
    heroTagline: "Your building isn't a birdhouse.",
    overview: [
      "Pigeons, starlings, and sparrows cause damage out of proportion to their size: acidic droppings that eat paint, stone, and metal; nests that clog gutters, vents, and HVAC intakes; and ectoparasites — bird mites, ticks — that migrate indoors when nests are established. For businesses, droppings on walkways are also a documented slip-and-fall liability.",
      "GreenShield installs humane, architecturally discreet deterrent systems matched to the pressure level: exclusion netting for high-pressure roosts, low-profile spikes and shock track for ledges, and vent guards for the dryer and bathroom vents sparrows love. No harm to the birds — just relocation of the problem off your property.",
    ],
    signs: [
      "Accumulating droppings on ledges, signage, walkways, or parked cars",
      "Nesting material in gutters, dryer vents, signage, or HVAC units",
      "Persistent cooing or flapping in attics, canopies, or parking structures",
      "Unexplained bites at night — possible bird mites from an abandoned nest",
      "Feathers and debris around rooftop equipment",
    ],
    risks: [
      {
        title: "Corrosive, Costly Droppings",
        description:
          "Bird droppings are highly acidic, permanently etching paint, stone, and metal — and a slip hazard that creates real premises liability.",
      },
      {
        title: "Health Concerns",
        description:
          "Accumulated droppings can harbor histoplasmosis and salmonella; abandoned nests release bird mites that bite humans.",
      },
      {
        title: "Fire & Equipment Hazards",
        description:
          "Nests in dryer vents and signage are a documented fire risk, and nesting in HVAC intakes contaminates building air.",
      },
    ],
    treatment: [
      {
        title: "Pressure Assessment",
        description:
          "We classify each area as nesting, roosting, or loafing pressure — the deterrent that works for one fails for another.",
      },
      {
        title: "Deterrent System Design",
        description:
          "Netting, spike, shock-track, and wire systems are specified to be effective and nearly invisible on your architecture.",
      },
      {
        title: "Cleanup & Sanitation",
        description:
          "Droppings and nest material are safely removed with appropriate PPE and surfaces disinfected before installation.",
      },
      {
        title: "Installation & Warranty",
        description:
          "Systems are installed with manufacturer-backed warranties and inspected on a maintenance schedule.",
      },
    ],
    prevention: [
      "Screen dryer, bathroom, and attic vents with purpose-made guards",
      "Fix torn canopy fabric and gaps in signage where sparrows nest",
      "Remove standing water and control food waste around dumpsters",
      "Never feed pigeons — a single feeder can sustain an entire flock",
      "Address the first nest quickly; established colonies return to the same site",
    ],
    whyProfessional:
      "Plastic owls and reflective tape stop working within days — birds habituate to anything that never actually threatens them. Professional bird work is exclusion engineering: physically denying the ledge, void, or vent. Correct product choice and installation is the entire difference between solved and recurring.",
    faqs: [
      {
        question: "Are your bird control methods humane?",
        answer:
          "Yes — everything we install is deterrent and exclusion based. We never harm birds, and we comply fully with the Migratory Bird Treaty Act, which protects most species and active nests.",
      },
      {
        question: "There's a nest with eggs in my vent — can you remove it?",
        answer:
          "It depends on the species. Starlings, pigeons, and house sparrows aren't federally protected and can be handled immediately; protected species require waiting out the nesting cycle, then excluding. We identify first and always act legally.",
      },
      {
        question: "Will spikes make my storefront look industrial?",
        answer:
          "Modern deterrents are far more discreet than people expect — clear polycarbonate spikes, thin shock track in color-matched bases, and netting that disappears at ten feet. We design for your architecture, not against it.",
      },
    ],
    related: ["wildlife-control", "rodent-control", "preventive-pest-control"],
    metaDescription:
      "Humane bird control in Austin, TX — pigeon deterrents, exclusion netting, vent guards & cleanup for homes and commercial buildings.",
    imageAlt:
      "Installer fitting discreet bird deterrent spikes along a commercial building ledge",
  },
  {
    slug: "seasonal-pest-control",
    name: "Seasonal Pest Control",
    shortName: "Seasonal Pest Control",
    category: "programs",
    icon: "calendar",
    excerpt:
      "Treatments timed to Central Texas pest cycles — hitting each pest at its most vulnerable moment.",
    heroTagline: "Right treatment. Right pest. Right time.",
    overview: [
      "Pests run on a calendar. Ant colonies bud in spring, mosquitoes peak in summer, rodents push indoors at the first fall cold front, and overwintering insects hide in wall voids until the first warm week. Treating every pest the same way year-round means always fighting them at their strongest.",
      "Our seasonal program flips that: each quarterly visit is engineered for what's coming next in the Central Texas pest cycle. Spring visits break up emerging ant and wasp activity; summer focuses on mosquitoes, fleas, and scorpions; fall hardens your home against rodent entry; winter treats the harborage pests hide in. Same guarantee, smarter timing.",
    ],
    signs: [
      "Pest problems that repeat at the same time every year",
      "Spring ant explosions or wasp nests appearing on the eaves",
      "Summer mosquito, flea, and spider pressure making the yard unusable",
      "Fall scratching sounds as rodents move in ahead of cold fronts",
      "Winter sightings of overwintering pests on warm days",
    ],
    risks: [
      {
        title: "The Reactive Cost Cycle",
        description:
          "Waiting for each seasonal infestation to appear means paying for corrective treatments at premium urgency — every single year.",
      },
      {
        title: "Compounding Populations",
        description:
          "Pests that overwinter successfully emerge with a head start; each untreated season makes the next one worse.",
      },
      {
        title: "Seasonal Damage Windows",
        description:
          "Termite swarms, rodent entry, and wasp colony founding each have narrow windows where prevention is easy — and long aftermaths where it isn't.",
      },
    ],
    treatment: [
      {
        title: "Spring: Emergence Defense",
        description:
          "Perimeter treatment before ant, wasp, and termite swarm season; eave treatments stop queens from founding colonies on your home.",
      },
      {
        title: "Summer: Yard Reclamation",
        description:
          "Mosquito, flea, tick, and scorpion pressure is met with barrier and harborage treatments at their population peak.",
      },
      {
        title: "Fall: Exclusion Hardening",
        description:
          "Before the first cold front, we treat and seal against rodents, spiders, and overwintering insects seeking warmth.",
      },
      {
        title: "Winter: Harborage Strike",
        description:
          "With populations concentrated in harborage, winter treatments hit pests where they're hiding — and set up a quiet spring.",
      },
    ],
    prevention: [
      "Walk your property each season change — new gaps, standing water, overgrowth",
      "Refresh door sweeps and weather stripping before fall",
      "Cut vegetation back from the structure ahead of spring growth",
      "Clean gutters in fall and spring to eliminate breeding and nesting sites",
      "Keep a consistent treatment schedule — gaps in protection are when pests re-establish",
    ],
    whyProfessional:
      "Seasonal timing is local knowledge: the week fire ants swarm, the first front that pushes rodents indoors, the month scorpion activity peaks in your ZIP code. Our technicians treat by the Central Texas pest calendar refined over 17 years — a precision no fixed DIY schedule matches.",
    faqs: [
      {
        question: "How is this different from the quarterly plan?",
        answer:
          "Our quarterly plans are seasonal — this page describes the philosophy behind them. Every GreenShield recurring plan times its treatments to the regional pest cycle rather than running the same generic service each visit.",
      },
      {
        question: "What's the worst season for pests in Austin?",
        answer:
          "Late spring through summer brings the most species pressure — ants, mosquitoes, wasps, scorpions — but fall rodent season causes the most property damage. Both are far easier to prevent than to correct.",
      },
      {
        question: "Can I start a seasonal plan mid-year?",
        answer:
          "Absolutely. Your first visit addresses current activity plus the upcoming season's threats, and the schedule aligns from there. Most customers start after noticing a seasonal problem — that's the perfect time.",
      },
    ],
    related: ["preventive-pest-control", "mosquito-control", "rodent-control"],
    metaDescription:
      "Seasonal pest control in Austin, TX timed to Central Texas pest cycles — spring, summer, fall & winter programs from local experts.",
    imageAlt:
      "Calendar-based seasonal pest treatment plan illustrated across the four Texas seasons",
  },
  {
    slug: "preventive-pest-control",
    name: "Preventive Pest Control Plans",
    shortName: "Preventive Plans",
    category: "programs",
    icon: "shield-check",
    excerpt:
      "Year-round protection plans that stop infestations before they start — backed by our pest-free guarantee.",
    heroTagline: "The best infestation is the one that never happens.",
    overview: [
      "Every corrective treatment we perform tells the same story: the infestation was cheaper to prevent than to fix. Preventive pest control inverts the economics — a modest recurring investment that maintains a continuous protective barrier, catches early activity during scheduled inspections, and comes with a guarantee that makes surprises our problem, not yours.",
      "GreenShield protection plans include scheduled perimeter treatments, interior service whenever needed, de-webbing and wasp nest sweeps, entry-point monitoring, and unlimited free re-services between visits if anything breaks through. It's the plan 48,000+ Central Texas homes trust — because it works quietly.",
    ],
    signs: [
      "You're treating the same pest problems repeatedly each year",
      "You've had more than one corrective treatment in 24 months",
      "Your home borders greenbelt, creek, or undeveloped land",
      "You're buying a new home and want it protected from day one",
      "You simply never want to think about pests again",
    ],
    risks: [
      {
        title: "Reactive Treatment Premium",
        description:
          "Corrective treatments for established infestations routinely cost 3–5× a year of preventive service — plus the damage bill.",
      },
      {
        title: "Unseen Establishment",
        description:
          "Termites, carpenter ants, and rodents cause most of their damage before the first visible sign. No inspections means no early warning.",
      },
      {
        title: "Barrier Decay",
        description:
          "All perimeter treatments degrade with UV and rain. Without scheduled renewal, protection silently expires — and pests notice before you do.",
      },
    ],
    treatment: [
      {
        title: "Initial Deep Service",
        description:
          "An intensive first visit resolves current activity: full interior and exterior treatment, de-webbing, and entry-point documentation.",
      },
      {
        title: "Scheduled Barrier Renewal",
        description:
          "Bimonthly or quarterly exterior treatments renew the protective perimeter before it degrades — most visits don't require you home.",
      },
      {
        title: "Every-Visit Inspection",
        description:
          "Technicians check monitoring points, conducive conditions, and early-warning signs on each visit, and report what they find.",
      },
      {
        title: "Unlimited Re-Services",
        description:
          "See activity between visits? We return free until it's resolved. That's the pest-free guarantee in practice.",
      },
    ],
    prevention: [
      "Keep the treated perimeter clear — avoid stacking items against exterior walls",
      "Report any pest sighting promptly so we can respond within the guarantee",
      "Maintain door sweeps, screens, and weather sealing between visits",
      "Follow your technician's conducive-condition notes — they're personalized to your home",
      "Keep landscaping trimmed a hand's width off the structure",
    ],
    whyProfessional:
      "Prevention is a system: the right materials rotated to prevent resistance, applied on a schedule matched to their degradation curve, with inspection data compounding visit after visit. A store-bought perimeter spray delivers none of that — and none of the guarantee that makes breakthroughs free to fix.",
    faqs: [
      {
        question: "What does a preventive plan cost?",
        answer:
          "Home plans start at $49/month depending on home size and coverage level — see our Service Plans page for the full comparison. Every plan includes free re-services, so the price you see is the price you pay.",
      },
      {
        question: "Do I need to be home for every visit?",
        answer:
          "No — regular visits focus on the exterior barrier. We notify you before arrival, service the outside, and leave a digital report. Interior service is scheduled whenever you need it.",
      },
      {
        question: "Is there a contract?",
        answer:
          "Plans are annual for pricing purposes but we don't believe in trapping customers: cancel anytime with 30 days' notice, no cancellation fees. Our 98% retention rate is earned, not enforced.",
      },
    ],
    related: ["seasonal-pest-control", "termite-control", "rodent-control"],
    metaDescription:
      "Preventive pest control plans in Austin, TX from $49/mo — scheduled treatments, inspections & unlimited free re-services. Pest-free guarantee.",
    imageAlt:
      "GreenShield technician performing a scheduled exterior barrier treatment around a home's perimeter",
  },
];

/** Find a service by slug. */
export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Services flagged for homepage/menu display. */
export const featuredServices = services.filter((s) => s.featured);

/** Category display labels. */
export const serviceCategories: Record<Service["category"], string> = {
  insects: "Insect Control",
  rodents: "Rodent Control",
  wildlife: "Wildlife Services",
  programs: "Protection Programs",
};
