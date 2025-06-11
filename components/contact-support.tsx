"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  PhoneIcon,
  MailIcon,
  MessageSquareIcon,
  PrinterIcon,
  ClockIcon,
  MapPinIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  SearchIcon,
  SendIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  HelpCircleIcon,
  FileTextIcon,
  UsersIcon,
} from "lucide-react"

// Types for FAQs and user submissions
type FAQ = {
  id: string
  question: string
  answer: string
  category: string
  helpful: number
  notHelpful: number
}

type UserSubmission = {
  id: string
  question: string
  answer: string
  userName: string
  userAvatar: string
  dateSubmitted: string
  verified: boolean
  upvotes: number
}

// Sample FAQ data
const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I track my current order?",
    answer:
      "You can track your current order by navigating to the 'Orders' section in the app or website. Click on the specific order you want to track, and you'll be redirected to a real-time tracking page. The tracking page shows the current status of your order, estimated delivery time, and the location of your delivery person if they're en route.",
    category: "orders",
    helpful: 128,
    notHelpful: 3,
  },
  {
    id: "faq-2",
    question: "What payment methods are accepted?",
    answer:
      "Campus Eats accepts multiple payment methods including credit/debit cards (Visa, Mastercard, American Express), digital wallets (Apple Pay, Google Pay), campus meal plans at participating universities, and cash on delivery. You can add and manage your payment methods in the 'Payment' section of your account settings.",
    category: "payment",
    helpful: 95,
    notHelpful: 2,
  },
  {
    id: "faq-3",
    question: "How do I report an issue with my order?",
    answer:
      "If you experience any issues with your order, you can report it through the 'Help' section in the app or website. Select the specific order with the issue, choose the problem category (missing items, quality issues, delivery problems, etc.), and provide details about the problem. You can also attach photos if applicable. Our support team will review your report and respond within 24 hours.",
    category: "orders",
    helpful: 112,
    notHelpful: 5,
  },
  {
    id: "faq-4",
    question: "Can I schedule an order for later?",
    answer:
      "Yes, you can schedule orders for later delivery. During checkout, select 'Schedule for Later' instead of 'Deliver ASAP'. You'll be able to choose from available time slots for the current day or the next day. Please note that scheduling options may vary depending on restaurant hours and delivery availability in your area.",
    category: "orders",
    helpful: 87,
    notHelpful: 1,
  },
  {
    id: "faq-5",
    question: "How do I apply for the Campus Eats delivery partner program?",
    answer:
      "To become a Campus Eats delivery partner, visit the 'Careers' section on our website and select 'Delivery Partner'. You'll need to provide personal information, proof of eligibility to work, vehicle details (if applicable), and availability hours. Requirements include being at least 18 years old, having a valid ID, and passing a background check. For students, we offer flexible hours that can work around your class schedule.",
    category: "partners",
    helpful: 64,
    notHelpful: 2,
  },
  {
    id: "faq-6",
    question: "How do I update my delivery address?",
    answer:
      "You can update your delivery address during the checkout process or by managing your saved addresses in your account settings. To add a new address, go to 'Account' > 'Addresses' > 'Add New Address'. Fill in the required details and save. You can set any address as your default for faster checkout in the future. For dorm addresses, please include your building name, room number, and any special instructions for campus delivery.",
    category: "account",
    helpful: 76,
    notHelpful: 0,
  },
  {
    id: "faq-7",
    question: "What are the delivery fees?",
    answer:
      "Delivery fees vary based on your distance from the restaurant, order value, and current demand. The exact fee will be displayed before you confirm your order. Campus Eats+ subscribers enjoy free delivery on eligible orders over $15. Some restaurants may also offer free delivery promotions or have minimum order requirements. Special campus locations like dorms or academic buildings have standardized delivery fees regardless of distance.",
    category: "payment",
    helpful: 103,
    notHelpful: 4,
  },
  {
    id: "faq-8",
    question: "How do I cancel my order?",
    answer:
      "You can cancel an order through the 'Orders' section in the app or website. Select the order you wish to cancel and click the 'Cancel Order' button. Please note that you can only cancel orders that haven't been prepared yet. If the restaurant has already started preparing your food, cancellation may not be possible or may incur a partial charge. For assistance with cancellations, contact our support team immediately.",
    category: "orders",
    helpful: 91,
    notHelpful: 3,
  },
]

