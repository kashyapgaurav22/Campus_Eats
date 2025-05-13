"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ClockIcon, TruckIcon, ExternalLinkIcon } from "lucide-react"

type Order = {
  id: string
  items: any[]
  total: number
  status: string
  date?: string
  timestamp: string
  estimatedDelivery?: string
}

const orderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Orders() {
  const [currentOrders, setCurrentOrders] = useState<Order[]>([])
  const [pastOrders, setPastOrders] = useState<Order[]>([])

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]")

    // Split into current and past orders
    const current: Order[] = []
    const past: Order[] = []

    savedOrders.forEach((order: Order) => {
      if (order.status === "delivered") {
        past.push(order)
      } else {
        current.push(order)
      }
    })

    setCurrentOrders(current)
    setPastOrders(past)

    // If no orders exist, add some demo orders
    if (savedOrders.length === 0) {
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

      setCurrentOrders(demoCurrentOrders)
      setPastOrders(demoPastOrders)
      localStorage.setItem("orders", JSON.stringify([...demoCurrentOrders, ...demoPastOrders]))
    }
  }, [])

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
      <Tabs defaultValue="current">
        <TabsList className="mb-4">
          <TabsTrigger value="current">Current Orders</TabsTrigger>
          <TabsTrigger value="past">Past Orders</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <TabsContent value="current">
            {currentOrders.length > 0 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {currentOrders.map((order) => (
                  <motion.div key={order.id} variants={orderVariants}>
                    <Card className="mb-4 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none hover:shadow-md transition-all">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>Order #{order.id}</CardTitle>
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

                            {order.estimatedDelivery && (
                              <div className="flex items-center text-sm text-muted-foreground">
                                <TruckIcon className="h-4 w-4 mr-1" />
                                <span>Estimated delivery: {formatTime(order.estimatedDelivery)}</span>
                              </div>
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
              <div className="text-center py-12">
                <TruckIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Current Orders</h3>
                <p className="text-muted-foreground mb-4">You don't have any active orders at the moment.</p>
                <Link href="/">
                  <Button>Browse Menu</Button>
                </Link>
              </div>
            )}
          </TabsContent>
          <TabsContent value="past">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {pastOrders.map((order) => (
                <motion.div key={order.id} variants={orderVariants}>
                  <Card className="mb-4 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>Order #{order.id}</CardTitle>
                        <Badge variant="success">Delivered</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{order.items.map((item) => `${item.name} (${item.quantity})`).join(", ")}</p>
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
        </AnimatePresence>
      </Tabs>
    </Layout>
  )
}
