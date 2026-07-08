import { Check, Sparkles } from "lucide-react";
import type { Plan } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Service plan pricing card. */
export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
        plan.popular
          ? "border-primary-600 ring-2 ring-primary-600/20"
          : "border-gray-100"
      )}
    >
      {plan.popular && (
        <Badge
          variant="accent"
          size="md"
          className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-soft"
        >
          <Sparkles className="size-3.5" aria-hidden />
          Most Popular
        </Badge>
      )}
      <h3 className="font-heading text-xl font-bold text-charcoal">{plan.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{plan.tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-5xl font-bold tracking-tight text-primary-800">
          ${plan.price}
        </span>
        <span className="text-sm font-medium text-gray-500">{plan.period}</span>
      </div>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary-100">
              <Check className="size-3 text-secondary-700" aria-hidden />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href={`/get-quote?plan=${plan.id}`}
        variant={plan.popular ? "primary" : "outline"}
        size="lg"
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}
