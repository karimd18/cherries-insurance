'use client'

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Car,
  ShieldCheck,
  Siren,
  UserCheck,
  Wrench,
  DollarSign,
  ThumbsUp,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const AutoInsurancePage: React.FC = () => {
  const [covRef, covInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* SEO & Meta Tags */}
      <Head>
        <title>Auto Insurance Quote Online | Cherries Insurance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="auto insurance quote" />
        <meta name="description" content="Get a personalized auto insurance quote in minutes. Compare flexible coverage options and save—no calls, no pressure, just smart coverage." />
        <link rel="canonical" href="https://www.cherriesinsurance.com/auto-insurance" />

        {/* Open Graph */}
        <meta property="og:title" content="Auto Insurance Quote | Cherries Insurance" />
        <meta property="og:description" content="Get a personalized auto insurance quote in minutes. Compare flexible coverage options and save—no calls, no pressure, just smart coverage." />
        <meta property="og:url" content="https://www.cherriesinsurance.com/auto-insurance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Background_Photo_Auto_Insurance.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Insurance Quote | Cherries Insurance" />
        <meta name="twitter:description" content="Get a personalized auto insurance quote in minutes. Compare flexible coverage options and save—no calls, no pressure, just smart coverage." />
        <meta name="twitter:image" content="/Background_Photo_Auto_Insurance.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "InsuranceAgency"],
          "name": "Cherries Insurance",
          "url": "https://www.cherriesinsurance.com/auto-insurance",
          "logo": "/logo.png",
          "image": "/Background_Photo_Auto_Insurance.jpg",
          "description": "Cherries Insurance helps you find reliable, personalized auto insurance from A-rated carriers. 100% online, no phone calls or pressure.",
          "areaServed": "US"
        }`}</script>
      </Head>

      {/* Hero Section */}
      <Hero
        title="Protection That Moves With You"
        subtitle="Flexible auto coverage tailored to your needs, with honest pricing and no pressure."
        image={["https://i.ibb.co/8nBk6s6h/Background-Photo-Auto-Insurance.png", "https://i.ibb.co/tMXtKMr3/Background-Photo-Auto-Insurance-01.png", "https://i.ibb.co/nsgDhtmw/Background-Photo-Auto-Insurance-02.png"]}
        imageAlt="Driver’s seat view with hands on the wheel and car interior."
        primaryButtonText="Get Your Auto Quote"
        primaryButtonLink="/api/quote"
        showTrustBadges={true}
        trustBadges={[
          'BBB Accredited',
          'Partnered with A-Rated Carriers',
          '100% Online, No Calls Required, No Spam, No Pressure'
        ]}
      />

      {/* What Does Auto Insurance Cover? */}
      <section className="section" ref={covRef}>
        <div className="container-custom">
          <SectionTitle
            title="What Does Auto Insurance Cover?"
            subtitle="Explore the protections that matter most."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoverageCard
              icon={<Car className="w-6 h-6" />}
              title="Collision Coverage"
              description="Covers damage to your car from a crash — no matter who's at fault."
            />
            <CoverageCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Comprehensive Coverage"
              description="Protects against theft, vandalism, weather, animals, and other non-collision incidents."
            />
            <CoverageCard
              icon={<UserCheck className="w-6 h-6" />}
              title="Liability Protection"
              description="Covers injuries and damage you cause to others in an accident."
            />
            <CoverageCard
              icon={<Siren className="w-6 h-6" />}
              title="Uninsured Motorist"
              description="Covers you if the other driver doesn’t have insurance or enough of it."
            />
            <CoverageCard
              icon={<Wrench className="w-6 h-6" />}
              title="Roadside Assistance"
              description="24/7 help with breakdowns, flat tires, dead batteries, and more."
            />
            <CoverageCard
              icon={<DollarSign className="w-6 h-6" />}
              title="Rental Reimbursement"
              description="Pays for a rental car while your vehicle is being repaired after a covered loss."
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-6">
              Curious what your rate might be? Let’s get you a quick quote.
            </p>
            <Link href="/api/quote" passHref>
              <Button size="lg">Get Your Auto Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Drivers Choose Cherries Insurance */}
      <section className="section bg-neutral-50" ref={whyRef}>
        <div className="container-custom">
          <SectionTitle
            title="Why Drivers Choose Cherries Insurance"
            subtitle="Confidence, clarity, and coverage—without the hassle."
          />

          <div className="space-y-6">
            <BenefitItem
              title="Transparent Quotes"
              description="Know what you're paying for—no hidden fees, no pushy sales."
            />
            <BenefitItem
              title="Spam-Free Experience"
              description="Get insured without endless calls or emails. Your privacy, respected."
            />
            <BenefitItem
              title="Exclusive Discounts"
              description="From safe drivers to bundled policies, we help you save."
            />
            <BenefitItem
              title="Real Human Support"
              description="We're not a chatbot. Our agents are ready when you need us."
            />
          </div>

          <div className="mt-8 flex gap-4">
            <Link href="/api/quote" passHref>
              <Button>Get Your Auto Quote</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline">Contact an Agent</Button>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <img
              src="https://i.ibb.co/GfDpnT4q/Auto-Insurance-Section03.png"
              alt="Updated auto insurance illustration"
              className="rounded-xl shadow-lg w-full h-[900px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Auto Insurance FAQs */}
      <section className="section bg-neutral-50" ref={faqRef}>
        <div className="container-custom">
          <SectionTitle
            title="Auto Insurance FAQs"
            subtitle="Got questions? We’ve got answers."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FaqItem
              question="How much auto insurance do I need?"
              answer="The amount of coverage you need depends on your car’s value, your assets, and your state’s requirements. We can help you figure out the best fit for your situation."
            />
            <FaqItem
              question="What factors affect my auto insurance premium?"
              answer="Your driving record, age, location, vehicle type, credit score, coverage limits, and deductible all play a role."
            />
            <FaqItem
              question="Does my auto insurance cover other drivers?"
              answer="Usually, yes. Coverage typically follows the car, not the driver—but some restrictions may apply. Always check the details in your policy."
            />
            <FaqItem
              question="Will my rate increase after an accident?"
              answer="Not always. If it’s your first accident or you have accident forgiveness, your rate might stay the same. It depends on the situation and your history."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let’s wrap this up—and get you covered.
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Start with a quick quote. No calls, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/api/quote" passHref>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
              >
                Get Your Auto Quote
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
        <div className="text-white">{icon}</div>
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
          <ThumbsUp className="w-4 h-4 text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

type DiscountCardProps = {
  title: string;
  description: string;
  percentage: string;
};

const DiscountCard: React.FC<DiscountCardProps> = ({ title, description, percentage }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full opacity-10"></div>
      <div className="text-3xl font-bold text-primary-600 mb-3">{percentage}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
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

export default AutoInsurancePage;
