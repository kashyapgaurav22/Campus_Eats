"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/campus-eats-logo.jpeg"
                alt="Campus Eats Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              {/* <span className="text-2xl font-bold text-purple-600">Campus Eats</span> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 ">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                How it Works
              </button>
              <Link href="/careers" className="text-gray-700 hover:text-purple-600 transition-colors">
                Careers
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex md:hidden items-center space-x-4">
              {/* Mobile menu button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="md:hidden border-purple-200 hover:bg-purple-50 bg-transparent"
                  >
                    <MenuIcon className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <button
                      onClick={() => scrollToSection("how-it-works")}
                      className="text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
                    >
                      How it Works
                    </button>
                    <button
                      onClick={() => scrollToSection("for-students")}
                      className="text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
                    >
                      For Students
                    </button>
                    <button
                      onClick={() => scrollToSection("universities")}
                      className="text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
                    >
                      Universities
                    </button>
                    <Link
                      href="/about"
                      className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/campus-eats-logo.jpeg"
                  alt="Campus Eats Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold text-purple-600">Campus Eats</span>
              </div>
              <p className="text-gray-600 text-sm">
                The food delivery app designed specifically for university students.
              </p>
            </div>

            {/* Students */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Students</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    How it Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("discounts")}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Student Discounts
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("campus-locations")}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Campus Locations
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2025 Campus Eats. All rights reserved. Made with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
