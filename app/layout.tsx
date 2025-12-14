import type { Metadata } from "next"
import "./globals.css"
import { ReactNode } from "react"
import { NavBar } from "@/components/NavBar"

export const metadata: Metadata = {
  title: "Tim Chen | Backend & Full-stack Developer",
  description:
    "Personal portfolio of Tim Chen, Node.js & Next.js developer.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-8" id="top">
          <NavBar />
          <main className="mt-10 space-y-16">{children}</main>
        </div>
      </body>
    </html>
  )
}