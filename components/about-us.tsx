"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HeartIcon,
  UsersIcon,
  TrendingUpIcon,
  AwardIcon,
  MapPinIcon,
  ClockIcon,
  ShieldIcon,
  LeafIcon,
  GraduationCapIcon,
  StarIcon,
} from "lucide-react"

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://i.pravatar.cc/150?img=1",
      bio: "Former Stanford student who experienced the campus food struggle firsthand. MBA from Wharton.",
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      image: "https://i.pravatar.cc/150?img=2",
      bio: "Ex-Google engineer passionate about solving real-world problems through technology.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://i.pravatar.cc/150?img=3",
      bio: "10+ years in logistics and supply chain management. Expert in campus delivery systems.",
    },
    {
      name: "David Kim",
      role: "Head of Partnerships",
      image: "https://i.pravatar.cc/150?img=4",
      bio: "Former restaurant industry executive with deep connections in campus dining.",
    },
  ]

  const milestones = [
    { year: "2020", event: "Campus Eats founded at UC Berkeley", icon: <GraduationCapIcon className="h-4 w-4" /> },
    { year: "2021", event: "Expanded to 10 universities", icon: <TrendingUpIcon className="h-4 w-4" /> },
    { year: "2022", event: "1 million orders delivered", icon: <AwardIcon className="h-4 w-4" /> },
    { year: "2023", event: "50+ campus partnerships", icon: <UsersIcon className="h-4 w-4" /> },
    { year: "2024", event: "Launched sustainability program", icon: <LeafIcon className="h-4 w-4" /> },
    { year: "2025", event: "100+ universities nationwide", icon: <MapPinIcon className="h-4 w-4" /> },
  ]

  const values = [
    {
      title: "Student-First",
      description: "Every decision we make prioritizes the student experience and affordability.",
      icon: <GraduationCapIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Community",
      description: "Building connections between students, restaurants, and campus communities.",
      icon: <UsersIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Reliability",
      description: "Consistent, dependable service that students can count on during busy academic life.",
      icon: <ShieldIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Innovation",
      description: "Continuously improving through technology and student feedback.",
      icon: <TrendingUpIcon className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and reducing waste.",
      icon: <LeafIcon className="h-6 w-6 text-emerald-500" />,
    },
    {
      title: "Accessibility",
      description: "Making quality food accessible to all students regardless of their circumstances.",
      icon: <HeartIcon className="h-6 w-6 text-red-500" />,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Campus Eats</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connecting hungry students with delicious food since 2020. We're more than just a delivery service – we're
          part of the campus community.
        </p>
      </div>

      <div className="space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartIcon className="h-6 w-6 text-red-500" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Campus Eats was born out of a simple frustration: why was it so hard to get good food delivered on campus?
              As students at UC Berkeley, our founders Sarah and Marcus found themselves constantly dealing with limited
              dining options, long wait times, and delivery services that didn't understand the unique challenges of
              campus life.
            </p>
            <p className="text-muted-foreground">
              Late-night study sessions meant cold pizza or expensive convenience store snacks. Dorm restrictions made
              deliveries complicated. Meal plan limitations left students hungry and broke. We knew there had to be a
              better way.
            </p>
            <p className="text-muted-foreground">
              Starting with just five local restaurants and a simple app, we set out to solve these problems. Today,
              Campus Eats serves over 100 universities nationwide, connecting millions of students with thousands of
              restaurants, all while maintaining our commitment to affordability, reliability, and understanding what
              students really need.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUpIcon className="h-6 w-6 text-blue-500" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                To make quality food accessible, affordable, and convenient for every student
              </h3>
              <p className="text-muted-foreground text-center">
                We believe that good food shouldn't be a luxury. Every student deserves access to nutritious, delicious
                meals that fit their budget and busy schedule. We're committed to breaking down the barriers that stand
                between students and great food.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {value.icon}
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClockIcon className="h-6 w-6 text-green-500" />
              Our Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    {milestone.icon}
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {milestone.year}
                    </Badge>
                    <p className="font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UsersIcon className="h-6 w-6 text-purple-500" />
              Meet Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
                Universities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">Serving students across major universities nationwide</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">5M+</div>
                Orders Delivered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Millions of satisfied students and successful deliveries
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">2,000+</div>
                Restaurant Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">From local favorites to national chains</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LeafIcon className="h-6 w-6 text-green-500" />
              Our Commitment to Sustainability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We recognize our responsibility to the environment and future generations of students. Our sustainability
              initiatives include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Eco-friendly packaging partnerships</li>
                <li>Carbon-neutral delivery options</li>
                <li>Food waste reduction programs</li>
                <li>Local sourcing initiatives</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Reusable container programs</li>
                <li>Electric vehicle delivery fleet</li>
                <li>Campus composting partnerships</li>
                <li>Sustainable restaurant certifications</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <StarIcon className="h-6 w-6 text-yellow-500" />
              What Students Say
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground mb-3">
                  "Campus Eats saved my finals week! Fast delivery right to my dorm, and the prices actually fit my
                  student budget."
                </p>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Jessica D.</p>
                    <p className="text-xs text-muted-foreground">UC Berkeley, Senior</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground mb-3">
                  "Finally, a delivery service that understands campus life. They know exactly where my building is and
                  always get my order right."
                </p>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Mike R.</p>
                    <p className="text-xs text-muted-foreground">NYU, Sophomore</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Join Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Whether you're a student looking for your next meal, a restaurant wanting to reach more customers, or
              someone who shares our vision of making campus life better, we'd love to have you as part of the Campus
              Eats community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="p-2">
                <UsersIcon className="h-4 w-4 mr-2" />
                Students Welcome
              </Badge>
              <Badge variant="outline" className="p-2">
                <MapPinIcon className="h-4 w-4 mr-2" />
                Restaurant Partners
              </Badge>
              <Badge variant="outline" className="p-2">
                <TrendingUpIcon className="h-4 w-4 mr-2" />
                Career Opportunities
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <p className="text-muted-foreground">hello@campuseats.com</p>
                <p className="text-muted-foreground">1-800-CAMPUS-EATS</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Headquarters</h3>
                <p className="text-muted-foreground">
                  123 Campus Drive, Suite 400
                  <br />
                  University City, CA 90210
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Restaurant Partnerships</h3>
                <p className="text-muted-foreground">partners@campuseats.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Careers</h3>
                <p className="text-muted-foreground">careers@campuseats.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
