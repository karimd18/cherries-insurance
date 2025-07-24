import React from 'react';
import Script from "next/script";
import type { Metadata } from "next";
import BOPInsurancePage from '@/components/pages/BopInsurancePage';

export const metadata: Metadata = {
  title: "Business Owners Policy Insurance | Cherries Insurance",
  description:
    "Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts. ",
  keywords: ["business", "owners", "policy", "insurance", "quote"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/bop-insurance",
  },
  openGraph: {
    type: "website",
    url: "https://www.cherriesinsurance.com/bop-insurance",
    title: "Business Owners Policy Insurance | Cherries Insurance",
    description:
      "Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts. ",
    images: [
      {
        url: "/bop-insurance/Background_Photo_Business_Insurance.png",
        width: 1200,
        height: 630,
        alt: "Modern commercial building exterior with clear signage, symbolizing small business coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Owners Policy Insurance | Cherries Insurance",
    description:
      "Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts.",
    images: ["/bop-insurance/Background_Photo_Business_Insurance.png"],
  },
};

export default function Page() {

  return (
    <>
        {/* Structured Data */}
        <Script
        id="schema-insurance-agency"
        type="application/ld+json"
      >{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "InsuranceAgency"],
          "name": "Cherries Insurance",
          "url": "https://www.cherriesinsurance.com/bop-insurance",
          "logo": "/logo/logo.png",
          "image": "/bop-insurance/Background_Photo_Business_Insurance.png",
          "description": "Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts.",
          "areaServed": "US"
        })}</Script>
        <BOPInsurancePage />
    </>
  );
};