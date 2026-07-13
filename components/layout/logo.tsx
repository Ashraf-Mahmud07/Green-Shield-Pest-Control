import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Brand mark + wordmark. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className="flex items-center gap-2.5"
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 text-white shadow-soft">
        <ShieldCheck className="size-6" aria-hidden />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-heading text-lg font-bold tracking-tight",
            light ? "text-white" : "text-primary-900"
          )}
        >
          GreenShield
        </span>
        <span
          className={cn(
            "block text-[10px] font-semibold uppercase tracking-[0.18em]",
            light ? "text-secondary-300" : "text-secondary-600"
          )}
        >
          Pest Control
        </span>
      </span>
    </Link>
  );
}
