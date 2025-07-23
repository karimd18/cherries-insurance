import YachtInsurancePage from "@/components/pages/YachtInsurancePage";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Yacht Insurance Quote | Cherries Insurance",
  description:
    "Premium protection for your yacht with comprehensive coverage for hull, engine, and everything aboard—compare plans for liability, storm damage, emergency towing, personal effects, and marina coverage online with no calls, no pressure.",
  keywords: [
    "yacht insurance",
    "yacht insurance quote",
    "marine insurance",
    "boat insurance",
    "yacht coverage",
  ],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/yacht-insurance",
  },
  openGraph: {
    title: "Yacht Insurance Quote | Cherries Insurance",
    description:
      "Premium protection for your yacht with comprehensive coverage for hull, engine, and everything aboard—compare plans for liability, storm damage, emergency towing, personal effects, and marina coverage online with no calls, no pressure.",
    url: "https://www.cherriesinsurance.com/yacht-insurance",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        width: 1260,
        height: 750,
        alt: "Luxury yacht on water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Insurance Quote | Cherries Insurance",
    description:
      "Premium protection for your yacht with comprehensive coverage for hull, engine, and everything aboard—compare plans for liability, storm damage, emergency towing, personal effects, and marina coverage online with no calls, no pressure.",
    images: [
      "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script type="application/ld+json">
        {`{
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "InsuranceAgency"],
      "name": "Cherries Insurance",
      "url": "https://www.cherriesinsurance.com/yacht-insurance",
      "logo": "/logo.png",
      "image": "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "description": "Premium protection for your yacht with comprehensive coverage for hull, engine, and everything aboard—compare plans for liability, storm damage, emergency towing, personal effects, and marina coverage online with no calls, no pressure.",
      "areaServed": "US"
    }`}
      </Script>

      <YachtInsurancePage />
    </>
  );
}
