export const metadata = {
  title: "Mentions légales - Infrans",
  description: "Mentions légales et informations juridiques de Infrans.",
}

export default function MentionsLegalesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Mentions légales</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
            <p className="mb-4">
              Le site web Infrans est édité par la société Infrans, société par actions simplifiée au
              capital de 50 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123
              456 789, dont le siège social est situé au Cocody 7 ème tranche .
            </p>
            <p className="mb-4">Numéro de TVA intracommunautaire :  CI 901</p>
            <p className="mb-4">Directeur de la publication : Mr, Président de Infrans</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p className="mb-4">
              Le site est hébergé par la société Onma., dont le siège social est situé à ROME,
              Spienza, CA 91789, Italie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble des éléments constituant le site Infrans (textes, 
             , images,  logos, etc.) ainsi que le site lui-même, sont la
              propriété exclusive de Infrans ou de ses partenaires. Ces éléments sont protégés par les lois
              relatives à la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
              du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable
              de Infrans.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Données personnelles</h2>
            <p className="mb-4">
              Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à Infrans pour la gestion de sa clientèle et la prospection commerciale.
            </p>
            <p className="mb-4">
              Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez
              d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en
              vous adressant à Infrans, cocody Avenue de l'Informatique, 75000 Abidjan ou par email à
              privacy@infrans.onma.
            </p>
          </section>

         

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation de responsabilité</h2>
            <p className="mb-4">
             Infrans ne pourra être tenue responsable des dommages directs et indirects causés au matériel de
              l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas
              aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
            <p className="mb-4">
              Infrans ne pourra également être tenue responsable des dommages indirects consécutifs à
              l'utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Droit applicable et juridiction compétente</h2>
            <p className="mb-4">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

