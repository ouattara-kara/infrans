"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getCookie, setCookie } from "@/lib/cookies"

// Définir les types pour les traductions
type Translations = {
  [key: string]: {
    [key: string]: string
  }
}

// Créer un contexte pour la langue
type LanguageContextType = {
  currentLang: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traductions (à compléter avec toutes vos chaînes de texte)
const translations: Translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.book_call": "Réserver un appel",
    "nav.quote": "Demander un devis",

    // Hero section
    "hero.title": "Solutions informatiques pour votre entreprise",
    "hero.subtitle":
      "Expertise en réseau et systèmes informatiques pour optimiser votre infrastructure et sécuriser vos données.",
    "hero.services_btn": "Nos services",
    "hero.contact_btn": "Contactez-nous",

    // Services section
    "services.title": "Nos Services",
    "services.subtitle": "Des solutions complètes pour répondre à tous vos besoins informatiques",
    "services.infrastructure": "Infrastructure Réseau",
    "services.cybersecurity": "Cybersécurité",
    "services.maintenance": "Maintenance Système",
    "services.vpn": "Solutions VPN",
    "services.cloud": "Cloud Computing",
    "services.support": "Support 24/7",

    // About section
    "about.title": "À propos de nous",
    "about.description":
      "NetSys Solutions est une entreprise spécialisée dans les services de réseau et système informatique. Nous accompagnons les entreprises dans leur transformation numérique en proposant des solutions adaptées à leurs besoins spécifiques.",

    // Contact section
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Besoin d'informations ou d'un devis ? Notre équipe est à votre disposition.",

    // Cloud Computing page
    "cloud.title": "Cloud Computing",
    "cloud.subtitle":
      "Solutions cloud flexibles et sécurisées pour optimiser vos ressources informatiques et accélérer votre transformation numérique.",
    "cloud.quote": "Demander un devis",
    "cloud.contact": "Nous contacter",
    "cloud.services.title": "Nos services de cloud computing",
    "cloud.why.title": "Pourquoi choisir NetSys Solutions ?",
    "cloud.cases.title": "Nos réalisations",
    "cloud.cta.title": "Prêt à migrer vers le cloud ?",
    "cloud.cta.subtitle":
      "Contactez-nous dès aujourd'hui pour discuter de vos besoins en cloud computing et découvrir comment nous pouvons vous aider à optimiser vos ressources informatiques.",

    // Maintenance Système page
    "maintenance.title": "Maintenance Système",
    "maintenance.subtitle":
      "Services de maintenance préventive et corrective pour assurer la disponibilité et les performances optimales de vos systèmes informatiques.",
    "maintenance.quote": "Demander un devis",
    "maintenance.contact": "Nous contacter",
    "maintenance.services.title": "Nos services de maintenance système",
    "maintenance.why.title": "Pourquoi choisir NetSys Solutions ?",
    "maintenance.cases.title": "Nos réalisations",
    "maintenance.cta.title": "Besoin d'une maintenance système fiable ?",
    "maintenance.cta.subtitle":
      "Contactez-nous dès aujourd'hui pour discuter de vos besoins en maintenance système et découvrir comment nous pouvons vous aider à assurer la continuité de vos opérations.",

    // Solutions VPN page
    "vpn.title": "Solutions VPN",
    "vpn.subtitle":
      "Connexions sécurisées pour un accès distant fiable à vos ressources d'entreprise et une protection optimale de vos données.",
    "vpn.quote": "Demander un devis",
    "vpn.contact": "Nous contacter",
    "vpn.services.title": "Nos solutions VPN",
    "vpn.why.title": "Pourquoi choisir Infrans ?",
    "vpn.cases.title": "Nos réalisations",
    "vpn.cta.title": "Besoin d'une solution VPN sécurisée ?",
    "vpn.cta.subtitle":
      "Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière de VPN et découvrir comment nous pouvons sécuriser vos connexions distantes.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.book_call": "Book a call",
    "nav.quote": "Request a quote",

    // Hero section
    "hero.title": "IT Solutions for your business",
    "hero.subtitle": "Network and IT systems expertise to optimize your infrastructure and secure your data.",
    "hero.services_btn": "Our services",
    "hero.contact_btn": "Contact us",

    // Services section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive solutions to meet all your IT needs",
    "services.infrastructure": "Network Infrastructure",
    "services.cybersecurity": "Cybersecurity",
    "services.maintenance": "System Maintenance",
    "services.vpn": "VPN Solutions",
    "services.cloud": "Cloud Computing",
    "services.support": "24/7 Support",

    // About section
    "about.title": "About us",
    "about.description":
      "NetSys Solutions is a company specialized in network and IT system services. We support businesses in their digital transformation by offering solutions tailored to their specific needs.",

    // Contact section
    "contact.title": "Contact us",
    "contact.subtitle": "Need information or a quote? Our team is at your disposal.",

    // Cloud Computing page
    "cloud.title": "Cloud Computing",
    "cloud.subtitle":
      "Flexible and secure cloud solutions to optimize your IT resources and accelerate your digital transformation.",
    "cloud.quote": "Request a quote",
    "cloud.contact": "Contact us",
    "cloud.services.title": "Our cloud computing services",
    "cloud.why.title": "Why choose NetSys Solutions?",
    "cloud.cases.title": "Our achievements",
    "cloud.cta.title": "Ready to migrate to the cloud?",
    "cloud.cta.subtitle":
      "Contact us today to discuss your cloud computing needs and discover how we can help you optimize your IT resources.",

    // Maintenance Système page
    "maintenance.title": "System Maintenance",
    "maintenance.subtitle":
      "Preventive and corrective maintenance services to ensure the availability and optimal performance of your IT systems.",
    "maintenance.quote": "Request a quote",
    "maintenance.contact": "Contact us",
    "maintenance.services.title": "Our system maintenance services",
    "maintenance.why.title": "Why choose NetSys Solutions?",
    "maintenance.cases.title": "Our achievements",
    "maintenance.cta.title": "Need reliable system maintenance?",
    "maintenance.cta.subtitle":
      "Contact us today to discuss your system maintenance needs and discover how we can help you ensure business continuity.",

    // VPN Solutions page
    "vpn.title": "VPN Solutions",
    "vpn.subtitle":
      "Secure connections for reliable remote access to your business resources and optimal data protection.",
    "vpn.quote": "Request a quote",
    "vpn.contact": "Contact us",
    "vpn.services.title": "Our VPN solutions",
    "vpn.why.title": "Why choose NetSys Solutions?",
    "vpn.cases.title": "Our achievements",
    "vpn.cta.title": "Need a secure VPN solution?",
    "vpn.cta.subtitle":
      "Contact us today to discuss your VPN needs and discover how we can secure your remote connections.",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre nosotros",
    "nav.contact": "Contacto",
    "nav.book_call": "Reservar una llamada",
    "nav.quote": "Solicitar presupuesto",

    // Hero section
    "hero.title": "Soluciones informáticas para su empresa",
    "hero.subtitle":
      "Experiencia en redes y sistemas informáticos para optimizar su infraestructura y proteger sus datos.",
    "hero.services_btn": "Nuestros servicios",
    "hero.contact_btn": "Contáctenos",

    // Services section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones completas para satisfacer todas sus necesidades informáticas",
    "services.infrastructure": "Infraestructura de Red",
    "services.cybersecurity": "Ciberseguridad",
    "services.maintenance": "Mantenimiento de Sistemas",
    "services.vpn": "Soluciones VPN",
    "services.cloud": "Cloud Computing",
    "services.support": "Soporte 24/7",

    // About section
    "about.title": "Sobre nosotros",
    "about.description":
      "NetSys Solutions es una empresa especializada en servicios de redes y sistemas informáticos. Acompañamos a las empresas en su transformación digital ofreciendo soluciones adaptadas a sus necesidades específicas.",

    // Contact section
    "contact.title": "Contáctenos",
    "contact.subtitle": "¿Necesita información o un presupuesto? Nuestro equipo está a su disposición.",

    // Cloud Computing page
    "cloud.title": "Cloud Computing",
    "cloud.subtitle":
      "Soluciones cloud flexibles y seguras para optimizar sus recursos informáticos y acelerar su transformación digital.",
    "cloud.quote": "Solicitar presupuesto",
    "cloud.contact": "Contáctenos",
    "cloud.services.title": "Nuestros servicios de cloud computing",
    "cloud.why.title": "¿Por qué elegir NetSys Solutions?",
    "cloud.cases.title": "Nuestros logros",
    "cloud.cta.title": "¿Listo para migrar a la nube?",
    "cloud.cta.subtitle":
      "Contáctenos hoy para discutir sus necesidades de cloud computing y descubrir cómo podemos ayudarle a optimizar sus recursos informáticos.",

    // Maintenance Système page
    "maintenance.title": "Mantenimiento de Sistemas",
    "maintenance.subtitle":
      "Servicios de mantenimiento preventivo y correctivo para garantizar la disponibilidad y el rendimiento óptimo de sus sistemas informáticos.",
    "maintenance.quote": "Solicitar presupuesto",
    "maintenance.contact": "Contáctenos",
    "maintenance.services.title": "Nuestros servicios de mantenimiento de sistemas",
    "maintenance.why.title": "¿Por qué elegir NetSys Solutions?",
    "maintenance.cases.title": "Nuestros logros",
    "maintenance.cta.title": "¿Necesita un mantenimiento de sistemas fiable?",
    "maintenance.cta.subtitle":
      "Contáctenos hoy para discutir sus necesidades de mantenimiento de sistemas y descubrir cómo podemos ayudarle a garantizar la continuidad de su negocio.",

    // VPN Solutions page
    "vpn.title": "Soluciones VPN",
    "vpn.subtitle":
      "Conexiones seguras para un acceso remoto fiable a sus recursos empresariales y una protección óptima de sus datos.",
    "vpn.quote": "Solicitar presupuesto",
    "vpn.contact": "Contáctenos",
    "vpn.services.title": "Nuestras soluciones VPN",
    "vpn.why.title": "¿Por qué elegir NetSys Solutions?",
    "vpn.cases.title": "Nuestros logros",
    "vpn.cta.title": "¿Necesita una solución VPN segura?",
    "vpn.cta.subtitle":
      "Contáctenos hoy para discutir sus necesidades de VPN y descubrir cómo podemos asegurar sus conexiones remotas.",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.services": "Dienstleistungen",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.book_call": "Anruf buchen",
    "nav.quote": "Angebot anfordern",

    // Hero section
    "hero.title": "IT-Lösungen für Ihr Unternehmen",
    "hero.subtitle":
      "Expertise in Netzwerk- und IT-Systemen zur Optimierung Ihrer Infrastruktur und Sicherung Ihrer Daten.",
    "hero.services_btn": "Unsere Dienstleistungen",
    "hero.contact_btn": "Kontaktieren Sie uns",

    // Services section
    "services.title": "Unsere Dienstleistungen",
    "services.subtitle": "Umfassende Lösungen für alle Ihre IT-Bedürfnisse",
    "services.infrastructure": "Netzwerkinfrastruktur",
    "services.cybersecurity": "Cybersicherheit",
    "services.maintenance": "Systemwartung",
    "services.vpn": "VPN-Lösungen",
    "services.cloud": "Cloud Computing",
    "services.support": "24/7 Support",

    // About section
    "about.title": "Über uns",
    "about.description":
      "NetSys Solutions ist ein Unternehmen, das auf Netzwerk- und IT-Systemdienstleistungen spezialisiert ist. Wir begleiten Unternehmen bei ihrer digitalen Transformation, indem wir Lösungen anbieten, die auf ihre spezifischen Bedürfnisse zugeschnitten sind.",

    // Contact section
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Benötigen Sie Informationen oder ein Angebot? Unser Team steht Ihnen zur Verfügung.",

    // Cloud Computing page
    "cloud.title": "Cloud Computing",
    "cloud.subtitle":
      "Flexible und sichere Cloud-Lösungen zur Optimierung Ihrer IT-Ressourcen und Beschleunigung Ihrer digitalen Transformation.",
    "cloud.quote": "Angebot anfordern",
    "cloud.contact": "Kontaktieren Sie uns",
    "cloud.services.title": "Unsere Cloud-Computing-Dienstleistungen",
    "cloud.why.title": "Warum NetSys Solutions wählen?",
    "cloud.cases.title": "Unsere Erfolge",
    "cloud.cta.title": "Bereit für die Migration in die Cloud?",
    "cloud.cta.subtitle":
      "Kontaktieren Sie uns noch heute, um Ihre Cloud-Computing-Anforderungen zu besprechen und zu erfahren, wie wir Ihnen bei der Optimierung Ihrer IT-Ressourcen helfen können.",

    // Maintenance Système page
    "maintenance.title": "Systemwartung",
    "maintenance.subtitle":
      "Präventive und korrektive Wartungsdienste zur Gewährleistung der Verfügbarkeit und optimalen Leistung Ihrer IT-Systeme.",
    "maintenance.quote": "Angebot anfordern",
    "aintenance.services.contacts": "Kontaktieren Sie uns",
    "maintenance.services.title": "Unsere Systemwartungsdienste",
    "maintenance.why.title": "Warum NetSys Solutions wählen?",
    "maintenance.cases.title": "Unsere Erfolge",
    "maintenance.cta.title": "Benötigen Sie zuverlässige Systemwartung?",
    "maintenance.cta.subtitle":
      "Kontaktieren Sie uns noch heute, um Ihre Systemwartungsanforderungen zu besprechen und zu erfahren, wie wir Ihnen bei der Gewährleistung der Geschäftskontinuität helfen können.",

    // VPN Solutions page
    "vpn.title": "VPN-Lösungen",
    "vpn.subtitle":
      "Sichere Verbindungen für zuverlässigen Fernzugriff auf Ihre Unternehmensressourcen und optimalen Datenschutz.",
    "vpn.quote": "Angebot anfordern",
    "vpn.contact": "Kontaktieren Sie uns",
    "vpn.services.title": "Unsere VPN-Lösungen",
    "vpn.why.title": "Warum NetSys Solutions wählen?",
    "vpn.cases.title": "Unsere Erfolge",
    "vpn.cta.title": "Benötigen Sie eine sichere VPN-Lösung?",
    "vpn.cta.subtitle":
      "Kontaktieren Sie uns noch heute, um Ihre VPN-Anforderungen zu besprechen und zu erfahren, wie wir Ihre Fernverbindungen sichern können.",
  },
}

// Provider pour le contexte de langue
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState("fr")

  // Charger la langue depuis le cookie au chargement
  useEffect(() => {
    const savedLang = getCookie("language") || "fr"
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

