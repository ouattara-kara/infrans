import { Server, Shield, Cpu, Network, Cloud, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
export default function Services() {
  const services = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Infrastructure Réseau",
      description: "Conception, installation et maintenance de réseaux informatiques sécurisés et performants.",
      lien:'/services/infrastructure-reseau',
    },
    ,
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Maintenance Système",
      description: "Services de maintenance préventive et corrective pour assurer la continuité de vos opérations.",
      lien:'/services/maintenance-systeme',
    },
    {
      icon: <Network className="h-10 w-10 text-primary" />,
      title: "Solutions VPN",
      description: "Mise en place de réseaux privés virtuels pour un accès sécurisé à distance à vos ressources.",
      lien:'/services/solutions-vpn',
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Computing",
      description: "Migration et gestion de vos services vers le cloud pour plus de flexibilité et d'évolutivité.",
      lien:'/services/cloud-computing',
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Support 24/7",
      description:
        "Assistance technique disponible 24h/24 et 7j/7 pour résoudre rapidement vos problèmes informatiques.",
      lien:'/services/infrastructure-reseau',  
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Des solutions complètes pour répondre à tous vos besoins informatiques
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
            <Link href={service.lien}>En savoir plus</Link>
          </Button>
            </div>
          ))}
        </div>
        
      </div>
     
    </section>
  )
}

