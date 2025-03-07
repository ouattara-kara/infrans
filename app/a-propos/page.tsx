import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "À propos - Infrans",
  description: "Découvrez l'histoire, la mission et les valeurs de Infrans.",
}

export default function AProposPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">À propos de Infrans</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez notre histoire, notre mission et nos valeurs.
            </p>
          </div>
        </div>

        {/* Section Notre Histoire */}
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/onma.png"
              width={600}
              height={400}
              alt="Histoire de NetSys Solutions"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center lg:text-left">
                  Notre Histoire
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                  Fondée en 2010 par une équipe d'experts passionnés par les technologies de l'information, Infrans
                 est née de la volonté d'offrir des services informatiques de qualité supérieure aux
                  entreprises de toutes tailles.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                  Au fil des années, nous avons développé notre expertise et élargi notre gamme de services pour
                  répondre aux besoins croissants de nos clients dans un environnement technologique en constante
                  évolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre Mission */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Notre Mission</h2>
            <p className="text-xl mb-8">
              Accompagner les entreprises dans leur transformation numérique en fournissant des solutions informatiques
              innovantes, sécurisées et adaptées à leurs besoins spécifiques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Innover</h3>
                <p>
                  Proposer des solutions à la pointe de la technologie pour optimiser les performances de nos clients.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Sécuriser</h3>
                <p>Protéger les infrastructures et les données de nos clients contre les menaces informatiques.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Accompagner</h3>
                <p>Offrir un support personnalisé et réactif pour garantir la satisfaction de nos clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Valeurs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous nous efforçons d'atteindre l'excellence dans tous nos services et projets, en maintenant les plus
                  hauts standards de qualité.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Intégrité</h3>
                <p className="text-muted-foreground">
                  Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles, en respectant
                  nos engagements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Nous encourageons la créativité et l'innovation pour développer des solutions qui répondent aux défis
                  technologiques actuels et futurs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Nous croyons en la puissance du travail d'équipe et de la collaboration, tant en interne qu'avec nos
                  clients et partenaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Chiffres Clés */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Chiffres Clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">+500</p>
              <p className="text-lg">Clients satisfaits</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">+1000</p>
              <p className="text-lg">Projets réalisés</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-lg">Experts certifiés</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">13</p>
              <p className="text-lg">Années d'expérience</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

