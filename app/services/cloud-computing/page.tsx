import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Cloud, Database, Lock, Server } from "lucide-react"

export const metadata = {
  title: "Cloud Computing - Infrans",
  description: "Solutions cloud flexibles et sécurisées pour optimiser vos ressources informatiques.",
}

export default function CloudComputingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center lg:text-left">
                  Cloud Computing
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                  Solutions cloud flexibles et sécurisées pour optimiser vos ressources informatiques et accélérer votre
                  transformation numérique.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/devis">Demander un devis</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/cloud4.png"
              width={550}
              height={550}
              alt="Cloud Computing"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last "
            />
          </div>
        </section>

        {/* Nos services de cloud computing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
            Nos services de cloud computing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Infrastructure as a Service (IaaS)</h3>
              <p className="text-muted-foreground">
                Déploiement et gestion d'infrastructures cloud évolutives et flexibles adaptées à vos besoins
                spécifiques.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Platform as a Service (PaaS)</h3>
              <p className="text-muted-foreground">
                Environnements de développement et de déploiement d'applications sans avoir à gérer l'infrastructure
                sous-jacente.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Migration vers le cloud</h3>
              <p className="text-muted-foreground">
                Accompagnement dans la migration de vos applications et données vers le cloud de manière sécurisée et
                efficace.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sécurité cloud</h3>
              <p className="text-muted-foreground">
                Protection de vos données et applications dans le cloud avec des solutions de sécurité avancées et
                conformes aux réglementations.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Optimisation des coûts</h3>
              <p className="text-muted-foreground">
                Analyse et optimisation de vos dépenses cloud pour maximiser votre retour sur investissement et réduire
                les coûts inutiles.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud hybride et multi-cloud</h3>
              <p className="text-muted-foreground">
                Conception et gestion d'architectures cloud hybrides et multi-cloud pour une flexibilité et une
                résilience maximales.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir NetSys Solutions */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Pourquoi choisir Infrans ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Expertise multi-cloud</h3>
                  <p className="text-muted-foreground">
                    Notre équipe est certifiée sur les principales plateformes cloud (AWS, Azure, Google Cloud) pour
                    vous offrir les meilleures solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Approche personnalisée</h3>
                  <p className="text-muted-foreground">
                    Nous concevons des solutions cloud adaptées à vos besoins spécifiques, à votre budget et à vos
                    objectifs métier.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Sécurité renforcée</h3>
                  <p className="text-muted-foreground">
                    Nous intégrons la sécurité à chaque étape de votre parcours cloud pour protéger vos données et
                    applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Support continu</h3>
                  <p className="text-muted-foreground">
                    Nous vous accompagnons tout au long de votre parcours cloud, de la planification à la maintenance en
                    passant par la migration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Études de cas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Nos réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="Étude de cas 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Migration vers AWS pour une entreprise de e-commerce</h3>
                <p className="text-muted-foreground mb-4">
                  Migration complète de l'infrastructure d'une entreprise de e-commerce vers AWS, permettant une
                  réduction des coûts de 40% et une amélioration des performances.
                </p>
                <Button variant="outline" size="sm">
                  Lire l'étude de cas
                </Button>
              </div>
            </div>
            <div className="bg-card border rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/logomis.png"
                width={600}
                height={300}
                alt="Étude de cas 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Architecture multi-cloud pour un groupe industriel</h3>
                <p className="text-muted-foreground mb-4">
                  Conception et mise en œuvre d'une architecture multi-cloud (AWS et Azure) pour un groupe industriel,
                  offrant une haute disponibilité et une résilience maximale.
                </p>
                <Button variant="outline" size="sm">
                  Lire l'étude de cas
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Prêt à migrer vers le cloud ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en cloud computing et découvrir comment nous
            pouvons vous aider à optimiser vos ressources informatiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/devis">Demander un devis</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

