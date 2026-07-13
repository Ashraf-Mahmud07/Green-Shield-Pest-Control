import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/motion";
import { ContactForm } from "@/components/forms/contact-form";
import { SiteImage } from "@/components/shared/site-image";
import { images } from "@/data/images";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Talk to a Real Human",
  description:
    "Contact GreenShield Pest Control in Austin, TX: call, text, email, or send a message. Same-day responses, 24/7 emergency line, and a human on every call.",
  path: "/contact",
});

const socialLinks = [
  { label: "Facebook", href: site.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "Twitter", href: site.social.twitter, icon: TwitterIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="A Human Answers. Every Time."
        lead="Questions, quotes, scheduling, or a photo of something with too many legs — reach us however you like. During business hours you'll never hit a phone tree."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section aria-label="Contact information and form" className="container-site py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div className="space-y-6">
            <FadeIn>
              <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-soft">
                <h2 className="font-heading text-lg font-bold text-charcoal">Get in Touch</h2>
                <ul className="mt-5 space-y-5 text-sm">
                  <li>
                    <a href={site.phoneHref} className="group flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                        <Phone className="size-5" aria-hidden />
                      </span>
                      <span className="min-w-0 break-words">
                        <span className="block font-heading font-semibold text-charcoal">
                          {site.phone}
                        </span>
                        <span className="text-gray-500">Call or text — Mon–Sat</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={site.emergencyPhoneHref} className="group flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                        <Siren className="size-5" aria-hidden />
                      </span>
                      <span className="min-w-0 break-words">
                        <span className="block font-heading font-semibold text-charcoal">
                          {site.emergencyPhone}
                        </span>
                        <span className="text-gray-500">24/7 emergency line</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                        <Mail className="size-5" aria-hidden />
                      </span>
                      <span className="min-w-0 break-words">
                        <span className="block font-heading font-semibold text-charcoal">
                          {site.email}
                        </span>
                        <span className="text-gray-500">Replies within one business day</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <MapPin className="size-5" aria-hidden />
                    </span>
                    <address className="min-w-0 break-words not-italic">
                      <span className="block font-heading font-semibold text-charcoal">
                        Headquarters
                      </span>
                      <span className="text-gray-500">
                        {site.address.street}
                        <br />
                        {site.address.city}, {site.address.state} {site.address.zip}
                      </span>
                    </address>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Clock className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0 break-words">
                      <span className="block font-heading font-semibold text-charcoal">
                        Business Hours
                      </span>
                      {site.hours.map((h) => (
                        <p key={h.days} className="text-gray-500">
                          <span className="font-medium text-gray-700">{h.days}:</span> {h.time}
                        </p>
                      ))}
                    </div>
                  </li>
                </ul>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="mb-3 font-heading text-sm font-semibold text-charcoal">
                    Follow along
                  </p>
                  <ul className="flex gap-2.5">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${site.name} on ${label}`}
                          className="flex size-10 items-center justify-center rounded-full bg-gray-50 text-gray-600 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:text-white"
                        >
                          <Icon className="size-4" aria-hidden />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Map placeholder */}
            <FadeIn delay={0.1}>
              <SiteImage
                image={images.mapAustin}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/3] w-full shadow-soft"
              />
              <p className="mt-2 text-center text-xs text-gray-400">
                Interactive Google Map embed replaces this image in production.
              </p>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn direction="left">
            <div className="rounded-4xl border border-gray-100 bg-white p-7 shadow-lift sm:p-9">
              <h2 className="font-heading text-2xl font-bold text-charcoal">Send a Message</h2>
              <p className="mt-1 text-sm text-gray-500">
                We reply to every message within one business day — usually much faster.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
