"use client"

import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

const currentOrders = [
  { id: 1, items: ["Spicy Ramen Bowl", "Gyoza"], total: 15.99, status: "Preparing" },
  { id: 2, items: ["Veggie Supreme Pizza"], total: 12.99, status: "On the way" },
]

const pastOrders = [
  { id: 3, items: ["Grilled Chicken Salad", "Iced Tea"], total: 14.5, status: "Delivered", date: "2025-02-07" },
  { id: 4, items: ["Cheeseburger", "Fries", "Soda"], total: 18.99, status: "Delivered", date: "2025-02-05" },
]

const orderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Orders() {
  return (
    <Layout>
      <Tabs defaultValue="current">
        <TabsList className="mb-4">
          <TabsTrigger value="current">Current Orders</TabsTrigger>
          <TabsTrigger value="past">Past Orders</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <TabsContent value="current">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {currentOrders.map((order) => (
                <motion.div key={order.id} variants={orderVariants}>
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>Order #{order.id}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{order.items.join(", ")}</p>
                      <p className="font-semibold mb-2">Total: ${order.total.toFixed(2)}</p>
                      <Badge>{order.status}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>Order #{order.id}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{order.items.join(", ")}</p>
                      <p className="font-semibold mb-2">Total: ${order.total.toFixed(2)}</p>
                      <Badge>{order.status}</Badge>
                      <p className="text-sm text-muted-foreground mt-2">Date: {order.date}</p>
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
