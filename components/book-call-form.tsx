// app/book-call/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarIcon, Clock, CheckIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays, isBefore, isWeekend } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PhoneInput from "@/components/PhoneInput";
import { useLanguage } from "@/lib/i18n/LanguageContent";
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore";

// Schéma de validation du formulaire avec traduction
const formSchema = (t: (key: string) => string) =>
  z.object({
    nom: z.string().min(2, { message: t("api.BookCall_schemaVal_nom") }),
    prenom: z.string().min(5, { message: t("api.BookCall_schemaVal_prenom") }),
    email: z.string().email({ message: t("api.BookCall_schemaVal_email") }),
    telephone: z.string().min(10, { message: t("api.BookCall_schemaVal_tel") }),
    entreprise: z.string().optional(),
    date: z.date({
      required_error: t("api.BookCall_schemaVal_date"),
    }),
    heure: z.string({
      required_error: t("api.BookCall_schemaVal_heure"),
    }),
    sujet: z.string().min(5, { message: t("api.BookCall_schemaVal_sujet") }),
    message: z.string().optional(),
  });

// Heures disponibles pour les appels
const heuresDisponibles = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:30",
  "14:00",
  "14:30",
];

export default function BookCallPage() {
  const { t } = useLanguageStore();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialiser le formulaire avec react-hook-form et zod
  const form = useForm<z.infer<ReturnType<typeof formSchema>>>({
    resolver: zodResolver(formSchema(t)), // Passer la fonction `t` pour la traduction
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      entreprise: "",
      sujet: "",
      message: "",
    },
  });

  // Fonction pour désactiver les dates non disponibles
  const disabledDates = (date: Date) => {
    // Désactiver les dates passées, les week-ends et les jours fériés
    return isBefore(date, addDays(new Date(), 1)) || isWeekend(date);
  };

  // Gérer la soumission du formulaire
  async function onSubmit(values: z.infer<ReturnType<typeof formSchema>>) {
    setIsSubmitting(true);

    try {
      // Envoyer les données à l'API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Rediriger vers la page d'accueil après 5 secondes
        setTimeout(() => {
          router.push('/');
        }, 5000);
      } else {
        alert(t("api.BookCall_apiEreur"));
      }
    } catch (error) {
      console.error(t("api.BookCall_apiEreur_envoie"), error);
      alert(t("api.BookCall_apiEreur2"));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">{t("api.BookCall_succes_h2")}</h2>
            <p className="text-muted-foreground max-w-[600px]">
              {t("api.BookCall_desciption_succes")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("api.BookCall_redirection")}
            </p>
            <Button onClick={() => router.push('/')}>{t("api.BookCall_pageAccueil")}</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Section Informations personnelles */}
            <div>
              <h2 className="text-xl font-semibold mb-4">{t("api.BookCall_Informations_personnelles")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.BookCall_Nom")}</FormLabel>
                      <FormControl>
                        <Input placeholder="Koffi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.BookCall_Prenoms")}</FormLabel>
                      <FormControl>
                        <Input placeholder="Emmanuel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jean.dupont@exemple.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.BookCall_Telephone")}</FormLabel>
                      <FormControl>
                        <PhoneInput value={field.value} onChange={(value) => field.onChange(value.__tag === "E164Number" ? value : value.toString().replace(/\D/g, ''))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="entreprise"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>{t("api.BookCall_Entreprise")} (optionnel)</FormLabel>
                      <FormControl>
                        <Input placeholder={t("api.BookCall_plaholder_entreprise")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Section Détails de rendez-vous */}
            <div>
              <h2 className="text-xl font-semibold mb-4">{t("api.BookCall_rdv")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t("api.BookCall_daterdv")}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: fr })
                              ) : (
                                <span>{t("api.BookCall_selectDate")}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={disabledDates}
                            initialFocus
                            locale={fr}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>{t("api.BookCall_Overture")}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="heure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.BookCall_Heurerdv")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("api.BookCall_SelectHeurerdv")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {heuresDisponibles.map((heure) => (
                            <SelectItem key={heure} value={heure}>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>{heure}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>{t("api.BookCall_DescriptionHorairerdv")}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sujet"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>{t("api.BookCall_Sujetrdv")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("api.BookCall_PlaceholderSujetrdv")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>{t("api.BookCall_Message")} (optionnel)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("api.BookCall_Detailrdv")}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                {t("api.BookCall_Informationrdv")}
              </AlertDescription>
            </Alert>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t("api.BookCall_Traitementrdv") : t("api.BookCall_Reserverrdv")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}