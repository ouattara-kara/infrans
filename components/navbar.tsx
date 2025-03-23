"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import SmoothScrollLink from "@/components/smooth-scroll-link"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/LanguageContent"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, currentLang, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Infrans</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            {t("nav.home")}
          </Link>
          <SmoothScrollLink href="#services" className="text-sm font-medium hover:text-primary">
          {t( "nav.services")}
          </SmoothScrollLink>
          <SmoothScrollLink href="#about" className="text-sm font-medium hover:text-primary">
          {t("nav.about")}
          </SmoothScrollLink>
          <SmoothScrollLink href="#contact" className="text-sm font-medium hover:text-primary">
          {t("nav.contact")}
          </SmoothScrollLink>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <Button asChild className="mr-2">
            <Link href="/book-call"> {t("nav.book_call")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/devis"> {t("nav.quote")}</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4 items-center">
            <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
            {t("nav.home")}
            </Link>
            <SmoothScrollLink
              href="#services"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
               {t( "nav.services")}
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#about"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
               {t("nav.contact")}
            </SmoothScrollLink>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Button className="w-full" asChild>
              <Link href="/book-call">{t("nav.book_call")}</Link>
            </Button>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/devis">{t("nav.quote")}</Link>
            </Button>
            <div>
        <button onClick={() => setLanguage("fr")} disabled={currentLang === "fr"}>
          FR
        </button>
        <button onClick={() => setLanguage("en")} disabled={currentLang === "en"}>
          EN
        </button>
      </div>

          </nav>
        </div>
      )}
    </header>
  )
}

