import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import CondoInsurancePage from "@/components/pages/CondoInsurancePage";

export const metadata: Metadata = {
  title: "Condo Insurance Quote Online | Cherries Insurance",
  description:
    "Explore condo insurance with Cherries Insurance. Protect your unit, belongings, and personal liability. Request a free quote online.",
  keywords: ["condo insurance quote"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/condo-insurance",
  },
  openGraph: {
    title: "Condo Insurance Quote | Cherries Insurance",
    description:
      "Explore condo insurance options for your unit, personal belongings, and liability. Get started online with Cherries Insurance.",
    url: "https://www.cherriesinsurance.com/condo-insurance",
    type: "website",
    images: [
      {
        url: "https://www.cherriesinsurance.com/condo-insurance/Condo_Insurance_Background.jpg",
        width: 1376,
        height: 768,
        alt: "Modern condominium complex with landscaped courtyard, residential balconies, and a distant city skyline.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Condo Insurance Quote | Cherries Insurance",
    description:
      "Explore condo insurance options for your unit, personal belongings, and liability. Get started online with Cherries Insurance.",
    images: [
      "https://www.cherriesinsurance.com/condo-insurance/Condo_Insurance_Background.jpg",
    ],
  },
};

export default function Page() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="schema-insurance-agency"
        type="application/ld+json"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "InsuranceAgency"],
          "name": "Cherries Insurance",
          "url": "https://www.cherriesinsurance.com/condo-insurance",
          "logo": "https://www.cherriesinsurance.com/logo/logo.png",
          "image": "https://www.cherriesinsurance.com/condo-insurance/Condo_Insurance_Background.jpg",
          "description": "Cherries Insurance is a Massachusetts-based independent insurance agency helping condominium owners explore personalized insurance options for their units, belongings, and personal liability.",
          "areaServed": "United States"
        })}
      </Script>

      <CondoInsurancePage />
    </>
  );
}
