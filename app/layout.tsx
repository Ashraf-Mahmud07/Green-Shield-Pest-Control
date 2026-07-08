import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCallButton } from "@/components/layout/sticky-call-button";
import { JsonLd } from "@/components/shared/json-ld";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Pest Control in Austin, TX | Free Inspections`,
    template: `%s | ${site.name}`,
  },
  description:
    "Fast, guaranteed pest control in Austin & Central Texas. Ants, roaches, rodents, termites, mosquitoes & more. Licensed, family-safe, 4.9★ rated. Free inspection.",
  keywords: [
    "pest control Austin",
    "exterminator Austin TX",
    "termite treatment",
    "rodent control",
    "mosquito control",
  ],
  openGraph: {
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary-800 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
