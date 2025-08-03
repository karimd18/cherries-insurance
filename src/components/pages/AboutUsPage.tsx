"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Heart, Award, Target } from "lucide-react";
import Hero from '@/components/ui/Hero';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';


const AboutUsPage: React.FC = () => {
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Cherries Insurance"
        subtitle="We don’t sell insurance. We simplify it."
        image="/about/Back_Ground_Photo_About_Us.png"
        imageAlt="Woman browsing online insurance site on tablet"
        primaryButtonText="Get a Quote"
        primaryButtonLink="/quote"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        trustBadges={[
          "BBB Accredited",
          "Partnered with A-Rated Carriers",
          "100% Online, No Calls Required, No Spam, No Pressure",
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
                  At Cherries Insurance, we believe insurance should be simple,
                  honest, and stress-free. We built a digital-first, independent
                  agency that puts your time, privacy, and peace of mind first.
                </p>
                <p>We don’t sell insurance—we simplify it.</p>
                <p>
                  From auto and home to renters and business coverage, we work
                  with top-rated carriers to help you compare real options —
                  without spam calls, sales pressure, or confusing jargon.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[600px]">
              <Image
                src="/about/Body_Photo_About_Us.png"
                alt="Team members in a meeting"
                fill
                className="rounded-xl shadow-lg object-cover"
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
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: "Trust",
                description:
                  "We prioritize honesty and integrity in all interactions.",
              },
              {
                icon: <Heart className="w-6 h-6 text-white" />,
                title: "Simplicity",
                description:
                  "We make insurance straightforward and easy to understand.",
              },
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: "Privacy",
                description:
                  "Your personal information remains confidential and secure.",
              },
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Honesty",
                description: "We provide accurate and unbiased information.",
              },
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

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  delay,
  inView,
}) => (
  <motion.div
    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: delay * 0.2 }}
  >
    <div className="mb-4 gradient-bg w-14 h-14 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </motion.div>
);

export default AboutUsPage;