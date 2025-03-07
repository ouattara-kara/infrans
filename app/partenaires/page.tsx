import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Partenaires - Infrans",
  description:
    "Découvrez nos partenaires technologiques et commerciaux qui nous permettent de vous offrir des solutions de qualité.",
}

// Partenaires fictifs
const partners = [
  {
    id: 1,
    name: "Microsoft",
    logo: "/aws.png",
    category: "Cloud & Infrastructure",
    description:
      "Partenaire Gold Microsoft, nous déployons et gérons des solutions Azure, Microsoft 365 et Windows Server pour nos clients.",
  },
  {
    id: 2,
    name: "Cisco",
    logo: "/aws.png",
    category: "Réseau & Sécurité",
    description:
      "En tant que partenaire certifié Cisco, nous proposons des solutions réseau performantes et sécurisées.",
  },
  {
    id: 3,
    name: "AWS",
    logo: "/aws.png",
    category: "Cloud & Infrastructure",
    description:
      "Partenaire AWS Advanced, nous concevons et implémentons des architectures cloud évolutives et sécurisées sur la plateforme Amazon Web Services.",
  },
  {
    id: 4,
    name: "VMware",
    logo: "/aws.png",
    category: "Virtualisation",
    description:
      "Nous sommes partenaire VMware pour proposer des solutions de virtualisation performantes et fiables à nos clients.",
  },
  {
    id: 5,
    name: "Fortinet",
    logo: "/aws.png",
    category: "Sécurité",
    description:
      "Partenaire Fortinet, nous déployons des solutions de sécurité avancées pour protéger les infrastructures de nos clients.",
  },
  {
    id: 6,
    name: "Dell Technologies",
    logo: "/aws.png",
    category: "Infrastructure",
    description:
      "En tant que partenaire Dell, nous fournissons des solutions matérielles de haute performance pour les entreprises.",
  },
  {
    id: 7,
    name: "Veeam",
    logo: "/aws.png",
    category: "Sauvegarde & Reprise",
    description:
      "Nous sommes partenaire Veeam pour offrir des solutions de sauvegarde et de reprise après sinistre fiables.",
  },
  {
    id: 8,
    name: "Palo Alto Networks",
    logo: "/aws.png",
    category: "Sécurité",
    description: "Partenaire Palo Alto, nous implémentons des solutions de sécurité réseau de nouvelle génération.",
  },
]

// Catégories de partenaires
const categories = [
  "Tous",
  "Cloud & Infrastructure",
  "Réseau & Sécurité",
  "Virtualisation",
  "Sécurité",
  "Infrastructure",
  "Sauvegarde & Reprise",
]

export default function PartenairesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos Partenaires</h1>
            <p className="max-w-[900px] mb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez les entreprises avec lesquelles nous collaborons pour vous offrir des solutions informatiques de
              qualité.
            </p>
          </div>
        </div>

       
       

        {/* Liste des partenaires */}
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner) => (
            <Card key={partner.id} className="flex flex-col h-full">
              <CardHeader className="pb-0">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`Logo ${partner.name}`}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-center">{partner.name}</CardTitle>
                <CardDescription className="text-left">{partner.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-left text-muted-foreground">{partner.description}</p>
              </CardContent>
              <CardFooter className="pt-0 justify-center">
                <Button variant="outline" size="sm">
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        
      </div>
    </main>
  )
}

