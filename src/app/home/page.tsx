import Script from "next/script";
import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Cherries Insurance | Massachusetts-Based Digital Insurance Agency",
  description:
    "Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle.",
  keywords: [
    "massachusetts insurance agency",
    "digital insurance agency",
    "small business insurance",
    "compare insurance quotes",
    "no-spam insurance",
  ],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.cherriesinsurance.com/",
    title: "Cherries Insurance | Massachusetts-Based Digital Insurance Agency",
    description:
      "Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle.",
    images: [
      {
        url: "/home/Background_Photo_Home_Page.png",
        width: 1200,
        height: 630,
        alt: "Downtown Boston street view with historic brownstone buildings and modern skyscrapers under a clear blue sky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherries Insurance | Massachusetts-Based Digital Insurance Agency",
    description:
      "Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle.",
    images: ["/Background_Photo_Home_Page.png"],
  },
};

export default function Page() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Structured Data */}
      <Script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "InsuranceAgency"],
          "name": "Cherries Insurance",
          "url": "https://www.cherriesinsurance.com/",
          "logo": "/logo/logo.png",
          "image": "/home/Background_Photo_Home_Page.png",
          "description": "Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle.",
          "areaServed": "US"
        }`}
      </Script>

      <HomePage />
    </>
  );
}
