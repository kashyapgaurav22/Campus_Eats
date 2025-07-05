"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldIcon, EyeIcon, LockIcon, UserIcon, CookieIcon, MailIcon } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline">Last Updated: January 15, 2025</Badge>
          <Badge variant="outline">Version 2.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Your privacy is important to us. This policy explains how Campus Eats collects, uses, and protects your
          information.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <EyeIcon className="h-5 w-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Name, email address, and phone number</li>
                <li>Delivery addresses and location data</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Student ID or university affiliation (for campus verification)</li>
                <li>Profile preferences and dietary restrictions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Usage Information</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Order history and food preferences</li>
                <li>App usage patterns and feature interactions</li>
                <li>Device information and IP address</li>
                <li>Location data for delivery purposes</li>
                <li>Customer service interactions and feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Automatically Collected Data</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and analytics data</li>
                <li>Performance metrics and error reports</li>
                <li>Marketing campaign effectiveness data</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Service Delivery</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Process and fulfill your food orders</li>
                <li>Coordinate delivery logistics and tracking</li>
                <li>Provide customer support and resolve issues</li>
                <li>Send order confirmations and delivery updates</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Platform Improvement</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Analyze usage patterns to improve our services</li>
                <li>Personalize your experience and recommendations</li>
                <li>Develop new features and functionality</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Communication</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Send promotional offers and special deals</li>
                <li>Notify you about service updates and changes</li>
                <li>Conduct surveys and gather feedback</li>
                <li>Provide important account and security notifications</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldIcon className="h-5 w-5" />
              Information Sharing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">With Restaurant Partners</h3>
              <p className="text-muted-foreground">
                We share necessary order information with restaurants to fulfill your orders, including your name, order
                details, and delivery preferences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">With Delivery Partners</h3>
              <p className="text-muted-foreground">
                Delivery personnel receive your name, delivery address, and contact information to complete deliveries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">With Service Providers</h3>
              <p className="text-muted-foreground">
                We work with trusted third-party providers for payment processing, analytics, customer support, and
                marketing services. These partners are bound by strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Legal Requirements</h3>
              <p className="text-muted-foreground">
                We may disclose information when required by law, to protect our rights, or to ensure user safety and
                platform security.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LockIcon className="h-5 w-5" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Security Measures</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Secure servers with regular security audits</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security training for all employees</li>
                <li>Compliance with industry security standards</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Payment Security</h3>
              <p className="text-muted-foreground">
                All payment information is processed through PCI DSS compliant payment processors. Campus Eats does not
                store your complete credit card information on our servers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CookieIcon className="h-5 w-5" />
              Cookies and Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Types of Cookies</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic platform functionality
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how you use our service
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and settings
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Cookie Management</h3>
              <p className="text-muted-foreground">
                You can control cookie settings through your browser preferences. Note that disabling certain cookies
                may affect platform functionality.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Data Access and Control</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Access and download your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict certain data processing activities</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Communication Preferences</h3>
              <p className="text-muted-foreground">
                You can manage your communication preferences in your account settings or by clicking unsubscribe links
                in our emails.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We retain your information for as long as necessary to provide our services and comply with legal
              obligations:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <strong>Account Information:</strong> Until account deletion or 3 years of inactivity
              </li>
              <li>
                <strong>Order History:</strong> 7 years for tax and legal compliance
              </li>
              <li>
                <strong>Payment Data:</strong> As required by payment processors and regulations
              </li>
              <li>
                <strong>Marketing Data:</strong> Until you opt-out or 2 years of inactivity
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Campus Eats is designed for college students and adults. We do not knowingly collect personal information
              from children under 13. If we become aware of such collection, we will delete the information immediately.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MailIcon className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              For privacy-related questions or to exercise your rights, contact us:
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> privacy@campuseats.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-CAMPUS-PRIVACY
              </p>
              <p>
                <strong>Mail:</strong> Campus Eats Privacy Team
                <br />
                123 Campus Drive, Suite 400
                <br />
                University City, CA 90210
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or
              through our platform. Your continued use of Campus Eats after changes constitutes acceptance of the
              updated policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
