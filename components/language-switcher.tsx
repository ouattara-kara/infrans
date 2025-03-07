"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { setCookie, getCookie } from "@/lib/cookies"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  
]

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<string>("fr")
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Récupérer la langue depuis les cookies au chargement
    const savedLang = getCookie("language") || "fr"
    setCurrentLang(savedLang)
  }, [])

  useEffect(() => {
    // Fermer le menu si on clique en dehors
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    setCookie("language", langCode, 365) // Stocker la préférence de langue pendant 1 an
    setIsOpen(false)

    // Dans une application réelle, vous pourriez rediriger vers la version localisée
    // Pour l'instant, nous rechargeons simplement la page pour simuler le changement
    // window.location.reload()
  }

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className="h-8 w-8 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className="sr-only">Changer de langue</span>
      </Button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-popover border border-border z-50"
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${
                  language.code === currentLang ? "bg-accent/50" : ""
                }`}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

