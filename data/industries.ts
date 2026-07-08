import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants & Food Service",
    icon: "utensils",
    description:
      "Health-inspection-ready pest programs with before-hours service, full documentation, and rapid response — because one sighting can cost you a dining room.",
    concerns: ["Health code compliance", "German cockroach pressure", "Fly control at entries & drains", "Rodent-proof waste areas"],
  },
  {
    slug: "hotels",
    name: "Hotels & Hospitality",
    icon: "bed",
    description:
      "Discreet, guest-invisible service with proactive bed bug monitoring and same-day room response protocols that protect your reviews and revenue.",
    concerns: ["Bed bug prevention & response", "Discreet service windows", "Kitchen & laundry pest pressure", "Brand standard compliance"],
  },
  {
    slug: "healthcare",
    name: "Healthcare Facilities",
    icon: "heart-pulse",
    description:
      "Low-impact, precisely documented programs designed for patient environments, sensitive populations, and Joint Commission scrutiny.",
    concerns: ["Patient safety protocols", "Regulatory documentation", "Sensitive-area treatment methods", "24/7 response availability"],
  },
  {
    slug: "schools",
    name: "Schools & Universities",
    icon: "graduation-cap",
    description:
      "IPM-first programs that meet Texas school district requirements, scheduled around student hours with full transparency for parents and administrators.",
    concerns: ["IPM compliance for schools", "Child-safe treatment standards", "Cafeteria & dorm pressure", "Break-schedule deep services"],
  },
  {
    slug: "warehouses",
    name: "Warehouses & Distribution",
    icon: "warehouse",
    description:
      "Large-footprint rodent and stored-product pest programs with device mapping, trend reporting, and dock-door exclusion strategies.",
    concerns: ["Rodent control at dock doors", "Stored product pests", "Bird control in high bays", "Audit-ready trend reports"],
  },
  {
    slug: "offices",
    name: "Office Buildings",
    icon: "building",
    description:
      "Quiet, scheduled protection for professional environments — breakroom ant and roach prevention, tenant-complaint response, and clean common areas.",
    concerns: ["Tenant satisfaction", "Breakroom & kitchen pests", "After-hours service", "Multi-tenant coordination"],
  },
  {
    slug: "retail",
    name: "Retail Stores",
    icon: "shopping-bag",
    description:
      "Brand-protecting programs for storefronts and stockrooms, with early-morning service and inventory-safe treatment methods.",
    concerns: ["Customer-facing appearance", "Stockroom rodent pressure", "Entry-door fly control", "Corporate reporting standards"],
  },
  {
    slug: "property-management",
    name: "Property Management",
    icon: "key",
    description:
      "Portfolio-wide coverage for multifamily and HOA communities: centralized billing, unit-level treatment coordination, and resident communication support.",
    concerns: ["Unit turnover treatments", "Bed bug protocols", "Resident communication", "Portfolio-level reporting"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing Sites",
    icon: "factory",
    description:
      "GMP-aligned pest management for production environments, with contamination prevention, device mapping, and third-party audit support.",
    concerns: ["GMP & audit compliance", "Contamination prevention", "Large-perimeter exclusion", "Documentation standards"],
  },
];
