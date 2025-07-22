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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
          Terms & Conditions
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-purple-200">
            Last Updated: January 15, 2025
          </Badge>
          <Badge variant="outline" className="border-orange-200">
            Version 3.2
          </Badge>
        </div>
        <p className="text-muted-foreground">By accessing or using Campus Eats, you agree to the following terms.</p>
      </div>

      <Alert className="mb-8 border-purple-200 bg-purple-50">
        <AlertTriangleIcon className="h-4 w-4 text-purple-600" />
        <AlertDescription className="text-purple-700">
          By using Campus Eats, you agree to be bound by these Terms and Conditions. If you do not agree with any part
          of these terms, please do not use our services.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-purple-500" />
              1. User Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Campus Eats is for students and staff of registered colleges only. Users must provide valid college
              identification and maintain accurate account information.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TruckIcon className="h-5 w-5 text-orange-500" />
              2. Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We act as an aggregator for college canteens and local vendors to provide scheduled food pickup and
              delivery services. Campus Eats facilitates orders but does not directly prepare or handle food items.
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileTextIcon className="h-5 w-5 text-purple-500" />
              3. User Obligations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Provide accurate information during registration and ordering</li>
              <li>Use the app only for lawful purposes</li>
              <li>Respect order pickup slots and delivery protocols</li>
              <li>Maintain the security of your account credentials</li>
              <li>Follow campus policies and local regulations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCardIcon className="h-5 w-5 text-orange-500" />
              4. Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Payments are made through integrated payment gateways including Razorpay and other secure processors.
              Campus Eats does not store card details. All transactions are processed securely through third-party
              payment partners.
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCartIcon className="h-5 w-5 text-purple-500" />
              5. Order Fulfillment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              While we aim for timely deliveries and pickups, delays can occur due to vendor or logistics issues. In
              such cases, our support team will assist you. Orders are subject to vendor availability and acceptance.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldIcon className="h-5 w-5 text-orange-500" />
              6. Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Campus Eats is not liable for food quality, vendor errors, or delays beyond reasonable control. We act as
              a platform connecting students with food vendors and are not responsible for the preparation or quality of
              food items.
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScaleIcon className="h-5 w-5 text-purple-500" />
              7. Changes to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to update these terms at any time. Users will be notified of significant changes via
              email or app notifications. Continued use of the service implies acceptance of changes.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For questions about these Terms and Conditions, contact us at{" "}
              <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 font-medium">
                support@campuseats.in
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
