"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  UtensilsIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TruckIcon,
  StarIcon,
  CreditCardIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DownloadIcon,
  AppleIcon,
  SmartphoneIcon,
  BookOpenIcon,
  HomeIcon,
  BuildingIcon,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    icon: <ClockIcon className="h-8 w-8 text-blue-500" />,
    title: "Fast Delivery",
    description: "Get your favorite meals delivered in 30 minutes or less, right to your dorm or campus location.",
  },
  {
    icon: <MapPinIcon className="h-8 w-8 text-green-500" />,
    title: "Campus-Focused",
    description:
      "Designed specifically for university life with campus-specific delivery zones and student-friendly features.",
  },
  {
    icon: <CreditCardIcon className="h-8 w-8 text-purple-500" />,
    title: "Student-Friendly Pricing",
    description: "Affordable delivery fees and exclusive student discounts to fit your budget.",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-orange-500" />,
    title: "Safe & Reliable",
    description: "Verified delivery partners and real-time tracking for peace of mind.",
  },
  {
    icon: <UtensilsIcon className="h-8 w-8 text-red-500" />,
    title: "Diverse Food Options",
    description:
      "From local favorites to healthy options, discover restaurants that cater to every taste and dietary need.",
  },
  {
    icon: <UsersIcon className="h-8 w-8 text-teal-500" />,
    title: "Group Ordering",
    description: "Split bills and order together with friends - perfect for study sessions and dorm gatherings.",
  },
]

const stats = [
  { number: "100+", label: "Universities" },
  { number: "5M+", label: "Orders Delivered" },
  { number: "2,000+", label: "Restaurant Partners" },
  { number: "4.8★", label: "Average Rating" },
]

const testimonials = [
  {
    name: "Sarah M.",
    university: "UC Berkeley",
    text: "Campus Eats saved my finals week! Fast delivery right to my dorm, and the prices actually fit my student budget.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Mike R.",
    university: "NYU",
    text: "Finally, a delivery service that understands campus life. They know exactly where my building is and always get my order right.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Jessica L.",
    university: "Stanford",
    text: "The group ordering feature is amazing! My roommates and I use it all the time for our study sessions.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
]

const animatedFeatures = [
  {
    icon: <BookOpenIcon className="h-12 w-12" />,
    title: "Study Sessions Made Easy",
    description: "Order food while studying without leaving the library",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: <HomeIcon className="h-12 w-12" />,
    title: "Dorm Room Delivery",
    description: "Direct delivery to your dorm room door",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <BuildingIcon className="h-12 w-12" />,
    title: "Campus-Wide Coverage",
    description: "Every building, every corner of your campus",
    color: "from-pink-600 to-blue-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((current) => (current + 1) % animatedFeatures.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Badge className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-blue-500 text-white">
            🎓 Made for Students, by Students
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Campus Eats
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The food delivery app designed specifically for university students. Get your favorite meals delivered fast,
            affordable, and right to your campus location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download App
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg bg-transparent border-pink-500 text-pink-500 hover:bg-pink-50"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
              <AppleIcon className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
              <SmartphoneIcon className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Animated Campus Eats Description */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-500 to-blue-500 min-h-[400px]">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                  >
                    Campus Life, <span className="text-blue-200">Simplified</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl mb-8 text-pink-100"
                  >
                    Campus Eats understands the unique challenges of student life. From late-night study sessions to
                    group projects, we're here to fuel your academic journey with delicious food delivered right where
                    you need it.
                  </motion.p>
                </div>

                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <div
                        className={`w-24 h-24 bg-gradient-to-br ${animatedFeatures[currentFeature].color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      >
                        <div className="text-white">{animatedFeatures[currentFeature].icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-blue-100">
                        {animatedFeatures[currentFeature].title}
                      </h3>
                      <p className="text-pink-100 text-lg">{animatedFeatures[currentFeature].description}</p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-center mt-8 gap-2">
                    {animatedFeatures.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentFeature ? "bg-blue-200" : "bg-white/30"
                        }`}
                        onClick={() => setCurrentFeature(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                Campus Eats
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've designed every feature with student needs in mind, from budget constraints to busy schedules.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                Campus Eats
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting your favorite food delivered to campus is as easy as 1-2-3.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse & Order",
                description:
                  "Explore restaurants near your campus, browse menus, and place your order with just a few taps.",
                icon: <UtensilsIcon className="h-8 w-8" />,
                color: "from-pink-500 to-pink-600",
              },
              {
                step: "2",
                title: "Track Your Food",
                description:
                  "Watch your order being prepared and track your delivery in real-time with our live GPS tracking.",
                icon: <TruckIcon className="h-8 w-8" />,
                color: "from-pink-500 to-blue-500",
              },
              {
                step: "3",
                title: "Enjoy Your Meal",
                description:
                  "Receive your fresh, hot meal delivered right to your dorm, library, or anywhere on campus.",
                icon: <CheckCircleIcon className="h-8 w-8" />,
                color: "from-blue-500 to-blue-600",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-primary">
                    <span className="text-sm font-bold text-primary">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Students</span>{" "}
              Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied students across 100+ universities.
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <Image
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].university}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Campus Dining?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of students who have already discovered the easiest way to get great food on campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
                <DownloadIcon className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-pink-500 bg-transparent"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  )
}
