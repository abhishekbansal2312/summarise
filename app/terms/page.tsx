import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-700">Last Updated: March 18, 2025</p>
        </header>

        <main className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-black mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-6">
            By accessing or using our service, you agree to be bound by these
            Terms of Service. If you disagree with any part of the terms, you
            may not access the service. These Terms of Service constitute the
            entire agreement between you and our company regarding the use of
            our services.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">2. Services</h2>
          <p className="text-gray-700 mb-6">
            Our service provides users with access to [description of services].
            We reserve the right to withdraw or amend our service, and any
            service or material we provide via the service, in our sole
            discretion without notice. We will not be liable if for any reason
            all or any part of the service is unavailable at any time or for any
            period.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            3. User Accounts
          </h2>
          <p className="text-gray-700 mb-6">
            When you create an account with us, you must provide information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of your account on our service. You are responsible for
            safeguarding the password that you use to access the service and for
            any activities or actions under your password. You agree not to
            disclose your password to any third party. You must notify us
            immediately upon becoming aware of any breach of security or
            unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-6">
            The service and its original content, features, and functionality
            are and will remain the exclusive property of our company and its
            licensors. The service is protected by copyright, trademark, and
            other laws of both the United States and foreign countries. Our
            trademarks and trade dress may not be used in connection with any
            product or service without the prior written consent of our company.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            5. User Content
          </h2>
          <p className="text-gray-700 mb-6">
            Our service may allow you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material. You are responsible for the content that you post to the
            service, including its legality, reliability, and appropriateness.
            By posting content to the service, you grant us the right to use,
            modify, publicly perform, publicly display, reproduce, and
            distribute such content on and through the service. You retain any
            and all of your rights to any content you submit, post or display on
            or through the service and you are responsible for protecting those
            rights.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">6. Termination</h2>
          <p className="text-gray-700 mb-6">
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms. Upon termination, your right to
            use the service will immediately cease. If you wish to terminate
            your account, you may simply discontinue using the service.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-6">
            In no event shall our company, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of
            or inability to access or use the service.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">
            8. Changes to Terms
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. What constitutes a material change will be
            determined at our sole discretion. By continuing to access or use
            our service after those revisions become effective, you agree to be
            bound by the revised terms. If you do not agree to the new terms,
            please stop using the service.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about these Terms, please contact us:
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
            Thank you for trusting our services
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
