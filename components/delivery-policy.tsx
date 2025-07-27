"use client";

export default function DeliveryPolicy() {
  return (
    <div className="max-w-4xl mx-auto  p-6 sm:p-8 lg:p-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-6 sm:mb-8">
        Delivery Policy
      </h1>
      <p className="text-sm sm:text-base text-gray-500 text-center mb-8">
        Last Updated: 27 July, 2025
      </p>

      <section className="mb-8">
        <p className="mb-4 leading-relaxed">
          At Campus Eats, we strive to ensure every order reaches you quickly,
          safely, and conveniently. This Delivery Policy explains how deliveries
          are handled, user and outlet responsibilities, delivery fees,
          standards, and processes for handling exceptions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          1. Delivery Staffing & Responsibility
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Current Model:</strong> All deliveries are currently handled
            exclusively by the food outlet's own staff. Campus Eats monitors
            compliance but does not directly employ delivery personnel at this
            stage.
          </li>
          <li>
            <strong>Future Model:</strong> Campus Eats may, in the future,
            deploy its own dedicated delivery team.
          </li>
          <li>
            <strong>Outlet-Managed Delivery:</strong> Outlets may continue to
            use their own delivery staff, provided they meet Campus Eats'
            delivery and conduct standards. Deliveries are managed, tracked, and
            monitored via the Campus Eats platform.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          2. Delivery Area and Limitations
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Within Campus Only:</strong> Deliveries are exclusively
            available within the boundaries of the college campus.
          </li>
          <li>
            <strong>No Distance Restrictions:</strong> There is no minimum or
            maximum distance limitation within the campus.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          3. Delivery Fees
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Set by Outlets:</strong> Each outlet sets its own delivery
            fee, which may be free, flat, or variable.
          </li>
          <li>
            <strong>Fee Split:</strong> The fee is shared between the outlet and
            Campus Eats as per the vendor agreement.
          </li>
          <li>
            <strong>Fee Disclosure:</strong> Users see the delivery fee before
            order confirmation.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          4. Order Preparation & Packaging
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Responsibility:</strong> Outlets are responsible for
            preparing and hygienically packaging all orders.
          </li>
          <li>
            <strong>Packaging Standards:</strong> Campus Eats monitors for
            adherence to food safety and spill prevention.
          </li>
          <li>
            <strong>Notifications:</strong> Users are notified when their order
            is out for delivery, via push and WhatsApp notifications.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          5. Delivery Timeframe and Restrictions
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Standard Time:</strong> Delivery is typically 10-40 minutes
            after the order is marked "ready."
          </li>
          <li>
            <strong>Events & Special Hours:</strong> The college may restrict
            delivery during certain campus events or exams. Users will be
            notified of any blackout periods.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          6. Late or Failed Deliveries
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Late Delivery (Outlet-Managed):</strong> If an outlet
            regularly delivers late, Campus Eats may take corrective action,
            including warnings, penalties, or investigation of complaints.
          </li>
          <li>
            <strong>Late Delivery (Campus Eats-Managed, Future):</strong> When
            Campus Eats manages delivery, delays are handled and compensated as
            per Campus Eats' policies.
          </li>
          <li>
            <strong>Failed Delivery/Recipient Not Present:</strong> If the user
            is not present:
            <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
              <li>
                The delivery person will attempt to call and wait briefly.
              </li>
              <li>
                If still uncollected, the order may be returned or left at a
                designated pick-up point with user notification.
              </li>
              <li>
                Refunds are not guaranteed if the failure is due to the
                recipient's absence.
              </li>
            </ul>
          </li>
          <li>
            <strong>Reporting:</strong> Issues can be reported through in-app
            support, phone, or email.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          7. Delivery Verification & Order Handover
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Verification:</strong> The recipient must show or provide
            the one-time code from the Campus Eats app to receive the order.
          </li>
          <li>
            <strong>Unverified Handover:</strong> If the user is unreachable or
            has no code, the failed delivery protocol applies.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          8. Contactless Delivery
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Option Available:</strong> Contactless delivery can be
            selected at checkout. Orders are left at a safe location, with
            notification sent to the user.
          </li>
          <li>
            <strong>Collection Window:</strong> Orders should be collected
            within 15 minutes. Campus Eats or the outlet is not responsible for
            loss after this period.
          </li>
          <li>
            <strong>Health & Safety:</strong> Strict hygiene protocols are
            observed in all deliveries.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          9. Special Instructions & Allergy Disclosures
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Instructions:</strong> Users can add delivery instructions
            or pick-up details at checkout.
          </li>
          <li>
            <strong>Allergies:</strong> Users may specify allergies; outlets are
            required to follow instructions and label allergen-free orders as
            appropriate.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          10. Disputes, Complaints, and Support
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            <strong>Reporting:</strong> Any delivery issues should be reported
            via the app, email (contact@campuseats.in), or phone (+91
            77176-50277).
          </li>
          <li>
            <strong>Resolution:</strong> Campus Eats and the outlet will
            investigate and resolve complaints. Remedies may include refunds,
            promo credits, or compensation, as per the Refund Policy.
          </li>
          <li>
            <strong>Escalation:</strong> Unresolved issues may be escalated per
            the Campus Eats dispute process.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
          11. Amendments & Contact
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>
            Campus Eats may revise this Delivery Policy at any time. Users and
            vendors will be notified of significant changes.
          </li>
          <li>
            For all vendor-related queries, support, or escalation:
            <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@campuseats.in"
                  className="text-purple-600 hover:underline"
                >
                  contact@campuseats.in
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+917717650277"
                  className="text-purple-600 hover:underline"
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
                  className="text-purple-600 hover:underline"
                >
                  https://campuseats.in/contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4 leading-relaxed">
          By using Campus Eats, all users and vendors agree to this Delivery
          Policy in conjunction with the Terms of Service, Refund Policy, and
          Vendor Agreement.
        </p>
      </section>
    </div>
  );
}
