"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { contactSchema, type ContactValues } from "@/lib/validations";
import { Input, Label, Select, Textarea, FieldError } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormSuccess } from "@/components/forms/form-success";

/** General contact form. */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactValues) => {
    await new Promise((r) => setTimeout(r, 900));
    console.info("Contact message:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FormSuccess
        title="Message sent!"
        message="Thanks for reaching out — we reply to every message within one business day, usually much faster."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">Full Name</Label>
          <Input
            id="contact-name"
            placeholder="Jane Smith"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="(512) 555-0100"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="jane@email.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="contact-subject">Subject</Label>
          <Select id="contact-subject" aria-invalid={!!errors.subject} {...register("subject")}>
            <option value="">Select…</option>
            <option value="new-service">New service inquiry</option>
            <option value="existing">Existing customer support</option>
            <option value="billing">Billing question</option>
            <option value="commercial">Commercial partnership</option>
            <option value="other">Something else</option>
          </Select>
          <FieldError message={errors.subject?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          placeholder="How can we help?"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="animate-spin" aria-hidden />
        ) : (
          <Send aria-hidden />
        )}
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
