"use client"

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Terms & Conditions</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-8">By accessing or using Campus Eats, you agree to the following terms:</p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. User Eligibility</h2>
        <p className="text-gray-700 mb-6">Campus Eats is for students and staff of registered colleges only.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
        <p className="text-gray-700 mb-6">
          We act as an aggregator for college canteens and local vendors to provide scheduled food pickup and delivery
          services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Provide accurate information.</li>
          <li>Use the app only for lawful purposes.</li>
          <li>Respect order pickup slots and delivery protocols.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payments</h2>
        <p className="text-gray-700 mb-6">
          Payments are made through integrated payment gateways. Campus Eats does not store card details.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Order Fulfillment</h2>
        <p className="text-gray-700 mb-6">
          While we aim for timely deliveries, delays can occur due to vendor or logistics issues. In such cases, support
          will assist.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
        <p className="text-gray-700 mb-6">
          Campus Eats is not liable for food quality, vendor errors, or delays beyond reasonable control.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
        <p className="text-gray-700 mb-8">
          We reserve the right to update these terms. Continued use implies acceptance of changes.
        </p>

        <hr className="border-gray-300 my-8" />

        <p className="text-sm text-gray-500 text-center mb-4">
          These terms and conditions are effective immediately upon your use of the Campus Eats platform.
        </p>
        <p className="text-sm text-gray-500 text-center">
          For questions about these terms, contact us at{" "}
          <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 underline">
            support@campuseats.in
          </a>
        </p>
      </div>
    </div>
  )
}
