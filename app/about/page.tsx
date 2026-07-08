import type { Metadata } from "next";
import {
  Award,
  Eye,
  HandHeart,
  HeartHandshake,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { teamMembers } from "@/data/team";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { StatsCounter } from "@/components/shared/stats-counter";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "About Us — 17 Years of Local Pest Expertise",
  description:
    "Meet GreenShield Pest Control: family-owned since 2009, 48,000+ Central Texas properties protected, and a team that treats your home like their own.",
  path: "/about",
});

const values = [
  {
    icon: HeartHandshake,
    title: "Honesty Over Upsells",
    description:
      "If you don't need a treatment, we say so. Our quotes list exactly what you're paying for, and our technicians aren't commissioned to inflate them.",
  },
  {
    icon: Leaf,
    title: "Science-Driven Stewardship",
    description:
      "Integrated Pest Management first: precise identification, targeted treatment, minimal footprint. Effective and responsible aren't opposites.",
  },
  {
    icon: Users,
    title: "Neighbors Serving Neighbors",
    description:
      "Our technicians service the communities they live in. When we guarantee your home, we're often guaranteeing our own street.",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description:
      "Pests evolve; so do we. Every technician trains beyond state requirements, with specialists certified in termite, wildlife, and bed bug work.",
  },
];

const timeline = [
  {
    year: "2009",
    title: "One Truck, One Promise",
    description:
      "Daniel Greene founds GreenShield with a single truck and a simple promise: honest pest control that actually solves the problem.",
  },
  {
    year: "2013",
    title: "The Guarantee Goes Official",
    description:
      "The pest-free guarantee — unlimited free re-services — becomes standard on every plan. Retention jumps; it never comes back down.",
  },
  {
    year: "2016",
    title: "Termite & Wildlife Divisions",
    description:
      "Dedicated specialist divisions launch for termite protection and humane wildlife exclusion, with division-specific certifications.",
  },
  {
    year: "2019",
    title: "10,000 Customers & Commercial Launch",
    description:
      "GreenShield crosses 10,000 protected properties and launches the commercial division serving restaurants, healthcare, and warehousing.",
  },
  {
    year: "2022",
    title: "Metro-Wide Daily Routes",
    description:
      "Daily routes expand across the full Austin metro — Round Rock to Lakeway — making same-day service standard, not special.",
  },
  {
    year: "2026",
    title: "48,000+ Properties Strong",
    description:
      "Seventeen years in, GreenShield protects 48,000+ homes and businesses with a 4.9-star rating and a 98% retention rate.",
  },
];

const certifications = [
  "Texas Department of Agriculture Licensed (TX #0791482)",
  "Associate Certified Entomologists on staff",
  "NWCOA Certified Wildlife Professionals",
  "Termite & WDI Inspection Licensed",
  "EPA Integrated Pest Management Practices",
  "Fully Insured — Liability & Workers' Comp",
];

