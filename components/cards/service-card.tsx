import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { ServiceIcon } from "@/components/shared/service-icon";

/** Card linking to a dedicated service page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-lift"
    >
      {/* hover wash */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 transition-colors duration-300 group-hover:from-primary-50/60 group-hover:to-secondary-50/40"
        aria-hidden
      />
      <div className="relative">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-700 group-hover:text-white">
          <ServiceIcon name={service.icon} className="size-7" />
        </div>
        <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal transition-colors group-hover:text-primary-800">
          {service.shortName}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {service.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary-700">
          Learn more
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
