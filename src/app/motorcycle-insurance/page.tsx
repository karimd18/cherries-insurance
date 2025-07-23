import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import MotorcycleInsurancePage from "@/components/pages/MotorcycleInsurancePage";

export const metadata: Metadata = {
  title: "Motorcycle Insurance Quote | Cherries Insurance",
  description:
    "Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection.",
  keywords: ["motorcycle insurance quote"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/motorcycle-insurance",
  },
  openGraph: {
    title: "Motorcycle Insurance Quote | Cherries Insurance",
    description:
      "Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection.",
    url: "https://www.cherriesinsurance.com/motorcycle-insurance",
    type: "website",
    images: [
      {
        url: "/motorcycle-insurance/Background_Photo_Motorcycle_Insurance.png",
        width: 1200,
        height: 630,
        alt: "Motorcyclist riding on an open road at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motorcycle Insurance Quote | Cherries Insurance",
    description:
      "Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection.",
    images: [
      "/motorcycle-insurance/Background_Photo_Motorcycle_Insurance.png",
    ],
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
  "url": "https://www.cherriesinsurance.com/motorcycle-insurance",
  "logo": "/logo.png",
  "image": "/motorcycle-insurance/Background-Photo-Motorcycle-Insurance.png",
  "description": "Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection.",
  "areaServed": "US"
}`}
      </Script>

          <MotorcycleInsurancePage />
    </>
  );
}
