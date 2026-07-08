"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X, ArrowRight } from "lucide-react";
import { mainNav, serviceMenuColumns } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

/**
 * Sticky site header: desktop nav with mega menu + dropdowns,
 * slide-in mobile navigation, and scroll-elevated styling.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the route changes (render-time state adjustment,
  // per react.dev "adjusting state when props change")
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-white"
      )}
    >
      <nav aria-label="Main navigation" className="container-site">
        <div className="flex h-18 items-center justify-between gap-6">
          <Logo />

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const hasPanel = item.label === "Services" || !!item.children;
              if (!hasPanel) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-800",
                        pathname === item.href
                          ? "text-primary-800"
                          : "text-gray-700"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isOpen = openMenu === item.label;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-800",
                      isOpen ? "text-primary-800" : "text-gray-700"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && item.label === "Services" && (
                      <MegaMenu key="mega" />
                    )}
                    {isOpen && item.children && (
                      <Dropdown key="drop" items={item.children} />
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-heading text-sm font-semibold text-primary-800 transition-colors hover:text-primary-600"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-secondary-100">
                <Phone className="size-4 text-secondary-700" aria-hidden />
              </span>
              {site.phone}
            </a>
            <Button href="/request-inspection" size="md">
              Free Inspection
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex size-11 items-center justify-center rounded-xl border border-gray-200 text-charcoal lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="size-6" aria-hidden />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-primary-950/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-lift lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-5">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex size-10 items-center justify-center rounded-xl border border-gray-200"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>
              <MobileNav />
              <div className="mt-auto space-y-3 border-t border-gray-100 p-5">
                <Button href="/request-inspection" className="w-full" size="lg">
                  Get a Free Inspection
                </Button>
                <Button href={site.phoneHref} variant="outline" className="w-full" size="lg">
                  <Phone aria-hidden />
                  {site.phone}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------------------------------------------ */

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: 0.18, ease: "easeOut" as const },
};

/** Full-width services mega menu. */
function MegaMenu() {
  return (
    <motion.div
      {...panelMotion}
      className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3"
    >
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lift">
        <div className="grid grid-cols-4 gap-8">
          {serviceMenuColumns.map((column) => (
            <div key={column.label}>
              <p className="mb-3 font-heading text-xs font-bold uppercase tracking-wider text-secondary-600">
                {column.label}
              </p>
              <ul className="space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-2 py-1 text-sm text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-800"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-primary-50 px-5 py-4">
          <p className="text-sm font-medium text-primary-900">
            Not sure what&apos;s bugging you? We&apos;ll identify it free.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 font-heading text-sm font-semibold text-primary-700 hover:text-primary-900"
          >
            All services
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/** Simple dropdown panel for grouped links. */
function Dropdown({
  items,
}: {
  items: { label: string; href: string; description?: string }[];
}) {
  return (
    <motion.div {...panelMotion} className="absolute left-0 top-full w-72 pt-3">
      <ul className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-lift">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-xl px-4 py-3 transition-colors hover:bg-primary-50"
            >
              <span className="block font-heading text-sm font-semibold text-charcoal">
                {item.label}
              </span>
              {item.description && (
                <span className="mt-0.5 block text-xs text-gray-500">
                  {item.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/** Accordion-style link list inside the mobile drawer. */
function MobileNav() {
  const [open, setOpen] = useState<string | null>("Services");

  return (
    <div className="flex-1 p-5">
      <ul className="space-y-1">
        {mainNav.map((item) => {
          const hasPanel = item.label === "Services" || !!item.children;
          if (!hasPanel) {
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 font-heading text-base font-semibold text-charcoal hover:bg-primary-50"
                >
                  {item.label}
                </Link>
              </li>
            );
          }
          const isOpen = open === item.label;
          const links =
            item.label === "Services"
              ? serviceMenuColumns.flatMap((c) => c.links).slice(0, 10).concat([{ label: "All Services →", href: "/services" }])
              : item.children!.map((c) => ({ label: c.label, href: c.href }));
          return (
            <li key={item.label}>
              <button
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.label)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-heading text-base font-semibold text-charcoal hover:bg-primary-50"
              >
                {item.label}
                <ChevronDown
                  className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                  aria-hidden
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pl-4"
                  >
                    {links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-800"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