const community = [
  {
    title: "Free Service for Shelters",
    description:
      "Quarterly no-cost pest programs for Austin-area animal shelters and food banks.",
  },
  {
    title: "Veteran & Senior Discounts",
    description:
      "Year-round service discounts for veterans, first responders, and seniors — just ask.",
  },
  {
    title: "School Education Visits",
    description:
      "Our entomology-trained staff visit local schools teaching kids the difference between helpful bugs and harmful ones.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GreenShield"
        title="Seventeen Years of Keeping Central Texas Pest-Free"
        lead="What started as one truck and a promise in 2009 is now the Austin metro's most-trusted local pest control team — still family-owned, still answering every call like it's the first."
        crumbs={[{ name: "About Us", path: "/about" }]}
      />

      {/* Story */}
      <section aria-label="Our story" className="container-site py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built on a Kitchen-Table Frustration"
              className="mb-6"
            />
            <FadeIn>
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  In 2009, Daniel Greene watched his parents get quoted three different prices by
                  three different pest companies for the same ant problem — none of which fixed it.
                  The industry had a trust problem, and he decided the fix was simple: identify
                  correctly, treat precisely, guarantee the result, and never charge for a promise
                  you didn&apos;t keep.
                </p>
                <p>
                  That principle became GreenShield. Seventeen years later, the company has grown
                  from one truck to a metro-wide team — but every technician still carries the
                  same three rules: <strong className="text-charcoal">diagnose before you treat, explain before you charge,
                  and return free if it comes back.</strong>
                </p>
                <p>
                  Today GreenShield protects more than 48,000 Central Texas properties, from
                  family bungalows to hospital campuses, with the highest-rated local team in the
                  metro. We&apos;re proud of the numbers. We&apos;re prouder that most of our new
                  customers still come from a neighbor&apos;s recommendation.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="left">
            <ImagePlaceholder
              alt="The GreenShield team gathered in front of the Austin office with their service fleet"
              label="The GreenShield team, Austin HQ"
              className="aspect-[4/3] w-full"
            />
          </FadeIn>
        </div>
      </section>

      {/* Mission / Vision */}
      <section aria-label="Mission and vision" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <FadeIn direction="right">
            <div className="h-full rounded-[2rem] bg-gradient-to-br from-primary-800 to-primary-950 p-9 text-white sm:p-10">
              <Target className="size-9 text-secondary-400" aria-hidden />
              <h2 className="mt-4 font-heading text-2xl font-bold">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-primary-100">
                To protect the health, homes, and businesses of Central Texas with honest,
                science-driven pest control — delivered by neighbors, guaranteed without fine
                print, and priced without games.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="h-full rounded-[2rem] border border-gray-100 bg-white p-9 shadow-soft sm:p-10">
              <Eye className="size-9 text-primary-700" aria-hidden />
              <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                A Central Texas where nobody loses sleep, health, or property value to pests —
                and where &ldquo;call the pest company&rdquo; is a decision people make with
                confidence instead of dread.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section aria-label="Our values" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Values That Ride in Every Truck"
        />
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="flex h-full gap-5 rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <value.icon className="size-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Timeline */}
      <section aria-label="Company timeline" className="bg-primary-950 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            dark
            eyebrow="The Journey"
            title="From One Truck to 48,000 Properties"
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute inset-y-0 left-5 w-px bg-white/15 sm:left-1/2" aria-hidden />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} direction={i % 2 === 0 ? "right" : "left"}>
                  <div
                    className={`relative flex flex-col gap-3 pl-14 sm:w-1/2 sm:pl-0 ${
                      i % 2 === 0
                        ? "sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    }`}
                  >
                    <span
                      className={`absolute left-3 top-1 size-4 rounded-full border-4 border-primary-950 bg-secondary-400 sm:top-2 ${
                        i % 2 === 0 ? "sm:left-auto sm:-right-2" : "sm:-left-2"
                      }`}
                      aria-hidden
                    />
                    <Badge variant="light" className="w-fit sm:ml-auto sm:w-fit">
                      {item.year}
                    </Badge>
                    <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-primary-100/90">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Company statistics" className="container-site py-16 lg:py-20">
        <StatsCounter dark={false} />
      </section>

      {/* Team */}
      <section aria-label="Our team" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The People Behind the Guarantee"
            subtitle="Licensed, background-checked, and genuinely good at this — meet the leaders your technician answers to."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 font-heading text-xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-700">{member.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{member.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {member.credentials.map((cred) => (
                      <li key={cred}>
                        <Badge variant="secondary">{cred}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications + community */}
      <section aria-label="Certifications and community involvement" className="container-site py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn direction="right">
            <div className="h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-soft">
              <Award className="size-9 text-primary-700" aria-hidden />
              <h2 className="mt-4 font-heading text-xl font-bold text-charcoal">
                Certifications & Credentials
              </h2>
              <ul className="mt-6 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary-600" aria-hidden />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="h-full rounded-3xl bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
              <HandHeart className="size-9 text-primary-700" aria-hidden />
              <h2 className="mt-4 font-heading text-xl font-bold text-charcoal">
                Giving Back to {site.address.city}
              </h2>
              <div className="mt-6 space-y-5">
                {community.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-heading text-sm font-semibold text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        title="Experience the GreenShield Difference"
        subtitle="Join 48,000+ Central Texas properties protected by a team that answers to its neighbors."
      />
    </>
  );
}
