"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarIcon, CheckIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Schéma de validation du formulaire avec traduction
const formSchema = (t: (key: string) => string) =>
  z.object({
    nom: z.string().min(2, { message: t("api.Devis_schemaVal_nom") }),
    prenom: z.string().min(5, { message: t("api.Devis_schemaVal_prenom") }),
    email: z.string().email({ message: t("api.Devis_schemaVal_email") }),
    telephone: z.string().min(10, { message: t("api.Devis_schemaVal_tel") }),
    entreprise: z.string().optional(),
    poste: z.string().optional(),
    taille: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).optional(),
    services: z.array(z.string()).min(1, { message: t("api.Devis_schemaVal_service") }),
    description: z.string().min(20, { message: t("api.Devis_schemaVal_DescriptionProjet") }),
    budget: z.enum(["<5000", "5000-10000", "10000-25000", "25000-50000", "50000+"]),
    delai: z.date({
      required_error: t("api.Devis_schemaVal_dateSouhaite"),
    }),
    contact_preference: z.enum(["email", "telephone", "visioconference"]),
    conditions: z.boolean().refine((val) => val === true, {
      message: t("api.Devis_schemaVal_conditions"),
    }),
  });

export default function DevisForm() {
  const { t } = useLanguageStore();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<ReturnType<typeof formSchema>>>({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      entreprise: "",
      poste: "",
      services: [],
      description: "",
      budget: "<5000",
      contact_preference: "email",
      conditions: false,
    },
  });

  const servicesList = [
    { id: "infrastructure", label: "Infrastructure Réseau" },
    { id: "maintenance", label: "Maintenance Système" },
    { id: "vpn", label: "Solutions VPN" },
    { id: "cloud", label: "Cloud Computing" },
    { id: "support", label: "Support 24/7" },
    { id: "audit", label: "Audit de sécurité" },
    { id: "sauvegarde", label: "Solutions de sauvegarde" },
  ];

  const onSubmit = async (values: z.infer<ReturnType<typeof formSchema>>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const result = await response.json();
        console.error(t("api.Devis_apiEreur"), result.message);
      }
    } catch (error) {
      console.error(t("api.Devis_apiEreur"), error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">{t("api.Devis_succes_h2")}</h2>
            <p className="text-muted-foreground max-w-[600px]">
              {t("api.Devis_desciption_succes")}
            </p>
            <Button onClick={() => router.push("/")}>{t("api.Devis_pageAccueil")}</Button>
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
            <div>
              <h2 className="text-xl font-semibold mb-4">{t("api.Devis_Informations_personnelles")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.Devis_Nom")}</FormLabel>
                      <FormControl>
                        <Input placeholder="Koné" {...field} />
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
                      <FormLabel>{t("api.Devis_Prenoms")}</FormLabel>
                      <FormControl>
                        <Input placeholder="Sarah" {...field} />
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
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input placeholder="sarah.kone@exemple.com" type="email" {...field} />
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
                      <FormLabel>{t("api.Devis_Telephone")}</FormLabel>
                      <FormControl>
                        <PhoneInput
                          international
                          defaultCountry="CI"
                          value={field.value}
                          onChange={field.onChange}
                          className="border rounded-md p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Sections restantes du formulaire */}
            <div>
              <h2 className="text-xl font-semibold mb-4">{t("api.Devis_Entreprise")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="entreprise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.Devis_plaholder_entreprise")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("api.Devis_plaholder_entreprise2")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="poste"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.Devis_poste")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("api.Devis_plaholderPoste")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="taille"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>{t("api.Devis_Taillenentreprise")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("api.Devis_Taillenentrepriseplaceholder")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 {t("api.Devis_employes")}</SelectItem>
                          <SelectItem value="11-50">11-50 {t("api.Devis_employes")}</SelectItem>
                          <SelectItem value="51-200">51-200 {t("api.Devis_employes")}</SelectItem>
                          <SelectItem value="201-500">201-500 {t("api.Devis_employes")}</SelectItem>
                          <SelectItem value="500+">+ de 500 {t("api.Devis_employes")}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t("api.Devis_Services_souhaite")}</h2>
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {servicesList.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem key={service.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(field.value?.filter((value) => value !== service.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{service.label}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t("api.Devis_Details_du_projet")}</h2>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("api.Devis_DescriptionProjet")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("api.Devis_PlaceholderDescriptBesoin")}
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("api.Devis_budget")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("api.Devis_budget")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<5000">- de 5 000 CFA</SelectItem>
                          <SelectItem value="5000-10000">5 000 CFA - 10 000 CFA</SelectItem>
                          <SelectItem value="10000-25000">10 000 CFA - 25 000 CFA</SelectItem>
                          <SelectItem value="25000-50000">25 000 CFA - 50 000 CFA</SelectItem>
                          <SelectItem value="50000+">+ de 50 000 CFA</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="delai"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t("api.Devis_Date_souhaitee_realisation")}</FormLabel>
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
                                <span>{t("api.Devis_date")}</span>
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
                            disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() + 7))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>{t("api.Devis_delai")}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t("api.Devis_Preferences_contact")}</h2>
              <FormField
                control={form.control}
                name="contact_preference"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>{t("api.Devis_Preferences_contact")}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="email" />
                          </FormControl>
                          <FormLabel className="font-normal">Email</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="telephone" />
                          </FormControl>
                          <FormLabel className="font-normal">{t("api.Devis_PreferencesTel")}</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="visioconference" />
                          </FormControl>
                          <FormLabel className="font-normal">Visioconférence</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="conditions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{t("api.Devis_PreferencesConditionUtil")}</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>{t("api.Devis_Information")}</AlertDescription>
            </Alert>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t("api.Devis_Traitementrdv") : t("api.Devis_Reserver")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}