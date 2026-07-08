import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { BeforeAfter } from "@/components/home/before-after";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Our Work, Before & After",
  description:
    "See GreenShield's pest control work across Austin: before & after transformations, exclusion repairs, wildlife removals & our team in the field.",
  path: "/gallery",
});

const galleryItems = [
  {
    category: "Team in the Field",
    alt: "GreenShield technician performing a perimeter barrier treatment around a suburban home",
    label: "Perimeter barrier treatment",
    tone: "green" as const,
  },
  {
    category: "Exclusion Work",
    alt: "Close-up of professional steel mesh exclusion work sealing a rodent entry point at a roofline",
    label: "Roofline rodent exclusion",
    tone: "dark" as const,
  },
  {
    category: "Termite Protection",
    alt: "Technician trenching soil beside a foundation to apply a liquid termite barrier",
    label: "Liquid termite barrier installation",
    tone: "warm" as const,
  },
  {
    category: "Wildlife Removal",
    alt: "Wildlife specialist releasing a raccoon from a humane live trap at a relocation site",
    label: "Humane raccoon relocation",
    tone: "lime" as const,
  },
  {
    category: "Bee Relocation",
    alt: "Bee specialist transferring a live honey bee colony into a wooden relocation hive box",
    label: "Live honey bee relocation",
    tone: "warm" as const,
  },
  {
    category: "Commercial Service",
    alt: "Technician documenting a monitoring station check inside a commercial kitchen before opening hours",
    label: "Commercial kitchen monitoring",
    tone: "green" as const,
  },
  {
    category: "Mosquito Control",
    alt: "Backpack mist application of mosquito barrier treatment across dense backyard foliage",
    label: "Backyard mosquito barrier",
    tone: "lime" as const,
  },
  {
    category: "Attic Restoration",
    alt: "Freshly restored attic insulation after rodent contamination cleanup and sanitation",
    label: "Attic insulation restoration",
    tone: "dark" as const,
  },
  {
    category: "Team in the Field",
    alt: "GreenShield service fleet lined up at the Austin headquarters at sunrise",
    label: "The GreenShield fleet, Austin HQ",
    tone: "green" as const,
  },
];

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
            subtitle="Photography placeholders shown — final imagery drops straight into this grid."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <StaggerItem key={item.alt}>
                <figure className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <ImagePlaceholder
                      alt={item.alt}
                      label={item.label}
                      tone={item.tone}
                      className="aspect-[4/3] w-full rounded-none transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 p-5">
                    <p className="font-heading text-sm font-semibold text-charcoal">
                      {item.label}
                    </p>
                    <Badge variant="primary">{item.category}</Badge>
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
