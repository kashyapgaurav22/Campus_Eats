"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  CheckIcon,
  ChefHatIcon,
  ClockIcon,
  MapPinIcon,
  PackageIcon,
  PhoneIcon,
  ReceiptIcon,
  StarIcon,
  TruckIcon,
  UserIcon,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

// Order status types
type OrderStatus = "confirmed" | "preparing" | "ready" | "picked_up" | "on_the_way" | "delivered"

// Order details type
type OrderDetails = {
  id: string
  items: any[]
  total: number
  address: any
  paymentMethod: string
  status: OrderStatus
  timestamp: string
  estimatedDelivery: string
  deliveryPerson?: {
    name: string
    phone: string
    rating: number
    image: string
  }
}

// Status steps
const statusSteps: { status: OrderStatus; label: string; icon: React.ReactNode }[] = [
  { status: "confirmed", label: "Order Confirmed", icon: <ReceiptIcon className="h-5 w-5" /> },
  { status: "preparing", label: "Preparing", icon: <ChefHatIcon className="h-5 w-5" /> },
  { status: "ready", label: "Ready for Pickup", icon: <PackageIcon className="h-5 w-5" /> },
  { status: "picked_up", label: "Picked Up", icon: <TruckIcon className="h-5 w-5" /> },
  { status: "on_the_way", label: "On the Way", icon: <MapPinIcon className="h-5 w-5" /> },
  { status: "delivered", label: "Delivered", icon: <CheckIcon className="h-5 w-5" /> },
]

