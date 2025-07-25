"use client";

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl p-6 sm:p-8 lg:p-10 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-6 sm:mb-8">
        Refund Policy
      </h1>
      <p className="text-sm sm:text-base text-gray-500 text-center mb-8">
        Last Updated: 25 July, 2025
      </p>

      <section className="mb-8">
        <p className="mb-4 leading-relaxed">
          Thank you for choosing Campus Eats. We strive to provide a smooth and
          satisfactory food ordering experience. This Refund Policy outlines the
          conditions under which refunds may be issued, the process for
          requesting refunds, and important information about cancellations and
          dispute resolution.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          1. Overview
        </h2>
        <p className="mb-4 leading-relaxed">
          Campus Eats is a platform connecting users with independent food
          vendors/outlets. While we facilitate orders, all food preparation,
          quality, and delivery services are the vendor's responsibility.
        </p>
        <p className="mb-4 leading-relaxed">
          Refunds apply primarily to payment and service issues processed
          through our platform wallet or technical/system errors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          2. Wallet Top-Up Refunds
        </h2>
        <p className="mb-4 leading-relaxed">
          Wallet funds added via payment gateways are generally non-refundable,
          except in cases such as:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>Payment failure (e.g., double charge)</li>
          <li>Unauthorized or fraudulent transactions</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Users must report wallet top-up issues within 7 days of the
          transaction.
        </p>
        <p className="mb-4 leading-relaxed">
          Refund requests for wallet top-up problems will be reviewed and
          processed within 10 business days of verification.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          3. Order Refunds and Cancellations
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          3.1 Order Acceptance by Vendor
        </h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Vendors/outlets must accept or reject an order within 5 minutes of
            receipt.
          </li>
          <li>
            If the vendor does not respond within 5 minutes, the order will be
            automatically cancelled by Campus Eats, and the full amount will be
            refunded to the user's in-app wallet.
          </li>
          <li>
            No platform or convenience fees will be deducted from this refund.
          </li>
        </ul>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          3.2 User-Initiated Cancellation
        </h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Users may cancel an order only before the vendor accepts the order.
          </li>
          <li>
            Once an order is accepted and preparation begins, cancellations by
            users are generally not allowed.
          </li>
          <li>
            Refunds for valid cancellations will be credited to the wallet minus
            any non-refundable fees where applicable.
          </li>
        </ul>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          3.3 Partial Order Acceptance or Modifications
        </h3>
        <p className="mb-4 leading-relaxed">
          If a vendor accepts an order but notifies the user of item
          unavailability or changes (e.g., out-of-stock items), the user has the
          option to:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Accept the partial or modified order with corresponding charge
            adjustments, or
          </li>
          <li>Cancel the order entirely to receive a full refund.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Refunds or adjustments due to partial order acceptance will be
          processed promptly once confirmed.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          3.4 Issues with Delivered or In-Process Orders
        </h3>
        <p className="mb-4 leading-relaxed">
          Complaints regarding delivered or in-progress orders (e.g., missing
          items, incorrect items, food quality concerns, delayed delivery)
          should be addressed directly with the vendor/outlet, as Campus Eats
          does not mediate food quality or vendor service complaints.
        </p>
        <p className="mb-4 leading-relaxed">
          Refunds related to these issues are at the discretion of the vendor.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          3.5 Scheduled Orders
        </h3>
        <p className="mb-4 leading-relaxed">
          The same acceptance, cancellation, and refund rules apply to scheduled
          (future) orders.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          4. Refund Processing Timelines and Notifications
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Refunds due to order cancellations (auto or manual) or vendor
            rejection are processed and credited to the user's wallet within 5
            minutes.
          </li>
          <li>
            Users will receive immediate notification through:
            <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
              <li>In-app alerts</li>
              <li>Email</li>
              <li>SMS</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          5. Refund Dispute Resolution Process
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          Step 1: Submitting a Dispute
        </h3>
        <p className="mb-4 leading-relaxed">
          If you disagree with a refund decision or have concerns, contact
          Campus Eats support within 48 hours of the affected transaction.
        </p>
        <p className="mb-4 leading-relaxed">Provide:</p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>Order or wallet transaction ID</li>
          <li>Date and time of the transaction</li>
          <li>Reason for dispute</li>
          <li>
            Supporting evidence (screenshots, photos, communication, if
            applicable)
          </li>
        </ul>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          Step 2: Initial Review
        </h3>
        <p className="mb-4 leading-relaxed">
          Campus Eats support will acknowledge receipt of your dispute within 1
          business day and may request additional info.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          Step 3: Resolution Decision
        </h3>
        <p className="mb-4 leading-relaxed">
          A resolution will be provided within 5 business days after all info is
          received.
        </p>
        <p className="mb-4 leading-relaxed">Possible outcomes:</p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>Approval of full or partial refund credited to wallet</li>
          <li>Explanation of denial based on policy</li>
          <li>Alternative offers or compensation where applicable</li>
        </ul>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          Step 4: Escalation
        </h3>
        <p className="mb-4 leading-relaxed">
          If you are dissatisfied, request escalation within 3 business days of
          decision notice.
        </p>
        <p className="mb-4 leading-relaxed">
          The escalation will be reviewed and responded to within 7 business
          days.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          Step 5: Final Resolution
        </h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>Campus Eats' decision after escalation is final and binding.</li>
          <li>
            Unresolved disputes beyond this may be subject to arbitration per
            the Terms and Conditions.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          6. Non-Refundable Situations
        </h2>
        <p className="mb-4 leading-relaxed">
          Campus Eats will not issue refunds for:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>Personal dissatisfaction due to taste or preference</li>
          <li>Minor delivery delays caused by vendors or third parties</li>
          <li>User errors during order placement (wrong items, quantities)</li>
          <li>
            Refund requests made after stipulated time frames (e.g., beyond 48
            hours for dispute)
          </li>
          <li>
            Orders cancelled or refused by users after vendor acceptance without
            valid cause
          </li>
          <li>
            Platform or convenience fees except when errors or outages are
            involved
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          7. Platform Charges and Fees
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Platform convenience fees are non-refundable except in cases where
            the platform is at fault.
          </li>
          <li>
            Refunds generally only cover the wallet amount spent on the order.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          8. Fraudulent or Unauthorized Transactions
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Users must report suspected unauthorized or fraudulent transactions
            immediately.
          </li>
          <li>
            Campus Eats will investigate and refund verified fraudulent
            transactions considering applicable policies.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          9. Changes to This Refund Policy
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Campus Eats may update or amend this Refund Policy at any time.
          </li>
          <li>
            Significant changes will be communicated via email or in-app
            notifications.
          </li>
          <li>
            Your continued use of Campus Eats after such changes implies
            acceptance.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          10. How to Request a Refund
        </h2>
        <p className="mb-4 leading-relaxed">
          To request a refund, contact Campus Eats through any of the following:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Email:{" "}
            <a
              href="mailto:contact@campuseats.in"
              className="text-purple-700 hover:underline"
            >
              contact@campuseats.in
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+917717650277"
              className="text-purple-700 hover:underline"
            >
              +91 77176-50277
            </a>
          </li>
          <li>
            Website Contact Form:{" "}
            <a
              href="https://campuseats.in/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline"
            >
              https://campuseats.in/contact
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
