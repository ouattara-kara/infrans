"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CalendarIcon, CheckIcon, InfoIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Schéma de validation du formulaire
const formSchema = z.object({
  // Informations personnelles
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  prenom: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  telephone: z.string().min(10, { message: "Veuillez entrer un numéro de téléphone valide" }),

  // Informations entreprise
  entreprise: z.string().optional(),
  poste: z.string().optional(),
  taille: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).optional(),

  // Services
  services: z.array(z.string()).min(1, { message: "Veuillez sélectionner au moins un service" }),

  // Détails du projet
  description: z.string().min(20, { message: "Veuillez fournir une description d'au moins 20 caractères" }),
  budget: z.enum(["<5000", "5000-10000", "10000-25000", "25000-50000", "50000+"]),
  delai: z.date({
    required_error: "Veuillez sélectionner une date souhaitée",
  }),

  // Préférences de contact
  contact_preference: z.enum(["email", "telephone", "visioconference"]),

  // Conditions
  conditions: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions d'utilisation" }),
  }),
})

export default function DevisForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialiser le formulaire avec react-hook-form et zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      entreprise: "",
      poste: "",
      services: [],
      description: "",
      contact_preference: "email",
      conditions: false,
    },
  })

  // Liste des services proposés
  const servicesList = [
    { id: "infrastructure", label: "Infrastructure Réseau" },
    { id: "cybersecurite", label: "Cybersécurité" },
    { id: "maintenance", label: "Maintenance Système" },
    { id: "vpn", label: "Solutions VPN" },
    { id: "cloud", label: "Cloud Computing" },
    { id: "support", label: "Support 24/7" },
    { id: "audit", label: "Audit de sécurité" },
    { id: "sauvegarde", label: "Solutions de sauvegarde" },
  ]

  // Gérer la soumission du formulaire
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simuler un envoi de formulaire (à remplacer par votre logique d'API)
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Rediriger vers la page d'accueil après 5 secondes
      setTimeout(() => {
        router.push("/")
      }, 5000)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">Demande de devis envoyée avec succès !</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Merci pour votre demande. Notre équipe va étudier votre projet et vous contactera dans les plus brefs
              délais.
            </p>
            <p className="text-sm text-muted-foreground">
              Vous allez être redirigé vers la page d'accueil dans quelques secondes...
            </p>
            <Button onClick={() => router.push("/")}>Retour à l'accueil</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Section Informations personnelles */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom*</FormLabel>
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
                      <FormLabel>Prénom*</FormLabel>
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
                      <FormLabel>Téléphone*</FormLabel>
                      <FormControl>
                        <Input placeholder="01 00 96 66 11" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Section Informations entreprise */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Informations entreprise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="entreprise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de l'entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Entreprise ONMA" {...field} />
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
                      <FormLabel>Poste / Fonction</FormLabel>
                      <FormControl>
                        <Input placeholder="Directrice IT" {...field} />
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
                      <FormLabel>Taille de l'entreprise</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez la taille de votre entreprise" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employés</SelectItem>
                          <SelectItem value="11-50">11-50 employés</SelectItem>
                          <SelectItem value="51-200">51-200 employés</SelectItem>
                          <SelectItem value="201-500">201-500 employés</SelectItem>
                          <SelectItem value="500+">Plus de 500 employés</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Section Services */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Services souhaités*</h2>
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
                          render={({ field }) => {
                            return (
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
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section Détails du projet */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Détails du projet</h2>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description du projet / besoin*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Décrivez votre projet ou vos besoins en détail..."
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
                      <FormLabel>Budget estimé*</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre budget" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<500000">Moins de 5 00000 CFA</SelectItem>
                          <SelectItem value="500000-1000000">5 00000 CFA - 1 000 000 CFA</SelectItem>
                          <SelectItem value="1000000-25000000">1 000 000 CFA - 25 000 000 CFA</SelectItem>
                          <SelectItem value="25000000-5000000">25 000 000 CFA - 50 000 000 CFA</SelectItem>
                          <SelectItem value="50000000+">Plus de 50 000 000 CFA</SelectItem>
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
                      <FormLabel>Date souhaitée de réalisation*</FormLabel>
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
                                <span>Sélectionnez une date</span>
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
                      <FormDescription>Minimum 7 jours à partir d'aujourd'hui</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Section Préférences de contact */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Préférences de contact</h2>

              <FormField
                control={form.control}
                name="contact_preference"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Comment souhaitez-vous être contacté?*</FormLabel>
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
                          <FormLabel className="font-normal">Téléphone</FormLabel>
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

            {/* Conditions d'utilisation */}
            <FormField
              control={form.control}
              name="conditions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>J'accepte les conditions d'utilisation et la politique de confidentialité*</FormLabel>
                    <FormDescription>
                      En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre
                      politique de confidentialité.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>Les champs marqués d'un astérisque (*) sont obligatoires.</AlertDescription>
            </Alert>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

