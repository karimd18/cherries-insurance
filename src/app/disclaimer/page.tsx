'use client';

import React from 'react';

const DisclaimerPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="mb-6"><strong>Effective Date:</strong> July 19, 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Informational Only</h2>
        <p>
          The content on this website is for general information and does not constitute legal or financial advice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. No Coverage Guarantee</h2>
        <p>
          Quotes and coverage availability are subject to underwriting review. Submitting a quote does not guarantee approval or binding of insurance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Errors and Omissions</h2>
        <p>
          We strive for accuracy, but we do not warrant the completeness or timeliness of all information. Always consult directly with a licensed agent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. External Links</h2>
        <p>
          We are not responsible for content or practices of linked third-party websites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>
          We are not liable for any damages resulting from the use of this site or delays in service availability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
        <p>
          If you have any questions, please contact us at <a href="mailto:info@cherriesinsurance.com" className="underline">info@cherriesinsurance.com</a>.
        </p>
      </section>
    </main>
  );
};

export default DisclaimerPage;
