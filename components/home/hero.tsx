import { Phone, ClipboardCheck, ShieldCheck, BadgeCheck, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/forms/quote-form";
import { FadeIn, ScaleIn } from "@/components/shared/motion";
import { RatingStars } from "@/components/shared/rating-stars";
import { site } from "@/data/site";

const heroTrust = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Pest-Free Guarantee" },
  { icon: Leaf, label: "Family & Pet Safe" },
  { icon: MapPin, label: "Local Since 2009" },
];

/**
 * Homepage hero: headline + CTAs on the left, glassmorphism quote form
 * on the right, trust badge strip beneath.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950"
    >
      <div className="bg-dot-grid absolute inset-0" aria-hidden />
      {/* decorative glows */}
      <div className="absolute -left-32 top-1/4 size-96 rounded-full bg-secondary-400/15 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 size-80 rounded-full bg-accent-500/15 blur-3xl" aria-hidden />

      <div className="container-site relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
        {/* Copy */}
        <div>
          <FadeIn direction="up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-secondary-300 backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-secondary-400" />
              </span>
              Same-day service available in Austin metro
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Pests Move Fast.
              <span className="block bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
                We Move Faster.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-100">
              Guaranteed protection for your home and business from Central Texas&apos;s
              toughest pests — delivered by licensed local experts who treat your
              property like their own.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/request-inspection" variant="secondary" size="xl">
                <ClipboardCheck aria-hidden />
                Get a Free Inspection
              </Button>
              <Button href={site.phoneHref} variant="outline-light" size="xl">
                <Phone aria-hidden />
                {site.phone}
              </Button>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-8 flex items-center gap-3">
              <RatingStars rating={site.rating.value} size="size-5" />
              <p className="text-sm text-primary-100">
                <strong className="text-white">{site.rating.value}/5</strong> from{" "}
                {site.rating.count.toLocaleString()} Google reviews
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Quote form card */}
        <ScaleIn delay={0.2}>
          <div className="glass rounded-[2rem] p-1.5 shadow-lift">
            <div className="rounded-[1.7rem] bg-white p-7 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-charcoal">
                Get Your Free Quote
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                60 seconds, no obligation — plus $50 off your first service.
              </p>
              <div className="mt-6">
                <QuoteForm compact />
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/10">
        <div className="container-site grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
          {heroTrust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5">
              <Icon className="size-5 shrink-0 text-secondary-400" aria-hidden />
              <span className="font-heading text-xs font-semibold text-primary-100 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
