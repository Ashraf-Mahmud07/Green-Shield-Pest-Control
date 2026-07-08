import { Breadcrumb, type Crumb } from "@/components/shared/breadcrumb";
import { FadeIn } from "@/components/shared/motion";
import { Badge } from "@/components/ui/badge";

/**
 * Standard interior-page hero: dark green gradient panel with breadcrumb,
 * eyebrow, H1, and lead paragraph.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
      <div className="bg-dot-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -right-32 top-0 size-96 rounded-full bg-secondary-400/15 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative py-14 lg:py-20">
        <Breadcrumb items={crumbs} light />
        <FadeIn className="mt-6 max-w-3xl">
          {eyebrow && (
            <Badge variant="light" size="md" className="mb-4">
              {eyebrow}
            </Badge>
          )}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 text-base leading-relaxed text-primary-100 sm:text-lg">
              {lead}
            </p>
          )}
        </FadeIn>
        {children}
      </div>
    </section>
  );
}
