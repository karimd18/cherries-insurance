import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import QuotePage from "@/components/pages/QuotePage";

export const metadata: Metadata = {
  title: "Get a Free Quote Online | Cherries Insurance",
  description:
    "Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free.",
  keywords: ["insurance quote online"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/quote",
  },
  openGraph: {
    title: "Get a Free Quote Online | Cherries Insurance",
    description:
      "Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free.",
    url: "https://www.cherriesinsurance.com/quote",
    type: "website",
    images: [
      {
        url: "/quote/Background_Photo_GetaQuote_Page.png",
        width: 1200,
        height: 630,
        alt: "Person using a laptop with an insurance quote form on screen, sitting near a window with warm lighting and a houseplant in the background.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote Online | Cherries Insurance",
    description:
      "Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free.",
    images: ["/quote/Background_Photo_GetaQuote_Page.png"],
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script type="application/ld+json">
        {`{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness","InsuranceAgency"],
  "name": "Cherries Insurance",
  "url": "https://www.cherriesinsurance.com/quote",
  "logo": "/logo.png",
  "image": "/quote/Background_Photo_GetaQuote_Page.png",
  "description": "Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free.",
  "areaServed": "US"
}`}
      </Script>

      <QuotePage />
    </>
  );
}
