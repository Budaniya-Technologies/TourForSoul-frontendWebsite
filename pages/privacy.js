import React from "react";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-5">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-3">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mt-4">
          Welcome to our Privacy Policy. Your privacy is critically important to us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">1. Information We Collect</h2>
        <p className="text-gray-700 mt-2">
          We collect personal information such as your name, email, phone number, and payment details when you register on our platform. Additionally, we may collect usage data like IP address, browser type, and interaction history.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">2. How We Use Your Information</h2>
        <p className="text-gray-700 mt-2">
          We use your information to:
          <ul className="list-disc list-inside mt-2">
            <li>Provide and maintain our services.</li>
            <li>Process transactions and send confirmations.</li>
            <li>Improve our website and personalize your experience.</li>
            <li>Send marketing and promotional materials (with your consent).</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">3. Data Protection</h2>
        <p className="text-gray-700 mt-2">
          We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">4. Your Rights</h2>
        <p className="text-gray-700 mt-2">
          You have the right to:
          <ul className="list-disc list-inside mt-2">
            <li>Access, modify, or delete your personal data.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request data portability.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">5. Changes to This Policy</h2>
        <p className="text-gray-700 mt-2">
          We may update this policy from time to time. Any changes will be posted on this page.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">6. Contact Us</h2>
        <p className="text-gray-700 mt-2">
          If you have any questions about our Privacy Policy, please contact us at <span className="text-blue-600 font-medium">contacttourforsoul@gmail.com</span>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
