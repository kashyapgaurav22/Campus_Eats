"use client"

import Link from "next/link"
import { useState, useEffect, type ReactNode } from "react"
import { MoonIcon, SunIcon, UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { TestModeIndicator } from "@/components/test-mode-indicator"
import FooterLinks from "@/components/footer-links"

export default function Layout({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  // Load dark mode preference from localStorage on initial render
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode !== null) {
      const isDark = JSON.parse(savedDarkMode)
      setIsDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [])

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-primary dark:text-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text"
            >
              Campus Eats
            </motion.span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/support">
              <Button variant="ghost" size="sm" className="dark:text-white">
                Support
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)} className="dark:text-white">
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="dark:text-white">
                <UserIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </nav>
      </header>
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 py-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-primary dark:text-white mt-auto py-4">
        <div className="container mx-auto px-4 text-center">
          <FooterLinks />
        </div>
      </footer>
      <TestModeIndicator />
    </div>
  )
}
