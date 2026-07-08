"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { quoteSchema, type QuoteValues } from "@/lib/validations";
import { Input, Label, Select, Textarea, FieldError } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormSuccess } from "@/components/forms/form-success";
import { services } from "@/data/services";

/**
 * Instant quote lead form. Submission is simulated client-side;
 * wire `onSubmit` to your CRM or API route in production.
 */
export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (values: QuoteValues) => {
    // Simulate network latency; replace with a real endpoint.
    await new Promise((r) => setTimeout(r, 900));
    console.info("Quote request:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FormSuccess
        title="Quote request received!"
        message="We'll text and email your customized quote shortly — usually within the hour during business hours."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <Label htmlFor="quote-name">Full Name</Label>
          <Input
            id="quote-name"
            placeholder="Jane Smith"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="quote-phone">Phone</Label>
          <Input
            id="quote-phone"
            type="tel"
            placeholder="(512) 555-0100"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="quote-email">Email</Label>
        <Input
          id="quote-email"
          type="email"
          placeholder="jane@email.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-3"}>
        <div>
          <Label htmlFor="quote-property">Property Type</Label>
          <Select id="quote-property" aria-invalid={!!errors.propertyType} {...register("propertyType")}>
            <option value="">Select…</option>
            <option value="home">Home</option>
            <option value="apartment">Apartment / Condo</option>
            <option value="business">Business</option>
            <option value="multifamily">Multifamily Property</option>
          </Select>
          <FieldError message={errors.propertyType?.message} />
        </div>
        <div>
          <Label htmlFor="quote-pest">Pest Issue</Label>
          <Select id="quote-pest" aria-invalid={!!errors.pest} {...register("pest")}>
            <option value="">Select…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortName}
              </option>
            ))}
            <option value="unknown">Not sure / Other</option>
          </Select>
          <FieldError message={errors.pest?.message} />
        </div>
        <div>
          <Label htmlFor="quote-zip">ZIP Code</Label>
          <Input
            id="quote-zip"
            inputMode="numeric"
            placeholder="78704"
            autoComplete="postal-code"
            aria-invalid={!!errors.zip}
            {...register("zip")}
          />
          <FieldError message={errors.zip?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="quote-details">
          Anything else we should know? <span className="text-gray-400">(optional)</span>
        </Label>
        <Textarea
          id="quote-details"
          placeholder="Where you're seeing activity, how long, urgency…"
          {...register("details")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="animate-spin" aria-hidden />
        ) : (
          <Send aria-hidden />
        )}
        {isSubmitting ? "Sending…" : "Get My Free Quote"}
      </Button>
      <p className="text-center text-xs text-gray-400">
        No spam, no obligation. We respond within one business hour.
      </p>
    </form>
  );
}
