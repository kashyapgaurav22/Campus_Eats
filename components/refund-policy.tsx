"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircleIcon, XCircleIcon, AlertCircleIcon, RefreshCwIcon, DollarSignIcon, PhoneIcon } from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
          Refund Policy
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-purple-200">
            Last Updated: January 15, 2025
          </Badge>
          <Badge variant="outline" className="border-orange-200">
            Version 2.0
          </Badge>
        </div>
        <p className="text-muted-foreground">We want you to have a smooth experience. Here's our refund policy.</p>
      </div>

      <Alert className="mb-8 border-purple-200 bg-purple-50">
        <CheckCircleIcon className="h-4 w-4 text-purple-600" />
        <AlertDescription className="text-purple-700">
          We are committed to providing excellent service and will work to resolve any issues you may encounter with
          your orders.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSignIcon className="h-5 w-5 text-purple-500" />
              Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-4">Refunds are considered in the following cases:</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-700">You were charged but the order wasn't fulfilled</p>
                  <p className="text-sm text-muted-foreground">
                    Payment processed but no order confirmation or preparation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-700">The order was canceled by Campus Eats or Vendor</p>
                  <p className="text-sm text-muted-foreground">
                    Cancellations due to vendor unavailability or system issues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-700">Wrong item delivered and not rectified within 30 minutes</p>
                  <p className="text-sm text-muted-foreground">Incorrect orders that cannot be resolved quickly</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCwIcon className="h-5 w-5 text-orange-500" />
              Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-purple-600">1</span>
                </div>
                <div>
                  <p className="font-medium">Contact our support within 2 hours of issue</p>
                  <p className="text-sm text-muted-foreground">
                    Reach out via email or in-app support with your order details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-orange-600">2</span>
                </div>
                <div>
                  <p className="font-medium">Refunds (if approved) processing</p>
                  <p className="text-sm text-muted-foreground">
                    Approved refunds will be credited within 5–7 working days to the original payment method
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500" />
              Non-Refundable Cases
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-700">Change of mind after order placement</p>
                <p className="text-sm text-muted-foreground">
                  Personal preference changes are not eligible for refunds
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-700">If you cancel after food preparation begins</p>
                <p className="text-sm text-muted-foreground">
                  Orders cannot be refunded once vendors have started preparation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-700">Complaints raised after 2 hours of delivery/pickup</p>
                <p className="text-sm text-muted-foreground">
                  Issues must be reported within 2 hours for refund consideration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-orange-500" />
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              For refunds, email{" "}
              <a href="mailto:support@campuseats.in" className="text-purple-600 hover:text-purple-700 font-medium">
                support@campuseats.in
              </a>{" "}
              with your order ID and issue details.
            </p>

            <Alert className="border-purple-200 bg-purple-50">
              <AlertCircleIcon className="h-4 w-4 text-purple-600" />
              <AlertDescription className="text-purple-700">
                For fastest service, include your order ID, contact information, and a detailed description of the issue
                when contacting support.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-purple-700 mb-2">Processing Time</h4>
                <p className="text-sm text-muted-foreground">
                  Refund requests are typically processed within 24-48 hours of submission. Complex cases may require
                  additional review time.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-orange-600 mb-2">Payment Method</h4>
                <p className="text-sm text-muted-foreground">
                  Refunds are credited back to the original payment method used for the transaction. This ensures
                  security and compliance with payment processing standards.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-purple-700 mb-2">Support Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Our support team is available Monday through Sunday, 8:00 AM to 10:00 PM IST to assist with refund
                  requests and other inquiries.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
