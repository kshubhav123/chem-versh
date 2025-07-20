"use client";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Terms & Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Use of Website
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This website is for information and business inquiry purposes only.
            By using the site, you agree not to misuse it or submit false
            information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Product Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All product details are indicative. Final specifications, pricing,
            and availability will be confirmed after inquiry.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Quotations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Submitting a form does not confirm an order. Prices are subject to
            change based on availability and requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content, images, and logos are the property of Supercon
            Chemicals. Unauthorized use is prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not responsible for any indirect or consequential damages
            arising from the use of this website or product delays.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Changes</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these terms at any time without prior notice.
            Continued use implies acceptance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
