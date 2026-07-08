import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { galleryImages } from "@/data/images";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { SiteImage } from "@/components/shared/site-image";
import { BeforeAfter } from "@/components/home/before-after";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Our Work, Before & After",
  description:
    "See GreenShield's pest control work across Austin: before & after transformations, exclusion repairs, wildlife removals & our team in the field.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The Work Behind the Guarantee"
        lead="Real projects from real routes — exclusion craftsmanship, humane wildlife handling, and the before/after transformations our customers love to share."
        crumbs={[{ name: "Gallery", path: "/gallery" }]}
      />

      {/* Before / after */}
      <section aria-label="Before and after comparisons" className="container-site py-16 lg:py-24">
        <SectionHeading
          eyebrow="Before & After"
          title="Drag to See the Difference"
          subtitle="Interactive comparisons from recent projects. Drag the handle on each card."
        />
        <FadeIn>
          <BeforeAfter />
        </FadeIn>
      </section>

      {/* Photo grid */}
      <section aria-label="Project photo gallery" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="In the Field"
            title="Our Team at Work"
            subtitle="From perimeter treatments to attic restorations — a look at the craft behind every service report."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <StaggerItem key={item.label}>
                <figure className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <SiteImage
                    image={item.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[4/3] w-full rounded-none"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="flex items-center justify-between gap-3 p-5">
                    <p className="font-heading text-sm font-semibold text-charcoal">
                      {item.label}
                    </p>
                    <Badge variant="primary" className="shrink-0">
                      {item.category}
                    </Badge>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title="Want Results Like These?"
        subtitle="Every project starts the same way — with a free, no-obligation inspection."
      />
    </>
  );
}
