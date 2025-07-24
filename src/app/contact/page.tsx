import React from 'react';
import Script from 'next/script';
import ContactUsPage from '@/components/pages/ContactUsPage';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Cherries Insurance | Email, Phone & Support Hours",
  description:
    "Get in touch with Cherries Insurance. Contact our support, sales, or general inquiry teams by email or phone. Quick, spam-free help during business hours.",
  keywords: ["contact", "cherries", "insurance", "agency"],
  alternates: {
    canonical: "https://www.cherriesinsurance.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://www.cherriesinsurance.com/contact",
    title: "Contact Cherries Insurance | Email, Phone & Support Hours",
    description:
      "Get in touch with Cherries Insurance. Contact our support, sales, or general inquiry teams by email or phone. Quick, spam-free help during business hours.",
    images: [
      {
        url: "/contact/contact-bg.png",
        width: 1200,
        height: 630,
        alt: "Customer support on a laptop responding to inquiries.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cherries Insurance | Email, Phone & Support Hours",
    description:
      "Get in touch with Cherries Insurance. Contact our support, sales, or general inquiry teams by email or phone. Quick, spam-free help during business hours.",
    images: ["/contact/contact-bg.png"],
  },
};

export default function Page() {
  return (
    <>
        {/* Schema.org JSON-LD */}
        <Script
        id="schema-insurance-agency"
        type="application/ld+json"
      >{JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "InsuranceAgency"],
            "name": "Cherries Insurance",
            "url": "https://www.cherriesinsurance.com/contact",
            "logo": "/logo/logo.png",
            "image": "/contact/contact-bg.png",
            "description": "Get in touch with Cherries Insurance. Contact our support, sales, or general inquiry teams by email or phone. Quick, spam-free help during business hours.",
            "areaServed": "US"
          })}
        </Script>
      <ContactUsPage />
    </>
  );
};
