
"use client"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContent"
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore"

{/* 
export const metadata = {
  title: "À propos - Infrans",
  description: "Découvrez l'histoire, la mission et les valeurs de Infrans.",
}
*/}
export default function AProposPage() {
  const { t } = useLanguageStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("apropos.heroDescription")}</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("apropos.description_titre")}
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
              alt="Histoire de infrans"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center lg:text-left">
                {t("apropos.h2_histoire")}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                {t("apropos.h2_description_histoire_1")}
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center lg:text-left">
                {t("apropos.h2_description_histoire_2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre Mission */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">{t("apropos.mission_h2")}</h2>
            <p className="text-xl mb-8">
            {t("apropos.mission_h2_description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{t("apropos.innover")}</h3>
                <p>
                {t("apropos.Innover_description")}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3"> {t("apropos.securise")}</h3>
                <p> {t("apropos.securise_description")}</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3"> {t("apropos.Accompagner")}</h3>
                <p> {t("apropos.Accompagner_description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Valeurs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center"> <p> {t("apropos.Valeurs")}</p></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("apropos.Excellence")}</h3>
                <p className="text-muted-foreground">
                {t("apropos.Excellence_description")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("apropos.Integrite")}</h3>
                <p className="text-muted-foreground">
                {t("apropos.Integrite_description")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("apropos.innovation")}</h3>
                <p className="text-muted-foreground">
                {t("apropos.innovation_description")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full p-2 mt-1">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("apropos.collaboration")}</h3>
                <p className="text-muted-foreground">
                {t("apropos.collaboration_description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Chiffres Clés */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">{t("apropos.Chiffres")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">+500</p>
              <p className="text-lg">{t("apropos.Chiffres_description_1")}</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">+1000</p>
              <p className="text-lg">{t("apropos.Chiffres_description_2")}</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-lg">{t("apropos.Chiffres_description_3")}</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">13</p>
              <p className="text-lg">{t("apropos.Chiffres_description_4")}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