// Sample user-submitted solutions
const userSubmissions: UserSubmission[] = [
  {
    id: "user-1",
    question: "How do I get my food delivered to a specific campus building?",
    answer:
      "I found that adding detailed delivery instructions works best. In the 'Delivery Instructions' field during checkout, specify your building name, floor, and room number. I also recommend adding a landmark or meeting point if your building is hard to find. For example, 'Engineering Building, 3rd floor, Room 305. Enter from the south entrance near the fountain.' I've been doing this for a semester and haven't had any delivery issues!",
    userName: "Alex Johnson",
    userAvatar: "https://i.pravatar.cc/150?img=1",
    dateSubmitted: "2025-02-15",
    verified: true,
    upvotes: 42,
  },
  {
    id: "user-2",
    question: "What's the best way to split the bill with roommates?",
    answer:
      "The in-app split payment feature doesn't always work well for us, so my roommates and I use a different approach. We take turns placing orders and use Venmo or Cash App to reimburse each other. We created a shared spreadsheet to track who ordered last and how much everyone owes. It's been working great for us all year! Another tip: create a group order and have everyone add their own items, then one person checks out and collects money from the group.",
    userName: "Taylor Smith",
    userAvatar: "https://i.pravatar.cc/150?img=2",
    dateSubmitted: "2025-02-10",
    verified: true,
    upvotes: 38,
  },
  {
    id: "user-3",
    question: "How can I get delivery during finals week when everything is busy?",
    answer:
      "Finals week is always super busy for deliveries. I've found that scheduling orders in advance is the key. I schedule my meals a day ahead during finals week, usually for off-peak hours (2-4 PM or after 8 PM). The app lets you schedule up to 24 hours in advance. Also, some restaurants offer special late-night delivery during finals week - check the 'Promotions' tab for these options. I've never had to wait more than 45 minutes using this method, even during the busiest times!",
    userName: "Jordan Lee",
    userAvatar: "https://i.pravatar.cc/150?img=3",
    dateSubmitted: "2025-01-28",
    verified: true,
    upvotes: 56,
  },
  {
    id: "user-4",
    question: "Is there a way to get notifications when my favorite restaurants add new items?",
    answer:
      "The app doesn't have this feature built-in, but I created a workaround! I favorite all my regular restaurants, then once a week I check the 'What's New' section in each restaurant's menu. For my absolute favorites, I follow their social media accounts since they usually announce new items there first. Also, if you order from a place regularly, sometimes they'll include flyers about new menu items with your delivery. I've discovered some amazing limited-time offerings this way!",
    userName: "Morgan Williams",
    userAvatar: "https://i.pravatar.cc/150?img=4",
    dateSubmitted: "2025-01-15",
    verified: false,
    upvotes: 27,
  },
  {
    id: "user-5",
    question: "How do I get the best deals and discounts on Campus Eats?",
    answer:
      "I've been using Campus Eats for 2 years now, and I've found several ways to save money: 1) Sign up for their newsletter - they send exclusive promo codes every Tuesday; 2) Check the 'Deals' tab during off-peak hours (2-5 PM) when more restaurants offer discounts; 3) Join the Campus Eats+ program if you order more than 5 times a month - the monthly fee pays for itself; 4) Look for 'Student Special' tags on restaurant pages; 5) Some campus organizations have partnerships with Campus Eats - ask your student union if they offer discount codes. Using these tips, I save about $15-20 per week!",
    userName: "Casey Thompson",
    userAvatar: "https://i.pravatar.cc/150?img=5",
    dateSubmitted: "2025-01-05",
    verified: true,
    upvotes: 89,
  },
]

