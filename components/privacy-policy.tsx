"use client"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-8">
          Campus Eats is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

        <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
        <p className="text-gray-700 mb-4">Name, email, contact number, college ID, and address.</p>

        <h3 className="text-xl font-medium text-gray-800 mb-3">Transaction Data</h3>
        <p className="text-gray-700 mb-4">
          Order history, payment information (processed via secure third-party payment gateways).
        </p>

        <h3 className="text-xl font-medium text-gray-800 mb-3">Usage Data</h3>
        <p className="text-gray-700 mb-6">Device information, IP address, browser type, and usage patterns.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>To provide food delivery and pickup services.</li>
          <li>To personalize user experience.</li>
          <li>To process transactions and send confirmations.</li>
          <li>To respond to customer service requests.</li>
          <li>To improve our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sharing of Information</h2>
        <p className="text-gray-700 mb-4">We do not sell your data. We may share limited data with:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Delivery vendors for order fulfillment.</li>
          <li>Payment partners (Razorpay, etc.) for transaction processing.</li>
          <li>Legal authorities when required by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
        <p className="text-gray-700 mb-4">You can:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Access and update your personal information.</li>
          <li>Request deletion of your data.</li>
          <li>Opt out of marketing communication.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
        <p className="text-gray-700 mb-6">We implement encryption and access controls to protect your data.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-700 mb-8">
          For privacy-related concerns, email us at{" "}
          <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 underline">
            support@campuseats.in
          </a>
        </p>

        <hr className="border-gray-300 my-8" />

        <p className="text-sm text-gray-500 text-center">
          This privacy policy is effective immediately and will remain in effect except with respect to any changes in
          its provisions in the future.
        </p>
      </div>
    </div>
  )
}
