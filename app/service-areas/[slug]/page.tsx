import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BadgeCheck, Bug, MapPin, Phone, Quote } from "lucide-react";
import { getServiceArea, serviceAreas } from "@/data/locations";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { JsonLd } from "@/components/shared/json-ld";
import { ServiceCard } from "@/components/cards/service-card";
import { RatingStars } from "@/components/shared/rating-stars";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/shared/site-image";
import { cityImages, images } from "@/data/images";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: `Pest Control in ${area.city}, ${area.state}`,
    description: area.metaDescription,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const areaServices = area.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <>
      <JsonLd data={faqSchema(area.faqs)} />

      <PageHero
        eyebrow={`${area.city}, ${area.state}`}
        title={area.headline}
        lead={area.intro}
        crumbs={[
          { name: "Service Areas", path: "/service-areas" },
          { name: area.city, path: `/service-areas/${area.slug}` },
        ]}
      >
        <FadeIn delay={0.15} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            href="/request-inspection"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Free {area.city} Inspection
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

      {/* Local pest pressure */}
      <section aria-label={`Common pests in ${area.city}`} className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Local Pest Pressure"
          title={`What's Actually Bugging ${area.city}`}
          subtitle="Pest pressure is hyper-local — soil, terrain, and development patterns decide what shows up at your door. Here's what our routes see most."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {area.localPests.map((pest) => (
            <StaggerItem key={pest.name}>
              <div className="flex h-full gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-soft">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Bug className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-charcoal">
                    {pest.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{pest.note}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Services available */}
      <section aria-label={`Services available in ${area.city}`} className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Available Services"
            title={`Most-Requested Services in ${area.city}`}
            subtitle={`All 18 GreenShield services are available in ${area.city} — these are the ones your neighbors book most.`}
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areaServices.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Benefits + review + map */}
      <section aria-label={`Why ${area.city} chooses GreenShield`} className="container-site py-16 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Local Advantage"
              title={`Why ${area.city} Chooses GreenShield`}
              className="mb-8"
            />
            <Stagger className="space-y-4">
              {area.benefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-secondary-600" aria-hidden />
                    <p className="text-sm font-medium text-gray-700">{benefit}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Local review */}
            <FadeIn className="mt-8">
              <figure className="rounded-3xl bg-gradient-to-br from-primary-50 to-secondary-50 p-7">
                <Quote className="size-7 text-primary-600" aria-hidden />
                <blockquote className="mt-3 text-sm leading-relaxed text-gray-700">
                  &ldquo;{area.review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4">
                  <RatingStars rating={5} />
                  <p className="mt-2 font-heading text-sm font-semibold text-charcoal">
                    {area.review.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {area.review.neighborhood}, {area.city}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          </div>

          {/* Map + coverage */}
          <FadeIn direction="left">
            <div className="lg:sticky lg:top-28">
              <SiteImage
                image={cityImages[area.slug] ?? images.hero}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-square w-full shadow-soft"
              />
              <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-soft">
                <h3 className="flex items-center gap-2 font-heading text-base font-bold text-charcoal">
                  <MapPin className="size-5 text-primary-700" aria-hidden />
                  ZIP Codes We Cover in {area.city}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {area.zipCodes.map((zip) => (
                    <li
                      key={zip}
                      className="rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600"
                    >
                      {zip}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  Just outside these ZIPs?{" "}
                  <Link href="/contact" className="font-semibold text-primary-700 hover:underline">
                    Check your address
                  </Link>{" "}
                  — we likely still cover you.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="bg-gray-50">
        <FaqSection
          faqs={area.faqs}
          withSchema={false}
          eyebrow={`${area.city} FAQ`}
          title={`${area.city} Service Questions`}
        />
      </div>

      <CtaBanner
        title={`Get Pest-Free in ${area.city} Today`}
        subtitle={`Free inspections across ${area.city} — most appointments available same-day or next-day.`}
      />
    </>
  );
}
