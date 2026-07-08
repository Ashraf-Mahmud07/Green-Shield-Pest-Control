"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemData {
  title: string;
  content: React.ReactNode;
}

/**
 * Accessible single-open accordion with animated expand/collapse.
 * Used for FAQs across the site.
 */
export function Accordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: AccordionItemData[];
  className?: string;
  /** Index opened initially; pass -1 for all closed. */
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const headerId = `${baseId}-header-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={i}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors",
              isOpen
                ? "border-primary-200 bg-primary-50/50"
                : "border-gray-150 border-gray-200 bg-white hover:border-primary-200"
            )}
          >
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="font-heading text-sm font-semibold text-charcoal sm:text-base">
                {item.title}
              </span>
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                  isOpen
                    ? "rotate-180 bg-primary-700 text-white"
                    : "bg-primary-50 text-primary-700"
                )}
              >
                <ChevronDown className="size-4" aria-hidden />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:px-6 sm:text-[15px]">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
