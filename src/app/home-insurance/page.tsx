'use client'

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Home,
  ShieldCheck,
  Flame,
  Droplet,
  Wind,
  AlertTriangle,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const HomeInsurancePage: React.FC = () => {
  const [covRef, covInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* SEO & Meta Tags */}
      <Head>
        <title>Home Insurance Quote | Cherries Insurance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="home insurance quote" />
        <meta name="description" content="Get a reliable home insurance quote tailored to your needs. Compare plans from A-rated carriers—100% online with no calls, no spam, and no pressure." />
        <link rel="canonical" href="https://www.cherriesinsurance.com/home-insurance" />

        {/* Open Graph */}
        <meta property="og:title" content="Home Insurance Quote | Cherries Insurance" />
        <meta property="og:description" content="Get a reliable home insurance quote tailored to your needs. Compare plans from A-rated carriers—100% online with no calls, no spam, and no pressure." />
        <meta property="og:url" content="https://www.cherriesinsurance.com/home-insurance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/93225m8f/Background-Photo-Home-Insurance.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Insurance Quote | Cherries Insurance" />
        <meta name="twitter:description" content="Compare personalized home insurance plans online—no calls, no spam, no pressure." />
        <meta name="twitter:image" content="https://i.ibb.co/93225m8f/Background-Photo-Home-Insurance.png" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": ["LocalBusiness","InsuranceAgency"],
            "name": "Cherries Insurance",
            "url": "https://www.cherriesinsurance.com/home-insurance",
            "logo": "/logo.png",
            "image": "https://i.ibb.co/93225m8f/Background-Photo-Home-Insurance.png",
            "description": "Cherries Insurance helps you find reliable, personalized home insurance from A-rated carriers. 100% online with no calls, no spam, and no pressure.",
            "areaServed": "US"
          }`}
        </script>
      </Head>

      {/* Hero Section */}
      <Hero
        title="We Cover More Than Just Walls."
        subtitle="Protect your home, your memories, and your peace of mind—all in one quote."
        image="https://i.ibb.co/93225m8f/Background-Photo-Home-Insurance.png"
        imageAlt="Modern family home with kids and dog seen through the window at sunset"
        primaryButtonText="Get Your Home Quote"
        primaryButtonLink="/api/quote"
        showTrustBadges={true}
        trustBadges={[
          'BBB Accredited',
          'Partnered with A-Rated Carriers',
          '100% Online, No Calls Required, No Spam, No Pressure'
        ]}
      />

      {/* Coverage Options */}
      <section className="section" ref={covRef}>
        <div className="container-custom">
          <SectionTitle
            title="What Does Home Insurance Cover?"
            subtitle="From structure to peace of mind — here’s what our home insurance policies can include."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoverageCard
              icon={<Home className="w-6 h-6 text-white" />}
              title="Dwelling Protection"
              description="Safeguards your home’s physical structure — including the walls, roof, flooring, and built-in appliances."
            />
            <CoverageCard
              icon={<Flame className="w-6 h-6 text-white" />}
              title="Fire & Smoke Damage"
              description="Coverage for unexpected fire, smoke, or lightning damage to your home and everything inside it."
            />
            <CoverageCard
              icon={<Droplet className="w-6 h-6 text-white" />}
              title="Water Damage"
              description="Protection against accidental water damage from plumbing, heating, or cooling system failures."
            />
            <CoverageCard
              icon={<Wind className="w-6 h-6 text-white" />}
              title="Weather Damage"
              description="Covers storm-related events like wind, hail, and other severe weather impacts to your property."
            />
            <CoverageCard
              icon={<AlertTriangle className="w-6 h-6 text-white" />}
              title="Liability Protection"
              description="If someone gets hurt on your property — or if you accidentally damage someone else’s — we’ve got you covered."
            />
            <CoverageCard
              icon={<DollarSign className="w-6 h-6 text-white" />}
              title="Personal Property"
              description="Covers what makes your house a home: furniture, clothing, electronics, and other personal belongings."
            />
          </div>

          <p className="text-neutral-600 text-center mt-6">
            Not sure what coverage you need? We’ll help you build a policy that fits your life.
          </p>

          <div className="mt-8 text-center">
            <Link href="/api/quote" passHref>
              <Button size="lg">Get Your Home Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-neutral-50" ref={whyRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i.ibb.co/N6ptWH8F/Home-Insurance-Section03.png"
                alt="Family receiving home insurance support"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <SectionTitle
                title="Why Families Choose Cherries Insurance"
                subtitle="Because peace of mind shouldn't come with fine print or phone calls."
              />

              <div className="space-y-6">
                <BenefitItem
                  title="Personalized Coverage"
                  description="Tailor your policy to fit your exact needs—whether you own or rent. No fluff, just the protection that matters to you."
                />
                <BenefitItem
                  title="Transparent Pricing"
                  description="No hidden fees, no surprise hikes. Just honest rates and clear terms—exactly how insurance should be."
                />
                <BenefitItem
                  title="Fast, Human Support"
                  description="Get quick, clear claims assistance and real help from licensed advisors—only when you need it."
                />
                <BenefitItem
                  title="100% Online, Zero Pressure"
                  description="Skip the calls and paperwork. Get covered online with a process that’s fast, simple, and spam-free."
                />
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/api/quote" passHref>
                  <Button>Get Your Home Quote</Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline">Contact an Agent</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" ref={faqRef}>
        <div className="container-custom">
          <SectionTitle
            title="Home Insurance FAQs"
            subtitle="Smart coverage starts with smart answers."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FaqItem
              question="What does home insurance typically cover?"
              answer="Home insurance usually covers your home’s structure (walls, roof, etc.), belongings inside, liability protection, and additional living expenses if damage makes your home unlivable."
            />
            <FaqItem
              question="Is flood damage covered by home insurance?"
              answer="No — standard policies don’t include flood damage. You’ll need a separate flood policy. We can help you figure out if it’s right for your area."
            />
            <FaqItem
              question="How much home insurance coverage do I need?"
              answer="It depends on your home’s rebuild cost, your belongings’ value, and any special assets. We can help you choose the right amount of protection."
            />
            <FaqItem
              question="Are there discounts available for home insurance?"
              answer="Yes — multi-policy, claims-free, security systems, new homes, and more. Ask us which discounts you qualify for."
            />
            <FaqItem
              question="What factors affect my home insurance premium?"
              answer="Things like your home’s age, location, construction type, past claims, credit score, coverage limits, and available discounts all play a role."
            />
            <FaqItem
              question="How do I file a home insurance claim?"
              answer="You can file online, through our app, or by calling our 24/7 claims team. We’ll walk you through the process and handle it fast."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let’s keep home your safest place.</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">Get a personalized quote in minutes. No calls, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/api/quote" passHref>
              <Button variant="primary" size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
                Get Your Home Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Still have questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};


// --- Helper Components ---

type CoverageCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const CoverageCard: React.FC<CoverageCardProps> = ({ icon, title, description }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

type BenefitItemProps = {
  title: string;
  description: string;
};

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="flex gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-bold mb-3">{question}</h3>
      <p className="text-neutral-600">{answer}</p>
    </motion.div>
  );
};

export default HomeInsurancePage;
