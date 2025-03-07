"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function SectionNavigator() {
  const [currentSection, setCurrentSection] = useState(0)
  const [sections, setSections] = useState<HTMLElement[]>([])

  useEffect(() => {
    // Récupérer toutes les sections principales
    const mainSections = Array.from(document.querySelectorAll("section[id]"))
    setSections(mainSections as HTMLElement[])

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Trouver la section actuellement visible
      for (let i = 0; i < mainSections.length; i++) {
        const section = mainSections[i] as HTMLElement
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialiser

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigateToSection = (index: number) => {
    if (sections[index]) {
      const navbarHeight = 64 // hauteur approximative de votre navbar
      const targetPosition = sections[index].offsetTop - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const goToPrevSection = () => {
    if (currentSection > 0) {
      navigateToSection(currentSection - 1)
    }
  }

  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      navigateToSection(currentSection + 1)
    }
  }

  // Ne pas afficher si moins de 2 sections
  if (sections.length < 2) return null

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full shadow-lg h-10 w-10"
        onClick={goToPrevSection}
        disabled={currentSection === 0}
        aria-label="Section précédente"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      <div className="flex flex-col items-center gap-2 py-2">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSection ? "bg-primary scale-125" : "bg-secondary hover:bg-primary/70"
            }`}
            onClick={() => navigateToSection(index)}
            aria-label={`Aller à la section ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="rounded-full shadow-lg h-10 w-10"
        onClick={goToNextSection}
        disabled={currentSection === sections.length - 1}
        aria-label="Section suivante"
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </div>
  )
}

