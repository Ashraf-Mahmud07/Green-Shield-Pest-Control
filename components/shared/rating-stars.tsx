import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Row of filled/empty stars for review displays. */
export function RatingStars({
  rating,
  className,
  size = "size-4",
}: {
  rating: number;
  className?: string;
  size?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            size,
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
    </div>
  );
}
