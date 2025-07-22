"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldIcon, EyeIcon, LockIcon, UserIcon, MailIcon } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
          Privacy Policy
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-purple-200">
            Last Updated: January 15, 2025
          </Badge>
          <Badge variant="outline" className="border-orange-200">
            Version 2.1
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Campus Eats is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our platform.
        </p>
      </div>

      <div className="space-y-8">
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <EyeIcon className="h-5 w-5 text-purple-500" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-purple-700">Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Name, email, contact number, college ID, and address</li>
                <li>Student verification details and university affiliation</li>
                <li>Profile preferences and dietary restrictions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-orange-600">Transaction Data</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Order history, payment information (processed via secure third-party payment gateways)</li>
                <li>Transaction records and billing information</li>
                <li>Delivery preferences and pickup schedules</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-purple-700">Usage Data</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Device information, IP address, browser type, and usage patterns</li>
                <li>App usage analytics and feature interactions</li>
                <li>Location data for delivery and pickup services</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-orange-500" />
              How We Use Your Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide food delivery and pickup services</li>
              <li>To personalize user experience and recommendations</li>
              <li>To process transactions and send confirmations</li>
              <li>To respond to customer service requests</li>
              <li>To improve our platform and develop new features</li>
              <li>To send promotional offers and service updates (with your consent)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldIcon className="h-5 w-5 text-purple-500" />
              Sharing of Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-4">
              <strong className="text-purple-700">We do not sell your data.</strong> We may share limited data with:
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-orange-600">Delivery Vendors</h4>
                <p className="text-sm text-muted-foreground">For order fulfillment and delivery coordination</p>
              </div>

              <div>
                <h4 className="font-medium text-purple-600">Payment Partners</h4>
                <p className="text-sm text-muted-foreground">
                  Razorpay and other payment processors for transaction processing
                </p>
              </div>

              <div>
                <h4 className="font-medium text-orange-600">Legal Authorities</h4>
                <p className="text-sm text-muted-foreground">When required by law or to protect user safety</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">You can:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Control your privacy settings within the app</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LockIcon className="h-5 w-5 text-purple-500" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We implement encryption and access controls to protect your data. All payment information is processed
              through secure, PCI DSS compliant payment gateways. We regularly update our security measures to ensure
              your information remains protected.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-orange-500" />
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              For privacy-related concerns, email us at{" "}
              <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 font-medium">
                support@campuseats.in
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              We are committed to addressing your privacy concerns promptly and transparently.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
