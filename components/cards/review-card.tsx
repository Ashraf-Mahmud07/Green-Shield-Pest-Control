import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { RatingStars } from "@/components/shared/rating-stars";
import { formatDate } from "@/lib/utils";

/** Static testimonial card (non-carousel contexts). */
export function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <Quote className="size-8 text-secondary-400" aria-hidden />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-gray-100 pt-5">
        <RatingStars rating={review.rating} />
        <p className="mt-2 font-heading text-sm font-semibold text-charcoal">
          {review.name}
        </p>
        <p className="text-xs text-gray-500">
          {review.service} · {review.location} · {formatDate(review.date)}
        </p>
      </figcaption>
    </figure>
  );
}
