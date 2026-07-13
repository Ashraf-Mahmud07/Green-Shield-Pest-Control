import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/page-hero";
import { BlogList } from "@/components/blog/blog-list";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FadeIn } from "@/components/shared/motion";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = buildMetadata({
  title: "Pest Control Blog — Guides, Tips & Local Alerts",
  description:
    "Field-tested pest guides from GreenShield's Austin technicians: identification, prevention, seasonal alerts & honest answers about what actually works.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The GreenShield Blog"
        title="Pest Intel From the Field"
        lead="Identification guides, seasonal alerts, and honest advice — written by the technicians who fight Central Texas pests every day, not a content farm."
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />

      <section aria-label="Blog articles" className="container-site py-16 lg:py-20">
        <BlogList />
      </section>

      {/* Newsletter */}
      <section aria-label="Newsletter signup" className="container-site pb-16 lg:pb-20">
        <FadeIn>
          <div className="rounded-[2.5rem] bg-linear-to-br from-primary-50 to-secondary-50 px-6 py-12 text-center sm:px-12">
            <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
              Get Seasonal Pest Alerts
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600 sm:text-base">
              One email a month: what&apos;s swarming in Central Texas, what&apos;s about to, and
              the prevention step that matters right now.
            </p>
            <div className="mx-auto mt-7 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </FadeIn>
      </section>

      <CtaBanner />
    </>
  );
}
