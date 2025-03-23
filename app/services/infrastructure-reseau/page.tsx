"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Server, Network, Shield, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContent"
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore"



export default function InfrastructureReseauPage() {
  const { t } = useLanguageStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center lg:text-left">
                {t("infrastructureReseau.heroTitle")}
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                {t("infrastructureReseau.heroDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/devis">{t("infrastructureReseau.demanderDevis")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t("infrastructureReseau.nousContacter")}</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/infr.png"
              width={550}
              height={550}
              alt={t("infrastructureReseau.title")}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        {/* Nos services d'infrastructure réseau */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
          {t("infrastructureReseau.nosServices")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.conceptionReseau")}</h3>
              <p className="text-muted-foreground">
              {t("infrastructureReseau.conceptionReseauDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2"> {t("infrastructureReseau.deploiementInstallation")}</h3>
              <p className="text-muted-foreground">
              {t("infrastructureReseau.deploiementInstallationDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.securisationReseau")}</h3>
              <p className="text-muted-foreground">
              {t("infrastructureReseau.securisationReseauDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.maintenanceSupport")}</h3>
              <p className="text-muted-foreground">
              {t("infrastructureReseau.maintenanceSupportDescription")}
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
              <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.optimisationPerformances")}</h3>
              <p className="text-muted-foreground">
              {t("infrastructureReseau.optimisationPerformancesDescription")}
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
              <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.evolutionMiseAJour")}</h3>
              <p className="text-muted-foreground">
              {t("infrastructureReseau.evolutionMiseAJourDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Infrans */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
            {t("infrastructureReseau.pourquoiChoisir")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.expertiseCertifiee")}</h3>
                  <p className="text-muted-foreground">
                  {t("infrastructureReseau.expertiseCertifieeDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.solutionsSurMesure")}</h3>
                  <p className="text-muted-foreground">
                  {t("infrastructureReseau.solutionsSurMesureDescription")}.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.support24_7")}</h3>
                  <p className="text-muted-foreground">
                  {t("infrastructureReseau.support24_7Description")}.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.approcheProactive")}.</h3>
                  <p className="text-muted-foreground">
                  {t("infrastructureReseau.approcheProactiveDescription")}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Études de cas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">{t("infrastructureReseau.nosRealisations")}</h2>
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
                <h3 className="text-xl font-bold mb-2">{t("infrastructureReseau.refonteReseau")}</h3>
                <p className="text-muted-foreground mb-4">
                {t("infrastructureReseau.refonteReseauDescription")}
                </p>
               
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
                <h3 className="text-xl font-bold mb-2">
                {t("infrastructureReseau.deploiementMultiSites")}
                </h3>
                <p className="text-muted-foreground mb-4">
                {t("infrastructureReseau.deploiementMultiSitesDescription")}
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
          {t("infrastructureReseau.pretAOptimiser")}
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
          {t("infrastructureReseau.pretAOptimiserDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/devis">{t("infrastructureReseau.demanderDevis")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-primary-foreground/10"
            >
              <Link href="/contact">{t("infrastructureReseau.nousContacter")}</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

