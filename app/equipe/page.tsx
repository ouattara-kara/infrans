"use client";

import { useEffect, useState } from 'react';
import { getEquipe } from '@/lib/api'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContent"
import { useLanguageStore } from '@/lib/i18n/store/useLanguageStore';

interface EquipeMember {
  id: number;
  name: string;
  poste: string;
  description: string;
  photo: string;
  linkedin?: string;
  twitter?: string;
  email: string;
}

export default function EquipePage() {

   const { t } = useLanguageStore();
  const [teamMembers, setTeamMembers] = useState<EquipeMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les données de l'équipe
  const fetchEquipe = async () => {
    try {
      const data = await getEquipe();
      setTeamMembers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("equipe.donneeErreur"));
    } finally {
      setLoading(false);
    }
  };

  // Récupérer les données au chargement de la page
  useEffect(() => {
    fetchEquipe();
  }, []);

  if (loading) return <p>{t("equipe.chargement")}</p>;
  if (error) return <p>{t("equipe.chargement_Error")}: {error}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("equipe.title")}</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("equipe.membre")}
            </p>
          </div>
        </div>

        {/* Grille des membres de l'équipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member) => (
            <Card key={member.id} className="flex flex-col h-full">
              <div className="relative w-full pt-[100%] bg-muted">
                <Image
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.poste}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <div className="flex gap-4">
                  {member.linkedin && (
                    <Link href={member.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn  {member.name}</span>
                    </Link>
                  )}
                  {member.twitter && (
                    <Link href={member.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter {member.name}</span>
                    </Link>
                  )}
                  <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email  {member.name}</span>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}