import type { Metadata } from "next";
import {
  BadgeCheck,
  FlaskConical,
  HeartHandshake,
  Leaf,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { services, serviceCategories } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem, FadeIn } from "@/components/shared/motion";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";
import type { Service } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Pest Control Services — 18 Specialized Treatments",
  description:
    "Explore GreenShield's full range of pest control services in Austin, TX: ants, roaches, rodents, termites, mosquitoes, wildlife & more. Free inspections.",
  path: "/services",
});

const standards = [
  {
    icon: Microscope,
    title: "Inspection-First, Always",
    description:
      "No treatment begins until a licensed technician has identified the species and mapped the infestation — because the right treatment depends on the right diagnosis.",
  },
  {
    icon: FlaskConical,
    title: "Professional-Grade Materials",
    description:
      "EPA-registered products unavailable in stores, selected per pest and rotated to prevent resistance, applied at precise targeted rates.",
  },
  {
    icon: Leaf,
    title: "Family & Pet-Conscious Approach",
    description:
      "Crack-and-crevice precision instead of blanket spraying, clear re-entry guidance, and botanical options on request.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Outcomes",
    description:
      "Every service is backed by our pest-free guarantee — if the problem returns between visits, we return free.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Communication",
    description:
      "Written findings, photo documentation, and plain-English explanations. You'll always know what we found, what we did, and why.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Specialists",
    description:
      "Termite, wildlife, and bed bug work is handled by division specialists with dedicated certifications — not generalists winging it.",
  },
];

export default function ServicesPage() {
  const categories = Object.keys(serviceCategories) as Service["category"][];

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Pest. One Trusted Team."
        lead="Eighteen specialized services, each with its own protocol, guarantee, and dedicated expertise — because carpenter ants and copperheads don't get solved the same way."
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      {/* Services grouped by category */}
      {categories.map((category, i) => {
        const group = services.filter((s) => s.category === category);
        return (
          <section
            key={category}
            aria-label={serviceCategories[category]}
            className={i % 2 === 1 ? "bg-gray-50 py-16 lg:py-20" : "py-16 lg:py-20"}
          >
            <div className="container-site">
              <SectionHeading
                align="left"
                eyebrow={serviceCategories[category]}
                title={categoryTitles[category]}
                className="mb-10"
              />
              <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((service) => (
                  <StaggerItem key={service.slug}>
                    <ServiceCard service={service} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        );
      })}

      {/* Safety & treatment standards */}
      <section aria-label="Our treatment standards" className="bg-primary-950 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            dark
            eyebrow="Our Standards"
            title="How We Treat — And Why It Works"
            subtitle="Six non-negotiables that apply to every service on this page, from a single wasp nest to a commercial IPM program."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-dark h-full rounded-3xl p-7">
                  <item.icon className="size-8 text-secondary-400" aria-hidden />
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-100/90">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 text-center text-sm text-primary-200">
            Not sure which service you need? Book a free inspection and we&apos;ll identify the problem for you.
          </FadeIn>
        </div>
      </section>

      <FaqSection faqs={generalFaqs.slice(0, 5)} />
      <CtaBanner />
    </>
  );
}

const categoryTitles: Record<Service["category"], string> = {
  insects: "Insect Extermination & Control",
  rodents: "Rat & Mouse Solutions",
  wildlife: "Humane Wildlife Services",
  programs: "Ongoing Protection Programs",
};
