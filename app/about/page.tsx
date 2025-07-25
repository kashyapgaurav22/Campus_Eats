"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  HeartIcon,
  UsersIcon,
  TrophyIcon,
  GlobeIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: <HeartIcon className="h-8 w-8 text-purple-500" />,
    title: "Student-First",
    description:
      "Every decision we make puts student needs and experiences at the center.",
  },
  {
    icon: <UsersIcon className="h-8 w-8 text-orange-500" />,
    title: "Community",
    description:
      "Building connections between students, restaurants, and local businesses.",
  },
  {
    icon: <TrophyIcon className="h-8 w-8 text-purple-500" />,
    title: "Excellence",
    description:
      "Delivering exceptional service and continuously improving our platform.",
  },
  {
    icon: <GlobeIcon className="h-8 w-8 text-orange-500" />,
    title: "Accessibility",
    description:
      "Making quality food delivery accessible and affordable for all students.",
  },
];

const team = [
  {
    name: "Alok SKJ",
    role: "Founder & CEO",
    bio: "Visionary leader driving Campus Eats' mission to revolutionize campus food delivery.",
    image: "/images/alok.png.jpeg",
  },
  {
    name: "Gaurav Raj",
    role: "Co-Founder",
    bio: "Strategic co-founder focused on building sustainable growth and student-centric solutions.",
    image: "/images/gaurav.jpeg",
  },
];

const stats = [
  { number: "2020", label: "Founded" },
  { number: "100+", label: "Universities" },
  { number: "500K+", label: "Active Students" },
  { number: "2M+", label: "Orders Delivered" },
];

export default function AboutPage() {
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
          <Badge className="mb-6 px-4 py-2 text-sm bg-purple-500 text-white">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-purple-500">Campus Eats</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're on a mission to revolutionize how students access food on
            campus, making it faster, more affordable, and perfectly tailored to
            university life.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-purple-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-center max-w-4xl mx-auto text-purple-100">
              To empower students with convenient, affordable access to quality
              food delivery services that understand and cater to the unique
              demands of campus life. We believe that good food shouldn't be a
              luxury for students – it should be accessible, reliable, and
              designed around their schedules and budgets.
            </p>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It All{" "}
                <span className="bg-purple-500 text-transparent bg-clip-text">
                  Started
                </span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Campus Eats was born out of frustration. As college students,
                  our founders experienced firsthand the challenges of getting
                  quality food delivered to campus - long wait times, high
                  delivery fees, and services that didn't understand university
                  layouts or student schedules.
                </p>
                <p>
                  In 2020, during their final year at Stanford, Alex and Sarah
                  decided to build the solution they wished existed. Starting
                  with just five local restaurants and their own dorm building,
                  they created a delivery service specifically designed for
                  student life.
                </p>
                <p>
                  Today, Campus Eats serves over 100 universities nationwide,
                  but we haven't forgotten our roots. Every feature we build,
                  every partnership we form, and every decision we make is
                  guided by one simple question: "How does this make life better
                  for students?"
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <StarIcon className="h-16 w-16 text-purple-600" />
                  </div>
                  <p className="text-purple-700 text-lg">
                    Founded by Students, for Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-purple-500">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Campus Eats{" "}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                By the Numbers
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section> */}

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our{" "}
            <span className="text-purple-500">
              Team
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
                  <CardContent className="p-6 py-10 text-center flex items-center gap-4 md:gap-8">
                    <div className="relative shrink-0 w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-lg font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-purple-600 text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm text-start">{member.bio}</p>
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
          <div className="bg-purple-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Whether you're a student looking for convenient food delivery or a
              restaurant wanting to reach campus communities, we'd love to have
              you as part of the Campus Eats family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download the App
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Partner with Us
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}
