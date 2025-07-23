import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import RenterInsurancePage from "@/components/pages/RenterInsurancePage";

export const metadata: Metadata = {
  title: "Renters Insurance Quote Online | Cherries Insurance",
  description:
    "Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure.",
  keywords: ["renters insurance quote"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/renters-insurance",
  },
  openGraph: {
    title: "Renters Insurance Quote | Cherries Insurance",
    description:
      "Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure.",
    url: "https://www.cherriesinsurance.com/renters-insurance",
    type: "website",
    images: [
      {
        url: "/renter-insurance/Background_Photo_Renters_Insurance.png",
        width: 1200,
        height: 630,
        alt: "Cozy, sunlit apartment interior with stylish furniture, soft lighting, and personal touches, representing a comfortable rental home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renters Insurance Quote | Cherries Insurance",
    description:
      "Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure.",
    images: ["/renter-insurance/Background_Photo_Renters_Insurance.png"],
  },
};

export default function Page() {
  return (
    <>
      {/* Structured Data */}
      <Script type="application/ld+json">
        {`{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness","InsuranceAgency"],
  "name": "Cherries Insurance",
  "url": "https://www.cherriesinsurance.com/renters-insurance",
  "logo": "/logo.png",
  "image": "/renter-insurance/Background_Photo_Renters_Insurance.png",
  "description": "Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure.",
  "areaServed": "US"
}`}
      </Script>

      <RenterInsurancePage />
    </>
  );
}
