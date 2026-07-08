import type { Metadata } from "next";
import {
  BarChart3,
  Bed,
  Building,
  Building2,
  ClipboardCheck,
  Factory,
  FileText,
  GraduationCap,
  HeartPulse,
  Key,
  LineChart,
  MapPinned,
  ShoppingBag,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { commercialFaqs } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Pest Control — Audit-Ready Business Programs",
  description:
    "Commercial pest management in Austin, TX for restaurants, healthcare, hotels, warehouses & offices. Health-code documentation, discreet service, custom IPM plans.",
  path: "/commercial",
});

const industryIcons: Record<string, LucideIcon> = {
  restaurants: UtensilsCrossed,
  hotels: Bed,
  healthcare: HeartPulse,
  schools: GraduationCap,
  warehouses: Warehouse,
  offices: Building,
  retail: ShoppingBag,
  "property-management": Key,
  manufacturing: Factory,
};

const programPillars = [
  {
    icon: MapPinned,
    title: "Monitoring Programs",
    description:
      "Mapped monitoring devices across your facility, checked on every service and logged digitally — so rising pressure is caught in data before it's visible on the floor.",
  },
  {
    icon: ClipboardCheck,
    title: "Custom IPM Plans",
    description:
      "No two facilities get the same program. Service frequency, materials, and exclusion priorities are engineered around your operation, traffic, and audit requirements.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Reporting",
    description:
      "Digital service reports, sighting logs, corrective-action records, and device maps formatted for health departments, AIB, SQF, and corporate audits.",
  },
  {
    icon: LineChart,
    title: "Trend Analysis & Reviews",
    description:
      "Quarterly account reviews with trend data across locations — what's rising, what's resolved, and what to budget for next season.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Pest Control"
        title="Pest Programs That Pass the Audit"
        lead="Your health inspector, your auditors, and your customers all judge you on pests. GreenShield's commercial division builds documented, discreet programs that protect all three relationships."
        crumbs={[{ name: "Commercial", path: "/commercial" }]}
      >
        <FadeIn delay={0.15} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/get-quote" variant="secondary" size="lg" className="w-full sm:w-auto">
            Request a Facility Assessment
          </Button>
          <Button href="/contact" variant="outline-light" size="lg" className="w-full sm:w-auto">
            Talk to a Commercial Specialist
          </Button>
        </FadeIn>
      </PageHero>

      {/* Industries */}
      <section aria-label="Industries served" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Specialized Programs by Industry"
          subtitle="Every industry has its own pest pressure, regulations, and stakes. Your program should reflect that — and ours do."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.slug] ?? Building2;
            return (
              <StaggerItem key={industry.slug}>
                <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {industry.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {industry.concerns.slice(0, 3).map((concern) => (
                      <li key={concern}>
                        <Badge variant="outline">{concern}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Program pillars */}
      <section aria-label="Program capabilities" className="bg-primary-950 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            dark
            eyebrow="How Commercial Programs Work"
            title="More Than Service Visits — A Managed System"
            subtitle="Commercial pest control done right is a documented, data-driven program. These four pillars are standard in every GreenShield commercial account."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {programPillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="glass-dark h-full rounded-3xl p-8">
                  <pillar.icon className="size-9 text-secondary-400" aria-hidden />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-100/90">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why businesses switch */}
      <section aria-label="Why businesses choose GreenShield" className="container-site py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Businesses Switch to Us"
              title="The Vendor Your Facilities Team Stops Worrying About"
              className="mb-8"
            />
            <Stagger className="space-y-5">
              {[
                {
                  title: "Service on your schedule, not ours",
                  description:
                    "Pre-opening, overnight, and weekend windows are standard — your customers never see a pest technician.",
                },
                {
                  title: "One account manager, every location",
                  description:
                    "Multi-site portfolios get centralized billing, standardized protocols, and a single point of contact who knows your business.",
                },
                {
                  title: "Rapid response with an SLA",
                  description:
                    "Sighting response times are written into your agreement. A pest issue at 9 AM doesn't wait for next month's visit.",
                },
                {
                  title: "Discretion by default",
                  description:
                    "Unmarked vehicles and plain uniforms available on request — because your pest program is nobody else's business.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
                    <h3 className="font-heading text-sm font-semibold text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <FadeIn direction="left">
            <div className="rounded-[2rem] bg-gradient-to-br from-primary-50 to-secondary-50 p-8 sm:p-10">
              <BarChart3 className="size-10 text-primary-700" aria-hidden />
              <h3 className="mt-5 font-heading text-2xl font-bold text-charcoal">
                Free Facility Assessment
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A commercial specialist walks your facility, documents current pressure and
                risk points, and delivers a written program proposal with transparent pricing —
                whether or not you hire us.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-gray-700">
                {[
                  "Full-facility risk walkthrough",
                  "Current-program gap analysis",
                  "Written proposal within 48 hours",
                  "Compliance requirements review",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ClipboardCheck className="size-4 text-secondary-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/get-quote" size="lg" className="mt-8">
                Schedule My Assessment
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="bg-gray-50">
        <FaqSection
          faqs={commercialFaqs}
          eyebrow="Commercial FAQ"
          title="Commercial Questions, Answered"
        />
      </div>

      <CtaBanner
        title="Protect Your Business Reputation"
        subtitle="One conversation with a commercial specialist — zero obligation, full facility assessment included."
      />
    </>
  );
}
