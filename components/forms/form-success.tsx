"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/** Confirmation state shown after any form submits successfully. */
export function FormSuccess({
  title = "Request received!",
  message = "Thanks — a GreenShield team member will reach out within one business hour (often much sooner).",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center rounded-2xl bg-secondary-50 px-6 py-12 text-center"
      role="status"
    >
      <span className="flex size-16 items-center justify-center rounded-full bg-secondary-100">
        <CheckCircle2 className="size-9 text-secondary-600" aria-hidden />
      </span>
      <h3 className="mt-5 font-heading text-xl font-bold text-charcoal">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">{message}</p>
    </motion.div>
  );
}
