import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/seo";

export interface Crumb {
  name: string;
  path: string;
}

/** Breadcrumb trail with matching BreadcrumbList schema. */
export function Breadcrumb({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb">
        <ol
          className={`flex flex-wrap items-center gap-1.5 text-xs sm:text-sm ${
            light ? "text-primary-100/80" : "text-gray-500"
          }`}
        >
          {all.map((crumb, i) => {
            const isLast = i === all.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5 opacity-60" aria-hidden />}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={light ? "font-medium text-white" : "font-medium text-primary-700"}
                  >
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className={`flex items-center gap-1 transition-colors ${
                      light ? "hover:text-white" : "hover:text-primary-700"
                    }`}
                  >
                    {i === 0 && <Home className="size-3.5" aria-hidden />}
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
