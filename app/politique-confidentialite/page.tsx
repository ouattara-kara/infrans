export const metadata = {
  title: "Politique de confidentialité - Infrans",
  description: "Politique de confidentialité et protection des données personnelles de Infrans.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="container px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Politique de confidentialité</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              La présente politique de confidentialité a pour but d'informer les utilisateurs du site Infrans
              de la manière dont leurs informations personnelles sont collectées et traitées.
            </p>
            <p className="mb-4">
              Dans le cadre du Règlement Général sur la Protection des Données (RGPD), cette politique détaille les
              droits et obligations des utilisateurs concernant l'utilisation de leurs données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Collecte des données personnelles</h2>
            <p className="mb-4">Nous collectons les données personnelles suivantes :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nom et prénoms</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l'entreprise</li>
              <li>Fonction professionnelle</li>
            
            </ul>
            <p className="mb-4">Ces données sont collectées lorsque vous :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Remplissez un formulaire de contact</li>
              <li>Demandez un devis</li>
              <li>Réservez un rendez-vous</li>
              
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
            <p className="mb-4">Les données personnelles collectées sont utilisées pour :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
             
              <li>Répondre à vos demandes de contact</li>
              <li>Vous fournir des devis personnalisés</li>
              <li>Organiser des appels et rendez-vous</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
              <li>Améliorer notre site et nos services</li>
              <li>Établir des statistiques d'utilisation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Durée de conservation</h2>
            <p className="mb-4">
              Vos données personnelles sont conservées pour une durée limitée, en fonction de la finalité du traitement
              :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Données de contact : 3 ans à compter du dernier contact</li>
              <li>Données clients : durée de la relation contractuelle + 5 ans à des fins de preuve</li>
             
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Partage des données</h2>
            <p className="mb-4">Vos données personnelles peuvent être partagées avec :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Notre personnel autorisé</li>
              <li>Nos sous-traitants (hébergement, CRM, outils marketing)</li>
              <li>Des partenaires commerciaux (avec votre consentement)</li>
              <li>Des autorités administratives ou judiciaires si la loi l'exige</li>
            </ul>
            <p className="mb-4">Nous nous engageons à ne pas vendre vos données personnelles à des tiers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Sécurité des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
              personnelles contre la destruction, la perte, l'altération, la divulgation non autorisée ou l'accès non
              autorisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Vos droits</h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, vous pouvez nous contacter par email à privacy@ninfrans.onma ou par
              courrier à infrans.io, Cocody l'Informatique, 75000 Cote d'ivoire.
            </p>
          </section>

          
        

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à
              privacy@infrans.onma.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

