'use client';

import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6"><strong>Effective Date:</strong> July 19, 2025</p>
      <p className="mb-8">
        Cherries Insurance Agency LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Personal information (name, address, phone, email)</li>
          <li>Quote and policy data submitted via forms</li>
          <li>Technical data (cookies, IP address, browser type)</li>
          <li>Interaction data from third-party pixels (e.g., Meta, TikTok, Google)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>To provide quotes, products, and services</li>
          <li>To submit applications to insurance carriers</li>
          <li>For billing, account management, and customer support</li>
          <li>To improve our services and conduct analytics</li>
          <li>For retargeting and marketing purposes</li>
          <li>To follow up on quote requests and assist with completing a purchase</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Lead Follow-Up</h2>
        <p className="mb-4">
          If you submit your information to request a quote, we may contact you via email or phone to follow up on your inquiry, assist with your application, or remind you about your options. You can opt out of further communication at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Marketing Communications</h2>
        <p className="mb-4">
          With your consent, we may use your contact information to send promotional content or newsletters. You will always have the option to unsubscribe or opt out from future marketing emails.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Data Sharing and Disclosure</h2>
        <ul className="list-disc list-inside">
          <li>With licensed carriers and partners to obtain coverage</li>
          <li>With CRM, analytics, and ad providers for operational purposes</li>
          <li>As required by law or to protect our legal rights</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies. You may opt-out via browser settings or cookie consent tools.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Children’s Privacy</h2>
        <p>
          We do not knowingly collect data from children under 13. If you believe we have, please contact us immediately.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, delete, or correct your personal data. Contact <a href="mailto:info@cherriesinsurance.com" className="underline">info@cherriesinsurance.com</a> to exercise these rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Security</h2>
        <p>
          We implement commercially reasonable safeguards to protect your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Contact</h2>
        <p>
          For privacy inquiries, please email us at <a href="mailto:info@cherriesinsurance.com" className="underline">info@cherriesinsurance.com</a>.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
