"use client";

import { FormSuccess } from "@/components/forms/form-success";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/input";
import { inspectionSchema, type InspectionValues } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

/** Free inspection scheduling form. */
export function InspectionForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InspectionValues>({ resolver: zodResolver(inspectionSchema) });

  const onSubmit = async (values: InspectionValues) => {
    await new Promise((r) => setTimeout(r, 900));
    console.info("Inspection request:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FormSuccess
        title="Inspection scheduled!"
        message="You'll receive a confirmation text shortly. A licensed inspector will call to confirm your window before arrival."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="insp-name">Full Name</Label>
          <Input
            id="insp-name"
            placeholder="Jane Smith"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="insp-phone">Phone</Label>
          <Input
            id="insp-phone"
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
        <Label htmlFor="insp-email">Email</Label>
        <Input
          id="insp-email"
          type="email"
          placeholder="jane@email.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="insp-concern">
          What are you seeing? <span className="text-gray-400">(optional)</span>
        </Label>
        <Textarea
          id="insp-concern"
          placeholder="Describe the pest activity, where, and for how long…"
          {...register("concern")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="animate-spin" aria-hidden />
        ) : (
          <CalendarCheck aria-hidden />
        )}
        {isSubmitting ? "Scheduling…" : "Schedule My Free Inspection"}
      </Button>
      <p className="text-center text-xs text-gray-400">
        100% free, zero obligation. Most inspections available same-day.
      </p>
    </form>
  );
}
