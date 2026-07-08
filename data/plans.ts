import type { Plan } from "@/types";

export const plans: Plan[] = [
  {
    id: "essential",
    name: "Essential Shield",
    price: 49,
    period: "/month",
    tagline: "Core protection for everyday pests",
    features: [
      "Quarterly exterior barrier treatments",
      "Interior treatments on request",
      "Covers 15+ common household pests",
      "Free re-services between visits",
      "Digital service reports",
      "No cancellation fees",
    ],
    pestsCovered: ["Ants", "Roaches", "Spiders", "Crickets", "Wasps", "Silverfish", "Earwigs", "Millipedes"],
    cta: "Start Essential",
  },
  {
    id: "complete",
    name: "Complete Shield",
    price: 79,
    period: "/month",
    tagline: "Our most popular plan — total home defense",
    popular: true,
    features: [
      "Everything in Essential Shield",
      "Bimonthly service visits",
      "Rodent monitoring & control included",
      "Seasonal wasp nest removal",
      "Fire ant yard treatment",
      "Scorpion-specific treatments",
      "Priority same-day scheduling",
    ],
    pestsCovered: ["All Essential pests", "Mice & Rats", "Fire Ants", "Scorpions", "Fleas", "Ticks"],
    cta: "Start Complete",
  },
  {
    id: "premium",
    name: "Premium Shield",
    price: 119,
    period: "/month",
    tagline: "Maximum protection, zero compromises",
    features: [
      "Everything in Complete Shield",
      "Termite monitoring & annual inspection",
      "Seasonal mosquito reduction (Mar–Oct)",
      "Attic & crawl space inspections",
      "Wildlife activity monitoring",
      "Dedicated senior technician",
      "Annual exclusion touch-up service",
    ],
    pestsCovered: ["All Complete pests", "Termite monitoring", "Mosquitoes", "Wildlife monitoring"],
    cta: "Start Premium",
  },
];

/** What every plan includes, shown below the pricing grid. */
export const allPlansInclude = [
  "Pest-free guarantee with unlimited free re-services",
  "Licensed, background-checked technicians",
  "Text-ahead arrival notifications",
  "Family and pet-conscious treatment methods",
  "No long-term contract lock-in — cancel with 30 days' notice",
  "Transferable service history if you sell your home",
];
