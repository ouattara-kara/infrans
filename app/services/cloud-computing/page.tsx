"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Cloud, Database, Lock, Server } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContent"


export default function CloudComputingPage() {
 const { t } = useLanguage();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center lg:text-left">
                {t("cloudComputing.heroTitle")}
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                {t("cloudComputing.heroDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/devis">{t("cloudComputing.demanderDevis")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t("cloudComputing.nousContacter")}</Link>
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
          {t("cloudComputing.nosServices")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("cloudComputing.iaas")}</h3>
              <p className="text-muted-foreground">
              {t("cloudComputing.iaasDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("cloudComputing.paas")}</h3>
              <p className="text-muted-foreground">
              {t("cloudComputing.paasDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("cloudComputing.migrationCloud")}</h3>
              <p className="text-muted-foreground">
              {t("cloudComputing.migrationCloudDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("cloudComputing.securiteCloud")}</h3>
              <p className="text-muted-foreground">
              {t("cloudComputing.securiteCloudDescription")}
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
              <h3 className="text-xl font-bold mb-2">{t("cloudComputing.optimisationCouts")}</h3>
              <p className="text-muted-foreground">
              {t("cloudComputing.optimisationCoutsDescription")}
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
              <h3 className="text-xl font-bold mb-2">{t("cloudComputing.cloudHybrideMultiCloud")}</h3>
              <p className="text-muted-foreground">
              {t("cloudComputing.cloudHybrideMultiCloudDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Infrans */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
            {t("cloudComputing.pourquoiChoisir")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("cloudComputing.expertiseMultiCloud")}</h3>
                  <p className="text-muted-foreground">
                  {t("cloudComputing.expertiseMultiCloudDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("cloudComputing.approchePersonnalisee")}</h3>
                  <p className="text-muted-foreground">
                  {t("cloudComputing.approchePersonnaliseeDescription")}.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("cloudComputing.securiteRenforcee")}</h3>
                  <p className="text-muted-foreground">
                  {t("cloudComputing.securiteRenforceeDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("cloudComputing.supportContinu")}</h3>
                  <p className="text-muted-foreground">
                  {t("cloudComputing.supportContinuDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Études de cas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">{t("cloudComputing.nosRealisations")}</h2>
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
                <h3 className="text-xl font-bold mb-2">{t("cloudComputing.migrationAWS")}</h3>
                <p className="text-muted-foreground mb-4">
                {t("cloudComputing.migrationAWSDescription")}
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
                <h3 className="text-xl font-bold mb-2">{t("cloudComputing.architectureMultiCloud")}</h3>
                <p className="text-muted-foreground mb-4">
                {t("cloudComputing.architectureMultiCloudDescription")}
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{t("cloudComputing.pretAMigrer")}</h2>
          <p className="mb-6 max-w-2xl mx-auto">
          {t("cloudComputing.pretAMigrerDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/devis">{t("cloudComputing.demanderDevis")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-primary-foreground/10"
            >
              <Link href="/contact">{t("cloudComputing.nousContacter")}</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

