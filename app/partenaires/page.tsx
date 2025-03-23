"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getPartenaires } from '@/lib/api';
import { useLanguage } from "@/lib/i18n/LanguageContent"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useLanguageStore } from '@/lib/i18n/store/useLanguageStore';

// Définir l'interface Partenaire
interface Partenaire {
  id: number;
  name: string;
  description: string;
  photo: string;
  lien?: string;
 
}

export default function PartenairesPage() {
  const { t } = useLanguageStore();
  const [partners, setPartners] = useState<Partenaire[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les données des partenaires
  const fetchPartenaires = async () => {
    try {
      const data = await getPartenaires();
      setPartners(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("partenaires.donneeErreur"));
    } finally {
      setLoading(false);
    }
  };

  // Récupérer les données au chargement de la page
  useEffect(() => {
    fetchPartenaires();
  }, []);

  if (loading) return <p>{t("partenaires.chargement")}</p>;
  if (error) return <p>{t("partenaires.chargement_Error")} {error}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("partenaires.title")}</h1>
            <p className="max-w-[900px] mb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("partenaires.membre")}
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
                    src={partner.photo || "/placeholder.svg"}
                    alt={`Logo ${partner.name}`}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-center">{partner.name}</CardTitle>
                
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-left text-muted-foreground">{partner.description}</p>
              </CardContent>
              <CardFooter className="pt-0 justify-center">
                {partner.lien && (
                  <Link href={partner.lien}>
                    <Button variant="outline" size="sm">
                    {t("partenaires.plus")}
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}