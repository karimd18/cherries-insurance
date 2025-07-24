import AboutUsPage from "@/components/pages/AboutUsPage";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cherries Insurance | Our Story, Mission & Values",
  description:
    "Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty.",
  keywords: ["about", "cherries", "insurance"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://www.cherriesinsurance.com/about",
    title: "About Cherries Insurance | Our Story, Mission & Values",
    description:
      "Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty.",
    images: [
      {
        url: "/about/Back_Ground_Photo_About_Us.png",
        width: 1200,
        height: 630,
        alt: "Driver’s seat view with hands on the wheel and car interior.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cherries Insurance | Our Story, Mission & Values",
    description:
      "Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty.",
    images: ["/about/Back_Ground_Photo_About_Us.png"],
  },
};

export default function Page() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <Script
        id="schema-insurance-agency"
        type="application/ld+json"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          name: "Cherries Insurance",
          url: "https://www.cherriesinsurance.com/about",
          logo: "/logo/logo.png",
          image: "/about/Back_Ground_Photo_About_Us.png",
          description:
            "Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty.",
          areaServed: "US",
        })}
      </Script>
      <AboutUsPage />
    </>
  );
}
