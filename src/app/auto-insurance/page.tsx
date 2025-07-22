import AutoInsurancePage from '@/components/pages/AutoInsurancePage'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auto Insurance Quote Online | Cherries Insurance',
  description:
    'Get a personalized auto insurance quote in minutes. Compare flexible coverage options and save—no calls, no pressure, just smart coverage.',
  keywords: ['auto insurance', 'insurance quote', 'car insurance'],
  alternates: {
    canonical: 'https://cherries-insurance.vercel.app/auto-insurance',
  },
  openGraph: {
    type: 'website',
    url: 'https://cherries-insurance.vercel.app/auto-insurance',
    title: 'Auto Insurance Quote | Cherries Insurance',
    description:
      'Get a personalized auto insurance quote in minutes. Compare flexible coverage options and save—no calls, no pressure, just smart coverage.',
    images: [
      {
        url: '/auto-insurance/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Driver’s seat view with hands on the wheel and car interior.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Insurance Quote | Cherries Insurance',
    description:
      'Get a personalized auto insurance quote in minutes. Compare flexible coverage options and save—no calls, no pressure, just smart coverage.',
    images: ['/auto-insurance/twitter-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness","InsuranceAgency"],
          "name": "Cherries Insurance",
          "url": "https://cherries-insurance.vercel.app/auto-insurance",
          "logo": "/logo.png",
          "image": "https://i.ibb.co/8nBk6s6h/Background-Photo-Auto-Insurance.png",
          "description": "Cherries Insurance helps you find reliable, personalized auto insurance from A-rated carriers. 100% online, no phone calls or pressure.",
          "areaServed": "US"
        }`}
      </Script>
      <AutoInsurancePage />
    </>
  )
}
