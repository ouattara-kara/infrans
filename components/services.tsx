"use client"

import { Server, Cpu, Network, Cloud } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContent"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: t("services.infrastructure"),
      description: t("services.infrastructure_description"),
      lien: "/services/infrastructure-reseau",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: t("services.maintenance"),
      description: t("services.maintenance_description"),
      lien: "/services/maintenance-systeme",
    },
    {
      icon: <Network className="h-10 w-10 text-primary" />,
      title: t("services.vpn"),
      description: t("services.vpn_description"),
      lien: "/services/solutions-vpn",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: t("services.cloud"),
      description: t("services.cloud_description"),
      lien: "/services/cloud-computing",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("services.title")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("services.subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <div className="p-2 rounded-full bg-secondary">{service.icon}</div>
              <h3 className="text-xl font-bold text-center">{service.title}</h3>
              <p className="text-center text-muted-foreground">{service.description}</p>
              <Button asChild variant="outline">
                <Link href={service.lien}>
                  <span>{t("services.learn_more")}</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}