import type { Metadata } from "next";
import {
  Banknote,
  Car,
  GraduationCap,
  HeartPulse,
  MapPin,
  Sun,
  Users,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { jobOpenings } from "@/data/team";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { CareerForm } from "@/components/forms/career-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Join the GreenShield Team",
  description:
    "Build a career in pest control with GreenShield: paid training & licensing, company vehicle, real advancement paths & a team that has your back. Now hiring in Austin.",
  path: "/careers",
});

const benefits = [
  {
    icon: Banknote,
    title: "Competitive Pay + Bonuses",
    description: "Above-market base pay, performance bonuses, and no commission pressure to oversell customers.",
  },
  {
    icon: GraduationCap,
    title: "Paid Training & Licensing",
    description: "We pay for your state licensing, CEUs, and specialist certifications — and pay you while you train.",
  },
  {
    icon: Car,
    title: "Company Vehicle & Route",
    description: "Take-home service vehicle, fuel covered, and routes built close to where you live.",
  },
  {
    icon: HeartPulse,
    title: "Full Benefits Package",
    description: "Health, dental, and vision insurance, 401(k) with match, and paid time off that you're encouraged to use.",
  },
  {
    icon: Sun,
    title: "Real Work-Life Balance",
    description: "Routes end when they end — no mandatory nights, and weekend rotations are shared fairly across the team.",
  },
  {
    icon: Users,
    title: "Advancement That Happens",
    description: "Every division lead started on a route. We promote from within first, every time.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do Work That Actually Helps People"
        lead="Every day, our team gives families their kitchens back, their sleep back, and their peace of mind back. If you want a skilled trade with real advancement — no experience required — let's talk."
        crumbs={[{ name: "Careers", path: "/careers" }]}
      />

      {/* Benefits */}
      <section aria-label="Employee benefits" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Why GreenShield"
          title="A Career, Not Just a Route"
          subtitle="We're a 4.9-star company because our people stay — and our people stay because we invest in them."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <benefit.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-charcoal">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Openings + application */}
      <section aria-label="Open positions and application" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Open Positions"
              title="We're Hiring in Austin"
              className="mb-8"
            />
            <Stagger className="space-y-5">
              {jobOpenings.map((job) => (
                <StaggerItem key={job.id}>
                  <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-shadow hover:shadow-lift">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-lg font-bold text-charcoal">{job.title}</h3>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="size-3.5" aria-hidden />
                      {job.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{job.description}</p>
                    <details className="mt-4 group">
                      <summary className="cursor-pointer font-heading text-sm font-semibold text-primary-700 hover:underline">
                        View requirements
                      </summary>
                      <ul className="mt-3 space-y-2 pl-1">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary-500" aria-hidden />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <FadeIn direction="left">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-lift sm:p-9 lg:sticky lg:top-28">
              <h2 className="font-heading text-xl font-bold text-charcoal">Apply Now</h2>
              <p className="mt-1 text-sm text-gray-500">
                Two minutes, no résumé required to start the conversation.
              </p>
              <div className="mt-6">
                <CareerForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
