import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Truck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { serviceAreas } from "@/data/locations";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — Pest Control Across the Austin Metro",
  description:
    "GreenShield serves Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway & surrounding Central Texas communities with daily local routes.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Local Routes. Local Knowledge. Every Day."
        lead="Our technicians run daily routes through every community below — which is why same-day service isn't a marketing line, it's a schedule."
        crumbs={[{ name: "Service Areas", path: "/service-areas" }]}
      />

      <section aria-label="Cities we serve" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Coverage"
          title="Choose Your Community"
          subtitle="Every city page covers the local pest pressure, available services, and neighborhood-specific expertise."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <StaggerItem key={area.slug}>
              <Link
                href={`/service-areas/${area.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-lift"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <MapPin className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-charcoal group-hover:text-primary-800">
                  {area.city}, {area.state}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {area.intro.slice(0, 140)}…
                </p>
                <p className="mt-4 text-xs text-gray-500">
                  ZIP codes: {area.zipCodes.slice(0, 4).join(", ")}
                  {area.zipCodes.length > 4 && " + more"}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary-700">
                  {area.city} pest control
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-14">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-gray-50 p-8 text-center sm:flex-row sm:text-left">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
              <Truck className="size-7" aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-charcoal">
                On the edge of our map?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                We regularly serve Hutto, Manor, Buda, Kyle, Leander, Liberty Hill, and Dripping
                Springs. Call with your ZIP code and we&apos;ll confirm coverage on the spot.
              </p>
            </div>
            <Link
              href="/contact"
              className="font-heading text-sm font-semibold text-primary-700 hover:underline"
            >
              Check my address →
            </Link>
          </div>
        </FadeIn>
      </section>

      <CtaBanner />
    </>
  );
}
