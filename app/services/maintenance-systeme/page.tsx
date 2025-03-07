import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Cpu, HardDrive, BarChart, Clock } from "lucide-react"


export const metadata = {
  title: "Maintenance Système -Infrans",
  description:
    "Services de maintenance préventive et corrective pour assurer la disponibilité et les performances optimales de vos systèmes informatiques.",
}

export default function MaintenanceSystemePage() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center lg:text-left">
                Maintenance Système
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                Services de maintenance préventive et corrective pour assurer la disponibilité et les performances optimales de vos systèmes informatiques.
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
              src="/maintenance.png"
              width={550}
              height={550}
              alt="Maintenance Système"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        {/* Nos services de maintenance système */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
          Nos services de maintenance système
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Maintenance préventive</h3>
              <p className="text-muted-foreground">
                Surveillance proactive, mises à jour régulières et optimisation de vos systèmes pour prévenir les
                problèmes avant qu'ils n'affectent votre activité.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <HardDrive className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Maintenance corrective</h3>
              <p className="text-muted-foreground">
                Résolution rapide et efficace des incidents et problèmes techniques pour minimiser les temps d'arrêt et
                restaurer le fonctionnement normal.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Surveillance et reporting</h3>
              <p className="text-muted-foreground">
                Surveillance continue de vos systèmes avec alertes en temps réel et rapports détaillés sur les
                performances et l'état de santé de votre infrastructure.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Support technique 24/7</h3>
              <p className="text-muted-foreground">
                Assistance technique disponible 24h/24 et 7j/7 pour résoudre rapidement vos problèmes et répondre à vos
                questions.
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gestion des mises à jour</h3>
              <p className="text-muted-foreground">
                Planification, test et déploiement des mises à jour logicielles et de sécurité pour maintenir vos
                systèmes à jour et sécurisés.
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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sauvegarde et restauration</h3>
              <p className="text-muted-foreground">
                Mise en place et gestion de solutions de sauvegarde fiables avec tests réguliers de restauration pour
                garantir la récupération de vos données en cas d'incident.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir NetSys Solutions */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
            Pourquoi choisir Infrans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Expertise technique</h3>
                  <p className="text-muted-foreground">
                    Notre équipe est composée de techniciens certifiés avec une expertise approfondie sur les systèmes
                    Windows, Linux, macOS et les technologies de virtualisation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Approche proactive</h3>
                  <p className="text-muted-foreground">
                    Nous identifions et résolvons les problèmes potentiels avant qu'ils n'affectent votre activité,
                    minimisant ainsi les temps d'arrêt.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Réactivité</h3>
                  <p className="text-muted-foreground">
                    Nos équipes sont disponibles 24/7 pour répondre rapidement à vos besoins et résoudre les incidents
                    dans les meilleurs délais.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Solutions sur mesure</h3>
                  <p className="text-muted-foreground">
                    Nous adaptons nos services de maintenance à vos besoins spécifiques et à votre environnement
                    informatique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Études de cas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
          Nos réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/logomis.png"
                width={600}
                height={300}
                alt="Étude de cas 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Optimisation des systèmes pour une PME</h3>
                <p className="text-muted-foreground mb-4">
                  Mise en place d'une maintenance préventive et d'une surveillance proactive pour une PME, réduisant les
                  incidents de 80% et améliorant la productivité.
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
                <h3 className="text-xl font-bold mb-2">Support 24/7 pour un groupe hôtelier</h3>
                <p className="text-muted-foreground mb-4">
                  Mise en place d'un service de support technique 24/7 pour un groupe hôtelier, garantissant la
                  continuité des services informatiques essentiels.
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Besoin d'une maintenance système fiable ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de vos besoins en maintenance système et découvrir comment nous pouvons vous aider à assurer la continuité de vos opérations.</p>
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
              <Link href="/contact">Contactez-Nous</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

