'use client'

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  Heart,
  Users,
  Award,
  Target,
  Check,
  ArrowRight
} from 'lucide-react';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutPage: React.FC = () => {
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      {/* SEO & Meta Tags */}
      <Head>
        <title>About Cherries Insurance | Our Story, Mission & Values</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="about cherries insurance" />
        <meta name="description" content="Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty." />
        <link rel="canonical" href="https://www.cherriesinsurance.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Cherries Insurance | Our Story, Mission & Values" />
        <meta property="og:description" content="Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty." />
        <meta property="og:url" content="https://www.cherriesinsurance.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Back_Ground_Photo_About_Us.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Cherries Insurance | Our Story, Mission & Values" />
        <meta name="twitter:description" content="Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty." />
        <meta name="twitter:image" content="/Back_Ground_Photo_About_Us.jpg" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "Cherries Insurance",
            "url": "https://www.cherriesinsurance.com/about",
            "logo": "/logo.png",
            "image": "/Back_Ground_Photo_About_Us.jpg",
            "description": "Learn about Cherries Insurance — a modern digital-first agency dedicated to simplifying insurance shopping with clarity, privacy, and honesty.",
            "areaServed": "US"
          }`}
        </script>
      </Head>

      {/* Hero Section */}
      <Hero
        title="Who We Are & Why We Exist"
        subtitle="We don’t sell insurance. We simplify it."
        image="https://i.ibb.co/4ZsPPNS5/Back-Ground-Photo-About-Us.png"
        imageAlt="Woman browsing online insurance site on tablet"
        primaryButtonText="Get a Quote"
        primaryButtonLink="/quote"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        trustBadges={[
          'BBB Accredited',
          'Partnered with A-Rated Carriers',
          '100% Online, No Calls Required, No Spam, No Pressure'
        ]}
      />

      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" />
              <div className="space-y-6 text-neutral-700">
                <p>
                  At Cherries Insurance, we believe insurance should be simple, honest, and stress-free. We built a digital-first, independent agency that puts your time, privacy, and peace of mind first.
                </p>
                <p>
                  We don’t sell insurance—we simplify it.
                </p>
                <p>
                  From auto and home to renters and business coverage, we work with top-rated carriers to help you compare real options — without spam calls, sales pressure, or confusing jargon.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://i.ibb.co/7tjnzdwS/Body-Photo-About-Us.png"
                alt="Team members in a meeting"
                className="rounded-xl shadow-lg w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-neutral-50">
        <div className="container-custom text-center">
          <SectionTitle
            title="Our Mission"
            subtitle="Simplify insurance shopping with transparency, accuracy, and respect for privacy."
            centered
          />
        </div>
      </section>

      {/* Our Vision */}
      <section className="section">
        <div className="container-custom text-center">
          <SectionTitle
            title="Our Vision"
            subtitle="Be the go-to online platform for stress-free insurance buying."
            centered
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-neutral-50" ref={valuesRef}>
        <div className="container-custom">
          <SectionTitle title="Our Values" subtitle="The principles that guide everything we do" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-6 h-6" />, title: 'Trust', description: 'We prioritize honesty and integrity in all interactions.' },
              { icon: <Heart className="w-6 h-6" />, title: 'Simplicity', description: 'We make insurance straightforward and easy to understand.' },
              { icon: <Target className="w-6 h-6" />, title: 'Privacy', description: 'Your personal information remains confidential and secure.' },
              { icon: <Award className="w-6 h-6" />, title: 'Honesty', description: 'We provide accurate and unbiased information.' }
            ].map(({ icon, title, description }, idx) => (
              <ValueCard
                key={title}
                icon={icon}
                title={title}
                description={description}
                delay={idx}
                inView={valuesInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
};

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay, inView }) => (
  <motion.div
    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: delay * 0.2 }}
  >
    <div className="mb-4 gradient-bg w-14 h-14 rounded-full flex items-center justify-center">
      <div className="text-white">{icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </motion.div>
);

export default AboutPage;
