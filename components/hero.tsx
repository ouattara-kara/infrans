import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center lg:text-left">
                Solutions informatiques pour votre entreprise
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl text-center lg:text-left mx-auto lg:mx-0">
                Expertise en réseau et systèmes informatiques pour optimiser votre infrastructure et sécuriser vos
                données.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#services">Nos services</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contactez-nous</a>
              </Button>
            </div>
          </div>
          <Image
            src="/bg.png"
            width={550}
            height={550}
            alt="Image d'infrastructure réseau"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}

