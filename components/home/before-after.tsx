"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { beforeAfterProjects } from "@/data/images";
import type { ImageAsset } from "@/data/images";

/**
 * Interactive before/after comparison with a draggable divider.
 */
export function BeforeAfter() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {beforeAfterProjects.map((project) => (
        <CompareCard key={project.title} {...project} />
      ))}
    </div>
  );
}

function CompareCard({
  title,
  location,
  before,
  after,
}: {
  title: string;
  location: string;
  before: ImageAsset;
  after: ImageAsset;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft transition-shadow hover:shadow-lift">
      <div className="relative aspect-[4/3] select-none">
        {/* After layer (base) */}
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        {/* Before layer (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
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
