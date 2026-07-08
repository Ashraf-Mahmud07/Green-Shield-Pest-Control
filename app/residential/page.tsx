import type { Metadata } from "next";
import {
  Baby,
  BadgeCheck,
  CalendarClock,
  Dog,
  Home,
  Leaf,
  PhoneCall,
  Search,
  ShieldCheck,
  Snowflake,
  Sun,
  Wind,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { plans } from "@/data/plans";
import { generalFaqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { PricingCard } from "@/components/cards/pricing-card";
import { ReviewCard } from "@/components/cards/review-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Residential Pest Control — Family-Safe Home Protection",
  description:
    "Home pest control in Austin, TX built around your family and pets. Recurring plans, one-time treatments, seasonal protection & same-day emergency visits.",
  path: "/residential",
});

const safety = [
  {
    icon: Baby,
    title: "Child-Conscious Treatments",
    description:
      "Targeted crack-and-crevice applications instead of blanket sprays, product placement out of reach, and clear re-entry guidance for every room we treat.",
  },
  {
    icon: Dog,
    title: "Pet-Safe Options",
    description:
      "We plan around dogs, cats, birds, reptiles, and aquariums — your technician confirms pet details before treating and selects materials accordingly.",
  },
  {
    icon: Leaf,
    title: "Botanical & Reduced-Risk Choices",
    description:
      "Prefer green? Botanical-based product lines are available on request for most services, with honest guidance about where they excel.",
  },
];

const seasons = [
  {
    icon: Leaf,
    season: "Spring",
    focus: "Ant colonies, termite swarms & wasp queens establishing on eaves",
  },
  {
    icon: Sun,
    season: "Summer",
    focus: "Mosquitoes, fleas, ticks, scorpions & peak insect pressure",
  },
  {
    icon: Wind,
    season: "Fall",
    focus: "Rodents pushing indoors ahead of cold fronts — exclusion season",
  },
  {
    icon: Snowflake,
    season: "Winter",
    focus: "Overwintering pests in wall voids & harborage treatments",
  },
];

const inspectionSteps = [
  {
    title: "Exterior Walkthrough",
    description: "Foundation, eaves, weep holes, landscaping, and moisture conditions — we map every conducive condition and entry point.",
  },
  {
    title: "Interior Assessment",
    description: "Kitchens, baths, garage, and any rooms with activity. We identify species, not just 'bugs' — treatment depends on it.",
  },
  {
    title: "Attic & Crawl Space Check",
    description: "The spaces homeowners never see are where infestations start. We look for rodents, wildlife signs, and insulation damage.",
  },
  {
    title: "Written Findings & Plan",
    description: "You get photos, findings, and a transparent quote on the spot — treat today, schedule later, or just keep the report. Zero pressure.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential Pest Control"
        title="Your Home, Protected Like Ours"
        lead="Family-safe, pet-conscious pest protection built for Central Texas homes — from one-time fixes to year-round plans with a guarantee that means it."
        crumbs={[{ name: "Residential", path: "/residential" }]}
      >
        <FadeIn delay={0.15} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/request-inspection" variant="secondary" size="lg">
            Schedule a Free Home Inspection
          </Button>
          <Button href="/plans" variant="outline-light" size="lg">
            Compare Protection Plans
          </Button>
        </FadeIn>
      </PageHero>

      {/* Family & pet safety */}
      <section aria-label="Family and pet safety" className="container-site py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Safety First"
              title="Tough on Pests. Gentle on the People You Love."
              subtitle="Effective pest control and family safety aren't a trade-off when treatments are applied with precision by trained professionals."
              className="mb-8"
            />
            <Stagger className="space-y-6">
              {safety.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-700">
                      <item.icon className="size-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <FadeIn direction="left">
            <ImagePlaceholder
              alt="Family relaxing in a pest-free living room with a dog while a technician treats the home exterior"
              label="Family-safe home protection"
              tone="lime"
              className="aspect-[4/3] w-full"
            />
          </FadeIn>
        </div>
      </section>

      {/* Seasonal protection */}
      <section aria-label="Seasonal pest protection" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Seasonal Protection"
            title="Central Texas Pests Run on a Calendar. So Do We."
            subtitle="Each visit in your plan is timed to intercept the season's pests before they establish — not after."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s) => (
              <StaggerItem key={s.season}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <s.icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-charcoal">{s.season}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.focus}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Inspection process */}
      <section aria-label="Home inspection process" className="container-site py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <ImagePlaceholder
              alt="Licensed inspector examining a home's foundation and weep holes during a free inspection"
              label="The free 40-minute inspection"
              className="aspect-[4/5] w-full"
            />
          </FadeIn>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Free Inspection"
              title="40 Minutes That Protect Your Biggest Investment"
              subtitle="Every relationship starts with a thorough look — inside, outside, and in the spaces you never check."
              className="mb-8"
            />
            <Stagger className="space-y-5">
              {inspectionSteps.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-700 font-heading text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-charcoal">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <FadeIn className="mt-8">
              <Button href="/request-inspection" size="lg">
                <Search aria-hidden />
                Book My Free Inspection
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section aria-label="Home protection plans" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Maintenance Plans"
            title="Home Protection Plans That Fit Real Budgets"
            subtitle="Recurring protection costs less per visit than corrective treatments — and comes with unlimited free re-services."
          />
          <Stagger className="grid gap-8 pt-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <StaggerItem key={plan.id}>
                <PricingCard plan={plan} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Emergency + one-time strip */}
      <section aria-label="Emergency and one-time service options" className="container-site py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: PhoneCall,
              title: "Same-Day Emergency Visits",
              description:
                "Wasp nest by the door? Snake in the garage? Rodent in the nursery? Call before noon and we're usually there the same afternoon.",
              href: "/emergency",
              cta: "Emergency service",
            },
            {
              icon: Home,
              title: "One-Time Treatments",
              description:
                "Isolated problem? A single corrective treatment with a 30-day guarantee — no plan required, no pressure to upgrade.",
              href: "/get-quote",
              cta: "Get a quote",
            },
            {
              icon: CalendarClock,
              title: "New Homeowner Inspections",
              description:
                "Moving in? Start pest-free with a full-property baseline inspection and preventive barrier before the boxes are unpacked.",
              href: "/request-inspection",
              cta: "Schedule inspection",
            },
          ].map((item) => (
            <FadeIn key={item.title}>
              <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <item.icon className="size-9 text-primary-700" aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-bold text-charcoal">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <Button href={item.href} variant="outline" className="mt-6 w-fit">
                  {item.cta}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section aria-label="Homeowner reviews" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Homeowner Stories"
            title="Families Who Stopped Worrying About Pests"
          />
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <StaggerItem key={t.name}>
                <ReviewCard review={t} />
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="size-4 text-primary-600" aria-hidden />
            Every review verified ·
            <BadgeCheck className="size-4 text-primary-600" aria-hidden />
            4.9/5 across 2,384 Google reviews
          </FadeIn>
        </div>
      </section>

      <FaqSection faqs={generalFaqs.slice(0, 5)} />
      <CtaBanner title="Ready for a Pest-Free Home?" />
    </>
  );
}
