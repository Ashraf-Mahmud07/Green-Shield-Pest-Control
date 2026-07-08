import type { Faq } from "@/types";

/** General FAQs shown on the homepage and FAQ page. */
export const generalFaqs: Faq[] = [
  {
    question: "How quickly can you get to my home?",
    answer:
      "Most appointments inside our Austin-metro service area are available same-day or next-day. Emergency situations — wasp nests by the door, a snake in the garage, rodents in a nursery — get priority dispatch, often within hours.",
  },
  {
    question: "Are your treatments safe for children and pets?",
    answer:
      "Yes. We use EPA-registered products applied at precise, targeted rates by licensed technicians — a fundamentally different approach from blanket spraying. Your technician explains any brief re-entry intervals before treating, and reduced-risk and botanical options are available on request.",
  },
  {
    question: "Do I need a recurring plan, or can I get a one-time treatment?",
    answer:
      "Both are available. One-time corrective treatments carry a 30-day guarantee and work well for isolated problems. Recurring plans cost less per visit, include free re-services, and prevent the problem from returning — which is why most customers move to a plan after their first service.",
  },
  {
    question: "What does the free inspection include?",
    answer:
      "A licensed technician inspects your home's interior, exterior, attic access, and yard; identifies current activity and conducive conditions; and gives you a written findings report with a quote. It takes 30–45 minutes and carries zero obligation.",
  },
  {
    question: "What happens if pests come back after treatment?",
    answer:
      "We come back — free. Every recurring plan includes unlimited re-services between scheduled visits, and one-time treatments carry a 30-day re-treatment guarantee. If you're seeing activity, one call has us back out, no invoice attached.",
  },
  {
    question: "Do I need to leave my home during treatment?",
    answer:
      "For standard services, no — most treatments are exterior-focused, and interior applications are targeted to cracks, voids, and baseboards. Specific treatments (like some flea services) have short re-entry windows your technician confirms in advance.",
  },
  {
    question: "How much does pest control cost?",
    answer:
      "One-time treatments typically range from $150–$400 depending on the pest and home size; protection plans start at $49/month. Termite, bed bug, and wildlife work is quoted after inspection because scope varies. Every quote is provided in writing before any work begins — no surprises.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Fully. GreenShield is licensed by the Texas Department of Agriculture (TX License #0791482), carries comprehensive liability insurance, and every technician is individually licensed, background-checked, and drug-screened.",
  },
];

/** FAQs specific to commercial clients. */
export const commercialFaqs: Faq[] = [
  {
    question: "Can you service our facility outside business hours?",
    answer:
      "Yes — early morning, overnight, and weekend service windows are standard for restaurants, healthcare, and retail clients. Your program is scheduled around your operation, not ours.",
  },
  {
    question: "Do you provide documentation for health inspections and audits?",
    answer:
      "Complete documentation is a core deliverable: digital service reports, pest sighting logs, trend analysis, corrective action records, and device maps — formatted to satisfy health departments, AIB, and third-party auditors.",
  },
  {
    question: "Can you handle multiple locations under one account?",
    answer:
      "Yes. Multi-site clients get centralized billing, standardized service protocols across locations, and a single account manager with portfolio-wide reporting.",
  },
];
