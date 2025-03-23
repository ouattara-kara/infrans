
"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Cpu, HardDrive, BarChart, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContent"
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore"


export default function MaintenanceSystemePage() {

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
                {t("maintenanceSysteme.heroTitle")}
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                {t("maintenanceSysteme.heroDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/devis">{t("maintenanceSysteme.demanderDevis")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t("maintenanceSysteme.nousContacter")}</Link>
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
          {t("maintenanceSysteme.nosServices")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.maintenancePreventive")}</h3>
              <p className="text-muted-foreground">
              {t("maintenanceSysteme.maintenancePreventiveDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <HardDrive className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.maintenanceCorrective")}</h3>
              <p className="text-muted-foreground">
              {t("maintenanceSysteme.maintenanceCorrectiveDescription")}.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.surveillanceReporting")}</h3>
              <p className="text-muted-foreground">
              {t("maintenanceSysteme.surveillanceReportingDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.support24_7")}</h3>
              <p className="text-muted-foreground">
              {t("maintenanceSysteme.support24_7Description")}.
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
              <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.gestionMisesAJour")}</h3>
              <p className="text-muted-foreground">
              {t("maintenanceSysteme.gestionMisesAJourDescription")}
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
              <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.sauvegardeRestauration")}</h3>
              <p className="text-muted-foreground">
              {t("maintenanceSysteme.sauvegardeRestaurationDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Infrans */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
            {t("maintenanceSysteme.pourquoiChoisir")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.expertiseTechnique")}</h3>
                  <p className="text-muted-foreground">
                  {t("maintenanceSysteme.expertiseTechniqueDescription")}.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.approcheProactive")}</h3>
                  <p className="text-muted-foreground">
                  {t("maintenanceSysteme.approcheProactiveDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.reactivite")}</h3>
                  <p className="text-muted-foreground">
                  {t("maintenanceSysteme.reactiviteDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.solutionsSurMesure")}</h3>
                  <p className="text-muted-foreground">
                  {t("maintenanceSysteme.solutionsSurMesureDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Études de cas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
          {t("maintenanceSysteme.nosRealisations")}
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
                <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.optimisationSystemes")}</h3>
                <p className="text-muted-foreground mb-4">
                {t("maintenanceSysteme.optimisationSystemesDescription")}
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
                <h3 className="text-xl font-bold mb-2">{t("maintenanceSysteme.support24_7Hotelier")}</h3>
                <p className="text-muted-foreground mb-4">
                {t("maintenanceSysteme.support24_7HotelierDescription")}
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{t("maintenanceSysteme.besoinMaintenance")}</h2>
          <p className="mb-6 max-w-2xl mx-auto">{t("maintenanceSysteme.besoinMaintenanceDescription")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/devis">{t("maintenanceSysteme.demanderDevis")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-primary-foreground/10"
            >
              <Link href="/contact">{t("maintenanceSysteme.nousContacter")}</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

