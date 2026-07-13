import type { Metadata } from "next";
import { MessageCircleQuestion, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { generalFaqs, commercialFaqs } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/shared/faq-section";
import { FadeIn } from "@/components/shared/motion";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "FAQs — Pest Control Questions, Answered Honestly",
  description:
    "Answers to the questions Austin homeowners and businesses ask most: safety, pricing, guarantees, scheduling, treatment prep & more.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Straight Answers to Real Questions"
        lead="No sales spin — the same answers our technicians give at your kitchen table. Can't find yours? A human answers our phone during business hours."
        crumbs={[{ name: "FAQs", path: "/faqs" }]}
      />

      <FaqSection
        faqs={generalFaqs}
        eyebrow="General Questions"
        title="Service, Safety & Pricing"
      />

      <div className="bg-gray-50">
        <FaqSection
          faqs={commercialFaqs}
          eyebrow="Business Questions"
          title="Commercial Service FAQs"
        />
      </div>

      {/* Still have questions */}
      <section aria-label="Contact for more questions" className="container-site py-16 lg:py-20">
        <FadeIn>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2.5rem] bg-linear-to-br from-primary-50 to-secondary-50 p-10 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft">
              <MessageCircleQuestion className="size-8" aria-hidden />
            </span>
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              Still Have a Question?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-gray-600">
              Ask us anything — pest identification, pricing, safety concerns, or whether that
              spider photo is a brown recluse (it&apos;s probably not, but send it anyway).
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Send Us a Message
              </Button>
              <Button href={site.phoneHref} variant="outline" size="lg">
                <Phone aria-hidden />
                {site.phone}
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      <CtaBanner />
    </>
  );
}
