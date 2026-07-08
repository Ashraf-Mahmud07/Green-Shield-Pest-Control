import type { Faq } from "@/types";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/shared/json-ld";
import { faqSchema } from "@/lib/seo";
import { FadeIn } from "@/components/shared/motion";

/**
 * FAQ block with accessible accordion + FAQPage schema markup.
 */
export function FaqSection({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  subtitle,
  withSchema = true,
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  withSchema?: boolean;
}) {
  return (
    <section aria-label="Frequently asked questions" className="container-site py-16 lg:py-24">
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <FadeIn className="mx-auto max-w-3xl">
        <Accordion
          items={faqs.map((f) => ({ title: f.question, content: f.answer }))}
        />
      </FadeIn>
    </section>
  );
}
