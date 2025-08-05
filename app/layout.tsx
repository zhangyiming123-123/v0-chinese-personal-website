import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "具身智能的实践者与创新者 - AI产品经理作品集",
  description:
    "专注于具身智能领域的AI产品经理，通过严谨的执行力将前沿技术变为现实。探索智能机器人、人机交互等前沿应用。",
  keywords: "具身智能,AI产品经理,机器人,人工智能,产品管理,创新",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
