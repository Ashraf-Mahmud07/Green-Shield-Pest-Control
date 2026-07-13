import { BlogCard } from "@/components/cards/blog-card";
import { ServiceCard } from "@/components/cards/service-card";
import { BeforeAfter } from "@/components/home/before-after";
import { Hero } from "@/components/home/hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { RatingStars } from "@/components/shared/rating-stars";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { SiteImage } from "@/components/shared/site-image";
import { StatsCounter } from "@/components/shared/stats-counter";
import { TestimonialCarousel } from "@/components/shared/testimonial-carousel";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import { generalFaqs } from "@/data/faqs";
import { images } from "@/data/images";
import { industries } from "@/data/industries";
import { featuredServices, services } from "@/data/services";
import { guarantees, site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  ClipboardList,
  FileCheck,
  Home as HomeIcon,
  Leaf,
  MapPin,
  Microscope,
  ShieldCheck,
  Sparkles,
  Timer,
  UserCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: `Pest Control in Austin, TX — Same-Day Service | ${site.name}`,
  description:
    "Fast, guaranteed pest control in Austin & Central Texas. Ants, roaches, rodents, termites, mosquitoes & more. Licensed, family-safe, 4.9★ rated. Free inspection.",
  path: "/",
});

const steps = [
  {
    icon: ClipboardList,
    title: "Request Your Free Inspection",
    description:
      "Book online in 60 seconds or call — most Austin-metro appointments are available same-day.",
  },
  {
    icon: Microscope,
    title: "Expert Property Inspection",
    description:
      "A licensed technician inspects inside and out, identifies the exact species, and documents every finding.",
  },
  {
    icon: FileCheck,
    title: "Customized Treatment Plan",
    description:
      "You get a written plan and transparent quote built for your property — no upsells, no surprises.",
  },
  {
    icon: BadgeCheck,
    title: "Treatment, Follow-Up & Guarantee",
    description:
      "We treat, verify results, and stand behind the work: if pests return between visits, so do we — free.",
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Genuinely Local Experts",
    description:
      "Our technicians live where you live and know Central Texas pests street by street — not from a national playbook.",
  },
  {
    icon: Timer,
    title: "Fast, Same-Day Response",
    description:
      "Daily routes across the metro mean most calls before noon get a technician the same afternoon.",
  },
  {
    icon: Leaf,
    title: "Family & Pet-Conscious Methods",
    description:
      "Targeted, EPA-registered treatments applied with precision — protection without the blanket-spray approach.",
  },
  {
    icon: UserCheck,
    title: "Technicians You Can Trust",
    description:
      "Every tech is state-licensed, background-checked, drug-screened, and trained beyond state requirements.",
  },
  {
    icon: ShieldCheck,
    title: "The Pest-Free Guarantee",
    description:
      "If pests come back between scheduled visits, we re-treat at no charge. No fine print, no re-treatment fees.",
  },
  {
    icon: Sparkles,
    title: "Transparent, Honest Pricing",
    description:
      "Written quotes before any work begins, plans with no lock-in contracts, and a 98% retention rate that speaks for itself.",
  },
];

