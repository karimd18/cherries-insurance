'use client';

import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-6">By accessing this website or using our services, you agree to these Terms and Conditions.</p>
      <p className="mb-8"><strong>Effective Date:</strong> July 19, 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Use of Website</h2>
        <ul className="list-disc list-inside">
          <li>You agree to use the website only for lawful purposes.</li>
          <li>Unauthorized access, scraping, or abuse is strictly prohibited.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Insurance Quotes and Purchases</h2>
        <ul className="list-disc list-inside">
          <li>Quotes are non-binding and subject to carrier underwriting.</li>
          <li>Coverage is not active until confirmed by the carrier.</li>
          <li>We are not liable for any denied applications or policy cancellations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Digital Transactions</h2>
        <ul className="list-disc list-inside">
          <li>You consent to the use of electronic signatures, disclosures, and forms.</li>
          <li>All online submissions are legally binding when applicable.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Payment Processing</h2>
        <ul className="list-disc list-inside">
          <li>All premium payments are processed by the insurance carriers or their payment systems.</li>
          <li>We do not store payment details unless explicitly stated.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
        <ul className="list-disc list-inside">
          <li>We use EZLynx and other licensed platforms for quoting and CRM.</li>
          <li>We are not liable for errors or outages of these third-party systems.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. External Links</h2>
        <ul className="list-disc list-inside">
          <li>We may link to third-party websites; we are not responsible for their content or security.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
        <ul className="list-disc list-inside">
          <li>All content, design, and branding are owned by Cherries Insurance or licensed partners.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
        <ul className="list-disc list-inside">
          <li>These Terms are governed by the laws of the Commonwealth of Massachusetts.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Modifications</h2>
        <ul className="list-disc list-inside">
          <li>We may update these Terms at any time. Continued use constitutes acceptance.</li>
        </ul>
      </section>
    </main>
  );
};

export default TermsAndConditionsPage;
