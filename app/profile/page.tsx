"use client"

import type React from "react"

import { useState } from "react"
import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ClockIcon,
  TruckIcon,
  ExternalLinkIcon,
  CalendarIcon,
  UserIcon,
  ShoppingBagIcon,
  HistoryIcon,
  SettingsIcon,
  CreditCardIcon,
  MapPinIcon,
  BellIcon,
} from "lucide-react"

const initialProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  university: "Stanford University",
  dormAddress: "Wilbur Hall, Room 204",
}

type Order = {
  id: string
  items: any[]
  total: number
  status: string
  date?: string
  timestamp: string
  estimatedDelivery?: string
  scheduledDelivery?: {
    timeSlot: string
    startTime: string
    endTime: string
  } | null
}

const orderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile)
  const [isEditing, setIsEditing] = useState(false)
  const [currentOrders, setCurrentOrders] = useState<Order[]>([])
  const [pastOrders, setPastOrders] = useState<Order[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    setIsEditing(false)
  }

  // Mock orders data
  const demoCurrentOrders = [
    {
      id: "ORDER_123456",
      items: [
        { name: "Spicy Ramen Bowl", quantity: 1 },
        { name: "Gyoza", quantity: 1 },
      ],
      total: 15.99,
      status: "preparing",
      timestamp: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 25 * 60000).toISOString(),
    },
    {
      id: "ORDER_123457",
      items: [{ name: "Veggie Supreme Pizza", quantity: 1 }],
      total: 12.99,
      status: "on_the_way",
      timestamp: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 15 * 60000).toISOString(),
      scheduledDelivery: {
        timeSlot: "6:30 PM - 7:00 PM",
        startTime: new Date(Date.now() + 3 * 60 * 60000).toISOString(),
        endTime: new Date(Date.now() + 3.5 * 60 * 60000).toISOString(),
      },
    },
  ]

  const demoPastOrders = [
    {
      id: "ORDER_123458",
      items: [
        { name: "Grilled Chicken Salad", quantity: 1 },
        { name: "Iced Tea", quantity: 1 },
      ],
      total: 14.5,
      status: "delivered",
      date: "2025-02-07",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "ORDER_123459",
      items: [
        { name: "Cheeseburger", quantity: 1 },
        { name: "Fries", quantity: 1 },
        { name: "Soda", quantity: 1 },
      ],
      total: 18.99,
      status: "delivered",
      date: "2025-02-05",
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ]

  // Format date for display
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Format time for display
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "secondary"
      case "preparing":
        return "warning"
      case "ready":
        return "info"
      case "picked_up":
        return "info"
      case "on_the_way":
        return "primary"
      case "delivered":
        return "success"
      default:
        return "secondary"
    }
  }

  // Get status display text
  const getStatusDisplayText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmed"
      case "preparing":
        return "Preparing"
      case "ready":
        return "Ready for Pickup"
      case "picked_up":
        return "Picked Up"
      case "on_the_way":
        return "On the Way"
      case "delivered":
        return "Delivered"
      default:
        return status
    }
  }

  return (
    <Layout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                My Account
              </span>
            </h1>
            <p className="text-muted-foreground">Manage your profile, orders, and preferences</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="current-orders" className="flex items-center gap-2">
                <ShoppingBagIcon className="h-4 w-4" />
                Current Orders
              </TabsTrigger>
              <TabsTrigger value="order-history" className="flex items-center gap-2">
                <HistoryIcon className="h-4 w-4" />
                Order History
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <SettingsIcon className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 md:grid-cols-2">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={profile.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profile.email}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={profile.phone}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Label htmlFor="university">University</Label>
                        <Input
                          id="university"
                          name="university"
                          value={profile.university}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="md:col-span-2"
                      >
                        <Label htmlFor="dormAddress">Dorm Address</Label>
                        <Input
                          id="dormAddress"
                          name="dormAddress"
                          value={profile.dormAddress}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="mt-6"
                    >
                      {isEditing ? (
                        <div className="flex gap-2">
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
                          >
                            Save Changes
                          </Button>
                          <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <Button type="button" onClick={() => setIsEditing(true)}>
                          Edit Profile
                        </Button>
                      )}
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="current-orders">
              {demoCurrentOrders.length > 0 ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-4"
                >
                  {demoCurrentOrders.map((order) => (
                    <motion.div key={order.id} variants={orderVariants}>
                      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none hover:shadow-md transition-all">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                            <Badge variant={getStatusBadgeVariant(order.status)}>
                              {getStatusDisplayText(order.status)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <p className="mb-2">
                                {order.items.map((item) => `${item.name} (${item.quantity})`).join(", ")}
                              </p>
                              <p className="font-semibold mb-2">Total: ${order.total.toFixed(2)}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <ClockIcon className="h-4 w-4 mr-1" />
                                <span>
                                  Ordered: {formatTime(order.timestamp)}, {formatDate(order.timestamp)}
                                </span>
                              </div>

                              {order.scheduledDelivery ? (
                                <div className="flex items-center text-sm text-primary font-medium">
                                  <CalendarIcon className="h-4 w-4 mr-1" />
                                  <span>Scheduled: {order.scheduledDelivery.timeSlot}</span>
                                </div>
                              ) : (
                                order.estimatedDelivery && (
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <TruckIcon className="h-4 w-4 mr-1" />
                                    <span>Estimated delivery: {formatTime(order.estimatedDelivery)}</span>
                                  </div>
                                )
                              )}
                            </div>

                            <div className="flex justify-end">
                              <Link href={`/order-tracking/${order.id}`}>
                                <Button>
                                  Track Order
                                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardContent className="text-center py-12">
                    <TruckIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Current Orders</h3>
                    <p className="text-muted-foreground mb-4">You don't have any active orders at the moment.</p>
                    <Link href="/">
                      <Button>Browse Menu</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="order-history">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="space-y-4"
              >
                {demoPastOrders.map((order) => (
                  <motion.div key={order.id} variants={orderVariants}>
                    <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                          <Badge variant="success">Delivered</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">
                          {order.items.map((item) => `${item.name} (${item.quantity})`).join(", ")}
                        </p>
                        <p className="font-semibold mb-2">Total: ${order.total.toFixed(2)}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>Delivered: {order.date || formatDate(order.timestamp)}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Reorder
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BellIcon className="h-5 w-5" />
                      Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Order Updates</p>
                        <p className="text-sm text-muted-foreground">Get notified about your order status</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Promotions</p>
                        <p className="text-sm text-muted-foreground">Receive offers and discounts</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCardIcon className="h-5 w-5" />
                      Payment Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">•••• •••• •••• 1234</p>
                          <p className="text-sm text-muted-foreground">Expires 12/26</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Add Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5" />
                      Delivery Addresses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Dorm Room</p>
                          <p className="text-sm text-muted-foreground">{profile.dormAddress}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Add New Address
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardHeader>
                    <CardTitle>Account Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Download Data
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </Layout>
  )
}
