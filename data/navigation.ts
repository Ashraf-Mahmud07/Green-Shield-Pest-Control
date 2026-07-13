import { serviceAreas } from "@/data/locations";
import { serviceCategories, services } from "@/data/services";
import type { NavLink } from "@/types";

/** Mega-menu columns for the Services item, grouped by category. */
export const serviceMenuColumns = (
  Object.keys(serviceCategories) as (keyof typeof serviceCategories)[]
).map((category) => ({
  label: serviceCategories[category],
  links: services
    .filter((s) => s.category === category)
    .map((s) => ({ label: s.shortName, href: `/services/${s.slug}` })),
}));

/** Primary header navigation. Items with `children` render a dropdown. */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    // children rendered as mega menu from serviceMenuColumns
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      {
        label: "Residential Pest Control",
        href: "/residential",
        description: "Family-safe home protection plans",
      },
      {
        label: "Commercial Pest Control",
        href: "/commercial",
        description: "Audit-ready programs for business",
      },
      {
        label: "Emergency Service",
        href: "/emergency",
        description: "Same-day urgent pest response",
      },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Our story, team & values",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
        description: "What 48,000+ customers say",
      },
      {
        label: "Gallery",
        href: "/gallery",
        description: "Our work, before & after",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join the GreenShield team",
      },
      {
        label: "Service Areas",
        href: "/service-areas",
        description: "Cities we cover",
      },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      {
        label: "Blog",
        href: "/blog",
        description: "Guides, tips & pest science",
      },
      {
        label: "FAQs",
        href: "/faqs",
        description: "Answers to common questions",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Footer link groups. */
export const footerNav = {
  services: services
    .filter((s) => s.featured)
    .map((s) => ({ label: s.shortName, href: `/services/${s.slug}` }))
    .concat([{ label: "All Services", href: "/services" }]),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Gallery", href: "/gallery" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
  ],
  areas: serviceAreas.map((a) => ({
    label: `${a.city}, ${a.state}`,
    href: `/service-areas/${a.slug}`,
  })),
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
