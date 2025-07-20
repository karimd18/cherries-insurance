'use client'

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ShieldCheck, Building, Users, DollarSign, CheckCircle, ArrowRight, Truck } from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Card, { CardContent, CardTitle } from '@/components/ui/Card';

const BOPInsurancePage: React.FC = () => {
  const [covRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* SEO & Meta Tags */}
      <Head>
        <title>Business Owners Policy Insurance | Cherries Insurance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="business owners policy insurance quote" />
        <meta
          name="description"
          content="Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts."
        />
        <link rel="canonical" href="https://www.cherriesinsurance.com/bop-insurance" />

        {/* Open Graph */}
        <meta property="og:title" content="Business Owners Policy Insurance | Cherries Insurance" />
        <meta
          property="og:description"
          content="Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts."
        />
        <meta property="og:url" content="https://www.cherriesinsurance.com/bop-insurance" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/B2vfRqH5/Background-Photo-Business-Insurance.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Business Owners Policy Insurance | Cherries Insurance"
        />
        <meta
          name="twitter:description"
          content="Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/B2vfRqH5/Background-Photo-Business-Insurance.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness","InsuranceAgency"],
          "name": "Cherries Insurance",
          "url": "https://www.cherriesinsurance.com/bop-insurance",
          "logo": "/logo.png",
          "image": "https://i.ibb.co/B2vfRqH5/Background-Photo-Business-Insurance.png",
          "description": "Simplify small business insurance with Cherries Insurance. Compare BOP coverage options including property, liability, and business interruption—all tailored to your operations in Massachusetts.",
          "areaServed": "US"
        }`}</script>
      </Head>

      {/* Hero Section */}
      <Hero
        title="Cover What Keeps You in Business."
        subtitle="Business insurance built to protect your work, your team, and your reputation"
        image="https://i.ibb.co/B2vfRqH5/Background-Photo-Business-Insurance.png"
        imageAlt="Modern commercial building exterior with clear signage, symbolizing small business coverage"
        primaryButtonText="Get Your Business Quote"
        primaryButtonLink="/quote"
        showTrustBadges
        trustBadges={[
          'BBB Accredited',
          'Partnered with A-Rated Carriers',
          '100% Online, No Calls Required, No Spam, No Pressure'
        ]}
      />

      {/* What is BOP Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="What is a Business Owners Policy? (BOP)"
                subtitle="A simple solution to protect your business from all sides."
              />

              <div className="space-y-6 text-neutral-700">
                <p>
                  A Business Owners Policy (BOP) combines the essential coverages many small businesses need—property, liability, and business interruption—into one affordable package.
                </p>
                <p>
                  It’s designed specifically for small to mid-sized businesses that want protection from common risks without the complexity of buying multiple policies.
                </p>
                <p>
                  Instead of juggling separate coverages, a BOP simplifies insurance with bundled protection—often at a lower total cost.
                </p>
                <p>
                  At Cherries Insurance, we help tailor your BOP with optional add-ons so your coverage matches your actual business needs.
                </p>

                <div className="mt-8">
                  <Link href="/quote" passHref>
                    <Button>Get Your Business Quote</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src="https://i.ibb.co/sdTmzjZg/Business-Insurance-Section02.png"
                alt="Business insurance illustration"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Does BOP Insurance Cover? */}
      <section className="section bg-neutral-50" ref={covRef}>
        <div className="container-custom">
          <SectionTitle
            title="What Does BOP Insurance Cover?"
            subtitle="Built-in protections designed to keep your business running."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Property Insurance</CardTitle>
                </div>
                <p className="text-neutral-600 mb-4">
                  Protects your physical business assets like buildings, furniture, equipment, and inventory against damage or loss due to fire, theft, vandalism, and certain natural events.
                </p>
                <ul className="space-y-2">
                  {[
                    'Owned or leased building coverage',
                    'Business personal property',
                    'Equipment protection',
                    'Inventory and stock',
                    'Computers and electronics'
                  ].map(item => <CoverageItem key={item} text={item} />)}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Liability Protection</CardTitle>
                </div>
                <p className="text-neutral-600 mb-4">
                  Covers legal and settlement costs if your business is found responsible for bodily injury, property damage, or advertising harm.
                </p>
                <ul className="space-y-2">
                  {[
                    'General liability',
                    'Legal defense fees',
                    'Medical payments',
                    'Product liability',
                    'Advertising injury'
                  ].map(item => <CoverageItem key={item} text={item} />)}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Business Interruption</CardTitle>
                </div>
                <p className="text-neutral-600 mb-4">
                  Replaces income and helps cover necessary expenses if your operations are paused due to a covered event.
                </p>
                <ul className="space-y-2">
                  {[
                    'Lost revenue reimbursement',
                    'Operating expenses',
                    'Payroll coverage',
                    'Temporary relocation costs',
                    'Rent, lease, and mortgage support'
                  ].map(item => <CoverageItem key={item} text={item} />)}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/quote" passHref>
              <Button size="lg">Get Your Business Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Cover */}
      <section className="section" ref={whyRef}>
        <div className="container-custom">
          <SectionTitle
            title="Industries We Cover"
            subtitle="Smart protection for a wide range of industries."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Building className="w-6 h-6" />, title: 'Retail Stores' },
              { icon: <Users className="w-6 h-6" />, title: 'Professional Services' },
              { icon: <Briefcase className="w-6 h-6" />, title: 'Contractors' },
              { icon: <Truck className="w-6 h-6" />, title: 'Food Services' },
              { icon: <Building className="w-6 h-6" />, title: 'Healthcare Practices' },
              { icon: <Building className="w-6 h-6" />, title: 'Real Estate' },
              { icon: <Briefcase className="w-6 h-6" />, title: 'Technology Firms' },
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'Many More' }
            ].map(({ icon, title }) => (
              <IndustryCard key={title} icon={icon} title={title} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Not sure if your business qualifies for a Business Owners Policy? Let’s talk. Our team will help you find the right fit for your operations.
            </p>
            <Link href="/contact" passHref>
              <Button>Speak with a Specialist</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect your business with comprehensive coverage
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Get a customized BOP insurance quote tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" passHref>
              <Button variant="primary" size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
                Get Your Business Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Speak with a Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Helper: Coverage list item
type CoverageItemProps = { text: string };
const CoverageItem: React.FC<CoverageItemProps> = ({ text }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
    <span className="text-neutral-700">{text}</span>
  </li>
);

// Helper: Industry card
type IndustryCardProps = { icon: React.ReactNode; title: string };
const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
    </motion.div>
  );
};

export default BOPInsurancePage;