import { Phone, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/motion";
import { site } from "@/data/site";

/**
 * Full-width conversion banner reused near the bottom of most pages.
 */
export function CtaBanner({
  title = "Ready for a Pest-Free Property?",
  subtitle = "Get a free, no-obligation inspection from a licensed local expert — most appointments available same-day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section aria-labelledby="cta-banner-heading" className="container-site py-16 lg:py-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary-800 via-primary-900 to-primary-950 px-6 py-14 text-center shadow-lift sm:px-12 lg:px-20 lg:py-20">
          <div className="bg-dot-grid absolute inset-0" aria-hidden />
          {/* decorative glows */}
          <div
            className="absolute -left-24 -top-24 size-72 rounded-full bg-secondary-400/20 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -right-24 size-72 rounded-full bg-accent-500/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="cta-banner-heading"
              className="text-3xl font-bold leading-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-base text-primary-100 sm:text-lg">{subtitle}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Button
                href="/request-inspection"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <ClipboardCheck aria-hidden />
                Schedule an Inspection
              </Button>
              <Button
                href={site.phoneHref}
                variant="outline-light"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone aria-hidden />
                Call {site.phone}
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-200/80">
              Same-day service available · Pest-free guarantee · No obligation
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
