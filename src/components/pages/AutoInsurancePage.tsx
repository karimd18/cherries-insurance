'use client'

import React from 'react';
import Image from 'next/image';
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
  const [covRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Protection That Moves With You"
        subtitle="Flexible auto coverage tailored to your needs, with honest pricing and no pressure."
        image={[
          "/auto-insurance/Background_Photo_Auto_Insurance.png",
          "/auto-insurance/Background_Photo_Auto_Insurance_01.png",
          "/auto-insurance/Background_Photo_Auto_Insurance_02.png"
        ]}
        imageAlt="Driver’s seat view with hands on the wheel and car interior."
        primaryButtonText="Get Your Auto Quote"
        primaryButtonLink="/quote"
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
            <Link href="/quote" passHref>
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
            <Link href="/quote" passHref>
              <Button>Get Your Auto Quote</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline">Contact an Agent</Button>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <div className="relative w-full h-[900px] mx-auto">
              <Image
                src="/auto-insurance/Auto_Insurance_Section03.png"
                alt="Updated auto insurance illustration"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
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
            <Link href="/quote" passHref>
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
