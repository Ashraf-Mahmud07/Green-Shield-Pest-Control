import type { TeamMember, JobOpening } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    name: "Daniel Greene",
    role: "Founder & CEO",
    bio: "Daniel started GreenShield in 2009 with one truck and a conviction that pest control could be honest, science-driven, and genuinely local. Seventeen years later, the trucks have multiplied — the conviction hasn't changed.",
    credentials: ["Certified Applicator (TDA)", "Associate Certified Entomologist", "17 years in the field"],
  },
  {
    name: "Dana Whitfield",
    role: "Senior Wildlife & Rodent Specialist",
    bio: "Dana leads our wildlife and rodent division, bringing a decade of humane-exclusion expertise. If it scratches, thumps, or scurries, Dana has evicted it — and sealed the door behind it.",
    credentials: ["NWCOA Certified Wildlife Professional", "Texas Wildlife Permit Holder", "Exclusion Repair Specialist"],
  },
  {
    name: "Miguel Santos",
    role: "Termite Division Lead",
    bio: "Miguel has personally inspected over 9,000 Central Texas structures for termites. He trains every GreenShield inspector on the detection craft that catches colonies before the damage bill arrives.",
    credentials: ["Termite Certified Applicator", "WDI Inspection Licensed", "9,000+ inspections completed"],
  },
  {
    name: "Keisha Lawrence",
    role: "Bed Bug Program Manager",
    bio: "Keisha built our bed bug protocol from the ground up — inspection standards, treatment sequencing, and the follow-up verification that turns 'probably gone' into 'confirmed gone.'",
    credentials: ["Bed Bug Management Certified", "IPM Specialist", "Multifamily Protocol Author"],
  },
  {
    name: "Robert Klein",
    role: "Commercial Accounts Director",
    bio: "Robert partners with restaurants, healthcare facilities, and warehouses on audit-ready pest programs. He speaks fluent health inspector, AIB auditor, and facilities director.",
    credentials: ["Food Safety Pest Management Certified", "AIB Audit Experience", "15 years commercial IPM"],
  },
  {
    name: "Sofia Ramirez",
    role: "Customer Experience Manager",
    bio: "Sofia leads the team that answers your calls, coordinates your visits, and makes sure every service ends with the problem solved and the customer heard. Our 4.9-star rating lives in her department.",
    credentials: ["Customer Operations Lead", "Bilingual Service Team", "Same-Day Dispatch Coordinator"],
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: "pest-tech",
    title: "Pest Control Technician",
    type: "Full-Time",
    location: "Austin, TX",
    description:
      "Join our residential service team. We train from scratch — attitude and reliability matter more than experience. Company vehicle, paid licensing, and a route close to home.",
    requirements: [
      "Valid Texas driver's license with clean record",
      "Able to pass background check and drug screening",
      "Comfortable with physical work (attics, crawl spaces, ladders)",
      "Customer-first communication style",
    ],
  },
  {
    id: "termite-inspector",
    title: "Termite Inspector (WDI Licensed)",
    type: "Full-Time",
    location: "Austin Metro",
    description:
      "Perform residential and real-estate termite inspections with our termite division. WDI license required; we'll keep your CEUs current and your schedule sane.",
    requirements: [
      "Texas WDI inspection license",
      "2+ years termite inspection experience",
      "Strong written documentation skills",
      "Real estate transaction experience a plus",
    ],
  },
  {
    id: "csr",
    title: "Customer Service Representative",
    type: "Full-Time",
    location: "Austin, TX (Office)",
    description:
      "Be the voice of GreenShield — scheduling services, answering pest questions, and coordinating our dispatch board. Bilingual (English/Spanish) candidates strongly encouraged.",
    requirements: [
      "Excellent phone and written communication",
      "Experience with scheduling or CRM software",
      "Calm under a busy multi-line phone day",
      "Bilingual English/Spanish preferred",
    ],
  },
  {
    id: "commercial-account-manager",
    title: "Commercial Account Manager",
    type: "Full-Time",
    location: "Austin Metro",
    description:
      "Grow and support our commercial portfolio — restaurants, healthcare, warehousing. You'll own client relationships, program design, and audit-season support.",
    requirements: [
      "3+ years B2B account management (pest industry a plus)",
      "Understanding of health-code and audit environments",
      "Consultative, documentation-strong working style",
      "Valid driver's license for client site visits",
    ],
  },
];
