import type { Metadata } from "next";
import { BadgeCheck, Clock3, FileText, Percent } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/motion";
import { QuoteForm } from "@/components/forms/quote-form";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Quote — Transparent Pest Control Pricing",
  description:
    "Get a fast, free pest control quote in Austin, TX. Transparent written pricing, $50 off your first service when you book online, response within the hour.",
  path: "/get-quote",
});

const promises = [
  {
    icon: Clock3,
    title: "Response Within the Hour",
    description: "During business hours, your customized quote arrives by text and email — usually well under 60 minutes.",
  },
  {
    icon: FileText,
    title: "Written & Itemized",
    description: "Every quote lists exactly what's included: treatment, follow-ups, and guarantee terms. The quote is the invoice.",
  },
  {
    icon: Percent,
    title: "$50 Off Online Bookings",
    description: "Book your first service through this form and $50 comes off automatically. No promo code hunting.",
  },
  {
    icon: BadgeCheck,
    title: "Price-Match Promise",
    description: "Written quote from a comparable licensed local competitor? We'll match it or tell you honestly why we can't.",
  },
];

export default function GetQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="Honest Pricing in 60 Seconds"
        lead="Tell us what's bugging you and where — we'll send a transparent, written quote fast. No site-visit ransom, no 'call for pricing' games."
        crumbs={[{ name: "Get a Quote", path: "/get-quote" }]}
      />

      <section aria-label="Quote request" className="container-site py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              The GreenShield Quote Promise
            </h2>
            <div className="mt-8 space-y-6">
              {promises.map((item, i) => (
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
              <div className="mt-10 rounded-3xl bg-gray-50 p-7">
                <h3 className="font-heading text-sm font-bold text-charcoal">
                  Typical price ranges
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
                  <li className="flex justify-between gap-4">
                    <span>One-time general treatment</span>
                    <span className="font-semibold text-charcoal">$150–$300</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Protection plans</span>
                    <span className="font-semibold text-charcoal">from $49/mo</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Mosquito season program</span>
                    <span className="font-semibold text-charcoal">from $89/visit</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Termite, bed bug & wildlife</span>
                    <span className="font-semibold text-charcoal">quoted after inspection</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  Final pricing depends on property size and infestation scope — your written
                  quote is exact before any work begins.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-lift sm:p-9 lg:sticky lg:top-28">
              <h2 className="font-heading text-2xl font-bold text-charcoal">Request My Quote</h2>
              <p className="mt-1 text-sm text-gray-500">
                Or call{" "}
                <a href={site.phoneHref} className="font-semibold text-primary-700 hover:underline">
                  {site.phone}
                </a>{" "}
                for a quote over the phone.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
