import type { LucideIcon } from "lucide-react";

/** A single FAQ entry, reused across pages and schema markup. */
export interface Faq {
  question: string;
  answer: string;
}

/** Dedicated pest/service page content. */
export interface Service {
  slug: string;
  name: string;
  /** Short label used on cards and menus. */
  shortName: string;
  category: "insects" | "rodents" | "wildlife" | "programs";
  icon: string; // key into the icon map
  excerpt: string;
  heroTagline: string;
  overview: string[];
  signs: string[];
  risks: { title: string; description: string }[];
  treatment: { title: string; description: string }[];
  prevention: string[];
  whyProfessional: string;
  faqs: Faq[];
  related: string[]; // slugs
  /** Meta description for SEO. */
  metaDescription: string;
  imageAlt: string;
  featured?: boolean;
}

/** City / service-area page content. */
export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  headline: string;
  intro: string;
  localPests: { name: string; note: string }[];
  services: string[]; // service slugs available in this area
  benefits: string[];
  review: { quote: string; author: string; neighborhood: string };
  faqs: Faq[];
  zipCodes: string[];
  metaDescription: string;
}

/** Blog article. */
export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  author: { name: string; role: string };
  imageAlt: string;
  /** Markdown-lite content: array of blocks. */
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
  tags: string[];
  featured?: boolean;
}

/** Customer testimonial. */
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  service: string;
  quote: string;
  date: string;
}

/** Recurring service plan. */
export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  tagline: string;
  features: string[];
  pestsCovered: string[];
  popular?: boolean;
  cta: string;
}

/** Commercial industry vertical. */
export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  concerns: string[];
}

/** Team member profile. */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
}

/** Open career position. */
export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

/** Navigation link (optionally with children for mega menu). */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
}

/** Icon-based value proposition item. */
export interface ValueProp {
  icon?: LucideIcon;
  title: string;
  description: string;
}
