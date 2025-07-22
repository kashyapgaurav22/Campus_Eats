"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RefreshCwIcon, CheckCircleIcon, ClockIcon, XCircleIcon, MailIcon } from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Refund Policy</h1>
        <p className="text-lg text-muted-foreground">
          We want you to have a smooth experience. Here's our refund policy:
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5 text-purple-500" />
            Eligibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Refunds are considered in the following cases:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• You were charged but the order wasn't fulfilled.</li>
            <li>• The order was canceled by Campus Eats or Vendor.</li>
            <li>• Wrong item delivered and not rectified within 30 minutes.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCwIcon className="h-5 w-5 text-orange-500" />
            Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Contact our support within 2 hours of issue.</li>
            <li>• Refunds (if approved) will be credited within 5–7 working days to the original payment method.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircleIcon className="h-5 w-5 text-purple-500" />
            Non-Refundable Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>• If you cancel after food preparation begins.</li>
            <li>• Complaints raised after 2 hours of delivery/pickup.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-orange-500" />
            Processing Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground">
              <strong>Refund Timeline:</strong> 5-7 working days from approval
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Reporting Window:</strong> Within 2 hours of delivery/pickup
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-purple-500" />
            Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            For refunds, email{" "}
            <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 underline">
              support@campuseats.in
            </a>{" "}
            with your order ID and issue details.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="text-center text-sm text-muted-foreground">
        <p>Last updated: January 2025</p>
        <p className="mt-2">This refund policy applies to all orders placed through the Campus Eats platform.</p>
        <p className="mt-2">
          We reserve the right to investigate all refund requests and may require additional documentation.
        </p>
      </div>
    </div>
  )
}
