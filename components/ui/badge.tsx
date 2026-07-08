import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-heading font-medium",
  {
    variants: {
      variant: {
        primary: "bg-primary-100 text-primary-800",
        secondary: "bg-secondary-100 text-secondary-800",
        accent: "bg-accent-100 text-accent-800",
        outline: "border border-primary-200 text-primary-700",
        light: "bg-white/15 text-white backdrop-blur-sm border border-white/20",
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "sm" },
  }
);

export function Badge({
  className,
  variant,
  size,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}
