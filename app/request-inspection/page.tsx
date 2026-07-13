import { InspectionForm } from "@/components/forms/inspection-form";
import { FadeIn } from "@/components/shared/motion";
import { PageHero } from "@/components/shared/page-hero";
import { RatingStars } from "@/components/shared/rating-stars";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { BadgeCheck, CalendarCheck, ClipboardList, Microscope } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Request a Free Inspection — Same-Day Availability",
  description:
    "Schedule your free, no-obligation pest inspection in Austin, TX. A licensed technician inspects your property and delivers written findings — most appointments same-day.",
  path: "/request-inspection",
});

const included = [
  {
    icon: Microscope,
    title: "Full Interior & Exterior Inspection",
    description: "Foundation to roofline, kitchen to crawl space — a licensed technician checks it all.",
  },
  {
    icon: ClipboardList,
    title: "Written Findings & Photos",
    description: "You keep the documented report whether you hire us or not.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Quote On the Spot",
    description: "Exact pricing before any work — treat today, schedule later, or just say no thanks.",
  },
  {
    icon: CalendarCheck,
    title: "Zero Obligation, Zero Pressure",
    description: "Our inspectors aren't commissioned to sell. Honest findings only.",
  },
];

export default function RequestInspectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Inspection"
        title="Book Your Free Pest Inspection"
        lead="40 minutes, zero cost, zero obligation — and you keep the written findings either way. Most Austin-metro appointments are available same-day."
        crumbs={[{ name: "Request Inspection", path: "/request-inspection" }]}
      />

      <section aria-label="Inspection booking" className="container-site py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* What's included */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              What Your Free Inspection Includes
            </h2>
            <div className="mt-8 space-y-6">
              {included.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
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
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.25}>
              <div className="mt-10 rounded-3xl bg-linear-to-br from-primary-50 to-secondary-50 p-7">
                <div className="flex items-center gap-3">
                  <RatingStars rating={site.rating.value} />
                  <span className="text-sm font-medium text-gray-700">
                    {site.rating.value}/5 · {site.rating.count.toLocaleString()} reviews
                  </span>
                </div>
                <blockquote className="mt-4 text-sm italic leading-relaxed text-gray-600">
                  &ldquo;The inspector spent a full hour, showed me photos of everything he found,
                  and the quote matched the invoice to the penny. This is how service companies
                  should work.&rdquo;
                </blockquote>
                <p className="mt-3 text-xs font-semibold text-gray-500">
                  — Marcus T., Austin homeowner
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn direction="left">
            <div className="rounded-4xl border border-gray-100 bg-white p-7 shadow-lift sm:p-9 lg:sticky lg:top-28">
              <h2 className="font-heading text-2xl font-bold text-charcoal">
                Schedule My Inspection
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Prefer to talk? Call{" "}
                <a href={site.phoneHref} className="font-semibold text-primary-700 hover:underline">
                  {site.phone}
                </a>{" "}
                — a human answers.
              </p>
              <div className="mt-7">
                <InspectionForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
