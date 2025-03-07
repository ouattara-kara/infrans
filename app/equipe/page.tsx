import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Notre équipe - Infrans",
  description: "Découvrez les experts qui composent l'équipe de Infrans.",
}

// Données fictives de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Doh Emmanuel",
    role: "Directeur Général",
    bio: "Plus de 15 ans d'expérience dans le secteur des technologies de l'information. Expert en stratégie IT et transformation numérique.",
    image: "/y.png",
    linkedin: "#",
    twitter: "#",
    email: "doh.emmanuel@Infrans.onma",
  },
  {
    id: 2,
    name: "Mariam ",
    role: "Responsable Cybersécurité",
    bio: "Certifiée CISSP et CEH avec 10 ans d'expérience en sécurité des systèmes d'information. Spécialiste en audit de sécurité et gestion des risques.",
    image: "/y.png",
    linkedin: "#",
    twitter: "#",
    email: "marie.martin@netsys-solutions.fr",
  },
  {
    id: 3,
    name: " Bonaze",
    role: "Architecte Réseau",
    bio: "Expert en conception et déploiement d'infrastructures réseau complexes. Certifié Cisco CCIE et VMware VCP-NV.",
    image: "/y.png",
    linkedin: "#",
    twitter: "#",
    email: "bonaze@Infrans.onma",
  },
  {
    id: 4,
    name: "Eliotte Esse",
    role: "Responsable Cloud",
    bio: "Spécialiste des solutions cloud AWS, Azure et Google Cloud. Experte en migration et optimisation des infrastructures cloud.",
    image: "/y.png",
    linkedin: "#",
    twitter: "#",
    email: "Esse.eliotte@Infrans.onma",
  },
  {
    id: 5,
    name: "yao koffi",
    role: "Ingénieur Système",
    bio: "Expert en administration système Windows et Linux. Spécialiste en automatisation et déploiement de solutions IT.",
    image: "/y.png",
    linkedin: "#",
    twitter: "#",
    email: "yao.lambert@Infrans.onma",
  },
  {
    id: 6,
    name: "Julianna koné",
    role: "Responsable Support Client",
    bio: "Passionnée par la satisfaction client et la résolution de problèmes techniques. Certifiée ITIL et experte en gestion de services IT.",
    image: "/y.png",
    linkedin: "#",
    twitter: "#",
    email: "julian.@Infrans.onma",
  },
  {
    id: 7,
    name: "Alexandre Petit",
    role: "Développeur Full Stack",
    bio: "Développeur expérimenté spécialisé dans la création d'applications web et mobiles pour le secteur B2B.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    email: "julian.@Infrans.onma",
  },
  {
    id: 8,
    name: "Émilie Leroy",
    role: "Responsable Commercial",
    bio: "Experte en développement commercial avec une solide connaissance des solutions IT pour entreprises.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    email: "julian.@Infrans.onma",
  },
]

export default function EquipePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Notre équipe</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez les experts qui composent l'équipe de Infrans. Notre force réside dans la diversité de
              nos compétences et notre passion commune pour l'excellence technique.
            </p>
          </div>
        </div>

        {/* Grille des membres de l'équipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member) => (
            <Card key={member.id} className="flex flex-col h-full">
              <div className="relative w-full pt-[100%] bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <div className="flex gap-4">
                  <Link href={member.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn de {member.name}</span>
                  </Link>
                  <Link href={member.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter de {member.name}</span>
                  </Link>
                  <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email de {member.name}</span>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Section rejoindre l'équipe */}
        
      </div>
    </main>
  )
}

