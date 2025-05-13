"use client"

import { useState, useEffect } from "react"
import { AlertCircleIcon } from "lucide-react"

export function TestModeIndicator() {
  const [isTestMode, setIsTestMode] = useState(false)

  useEffect(() => {
    // Check if we're running in a test environment
    const hostname = window.location.hostname
    if (hostname === "localhost" || hostname.includes("vercel.app")) {
      setIsTestMode(true)
    }
  }, [])

  if (!isTestMode) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-2 rounded-md shadow-md flex items-center">
      <AlertCircleIcon className="h-4 w-4 mr-2" />
      <span className="text-xs font-medium">Test Mode</span>
    </div>
  )
}
