"use client"

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Refund Policy</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-8">We want you to have a smooth experience. Here's our refund policy:</p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility</h2>
        <p className="text-gray-700 mb-4">Refunds are considered in the following cases:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>You were charged but the order wasn't fulfilled.</li>
          <li>The order was canceled by Campus Eats or Vendor.</li>
          <li>Wrong item delivered and not rectified within 30 minutes.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Process</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Contact our support within 2 hours of issue.</li>
          <li>Refunds (if approved) will be credited within 5–7 working days to the original payment method.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Refundable Cases</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>If you cancel after food preparation begins.</li>
          <li>Complaints raised after 2 hours of delivery/pickup.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Time</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            <strong>Refund Timeline:</strong> 5-7 working days from approval
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Reporting Window:</strong> Within 2 hours of delivery/pickup
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-700 mb-8">
          For refunds, email{" "}
          <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 underline">
            support@campuseats.in
          </a>{" "}
          with your order ID and issue details.
        </p>

        <hr className="border-gray-300 my-8" />

        <p className="text-sm text-gray-500 text-center mb-4">
          This refund policy applies to all orders placed through the Campus Eats platform.
        </p>
        <p className="text-sm text-gray-500 text-center">
          We reserve the right to investigate all refund requests and may require additional documentation.
        </p>
      </div>
    </div>
  )
}
