'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Building2,
  Fence,
  Scale,
  DollarSign,
  Refrigerator,
  Droplets,
  ArrowRight,
  Check
} from 'lucide-react';
import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import { QUOTE_LINKS } from '@/lib/quoteLinks';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const LandlordInsurancePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Because Your Property Has a Job to Do."
        subtitle="Your rental property is more than a building—it’s an investment that works for you."
        image="/landlord-insurance/Landlord_Insurance_Background.jpg"
        imageAlt="Row of modern townhouse rental units with landscaped front yards and lit windows at dusk"
        primaryButtonText="Get Your Landlord Quote"
        primaryButtonLink={QUOTE_LINKS.landlord}
        showTrustBadges
        trustBadges={[
          '100% Online, No Calls Required, No Spam, No Pressure'
        ]}
      />

      {/* What Does Landlord Insurance Cover? */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="What Does Landlord Insurance Cover?"
            subtitle="Owning a rental property comes with the unexpected. Having the right coverage means being prepared for it."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Building2 className="w-6 h-6 text-white" />,
                title: 'Dwelling Coverage',
                description:
                  'Helps cover damage to your rental property’s structure from covered events such as fire, windstorms, and hail.'
              },
              {
                icon: <Fence className="w-6 h-6 text-white" />,
                title: 'Other Structures',
                description:
                  'Helps protect detached structures on your rental property, such as garages, fences, and sheds, against covered losses.'
              },
              {
                icon: <Scale className="w-6 h-6 text-white" />,
                title: 'Landlord Liability',
                description:
                  'May help cover legal expenses and damages if you’re held legally responsible for injuries or property damage.'
              },
              {
                icon: <DollarSign className="w-6 h-6 text-white" />,
                title: 'Loss of Rental Income',
                description:
                  'May replace lost rental income if a covered property loss makes your rental unit uninhabitable, subject to policy limits.'
              },
              {
                icon: <Refrigerator className="w-6 h-6 text-white" />,
                title: 'Landlord-Owned Property',
                description:
                  'May cover appliances, furnishings, and equipment you own and provide for use or maintenance of the rental property.'
              },
              {
                icon: <Droplets className="w-6 h-6 text-white" />,
                title: 'Optional Water Backup',
                description:
                  'Additional coverage may be available for certain damage caused by water backing up through sewers or drains.'
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
            Every rental property comes with its own risks. Let’s explore coverage options that fit yours.
          </p>

          <div className="mt-8 text-center">
            <Link href={QUOTE_LINKS.landlord} passHref>
              <Button size="lg">Get Your Landlord Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Cherries Insurance for Your Rental Property? */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Cherries Insurance for Your Rental Property?"
            subtitle="Managing a rental property is complicated enough. Finding the right insurance shouldn’t be."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px]">
              <Image
                src="/landlord-insurance/Landlord_Insurance_SideImage.jpg"
                alt="Move-in ready rental unit with a dining table, large windows, and an updated kitchen"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'Insurance That Understands Rental Properties',
                  description:
                    'A tenant-occupied property has different risks than a home you live in. We help you find insurance designed for those differences.'
                },
                {
                  title: 'Prepared for the Unexpected',
                  description:
                    'Fires, storms, and accidents can disrupt your plans. We help you evaluate protection for the events that could affect your property.'
                },
                {
                  title: 'Think Beyond the Building',
                  description:
                    'Property damage is only part of the picture. We also help you consider liability exposure and potential interruptions to rental income.'
                },
                {
                  title: 'The Details That Make a Difference',
                  description:
                    'No two rental properties are exactly alike. We help you consider the property’s unique characteristics and potential exposures that might otherwise be overlooked.'
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
                <Link href={QUOTE_LINKS.landlord} passHref>
                  <Button>Get Your Landlord Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landlord Insurance FAQs */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="Landlord Insurance FAQs"
            subtitle="Rental property ownership raises important insurance questions. Here are a few answers worth knowing before choosing your coverage."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'What’s the difference between landlord insurance and homeowners insurance?',
                answer:
                  'Homeowners insurance is generally designed for owner-occupied homes, while landlord insurance is designed for properties rented to tenants. Landlord policies typically address building damage, liability risks, and potential loss of rental income.'
              },
              {
                question: 'Does landlord insurance cover damage caused by tenants?',
                answer:
                  'It depends on the type of damage and your policy. Certain accidental damage may be covered, while normal wear and tear, neglect, and intentional damage by tenants are often excluded. Coverage varies by insurer.'
              },
              {
                question: 'Does landlord insurance cover my tenants’ belongings?',
                answer:
                  'Generally, no. Landlord insurance primarily protects the property owner’s insured interests, not tenants’ personal belongings. Tenants typically need their own renters insurance to protect their possessions and personal liability.'
              },
              {
                question: 'Does landlord insurance cover lost rental income?',
                answer:
                  'Many landlord policies offer fair rental value coverage, which may compensate for lost rental income when a covered property loss makes the rental unit uninhabitable. Coverage is subject to policy terms, limits, and exclusions.'
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
            The Unexpected Happens. Be Ready for It.
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Your rental property deserves more than guesswork. Find landlord insurance options that help you stay prepared for what comes next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={QUOTE_LINKS.landlord} passHref>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-white text-primary-700 hover:bg-neutral-100"
              >
                Get Your Landlord Quote
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

export default LandlordInsurancePage;
