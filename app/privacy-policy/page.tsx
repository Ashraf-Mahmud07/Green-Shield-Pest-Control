import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal information.`,
  path: "/privacy-policy",
});

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "When you request a quote, schedule an inspection, or contact us, we collect the information you provide: name, phone number, email address, service address, and details about your pest concern. If you become a customer, we also maintain service history, treatment records, and billing information.",
      "Our website automatically collects standard technical data — IP address, browser type, pages visited, and referring URLs — through cookies and similar technologies, used to improve site performance and understand how visitors find us.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use your information to schedule and perform services, send appointment confirmations and service reports, respond to inquiries, process payments, and — if you opt in — send seasonal pest alerts and service reminders. We use aggregate website analytics to improve our content and user experience.",
      "We do not sell, rent, or trade your personal information to third parties for their marketing purposes. Ever.",
    ],
  },
  {
    heading: "Information Sharing",
    body: [
      "We share information only with service providers who help us operate: payment processors, scheduling software, and communication platforms — each bound by confidentiality obligations. We may disclose information when required by law, regulation, or valid legal process.",
    ],
  },
  {
    heading: "Text Message & Email Communications",
    body: [
      "By providing your phone number, you consent to receive service-related text messages (appointment confirmations, technician arrival notices). Marketing messages require separate opt-in and can be stopped anytime by replying STOP. Email newsletters include an unsubscribe link in every message.",
    ],
  },
  {
    heading: "Data Security & Retention",
    body: [
      "We protect your information with industry-standard safeguards including encryption in transit, access controls, and secure vendor selection. Service records are retained as required by Texas pesticide application regulations; other personal data is retained only as long as needed for the purposes described here.",
    ],
  },
  {
    heading: "Your Rights & Choices",
    body: [
      "You may request access to, correction of, or deletion of your personal information at any time by emailing us. You can opt out of marketing communications without affecting service-related messages. Note that some records must be retained to comply with state pesticide regulations.",
    ],
  },
  {
    heading: "Contact Us About Privacy",
    body: [
      `Questions about this policy or your data? Contact us at ${site.email} or write to ${site.legalName}, ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`,
      "This policy was last updated on January 15, 2026. Material changes will be posted on this page with an updated date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Plain-English answers about what we collect, why, and the choices you have. Last updated January 15, 2026."
        crumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
      />
      <section aria-label="Privacy policy content" className="container-site py-14 lg:py-20">
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
