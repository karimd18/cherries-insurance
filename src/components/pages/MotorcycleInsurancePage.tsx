'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Bike,
  ShieldCheck,
  DollarSign,
  UserCheck,
  Wrench,
  AlertTriangle,
  ArrowRight,
  Star,
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const MotorcycleInsurancePage: React.FC = () => {
  const [covRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Coverage That Keeps Pace With You."
        subtitle="Because every turn, curve, and straightaway deserves protection."
        image="/motorcycle-insurance/Background_Photo_Motorcycle_Insurance.png"
        imageAlt="Motorcyclist riding a cruiser-style bike at sunset on a scenic road"
        primaryButtonText="Get Your Motorcycle Quote"
        primaryButtonLink="/quote"
        showTrustBadges
        trustBadges={[
          'BBB Accredited',
          'Partnered with A-Rated Carriers',
          '100% Online, No Calls Required',
          'No Spam, No Pressure',
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
                icon: <Bike className="w-6 h-6 text-white" />,
                title: 'Collision Coverage',
                description:
                  'Helps pay for damage to your bike if you collide with another vehicle, object, or road hazard—regardless of fault.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-white" />,
                title: 'Liability Coverage',
                description:
                  'Covers injuries or property damage you cause to others in an accident. Often required by state law.',
              },
              {
                icon: <DollarSign className="w-6 h-6 text-white" />,
                title: 'Comprehensive Coverage',
                description:
                  'Protects against theft, fire, vandalism, weather events, and other non-collision losses.',
              },
              {
                icon: <UserCheck className="w-6 h-6 text-white" />,
                title: 'Medical Payments',
                description:
                  'Helps cover medical costs for you and your passenger, no matter who was at fault.',
              },
              {
                icon: <Wrench className="w-6 h-6 text-white" />,
                title: 'Towing & Roadside Assistance',
                description:
                  'Covers emergency services like towing, battery jump, fuel delivery, or flat-tire help while you’re on the road.',
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-white" />,
                title: 'Custom Parts & Equipment',
                description:
                  'Adds protection for aftermarket accessories like saddlebags, chrome parts, or custom paint jobs.',
              },
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
            <Link href="/quote" passHref>
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
            <div className="relative w-full h-[650px]">
              <Image
                src="/motorcycle-insurance/Motorcycle_Insurance_Section03.png"
                alt="Motorcyclist on a scenic road with insurance illustration"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'Tailored for Motorcyclists',
                  description:
                    'Coverage that fits your lifestyle—whether you ride daily or seasonally.',
                },
                {
                  title: 'No Spam, No Pressure',
                  description:
                    'Get insured online with zero phone calls or sales tactics.',
                },
                {
                  title: 'Fast Claims, Real Help',
                  description:
                    'When things go wrong, we’ve got your back—quickly and clearly.',
                },
                {
                  title: 'Flexible Policy Options',
                  description:
                    'Choose from top-rated carriers to match your bike and your budget.',
                },
              ].map(({ title, description }) => (
                <motion.div
                  key={title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Star className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-neutral-600">{description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-8">
                <Link href="/quote" passHref>
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
            {[
              {
                question: 'Is motorcycle insurance required in Massachusetts?',
                answer:
                  'Yes. Massachusetts law requires motorcycle owners to carry liability insurance at minimum. You may also need proof of coverage to register your bike.',
              },
              {
                question: 'What does motorcycle insurance typically cover?',
                answer:
                  'Most policies include liability, collision, comprehensive, medical payments, and uninsured/underinsured motorist coverage. Optional add-ons include roadside assistance and custom parts protection.',
              },
              {
                question: 'Can I insure a seasonal or stored motorcycle?',
                answer:
                  'Yes. You can adjust your coverage during off-season months to reflect storage, helping reduce your premium while keeping your bike protected.',
              },
              {
                question: 'Does motorcycle insurance cover passengers?',
                answer:
                  'Passenger coverage isn’t always included by default, but it can be added to your policy to cover injuries for anyone riding with you.',
              },
            ].map(({ question, answer }) => (
              <motion.div
                key={question}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
            <Link href="/quote" passHref>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
              >
                Get Your Motorcycle Quote
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

export default MotorcycleInsurancePage;
