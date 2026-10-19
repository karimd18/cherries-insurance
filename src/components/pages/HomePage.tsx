"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Bike,
    Briefcase,
    Building,
    Car,
    CheckCircle,
    Clock,
    Home,
    Shield,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Button from "@/components/ui/Button";
import Card, { CardContent } from "@/components/ui/Card";
import FeatureCard from "@/components/ui/FeatureCard";
import Hero from "@/components/ui/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import { QUOTE_LINKS } from "@/lib/quoteLinks";

export default function HomePage() {
  const [featuresRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <Hero
        title="The sweet side of insurance."
        subtitle="Smart, spam-free coverage. All online. All in one place."
        tagline="Get peace of mind knowing you’re covered by Cherries Insurance"
        image="/home/Home_Page_Background.png"
        imageAlt="Downtown Boston street view with historic brownstone buildings and modern skyscrapers under a clear blue sky"
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/quote"
        showTrustBadges
        trustBadges={[
        //   "BBB Accredited",
        //   "Partnered with A-Rated Carriers",
          "100% Online, No Calls Required, No Spam, No Pressure",
        ]}
      />

      {/* Get a Quote. Skip the Calls. */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Get a Quote. Skip the Calls."
                subtitle="Choose your coverage, complete our secure online form, and we'll help you explore your insurance options."
              />
              <ul className="space-y-4 mb-8 text-neutral-700">
                {[
                  "No annoying calls. No spam. No pressure.",
                  "Explore coverage options from trusted insurance carriers.",
                  "Request your quote online, at your convenience.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
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
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
                {[
                  {
                    icon: <Home className="w-8 h-8" />,
                    label: "Home",
                    link: QUOTE_LINKS.home,
                  },
                  {
                    icon: <Car className="w-8 h-8" />,
                    label: "Auto",
                    link: QUOTE_LINKS.auto,
                  },
                  {
                    icon: (
                      <Image
                        src="/home/Renters_Insurance_Icon.png"
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    ),
                    label: "Renters",
                    link: QUOTE_LINKS.renters,
                  },
                  {
                    icon: <Building className="w-8 h-8" />,
                    label: "Condo",
                    link: QUOTE_LINKS.condo,
                  },
                  {
                    icon: (
                      <Image
                        src="/home/Landlord_Insurance_Icon.png"
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    ),
                    label: "Landlord",
                    link: QUOTE_LINKS.landlord,
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    label: "Business",
                    link: "/bop-insurance",
                  },
                  {
                    icon: <Bike className="w-8 h-8" />,
                    label: "Motorcycle",
                    link: QUOTE_LINKS.motorcycle,
                  },
                ].map(({ icon, label, link }) => (
                  <Link
                    key={label}
                    href={link}
                    className="flex flex-col items-center w-[calc((100%-0.75rem)/2)] min-[400px]:w-[calc((100%-1.5rem)/3)] sm:w-[calc((100%-2rem)/3)] p-3 sm:p-4 rounded-lg border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
                    aria-label={`Get ${label} insurance quote`}
                  >
                    <div className="text-primary-600 mb-2">{icon}</div>
                    <span className="text-sm sm:text-base font-medium text-neutral-700">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                title: "Home Insurance",
                features: [
                  "Property & belongings",
                  "Fire, theft, storms",
                  "Personal liability",
                ],
                icon: <Home className="w-6 h-6" />,
                image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
                image: "/home/Auto_Card_Photo_Section03.png",
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
                icon: (
                  <Image
                    src="/home/Renters_Insurance_Icon.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 brightness-0 invert"
                  />
                ),
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
                image: "/home/Motorcycle_Card_Photo_Section03.png",
                link: "/motorcycle-insurance",
                delay: 4,
              },
              {
                title: "Explore More Insurance Options",
                features: [
                  "Commercial Auto & Trucks",
                  "Workers' Compensation",
                  "Boats, Yachts & More",
                ],
                icon: <Briefcase className="w-6 h-6" />,
                image: "/home/Section3_Card_6.jpg",
                link: "/quote",
                delay: 5,
              },
              // {
              //   title: "Yacht Insurance",
              //   features: [
              //     "Hull & engine damage",
              //     "Storms & towing",
              //     "Marina-ready coverage",
              //   ],
              //   icon: <Anchor className="w-6 h-6" />,
              //   image:
              //     "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
              //   link: "/yacht-insurance",
              //   delay: 5,
              // },
            ].map(({ title, features, icon, image, link, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay * 0.1 }}
              >
                <Card>
                  <div className="relative w-full h-48 bg-neutral-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="gradient-bg w-10 h-10 rounded-full flex items-center justify-center">
                        <div className="text-white">{icon}</div>
                      </div>
                      <h2 className="text-lg font-semibold">{title}</h2>
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
                    <Link href={link} passHref legacyBehavior>
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
            Explore your insurance options with a simpler, more convenient
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" passHref legacyBehavior>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100 quote-button"
              >
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
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

    </>
  );
}
