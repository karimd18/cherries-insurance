"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/quote", label: "Get a Quote" },
    {
      href: "/FAQs/CherriesInsurance_FAQ.pdf",
      label: "FAQs",
      external: true,
    },
  ];

  const insuranceLines = [
    { href: "/auto-insurance", label: "Auto Insurance" },
    { href: "/home-insurance", label: "Home Insurance" },
    { href: "/renter-insurance", label: "Renters Insurance" },
    { href: "/bop-insurance", label: "Business Insurance" },
    { href: "/motorcycle-insurance", label: "Motorcycle Insurance" },
  ];

  const legalLinks = [
    { href: "/accessibility", label: "Accessibility Statement" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/cherriesinsurance",
      src: "/assets/icons8-facebook-100.png",
      alt: "Facebook logo",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/cherriesinsurance",
      src: "/assets/icons8-instagram-100.png",
      alt: "Instagram logo",
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@cherriesinsurance",
      src: "/assets/icons8-tiktok-100.png",
      alt: "TikTok logo",
      label: "TikTok",
    },
    {
      href: "https://www.twitter.com/cherriesins",
      src: "/assets/icons8-x-100.png",
      alt: "X (formerly Twitter) logo",
      label: "X",
    },
    {
      href: "https://www.youtube.com/@cherriesinsurance",
      src: "/assets/icons8-youtube-100.png",
      alt: "YouTube logo",
      label: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/cherriesinsurance",
      src: "/assets/icons8-linkedin-2-100.png",
      alt: "LinkedIn logo",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-neutral-800 text-neutral-300 py-12">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(({ href, label, external }) => (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ) : (
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Insurance Lines */}
        <div>
          <h4 className="text-white font-bold mb-4">Insurance Lines</h4>
          <ul className="space-y-2">
            {insuranceLines.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            {legalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <p className="mb-4">
            We are a fully digital insurance agency<br />
            based in Massachusetts.
          </p>
          <p className="mb-2">
            <a
              href="tel:7812140907"
              className="hover:text-white transition-colors"
            >
              781-214-0907
            </a>
          </p>
          <p className="mb-2">
            <a
              href="mailto:info@cherriesinsurance.com"
              className="hover:text-white transition-colors"
            >
              info@cherriesinsurance.com
            </a>
          </p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="mt-12 text-center">
        <h4 className="text-white font-bold mb-4">Follow Us</h4>
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ href, src, alt, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={src}
                alt={alt}
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-sm text-neutral-500">
        © {year} Cherries Insurance Agency LLC. All rights reserved. MA License
        # 3003689527
      </div>
    </footer>
  );
};

export default Footer;