export default function OrderTracking() {
  const params = useParams()
  const router = useRouter()
  const orderId = params.id as string
  const [order, setOrder] = useState<OrderDetails | null>(null)
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>("confirmed")
  const [progress, setProgress] = useState(0)
  const [remainingTime, setRemainingTime] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  // For demo purposes, we'll simulate order status changes
  useEffect(() => {
    // Load order from localStorage
    const loadOrder = () => {
      const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]")
      const foundOrder = savedOrders.find((o: any) => o.id === orderId)

      if (foundOrder) {
        setOrder(foundOrder)
        setCurrentStatus(foundOrder.status)

        // Calculate remaining time
        if (foundOrder.estimatedDelivery) {
          const estimatedTime = new Date(foundOrder.estimatedDelivery).getTime()
          const currentTime = new Date().getTime()
          const timeRemaining = Math.max(0, Math.floor((estimatedTime - currentTime) / 60000)) // in minutes
          setRemainingTime(timeRemaining)
        }
      }

      setLoading(false)
    }

    loadOrder()

    // Simulate order status progression for demo purposes
    const statusProgression = async () => {
      // Wait 5 seconds before starting the simulation
      await new Promise((resolve) => setTimeout(resolve, 5000))

      const statuses: OrderStatus[] = ["confirmed", "preparing", "ready", "picked_up", "on_the_way", "delivered"]
      let currentIndex = statuses.indexOf("confirmed")

      const interval = setInterval(() => {
        if (currentIndex < statuses.length - 1) {
          currentIndex++
          const newStatus = statuses[currentIndex]
          setCurrentStatus(newStatus)

          // Update order in localStorage
          const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]")
          const updatedOrders = savedOrders.map((o: any) => {
            if (o.id === orderId) {
              return { ...o, status: newStatus }
            }
            return o
          })
          localStorage.setItem("orders", JSON.stringify(updatedOrders))

          // Update progress
          setProgress(Math.round((currentIndex / (statuses.length - 1)) * 100))

          // If delivered, clear interval
          if (newStatus === "delivered") {
            clearInterval(interval)
          }
        } else {
          clearInterval(interval)
        }
      }, 15000) // Change status every 15 seconds for demo

      return () => clearInterval(interval)
    }

    const progressionPromise = statusProgression()

    // Update remaining time countdown
    const timeInterval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === null || prev <= 0) return 0
        return prev - 1
      })
    }, 60000) // Update every minute

    return () => {
      clearInterval(timeInterval)
      progressionPromise.then((clearFn) => clearFn && clearFn())
    }
  }, [orderId])

  // Calculate progress based on current status
  useEffect(() => {
    const statusIndex = statusSteps.findIndex((step) => step.status === currentStatus)
    if (statusIndex >= 0) {
      setProgress(Math.round((statusIndex / (statusSteps.length - 1)) * 100))
    }
  }, [currentStatus])

  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground dark:text-gray-300">Loading order details...</p>
        </div>
      </Layout>
    )
  }

  if (!order) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-red-100 p-4 dark:bg-red-900">
            <PackageIcon className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="mt-6 text-3xl font-bold dark:text-white">Order Not Found</h1>
          <p className="mt-2 text-center text-muted-foreground dark:text-gray-300">
            We couldn't find the order you're looking for.
          </p>
          <Button className="mt-8" onClick={() => router.push("/orders")}>
            View Your Orders
          </Button>
        </div>
      </Layout>
    )
  }

  // Format the estimated delivery time
  const formatEstimatedTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Get current status step
  const currentStep = statusSteps.findIndex((step) => step.status === currentStatus)

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold dark:text-white">Order Tracking</h1>
            <p className="text-muted-foreground dark:text-gray-300">Order ID: {order.id}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <Badge className="text-sm" variant={currentStatus === "delivered" ? "success" : "secondary"}>
              {statusSteps.find((step) => step.status === currentStatus)?.label || "Processing"}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Order Status Card */}
            <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
                <CardDescription>
                  {currentStatus === "delivered" ? "Your order has been delivered" : "Track your order in real-time"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="space-y-6">
                  {statusSteps.map((step, index) => {
                    const isActive = currentStep >= index
                    const isPast = currentStep > index

                    return (
                      <div key={step.status} className="flex items-start">
                        <div
                          className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                            isActive
                              ? "bg-primary border-primary text-primary-foreground"
                              : "border-muted-foreground/20 bg-background"
                          }`}
                        >
                          {step.icon}
                          {index < statusSteps.length - 1 && (
                            <div
                              className={`absolute top-9 left-1/2 h-full w-px -translate-x-1/2 ${
                                isPast ? "bg-primary" : "bg-muted-foreground/20"
                              }`}
                            />
                          )}
                        </div>
                        <div className="ml-4 space-y-1">
                          <p
                            className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {step.label}
                          </p>
                          {step.status === currentStatus && (
                            <AnimatePresence>
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-muted-foreground"
                              >
                                {step.status === "confirmed" && "We've received your order and are processing it."}
                                {step.status === "preparing" && "Our chefs are preparing your delicious meal."}
                                {step.status === "ready" && "Your order is ready and waiting for pickup."}
                                {step.status === "picked_up" && "Your order has been picked up by the delivery person."}
                                {step.status === "on_the_way" && "Your order is on the way to your location."}
                                {step.status === "delivered" && "Your order has been delivered. Enjoy your meal!"}
                              </motion.p>
                            </AnimatePresence>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Information Card */}
            <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium dark:text-white">Delivery Address</p>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">
                        {order.address.addressLine1}, {order.address.addressLine2}, {order.address.city},{" "}
                        {order.address.state} - {order.address.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <ClockIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium dark:text-white">Estimated Delivery Time</p>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">
                        {formatEstimatedTime(order.estimatedDelivery)}
                        {remainingTime !== null && remainingTime > 0 && (
                          <span className="ml-2">
                            (in approximately {remainingTime} {remainingTime === 1 ? "minute" : "minutes"})
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {currentStatus !== "confirmed" && currentStatus !== "preparing" && order.deliveryPerson && (
                    <div className="mt-6 border rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={order.deliveryPerson.image || "/placeholder.svg?height=100&width=100"}
                            alt={order.deliveryPerson.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium dark:text-white">{order.deliveryPerson.name}</p>
                              <div className="flex items-center">
                                <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                                <span className="text-sm text-muted-foreground dark:text-gray-300">
                                  {order.deliveryPerson.rating}
                                </span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="h-8">
                              <PhoneIcon className="h-4 w-4 mr-2" />
                              <a href={`tel:${order.deliveryPerson.phone}`}>Call</a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Order Summary Card */}
            <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="max-h-64 overflow-y-auto space-y-3 pr-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium truncate dark:text-white">{item.name}</h4>
                          <p className="text-xs text-muted-foreground dark:text-gray-300">
                            {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="text-sm font-medium dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground dark:text-gray-300">Subtotal</span>
                      <span className="dark:text-white">${(order.total - 2.99).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground dark:text-gray-300">Delivery Fee</span>
                      <span className="dark:text-white">$2.99</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="dark:text-white">Total</span>
                      <span className="dark:text-white">${order.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground dark:text-gray-300">Payment Method</span>
                      <Badge variant="outline">
                        {order.paymentMethod === "razorpay" ? "Paid Online" : "Cash on Delivery"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <UserIcon className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                  <Link href="/orders" className="block w-full">
                    <Button variant="outline" className="w-full">
                      <ReceiptIcon className="h-4 w-4 mr-2" />
                      View All Orders
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
