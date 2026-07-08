import type { Metadata } from "next";
import { BadgeCheck, HelpCircle, RefreshCcw, ShieldCheck, Wallet } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { plans, allPlansInclude } from "@/data/plans";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/motion";
import { PricingCard } from "@/components/cards/pricing-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";

export const metadata: Metadata = buildMetadata({
  title: "Service Plans & Pricing — Protection From $49/mo",
  description:
    "Compare GreenShield pest protection plans: Essential, Complete & Premium Shield. Transparent pricing, unlimited free re-services, no lock-in contracts.",
  path: "/plans",
});

const planFaqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Anytime. Upgrade instantly (we'll add the extra coverage at your next visit) or downgrade at your next billing cycle. Your service history carries over either way.",
  },
  {
    question: "What if I see pests between scheduled visits?",
    answer:
      "Call us and we return free — that's the pest-free guarantee. Unlimited re-services are included in every plan, not sold as an add-on.",
  },
  {
    question: "Is there a contract or cancellation fee?",
    answer:
      "Plans are priced on an annual basis but you can cancel anytime with 30 days' notice, no cancellation fee. We keep customers with results, not paperwork.",
  },
  {
    question: "Does the initial visit cost extra?",
    answer:
      "The first visit is more intensive (full interior + exterior treatment, de-webbing, entry point documentation) and is billed at a one-time setup rate quoted upfront — often discounted or waived during promotions.",
  },
  {
    question: "Which plan is right for a home near a greenbelt?",
    answer:
      "Greenbelt-adjacent homes face scorpion, rodent, and wildlife pressure that Essential doesn't cover. Complete Shield is the right starting point; Premium adds the termite and mosquito protection these lots usually benefit from.",
  },
];

const valueProps = [
  {
    icon: Wallet,
    title: "Prevention Costs Less",
    description:
      "A year of Essential Shield costs less than a single bed bug or termite corrective treatment. Protection is the cheap option.",
  },
  {
    icon: RefreshCcw,
    title: "Free Re-Services, Always",
    description:
      "If anything breaks through between visits, we come back at no charge until it's resolved. Every plan. No exceptions.",
  },
  {
    icon: ShieldCheck,
    title: "No Lock-In Contracts",
    description:
      "Cancel with 30 days' notice, zero fees. Our 98% retention rate is earned by results, not enforced by fine print.",
  },
];

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Plans"
        title="Simple Plans. Serious Protection."
        lead="Three levels of year-round defense, one guarantee across all of them. Every plan includes unlimited free re-services and no lock-in contract."
        crumbs={[{ name: "Service Plans", path: "/plans" }]}
      />

      <section aria-label="Plan comparison" className="container-site py-16 lg:py-24">
        <Stagger className="grid gap-8 pt-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.id}>
              <PricingCard plan={plan} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Coverage comparison */}
        <FadeIn className="mt-14">
          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-soft">
            <table className="w-full min-w-160 border-collapse bg-white text-left text-sm">
              <caption className="sr-only">Pest coverage comparison across plans</caption>
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th scope="col" className="p-5 font-heading font-semibold text-charcoal">
                    Pests Covered
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} scope="col" className="p-5 font-heading font-semibold text-charcoal">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["General insects (ants, roaches, spiders, wasps…)", true, true, true],
                  ["Rodent monitoring & control", false, true, true],
                  ["Fire ant yard treatment", false, true, true],
                  ["Scorpion-specific treatments", false, true, true],
                  ["Fleas & ticks", false, true, true],
                  ["Termite monitoring & annual inspection", false, false, true],
                  ["Seasonal mosquito reduction", false, false, true],
                  ["Wildlife activity monitoring", false, false, true],
                ].map(([label, ...cols]) => (
                  <tr key={label as string} className="border-b border-gray-50 last:border-0">
                    <th scope="row" className="p-5 font-normal text-gray-600">
                      {label}
                    </th>
                    {cols.map((covered, i) => (
                      <td key={i} className="p-5">
                        {covered ? (
                          <BadgeCheck className="size-5 text-secondary-600" aria-label="Included" />
                        ) : (
                          <span className="text-gray-300" aria-label="Not included">
                            —
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-center font-heading text-sm font-semibold text-charcoal">
              Every plan includes:
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
              {allPlansInclude.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-secondary-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Value props */}
      <section aria-label="Plan value" className="bg-gray-50 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why a Plan"
            title="The Math Favors Prevention"
          />
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {valueProps.map((prop) => (
              <StaggerItem key={prop.title}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-soft">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <prop.icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-charcoal">
                    {prop.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{prop.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-gray-500">
            <HelpCircle className="size-4" aria-hidden />
            Not sure which plan fits? Book a free inspection and get an honest recommendation — even if it&apos;s the cheapest one.
          </FadeIn>
        </div>
      </section>

      <FaqSection faqs={planFaqs} eyebrow="Plan FAQ" title="Plan Questions, Answered" />
      <CtaBanner title="Start Your Protection Plan Today" />
    </>
  );
}
