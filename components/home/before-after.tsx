"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

const projects = [
  {
    title: "Wasp Nest Colony — Eave Removal",
    location: "Barton Hills, Austin",
    beforeAlt: "Large paper wasp nest colony under a home's eave before removal",
    afterAlt: "Clean, treated eave after professional wasp nest removal",
  },
  {
    title: "Rodent-Damaged Attic — Full Restoration",
    location: "Round Rock",
    beforeAlt: "Attic insulation contaminated and compressed by a rodent infestation",
    afterAlt: "Restored attic with fresh insulation after rodent exclusion and sanitation",
  },
  {
    title: "Fire Ant Yard — Mound Elimination",
    location: "Georgetown",
    beforeAlt: "Backyard lawn dotted with active fire ant mounds before treatment",
    afterAlt: "Healthy, mound-free lawn after professional fire ant treatment",
  },
];

/**
 * Interactive before/after comparison with a draggable divider.
 */
export function BeforeAfter() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {projects.map((project) => (
        <CompareCard key={project.title} {...project} />
      ))}
    </div>
  );
}

function CompareCard({
  title,
  location,
  beforeAlt,
  afterAlt,
}: (typeof projects)[number]) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft transition-shadow hover:shadow-lift">
      <div className="relative aspect-[4/3] select-none">
        {/* After layer (base) */}
        <ImagePlaceholder
          alt={afterAlt}
          label="After"
          tone="lime"
          className="absolute inset-0 rounded-none"
        />
        {/* Before layer (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <ImagePlaceholder
            alt={beforeAlt}
            label="Before"
            tone="warm"
            className="absolute inset-0 rounded-none"
          />
        </div>
        {/* Divider handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-lg"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-700 shadow-lift">
            <MoveHorizontal className="size-4" />
          </span>
        </div>
        {/* Labels */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent-500 px-3 py-1 font-heading text-xs font-bold text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 z-10 rounded-full bg-secondary-500 px-3 py-1 font-heading text-xs font-bold text-white">
          After
        </span>
        {/* Range control on top */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${title}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="p-5">
        <p className="font-heading text-sm font-semibold text-charcoal">{title}</p>
        <p className="mt-0.5 text-xs text-gray-500">{location}</p>
      </figcaption>
    </figure>
  );
}
