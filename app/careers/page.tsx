"use client"

import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  HeartIcon,
  UsersIcon,
  TrophyIcon,
  GlobeIcon,
  MapPinIcon,
  ClockIcon,
  DollarSignIcon,
  GraduationCapIcon,
} from "lucide-react"

const benefits = [
  {
    icon: <HeartIcon className="h-8 w-8 text-purple-500" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs.",
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-orange-500" />,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO policy.",
  },
  {
    icon: <GraduationCapIcon className="h-8 w-8 text-purple-500" />,
    title: "Learning & Growth",
    description: "Professional development budget, conference attendance, and mentorship programs.",
  },
  {
    icon: <DollarSignIcon className="h-8 w-8 text-orange-500" />,
    title: "Competitive Pay",
    description: "Market-competitive salaries with equity options and performance bonuses.",
  },
]

const openPositions = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / Palo Alto, CA",
    type: "Full-time",
    description: "Join our engineering team to build scalable solutions for campus food delivery.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Palo Alto, CA",
    type: "Full-time",
    description: "Lead product strategy and development for our student-focused platform.",
  },
  {
    title: "Campus Operations Manager",
    department: "Operations",
    location: "Various University Locations",
    type: "Full-time",
    description: "Manage on-campus operations and build relationships with university partners.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Palo Alto, CA",
    type: "Full-time",
    description: "Design intuitive experiences that delight students and restaurant partners.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote / Palo Alto, CA",
    type: "Full-time",
    description: "Drive growth through creative campaigns targeting university students.",
  },
  {
    title: "Customer Success Intern",
    department: "Customer Success",
    location: "Remote",
    type: "Internship",
    description: "Support our customer success team in helping students and restaurants succeed.",
  },
]

export default function CareersPage() {
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
          <Badge className="mb-6 px-4 py-2 text-sm bg-purple-600 text-white">Join Our Team</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Careers at <span className="text-purple-600">Campus Eats</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Help us revolutionize campus dining while building your career in a fast-growing, mission-driven company
            that puts students first.
          </p>
        </motion.div>

        {/* Culture Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <UsersIcon className="h-12 w-12 mx-auto mb-4 text-orange-200" />
                <h3 className="text-xl font-semibold mb-2">Student-Centric</h3>
                <p className="text-purple-100">
                  Everything we do is guided by our mission to make student life better through food delivery.
                </p>
              </div>
              <div className="text-center">
                <TrophyIcon className="h-12 w-12 mx-auto mb-4 text-orange-200" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-purple-100">
                  We strive for excellence in everything we do, from code quality to customer service.
                </p>
              </div>
              <div className="text-center">
                <GlobeIcon className="h-12 w-12 mx-auto mb-4 text-orange-200" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-purple-100">
                  We're constantly innovating to solve unique challenges in the campus food delivery space.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Work <span className="text-purple-600">With Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Open <span className="text-purple-600">Positions</span>
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{position.title}</h3>
                          <Badge
                            variant="outline"
                            className={
                              position.type === "Internship"
                                ? "border-orange-500 text-orange-600"
                                : "border-purple-500 text-purple-600"
                            }
                          >
                            {position.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <UsersIcon className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPinIcon className="h-4 w-4" />
                            {position.location}
                          </span>
                        </div>
                        <p className="text-gray-700">{position.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Button className="bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See Your Role?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for improving student life. Send us
              your resume and tell us how you'd like to contribute to Campus Eats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                Send Resume
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold bg-transparent"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}
