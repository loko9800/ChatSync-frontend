import React from "react";

const PolicyPage = () => {
  return (
    <div className="min-h-screen pt-20 pl-24 pr-8 bg-base-100 text-base-content">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-base leading-relaxed">
          At ChatSync, your privacy is a top priority. This Privacy Policy outlines how we collect,
          use, and protect your data when you use our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Data Collection</h2>
        <p className="text-base leading-relaxed">
          We only collect necessary information, such as your name, email address, and usage data
          to provide a seamless chat experience. Your messages are securely stored and never shared
          with third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Data Usage</h2>
        <p className="text-base leading-relaxed">
          We use your data solely to maintain your account, enhance functionality, and improve
          user experience. We do not sell or misuse your information in any way.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Security</h2>
        <p className="text-base leading-relaxed">
          All data is encrypted and stored securely. We follow best practices in data protection
          to prevent unauthorized access and breaches.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p className="text-base leading-relaxed">
          You have the right to access, update, or delete your personal data at any time. You can
          manage your data preferences in your profile settings or contact support.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
        <p className="text-base leading-relaxed">
          We may update our Privacy Policy occasionally to reflect new practices or legal
          requirements. Changes will be communicated via the app or email.
        </p>
      </section>

      <footer className="text-sm text-gray-500 mt-10">
        Last updated: April 2025
      </footer>
    </div>
  );
};

export default PolicyPage;