const commonPestSlugs = [
  "ant-control",
  "cockroach-control",
  "rodent-control",
  "termite-control",
  "mosquito-control",
  "spider-control",
  "wasp-removal",
  "bed-bug-control",
];
const commonPests = services.filter((s) => commonPestSlugs.includes(s.slug));

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured services */}
      <section aria-label="Featured services" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Our Services"
          title="One Call Handles Every Pest"
          subtitle="From a single wasp nest to a full termite defense system — dedicated specialists, species-specific treatments, and one guarantee across all of it."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10 text-center">
          <Button href="/services" variant="outline" size="lg">
            View All 18 Services
            <ArrowRight aria-hidden />
          </Button>
        </FadeIn>
      </section>

      {/* Residential vs Commercial */}
      <section aria-label="Residential and commercial pest control" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Who We Protect"
            title="Built for Homes. Trusted by Businesses."
            subtitle="Two dedicated teams, two service models — the same relentless standard of protection."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn direction="right">
              <Link
                href="/residential"
                className="group relative block h-full overflow-hidden rounded-4xl bg-linear-to-br from-primary-800 to-primary-950 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10"
              >
                <div className="bg-dot-grid absolute inset-0" aria-hidden />
                <div className="relative">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary-400 text-primary-950">
                    <HomeIcon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                    Residential Pest Control
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-100">
                    Family-safe, pet-conscious protection plans that keep your home pest-free
                    year-round — with free re-services if anything ever breaks through.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-primary-100">
                    {[
                      "Quarterly & bimonthly protection plans",
                      "Same-day emergency visits",
                      "Kid & pet-safe treatment options",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <BadgeCheck className="size-4 shrink-0 text-secondary-400" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold text-secondary-300">
                    Explore home protection
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="left">
              <Link
                href="/commercial"
                className="group relative block h-full overflow-hidden rounded-4xl border border-gray-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10"
              >
                <div className="bg-dot-grid-dark absolute inset-0" aria-hidden />
                <div className="relative">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-700 text-white">
                    <Building2 className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-charcoal">
                    Commercial Pest Control
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                    Audit-ready programs for restaurants, healthcare, warehousing, and offices —
                    with the documentation your inspectors expect.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {[
                      "Health-code compliant documentation",
                      "Before & after-hours service windows",
                      "Multi-location account management",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <BadgeCheck className="size-4 shrink-0 text-primary-600" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold text-primary-700">
                    Explore business programs
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-label="How our service works" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="From First Call to Pest-Free in 4 Steps"
          subtitle="A transparent process with no pressure, no jargon, and no surprises on the invoice."
        />
        <Stagger className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative h-full rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="absolute -top-4 left-7 flex size-8 items-center justify-center rounded-full bg-secondary-400 font-heading text-sm font-bold text-primary-950 shadow-soft">
                  {i + 1}
                </span>
                <step.icon className="size-8 text-primary-700" aria-hidden />
                <h3 className="mt-4 font-heading text-base font-semibold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Most common pests */}
      <section aria-label="Most common pests" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Pest Spotlight"
            title="Know Your Enemy"
            subtitle="The eight pests behind 90% of Central Texas service calls. Click any pest to learn the signs, the risks, and how we eliminate it."
          />
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {commonPests.map((pest) => (
              <StaggerItem key={pest.slug}>
                <Link
                  href={`/services/${pest.slug}`}
                  className="group flex h-full flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
                >
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-700 group-hover:text-white">
                    <ServiceIcon name={pest.icon} className="size-7" />
                  </span>
                  <span className="mt-4 font-heading text-sm font-semibold text-charcoal">
                    {pest.shortName.replace(" Control", "").replace(" Removal", "")}
                  </span>
                  <span className="mt-1 text-xs text-gray-500">{pest.heroTagline}</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section aria-label="Why choose GreenShield" className="container-site py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <div className="relative">
              <SiteImage
                image={images.handshake}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-4/5 w-full shadow-soft"
              />
              <div className="glass absolute -bottom-6 right-4 max-w-56 rounded-2xl p-5 shadow-lift">
                <Award className="size-8 text-accent-500" aria-hidden />
                <p className="mt-2 font-heading text-sm font-bold text-charcoal">
                  17+ Years of Local Service
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  48,000+ properties protected across Central Texas
                </p>
              </div>
            </div>
          </FadeIn>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why GreenShield"
              title="The Difference Is in the Details"
              subtitle="Anyone can spray. We solve — with the species knowledge, follow-through, and guarantee that make results permanent."
              className="mb-8"
            />
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-charcoal">
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
        </div>
      </section>

      {/* Stats band */}
      <section
        aria-label="Company statistics"
        className="relative overflow-hidden bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 py-16 lg:py-20"
      >
        <div className="bg-dot-grid absolute inset-0" aria-hidden />
        <div className="container-site relative">
          <StatsCounter />
        </div>
      </section>

      {/* Before & after */}
      <section aria-label="Before and after results" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Real Results"
            title="Before & After: The Work Speaks"
            subtitle="Drag the slider on each project to see the transformation. Full project gallery available on our gallery page."
          />
          <FadeIn>
            <BeforeAfter />
          </FadeIn>
          <FadeIn className="mt-10 text-center">
            <Button href="/gallery" variant="outline" size="lg">
              View Full Gallery
              <ArrowRight aria-hidden />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section aria-label="Customer reviews" className="container-site py-16 lg:py-24">
        <div className="mb-10 flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Customer Stories"
            title="Rated 4.9 Stars by the Neighbors You Trust"
            className="mb-0"
          />
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-4 rounded-full border border-gray-100 bg-white px-6 py-3 shadow-soft">
              <span className="font-heading text-3xl font-bold text-charcoal">
                {site.rating.value}
              </span>
              <div className="text-left">
                <RatingStars rating={site.rating.value} />
                <p className="mt-0.5 text-xs text-gray-500">
                  {site.rating.count.toLocaleString()} verified Google reviews
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn>
          <TestimonialCarousel items={testimonials} />
        </FadeIn>
      </section>

      {/* Industries */}
      <section aria-label="Industries we serve" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Commercial Expertise"
            title="Industries We Serve"
            subtitle="Purpose-built programs for the compliance, discretion, and documentation your industry demands."
          />
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href="/commercial"
                  className="group flex h-full items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lift"
                >
                  <Building2 className="size-5 shrink-0 text-primary-600" aria-hidden />
                  <span className="font-heading text-sm font-semibold text-charcoal group-hover:text-primary-800">
                    {industry.name}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Guarantee & licensing */}
      <section aria-label="Our guarantee and licensing" className="container-site py-16 lg:py-24">
        <SectionHeading eyebrow="Our Promise" title="Guaranteed. Licensed. Accountable." />
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {guarantees.map((g) => (
            <StaggerItem key={g.title}>
              <div className="h-full rounded-3xl bg-linear-to-br from-primary-50 to-secondary-50 p-8 transition-transform duration-300 hover:-translate-y-1">
                <ShieldCheck className="size-9 text-primary-700" aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-bold text-charcoal">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{g.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-8 text-center text-sm text-gray-500">
          {site.license} · Fully insured · Certified applicators on every route
        </FadeIn>
      </section>

      {/* Latest blogs */}
      <section aria-label="Latest blog articles" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Pest Intel"
          title="Fresh from the GreenShield Blog"
          subtitle="Field-tested guides from the technicians who fight Central Texas pests every day."
        />
        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10 text-center">
          <Button href="/blog" variant="outline" size="lg">
            Read All Articles
            <ArrowRight aria-hidden />
          </Button>
        </FadeIn>
      </section>

      {/* FAQ */}
      <div className="bg-gray-50">
        <FaqSection
          faqs={generalFaqs.slice(0, 6)}
          subtitle="Quick answers to what customers ask most. Need more? Visit our full FAQ page or just call — a human always answers."
        />
        <div className="container-site -mt-6 pb-16 text-center">
          <Link
            href="/faqs"
            className="font-heading text-sm font-semibold text-primary-700 hover:underline"
          >
            See all frequently asked questions →
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <CtaBanner />
    </>
  );
}
