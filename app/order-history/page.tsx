"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const orderHistory = [
  { id: 1, date: "2025-02-01", items: ["Spicy Ramen Bowl"], total: 8.99 },
  { id: 2, date: "2025-02-03", items: ["Veggie Supreme Pizza", "Soda"], total: 15.99 },
  { id: 3, date: "2025-02-07", items: ["Grilled Chicken Salad", "Iced Tea"], total: 14.5 },
  { id: 4, date: "2025-02-10", items: ["Cheeseburger", "Fries"], total: 12.99 },
  { id: 5, date: "2025-02-15", items: ["Sushi Platter"], total: 22.99 },
]

export default function OrderHistory() {
  const [selectedMonth, setSelectedMonth] = useState("February")

  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={setSelectedMonth} defaultValue={selectedMonth}>
            <SelectTrigger className="w-[180px] mb-4">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="January">January</SelectItem>
              <SelectItem value="February">February</SelectItem>
              <SelectItem value="March">March</SelectItem>
              {/* Add more months as needed */}
            </SelectContent>
          </Select>

          <div className="space-y-4">
            {orderHistory.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">Order #{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <p className="mb-2">{order.items.join(", ")}</p>
                  <p className="font-semibold">Total: ${order.total.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </Layout>
  )
}
