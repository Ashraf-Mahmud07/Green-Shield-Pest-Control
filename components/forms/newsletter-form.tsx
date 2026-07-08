"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { newsletterSchema, type NewsletterValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

/**
 * Compact inline newsletter signup used in the footer and blog sidebar.
 */
export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (values: NewsletterValues) => {
    await new Promise((r) => setTimeout(r, 700));
    console.info("Newsletter signup:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p
        role="status"
        className={cn(
          "flex items-center gap-2 text-sm font-medium",
          dark ? "text-secondary-300" : "text-secondary-700"
        )}
      >
        <CheckCircle2 className="size-5" aria-hidden />
        You&apos;re subscribed — seasonal pest alerts incoming!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div
        className={cn(
          "flex items-center gap-2 rounded-full p-1.5 pl-4",
          dark ? "bg-white/10 backdrop-blur-sm" : "border border-gray-200 bg-white"
        )}
      >
        <Mail
          className={cn("size-4 shrink-0", dark ? "text-primary-200" : "text-gray-400")}
          aria-hidden
        />
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className={cn(
            "w-full min-w-0 bg-transparent text-sm focus:outline-none",
            dark ? "text-white placeholder:text-primary-200/70" : "text-charcoal placeholder:text-gray-400"
          )}
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="shrink-0 rounded-full bg-secondary-400 px-5 py-2.5 font-heading text-sm font-semibold text-primary-950 transition-colors hover:bg-secondary-300 disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      {errors.email && (
        <p role="alert" className="mt-2 text-xs font-medium text-red-400">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
