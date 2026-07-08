import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-700 text-white shadow-soft hover:bg-primary-800 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-secondary-400 text-primary-950 shadow-soft hover:bg-secondary-300 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
        accent:
          "bg-accent-500 text-white shadow-soft hover:bg-accent-600 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-primary-700 text-primary-800 bg-transparent hover:bg-primary-50",
        "outline-light":
          "border-2 border-white/70 text-white bg-transparent hover:bg-white/10",
        ghost: "text-primary-800 hover:bg-primary-50",
        white:
          "bg-white text-primary-800 shadow-soft hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Primary interactive element. Renders a Next.js <Link> when `href` is
 * provided (external links and tel:/mailto: fall through to <a>), otherwise
 * a <button>.
 */
export function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && typeof props.href === "string") {
    const { href, ...rest } = props as ButtonAsLink;
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {props.children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {props.children}
      </a>
    );
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}

export { buttonVariants };
