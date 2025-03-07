import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function About() {
  const advantages = [
    "Plus de 10 ans d'expérience dans le secteur",
    "Équipe certifiée et hautement qualifiée",
    "Solutions personnalisées selon vos besoins",
    "Approche proactive de la maintenance",
    "Partenariats avec les leaders du marché",
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Image
            src="/onma.png"
            width={600}
            height={400}
            alt="Notre équipe d'experts"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center lg:text-left">
                À propos de nous
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                Infrans est une entreprise spécialisée dans les services de réseau et système informatique.
                Nous accompagnons les entreprises dans leur transformation numérique en proposant des solutions adaptées
                à leurs besoins spécifiques.
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
                <a href="/a-propos">En savoir plus</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

