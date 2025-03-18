import React from "react";

function TermsOfService() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-5">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-3">
          Terms of Service
        </h1>

        <p className="text-gray-700 mt-4">
          Welcome to our Terms of Service. By using our services, you agree to the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mt-2">
          By accessing or using our website, you agree to comply with these Terms of Service. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">2. User Responsibilities</h2>
        <p className="text-gray-700 mt-2">
          You agree to use our services lawfully and responsibly. Prohibited activities include, but are not limited to:
          <ul className="list-disc list-inside mt-2">
            <li>Engaging in fraudulent or illegal activities.</li>
            <li>Violating intellectual property rights.</li>
            <li>Disrupting our platform or services.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">3. Account Registration</h2>
        <p className="text-gray-700 mt-2">
          To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">4. Service Availability</h2>
        <p className="text-gray-700 mt-2">
          We strive to provide uninterrupted service but do not guarantee availability at all times. We may suspend or terminate services at our discretion.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">5. Limitation of Liability</h2>
        <p className="text-gray-700 mt-2">
          We are not responsible for any damages or losses resulting from the use of our services. Use our platform at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">6. Changes to Terms</h2>
        <p className="text-gray-700 mt-2">
          We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">7. Contact Information</h2>
        <p className="text-gray-700 mt-2">
          If you have any questions about these Terms of Service, please contact us at <span className="text-blue-600 font-medium">contacttourforsoul@gmail.com</span>.
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
