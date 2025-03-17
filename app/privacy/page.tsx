import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-700">Last Updated: March 18, 2025</p>
        </header>

        <main className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-black mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to our Privacy Policy. This document explains how we
            collect, use, and protect your personal information when you use our
            services. We respect your privacy and are committed to protecting
            your personal data. Please read this privacy policy carefully to
            understand how we handle your information.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We may collect various types of information, including but not
            limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li>Usage data (How you interact with our services)</li>
            <li>Device and connection information</li>
            <li>Cookies and tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            The information we collect may be used for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information to improve our services
            </li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-700 mb-6">
            The security of your data is important to us. We strive to use
            commercially acceptable means to protect your personal information,
            but we cannot guarantee its absolute security. We implement
            appropriate technical and organizational measures to ensure a level
            of security appropriate to the risk.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            5. Third-Party Services
          </h2>
          <p className="text-gray-700 mb-6">
            Our service may contain links to other sites that are not operated
            by us. If you click on a third-party link, you will be directed to
            that third party's site. We strongly advise you to review the
            Privacy Policy of every site you visit. We have no control over and
            assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>
              By email:{" "}
              <a
                href="mailto:privacy@example.com"
                className="text-rose-600 hover:text-rose-600"
              >
                abhishekbansal2312@gmail.com
              </a>
            </li>
            <li>
              By phone:{" "}
              <a
                href="tel:+9897652706"
                className="text-rose-600 hover:text-rose-600"
              >
                +91 9897652706
              </a>
            </li>
          </ul>
        </main>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-rose-600 text-center mb-4">
            Protecting your privacy is our top priority
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
