"use client"

import type React from "react"

import { useState } from "react"
import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, MessageSquareIcon, HeadphonesIcon } from "lucide-react"

const contactInfo = [
  {
    icon: <MailIcon className="h-6 w-6 text-purple-500" />,
    title: "Email Us",
    details: "support@campuseats.com",
    description: "Get in touch for general inquiries",
  },
  {
    icon: <PhoneIcon className="h-6 w-6 text-orange-500" />,
    title: "Call Us",
    details: "1-800-CAMPUS-EATS",
    description: "Available 24/7 for urgent matters",
  },
  {
    icon: <MapPinIcon className="h-6 w-6 text-purple-500" />,
    title: "Visit Us",
    details: "123 University Ave, Palo Alto, CA 94301",
    description: "Our headquarters near Stanford",
  },
  {
    icon: <ClockIcon className="h-6 w-6 text-orange-500" />,
    title: "Business Hours",
    details: "Mon-Fri: 9AM-6PM PST",
    description: "Weekend support available online",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-orange-500 text-white">
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
              Campus Eats
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions, feedback, or need support? We're here to help! Reach out to us through any of the channels
            below.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{info.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-purple-600 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form and Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Send Us a{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                    Message
                  </span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your.email@university.edu"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Restaurant Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600"
                  >
                    <MessageSquareIcon className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Need{" "}
                <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                  Immediate Help?
                </span>
              </h2>
              <div className="space-y-4">
                <Card className="bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HeadphonesIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">24/7 Student Support</h3>
                        <p className="text-gray-600 mb-3">
                          Our dedicated student support team is available around the clock to help with orders, account
                          issues, and technical problems.
                        </p>
                        <Button
                          variant="outline"
                          className="border-purple-500 text-purple-600 hover:bg-purple-50 bg-transparent"
                        >
                          Chat with Support
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquareIcon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">FAQ & Help Center</h3>
                        <p className="text-gray-600 mb-3">
                          Find quick answers to common questions about ordering, delivery, payments, and more in our
                          comprehensive help center.
                        </p>
                        <Button
                          variant="outline"
                          className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                        >
                          Visit Help Center
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/campus_eats_official?igsh=MXN0anAyaTNuMDRoeQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/campus_eats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.5.59-2.3.7.83-.5 1.46-1.3 1.76-2.2-.78.46-1.64.8-2.56 1C18.5 4.6 17.4 4 16.13 4c-2.44 0-4.42 1.97-4.42 4.4 0 .35.04.7.1 1.03-3.68-.18-6.94-1.95-9.13-4.66-.38.66-.6 1.4-.6 2.22 0 1.54.78 2.9 1.96 3.7-.7-.02-1.37-.22-1.94-.54v.06c0 2.16 1.55 3.96 3.6 4.38-.38.1-.78.16-1.2.16-.29 0-.57-.03-.84-.07.58 1.8 2.26 3.12 4.25 3.16a8.94 8.94 0 0 1-5.52 1.88c-.36 0-.72-.02-1.07-.06A12.61 12.61 0 0 0 7.29 21c8.2 0 12.68-6.7 12.68-12.49 0-.19 0-.38-.01-.57A9 9 0 0 0 22.46 6z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/campuseatsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0zM7.5 8h4.7v2.1h.07c.65-1.23 2.23-2.53 4.58-2.53 4.9 0 5.8 3.24 5.8 7.45V23H17v-7c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V23H7.5V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
