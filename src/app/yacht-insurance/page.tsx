'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Anchor,
  ShieldCheck,
  DollarSign,
  UserCheck,
  Wrench,
  Check,
  ArrowRight,
  Waves
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const YachtInsurancePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Yacht Insurance"
        subtitle="Premium protection for your yacht with comprehensive coverage for hull, engine, and everything aboard."
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Get a Yacht Quote"
        primaryButtonLink="/quote"
      />

      {/* Coverage Options */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="Yacht Insurance Coverage"
            subtitle="Comprehensive protection for your vessel and peace of mind on the water"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Anchor className="w-6 h-6" />,
                title: 'Hull & Machinery',
                description:
                  "Covers physical damage to your yacht's hull, engine, and onboard equipment.",
              },
              {
                icon: <Waves className="w-6 h-6" />,
                title: 'Weather & Storm Damage',
                description:
                  'Protection against damage from storms, hurricanes, and severe weather conditions.',
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: 'Liability Protection',
                description:
                  'Covers bodily injury and property damage claims against you while operating your yacht.',
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: 'Emergency Towing',
                description:
                  "24/7 emergency towing and assistance services when you're on the water.",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Personal Effects',
                description:
                  'Coverage for personal belongings, electronics, and equipment aboard your yacht.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: 'Marina Coverage',
                description:
                  'Protection while your yacht is docked at marinas and during storage.',
              },
            ].map(({ icon, title, description }) => (
              <CoverageCard
                key={title}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Our Yacht Insurance"
            subtitle="Specialized coverage for yacht owners who demand the best"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[400px]">
              <Image
                src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Luxury yacht on water"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Worldwide Coverage',
                  description:
                    'Protection wherever your yacht takes you, with international coverage options.',
                },
                {
                  title: 'Agreed Value Coverage',
                  description:
                    'No depreciation—get the full agreed value of your yacht in case of total loss.',
                },
                {
                  title: 'Expert Marine Adjusters',
                  description:
                    'Specialized claims adjusters who understand yachts and marine environments.',
                },
                {
                  title: 'Marina-Ready Coverage',
                  description:
                    'Comprehensive protection whether you’re cruising or docked at your favorite marina.',
                },
              ].map(({ title, description }) => (
                <BenefitItem key={title} title={title} description={description} />
              ))}

              <div className="mt-8">
                <Link href="/quote" passHref>
                  <Button>Get Your Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to protect your yacht?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Get premium yacht insurance coverage designed for discerning yacht
            owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" passHref>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                Speak to a Specialist
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
const CoverageCard: React.FC<CoverageCardProps> = ({
  icon,
  title,
  description,
}) => {
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
const BenefitItem: React.FC<BenefitItemProps> = ({
  title,
  description,
}) => {
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

export default YachtInsurancePage;
  