"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  FileTextIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldIcon,
  AlertTriangleIcon,
  ScaleIcon,
  UserIcon,
} from "lucide-react"

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline">Last Updated: January 15, 2025</Badge>
          <Badge variant="outline">Version 3.2</Badge>
        </div>
        <p className="text-muted-foreground">Please read these terms carefully before using Campus Eats services.</p>
      </div>

      <Alert className="mb-8">
        <AlertTriangleIcon className="h-4 w-4" />
        <AlertDescription>
          By using Campus Eats, you agree to be bound by these Terms and Conditions. If you do not agree with any part
          of these terms, please do not use our services.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileTextIcon className="h-5 w-5" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              These Terms and Conditions ("Terms") govern your use of the Campus Eats platform, including our website,
              mobile application, and related services (collectively, the "Service"). By accessing or using our Service,
              you agree to be bound by these Terms.
            </p>
            <p className="text-muted-foreground">
              Campus Eats reserves the right to modify these Terms at any time. We will notify users of significant
              changes via email or through our platform. Continued use of the Service after changes constitutes
              acceptance of the modified Terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              Eligibility and Account Registration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">User Eligibility</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Must be at least 18 years old or have parental consent</li>
                <li>Must be affiliated with a participating educational institution</li>
                <li>Must provide accurate and complete registration information</li>
                <li>Must maintain the security of your account credentials</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Account Responsibilities</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>You are responsible for all activities under your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>You may not share your account with others</li>
                <li>You must keep your contact information current</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCartIcon className="h-5 w-5" />
              Ordering and Service Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Order Placement</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Orders are subject to restaurant availability and acceptance</li>
                <li>Prices may vary by location and time of day</li>
                <li>Menu items and availability are determined by individual restaurants</li>
                <li>Special dietary requests cannot be guaranteed</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Order Modifications and Cancellations</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Orders can only be modified before restaurant confirmation</li>
                <li>Cancellation policies vary by restaurant and timing</li>
                <li>Refunds for cancelled orders are processed according to our Refund Policy</li>
                <li>Campus Eats reserves the right to cancel orders for any reason</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Service Availability</h3>
              <p className="text-muted-foreground">
                Campus Eats operates during specified hours and may be unavailable during university breaks, holidays,
                or maintenance periods. Service availability may vary by campus location.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCardIcon className="h-5 w-5" />
              Payment Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Accepted Payment Methods</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Credit and debit cards (Visa, Mastercard, American Express)</li>
                <li>Digital wallets (Apple Pay, Google Pay)</li>
                <li>Campus meal plans (where available)</li>
                <li>Cash on delivery (select locations)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Pricing and Fees</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>All prices include applicable taxes unless otherwise stated</li>
                <li>Delivery fees are calculated based on distance and demand</li>
                <li>Service fees may apply to support platform operations</li>
                <li>Promotional pricing is subject to terms and availability</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Payment Processing</h3>
              <p className="text-muted-foreground">
                Payment is processed when you place an order. For cash on delivery orders, payment is collected upon
                delivery. Failed payments may result in order cancellation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TruckIcon className="h-5 w-5" />
              Delivery Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Delivery Areas</h3>
              <p className="text-muted-foreground">
                Delivery is available to participating campus locations and approved off-campus addresses. Delivery
                areas may be limited during peak times or adverse weather conditions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Delivery Times</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Estimated delivery times are approximate and not guaranteed</li>
                <li>Delivery times may be affected by weather, traffic, or high demand</li>
                <li>Scheduled deliveries are subject to availability</li>
                <li>Campus Eats is not liable for delays beyond our control</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Delivery Requirements</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>You must be available to receive your order at the specified location</li>
                <li>Valid ID may be required for certain orders</li>
                <li>Delivery personnel cannot enter private residences or dorm rooms</li>
                <li>Undeliverable orders may be returned to the restaurant</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldIcon className="h-5 w-5" />
              User Conduct and Prohibited Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Acceptable Use</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Use the Service only for lawful purposes</li>
                <li>Provide accurate information in all interactions</li>
                <li>Respect delivery personnel and restaurant staff</li>
                <li>Follow campus policies and local laws</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Prohibited Activities</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Creating fake accounts or impersonating others</li>
                <li>Attempting to defraud Campus Eats or its partners</li>
                <li>Harassing or threatening other users or staff</li>
                <li>Violating intellectual property rights</li>
                <li>Interfering with the platform's operation or security</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Consequences of Violations</h3>
              <p className="text-muted-foreground">
                Violations of these Terms may result in account suspension, termination, or legal action. Campus Eats
                reserves the right to refuse service to anyone.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Campus Eats Property</h3>
              <p className="text-muted-foreground">
                All content, features, and functionality of the Campus Eats platform are owned by Campus Eats and
                protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">User Content</h3>
              <p className="text-muted-foreground">
                By submitting reviews, photos, or other content, you grant Campus Eats a non-exclusive, royalty-free
                license to use, modify, and display such content in connection with our services.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disclaimers and Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Service Disclaimers</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Campus Eats is a platform connecting users with restaurants</li>
                <li>We do not prepare food or control restaurant operations</li>
                <li>Food quality and safety are the responsibility of individual restaurants</li>
                <li>Delivery times and availability are estimates, not guarantees</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                Campus Eats' liability is limited to the amount paid for the specific order in question. We are not
                liable for indirect, incidental, or consequential damages.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScaleIcon className="h-5 w-5" />
              Dispute Resolution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-muted-foreground">
                Most issues can be resolved through our customer support team. Please contact us before pursuing other
                remedies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Arbitration</h3>
              <p className="text-muted-foreground">
                Disputes that cannot be resolved through customer support will be settled through binding arbitration in
                accordance with the rules of the American Arbitration Association.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Governing Law</h3>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the State of California, without regard to conflict of law
                principles.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Account Termination</h3>
              <p className="text-muted-foreground">
                You may terminate your account at any time through your account settings. Campus Eats may terminate
                accounts for violations of these Terms or for any reason with appropriate notice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Effect of Termination</h3>
              <p className="text-muted-foreground">
                Upon termination, your right to use the Service ceases immediately. Provisions regarding intellectual
                property, disclaimers, and dispute resolution survive termination.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">For questions about these Terms and Conditions, contact us:</p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> legal@campuseats.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-CAMPUS-LEGAL
              </p>
              <p>
                <strong>Mail:</strong> Campus Eats Legal Department
                <br />
                123 Campus Drive, Suite 400
                <br />
                University City, CA 90210
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
