import type { Metadata } from "next";
import { BadgeCheck, Star } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { ReviewCard } from "@/components/cards/review-card";
import { RatingStars } from "@/components/shared/rating-stars";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = buildMetadata({
  title: "Customer Reviews & Testimonials — 4.9★ Rated",
  description:
    "Read what 2,384+ verified customers say about GreenShield Pest Control: real reviews from Austin, Round Rock, Cedar Park & across Central Texas.",
  path: "/testimonials",
});

const ratingBreakdown = [
  { stars: 5, percent: 93 },
  { stars: 4, percent: 5 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 0.5 },
  { stars: 1, percent: 0.5 },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Stories"
        title="Don't Take Our Word for It"
        lead="2,384 verified Google reviews. A 4.9-star average. A 98% retention rate. Here's what your neighbors actually say."
        crumbs={[{ name: "Testimonials", path: "/testimonials" }]}
      />

      {/* Rating summary */}
      <section aria-label="Rating summary" className="container-site py-16 lg:py-20">
        <FadeIn>
          <div className="mx-auto grid max-w-4xl gap-10 rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="font-heading text-7xl font-bold tracking-tight text-primary-800">
                {site.rating.value}
              </p>
              <RatingStars rating={site.rating.value} size="size-6" className="mt-3" />
              <p className="mt-3 text-sm text-gray-500">
                Based on {site.rating.count.toLocaleString()} verified Google reviews
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-secondary-50 px-4 py-1.5 text-xs font-semibold text-secondary-800">
                <BadgeCheck className="size-4" aria-hidden />
                All reviews from verified customers
              </p>
            </div>
            <div className="space-y-3">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="flex w-12 items-center gap-1 text-sm font-medium text-gray-600">
                    {row.stars}
                    <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
                  </span>
                  <div
                    className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100"
                    role="img"
                    aria-label={`${row.percent}% of reviews are ${row.stars} star`}
                  >
                    <div
                      className="h-full rounded-full bg-secondary-500"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-xs text-gray-500">{row.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* All reviews */}
      <section aria-label="Customer reviews" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Verified Reviews"
            title="Recent Reviews From Your Neighbors"
          />
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <ReviewCard review={t} />
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 text-center text-sm text-gray-500">
            Reviews shown are a representative sample.{" "}
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-700 hover:underline"
            >
              Read all {site.rating.count.toLocaleString()} reviews on Google →
            </a>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        title="Ready to Write Your Own 5-Star Story?"
        subtitle="Join the neighbors who stopped worrying about pests — starting with a free inspection."
      />
    </>
  );
}
