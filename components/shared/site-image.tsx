import Image from "next/image";
import type { ImageAsset } from "@/data/images";
import { cn } from "@/lib/utils";

/**
 * Standard photographic image: next/image with fill layout inside a
 * styled wrapper. Pass the aspect ratio / rounding via className.
 * Lazy-loaded by default; set `priority` for above-the-fold usage.
 */
export function SiteImage({
  image,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  image: ImageAsset;
  /** Wrapper classes — control aspect ratio, rounding, borders here. */
  className?: string;
  /** Extra classes on the <img> itself (e.g. hover scale effects). */
  imgClassName?: string;
  /** Responsive sizes hint for srcset selection. */
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-primary-50", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
