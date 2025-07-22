'use client'

import React from 'react';
import Layout from '@/components/layout/Layout';
import './global.css';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <Head>
        {/* Global Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Page-Specific SEO */}
        <title>Cherries Insurance | Massachusetts-Based Digital Insurance Agency</title>
        <meta name="description" content="Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle." />
        <link rel="canonical" href="https://www.cherriesinsurance.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Cherries Insurance | Massachusetts-Based Digital Insurance Agency" />
        <meta property="og:description" content="Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle." />
        <meta property="og:url" content="https://www.cherriesinsurance.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.cherriesinsurance.com/images/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cherries Insurance | Massachusetts-Based Digital Insurance Agency" />
        <meta name="twitter:description" content="Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle." />
        <meta name="twitter:image" content="https://www.cherriesinsurance.com/images/twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["InsuranceAgency", "LocalBusiness"],
            "name": "Cherries Insurance",
            "url": "https://www.cherriesinsurance.com/",
            "logo": "https://www.cherriesinsurance.com/logo.png",
            "image": "https://www.cherriesinsurance.com/images/hero.jpg",
            "description": "Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Boston",
              "addressRegion": "MA",
              "postalCode": "02108",
              "addressCountry": "US"
            },
            "telephone": "+1-617-555-0123",
            "areaServed": "US",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ]
          })}
        </script>
        
        {/* Tracking Pixels */}
        <script 
          dangerouslySetInnerHTML={{ 
            __html: `(TikTok/Google/Meta tracking code here)` 
          }} 
        />
      </Head>

      {/* Google Analytics via next/script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','G-XXXXXXXXXX');
          gtag('config','AW-XXXXXXXXXX');
        `}
      </Script>

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
