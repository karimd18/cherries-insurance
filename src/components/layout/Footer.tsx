"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-800 text-neutral-300 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { href: "/faq", label: "FAQs" },
              { href: "/home-insurance", label: "Homeowner Insurance" },
              { href: "/auto-insurance", label: "Auto Insurance" },
              { href: "/renter-insurance", label: "Renters Insurance" },
              { href: "/bop-insurance", label: "Business Insurance" },
              { href: "/motorcycle-insurance", label: "Motorcycle Insurance" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <p>781-214-0907</p>
          <p>
            <a
              href="mailto:info@cherriesinsurance.com"
              className="hover:text-white transition-colors"
            >
              info@cherriesinsurance.com
            </a>
          </p>
          <p>MA License # 3003689527</p>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            {[
              { href: "/accessibility", label: "Accessibility Statement" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-and-conditions", label: "Terms & Conditions" },
              { href: "/disclaimer", label: "Disclaimer" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-bold mb-4">Follow</h4>
          <div className="flex gap-4">
            {[
              {
                href: "https://www.facebook.com/cherriesinsurance",
                alt: "Facebook logo",
                src: "/assets/icons8-facebook-100.png",
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/cherriesinsurance",
                alt: "Instagram logo",
                src: "/assets/icons8-instagram-100.png",
                label: "Instagram",
              },
              {
                href: "https://www.tiktok.com/@cherriesinsurance",
                alt: "TikTok logo",
                src: "/assets/icons8-tiktok-100.png",
                label: "TikTok",
              },
              {
                href: "https://www.twitter.com/cherriesins",
                alt: "X (formerly Twitter) logo",
                src: "/assets/icons8-x-100.png",
                label: "X",
              },
              {
                href: "https://www.youtube.com/@cherriesinsurance",
                alt: "YouTube logo",
                src: "/assets/icons8-youtube-100.png",
                label: "YouTube",
              },
              {
                href: "https://www.linkedin.com/company/cherriesinsurance",
                alt: "LinkedIn logo",
                src: "/assets/icons8-linkedin-2-100.png",
                label: "LinkedIn",
              },
            ].map(({ href, src, alt, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${label}`}
                className="hover:text-white transition-colors"
              >
                {/* Option A: plain <img> */}
                {/* <img src={src} alt={alt} className="w-6 h-6 object-contain" /> */}

                {/* Option B: next/image (with fixed 24×24 px) */}

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
      </div>

      <div className="mt-8 text-center text-sm text-neutral-500">
        © {year} Cherries Insurance Agency LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
