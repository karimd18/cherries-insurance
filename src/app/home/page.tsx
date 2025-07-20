"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Home,
  Car,
  Building,
  Users,
  Clock,
  CheckCircle,
  Award,
  ArrowRight,
  Bike,
  Anchor,
} from "lucide-react";

import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Card, { CardContent, CardTitle, CardImage } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";

export default function HomePage() {
  const [featuresRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero */}
      <Hero
        title="We don’t sell insurance. We simplify it."
        subtitle="Smart, spam-free coverage. All online. All in one place. Personalized insurance. Clear quotes. No spam. Just protection you understand."
        image="https://i.ibb.co/ptGkxzj/Background-Photo-Home-Page.png"
        imageAlt="Downtown Boston street view with historic brownstone buildings and modern skyscrapers under a clear blue sky"
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/quote"
        showTrustBadges
        trustBadges={[
          "BBB Accredited",
          "Partnered with A-Rated Carriers",
          "100% Online, No Calls Required",
          "No Spam, No Pressure",
        ]}
      />

      {/* Insurance Made Simple */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle
            title="Insurance Made Simple"
            subtitle="Pick the coverage that fits. We'll handle the rest."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Homeowner Insurance",
                features: [
                  "Property & belongings",
                  "Fire, theft, storms",
                  "Personal liability",
                ],
                icon: <Home className="w-6 h-6" />,
                image:
                  "https://i.ibb.co/ptGkxzj/Background-Photo-Home-Page.png",
                link: "/home-insurance",
                delay: 0,
              },
              {
                title: "Auto Insurance",
                features: [
                  "Accidents & theft",
                  "Liability & full coverage",
                  "Roadside & rentals",
                ],
                icon: <Car className="w-6 h-6" />,
                image:
                  "https://i.ibb.co/hJdBVntp/Auto-Card-Photo-Section03.png",
                link: "/auto-insurance",
                delay: 1,
              },
              {
                title: "Renters Insurance",
                features: [
                  "Personal items",
                  "Fire & theft",
                  "Required by landlord",
                ],
                icon: <Building className="w-6 h-6" />,
                image:
                  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
                link: "/renter-insurance",
                delay: 2,
              },
              {
                title: "Business Insurance",
                features: [
                  "Liability & property",
                  "BOP packages",
                  "Tailored to small biz",
                ],
                icon: <Users className="w-6 h-6" />,
                image:
                  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
                link: "/bop-insurance",
                delay: 3,
              },
              {
                title: "Motorcycle Insurance",
                features: [
                  "Collisions & theft",
                  "Liability & gear",
                  "Multi-bike discounts",
                ],
                icon: <Bike className="w-6 h-6" />,
                image:
                  "https://i.ibb.co/5WcRMybB/Motorcycle-Card-Photo-Section03.png",
                link: "/motorcycle-insurance",
                delay: 4,
              },
              {
                title: "Yacht Insurance",
                features: [
                  "Hull & engine damage",
                  "Storms & towing",
                  "Marina-ready coverage",
                ],
                icon: <Anchor className="w-6 h-6" />,
                image:
                  "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
                link: "/yacht-insurance",
                delay: 5,
              },
            ].map(({ title, features, icon, image, link, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay * 0.1 }}
              >
                <Card>
                  <CardImage
                    src={image}
                    alt={title}
                    className="h-48 object-cover"
                  />
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="gradient-bg w-10 h-10 rounded-full flex items-center justify-center">
                        <div className="text-white">{icon}</div>
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-neutral-600"
                        >
                          <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={link}>
                      <Button variant="outline" className="w-full quote-button">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get a Quote. Skip the Calls. */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Get a Quote. Skip the Calls."
                subtitle="It only takes a few minutes to pick your coverage and see real options."
              />
              <ul className="space-y-4 mb-8 text-neutral-700">
                {[
                  "No annoying calls. No spam. No pressure.",
                  "Compare real-time rates.",
                  "Customize in minutes.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle
                title="Select Your Coverage Type"
                subtitle="Choose a coverage to get started. It only takes a minute."
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  {
                    icon: <Home className="w-8 h-8" />,
                    label: "Home",
                    link: "/home-insurance",
                  },
                  {
                    icon: <Car className="w-8 h-8" />,
                    label: "Auto",
                    link: "/auto-insurance",
                  },
                  {
                    icon: <Building className="w-8 h-8" />,
                    label: "Renters",
                    link: "/renter-insurance",
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    label: "Business",
                    link: "/bop-insurance",
                  },
                  {
                    icon: <Bike className="w-8 h-8" />,
                    label: "Motorcycle",
                    link: "/motorcycle-insurance",
                  },
                  {
                    icon: <Anchor className="w-8 h-8" />,
                    label: "Yacht",
                    link: "/yacht-insurance",
                  },
                ].map(({ icon, label, link }) => (
                  <Link
                    key={label}
                    href={link}
                    className="flex flex-col items-center p-4 rounded-lg border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="text-primary-600 mb-2">{icon}</div>
                    <span className="font-medium text-neutral-700">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cherries Insurance */}
      <section className="section bg-neutral-50" ref={featuresRef}>
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Cherries Insurance"
            subtitle="Because insurance should be clear, calm, and built around you."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Simple, Honest, Hassle-Free",
                description:
                  "We simplify your insurance journey—no fluff, no pressure, no confusion.",
                delay: 0,
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Transparent & Respectful",
                description:
                  "We value your time, protect your data, and give you full control.",
                delay: 1,
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Local Expertise, National Vision",
                description:
                  "Proudly built in Massachusetts—with plans to grow where you're going.",
                delay: 2,
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Cherry-picked Coverage",
                description:
                  "We match you with policies that fit—no upselling, no shortcuts.",
                delay: 3,
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Privacy Comes First",
                description:
                  "Your information stays private. No cold calls. No third-party selling.",
                delay: 4,
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "We Cover What Matters",
                description:
                  "Whether it's your home, car, or business, we help protect what means the most.",
                delay: 5,
              },
            ].map(({ icon, title, description, delay }) => (
              <FeatureCard
                key={title}
                icon={icon}
                title={title}
                description={description}
                delay={delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Covered the Smarter Way?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Thousands already made the switch. Explore your options—your way,
            your pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100 quote-button"
              >
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                Policy Not Listed?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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
                alt: "Better Business Bureau logo — leave us a BBB review",
              },
              {
                name: "Trustpilot",
                logo: "https://i.ibb.co/Y7NHSTfL/Trust-Pilot-Logo.png",
                url: "#",
                alt: "Trustpilot logo — leave us a Trustpilot review",
              },
              {
                name: "Google Reviews",
                logo: "https://i.ibb.co/bMwHbpMj/Google-Reviews-Logo.png",
                url: "#",
                alt: "Google Reviews logo — leave us a Google review",
              },
            ].map(({ name, logo, url, alt }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <div className="relative mx-auto h-12 w-auto">
                  <Image
                    src={logo}
                    alt={alt}
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
    </>
  );
}
