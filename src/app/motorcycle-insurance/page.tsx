'use client'

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Bike,
  ShieldCheck,
  DollarSign,
  UserCheck,
  Wrench,
  AlertTriangle,
  Check,
  ArrowRight,
  Star
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const MotorcycleInsurancePage: React.FC = () => {
  const [covRef, covInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* SEO & Meta Tags */}
      <Head>
        <title>Motorcycle Insurance Quote Online | Cherries Insurance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="motorcycle insurance quote" />
        <meta name="description" content="Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection." />
        <link rel="canonical" href="https://www.cherriesinsurance.com/motorcycle-insurance" />

        {/* Open Graph */}
        <meta property="og:title" content="Motorcycle Insurance Quote | Cherries Insurance" />
        <meta property="og:description" content="Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection." />
        <meta property="og:url" content="https://www.cherriesinsurance.com/motorcycle-insurance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Background_Photo_Motorcycle_Insurance.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Motorcycle Insurance Quote | Cherries Insurance" />
        <meta name="twitter:description" content="Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection." />
        <meta name="twitter:image" content="/Background_Photo_Motorcycle_Insurance.png" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness","InsuranceAgency"],
          "name": "Cherries Insurance",
          "url": "https://www.cherriesinsurance.com/motorcycle-insurance",
          "logo": "/logo.png",
          "image": "/Background_Photo_Motorcycle_Insurance.png",
          "description": "Get a personalized motorcycle insurance quote in minutes. Compare affordable coverage for liability, damage, and gear—no calls, no pressure, just smart protection.",
          "areaServed": "US"
        }`}</script>
      </Head>

      {/* Hero Section */}
      <Hero
        title="Coverage That Keeps Pace With You."
        subtitle="Because every turn, curve, and straightaway deserves protection."
        image="https://i.ibb.co/Kpv9jtzh/Background-Photo-Motorcycle-Insurance.png"
        imageAlt="Motorcyclist riding a black cruiser-style bike at sunset on a scenic rural road, wearing full safety gear under a warm sky."
        primaryButtonText="Get Your Motorcycle Quote"
        primaryButtonLink="/api/quote"
        showTrustBadges={true}
        trustBadges={[
          'BBB Accredited',
          'Partnered with A-Rated Carriers',
          '100% Online, No Calls Required',
          'No Spam, No Pressure'
        ]}
      />

      {/* What Does Motorcycle Insurance Cover? */}
      <section className="section" ref={covRef}>
        <div className="container-custom">
          <SectionTitle
            title="What Does Motorcycle Insurance Cover?"
            subtitle="From fender to frame—and everything in between—here’s what your policy can include"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bike className="w-6 h-6 text-white" />, title: 'Collision Coverage', description: 'Helps pay for damage to your bike if you collide with another vehicle, object, or road hazard—regardless of fault.'
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-white" />, title: 'Liability Coverage', description: 'Covers injuries or property damage you cause to others in an accident. Often required by state law.'
              },
              {
                icon: <DollarSign className="w-6 h-6 text-white" />, title: 'Comprehensive Coverage', description: 'Protects against theft, fire, vandalism, weather events, and other non-collision losses.'
              },
              {
                icon: <UserCheck className="w-6 h-6 text-white" />, title: 'Medical Payments', description: 'Helps cover medical costs for you and your passenger, no matter who was at fault.'
              },
              {
                icon: <Wrench className="w-6 h-6 text-white" />, title: 'Towing & Roadside Assistance', description: 'Covers emergency services like towing, battery jump, fuel delivery, or flat-tire help while you’re on the road.'
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-white" />, title: 'Custom Parts & Equipment', description: 'Adds protection for aftermarket accessories like saddlebags, chrome parts, or custom paint jobs.'
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

          <p className="text-center text-neutral-600 mt-6">
            The road’s unpredictable—your coverage shouldn’t be.
          </p>

          <div className="mt-8 text-center">
            <Link href="/api/quote" passHref>
              <Button size="lg">Get Your Motorcycle Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Riders Choose Cherries Insurance */}
      <section className="section bg-neutral-50" ref={whyRef}>
        <div className="container-custom">
          <SectionTitle
            title="Why Riders Choose Cherries Insurance"
            subtitle="Because the open road deserves honest protection."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i.ibb.co/VpN2kwLx/Motorcycle-Insurance-Section03.png"
                alt="Motorcyclist on a scenic road with insurance coverage illustration"
                className="rounded-xl shadow-lg w-full h-[650px] object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                { title: 'Tailored for Motorcyclists', description: 'Coverage that fits your lifestyle—whether you ride daily or seasonally.' },
                { title: 'No Spam, No Pressure', description: 'Get insured online with zero phone calls or sales tactics.' },
                { title: 'Fast Claims, Real Help', description: 'When things go wrong, we’ve got your back—quickly and clearly.' },
                { title: 'Flexible Policy Options', description: 'Choose from top-rated carriers to match your bike and your budget.' }
              ].map(({ title, description }) => (
                <div key={title} className="flex gap-4 items-start">
                  <Star className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-neutral-600">{description}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <Link href="/api/quote" passHref>
                  <Button>Get Your Motorcycle Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motorcycle Insurance FAQs */}
      <section className="section" ref={faqRef}>
        <div className="container-custom">
          <SectionTitle
            title="Motorcycle Insurance FAQs"
            subtitle="Answers that go the distance—just like your ride."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{
              question: 'Is motorcycle insurance required in Massachusetts?',
              answer: 'Yes. Massachusetts law requires motorcycle owners to carry liability insurance at minimum. You may also need proof of coverage to register your bike.'
            }, {
              question: 'What does motorcycle insurance typically cover?',
              answer: 'Most policies include liability, collision, comprehensive, medical payments, and uninsured/underinsured motorist coverage. Optional add-ons include roadside assistance and custom parts protection.'
            }, {
              question: 'Can I insure a seasonal or stored motorcycle?',
              answer: 'Yes. You can adjust your coverage during off-season months to reflect storage, helping reduce your premium while keeping your bike protected.'
            }, {
              question: 'Does motorcycle insurance cover passengers?',
              answer: 'Passenger coverage isn’t always included by default, but it can be added to your policy to cover injuries for anyone riding with you.'
            }].map(({ question, answer }) => (
              <motion.div
                key={question}
                ref={faqRef}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={covInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-3">{question}</h3>
                <p className="text-neutral-600">{answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Up CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Gear Up with the Right Protection
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            It’s not just a bike—it’s freedom. Let’s protect it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/api/quote" passHref>
              <Button variant="primary" size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
                Get Your Motorcycle Quote
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
          <Check className="w-4 h-4 text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default MotorcycleInsurancePage;
