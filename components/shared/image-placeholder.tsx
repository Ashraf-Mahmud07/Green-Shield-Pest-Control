import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Styled placeholder that stands in for photography until final imagery
 * is supplied. Carries the descriptive alt text via aria-label so the
 * accessibility tree matches the future real image.
 */
export function ImagePlaceholder({
  alt,
  className,
  label,
  tone = "green",
}: {
  alt: string;
  className?: string;
  /** Short visible caption, e.g. "Technician at work". */
  label?: string;
  tone?: "green" | "lime" | "warm" | "dark";
}) {
  const tones = {
    green: "from-primary-100 via-primary-50 to-secondary-100 text-primary-400",
    lime: "from-secondary-100 via-secondary-50 to-primary-100 text-secondary-600",
    warm: "from-accent-100 via-accent-50 to-secondary-50 text-accent-400",
    dark: "from-primary-800 via-primary-900 to-primary-950 text-primary-300",
  };
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br",
        tones[tone],
        className
      )}
    >
      <div className="bg-dot-grid-dark absolute inset-0" aria-hidden />
      <div className="relative flex flex-col items-center gap-3 p-6 text-center">
        <ImageIcon className="size-10 opacity-60" aria-hidden />
        {label && (
          <span className="max-w-56 font-heading text-xs font-medium uppercase tracking-wider opacity-70">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
