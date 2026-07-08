import Link from "next/link";
import { Bug, Home, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
      <div className="bg-dot-grid absolute inset-0" aria-hidden />
      <div className="container-site relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="flex size-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
          <Bug className="size-10 text-secondary-400" aria-hidden />
        </span>
        <p className="mt-8 font-heading text-7xl font-bold tracking-tight text-white sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
          This Page Has Been Exterminated
        </h1>
        <p className="mt-4 max-w-md text-primary-100">
          The page you&apos;re looking for scurried off or never existed. Unlike pests, we
          can&apos;t bring it back — but here&apos;s the fastest way forward.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/" variant="secondary" size="lg">
            <Home aria-hidden />
            Back to Home
          </Button>
          <Button href="/services" variant="outline-light" size="lg">
            <Search aria-hidden />
            Browse Services
          </Button>
          <Button href={site.phoneHref} variant="outline-light" size="lg">
            <Phone aria-hidden />
            {site.phone}
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {[
            { label: "Free Inspection", href: "/request-inspection" },
            { label: "Get a Quote", href: "/get-quote" },
            { label: "Service Plans", href: "/plans" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary-200 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
