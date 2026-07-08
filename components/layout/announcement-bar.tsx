import { Phone, Zap } from "lucide-react";
import { site } from "@/data/site";

/** Slim top bar promoting same-day service and the phone number. */
export function AnnouncementBar() {
  return (
    <div className="bg-primary-950 text-primary-100">
      <div className="container-site flex h-9 items-center justify-center gap-2 text-xs font-medium sm:justify-between">
        <p className="flex items-center gap-1.5">
          <Zap className="size-3.5 text-secondary-400" aria-hidden />
          <span className="hidden sm:inline">
            Same-day service available —&nbsp;
          </span>
          $50 off your first service when you book online
        </p>
        <a
          href={site.phoneHref}
          className="hidden items-center gap-1.5 transition-colors hover:text-secondary-300 sm:flex"
        >
          <Phone className="size-3.5" aria-hidden />
          {site.phone}
        </a>
      </div>
    </div>
  );
}
