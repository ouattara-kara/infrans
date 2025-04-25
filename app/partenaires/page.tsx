"use client";

import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/lib/i18n/store/useLanguageStore';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Partenaire {
  id: number;
  name: string;
  description: string;
  photo: string;
  lien: string;
  category?: string;
}

const partners: Partenaire[] = [
  {
    id: 1,
    name: "AWS",
    description: "Leader mondial du cloud computing avec plus de 200 services.",
    photo: "public/aws.png",
    lien: "https://aws.amazon.com/",
    category: "cloud"
  },
  {
    id: 2,
    name: "Microsoft",
    description: "Solutions Azure et logiciels d'entreprise.",
    photo: "public/Microsoft.png",
    lien: "https://www.microsoft.com/",
    category: "cloud"
  },
  {
    id: 3,
    name: "Google Cloud",
    description: "Plateforme cloud avec IA intégrée.",
    photo: "public/GoogleCloud.webp",
    lien: "https://cloud.google.com/",
    category: "cloud"
  },
  {
    id: 4,
    name: "Cisco",
    description: "Solutions réseau et cybersécurité avancées.",
    photo: "public/Cisco.webp",
    lien: "https://www.cisco.com/",
    category: "reseau"
  },
 
];

export default function PartenairesPage() {
  const { t } = useLanguageStore();

  return (
    <main className="flex min-h-screen flex-col items-center py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("partenaires.title")}</h1>
            <p className="max-w-[900px] mb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("partenaires.membre")}
            </p>
          </div>
        </div>

        {/* Filtres par catégorie
         <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button variant="outline">Tous</Button>
          <Button variant="outline">Cloud</Button>
          <Button variant="outline">Réseau</Button>
          <Button variant="outline">Sécurité</Button>
        </div>

        
        */}
       
        {/* Liste des partenaires */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {partners.map((partner) => (
            <Card key={partner.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader className="pb-0">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={partner.photo}
                    alt={`Logo ${partner.name}`}
                    width={120}
                    height={60}
                    className="object-contain max-h-full"
                  />
                </div>
                <CardTitle className="text-center">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground text-center">{partner.description}</p>
              </CardContent>
              <CardFooter className="pt-0 justify-center">
                <Link href={partner.lien} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="mt-2">
                    {t("partenaires.plus")}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}