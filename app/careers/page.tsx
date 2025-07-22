"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Heart, Zap, Globe, Coffee } from "lucide-react"

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and skill-building workshops.",
    },
    {
      icon: Globe,
      title: "Remote Flexibility",
      description: "Hybrid work options with flexible hours and remote work opportunities.",
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Free meals, campus eats credits, team events, and modern office spaces.",
    },
  ]

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description:
        "Join our engineering team to build scalable solutions that serve millions of students across the country.",
      requirements: [
        "5+ years of software development experience",
        "React, Node.js, TypeScript",
        "Experience with microservices architecture",
      ],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Lead product strategy and development for our core platform, working closely with engineering and design teams.",
      requirements: [
        "3+ years of product management experience",
        "Experience with B2C mobile apps",
        "Strong analytical and communication skills",
      ],
    },
    {
      title: "Campus Partnership Manager",
      department: "Business Development",
      location: "Remote",
      type: "Full-time",
      description: "Expand our university partnerships and build relationships with campus dining services nationwide.",
      requirements: [
        "Experience in partnership development",
        "Strong relationship building skills",
        "Willingness to travel",
      ],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Design intuitive and delightful experiences for students ordering food on our platform.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design systems",
        "Mobile-first design experience",
      ],
    },
    {
      title: "Marketing Intern",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Internship",
      description: "Support our marketing team with campus outreach, social media, and growth initiatives.",
      requirements: [
        "Currently enrolled in college",
        "Interest in digital marketing",
        "Creative thinking and communication skills",
      ],
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Analyze user behavior and business metrics to drive data-informed decisions across the company.",
      requirements: [
        "2+ years of data analysis experience",
        "SQL, Python, and data visualization tools",
        "Experience with A/B testing",
      ],
    },
  ]

  const values = [
    "Student-first mindset in everything we do",
    "Embrace innovation and creative problem-solving",
    "Build with empathy and inclusivity",
    "Take ownership and deliver results",
    "Collaborate openly and support each other",
  ]

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Help us revolutionize campus dining and make a real impact on student life. We're looking for passionate
            people who want to build something meaningful.
          </p>
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Campus Eats?</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                At Campus Eats, you'll be part of a mission-driven team that's transforming how students access food on
                campus. We're not just building an app – we're creating a platform that brings communities together.
              </p>
              <p>
                Our team is made up of former students who understand the challenges of campus life. We're building
                solutions that we wish we had when we were in college.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Values:</h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Team working together"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to make an impact? Check out our current openings and find your perfect role.
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                          <Badge variant="secondary" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white">
                            {position.department}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{position.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">Key Requirements:</h4>
                          <ul className="space-y-1">
                            {position.requirements.map((req, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300"
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:ml-6">
                        <Button className="w-full lg:w-auto bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented people to join our team. Send us your resume and tell us how you'd like to
            contribute to Campus Eats.
          </p>
          <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
            Send Us Your Resume
          </Button>
        </motion.div>
      </div>
    </Layout>
  )
}
