'use client'

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Button from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string | string[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showTrustBadges?: boolean;
  trustBadges?: string[];
  slideIntervalMs?: number;
  imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  imageAlt = "Hero background",
  primaryButtonText = "Get Quote",
  primaryButtonLink = "/quote",
  secondaryButtonText,
  secondaryButtonLink,
  showTrustBadges = false,
  trustBadges = [
    "BBB Accredited",
    "Partnered with A-Rated Carriers",
    "100% Online, No Calls Required",
  ],
  slideIntervalMs = 5000,
}) => {
  const images = useMemo(
    () => (Array.isArray(image) ? image : [image]),
    [image]
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, slideIntervalMs);
    return () => clearInterval(timer);
  }, [images, slideIntervalMs]);

  return (
    <div
      className="relative w-full min-h-[600px] overflow-hidden"
      role="img"
      aria-label={imageAlt}
    >
      {/* slide container */}
      <AnimatePresence>
        {images.map((src, idx) =>
          idx === current ? (
            <motion.div
              key={src + idx}
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${src})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          ) : null
        )}
      </AnimatePresence>
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-primary-900/60" />

      {/* content */}
      <div className="relative z-10 container-custom flex flex-col justify-center min-h-[600px] py-24">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl text-neutral-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={primaryButtonLink} passHref>
            <Button variant="primary" className="font-semibold">
              {primaryButtonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          {secondaryButtonLink && secondaryButtonText && (
            <Link href={secondaryButtonLink} passHref>
              <Button
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </motion.div>

        {showTrustBadges && trustBadges.length > 0 && (
          <motion.div
            className="mt-12 flex items-center gap-8 flex-wrap text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
