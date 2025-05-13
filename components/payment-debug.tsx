"use client"

import { useEffect } from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BugIcon, XIcon } from "lucide-react"

export function PaymentDebug() {
  const [isOpen, setIsOpen] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  // Override console.log to capture payment-related logs
  useEffect(() => {
    const originalLog = console.log
    const originalError = console.error

    console.log = (...args) => {
      originalLog.apply(console, args)

      // Only capture payment-related logs
      const logString = args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg))).join(" ")

      if (
        logString.toLowerCase().includes("payment") ||
        logString.toLowerCase().includes("razorpay") ||
        logString.toLowerCase().includes("order")
      ) {
        setLogs((prev) => [...prev, `LOG: ${logString}`])
      }
    }

    console.error = (...args) => {
      originalError.apply(console, args)

      const errorString = args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg))).join(" ")

      if (
        errorString.toLowerCase().includes("payment") ||
        errorString.toLowerCase().includes("razorpay") ||
        errorString.toLowerCase().includes("order")
      ) {
        setLogs((prev) => [...prev, `ERROR: ${errorString}`])
      }
    }

    return () => {
      console.log = originalLog
      console.error = originalError
    }
  }, [])

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <BugIcon className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 left-4 z-50 w-80 max-h-96 shadow-xl">
      <CardHeader className="py-3 flex flex-row items-center justify-between">
        <CardTitle className="text-sm">Payment Debug</CardTitle>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
          <XIcon className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-xs overflow-auto max-h-64 bg-gray-100 dark:bg-gray-900 p-2 rounded">
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <div key={index} className={`mb-1 ${log.startsWith("ERROR") ? "text-red-500" : ""}`}>
                {log}
              </div>
            ))
          ) : (
            <div className="text-muted-foreground">No payment logs yet...</div>
          )}
        </div>
        <div className="mt-2 flex justify-between">
          <Button variant="outline" size="sm" onClick={() => setLogs([])}>
            Clear Logs
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setLogs((prev) => [...prev, `LOG: Test mode payment simulation triggered manually`])
              // Simulate a test payment
              const orderId = `ORDER_${Math.floor(Math.random() * 1000000)}`
              setLogs((prev) => [...prev, `LOG: Generated test order ID: ${orderId}`])
              setTimeout(() => {
                setLogs((prev) => [...prev, `LOG: Test payment completed successfully for order ${orderId}`])
              }, 2000)
            }}
          >
            Test Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
