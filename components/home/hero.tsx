import Image from "next/image";
import {
  Award,
  BadgeCheck,
  CalendarCheck,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/motion";
import { RatingStars } from "@/components/shared/rating-stars";
import { site } from "@/data/site";
import { images } from "@/data/images";

const heroTrust = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Pest-Free Guarantee" },
  { icon: Leaf, label: "Family & Pet Safe" },
  { icon: MapPin, label: "Local Experts Since 2009" },
];

const heroProof = [
  { value: "17+", label: "Years of Local Expertise" },
  { value: "48,000+", label: "Properties Protected" },
  { value: "98%", label: "Customer Retention" },
];

/**
 * Homepage hero: full-bleed photographic background with layered
 * gradient overlay, premium value proposition, and dual CTAs.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Background photograph */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Layered brand gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/85 to-primary-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-primary-950/30" />
        <div className="bg-dot-grid absolute inset-0 opacity-60" />
      </div>

      <div className="container-site relative py-20 lg:py-32">
        <div className="max-w-2xl">
          <FadeIn direction="up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-secondary-300 backdrop-blur-sm sm:text-sm">
              <ShieldCheck className="size-4" aria-hidden />
              {site.license} · Fully Insured
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Protection Your Home
              <span className="block bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
                Can Count On.
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-100 sm:text-lg">
              For seventeen years, Central Texas families and businesses have trusted
              GreenShield for safe, science-driven pest management — delivered by licensed
              local specialists and backed by a guarantee without fine print.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/request-inspection"
                variant="secondary"
                size="xl"
                className="w-full sm:w-auto"
              >
                <CalendarCheck aria-hidden />
                Schedule an Inspection
              </Button>
              <Button
                href={site.phoneHref}
                variant="outline-light"
                size="xl"
                className="w-full sm:w-auto"
              >
                <Phone aria-hidden />
                Speak with a Specialist
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-200/90">
              Complimentary property inspection · Same-day appointments available
            </p>
          </FadeIn>

          {/* Social proof row */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <RatingStars rating={site.rating.value} size="size-5" />
                <p className="text-sm text-primary-100">
                  <strong className="font-heading text-white">{site.rating.value}/5</strong>{" "}
                  · {site.rating.count.toLocaleString()} Google reviews
                </p>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <Award className="size-5 text-secondary-400" aria-hidden />
                <p className="text-sm text-primary-100">
                  Certified entomologists on staff
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Proof metrics */}
          <FadeIn direction="up" delay={0.5}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-8">
              {heroProof.map((item) => (
                <div key={item.label}>
                  <dd className="font-heading text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                    {item.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug text-primary-200 sm:text-sm">
                    {item.label}
                  </dt>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/10 bg-primary-950/60 backdrop-blur-sm">
        <div className="container-site grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
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
