"use client"

import type React from "react"

import type { ReactNode } from "react"
import Link from "next/link"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function SmoothScrollLink({ href, children, className = "", onClick }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si c'est un lien d'ancrage
    if (href.startsWith("#")) {
      e.preventDefault()

      // Trouver l'élément cible
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Calculer la position avec un petit décalage pour la navbar
        const navbarHeight = 64 // hauteur approximative de votre navbar
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight

        // Défilement fluide
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Mettre à jour l'URL sans recharger la page
        window.history.pushState(null, "", href)

        // Exécuter le callback onClick si fourni
        if (onClick) onClick()
      }
    } else if (onClick) {
      // Pour les liens non-ancrage, exécuter simplement le callback
      onClick()
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

