"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Briefcase, Loader2 } from "lucide-react";
import { careerSchema, type CareerValues } from "@/lib/validations";
import { Input, Label, Select, Textarea, FieldError } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormSuccess } from "@/components/forms/form-success";
import { jobOpenings } from "@/data/team";

/** Career application form. */
export function CareerForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CareerValues>({ resolver: zodResolver(careerSchema) });

  const onSubmit = async (values: CareerValues) => {
    await new Promise((r) => setTimeout(r, 900));
    console.info("Career application:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FormSuccess
        title="Application received!"
        message="Thanks for your interest in joining GreenShield. Our hiring team reviews every application and responds within 3 business days."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="career-name">Full Name</Label>
          <Input
            id="career-name"
            placeholder="Jane Smith"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="career-phone">Phone</Label>
          <Input
            id="career-phone"
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
        <Label htmlFor="career-email">Email</Label>
        <Input
          id="career-email"
          type="email"
          placeholder="jane@email.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="career-position">Position</Label>
          <Select id="career-position" aria-invalid={!!errors.position} {...register("position")}>
            <option value="">Select…</option>
            {jobOpenings.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title}
              </option>
            ))}
            <option value="general">General application</option>
          </Select>
          <FieldError message={errors.position?.message} />
        </div>
        <div>
          <Label htmlFor="career-experience">Experience</Label>
          <Select id="career-experience" aria-invalid={!!errors.experience} {...register("experience")}>
            <option value="">Select…</option>
            <option value="none">No pest industry experience</option>
            <option value="1-3">1–3 years</option>
            <option value="3-5">3–5 years</option>
            <option value="5+">5+ years</option>
          </Select>
          <FieldError message={errors.experience?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="career-note">Why GreenShield?</Label>
        <Textarea
          id="career-note"
          placeholder="Tell us about yourself, your experience, and what you're looking for…"
          aria-invalid={!!errors.coverNote}
          {...register("coverNote")}
        />
        <FieldError message={errors.coverNote?.message} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="animate-spin" aria-hidden />
        ) : (
          <Briefcase aria-hidden />
        )}
        {isSubmitting ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  );
}
