import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";
import { site } from "@/data/site";
import { footerNav } from "@/data/navigation";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { RatingStars } from "@/components/shared/rating-stars";

const socialLinks = [
  { label: "Facebook", href: site.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "Twitter", href: site.social.twitter, icon: TwitterIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
];

/** Site-wide footer with newsletter capture, link groups, and legal bar. */
export function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="container-site flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-heading text-xl font-bold text-white">
              Seasonal pest alerts for Central Texas
            </h2>
            <p className="mt-1 text-sm text-primary-200">
              One useful email a month — what&apos;s swarming, what&apos;s moving in, and how to stay ahead of it.
            </p>
          </div>
          <div className="w-full max-w-md">
            <NewsletterForm dark />
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
              <ShieldCheck className="size-6" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-bold text-white">GreenShield</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary-400">
                Pest Control
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-200">
            Family-owned and protecting Central Texas homes and businesses since {site.founded}. Licensed, insured, and backed by our pest-free guarantee.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <RatingStars rating={site.rating.value} />
            <span className="text-sm text-primary-200">
              {site.rating.value} · {site.rating.count.toLocaleString()} Google reviews
            </span>
          </div>
          <p className="mt-4 text-xs text-primary-300/80">{site.license}</p>
          <ul className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${label}`}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-primary-100 transition-all hover:-translate-y-0.5 hover:bg-secondary-400 hover:text-primary-950"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <nav aria-label="Footer services">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-secondary-400">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-200 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Footer company links">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-secondary-400">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-200 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-heading text-sm font-bold uppercase tracking-wider text-secondary-400">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.areas.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-200 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-secondary-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-start gap-3 text-primary-200 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden />
                <span>
                  {site.phone}
                  <span className="block text-xs text-primary-300/80">Call or text</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.emergencyPhoneHref}
                className="flex items-start gap-3 text-primary-200 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden />
                <span>
                  {site.emergencyPhone}
                  <span className="block text-xs text-primary-300/80">24/7 emergency line</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 text-primary-200 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-primary-200">
              <MapPin className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden />
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </li>
            <li className="flex items-start gap-3 text-primary-200">
              <Clock className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden />
              <div>
                {site.hours.map((h) => (
                  <p key={h.days} className="text-xs leading-relaxed">
                    <span className="font-medium text-primary-100">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
