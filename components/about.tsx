"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContent"
import { useEffect, useState } from "react"
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore"


export default function About() {
  const { t, currentLang } = useLanguageStore()
  const [isClient, setIsClient] = useState(false) // État pour vérifier si le composant est côté client

  useEffect(() => {
    setIsClient(true) // Marquer que le composant est côté client après l'hydratation
  }, [])

  const advantages = [
    t("about.advantages.experience"),
    t("about.advantages.team"),
    t("about.advantages.solutions"),
    t("about.advantages.maintenance"),
    t("about.advantages.partnerships"),
  ]

  // Si le composant n'est pas encore côté client, retournez null ou un contenu de chargement
  if (!isClient) {
    return null
  }

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Image
            src="/onma.png"
            width={600}
            height={400}
            alt={t("about.image_alt")}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center lg:text-left">
                {t("about.title")}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                {t("about.description")}
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="/a-propos">{t("about.learn_more")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}