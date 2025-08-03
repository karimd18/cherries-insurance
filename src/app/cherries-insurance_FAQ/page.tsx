'use client';

import React from 'react';

const FAQPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-4 text-center">Cherries Insurance - Frequently Asked Questions</h1>

      {/* 1. About Cherries Insurance */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> About Cherries Insurance</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: What type of insurance do you offer?</strong>
            <br />
            A: We specialize in Property & Casualty insurance across personal and commercial linesincluding auto, home, renters, motorcycle, yacht, Business Owners Policies (BOP), commercial auto, and more.
          </li>
          <li>
            <strong>Q: Where are you licensed and where do you serve?</strong>
            <br />
            A: Our agency is licensed in Massachusetts, serving personal insurance clients statewide. We work with a national network of top-rated carriers to provide business insurance solutions across the U.S.
          </li>
          <li>
            <strong>Q: How do you differ from other agents or online brokers?</strong>
            <br />
            A: We combine the convenience of digital quoting with personalized serviceno cold calls, no spam, just efficient support. We guide you through the process from quote to policy, and continue to support you afterward.
          </li>
        </ul>
      </section>

      {/* 2. Personal Insurance */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Personal Insurance</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: Can I get a quote online and buy immediately?</strong>
            <br />
            A: Yesyou can start a quote anytime on our website. Depending on the carrier, you may be able to bind the policy online or with a quick follow-up call.
          </li>
          <li>
            <strong>Q: How much coverage do I need?</strong>
            <br />
            A: Coverage depends on several factors (vehicle/home value, liability exposure, drivers, location). We'll help determine needs based on your personal situation.
          </li>
          <li>
            <strong>Q: What affects my premium?</strong>
            <br />
            A: Premiums reflect risk factors such as coverage limits, deductibles, location, claims history, home type, vehicle usage, and more.
          </li>
        </ul>
      </section>

      {/* 3. Business Insurance */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Business Insurance</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: What is a Business Owners Policy (BOP)?</strong>
            <br />
            A: A BOP bundles commercial property, general liability, and business income/interruption into one policy, providing broad but affordable protection for small businesses.
          </li>
          <li>
            <strong>Q: What does a BOP coverand what doesnt it?</strong>
            <br />
            A: A typical BOP includes replacement cost coverage, liability, and business interruption. It excludes professional liability, workers comp, and commercial auto.
          </li>
          <li>
            <strong>Q: Am I eligible for a BOP?</strong>
            <br />
            A: Most low- to moderate-risk businesses qualifythese include retail, contractors, offices, salons, restaurants, and more.
          </li>
          <li>
            <strong>Q: How much coverage should I buy?</strong>
            <br />
            A: Standard BOPs often carry $1M per claim / $2M aggregate liability limits. Property and income limits depend on your assets and exposure.
          </li>
          <li>
            <strong>Q: Are there additional coverage options?</strong>
            <br />
            A: Yes, common add-ons include commercial auto, E&O, cyber liability, equipment breakdown, and more.
          </li>
          <li>
            <strong>Q: Does a BOP cover vehicles or professional mistakes?</strong>
            <br />
            A: Nobusiness auto, professional liability (E&O), and workers compensation are separate policies.
          </li>
        </ul>
      </section>

      {/* 4. Quotes & Purchasing */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Quotes & Purchasing</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: How do I request a quote?</strong>
            <br />
            A: Simply click 'Get a Quote' on our website, choose your coverage type, and provide basic info. We'll handle the rest from there.
          </li>
          <li>
            <strong>Q: Will I have to talk to someone?</strong>
            <br />
            A: Only if you'd like guidance. Otherwise, we respect your privacyeverything can be handled via email or portal.
          </li>
          <li>
            <strong>Q: How quickly can I get covered?</strong>
            <br />
            A: Many personal policies are bound same-day. Business policies often issue within 2448 hours depending on underwriting.
          </li>
        </ul>
      </section>

      {/* 5. Policy Management & Claims */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Policy Management & Claims</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: How do I pay for my policy?</strong>
            <br />
            A: Payments are made directly through the carriers secure billing portal. No need to provide payment through us.
          </li>
          <li>
            <strong>Q: How do I file a claim?</strong>
            <br />
            A: Contact your carriers claims department directly. Were on standby to assist and support you throughout the process.
          </li>
          <li>
            <strong>Q: Can I make changes after purchase?</strong>
            <br />
            A: Absolutely. Contact us anytime to add coverage, increase/decrease limits, or update your policy.
          </li>
        </ul>
      </section>

      {/* 6. Pricing & Discounts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pricing & Discounts</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: How much will it cost?</strong>
            <br />
            A: Rates depend on many factorspolicy type, limit choices, location, risk class, and more. Business insurance typically ranges from $40115/month for BOPs, and $25165/month for other coverages.
          </li>
          <li>
            <strong>Q: Are there discounts available?</strong>
            <br />
            A: Yescommon discounts include multi-policy bundling, higher deductibles, claims-free history, and safety features (e.g., security devices in homes or fleet tracking).
          </li>
        </ul>
      </section>

      {/* 7. Privacy & Security */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Privacy & Security</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: Will you share my personal data?</strong>
            <br />
            A: Never. We only share data needed for underwriting and quoting with licensed carriers. We dont sell your data or use it beyond your authorization.
          </li>
          <li>
            <strong>Q: Can I opt out of marketing emails?</strong>
            <br />
            A: Yesevery email includes an unsubscribe link, and we respect do-not-contact requests.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FAQPage;
