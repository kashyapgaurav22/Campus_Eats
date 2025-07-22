"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Student-First",
      description:
        "Everything we do is designed with students in mind - from affordable pricing to campus-friendly delivery.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "We understand you're busy studying. That's why we guarantee fast, reliable delivery every time.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building stronger campus communities by connecting students with local restaurants and each other.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We partner only with the best local restaurants to ensure every meal meets our high standards.",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      description: "Former Stanford student who experienced the campus dining struggle firsthand.",
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      description: "Tech enthusiast passionate about solving real-world problems through innovation.",
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Operations",
      description: "Logistics expert ensuring smooth deliveries across all partner campuses.",
    },
    {
      name: "Emma Thompson",
      role: "Head of Partnerships",
      description: "Building relationships with restaurants and universities nationwide.",
    },
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
            About Campus Eats
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize campus dining by making delicious food accessible, affordable, and
            convenient for every student.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Campus Eats was born in a dorm room in 2020 when two hungry students realized that campus dining options
                were limited, expensive, and often closed when they needed food the most.
              </p>
              <p>
                What started as a simple idea to connect students with local restaurants has grown into a platform
                serving over 50 universities nationwide, delivering millions of meals to hungry students.
              </p>
              <p>
                Today, we're proud to be the go-to food delivery service for students, offering everything from
                late-night snacks to group study session meals.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Students enjoying food on campus"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and help us stay focused on what matters most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate people behind Campus Eats who work tirelessly to serve students better.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-pink-500 font-medium text-sm">{member.role}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-pink-100">Universities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-pink-100">Restaurant Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">1M+</div>
              <div className="text-pink-100">Orders Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100K+</div>
              <div className="text-pink-100">Happy Students</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
