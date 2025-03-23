// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollProgress from "@/components/scroll-progress"
import SectionNavigator from "@/components/section-navigator"
import Chatbot from "@/components/chatbot"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Infrans - Services Informatiques",
  description: "Solutions de réseau et système informatique pour entreprises",
  generator: "infrans",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
       
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
            <SectionNavigator />
            <Chatbot />
          </ThemeProvider>
      </body>
    </html>
  )
}