import BookCallForm from "@/components/book-call-form"

export const metadata = {
  title: "Réserver un rendez-vous - Infrans",
  description: "Planifiez un rendez-vous avec nos experts pour discuter de vos besoins en réseau et système informatique.",
}

export default function BookCallPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Prendre un rendez-vous</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Planifiez un rendez-vous avec l'un de nos experts pour discuter de vos besoins spécifiques.
            </p>
          </div>
        </div>

        <BookCallForm />
      </div>
    </main>
  )
}

