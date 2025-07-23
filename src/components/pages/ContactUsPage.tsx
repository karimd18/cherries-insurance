import React from "react";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";

import Hero from "@/components/ui/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const ContactUsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Let’s Connect"
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

            {/* Right: Contact Form */}
            <div>
              <SectionTitle title="Send Us a Message" />
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1" htmlFor="name">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
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
                    type="tel"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1" htmlFor="topic">
                    What do you need help with?
                  </label>
                  <select id="topic" className="w-full border rounded p-2">
                    <option>Auto</option>
                    <option>Home</option>
                    <option>Renters</option>
                    <option>Business</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="contactMethod"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    className="w-full border rounded p-2"
                  >
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                </div>
                <div className="text-right">
                  <Button type="submit" variant="primary">
                    Submit Message <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
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
