'use client'

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Laptop,
  UserCheck,
  Building,
  DollarSign,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const RenterInsurancePage: React.FC = () => {
  const [covRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* SEO & Meta Tags */}
      <Head>
        <title>Renters Insurance Quote Online | Cherries Insurance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="renters insurance quote" />
        <meta
          name="description"
          content="Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure."
        />
        <link
          rel="canonical"
          href="https://www.cherriesinsurance.com/renters-insurance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Renters Insurance Quote | Cherries Insurance"
        />
        <meta
          property="og:description"
          content="Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure."
        />
        <meta
          property="og:url"
          content="https://www.cherriesinsurance.com/renters-insurance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/VYGq7hK9/Background-Photo-Renters-Insurance.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Renters Insurance Quote | Cherries Insurance"
        />
        <meta
          name="twitter:description"
          content="Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/VYGq7hK9/Background-Photo-Renters-Insurance.png"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": ["LocalBusiness","InsuranceAgency"],
            "name": "Cherries Insurance",
            "url": "https://www.cherriesinsurance.com/renters-insurance",
            "logo": "/logo.png",
            "image": "https://i.ibb.co/VYGq7hK9/Background-Photo-Renters-Insurance.png",
            "description": "Compare renters insurance quotes in Massachusetts with Cherries Insurance. Get affordable coverage for your belongings, liability, and living expenses—no calls, no pressure.",
            "areaServed": "US"
          }`}
        </script>
      </Head>

      {/* Hero Section */}
      <Hero
        title="Protect What Makes It Home."
        subtitle="Affordable renters insurance that protects what matters—wherever you live."
        image="https://i.ibb.co/VYGq7hK9/Background-Photo-Renters-Insurance.png"
        imageAlt="Cozy, sunlit apartment interior with stylish furniture"
        primaryButtonText="Get Your Renters Quote"
        primaryButtonLink="/api/quote"
        showTrustBadges
        trustBadges={[
          'BBB Accredited',
          'Partnered with A-Rated Carriers',
          '100% Online, No Calls Required',
          'No Spam, No Pressure'
        ]}
      />

      {/* What Does Renters Insurance Cover? */}
      <section className="section" ref={covRef}>
        <div className="container-custom">
          <SectionTitle
            title="What Does Renters Insurance Cover?"
            subtitle="Coverage for the unexpected—at home and beyond."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="w-6 h-6 text-white" />,
                title: 'Personal Property',
                description:
                  'Protects your belongings like furniture, electronics, clothing, and more from covered events like fire, theft, or vandalism.'
              },
              {
                icon: <UserCheck className="w-6 h-6 text-white" />,
                title: 'Liability Protection',
                description:
                  'Covers you if someone is injured in your rental or if you accidentally cause damage to someone else’s property.'
              },
              {
                icon: <Building className="w-6 h-6 text-white" />,
                title: 'Additional Living Expenses',
                description:
                  'Helps pay for hotel stays and temporary housing if your rental becomes uninhabitable due to a covered loss.'
              },
              {
                icon: <DollarSign className="w-6 h-6 text-white" />,
                title: 'Medical Payments',
                description:
                  'Pays for medical expenses if a guest is injured in your rental — regardless of who’s at fault.'
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-white" />,
                title: 'Loss of Use',
                description:
                  'Covers extra costs if you need to live elsewhere while your rental is being repaired after a covered claim.'
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-white" />,
                title: 'Scheduled Personal Property',
                description:
                  'Optional coverage for high-value items like jewelry, art, or collectibles that exceed standard limits.'
              }
            ].map(({ icon, title, description }) => (
              <motion.div
                key={title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-neutral-600">{description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-6 text-neutral-600">
            Not sure if you’re fully covered? Let’s find out in just a few clicks.
          </p>

          <div className="mt-8 text-center">
            <Link href="/api/quote" passHref>
              <Button size="lg">Get Your Renters Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Renters Choose Cherries Insurance */}
      <section className="section bg-neutral-50" ref={whyRef}>
        <div className="container-custom">
          <SectionTitle
            title="Why Renters Choose Cherries Insurance"
            subtitle="Because your peace of mind shouldn’t depend on your zip code."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[600px]">
              <Image
                src="https://i.ibb.co/0737998/Renters-Insurance-Section03.png"
                alt="Cozy renter home illustration"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Your Landlord's Insurance Doesn’t Cover You",
                  description:
                    'Most landlords only insure the building — not your belongings or liability.'
                },
                {
                  title: "It’s More Affordable Than You Think",
                  description:
                    'Renters insurance is one of the most affordable ways to protect your belongings and peace of mind.'
                },
                {
                  title: 'Protection Against Liability Claims',
                  description:
                    'If a guest is hurt or you cause damage to someone else’s property, we’ve got you covered.'
                },
                {
                  title: 'Coverage Away from Home',
                  description:
                    'Your stuff is protected even outside your rental — like from theft during travel or car break-ins.'
                }
              ].map(({ title, description }) => (
                <motion.div
                  key={title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-neutral-600">{description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-8 flex gap-4">
                <Link href="/api/quote" passHref>
                  <Button>Get Your Renters Quote</Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline">Contact an Agent</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renters Insurance FAQs */}
      <section className="section" ref={faqRef}>
        <div className="container-custom">
          <SectionTitle
            title="Renters Insurance FAQs"
            subtitle="Because understanding your coverage should be simple."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'What does renters insurance actually cover?',
                answer:
                  'It typically covers your belongings, personal liability, and temporary living expenses if your rental becomes uninhabitable.'
              },
              {
                question: 'Is renters insurance required by law?',
                answer:
                  'No, it’s not legally required, but many landlords require it as part of the lease agreement.'
              },
              {
                question:
                  'Will it cover theft or damage outside my apartment?',
                answer:
                  'Yes. Most renters policies protect your belongings anywhere — whether they’re in your car, at the gym, or on vacation.'
              },
              {
                question: 'How much coverage do I really need?',
                answer:
                  'It depends on the value of your belongings. We’ll help you estimate it and choose a plan that fits your needs and budget.'
              }
            ].map(({ question, answer }) => (
              <motion.div
                key={question}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-3">{question}</h3>
                <p className="text-neutral-600">{answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let’s protect what makes it home.
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Start with a fast, personalized quote. No calls, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/api/quote" passHref>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
              >
                Get Your Renters Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                Still have questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RenterInsurancePage;
