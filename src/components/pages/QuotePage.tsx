'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Shield,
  X,
  Car,
  Home as HomeIcon,
  Building,
  Users,
  Bike,
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';

export default function QuotePage() {
  const [showPopup, setShowPopup] = useState(true);
  const [seconds, setSeconds] = useState(20);

  // Countdown timer for popup
  useEffect(() => {
    if (!showPopup) return;
    setSeconds(20);
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowPopup(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [showPopup]);

  // Disable background scrolling when popup is active
  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  return (
    <>
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            className="relative bg-white rounded-2xl p-8 text-center w-full max-w-md mx-4 shadow-2xl ring-2 ring-primary-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <X
              className="absolute top-4 right-4 w-6 h-6 text-neutral-500 hover:text-neutral-700 cursor-pointer"
              onClick={() => setShowPopup(false)}
            />
            <Shield className="w-12 h-12 text-primary-700 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-primary-700 mb-2">
              Online quoting is coming soon!
            </h2>
            <p className="text-neutral-700 mb-4">
              We are putting the final touches on our systems - check back shortly or contact us directly for assistance.
            </p>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <div className={showPopup ? 'pointer-events-none select-none' : ''}>
        {/* 1. Hero Section */}
        <Hero
          title="Get a Free Insurance Quote"
          subtitle="Quick, easy, and personalized insurance quotes in just a few minutes."
          image="/quote/Background_Photo_GetaQuote_Page.png"
          imageAlt="Person using a laptop with an insurance quote form"
          primaryButtonText="Get Started"
          primaryButtonLink="#quote-form"
          secondaryButtonText="Why Us?"
          secondaryButtonLink="/about"
          showTrustBadges={false}
        />

        {/* 2. Quote Process Section */}
        <section className="section" id="quote-form">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Steps */}
              <div>
                <SectionTitle
                  title="Insurance, Uncomplicated"
                  subtitle="Get your personalized insurance quote in just a few easy steps."
                />
                <p className="text-neutral-700 mb-6">
                  At Cherries Insurance, we’ve taken the hassle out of getting
                  insured. Just tell us what you need, and we’ll match you with
                  tailored coverage options — no pressure, no pushy calls, and
                  absolutely no spam. Every quote is free, fast, and reviewed by
                  a licensed agent to ensure accuracy. When you’re ready, we’ll
                  help you finalize your policy and get covered with confidence.
                </p>
                <ul className="space-y-4">
                  <QuoteStep
                    number={1}
                    title="Choose Coverage"
                    description="Choose from homeowner, auto, renter, or business insurance coverage."
                  />
                  <QuoteStep
                    number={2}
                    title="Submit Info"
                    description="Tell us a bit about yourself and insurance needs."
                  />
                  <QuoteStep
                    number={3}
                    title="Get Matched"
                    description="Review your custom quote and coverage options. We’ll match you with top carriers."
                  />
                  <QuoteStep
                    number={4}
                    title="Finalize Coverage"
                    description="We’ll help you review and finalize your policy with a licensed agent."
                  />
                </ul>
              </div>

              {/* Right: Coverage CTA Buttons */}
              <div>
                <SectionTitle
                  title="Start Your Quote Online"
                  subtitle="Pick the coverage you need. We’ll guide you from there."
                />
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Car className="w-6 h-6" />,
                      label: 'Auto Insurance',
                      href: '/auto-insurance',
                    },
                    {
                      icon: <HomeIcon className="w-6 h-6" />,
                      label: 'Home Insurance',
                      href: '/home-insurance',
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      label: 'Business Insurance',
                      href: '/bop-insurance',
                    },
                    {
                      icon: <Building className="w-6 h-6" />,
                      label: 'Renters Insurance',
                      href: '/renter-insurance',
                    },
                    {
                      icon: <Bike className="w-6 h-6" />,
                      label: 'Motorcycle Insurance',
                      href: '/motorcycle-insurance',
                    },
                  ].map(({ icon, label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      passHref
                      className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg ring-1 ring-neutral-200 hover:ring-primary-300 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <div className="p-3 rounded-lg bg-primary-50 mb-2">
                        {icon}
                      </div>
                      <span className="text-sm font-medium text-neutral-700">
                        {label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Reviews Section */}
        <section className="section">
          <div className="container-custom text-center">
            <SectionTitle
              title="Love Cherries Insurance? Let others know!"
              subtitle="Leave us a quick review on your favorite platform."
              centered
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  name: 'BBB',
                  logo: '/reviews/BBB_Logo.png',
                  url: '#',
                },
                {
                  name: 'Trustpilot',
                  logo: '/reviews/TrustPilot_Logo.png',
                  url: '#',
                },
                {
                  name: 'Google Reviews',
                  logo: '/reviews/Google_Reviews_Logo.png',
                  url: '#',
                },
              ].map(({ name, logo, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative mx-auto h-12 w-auto">
                    <Image
                      src={logo}
                      alt={`${name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-3 block text-sm font-medium text-neutral-700 group-hover:text-primary-700">
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

type QuoteStepProps = {
  number: number;
  title: string;
  description: string;
};

function QuoteStep({ number, title, description }: QuoteStepProps) {
  return (
    <motion.li
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.li>
  );
}
