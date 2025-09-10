import type React from "react"
import type { Metadata } from "next"
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700"],
  display: "swap",
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-ibm-plex-arabic",
  weight: ["300", "400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "يسر | Yusr - تسهيل الحياة الرقمية",
  description: "مشروع يسر لتسهيل الحياة الرقمية وتقديم حلول مبتكرة",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-sans ${cairo.variable} ${ibmPlexArabic.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
