"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  FileTextIcon,
  UsersIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  AlertTriangleIcon,
  RefreshCwIcon,
} from "lucide-react"

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Terms & Conditions</h1>
        <p className="text-lg text-muted-foreground">
          By accessing or using Campus Eats, you agree to the following terms:
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5 text-purple-500" />
            1. User Eligibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Campus Eats is for students and staff of registered colleges only.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCartIcon className="h-5 w-5 text-orange-500" />
            2. Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We act as an aggregator for college canteens and local vendors to provide scheduled food pickup and delivery
            services.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileTextIcon className="h-5 w-5 text-purple-500" />
            3. User Obligations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Provide accurate information.</li>
            <li>• Use the app only for lawful purposes.</li>
            <li>• Respect order pickup slots and delivery protocols.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCardIcon className="h-5 w-5 text-orange-500" />
            4. Payments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Payments are made through integrated payment gateways. Campus Eats does not store card details.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TruckIcon className="h-5 w-5 text-purple-500" />
            5. Order Fulfillment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            While we aim for timely deliveries, delays can occur due to vendor or logistics issues. In such cases,
            support will assist.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangleIcon className="h-5 w-5 text-orange-500" />
            6. Limitation of Liability
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Campus Eats is not liable for food quality, vendor errors, or delays beyond reasonable control.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCwIcon className="h-5 w-5 text-purple-500" />
            7. Changes to Terms
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We reserve the right to update these terms. Continued use implies acceptance of changes.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="text-center text-sm text-muted-foreground">
        <p>Last updated: January 2025</p>
        <p className="mt-2">
          These terms and conditions are effective immediately upon your use of the Campus Eats platform.
        </p>
        <p className="mt-2">
          For questions about these terms, contact us at{" "}
          <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 underline">
            support@campuseats.in
          </a>
        </p>
      </div>
    </div>
  )
}
