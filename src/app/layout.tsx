"use client";

import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import "./global.css";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Cherries Insurance | Massachusetts-Based Digital Insurance Agency
        </title>
        <meta name="keywords" content="massachusetts insurance agency" />
        <meta
          name="description"
          content="Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle."
        />
        <link rel="canonical" href="https://cherries-insurance.vercel.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Cherries Insurance | Massachusetts-Based Digital Insurance Agency"
        />
        <meta
          property="og:description"
          content="Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle."
        />
        <meta
          property="og:url"
          content="https://cherries-insurance.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Background_Photo_Home_Page.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cherries Insurance | Massachusetts-Based Digital Insurance Agency"
        />
        <meta
          name="twitter:description"
          content="Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle."
        />
        <meta name="twitter:image" content="/Background_Photo_Home_Page.png" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness","InsuranceAgency"],
            "name": "Cherries Insurance",
            "url": "https://cherries-insurance.vercel.app/",
            "logo": "/logo.png",
            "image": "/Background_Photo_Home_Page.png",
            "description": "Cherries Insurance is a modern, independent insurance agency helping individuals and small businesses compare quotes and get covered — without spam, pressure, or hassle.",
            "areaServed": "US"
          }
        `}
        </script>

        {/* TikTok Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}},ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=r+"?sdkid="+e+"&lib="+t;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(a,s)};ttq.load('D10VP93C77U2P4BED810');ttq.page();
        `,
          }}
        />

        {/* Meta / Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '726456896432889');
          fbq('track', 'PageView');
        `,
          }}
        />
        <noscript>
          <div style={{ display: "none" }}>
            <Image
              src="https://www.facebook.com/tr?id=726456896432889&ev=PageView&noscript=1"
              alt=""
              width={1}
              height={1}
            />
          </div>
        </noscript>
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
