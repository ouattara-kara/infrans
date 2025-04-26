"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SmoothScrollLink from "@/components/smooth-scroll-link"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, currentLang, setLanguage } = useLanguageStore()
  const pathname = usePathname()

  const NavLink = ({ href, children, onClick, className = "" }: NavLinkProps) => {
    const baseClasses = "text-sm font-medium hover:text-primary transition-colors"
    
    if (href.startsWith('#')) {
      if (pathname === '/') {
        return (
          <SmoothScrollLink 
            href={href} 
            className={`${baseClasses} ${className}`}
            onClick={onClick}
          >
            {children}
          </SmoothScrollLink>
        )
      }
      return (
        <Link 
          href={`/${href}`} 
          className={`${baseClasses} ${className}`}
          scroll={false}
          onClick={onClick}
        >
          {children}
        </Link>
      )
    }
    return (
      <Link 
        href={href} 
        className={`${baseClasses} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">INFRANS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/">{t("nav.home")}</NavLink>
          <NavLink href="#services">{t("nav.services")}</NavLink>
          <NavLink href="#about">{t("nav.about")}</NavLink>
          <NavLink href="#contact">{t("nav.contact")}</NavLink>
          
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          
          <Button asChild className="mr-2">
            <Link href="/book-call">{t("nav.book_call")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/devis">{t("nav.quote")}</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4 items-center">
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </NavLink>
            <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>
              {t("nav.services")}
            </NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>
              {t("nav.about")}
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              {t("nav.contact")}
            </NavLink>
            
            <div className="flex items-center gap-4 pt-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            
            <div className="flex gap-2 w-full">
              <Button className="w-full" asChild>
                <Link href="/book-call" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.book_call")}
                </Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/devis" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.quote")}
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-2">
              <button 
                onClick={() => {
                  setLanguage("fr")
                  setIsMenuOpen(false)
                }} 
                disabled={currentLang === "fr"}
                className={`px-3 py-1 rounded-md text-sm ${currentLang === "fr" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
              >
                FR
              </button>
              <button 
                onClick={() => {
                  setLanguage("en")
                  setIsMenuOpen(false)
                }} 
                disabled={currentLang === "en"}
                className={`px-3 py-1 rounded-md text-sm ${currentLang === "en" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}