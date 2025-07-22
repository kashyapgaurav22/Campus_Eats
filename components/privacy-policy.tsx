"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShieldIcon, UserIcon, CreditCardIcon, DatabaseIcon, LockIcon, MailIcon } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground">
          Campus Eats is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our platform.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DatabaseIcon className="h-5 w-5 text-purple-500" />
            Information We Collect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-orange-500" />
              Personal Information
            </h3>
            <p className="text-muted-foreground">Name, email, contact number, college ID, and address.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CreditCardIcon className="h-4 w-4 text-purple-500" />
              Transaction Data
            </h3>
            <p className="text-muted-foreground">
              Order history, payment information (processed via secure third-party payment gateways).
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <DatabaseIcon className="h-4 w-4 text-orange-500" />
              Usage Data
            </h3>
            <p className="text-muted-foreground">Device information, IP address, browser type, and usage patterns.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldIcon className="h-5 w-5 text-orange-500" />
            How We Use Your Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>• To provide food delivery and pickup services.</li>
            <li>• To personalize user experience.</li>
            <li>• To process transactions and send confirmations.</li>
            <li>• To respond to customer service requests.</li>
            <li>• To improve our platform.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5 text-purple-500" />
            Sharing of Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">We do not sell your data. We may share limited data with:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Delivery vendors for order fulfillment.</li>
            <li>• Payment partners (Razorpay, etc.) for transaction processing.</li>
            <li>• Legal authorities when required by law.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldIcon className="h-5 w-5 text-orange-500" />
            Your Rights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">You can:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Access and update your personal information.</li>
            <li>• Request deletion of your data.</li>
            <li>• Opt out of marketing communication.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LockIcon className="h-5 w-5 text-purple-500" />
            Data Security
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">We implement encryption and access controls to protect your data.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-orange-500" />
            Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            For privacy-related concerns, email us at{" "}
            <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 underline">
              support@campuseats.in
            </a>
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="text-center text-sm text-muted-foreground">
        <p>Last updated: January 2025</p>
        <p className="mt-2">
          This privacy policy is effective immediately and will remain in effect except with respect to any changes in
          its provisions in the future.
        </p>
      </div>
    </div>
  )
}
