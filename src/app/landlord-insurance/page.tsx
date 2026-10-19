import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import LandlordInsurancePage from "@/components/pages/LandlordInsurancePage";

export const metadata: Metadata = {
  title: "Landlord Insurance Quote Online | Cherries Insurance",
  description:
    "Explore landlord insurance options for your rental property, including building protection, liability, and potential loss of rental income. Request a free quote online.",
  keywords: ["landlord insurance quote"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/landlord-insurance",
  },
  openGraph: {
    title: "Landlord Insurance Quote | Cherries Insurance",
    description:
      "Protect your rental property against unexpected risks. Explore landlord insurance options for property damage, liability, and covered rental income losses.",
    url: "https://www.cherriesinsurance.com/landlord-insurance",
    type: "website",
    images: [
      {
        url: "https://www.cherriesinsurance.com/landlord-insurance/Landlord_Insurance_Background.jpg",
        width: 1376,
        height: 768,
        alt: "Row of modern townhouse rental units with landscaped front yards and lit windows at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landlord Insurance Quote | Cherries Insurance",
    description:
      "Protect your rental property against unexpected risks. Explore landlord insurance options for property damage, liability, and covered rental income losses.",
    images: [
      "https://www.cherriesinsurance.com/landlord-insurance/Landlord_Insurance_Background.jpg",
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
          "url": "https://www.cherriesinsurance.com/landlord-insurance",
          "logo": "https://www.cherriesinsurance.com/logo/logo.png",
          "image": "https://www.cherriesinsurance.com/landlord-insurance/Landlord_Insurance_Background.jpg",
          "description": "Cherries Insurance is an independent insurance agency helping rental property owners explore landlord insurance options for building damage, liability, and potential loss of rental income.",
          "areaServed": "United States"
        })}
      </Script>

      <LandlordInsurancePage />
    </>
  );
}
