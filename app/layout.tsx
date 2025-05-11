import type { ReactNode } from "react"
import { CartProvider } from "@/context/cart-context"
import "./globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
