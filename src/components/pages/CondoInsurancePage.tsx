'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PaintRoller,
  Sofa,
  UserCheck,
  Stethoscope,
  BedDouble,
  Droplets,
  ArrowRight,
  Check
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import { NEW_TAB, QUOTE_LINKS } from '@/lib/quoteLinks';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const CondoInsurancePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Your Space. Your Style. Your Protection."
        subtitle="Your condo is more than just a place to live. Protect your unit, personal belongings, and personal liability."
        image="/condo-insurance/Condo_Insurance_Background.jpg"
        imageAlt="Modern condominium complex with landscaped courtyard, residential balconies, and a distant city skyline."
        primaryButtonText="Get Your Condo Quote"
        primaryButtonLink={QUOTE_LINKS.condo}
        showTrustBadges
        trustBadges={[
          '100% Online, No Calls Required, No Spam, No Pressure'
        ]}
      />

      {/* What Does Condo Insurance Cover? */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="What Does Condo Insurance Cover?"
            subtitle="From your walls to what makes it home—explore the coverage your condo insurance policy can include."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <PaintRoller className="w-6 h-6 text-white" />,
                title: 'Unit Interior Coverage',
                description:
                  'Helps protect covered interior features, fixtures, and improvements that are your responsibility.'
              },
              {
                icon: <Sofa className="w-6 h-6 text-white" />,
                title: 'Personal Property',
                description:
                  'Helps cover furniture, electronics, clothing, and other belongings against covered losses.'
              },
              {
                icon: <UserCheck className="w-6 h-6 text-white" />,
                title: 'Personal Liability',
                description:
                  'Helps protect you financially if you’re legally responsible for someone’s injury or property damage.'
              },
              {
                icon: <Stethoscope className="w-6 h-6 text-white" />,
                title: 'Guest Medical Payments',
                description:
                  'May help pay minor medical expenses if a guest is accidentally injured at your condo.'
              },
              {
                icon: <BedDouble className="w-6 h-6 text-white" />,
                title: 'Loss of Use',
                description:
                  'Helps cover additional living expenses if a covered loss makes your condo temporarily uninhabitable.'
              },
              {
                icon: <Droplets className="w-6 h-6 text-white" />,
                title: 'Optional Water Backup',
                description:
                  'May provide coverage for certain damage caused by water backing up through drains or sewers.'
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

          <p className="text-center mt-6 text-neutral-600">
            Your condo is unique—your coverage should be too. Let’s find the protection that fits your needs.
          </p>

          <div className="mt-8 text-center">
            <Link href={QUOTE_LINKS.condo} passHref {...NEW_TAB}>
              <Button size="lg">Get Your Condo Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Cherries Insurance for Your Condo? */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Cherries Insurance for Your Condo?"
            subtitle="Condo coverage should be simple, clear, and built around what matters to you."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px]">
              <Image
                src="/condo-insurance/Condo_Insurance_SideImage.jpg"
                alt="Bright open-plan condo interior with a living area, kitchen island, and bar stools"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'Coverage That Fits',
                  description:
                    'We help you explore coverage options based on your condo, belongings, and insurance needs.'
                },
                {
                  title: 'Understand Your Protection',
                  description:
                    'We help you understand the difference between your condo insurance and your association’s master policy.'
                },
                {
                  title: 'Simple Online Experience',
                  description:
                    'Request your condo insurance quote online, without unnecessary calls or paperwork.'
                },
                {
                  title: 'Privacy Comes First',
                  description:
                    'Your information is handled with care, without unwanted sales calls or pressure.'
                }
              ].map(({ title, description }) => (
                <motion.div
                  key={title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-8 h-8 flex-shrink-0 rounded-full gradient-bg flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-neutral-600">{description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-8">
                <Link href={QUOTE_LINKS.condo} passHref {...NEW_TAB}>
                  <Button>Get Your Condo Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Condo Insurance FAQs */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="Condo Insurance FAQs"
            subtitle="Understanding what your condo association covers—and where your own insurance comes in—can help you avoid unexpected gaps in protection."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'What is condo insurance?',
                answer:
                  'Condo insurance (HO-6) helps protect your personal belongings, personal liability, and certain parts of your unit against covered losses. It works alongside your condominium association’s master insurance policy.'
              },
              {
                question: 'Does my condo association’s insurance cover my unit?',
                answer:
                  'Your association’s master policy generally covers certain shared structures and common areas. Depending on its terms, it may also cover portions of individual units. Your own condo policy can help address coverage gaps, including personal belongings and liability.'
              },
              {
                question: 'Is condo insurance required?',
                answer:
                  'Condo insurance requirements vary by state, mortgage lender, and condominium association. Even when an individual policy isn’t legally required, your lender or association may require coverage.'
              },
              {
                question: 'How much condo insurance do I need?',
                answer:
                  'The appropriate amount depends on your unit’s interior coverage responsibilities, the value of your belongings, potential liability exposure, and your association’s master policy. Reviewing those factors helps determine suitable limits.'
              }
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

      {/* Final CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Condo Deserves the Right Protection.
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Explore condo insurance options with a simpler, more convenient experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={QUOTE_LINKS.condo} passHref {...NEW_TAB}>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-white text-primary-700 hover:bg-neutral-100"
              >
                Get Your Condo Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/20"
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

export default CondoInsurancePage;
