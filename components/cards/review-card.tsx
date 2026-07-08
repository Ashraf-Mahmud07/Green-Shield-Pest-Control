import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { RatingStars } from "@/components/shared/rating-stars";
import { formatDate } from "@/lib/utils";
import { avatarImages } from "@/data/images";

/** Static testimonial card (non-carousel contexts). */
export function ReviewCard({ review }: { review: Testimonial }) {
  const avatar = avatarImages[review.name];
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <Quote className="size-8 text-secondary-400" aria-hidden />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-5">
        {avatar && (
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-full object-cover ring-2 ring-secondary-200"
          />
        )}
        <div>
          <RatingStars rating={review.rating} />
          <p className="mt-1 font-heading text-sm font-semibold text-charcoal">
            {review.name}
          </p>
          <p className="text-xs text-gray-500">
            {review.service} · {review.location} · {formatDate(review.date)}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
