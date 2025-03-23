"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getCookie, setCookie } from "@/lib/cookies"
import { translations } from "./trad"


// Créer un contexte pour la langue
type LanguageContextType = {
  currentLang: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traductions (à compléter avec toutes vos chaînes de texte)

// Provider pour le contexte de langue
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState("fr")

  // Charger la langue depuis le cookie au chargement
  useEffect(() => {
    const savedLang = getCookie("language") || "en"
    setCurrentLang(savedLang)
  }, [])

  // Fonction pour changer de langue
  const setLanguage = (lang: string) => {
    setCurrentLang(lang)
    setCookie("language", lang, 365)
    // Recharger la page pour appliquer les changements
    window.location.reload()
  }

  // Fonction pour obtenir une traduction
  const t = (key: string) => {
    return translations[currentLang]?.[key] || key
  }

  return <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

