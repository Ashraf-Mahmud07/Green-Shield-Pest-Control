"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * Mobile-only sticky action bar (call + free inspection) that appears
 * after the user scrolls past the hero.
 */
export function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 88 }}
          animate={{ y: 0 }}
          exit={{ y: 88 }}
          transition={{ type: "tween", duration: 0.25 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_-12px_rgb(15_74_49/0.25)] backdrop-blur lg:hidden"
        >
          <div className="flex gap-3">
            <a
              href={site.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-500 py-3 font-heading text-sm font-semibold text-white"
            >
              <Phone className="size-4" aria-hidden />
              Call Now
            </a>
            <Link
              href="/request-inspection"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-700 py-3 font-heading text-sm font-semibold text-white"
            >
              <ClipboardCheck className="size-4" aria-hidden />
              Free Inspection
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
