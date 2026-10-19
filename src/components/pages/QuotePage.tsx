"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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

import SectionTitle from "@/components/ui/SectionTitle";
import { QUOTE_LINKS } from "@/lib/quoteLinks";

const coverageButtonClass =
  "flex flex-col items-center justify-center text-center w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] p-4 bg-white rounded-xl shadow hover:shadow-lg ring-1 ring-neutral-200 hover:ring-primary-300 transition focus:outline-none focus:ring-2 focus:ring-primary-500";

export default function QuotePage() {
  const [showPopup, setShowPopup] = useState(false);

  // Disable background scrolling when popup is active
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = showPopup ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showPopup]);

  const coverageOptions = [
    {
      icon: <Car className="w-6 h-6" />,
      label: "Auto Insurance",
      href: QUOTE_LINKS.auto,
    },
    {
      icon: <HomeIcon className="w-6 h-6" />,
      label: "Home Insurance",
      href: QUOTE_LINKS.home,
    },
    {
      icon: (
        <Image
          src="/home/Renters_Insurance_Icon.png"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      label: "Renters Insurance",
      href: QUOTE_LINKS.renters,
    },
    {
      icon: <Building className="w-6 h-6" />,
      label: "Condo Insurance",
      href: QUOTE_LINKS.condo,
    },
    {
      icon: (
        <Image
          src="/home/Landlord_Insurance_Icon.png"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      label: "Landlord Insurance",
      href: QUOTE_LINKS.landlord,
    },
    {
      icon: <Bike className="w-6 h-6" />,
      label: "Motorcycle Insurance",
      href: QUOTE_LINKS.motorcycle,
    },
  ];

  return (
    <>
      {/* Business Insurance "coming soon" popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            className="relative bg-white rounded-2xl p-6 sm:p-8 text-center w-full max-w-md shadow-2xl ring-2 ring-primary-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
              onClick={() => setShowPopup(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Shield className="w-12 h-12 text-primary-700 mx-auto mb-4 animate-pulse" />
            <h2
              id="coming-soon-title"
              className="text-2xl sm:text-3xl font-bold text-primary-700 mb-2"
            >
              Online quoting is coming soon!
            </h2>
            <p className="text-neutral-700 mb-4">
              We are putting the final touches on our systems - check back
              shortly or contact us directly for assistance.
            </p>
          </motion.div>
        </div>
      )}

      {/* 1. Start Your Quote Online */}
      <section className="section" id="quote-form">
        <div className="container-custom">
          <SectionTitle
            as="h1"
            title="Start Your Quote Online"
            subtitle="Pick the coverage you need. We’ll guide you from there."
            centered
          />
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
            {coverageOptions.map(({ icon, label, href }) => (
              <Link key={label} href={href} className={coverageButtonClass}>
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mb-2">{icon}</div>
                <span className="text-sm font-medium text-neutral-700">{label}</span>
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className={coverageButtonClass}
            >
              <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mb-2">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-neutral-700">
                Business Insurance
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Insurance, Uncomplicated */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
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
        </div>
      </section>
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
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-8 h-8 flex-shrink-0 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.li>
  );
}
