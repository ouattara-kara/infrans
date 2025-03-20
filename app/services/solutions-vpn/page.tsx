"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Shield, Globe, Lock, Network } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContent"



export default function SolutionsVPNPage() {
  
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
                {t("solutionsVPN.heroTitle")}
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                {t("solutionsVPN.heroDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/devis">{t("solutionsVPN.demanderDevis")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t("solutionsVPN.nousContacter")}</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/vpn.png"
              width={550}
              height={550}
              alt="Solutions VPN"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        {/* Nos solutions VPN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
          {t("solutionsVPN.nosSolutions")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.vpnSiteASite")}</h3>
              <p className="text-muted-foreground">
              {t("solutionsVPN.vpnAccesDistant")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.vpnAccesDistant")}</h3>
              <p className="text-muted-foreground">
              {t("solutionsVPN.vpnAccesDistantDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2"> {t("solutionsVPN.vpnSSL")}</h3>
              <p className="text-muted-foreground">
              {t("solutionsVPN.vpnSSLDescription")}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.vpnMPLS")}</h3>
              <p className="text-muted-foreground">
              {t("solutionsVPN.vpnMPLSDescription")}
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2"> {t("solutionsVPN.vpnHauteSecurite")}</h3>
              <p className="text-muted-foreground">
              {t("solutionsVPN.vpnHauteSecuriteDescription")}
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.gestionSupportVPN")}</h3>
              <p className="text-muted-foreground">
              {t("solutionsVPN.gestionSupportVPNDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Infrans */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">{t("solutionsVPN.pourquoiChoisir")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.expertiseTechnique")}</h3>
                  <p className="text-muted-foreground">
                  {t("solutionsVPN.expertiseTechniqueDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.securiteRenforcee")}</h3>
                  <p className="text-muted-foreground">
                  {t("solutionsVPN.securiteRenforceeDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.solutionsSurMesure")}</h3>
                  <p className="text-muted-foreground">
                  {t("solutionsVPN.solutionsSurMesureDescription")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.supportContinu")}</h3>
                  <p className="text-muted-foreground">
                  {t("solutionsVPN.supportContinuDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Études de cas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center"> {t("solutionsVPN.nosRealisations")}</h2>
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
                <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.vpnMultiSites")}</h3>
                <p className="text-muted-foreground mb-4">
                {t("solutionsVPN.vpnMultiSitesDescription")}
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
                <h3 className="text-xl font-bold mb-2">{t("solutionsVPN.solutionAccesDistant")}</h3>
                <p className="text-muted-foreground mb-4">
                {t("solutionsVPN.solutionAccesDistantDescription")}
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{t("solutionsVPN.besoinVPN")}</h2>
          <p className="mb-6 max-w-2xl mx-auto">{t("solutionsVPN.besoinVPNDescription")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/devis">{t("solutionsVPN.demanderDevis")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-primary-foreground/10"
            >
              <Link href="/contact">{t("solutionsVPN.nousContacter")}</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

