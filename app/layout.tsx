import type { ReactNode } from "react"
import { CartProvider } from "@/context/cart-context"
import "./globals.css"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

/**
 * Root layout with self-hosted Geist fonts applied globally.
 * Both fonts are imported from `geist/font`, which uses the
 * built-in `next/font` optimization under the hood.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      /* Expose the font variables so they can be consumed by Tailwind or plain CSS. */
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        {/* Apply the default font family and expose CSS variables for easy reuse */}
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>

      <body className="font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
