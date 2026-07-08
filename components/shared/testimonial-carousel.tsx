"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { RatingStars } from "@/components/shared/rating-stars";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Auto-playing, swipeable testimonial carousel (Embla).
 */
export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex">
          {items.map((t) => (
            <div
              key={t.name}
              className="min-w-0 shrink-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lift">
                <CardContent className="flex h-full flex-col p-7">
                  <Quote className="size-8 text-secondary-400" aria-hidden />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <RatingStars rating={t.rating} />
                    <p className="mt-2 font-heading text-sm font-semibold text-charcoal">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t.service} · {t.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={scrollPrev}
          aria-label="Previous testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-700 transition-all hover:border-primary-300 hover:bg-primary-50"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-700 transition-all hover:border-primary-300 hover:bg-primary-50"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
