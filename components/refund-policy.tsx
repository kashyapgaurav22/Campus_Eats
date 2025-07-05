"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CreditCardIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  AlertCircleIcon,
  RefreshCwIcon,
  DollarSignIcon,
  PhoneIcon,
} from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline">Last Updated: January 15, 2025</Badge>
          <Badge variant="outline">Version 2.0</Badge>
        </div>
        <p className="text-muted-foreground">
          Our commitment to customer satisfaction includes a fair and transparent refund policy.
        </p>
      </div>

      <Alert className="mb-8">
        <CheckCircleIcon className="h-4 w-4" />
        <AlertDescription>
          We want you to be completely satisfied with your Campus Eats experience. If you're not happy with your order,
          we're here to help make it right.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSignIcon className="h-5 w-5" />
              Refund Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                Eligible for Full Refund
              </h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Order was not delivered within 2 hours of estimated time</li>
                <li>Incorrect order delivered (completely wrong items)</li>
                <li>Food quality issues (spoiled, contaminated, or inedible)</li>
                <li>Missing items worth more than 25% of order value</li>
                <li>Order cancelled by restaurant after payment</li>
                <li>Technical errors resulting in duplicate charges</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <RefreshCwIcon className="h-4 w-4 text-blue-500" />
                Eligible for Partial Refund or Credit
              </h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Minor missing items (less than 25% of order value)</li>
                <li>Food temperature issues (cold when should be hot)</li>
                <li>Minor order modifications not fulfilled</li>
                <li>Delivery delays between 1-2 hours</li>
                <li>Packaging issues affecting food presentation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircleIcon className="h-4 w-4 text-red-500" />
                Not Eligible for Refund
              </h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Change of mind after order confirmation</li>
                <li>Dietary preferences not specified during ordering</li>
                <li>Delays due to weather or circumstances beyond our control</li>
                <li>Orders consumed in full before reporting issues</li>
                <li>Requests made more than 24 hours after delivery</li>
                <li>Fraudulent or abusive refund requests</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              Refund Process and Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How to Request a Refund</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Contact our support team within 24 hours of delivery</li>
                <li>Provide your order number and describe the issue</li>
                <li>Submit photos if applicable (for quality issues)</li>
                <li>Our team will review and respond within 2 business hours</li>
                <li>Approved refunds are processed immediately</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Processing Times</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Campus Eats Credits</h4>
                  <p className="text-sm text-muted-foreground">Instant - Available immediately in your account</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Credit/Debit Cards</h4>
                  <p className="text-sm text-muted-foreground">3-5 business days to appear on statement</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Digital Wallets</h4>
                  <p className="text-sm text-muted-foreground">1-3 business days (Apple Pay, Google Pay)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Campus Meal Plans</h4>
                  <p className="text-sm text-muted-foreground">Next business day (processed by university)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCardIcon className="h-5 w-5" />
              Refund Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Original Payment Method</h3>
              <p className="text-muted-foreground mb-4">
                Refunds are typically processed to your original payment method. This ensures security and compliance
                with financial regulations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Campus Eats Credits</h3>
              <p className="text-muted-foreground mb-2">
                For faster resolution, we may offer Campus Eats credits that include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>10% bonus value on refund amount</li>
                <li>Instant availability for future orders</li>
                <li>No expiration date</li>
                <li>Can be combined with promotions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Special Circumstances</h3>
              <p className="text-muted-foreground">
                In cases where the original payment method is unavailable, we may issue credits or work with you to find
                an alternative solution.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Cancellation Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Before Restaurant Confirmation</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Full refund available immediately</li>
                <li>No cancellation fees</li>
                <li>Instant processing to original payment method</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">After Restaurant Confirmation</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Cancellation subject to restaurant policy</li>
                <li>May incur preparation fees if food has started cooking</li>
                <li>Partial refunds may apply based on order status</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">During Delivery</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Orders cannot be cancelled once out for delivery</li>
                <li>Contact support for assistance with delivery issues</li>
                <li>Refunds available for non-delivery situations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Special Situations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Weather-Related Issues</h3>
              <p className="text-muted-foreground">
                During severe weather conditions, delivery times may be extended. We offer credits for significant
                delays but cannot provide refunds for weather-related circumstances beyond our control.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Campus Events and Peak Times</h3>
              <p className="text-muted-foreground">
                During high-demand periods (finals week, campus events), delivery times may be longer. We provide
                estimated times and offer credits for delays exceeding 2 hours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Restaurant Closures</h3>
              <p className="text-muted-foreground">
                If a restaurant closes unexpectedly after accepting your order, you will receive a full refund plus a
                courtesy credit for the inconvenience.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Internal Review Process</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Initial support team review (within 2 hours)</li>
                <li>Supervisor review for complex cases (within 24 hours)</li>
                <li>Management review for disputed decisions (within 48 hours)</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-2">External Options</h3>
              <p className="text-muted-foreground">
                If you're not satisfied with our resolution, you may contact your credit card company for a chargeback
                or file a complaint with relevant consumer protection agencies.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fraud Prevention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Refund Abuse Policy</h3>
              <p className="text-muted-foreground mb-2">
                To maintain fair pricing for all users, we monitor refund patterns. Accounts showing suspicious activity
                may be subject to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Additional verification requirements</li>
                <li>Temporary refund restrictions</li>
                <li>Account review and potential suspension</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Legitimate Use</h3>
              <p className="text-muted-foreground">
                We understand that occasional issues occur and are committed to resolving them fairly. Our fraud
                prevention measures target only clearly abusive behavior.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">For refund requests or questions about this policy:</p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> refunds@campuseats.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-CAMPUS-REFUND
              </p>
              <p>
                <strong>Live Chat:</strong> Available 24/7 through the app
              </p>
              <p>
                <strong>Support Hours:</strong> Monday-Sunday, 7:00 AM - 1:00 AM EST
              </p>
            </div>

            <Alert className="mt-4">
              <AlertCircleIcon className="h-4 w-4" />
              <AlertDescription>
                For fastest service, use the in-app support feature with your order number ready. This allows our team
                to quickly access your order details and resolve issues efficiently.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
