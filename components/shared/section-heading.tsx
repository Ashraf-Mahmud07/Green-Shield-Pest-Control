import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/motion";

/**
 * Consistent eyebrow + headline + subheadline block used to open
 * every major page section.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <FadeIn
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Badge variant={dark ? "light" : "primary"} size="md" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <Heading
        className={cn(
          "text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-primary-100/90" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
