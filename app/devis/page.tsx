import DevisForm from "@/components/devis-form"

export const metadata = {
  title: "Demander un devis - Infrans",
  description:
    "Remplissez notre formulaire pour recevoir un devis personnalisé pour vos besoins en réseau et système informatique.",
}

export default function DevisPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Demander un devis</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>

        <DevisForm />
      </div>
    </main>
  )
}

