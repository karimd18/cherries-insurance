import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import HomeInsurancePage from "@/components/pages/HomeInsurancePage";

export const metadata: Metadata = {
  title: "Home Insurance Quote | Cherries Insurance",
  description:
    "Get a reliable home insurance quote tailored to your needs. Compare plans from A-rated carriers—100% online with no calls, no spam, and no pressure.",
  keywords: ["home insurance quote"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/home-insurance",
  },
  openGraph: {
    title: "Home Insurance Quote | Cherries Insurance",
    description:
      "Get a reliable home insurance quote tailored to your needs. Compare plans from A-rated carriers—100% online with no calls, no spam, and no pressure.",
    url: "https://www.cherriesinsurance.com/home-insurance",
    type: "website",
    images: [
      {
        url: "/home-insurance/Background_Photo_Home_Insurance.png",
        width: 1200,
        height: 630,
        alt: "Modern family home with kids and dog seen through the window at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Insurance Quote | Cherries Insurance",
    description:
      "Compare personalized home insurance plans online—no calls, no spam, no pressure.",
    images: [
      "/home-insurance/Background_Photo_Home_Insurance.png",
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
  "url": "https://www.cherriesinsurance.com/home-insurance",
  "logo": "/logo.png",
  "image": "/home-insurance/Background-Photo-Home-Insurance.png",
  "description": "Cherries Insurance helps you find reliable, personalized home insurance from A-rated carriers. 100% online with no calls, no spam, and no pressure.",
  "areaServed": "US"
}`}
      </Script>

          <HomeInsurancePage />
    </>
  );
}
