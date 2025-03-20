"use client"

import DevisForm from "@/components/devis-form"
import { useLanguage } from "@/lib/i18n/LanguageContent";


export default function DevisPage() {
  const { t } = useLanguage();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl"> {t("api.Devis_heroTitle")}</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("api.Devis_heroTitleDescription")}
            </p>
          </div>
        </div>

        <DevisForm />
      </div>
    </main>
  )
}

