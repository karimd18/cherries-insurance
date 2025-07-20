'use client';

import React from 'react';

const AccessibilityStatementPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-4">Accessibility Statement</h1>
      <p className="mb-6"><strong>Effective Date:</strong> July 19, 2025</p>
      <p className="mb-8">
        Cherries Insurance Agency LLC is committed to providing a website that is accessible to individuals with disabilities. We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Accessibility Goals</h2>
        <ul className="list-disc list-inside">
          <li>Ensure all users can navigate and interact with our website effectively.</li>
          <li>Offer alternative contact methods (e.g., email) for assistance.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Feedback</h2>
        <p className="mb-4">
          If you encounter any accessibility barriers while using our site, please let us know:
        </p>
        <p>
          Email: <a href="mailto:info@cherriesinsurance.com" className="underline">info@cherriesinsurance.com</a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Future Improvements</h2>
        <p>
          We are actively reviewing our website for improvements to ensure digital accessibility and inclusiveness.
        </p>
      </section>
    </main>
  );
};

export default AccessibilityStatementPage;
    