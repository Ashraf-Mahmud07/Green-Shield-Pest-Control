/**
 * Single source of truth for company identity, contact details, and navigation.
 * Update here and every page, schema block, and footer stays in sync.
 */

export const site = {
  name: "GreenShield Pest Control",
  legalName: "GreenShield Pest Control LLC",
  tagline: "Protecting Homes & Businesses Since 2009",
  url: "https://www.greenshieldpest.com",
  phone: "(512) 555-0148",
  phoneHref: "tel:+15125550148",
  emergencyPhone: "(512) 555-0199",
  emergencyPhoneHref: "tel:+15125550199",
  email: "hello@greenshieldpest.com",
  address: {
    street: "4801 Ranch Trail Road, Suite 210",
    city: "Austin",
    state: "TX",
    zip: "78735",
    country: "US",
  },
  geo: { lat: 30.2672, lng: -97.7431 },
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { days: "Saturday", time: "8:00 AM – 5:00 PM" },
    { days: "Sunday", time: "Emergency service only" },
  ],
  founded: 2009,
  social: {
    facebook: "https://facebook.com/greenshieldpest",
    instagram: "https://instagram.com/greenshieldpest",
    twitter: "https://twitter.com/greenshieldpest",
    youtube: "https://youtube.com/@greenshieldpest",
    linkedin: "https://linkedin.com/company/greenshieldpest",
  },
  rating: { value: 4.9, count: 2384 },
  license: "TX Pest Control License #0791482",
} as const;

export const stats = [
  { value: 17, suffix: "+", label: "Years Protecting Central Texas" },
  { value: 48000, suffix: "+", label: "Homes & Businesses Served" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Average Google Rating" },
  { value: 98, suffix: "%", label: "Customer Retention Rate" },
] as const;

export const guarantees = [
  {
    title: "Pest-Free Guarantee",
    description:
      "If pests return between scheduled visits, so do we — at no extra charge. No fine print, no re-treatment fees.",
  },
  {
    title: "Licensed & Insured",
    description:
      "Every technician is state-licensed, background-checked, and covered by full liability insurance.",
  },
  {
    title: "Family & Pet Safe",
    description:
      "EPA-registered, targeted treatments applied by certified professionals who treat your home like their own.",
  },
] as const;
