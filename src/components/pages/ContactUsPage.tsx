'use client';

import React, { useRef, useState } from "react";
import { Mail, Phone, Clock, ArrowRight, CheckCircle, X } from "lucide-react";

import Hero from "@/components/ui/Hero";
import SectionTitle from "@/components/ui/SectionTitle";

const ContactUsPage: React.FC = () => {
  // toast + submit state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // refs to detect real submit and reset form after iframe loads
  const submittedRef = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  // when the user clicks submit, we let the browser POST into the hidden iframe
  const handleSubmit = () => {
    submittedRef.current = true;
    setIsSubmitting(true);
  };

  // iframe loads once initially; ignore that. After a submit, treat the load as success.
  const handleIframeLoad = () => {
    if (!submittedRef.current) return;
    submittedRef.current = false;

    setIsSubmitting(false);
    setShowToast(true);
    // reset the form fields
    formRef.current?.reset();

    // auto-hide toast after 5s
    const t = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(t);
  };

  return (
    <>
      {/* Success Toast */}
      <div
        className={`fixed top-6 right-6 z-[9999] transition-all duration-300 ease-out ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        role="status"
        aria-live="assertive"
      >
        <div className="flex items-start gap-3 rounded-lg bg-green-600 text-white shadow-xl px-4 py-3 min-w-[280px]">
          <CheckCircle className="w-5 h-5 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Message sent</p>
            <p className="opacity-90">Thanks! We’ll get back to you shortly.</p>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="ml-auto opacity-80 hover:opacity-100"
            aria-label="Close notification"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hidden iframe target to prevent page refresh */}
      <iframe
        name="formsubmit_iframe"
        className="hidden"
        onLoad={handleIframeLoad}
      />

      {/* Hero Section */}
      <Hero
        title="Contact US"
        subtitle={`Have a question, need a quote, or just not finding what you’re looking for?
We’re here to help — with fast answers, friendly support, and no pressure.`}
        image="/contact/contact-bg.png"
        imageAlt="Overhead view of a person using a laptop, representing easy online communication and support"
        showTrustBadges={false}
      />

      {/* How to Reach Us */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle
            title="How to Reach Us"
            subtitle="We respond quickly, clearly, and always on your terms"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Methods */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Mail className="w-6 h-6" /> Email Us
                </h3>
                <p className="text-neutral-600 mb-1">
                  General Inquiries:{" "}
                  <a
                    href="mailto:info@cherriesinsurance.com"
                    className="underline"
                  >
                    info@cherriesinsurance.com
                  </a>
                </p>
                <p className="text-neutral-600 mb-1">
                  Support:{" "}
                  <a
                    href="mailto:support@cherriesinsurance.com"
                    className="underline"
                  >
                    support@cherriesinsurance.com
                  </a>
                </p>
                <p className="text-neutral-600">
                  Sales & Quotes:{" "}
                  <a
                    href="mailto:sales@cherriesinsurance.com"
                    className="underline"
                  >
                    sales@cherriesinsurance.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Phone className="w-6 h-6" /> Call or Text Us
                </h3>
                <p className="text-neutral-600">
                  Business Line:{" "}
                  <a href="tel:781-214-0907" className="underline">
                    781-214-0907
                  </a>
                </p>
                <p className="text-neutral-600">
                  Calls outside hours go to voicemail — or just send us an
                  email. Either way, we’ll follow up promptly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-6 h-6" /> Business Hours
                </h3>
                <p className="text-neutral-600">Monday–Friday, 9 AM–4 PM EST</p>
              </div>
            </div>

            {/* Right: Contact Form (hidden-iframe submit, no refresh) */}
            <div>
              <SectionTitle title="Send Us a Message" />

              <form
                ref={formRef}
                className="space-y-4"
                action="https://formsubmit.co/info@cherriesinsurance.com"
                method="POST"
                target="formsubmit_iframe"
                onSubmit={handleSubmit}
              >
                {/* FormSubmit helpers */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New contact message — Cherries Insurance" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="block font-medium mb-1" htmlFor="name">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="email">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="phone">
                    Phone Number (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="subject">
                    What do you need help with?
                  </label>
                  <select id="subject" name="subject" className="w-full border rounded p-2">
                    <option value="Auto">Auto</option>
                    <option value="Home">Home</option>
                    <option value="Renters">Renters</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="contactMethod">
                    Preferred Contact Method
                  </label>
                  <select id="contactMethod" name="method" className="w-full border rounded p-2">
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md px-5 py-2.5 font-semibold
                               bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {isSubmitting ? "Sending…" : (
                      <>
                        Submit Message <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