export default function ContactSupport() {
  const [activeTab, setActiveTab] = useState("contact")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [faqVotes, setFaqVotes] = useState<Record<string, string>>({})
  const [userVotes, setUserVotes] = useState<Record<string, boolean>>({})
  const [contactMethod, setContactMethod] = useState("email")
  const [faxNumber, setFaxNumber] = useState("")
  const [faxSubject, setFaxSubject] = useState("")
  const [faxMessage, setFaxMessage] = useState("")
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  // Add these state variables at the top of the component
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    orderId: "",
    message: "",
    attachment: null as File | null,
  })
  const [phoneForm, setPhoneForm] = useState({
    callbackNumber: "",
    issueType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Filter FAQs based on search query and category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Filter user submissions based on search query
  const filteredUserSubmissions = userSubmissions.filter(
    (submission) =>
      searchQuery === "" ||
      submission.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle FAQ voting
  const handleFaqVote = (id: string, isHelpful: boolean) => {
    if (faqVotes[id]) return // Prevent multiple votes

    setFaqVotes({
      ...faqVotes,
      [id]: isHelpful ? "helpful" : "notHelpful",
    })
  }

  // Handle user submission voting
  const handleUserVote = (id: string) => {
    if (userVotes[id]) return // Prevent multiple votes

    setUserVotes({
      ...userVotes,
      [id]: true,
    })
  }

  // Handle fax submission
  const handleFaxSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate fax submission
    setTimeout(() => {
      setSubmissionSuccess(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmissionSuccess(false)
        setFaxNumber("")
        setFaxSubject("")
        setFaxMessage("")
      }, 3000)
    }, 1500)
  }

  // Add form handlers
  const handleEmailFormChange = (field: string, value: string | File | null) => {
    setEmailForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitSuccess(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
      setEmailForm({
        name: "",
        email: "",
        subject: "",
        orderId: "",
        message: "",
        attachment: null,
      })
    }, 3000)
  }

  const handleCallbackRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert(`Callback requested for ${phoneForm.callbackNumber}. You will receive a call within 15 minutes.`)
    setIsSubmitting(false)
    setPhoneForm({ callbackNumber: "", issueType: "" })
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Campus Eats Support Center</h1>
        <p className="text-muted-foreground">Get help with your orders, account, or general inquiries</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MessageSquareIcon className="h-4 w-4" />
            <span>Contact Us</span>
          </TabsTrigger>
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircleIcon className="h-4 w-4" />
            <span>FAQs</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <UsersIcon className="h-4 w-4" />
            <span>Community Solutions</span>
          </TabsTrigger>
        </TabsList>

        {/* Contact Us Tab */}
        <TabsContent value="contact">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Choose your preferred contact method</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={contactMethod} onValueChange={setContactMethod} className="mb-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email" className="flex items-center cursor-pointer">
                          <MailIcon className="h-4 w-4 mr-2" />
                          Email Support
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone" className="flex items-center cursor-pointer">
                          <PhoneIcon className="h-4 w-4 mr-2" />
                          Phone Support
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fax" id="fax" />
                        <Label htmlFor="fax" className="flex items-center cursor-pointer">
                          <PrinterIcon className="h-4 w-4 mr-2" />
                          Fax Support
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {contactMethod === "email" && (
                    <div>
                      {submitSuccess ? (
                        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg text-center">
                          <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                          <h3 className="text-xl font-medium mb-2">Message Sent Successfully</h3>
                          <p className="text-muted-foreground">
                            We've received your message and will respond within 24 hours.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Your Name</Label>
                              <Input
                                id="name"
                                placeholder="Enter your name"
                                value={emailForm.name}
                                onChange={(e) => handleEmailFormChange("name", e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={emailForm.email}
                                onChange={(e) => handleEmailFormChange("email", e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                              id="subject"
                              placeholder="What is your inquiry about?"
                              value={emailForm.subject}
                              onChange={(e) => handleEmailFormChange("subject", e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="order-id">Order ID (if applicable)</Label>
                            <Input
                              id="order-id"
                              placeholder="e.g., ORDER_123456"
                              value={emailForm.orderId}
                              onChange={(e) => handleEmailFormChange("orderId", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              placeholder="Please describe your issue or question in detail"
                              rows={5}
                              value={emailForm.message}
                              onChange={(e) => handleEmailFormChange("message", e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="attachment">Attachments (optional)</Label>
                            <Input
                              id="attachment"
                              type="file"
                              onChange={(e) => handleEmailFormChange("attachment", e.target.files?.[0] || null)}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                              You can attach screenshots or documents related to your inquiry (max 5MB)
                            </p>
                          </div>
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <SendIcon className="h-4 w-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </div>
                  )}

                  {contactMethod === "phone" && (
                    <div className="space-y-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2 flex items-center">
                          <PhoneIcon className="h-4 w-4 mr-2" />
                          Customer Support Line
                        </h3>
                        <p className="text-2xl font-bold mb-2">1-800-CAMPUS-EATS</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          <span>Available 7 days a week, 8:00 AM - 12:00 AM EST</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Select your issue for faster service:</h3>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an issue type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="current-order">Issue with current order</SelectItem>
                            <SelectItem value="past-order">Issue with past order</SelectItem>
                            <SelectItem value="account">Account or payment problem</SelectItem>
                            <SelectItem value="technical">App or website technical issue</SelectItem>
                            <SelectItem value="feedback">General feedback</SelectItem>
                            <SelectItem value="other">Other inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-muted-foreground mt-2">
                          Having your order ID ready will help us assist you more quickly
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Request a Callback</h3>
                        <p className="text-sm mb-4">
                          Don't want to wait on hold? We can call you back when a representative is available.
                        </p>
                        <form onSubmit={handleCallbackRequest} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="callback-number">Your Phone Number</Label>
                            <Input
                              id="callback-number"
                              placeholder="Enter your phone number"
                              value={phoneForm.callbackNumber}
                              onChange={(e) => setPhoneForm((prev) => ({ ...prev, callbackNumber: e.target.value }))}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="callback-issue">Issue Type</Label>
                            <Select
                              value={phoneForm.issueType}
                              onValueChange={(value) => setPhoneForm((prev) => ({ ...prev, issueType: value }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Choose an issue type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="current-order">Issue with current order</SelectItem>
                                <SelectItem value="past-order">Issue with past order</SelectItem>
                                <SelectItem value="account">Account or payment problem</SelectItem>
                                <SelectItem value="technical">App or website technical issue</SelectItem>
                                <SelectItem value="feedback">General feedback</SelectItem>
                                <SelectItem value="other">Other inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Requesting...
                              </>
                            ) : (
                              "Request Callback"
                            )}
                          </Button>
                        </form>
                      </div>
                    </div>
                  )}

                  {contactMethod === "fax" && (
                    <div>
                      {submissionSuccess ? (
                        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg text-center">
                          <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                          <h3 className="text-xl font-medium mb-2">Fax Submitted Successfully</h3>
                          <p className="text-muted-foreground">
                            Your fax has been queued for transmission. You will receive a confirmation email shortly.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleFaxSubmit} className="space-y-4">
                          <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg mb-4">
                            <div className="flex items-start">
                              <AlertCircleIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                              <div>
                                <h3 className="font-medium mb-1">Fax Submission Information</h3>
                                <p className="text-sm text-muted-foreground">
                                  Our fax system converts your digital submission into a traditional fax. Please allow
                                  up to 1 business day for processing and response.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="fax-number">Recipient Fax Number</Label>
                            <Input
                              id="fax-number"
                              placeholder="Enter fax number (e.g., 555-123-4567)"
                              value={faxNumber}
                              onChange={(e) => setFaxNumber(e.target.value)}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="your-name">Your Name</Label>
                              <Input id="your-name" placeholder="Enter your name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="your-email">Your Email</Label>
                              <Input id="your-email" type="email" placeholder="For confirmation" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="fax-subject">Subject</Label>
                            <Input
                              id="fax-subject"
                              placeholder="Fax subject line"
                              value={faxSubject}
                              onChange={(e) => setFaxSubject(e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="fax-message">Fax Content</Label>
                            <Textarea
                              id="fax-message"
                              placeholder="Type the content of your fax here"
                              rows={6}
                              value={faxMessage}
                              onChange={(e) => setFaxMessage(e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="fax-attachment">Attachments (optional)</Label>
                            <Input id="fax-attachment" type="file" multiple />
                            <p className="text-xs text-muted-foreground mt-1">
                              Supported formats: PDF, DOC, JPG, PNG (max 10MB total)
                            </p>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="fax-cover">Include Cover Sheet</Label>
                            <Select defaultValue="yes">
                              <SelectTrigger id="fax-cover">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes, include standard cover sheet</SelectItem>
                                <SelectItem value="custom">Yes, with custom message</SelectItem>
                                <SelectItem value="no">No cover sheet</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <Button type="submit" className="w-full">
                            <PrinterIcon className="h-4 w-4 mr-2" />
                            Send Fax
                          </Button>

                          <p className="text-xs text-center text-muted-foreground mt-2">
                            Campus Eats partners with SecureFax for digital-to-analog fax transmission
                          </p>
                        </form>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MailIcon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-sm text-muted-foreground">support@campuseats.com</p>
                      <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <PhoneIcon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone Support</h3>
                      <p className="text-sm text-muted-foreground">1-800-CAMPUS-EATS</p>
                      <p className="text-xs text-muted-foreground">8:00 AM - 12:00 AM EST, 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <PrinterIcon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Fax</h3>
                      <p className="text-sm text-muted-foreground">1-800-555-CFAX</p>
                      <p className="text-xs text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Headquarters</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Campus Drive, Suite 400
                        <br />
                        University City, CA 90210
                      </p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Campus Partner Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For restaurant partners and campus administrators
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> partners@campuseats.com
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span> 1-800-CAMPUS-BIZ
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">For Urgent Issues Only</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you have an emergency related to food safety, security concerns, or delivery accidents:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <PhoneIcon className="h-4 w-4 text-red-500 mr-2" />
                        <span className="font-bold">1-800-CAMPUS-911</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>FAQ Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Categories
                    </Button>
                    <Button
                      variant={selectedCategory === "orders" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory("orders")}
                    >
                      Orders & Delivery
                    </Button>
                    <Button
                      variant={selectedCategory === "payment" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory("payment")}
                    >
                      Payment & Billing
                    </Button>
                    <Button
                      variant={selectedCategory === "account" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory("account")}
                    >
                      Account Management
                    </Button>
                    <Button
                      variant={selectedCategory === "partners" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory("partners")}
                    >
                      Partners & Restaurants
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Can't find what you're looking for in our FAQs? Our support team is ready to help.
                  </p>
                  <Button className="w-full" onClick={() => setActiveTab("contact")}>
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions about Campus Eats</CardDescription>
                  <div className="relative mt-4">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search FAQs..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  {filteredFaqs.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFaqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-start">
                              <span>{faq.question}</span>
                              {faq.category === "orders" && (
                                <Badge variant="outline" className="ml-2">
                                  Orders
                                </Badge>
                              )}
                              {faq.category === "payment" && (
                                <Badge variant="outline" className="ml-2">
                                  Payment
                                </Badge>
                              )}
                              {faq.category === "account" && (
                                <Badge variant="outline" className="ml-2">
                                  Account
                                </Badge>
                              )}
                              {faq.category === "partners" && (
                                <Badge variant="outline" className="ml-2">
                                  Partners
                                </Badge>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">{faq.answer}</p>

                              <div className="flex items-center justify-between pt-2">
                                <div className="text-sm text-muted-foreground">Was this answer helpful?</div>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className={faqVotes[faq.id] === "helpful" ? "bg-green-50 dark:bg-green-950" : ""}
                                    onClick={() => handleFaqVote(faq.id, true)}
                                    disabled={!!faqVotes[faq.id]}
                                  >
                                    <ThumbsUpIcon
                                      className={`h-4 w-4 mr-2 ${faqVotes[faq.id] === "helpful" ? "text-green-500" : ""}`}
                                    />
                                    Yes ({faqVotes[faq.id] === "helpful" ? faq.helpful + 1 : faq.helpful})
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className={faqVotes[faq.id] === "notHelpful" ? "bg-red-50 dark:bg-red-950" : ""}
                                    onClick={() => handleFaqVote(faq.id, false)}
                                    disabled={!!faqVotes[faq.id]}
                                  >
                                    <ThumbsDownIcon
                                      className={`h-4 w-4 mr-2 ${faqVotes[faq.id] === "notHelpful" ? "text-red-500" : ""}`}
                                    />
                                    No ({faqVotes[faq.id] === "notHelpful" ? faq.notHelpful + 1 : faq.notHelpful})
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="text-center py-12">
                      <FileTextIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No FAQs Found</h3>
                      <p className="text-muted-foreground">
                        We couldn't find any FAQs matching your search. Try different keywords or browse by category.
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredFaqs.length} of {faqs.length} FAQs
                  </p>
                  <Button variant="outline" onClick={() => setActiveTab("community")}>
                    View Community Solutions
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Community Solutions Tab */}
        <TabsContent value="community">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Community Solutions</CardTitle>
                  <CardDescription>Solutions and tips shared by Campus Eats users</CardDescription>
                </div>
                <div className="relative w-full md:w-80">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search community solutions..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {filteredUserSubmissions.length > 0 ? (
                <div className="space-y-6">
                  {filteredUserSubmissions.map((submission) => (
                    <Card key={submission.id} className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="font-semibold text-lg">{submission.question}</h3>
                          {submission.verified && (
                            <Badge variant="success" className="w-fit">
                              <CheckCircleIcon className="h-3 w-3 mr-1" />
                              Verified Solution
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{submission.answer}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={submission.userAvatar || "/placeholder.svg"}
                                alt={submission.userName}
                              />
                              <AvatarFallback>{submission.userName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{submission.userName}</p>
                              <p className="text-xs text-muted-foreground">Posted on {submission.dateSubmitted}</p>
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className={userVotes[submission.id] ? "bg-green-50 dark:bg-green-950" : ""}
                            onClick={() => handleUserVote(submission.id)}
                            disabled={!!userVotes[submission.id]}
                          >
                            <ThumbsUpIcon
                              className={`h-4 w-4 mr-2 ${userVotes[submission.id] ? "text-green-500" : ""}`}
                            />
                            Helpful ({userVotes[submission.id] ? submission.upvotes + 1 : submission.upvotes})
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <UsersIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Community Solutions Found</h3>
                  <p className="text-muted-foreground">
                    We couldn't find any community solutions matching your search. Try different keywords.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-muted-foreground">Have a solution to share with the Campus Eats community?</p>
              <Button>
                <UsersIcon className="h-4 w-4 mr-2" />
                Submit Your Solution
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Submit Your Solution</CardTitle>
                <CardDescription>
                  Share your tips, workarounds, and solutions with other Campus Eats users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="solution-question">Question or Issue</Label>
                    <Input id="solution-question" placeholder="What problem does your solution address?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="solution-answer">Your Solution</Label>
                    <Textarea
                      id="solution-answer"
                      placeholder="Describe your solution in detail. Include steps, tips, and any relevant information."
                      rows={5}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="solution-name">Your Name</Label>
                      <Input id="solution-name" placeholder="Enter your name or username" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="solution-email">Email Address</Label>
                      <Input id="solution-email" type="email" placeholder="For verification (not displayed publicly)" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="solution-category">Category</Label>
                    <Select>
                      <SelectTrigger id="solution-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ordering">Ordering Tips</SelectItem>
                        <SelectItem value="delivery">Delivery Solutions</SelectItem>
                        <SelectItem value="payment">Payment & Discounts</SelectItem>
                        <SelectItem value="app">App & Website Tips</SelectItem>
                        <SelectItem value="campus">Campus-Specific Solutions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Solution
                  </Button>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">
                  By submitting a solution, you agree to our Community Guidelines. Solutions are reviewed before being
                  published.
                </p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
