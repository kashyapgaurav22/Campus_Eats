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
  StarIcon,
  CreditCardIcon,
  DownloadIcon,
  BookOpenIcon,
  HomeIcon,
  BuildingIcon,
  GraduationCapIcon,
  PercentIcon,
  TruckIcon,
  CheckCircleIcon,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    icon: <ClockIcon className="h-8 w-8 text-orange-500" />,
    title: "Fast Delivery",
    description: "Get your favorite meals delivered in 30 minutes or less, right to your dorm or campus location.",
  },
  {
    icon: <MapPinIcon className="h-8 w-8 text-purple-500" />,
    title: "Campus-Focused",
    description:
      "Designed specifically for university life with campus-specific delivery zones and student-friendly features.",
  },
  {
    icon: <CreditCardIcon className="h-8 w-8 text-orange-500" />,
    title: "Student-Friendly Pricing",
    description: "Affordable delivery fees and exclusive student discounts to fit your budget.",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-purple-500" />,
    title: "Safe & Reliable",
    description: "Verified delivery partners and real-time tracking for peace of mind.",
  },
  {
    icon: <UtensilsIcon className="h-8 w-8 text-orange-500" />,
    title: "Diverse Food Options",
    description:
      "From local favorites to healthy options, discover restaurants that cater to every taste and dietary need.",
  },
  {
    icon: <TruckIcon className="h-8 w-8 text-purple-500" />,
    title: "Scheduled Pickup",
    description: "Pre-order your meals and pick them up at your convenience with our scheduled pickup service.",
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
    text: "The scheduled pickup feature is amazing! I can pre-order my lunch and grab it between classes without waiting.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
]

const animatedFeatures = [
  {
    icon: <BookOpenIcon className="h-12 w-12" />,
    title: "Study Sessions Made Easy",
    description: "Order food while studying without leaving the library",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <HomeIcon className="h-12 w-12" />,
    title: "Dorm Room Delivery",
    description: "Direct delivery to your dorm room door",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: <BuildingIcon className="h-12 w-12" />,
    title: "Campus-Wide Coverage",
    description: "Every building, every corner of your campus",
    color: "from-purple-600 to-orange-500",
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
      <section className="text-center py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Badge className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-orange-500 text-white">
            🎓 Made for Students, by Students
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
              Campus Eats
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            The food delivery app designed specifically for university students. Get your favorite meals delivered fast,
            affordable, and right to your campus location.
          </p>

          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600"
          >
            <DownloadIcon className="mr-2 h-5 w-5" />
            Get the App
          </Button>
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
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500 to-orange-500 min-h-[400px]">
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
                    Campus Life, <span className="text-orange-200">Simplified</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl mb-8 text-purple-100"
                  >
                    Campus Eats understands the unique challenges of student life. From late-night study sessions to
                    scheduled pickups between classes, we're here to fuel your academic journey with delicious food
                    delivered right where you need it.
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
                      <h3 className="text-2xl font-bold mb-3 text-orange-100">
                        {animatedFeatures[currentFeature].title}
                      </h3>
                      <p className="text-purple-100 text-lg">{animatedFeatures[currentFeature].description}</p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-center mt-8 gap-2">
                    {animatedFeatures.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentFeature ? "bg-orange-200" : "bg-white/30"
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
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
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Campus Eats
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                color: "from-purple-500 to-purple-600",
              },
              {
                step: "2",
                title: "Track Your Food",
                description:
                  "Watch your order being prepared and track your delivery in real-time with our live GPS tracking.",
                icon: <TruckIcon className="h-8 w-8" />,
                color: "from-purple-500 to-orange-500",
              },
              {
                step: "3",
                title: "Enjoy Your Meal",
                description:
                  "Receive your fresh, hot meal delivered right to your dorm, library, or anywhere on campus.",
                icon: <CheckCircleIcon className="h-8 w-8" />,
                color: "from-orange-500 to-orange-600",
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
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-purple-500">
                    <span className="text-sm font-bold text-purple-500">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section id="for-students" className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              For{" "}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Students
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built by students who understand the unique challenges of campus life.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Universities
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Serving students at top universities across the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "UC Berkeley",
                students: "45,000+",
                icon: <GraduationCapIcon className="h-8 w-8 text-purple-500" />,
              },
              {
                name: "Stanford",
                students: "17,000+",
                icon: <GraduationCapIcon className="h-8 w-8 text-orange-500" />,
              },
              {
                name: "NYU",
                students: "51,000+",
                icon: <GraduationCapIcon className="h-8 w-8 text-purple-500" />,
              },
              {
                name: "MIT",
                students: "11,000+",
                icon: <GraduationCapIcon className="h-8 w-8 text-orange-500" />,
              },
            ].map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{university.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{university.name}</h3>
                    <p className="text-gray-600 text-sm">{university.students} students</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Discounts Section */}
      <section id="discounts" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Student Discounts
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Save money with exclusive student offers and budget-friendly pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Student ID Verification",
                description: "Get verified with your college ID and unlock exclusive discounts",
                icon: <GraduationCapIcon className="h-12 w-12 text-purple-500" />,
                discount: "15% OFF",
              },
              {
                title: "First Order Discount",
                description: "New students get a special welcome discount on their first order",
                icon: <PercentIcon className="h-12 w-12 text-orange-500" />,
                discount: "25% OFF",
              },
              {
                title: "Scheduled Pickup Savings",
                description: "Save more when you schedule your pickup in advance",
                icon: <ClockIcon className="h-12 w-12 text-purple-500" />,
                discount: "Up to 20% OFF",
              },
            ].map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{discount.icon}</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{discount.discount}</div>
                    <h3 className="text-xl font-semibold mb-3">{discount.title}</h3>
                    <p className="text-gray-600">{discount.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Locations Section */}
      <section id="campus-locations" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Campus Locations
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We deliver to every corner of your campus, from dorms to libraries to study halls.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dormitories",
                description: "Direct delivery to your dorm room",
                icon: <HomeIcon className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "Libraries",
                description: "Fuel your study sessions",
                icon: <BookOpenIcon className="h-8 w-8 text-orange-500" />,
              },
              {
                title: "Academic Buildings",
                description: "Between classes convenience",
                icon: <BuildingIcon className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "Common Areas",
                description: "Student lounges and quads",
                icon: <MapPinIcon className="h-8 w-8 text-orange-500" />,
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{location.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{location.title}</h3>
                    <p className="text-gray-600 text-sm">{location.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
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
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Campus Eats
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
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
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Students
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-700">Join thousands of satisfied students across 100+ universities.</p>
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
                <Card className="bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-600 mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
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
                        <p className="text-sm text-gray-600">{testimonials[currentTestimonial].university}</p>
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
                    index === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
