import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Eye,
  Phone,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { buildMetadata, serviceSchema, faqSchema } from "@/lib/seo";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { SiteImage } from "@/components/shared/site-image";
import { images, serviceImages } from "@/data/images";
import { JsonLd } from "@/components/shared/json-ld";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/forms/quote-form";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Austin, TX`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs)]} />

      <PageHero
        eyebrow={service.heroTagline}
        title={service.name}
        lead={service.excerpt}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.shortName, path: `/services/${service.slug}` },
        ]}
      >
        <FadeIn delay={0.15} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            href="/request-inspection"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Schedule an Inspection
          </Button>
          <Button
            href={site.phoneHref}
            variant="outline-light"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone aria-hidden />
            {site.phone}
          </Button>
        </FadeIn>
      </PageHero>

      {/* Overview */}
      <section aria-label="Service overview" className="container-site py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <SiteImage
              image={serviceImages[service.slug] ?? images.technicianSpraying}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="aspect-[4/3] w-full shadow-soft lg:sticky lg:top-28"
            />
          </FadeIn>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={`Understanding Your ${service.shortName.replace(" Control", "").replace(" Removal", "").replace(" Plans", "")} Problem`}
              className="mb-6"
            />
            {service.overview.map((para) => (
              <FadeIn key={para.slice(0, 40)}>
                <p className="mb-4 leading-relaxed text-gray-600">{para}</p>
              </FadeIn>
            ))}

            {/* Signs of infestation */}
            <FadeIn>
              <div className="mt-8 rounded-3xl border border-gray-100 bg-gray-50 p-7">
                <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-charcoal">
                  <Eye className="size-5 text-primary-700" aria-hidden />
                  Signs of Infestation
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-secondary-600" aria-hidden />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section aria-label="Risks and damage" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why It Matters"
            title="The Real Cost of Waiting"
            subtitle="What this pest does to your property, health, and peace of mind when treatment is delayed."
          />
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {service.risks.map((risk) => (
              <StaggerItem key={risk.title}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-7 shadow-soft">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                    <AlertTriangle className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-charcoal">
                    {risk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {risk.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Treatment process */}
      <section aria-label="Treatment process" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Solve It — Step by Step"
          subtitle="A proven protocol refined over 17 years and tens of thousands of treatments."
        />
        <div className="mx-auto max-w-3xl">
          <Stagger className="space-y-6">
            {service.treatment.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="flex gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift sm:p-7">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-700 font-heading text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Prevention + why professional */}
      <section aria-label="Prevention and professional treatment" className="bg-primary-950 py-16 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <FadeIn direction="right">
            <div className="glass-dark h-full rounded-3xl p-8">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-white">
                <Sprout className="size-6 text-secondary-400" aria-hidden />
                Prevention Tips From Our Technicians
              </h2>
              <ul className="mt-6 space-y-3.5">
                {service.prevention.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-primary-100">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="glass-dark h-full rounded-3xl p-8">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-white">
                <ShieldCheck className="size-6 text-secondary-400" aria-hidden />
                Why Professional Treatment Wins
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-primary-100">
                {service.whyProfessional}
              </p>
              <Button href="/request-inspection" variant="secondary" size="lg" className="mt-8">
                Book Your Free Inspection
                <ArrowRight aria-hidden />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ + quote form */}
      <section aria-label="Frequently asked questions and quote request" className="container-site py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={`${service.shortName} Questions, Answered`}
              className="mb-8"
            />
            <FadeIn>
              <Accordion
                items={service.faqs.map((f) => ({ title: f.question, content: f.answer }))}
              />
            </FadeIn>
          </div>
          <FadeIn direction="left">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-lift sm:p-8 lg:sticky lg:top-28">
              <h3 className="font-heading text-xl font-bold text-charcoal">
                Get Your Free {service.shortName} Quote
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Fast response — usually within one business hour.
              </p>
              <div className="mt-6">
                <QuoteForm compact />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section aria-label="Related services" className="bg-gray-50 py-16 lg:py-20">
          <div className="container-site">
            <SectionHeading
              eyebrow="Related Services"
              title="Customers Also Book"
            />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <ServiceCard service={r} />
                </StaggerItem>
              ))}
            </Stagger>
            <FadeIn className="mt-8 text-center">
              <Link
                href="/services"
                className="font-heading text-sm font-semibold text-primary-700 hover:underline"
              >
                Browse all 18 services →
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      <CtaBanner
        title={`Ready to End Your ${service.shortName.replace(" Control", "").replace(" Removal", "").replace(" Plans", "")} Problem?`}
      />
    </>
  );
}
