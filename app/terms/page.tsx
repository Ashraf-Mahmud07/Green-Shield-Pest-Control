import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms and conditions governing services provided by ${site.name}.`,
  path: "/terms",
});

const sections = [
  {
    heading: "1. Services & Agreements",
    body: [
      `These terms govern all pest control services provided by ${site.legalName} ("GreenShield," "we," "us"). Specific service details, pricing, and schedules are set out in your written service agreement or quote, which together with these terms forms the complete agreement between us.`,
    ],
  },
  {
    heading: "2. The Pest-Free Guarantee",
    body: [
      "Recurring service plans include unlimited re-services between scheduled visits at no additional charge for covered pests. One-time treatments carry a 30-day re-treatment guarantee for the treated pest unless otherwise stated in writing. The guarantee requires reasonable customer cooperation, including access to the property and completion of any agreed preparation or sanitation steps.",
      "Termite work is covered by a separate written warranty with its own terms, renewal requirements, and transferability provisions provided at the time of treatment.",
    ],
  },
  {
    heading: "3. Scheduling, Access & Cancellations",
    body: [
      "We provide arrival windows and text-ahead notifications for all visits. Exterior-only visits do not require you to be home. Appointments may be rescheduled without charge with at least 24 hours' notice; repeated same-day cancellations or lockouts may incur a trip fee.",
      "Recurring plans may be cancelled with 30 days' written notice. No cancellation fees apply; any discounts contingent on an annual term may be reconciled on the final invoice.",
    ],
  },
  {
    heading: "4. Pricing & Payment",
    body: [
      "All work is quoted in writing before it begins. Payment is due upon service completion unless your agreement specifies invoiced billing. Plan pricing is billed monthly and remains fixed for the agreement term; we provide at least 30 days' notice of any renewal price change.",
    ],
  },
  {
    heading: "5. Customer Responsibilities",
    body: [
      "Effective treatment is a partnership. You agree to provide safe access to treatment areas, disclose pets and health sensitivities, follow re-entry and preparation guidance, and complete the conducive-condition corrections identified in your service reports (e.g., moisture repairs, sanitation, exclusion recommendations you elect to handle yourself).",
    ],
  },
  {
    heading: "6. Safety & Product Information",
    body: [
      "All products we apply are EPA-registered and applied by licensed technicians in accordance with label directions and Texas Department of Agriculture regulations. Product labels and safety data sheets are available on request. Follow all re-entry guidance provided by your technician.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      "Our liability for any claim arising from services is limited to the amount paid for the service giving rise to the claim, except where prohibited by law. We are not liable for pre-existing damage, damage caused by pests prior to or between treatments, or conditions in inaccessible areas we could not inspect. Nothing in these terms limits liability for gross negligence or willful misconduct.",
    ],
  },
  {
    heading: "8. Governing Law & Contact",
    body: [
      `These terms are governed by the laws of the State of Texas. Questions may be directed to ${site.email} or ${site.legalName}, ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`,
      "Last updated January 15, 2026.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="The agreement behind every GreenShield service — written to be read, not buried. Last updated January 15, 2026."
        crumbs={[{ name: "Terms of Service", path: "/terms" }]}
      />
      <section aria-label="Terms of service content" className="container-site py-14 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-xl font-bold text-charcoal">{section.heading}</h2>
              {section.body.map((para) => (
                <p key={para.slice(0, 40)} className="mt-3 leading-relaxed text-gray-600">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
