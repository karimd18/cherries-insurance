"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Shield,
  X,
  Car,
  Home as HomeIcon,
  Building,
  Users,
  Bike,
} from "lucide-react";
import Link from "next/link";

import Hero from "@/components/ui/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function QuotePage() {
  const [showPopup, setShowPopup] = useState(true);
  const [seconds, setSeconds] = useState(20);

  // 1. Countdown timer for popup
  useEffect(() => {
    if (!showPopup) return;
    setSeconds(20);
    const interval = setInterval(() => {
      setSeconds((prev) => {
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

  // 2. Disable background scrolling when popup is active
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  return (
    <>
      {/* SEO & Meta Tags */}
      <Head>
        <title>Get a Free Quote Online | Cherries Insurance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="insurance quote online" />
        <meta
          name="description"
          content="Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free."
        />
        <link rel="canonical" href="https://www.cherriesinsurance.com/quote" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Get a Free Quote Online | Cherries Insurance"
        />
        <meta
          property="og:description"
          content="Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free."
        />
        <meta
          property="og:url"
          content="https://www.cherriesinsurance.com/quote"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/WvvwDSyK/Background-Photo-Geta-Quote-Page.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Get a Free Quote Online | Cherries Insurance"
        />
        <meta
          name="twitter:description"
          content="Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/WvvwDSyK/Background-Photo-Geta-Quote-Page.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "InsuranceAgency"],
            "name": "Cherries Insurance",
            "url": "https://www.cherriesinsurance.com/quote",
            "logo": "/logo.png",
            "image": "https://i.ibb.co/WvvwDSyK/Background-Photo-Geta-Quote-Page.png",
            "areaServed": "US",
            "description": "Get a personalized insurance quote online in just a few minutes. Compare options for home, auto, renters, and business coverage — fast, secure, and spam-free."
          }`}
        </script>
      </Head>

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
              Section Under Construction
            </h2>
            <p className="text-neutral-700 mb-4">
              This part of the page isn’t ready yet.
            </p>
            <p className="text-neutral-600 mb-6">
              Closing in {seconds} second{seconds !== 1 ? "s" : ""}…
            </p>
          </motion.div>
        </div>
      )}

      {/* Main content (disabled while popup is active) */}
      <div className={showPopup ? "pointer-events-none select-none" : ""}>
        {/* 1. Hero Section */}
        <Hero
          title="Get a Free Insurance Quote"
          subtitle="Quick, easy, and personalized insurance quotes in just a few minutes."
          image="https://i.ibb.co/WvvwDSyK/Background-Photo-Geta-Quote-Page.png"
          imageAlt="Person using a laptop with an insurance quote form on screen, near a window with a houseplant."
          primaryButtonText="Get Started"
          primaryButtonLink="#quote-form" // scrolls down :contentReference[oaicite:5]{index=5}
          secondaryButtonText="Why Us?"
          secondaryButtonLink="/about" // about page :contentReference[oaicite:6]{index=6}
          showTrustBadges={false}
        />

        {/* 2. Quote Process Section */}
        <section className="section" id="quote-form">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Steps */}
              <div>
                <SectionTitle
                  title="Insurance, Uncomplicated" // :contentReference[oaicite:7]{index=7}
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
                    description="We’ll help you review your options, make adjustments if needed, and finalize your policy with a licensed agent."
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
                      label: "Auto Insurance",
                      href: "/auto-insurance",
                    },
                    {
                      icon: <HomeIcon className="w-6 h-6" />,
                      label: "Home Insurance",
                      href: "/home-insurance",
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      label: "Business Insurance",
                      href: "/bop-insurance",
                    },
                    {
                      icon: <Building className="w-6 h-6" />,
                      label: "Renters Insurance",
                      href: "/renter-insurance",
                    },
                    {
                      icon: <Bike className="w-6 h-6" />,
                      label: "Motorcycle Insurance",
                      href: "/motorcycle-insurance",
                    },
                  ].map(({ icon, label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      passHref
                      className="flex flex-col items-center p-4 
            bg-white rounded-xl shadow hover:shadow-lg 
            ring-1 ring-neutral-200 hover:ring-primary-300 
            transition 
            focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                  name: "BBB",
                  logo: "https://i.ibb.co/MDbcb6g6/BBB-Logo.png",
                  url: "#",
                },
                {
                  name: "Trustpilot",
                  logo: "https://i.ibb.co/Y7NHSTfL/Trust-Pilot-Logo.png",
                  url: "#",
                },
                {
                  name: "Google Reviews",
                  logo: "https://i.ibb.co/bMwHbpMj/Google-Reviews-Logo.png",
                  url: "#",
                },
              ].map(({ name, logo, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="mx-auto h-12 w-auto object-contain"
                  />
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

// -----------------------------------------------------------------------------
// QuoteStep Subcomponent
// -----------------------------------------------------------------------------
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
