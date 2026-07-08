import type { Metadata } from "next";
import {
  AlertTriangle,
  Clock,
  PhoneCall,
  ShieldAlert,
  Siren,
  Truck,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Emergency Pest Control — Same-Day Response",
  description:
    "Urgent pest problem in Austin? Same-day emergency pest control for wasp nests, snakes, rodents, bed bugs & more. Call our 24/7 line now.",
  path: "/emergency",
});

const emergencies = [
  {
    title: "Stinging Insect Nests",
    detail: "Wasp, hornet, or yellow jacket nests near doors, play areas, or anyone allergic — treated the same day, safely.",
  },
  {
    title: "Snake in the Home or Garage",
    detail: "Keep a safe distance and keep eyes on it if possible. Our handlers respond rapidly for venomous and non-venomous removals.",
  },
  {
    title: "Rodents in Living Spaces",
    detail: "A rat or mouse in a kitchen, bedroom, or nursery gets priority dispatch — plus immediate entry-point triage.",
  },
  {
    title: "Bed Bugs Before Guests or Travel",
    detail: "Confirmed bed bugs with a deadline — arriving guests, a listing photoshoot, a move — get expedited inspection and treatment.",
  },
  {
    title: "Aggressive Bee Colony Activity",
    detail: "Defensive bee behavior near a structure may indicate an Africanized colony. Keep everyone inside and call immediately.",
  },
  {
    title: "Commercial Sighting Before Inspection",
    detail: "Health inspection tomorrow and a sighting today? Our commercial rapid-response line exists for exactly this call.",
  },
];

const responseSteps = [
  {
    icon: PhoneCall,
    title: "Call the Emergency Line",
    description: `${site.emergencyPhone} — answered 24/7 by a human who can dispatch, not a voicemail.`,
  },
  {
    icon: Truck,
    title: "Priority Dispatch",
    description:
      "Emergencies jump the route. Calls before noon are typically serviced the same afternoon across the Austin metro.",
  },
  {
    icon: ShieldAlert,
    title: "Stabilize & Treat",
    description:
      "The immediate hazard is neutralized first — nest removed, animal captured, activity knocked down — with full documentation.",
  },
  {
    icon: Clock,
    title: "Follow-Up Plan",
    description:
      "Every emergency gets a written follow-up plan so the 2 AM problem never repeats. Guarantee included.",
  },
];

const emergencyFaqs = [
  {
    question: "What counts as a pest emergency?",
    answer:
      "Anything posing an immediate safety risk (stinging insect nests in traffic areas, snakes indoors, aggressive bee activity), pests in sensitive spaces (rodents in kitchens or nurseries), or business-critical situations like a sighting before a health inspection. When in doubt, call — we'll tell you honestly whether it needs emergency dispatch or a standard appointment.",
  },
  {
    question: "How fast can you actually get here?",
    answer:
      "Inside the Austin metro, emergency calls before noon are usually serviced the same afternoon; calls later in the day are serviced that evening or first thing next morning. The dispatcher gives you a real time window when you call — not a 'sometime tomorrow.'",
  },
  {
    question: "Does emergency service cost more?",
    answer:
      "Same-day dispatch during business hours costs the same as standard service. After-hours emergency visits carry a dispatch fee that is quoted clearly on the phone before anyone rolls a truck — no surprise invoices.",
  },
  {
    question: "What should I do while I wait?",
    answer:
      "Keep people and pets away from the hazard, don't attempt DIY treatment (spraying a nest or cornering an animal makes our job harder and your risk higher), and if it's a snake, keep eyes on it from a distance if safely possible. The dispatcher will give you situation-specific guidance.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency Pest Control"
        title="Urgent Pest Problem? We're Already Moving."
        lead="Same-day emergency response across the Austin metro for the pest situations that can't wait for next week's appointment."
        crumbs={[{ name: "Emergency Service", path: "/emergency" }]}
      >
        <FadeIn delay={0.15} className="mt-8">
          <div className="flex flex-col gap-4 sm:inline-flex sm:flex-row sm:items-center">
            <Button
              href={site.emergencyPhoneHref}
              variant="accent"
              size="xl"
              className="w-full sm:w-auto"
            >
              <Siren aria-hidden />
              Call {site.emergencyPhone} Now
            </Button>
            <p className="text-sm text-primary-100">
              24/7 emergency line · Answered by a human
            </p>
          </div>
        </FadeIn>
      </PageHero>

      {/* What qualifies */}
      <section aria-label="Emergency situations we handle" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="When to Call"
          title="Situations We Treat as Emergencies"
          subtitle="If it threatens your family's safety, your sleep, or your business — it goes to the front of the line."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {emergencies.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                  <AlertTriangle className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Response process */}
      <section aria-label="Emergency response process" className="bg-primary-950 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            dark
            eyebrow="What Happens Next"
            title="From Your Call to Our Truck in Four Steps"
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {responseSteps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="glass-dark relative h-full rounded-3xl p-7">
                  <span className="absolute -top-4 left-7 flex size-8 items-center justify-center rounded-full bg-accent-500 font-heading text-sm font-bold text-white shadow-soft">
                    {i + 1}
                  </span>
                  <step.icon className="size-8 text-secondary-400" aria-hidden />
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-100/90">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FaqSection
        faqs={emergencyFaqs}
        eyebrow="Emergency FAQ"
        title="Emergency Service Questions"
      />

      <CtaBanner
        title="Don't Wait It Out. Call It In."
        subtitle={`The emergency line ${site.emergencyPhone} is answered 24/7 — or book standard same-day service online.`}
      />
    </>
  );
}
