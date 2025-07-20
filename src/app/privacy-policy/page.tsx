"use client";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Data Collected
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We collect your name, email, phone, city, and product interest
            through our forms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Purpose</h2>
          <p className="text-gray-600 leading-relaxed">
            Your data is used only to respond to your inquiries or provide
            quotations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Data Sharing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your data. It may be shared only with relevant
            suppliers or logistics partners to serve your request.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We take reasonable steps to protect your personal data from misuse
            or unauthorized access.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You may request to access, correct, or delete your data by
            contacting us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            We use basic cookies to enhance browsing. You can manage this via
            your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Email:{" "}
            <a
              href="mailto:sales@superconchem.com"
              className="text-blue-600 hover:underline"
            >
              sales@superconchem.com
            </a>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Phone:{" "}
            <a href="tel:+9140147991" className="text-blue-600 hover:underline">
              +91-40147991
            </a>{" "}
            /{" "}
            <a href="tel:+9140165308" className="text-blue-600 hover:underline">
              +91-40165308
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
