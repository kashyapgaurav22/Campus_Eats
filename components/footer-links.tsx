"use client"

import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from "lucide-react"

export default function FooterLinks() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-primary dark:text-white mt-auto">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Campus Eats</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Connecting hungry students with delicious food since 2020.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-primary">
                About&nbsp;Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact&nbsp;Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-primary">
                Privacy&nbsp;Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary">
                Terms&nbsp;&&nbsp;Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-primary">
                Refund&nbsp;Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-primary">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/campus_eats_official?igsh=MXN0anAyaTNuMDRoeQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/campus_eats"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-primary"
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/campuseatsofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          © {year} Campus Eats. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
