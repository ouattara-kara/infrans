 // Définir les types pour les traductions
type Translations = {
    [key: string]: {
      [key: string]: string
    }
  }
 
 export const translations: Translations = {
    fr: {
      // Navigation
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.book_call": "Prendre un rendez-vous",
      "nav.quote": "Demander un devis",
  
      // Hero section
      "hero.title": "Solutions informatiques pour votre entreprise",
      "hero.subtitle":
        "Expertise en réseau et systèmes informatiques pour optimiser votre infrastructure et sécuriser vos données.",
      "hero.services_btn": "Nos services",
      "hero.contact_btn": "Contactez-nous",
  
      // Services section
      "services.title": "Nos Services",
      "services.subtitle": "Des solutions complètes pour répondre à tous vos besoins informatiques",
      "services.infrastructure": "Infrastructure Réseau",
      "services.infrastructure_description": "Conception, installation et maintenance de réseaux informatiques sécurisés et performants.",
      "services.maintenance": "Maintenance Système",
      "services.vpn": "Solutions VPN",
      "services.cloud": "Cloud Computing",
      "services.support": "Support 24/7",
      "services.maintenance_description": "Services de maintenance préventive et corrective pour assurer la continuité de vos opérations.",
      "services.vpn_description": "Mise en place de réseaux privés virtuels pour un accès sécurisé à distance à vos ressources.",
      "services.cloud_description": "Migration et gestion de vos services vers le cloud pour plus de flexibilité et d'évolutivité.",
      "services.learn_more": "En savoir plus",
      // About section
      "about.title": "À propos de nous",
      "about.description":
        "Infrans est une entreprise spécialisée dans les services de réseau et système informatique. Nous accompagnons les entreprises dans leur transformation numérique en proposant des solutions adaptées à leurs besoins spécifiques.",
      "about.image_alt": "Notre équipe d'experts",
      "about.advantages.experience": "Plus de 10 ans d'expérience dans le secteur",
      "about.advantages.team": "Équipe certifiée et hautement qualifiée",
      "about.advantages.solutions": "Solutions personnalisées selon vos besoins",
      "about.advantages.maintenance": "Approche proactive de la maintenance",
      "about.advantages.partnerships": "Partenariats avec les leaders du marché",
      "about.learn_more": "En savoir plus",
      // Contact section
      "contact.title": "Contactez-nous",
      "contact.subtitle": "Besoin d'informations ou d'un devis ? Notre équipe est à votre disposition.",
      "contact.phone": "Téléphone",
      "contact.email": "Email",
      "contact.address": "Adresse",
      "contact.opening_hours": "Horaires d'ouverture",
      "contact.weekdays": "Lundi - Vendredi",
      "contact.saturday": "Samedi",
      "contact.sunday": "Dimanche",
      "contact.closed": "Fermé",
      "contact.name_label": "Nom",
      "contact.name_placeholder": "Votre nom",
      "contact.email_label": "Email",
      "contact.email_placeholder": "Votre email",
      "contact.subject_label": "Sujet",
      "contact.subject_placeholder": "Sujet de votre message",
      "contact.message_label": "Message",
      "contact.message_placeholder": "Votre message",
      "contact.submit_button": "Envoyer",
      "contact.submitting": "Envoi en cours...",
      "contact.success_message": "Votre message a été envoyé avec succès! Nous vous contacterons bientôt.",
      "contact.error_message": "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
  
  // infrastructure page
  "infrastructureReseau.title":"Infrastructure Réseau",
  "infrastructureReseau.description":"Solutions d'infrastructure réseau performantes et sécurisées pour votre entreprise.",
  "infrastructureReseau.heroTitle":"Infrastructure Réseau",
  "infrastructureReseau.heroDescription":"Des solutions réseau performantes, évolutives et sécurisées pour connecter efficacement votre entreprise.",
  "infrastructureReseau.demanderDevis":"Demander un devis",
  "infrastructureReseau.nousContacter":"Nous contacter",
  "infrastructureReseau.nosServices":"Nos services d'infrastructure réseau",
  "infrastructureReseau.conceptionReseau":"Conception de réseau",
  "infrastructureReseau.conceptionReseauDescription":"Conception et planification d'infrastructures réseau adaptées à vos besoins spécifiques, qu'il s'agisse de réseaux locaux (LAN), étendus (WAN) ou sans fil (WLAN).",
  "infrastructureReseau.deploiementInstallation":"Déploiement et installation",
  "infrastructureReseau.deploiementInstallationDescription":"Installation et configuration de tous les composants réseau : routeurs, commutateurs, pare-feu, points d'accès Wi-Fi, et autres équipements essentiels.",
  "infrastructureReseau.securisationReseau":"Sécurisation réseau",
  "infrastructureReseau.securisationReseauDescription":"Mise en place de solutions de sécurité réseau robustes : pare-feu nouvelle génération, systèmes de détection d'intrusion, VPN sécurisés et segmentation réseau.",
  "infrastructureReseau.maintenanceSupport":"Maintenance et support",
  "infrastructureReseau.maintenanceSupportDescription":"Services de maintenance préventive et corrective pour assurer la disponibilité et les performances optimales de votre infrastructure réseau.",
  "infrastructureReseau.optimisationPerformances":"Optimisation des performances.",
  "infrastructureReseau.optimisationPerformancesDescription":"Analyse et optimisation de votre réseau pour améliorer les performances, réduire la latence et garantir une bande passante adéquate pour vos applications critiques.",
  "infrastructureReseau.evolutionMiseAJour":"Évolution et mise à niveau.",
  "infrastructureReseau.evolutionMiseAJourDescription":"Accompagnement dans l'évolution de votre infrastructure réseau pour suivre la croissance de votre entreprise et l'adoption de nouvelles technologies",
  "infrastructureReseau.pourquoiChoisir":"Pourquoi choisir Infrans ?",
  "infrastructureReseau.expertiseCertifiee":"Expertise certifiée",
  "infrastructureReseau.expertiseCertifieeDescription": "Notre équipe est composée d'ingénieurs certifiés Cisco, Juniper, HPE et autres technologies réseau de pointe.",
  "infrastructureReseau.solutionsSurMesure": "Solutions sur mesure",
  "infrastructureReseau.solutionsSurMesureDescription": "Nous concevons des infrastructures réseau adaptées à vos besoins spécifiques et à votre budget.",
  "infrastructureReseau.support24_7": "Support 24/7",
  "infrastructureReseau.support24_7Description":"Notre équipe de support est disponible 24h/24 et 7j/7 pour résoudre rapidement tout problème réseau.",
  "infrastructureReseau.approcheProactive": "Approche proactive",
  "infrastructureReseau.approcheProactiveDescription": "Nous surveillons en permanence votre réseau pour identifier et résoudre les problèmes avant qu'ils n'affectent votre activité.",
  "infrastructureReseau.nosRealisations": "Nos réalisations",
  "infrastructureReseau.refonteReseau": "Refonte du réseau pour une entreprise de 500 employés",
  "infrastructureReseau.refonteReseauDescription": "Conception et déploiement d'une infrastructure réseau complète pour améliorer les performances et la sécurité tout en réduisant les coûts opérationnels.",
  "infrastructureReseau.deploiementMultiSites": "Déploiement d'un réseau multi-sites pour un groupe industriel",
  "infrastructureReseau.deploiementMultiSitesDescription": "Mise en place d'une infrastructure réseau sécurisée reliant 12 sites répartis dans le monde avec une haute disponibilité.",
  "infrastructureReseau.pretAOptimiser": "Prêt à optimiser votre infrastructure réseau ?",
  "infrastructureReseau.pretAOptimiserDescription": "Contact us today to discuss your network infrastructure needs and discover how we can help you improve the performance and security of your network.",
  
  
      // Cloud Computing page
      
          "cloudComputing.title": "Cloud Computing - Infrans",
          "cloudComputing.description": "Solutions cloud flexibles et sécurisées pour optimiser vos ressources informatiques.",
          "cloudComputing.heroTitle": "Cloud Computing",
          "cloudComputing.heroDescription":
            "Solutions cloud flexibles et sécurisées pour optimiser vos ressources informatiques et accélérer votre transformation numérique.",
          "cloudComputing.demanderDevis": "Demander un devis",
          "cloudComputing.nousContacter": "Nous contacter",
          "cloudComputing.nosServices": "Nos services de cloud computing",
          "cloudComputing.iaas": "Infrastructure as a Service (IaaS)",
          "cloudComputing.iaasDescription":
            "Déploiement et gestion d'infrastructures cloud évolutives et flexibles adaptées à vos besoins spécifiques.",
          "cloudComputing.paas": "Platform as a Service (PaaS)",
          "cloudComputing.paasDescription":
            "Environnements de développement et de déploiement d'applications sans avoir à gérer l'infrastructure sous-jacente.",
          "cloudComputing.migrationCloud": "Migration vers le cloud",
          "cloudComputing.migrationCloudDescription":
            "Accompagnement dans la migration de vos applications et données vers le cloud de manière sécurisée et efficace.",
            "cloudComputing.securiteCloud": "Sécurité cloud",
            "cloudComputing.securiteCloudDescription":
            "Protection de vos données et applications dans le cloud avec des solutions de sécurité avancées et conformes aux réglementations.",
           "cloudComputing.optimisationCouts": "Optimisation des coûts",
           "cloudComputing.optimisationCoutsDescription":
            "Analyse et optimisation de vos dépenses cloud pour maximiser votre retour sur investissement et réduire les coûts inutiles.",
            "cloudComputing.cloudHybrideMultiCloud": "Cloud hybride et multi-cloud",
            "cloudComputing.cloudHybrideMultiCloudDescription":
            "Conception et gestion d'architectures cloud hybrides et multi-cloud pour une flexibilité et une résilience maximales.",
            "cloudComputing.pourquoiChoisir": "Pourquoi choisir Infrans ?",
            "cloudComputing.expertiseMultiCloud": "Expertise multi-cloud",
            "cloudComputing.expertiseMultiCloudDescription":
            "Notre équipe est certifiée sur les principales plateformes cloud (AWS, Azure, Google Cloud) pour vous offrir les meilleures solutions.",
            "cloudComputing.approchePersonnalisee": "Approche personnalisée",
            "cloudComputing.approchePersonnaliseeDescription":
            "Nous concevons des solutions cloud adaptées à vos besoins spécifiques, à votre budget et à vos objectifs métier.",
            "cloudComputing.securiteRenforcee": "Sécurité renforcée",
            "cloudComputing.securiteRenforceeDescription":
            "Nous intégrons la sécurité à chaque étape de votre parcours cloud pour protéger vos données et applications.",
            "cloudComputing.supportContinu": "Support continu",
            "cloudComputing.supportContinuDescription":
            "Nous vous accompagnons tout au long de votre parcours cloud, de la planification à la maintenance en passant par la migration.",
            "cloudComputing.nosRealisations": "Nos réalisations",
            "cloudComputing.migrationAWS": "Migration vers AWS pour une entreprise de e-commerce",
            "cloudComputing.migrationAWSDescription":
            "Migration complète de l'infrastructure d'une entreprise de e-commerce vers AWS, permettant une réduction des coûts de 40% et une amélioration des performances.",
            "cloudComputing.architectureMultiCloud": "Architecture multi-cloud pour un groupe industriel",
            "cloudComputing.architectureMultiCloudDescription":
            "Conception et mise en œuvre d'une architecture multi-cloud (AWS et Azure) pour un groupe industriel, offrant une haute disponibilité et une résilience maximale.",
            "cloudComputing.pretAMigrer": "Prêt à migrer vers le cloud ?",
            "cloudComputing.pretAMigrerDescription":
            "Contactez-nous dès aujourd'hui pour discuter de vos besoins en cloud computing et découvrir comment nous pouvons vous aider à optimiser vos ressources informatiques.",
     
  
  // a propos de insfrans
  
  "apropos.title_infrans":"À propos - Infrans",
  "apropos.description_infrans":"Découvrez l'histoire, la mission et les valeurs de Infrans.",
  "apropos.heroTitle":"À propos - Infrans",
  "apropos.heroDescription":"À propos de Infrans",
  "apropos.description_titre":" Découvrez notre histoire, notre mission et nos valeurs.",
  "apropos.h2_histoire":"Notre Histoire",
  "apropos.h2_description_histoire_1":
       " Fondée en 2020 par une équipe d'experts passionnés par les technologies de l'information, Infrans est née de la volonté d'offrir des services informatiques de qualité supérieure au entreprises de toutes tailles.",
  "apropos.h2_description_histoire_2":"Au fil des années, nous avons développé notre expertise et élargi notre gamme de services pour répondre aux besoins croissants de nos clients dans un environnement technologique en constant évolution.",
  "apropos.mission_h2":"Notre Mission",
  "apropos.mission_h2_description":" Accompagner les entreprises dans leur transformation numérique en fournissant des solutions informatiques innovantes, sécurisées et adaptées à leurs besoins spécifiques.",
  "apropos.innover":"Innover",
  "apropos.Innover_description":"Proposer des solutions à la pointe de la technologie pour optimiser les performances de nos clients.",
  "apropos.securise":"Sécuriser",
  "apropos.securise_description":"Protéger les infrastructures et les données de nos clients contre les menaces informatiques.",
  "apropos.Accompagner":"Accompagner",
  "apropos.Accompagner_description":"Offrir un support personnalisé et réactif pour garantir la satisfaction de nos clients.",
  "apropos.Valeurs":"Nos Valeurs",
  "apropos.Excellence":"Excellence",
  "apropos.Excellence_description":"Nous nous efforçons d'atteindre l'excellence dans tous nos services et projets, en maintenant les plus hauts standards de qualité.",
  "apropos.Integrite":"Intégrité",
  "apropos.Integrite_descrption":"Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles, en respectant nos engagements.",
  "apropos.Innovation":"Innovation",
  "apropos.Innovation_description":"Nous encourageons la créativité et l'innovation pour développer des solutions qui répondent aux défis technologiques actuels et futurs.",
  "apropos.Collaboration":"Collaboration",
  "apropos.Collaboration_description":"Nous croyons en la puissance du travail d'équipe et de la collaboration, tant en interne qu'avec nos clients et partenaires.",
  "apropos.Chiffres":"Chiffres Clés",
  "apropos.Chiffres_description_1":"Clients satisfaits",
  "apropos.Chiffres_description_2":"Projets réalisés",
  "apropos.Chiffres_description_3":"Experts certifiés",
  "apropos.Chiffres_description_4":"Années d'expérience",
  
  // api contact 
  "matin":"Bonjour",
  "soir":"Bonsoir",
  "api.contact_subject":"Nouveau message de contact",
  "api.contact_text_name":"Nom",
  "api.contact_mailoptionsubject":"Confirmation de réception de votre message",
  "api.contact_text_recap":"Nous avons bien reçu votre message. Voici un récapitulatif de votre demande :",
  "api.contact_text_bientot":"Nous vous contacterons bientôt.",
  "api.Cordialement":"Cordialement,",
  "api.equipe":" L'équipe de Infrans.",
  "api.emailEnvoye":"E-mail envoyé avec succès !",
  "api.erreurEmailSend":"Erreur lors de l\'envoi de l\'e-mail :",
  "api.erreurEmail":"Une erreur s\'est produite.",
  
  // api devis 
  
  "api.devis_subject":"Nouvelle demande de devis de",
  "api.devis_Name":"Nom",
  "api.devis_Prenom":"Prénoms",
  "api.devis_Tel":" Téléphone",
  "api.devis_Entreprise":"Entreprise",
  "api.devis_Non_renseignee":"Non renseignée",
  "api.devis_Poste":"Poste",
  "api.devis_Taille_entreprise":"Taille de l'entreprise",
  "api.devis_Services_souhaites":"Services souhaités",
  "api.devis_Description_projet":"Description du projet",
  "api.devis_Budget_estime":"Budget estimé",
  "api.devis_Date_souhaitee":" Date souhaitée",
  "api.devis_Preference_contact":"Préférence de contact",
  "api.devis_mailoptionsubject":"Confirmation de réception de votre demande de devis",
  "api.devis_recap":" Nous avons bien reçu votre demande de devis. Voici un récapitulatif de votre demande :",
  "api.devis_bientot":" Nous vous contacterons bientôt pour discuter de votre projet.",
  "api.Devis_Reserverrdv":"Reserver rendez-vous",
  // api send-email
  "api.sendemail_subject":" Nouvelle demande de rendez-vous",
  "api.sendemail_Name":"Nom",
  "api.dsendemail_Prenom":"Prénoms",
  "api.dsendemail_Tel":" Téléphone",
  "api.sendemail_Entreprise":"Entreprise",
  "api.sendemail_Non_renseignee":"Non renseignée",
  "api.sendemail_date":"Date",
  "api.sendemail_heure":"Heure",
  "api.sendemail_sujet":"Sujet",
  "api.sendemail_messageErreur":"Aucun message supplémentaire",
  
  
  // Book a call
  "api.BookCall_title":" Réserver un rendez-vous - Infrans",
  "api.BookCall_description":" Planifiez un rendez-vous avec nos experts pour discuter de vos besoins en réseau et système informatique.",
  "api.BookCall_heroTitle":" Prendre un rendez-vous",
  "api.BookCall_heroTitleDescription":" Planifiez un rendez-vous avec l'un de nos experts pour discuter de vos besoins spécifiques.",
  "api.BookCall_schemaVal_nom":" Le nom doit contenir au moins 2 caractères",
  "api.BookCall_schemaVal_prenom":"Le prénom doit contenir au moins 5 caractères",
  "api.BookCall_schemaVal_email":" Veuillez entrer une adresse email valide",
  "api.BookCall_schemaVal_tel":" Veuillez entrer un numéro de téléphone valide",
  "api.BookCall_schemaVal_date":"Veuillez sélectionner une date pour le rendez-vous",
  "api.BookCall_schemaVal_heure":" Veuillez sélectionner une heure pour le rendez-vous",
  "api.BookCall_schemaVal_sujet":" Veuillez indiquer le sujet du rendez-vous",
  "api.BookCall_apiEreur":"Une erreur s\'est produite. Veuillez réessayer.",
  "api.BookCall_apiEreur_envoie":" Erreur lors de l\'envoi du formulaire :",
  "api.BookCall_apiEreur2":" Une erreur s\'est produite. Veuillez réessayer.",
  "api.BookCall_succes_h2":"Rendez-vous réservé avec succès !",
  "api.BookCall_desciption_succes":" Merci pour votre demande. Votre rendez-vous a été programmé et vous recevrez bientôt une confirmation par email.",
  "api.BookCall_redirection":" Vous allez être redirigé vers la page d'accueil dans quelques secondes...",
  "api.BookCall_pageAccueil":"Retour à l'accueil",
  "api.BookCall_Informations_personnelles":"Informations personnelles",
  "api.BookCall_Nom":"Nom",
  "api.BookCall_Prenoms":"Prénoms",
  "api.BookCall_Telephone":"Téléphone",
  "api.BookCall_Entreprise":" Entreprise",
  "api.BookCall_plaholder_entreprise":"Nom de votre entreprise",
  "api.BookCall_rdv":" Détails de rendez-vous",
  "api.BookCall_daterdv":"Date du rendez-vous",
  "api.BookCall_selectDate":"Sélectionnez une date",
  "api.BookCall_Descriptionrdv":"Taille de l'entreprise",
  "api.BookCall_Heurerdv":"Heure du rendez-vous",
  "api.BookCall_SelectHeurerdv":"Sélectionnez une heure",
  "api.BookCall_DescriptionHorairerdv":" Tous les horaires sont en heure de Cote d'ivoire.",
  "api.BookCall_Sujetrdv":" Sujet du rendez-vous",
  "api.BookCall_PlaceholderSujetrdv":"Ex: Consultation sur l'infrastructure réseaau",
  "api.BookCall_Message":"Message",
  "api.BookCall_Overture":"Les rendez-vous sont disponibles du lundi au vendredi.",
  "api.BookCall_Detailrdv":"Détails supplémentaires ou questions spécifiques...",
  "api.BookCall_Informationrdv":"Vous recevrez une confirmation par email avec les détails du rendez-vous et un lien pour rejoindre la réunion.",
  "api.BookCall_Traitementrdv":"Traitement en cours...",
  "api.BookCall_Reserverrdv": "Réserver un rendez-vous",
  
  
  // Devis
  
  
  "api.Devis_title":" Demander un devis - Infrans",
  "api.Devis_description":"Remplissez notre formulaire pour recevoir un devis personnalisé pour vos besoins en réseau et système informatique.",
  "api.Devis_heroTitle":" Demander un devis",
  "api.Devis_heroTitleDescription":"Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé adapté à vos besoins spécifiques.",
  "api.Devis_schemaVal_nom":" Le nom doit contenir au moins 2 caractères",
  "api.Devis_schemaVal_prenom":"Le prénom doit contenir au moins 5 caractères",
  "api.Devis_schemaVal_email":" Veuillez entrer une adresse email valide",
  "api.Devis_schemaVal_tel":" Veuillez entrer un numéro de téléphone valide",
  "api.Devis_schemaVal_service":"Veuillez sélectionner au moins un service",
  "api.Devis_schemaVal_DescriptionProjet":" Veuillez fournir une description d'au moins 20 caractères",
  "api.Devis_schemaVal_dateSouhaite":" Veuillez sélectionner une date souhaitée",
  "api.Devis_schemaVal_conditions":" Vous devez accepter les conditions d'utilisation",
  "api.Devis_apiEreur":"Erreur lors de l'envoi du formulaire.",
  "api.Devis_succes_h2":"Demande de devis envoyée avec succès !",
  "api.Devis_desciption_succes":"Merci pour votre demande. Notre équipe va étudier votre projet et vous contactera dans les plus bref délais.",
  "api.Devis_redirection":" Vous allez être redirigé vers la page d'accueil dans quelques secondes...",
  "api.Devis_pageAccueil":"Retour à l'accueil",
  "api.Devis_Informations_personnelles":"Informations personnelles",
  "api.Devis_Nom":"Nom",
  "api.Devis_Prenoms":"Prénoms",
  "api.Devis_Telephone":"Téléphone",
  "api.Devis_Entreprise":"Informations entreprise",
  "api.Devis_plaholder_entreprise":"Nom de votre entreprise",
  "api.Devis_plaholder_entreprise2":" Entreprise ONMA",
  "api.Devis_poste":"Poste / Fonction",
  "api.Devis_plaholderPoste":"Directrice IT",
  "api.Devis_Taillenentreprise":"Taille de l'entreprise",
  "api.Devis_Taillenentrepriseplaceholder":"Sélectionnez la taille de votre entreprise",
  "api.Devis_employes":"employés",
  "api.Devis_Services_souhaite":" Services souhaité",
  "api.Devis_Details_du_projet":"Détails du projet",
  "api.Devis_DescriptionProjet":"Description du projet / besoin*",
  "api.Devis_PlaceholderDescriptBesoin":"Décrivez votre projet ou vos besoins en détail...",
  "api.Devis_budget":"Budget estimé*",
  "api.Devis_Date_souhaitee_realisation":"Date souhaitée de réalisation*",
  "api.Devis_date": "Sélectionnez une date",
  
  "api.Devis_delai":"Minimum 7 jours à partir d'aujourd'hui",
  "api.Devis_Preferences_contact":"Préférences de contact",
  "api.Devis_PreferencesTel": "Téléphone",
  "api.Devis_PreferencesConditionUtil": "J'accepte les conditions d'utilisation et la politique de confidentialité*",
  
  "api.Devis_ConditionUtil": "En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.",
  
  "api.Devis_Information":"Les champs marqués d'un astérisque (*) sont obligatoires.",
  "api.Devis_Traitement":"Traitement en cours...",
  "api.Devis_Reserver": "Envoyer ma demande de devi",
  
  
  // equipe 
  "equipe.donneeErreur ": "Une erreur s'est produite",
  "equipe.chargement":"Chargement...",
  "equipe.chargement_Error":"Erreur:",
  "equipe.title":"Notre équipe",
  "equipe.membre":"Découvrez les experts qui composent l'équipe de Infrans.",
  
  // partenaires
  "partenaires.donneeErreur ": "Une erreur s'est produite",
  "partenaires.chargement":"Chargement...",
  "partenaires.chargement_Error":"Erreur:",
  "partenaires.title":"Nos Partenaires",
  "partenaires.membre":"Découvrez les entreprises avec lesquelles nous collaborons pour vous offrir des solutions informatiques de qualité.",
  "partenaires.plus":" En savoir plus",
  
  
  // Mentions legales
  "MentionLegale.title":"Mentions légales - Infrans",
  "MentionLegale.description":"Mentions légales et informations juridiques de Infrans.",
  "MentionLegale.Herotitle":"Mentions légales",
  "MentionLegale.subHerotitle":"1. Informations légales",
  "MentionLegale.subtitle":"Le site web Infrans est édité par la société Infrans, société par actions simplifiée au capital de 50 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789, dont le siège social est situé au Cocody 7 ème tranche .",
  "MentionLegale.numero":"Numéro de TVA intracommunautaire :  CI 901",
  "MentionLegale.direct":"Directeur de la publication : Mr, Président de Infrans",
  "MentionLegale.subHerotitleHebergement":"2. Hébergement",
  "MentionLegale.subtitleHebergement":"Le site est hébergé par la société Onma., dont le siège social est situé à ROME Spienza, CA 91789, Italie.",
  "MentionLegale.proprieteIntellectuelle":"3. Propriété intellectuelle",
  "MentionLegale.proprieteDescription":"ensemble des éléments constituant le site Infrans (textes, images,  logos, etc.) ainsi que le site lui-même, sont la propriété exclusive de Infrans ou de ses partenaires. Ces éléments sont protégés par les lois relatives à la propriété intellectuelle.",
  "MentionLegale.proprieteReprod":" Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Infrans.",
  
  
      // Maintenance Système page
      
      "maintenanceSysteme.title": "Maintenance Système - Infrans",
      "maintenanceSysteme.description":
          "Services de maintenance préventive et corrective pour assurer la disponibilité et les performances optimales de vos systèmes informatiques.",
      "maintenanceSysteme.heroTitle": "Maintenance Système",
      "maintenanceSysteme.heroDescription":
          "Services de maintenance préventive et corrective pour assurer la disponibilité et les performances optimales de vos systèmes informatiques.",
      "maintenanceSysteme.demanderDevis": "Demander un devis",
      "maintenanceSysteme.nousContacter": "Nous contacter",
      "maintenanceSysteme.nosServices": "Nos services de maintenance système",
      "maintenanceSysteme.maintenancePreventive": "Maintenance préventive",
      "maintenanceSysteme.maintenancePreventiveDescription":
          "Surveillance proactive, mises à jour régulières et optimisation de vos systèmes pour prévenir les problèmes avant qu'ils n'affectent votre activité.",
          "maintenanceSysteme.maintenanceCorrective": "Maintenance corrective",
        " maintenanceSysteme.maintenanceCorrectiveDescription":
          "Résolution rapide et efficace des incidents et problèmes techniques pour minimiser les temps d'arrêt et restaurer le fonctionnement normal.",
         "maintenanceSysteme.surveillanceReporting": "Surveillance et reporting",
         "maintenanceSysteme.surveillanceReportingDescription":
          "Surveillance continue de vos systèmes avec alertes en temps réel et rapports détaillés sur les performances et l'état de santé de votre infrastructure.",
         "maintenanceSysteme.support24_7": "Support technique 24/7",
         "maintenanceSysteme.support24_7Description":
          "Assistance technique disponible 24h/24 et 7j/7 pour résoudre rapidement vos problèmes et répondre à vos questions.",
         "maintenanceSysteme.gestionMisesAJour": "Gestion des mises à jour",
         "maintenanceSysteme.gestionMisesAJourDescription":
          "Planification, test et déploiement des mises à jour logicielles et de sécurité pour maintenir vos systèmes à jour et sécurisés.",
         "maintenanceSysteme.sauvegardeRestauration": "Sauvegarde et restauration",
         "maintenanceSysteme.sauvegardeRestaurationDescription":
          "Mise en place et gestion de solutions de sauvegarde fiables avec tests réguliers de restauration pour garantir la récupération de vos données en cas d'incident.",
         "maintenanceSysteme.pourquoiChoisir": "Pourquoi choisir Infrans",
         "maintenanceSysteme.expertiseTechnique": "Expertise technique",
         "maintenanceSysteme.expertiseTechniqueDescription":
         "Notre équipe est composée de techniciens certifiés avec une expertise approfondie sur les systèmes Windows, Linux, macOS et les technologies de virtualisation.",
         "maintenanceSysteme.approcheProactive": "Approche proactive",
         "maintenanceSysteme.approcheProactiveDescription":
          "Nous identifions et résolvons les problèmes potentiels avant qu'ils n'affectent votre activité, minimisant ainsi les temps d'arrêt.",
         "maintenanceSysteme.reactivite": "Réactivité",
         "maintenanceSysteme.reactiviteDescription":
          "Nos équipes sont disponibles 24/7 pour répondre rapidement à vos besoins et résoudre les incidents dans les meilleurs délais.",
         "maintenanceSysteme.solutionsSurMesure": "Solutions sur mesure",
         "maintenanceSysteme.solutionsSurMesureDescription":
          "Nous adaptons nos services de maintenance à vos besoins spécifiques et à votre environnement informatique.",
         "maintenanceSysteme.nosRealisations": "Nos réalisations",
         "maintenanceSysteme.optimisationSystemes": "Optimisation des systèmes pour une PME",
         "maintenanceSysteme.optimisationSystemesDescription":
          "Mise en place d'une maintenance préventive et d'une surveillance proactive pour une PME, réduisant les incidents de 80% et améliorant la productivité.",
         "maintenanceSysteme.support24_7Hotelier": "Support 24/7 pour un groupe hôtelier",
         "maintenanceSysteme.support24_7HotelierDescription":
          "Mise en place d'un service de support technique 24/7 pour un groupe hôtelier, garantissant la continuité des services informatiques essentiels.",
         "maintenanceSysteme.besoinMaintenance": "Besoin d'une maintenance système fiable ?",
         "maintenanceSysteme.besoinMaintenanceDescription":
          "Contactez-nous dès aujourd'hui pour discuter de vos besoins en maintenance système et découvrir comment nous pouvons vous aider à assurer la continuité de vos opérations.",
  
      // Solutions VPN page
      
      "solutionsVPN.title": "Solutions VPN - Infrans",
      "solutionsVPN.description": "Solutions VPN sécurisées pour un accès distant fiable à vos ressources d'entreprise.",
      "solutionsVPN.heroTitle": "Solutions VPN",
      "solutionsVPN.heroDescription":
          "Connexions sécurisées pour un accès distant fiable à vos ressources d'entreprise et une protection optimale de vos données.",
     "solutionsVPN.demanderDevis": "Demander un devis",
     "solutionsVPN.nousContacter": "Nous contacter",
      "solutionsVPN.nosSolutions": "Nos solutions VPN",
      "solutionsVPN.vpnSiteASite": "VPN Site-à-Site",
      "solutionsVPN.vpnSiteASiteDescription":
          "Connectez vos différents sites et bureaux de manière sécurisée pour créer un réseau d'entreprise unifié et protégé.",
        "solutionsVPN.vpnAccesDistant": "VPN d'Accès Distant",
        "solutionsVPN.vpnAccesDistantDescription":
          "Permettez à vos employés d'accéder de manière sécurisée aux ressources de l'entreprise depuis n'importe où dans le monde.",
        "solutionsVPN.vpnSSL": "VPN SSL",
        "solutionsVPN.vpnSSLDescription":
          "Solution VPN basée sur le navigateur qui ne nécessite pas l'installation de logiciels clients, idéale pour les accès temporaires.",
        "solutionsVPN.vpnMPLS": "VPN MPLS",
        "solutionsVPN.vpnMPLSDescription":
          "Réseau privé virtuel basé sur la technologie MPLS pour des performances optimales et une qualité de service garantie.",
        "solutionsVPN.vpnHauteSecurite": "VPN Haute Sécurité",
        "solutionsVPN.vpnHauteSecuriteDescription":
          "Solutions VPN avec authentification multi-facteurs, chiffrement avancé et surveillance continue pour les environnements à haute sécurité.",
        "solutionsVPN.gestionSupportVPN": "Gestion et Support VPN",
        "solutionsVPN.gestionSupportVPNDescription":
          "Services complets de gestion, maintenance et support pour vos solutions VPN, avec surveillance 24/7 et assistance technique.",
        "solutionsVPN.pourquoiChoisir": "Pourquoi choisir Infrans",
        "solutionsVPN.expertiseTechnique": "Expertise technique",
        "solutionsVPN.expertiseTechniqueDescription":
          "Notre équipe possède une expertise approfondie dans la conception, l'implémentation et la gestion de solutions VPN pour tous types d'entreprises.",
        "solutionsVPN.securiteRenforcee": "Sécurité renforcée",
        "solutionsVPN.securiteRenforceeDescription":
          "Nos solutions VPN intègrent les dernières technologies de sécurité pour protéger vos données et communications contre les menaces.",
        "solutionsVPN.solutionsSurMesure": "Solutions sur mesure",
        "solutionsVPN.solutionsSurMesureDescription":
          "Nous concevons des solutions VPN adaptées à vos besoins spécifiques, à votre infrastructure existante et à vos objectifs de sécurité.",
        "solutionsVPN.supportContinu": "Support continu",
        "solutionsVPN.supportContinuDescription":
          "Nous offrons un support technique 24/7 pour assurer le bon fonctionnement de vos solutions VPN et résoudre rapidement tout problème.",
        "solutionsVPN.nosRealisations": "Nos réalisations",
        "solutionsVPN.vpnMultiSites": "VPN multi-sites pour une entreprise internationale",
        "solutionsVPN.vpnMultiSitesDescription":
          "Mise en place d'une solution VPN site-à-site pour connecter 15 bureaux internationaux, permettant une communication sécurisée et une collaboration efficace.",
        "solutionsVPN.solutionAccesDistant": "Solution d'accès distant pour le télétravail",
        "solutionsVPN.solutionAccesDistantDescription":
          "Déploiement d'une solution VPN d'accès distant pour 500 employés en télétravail, assurant un accès sécurisé aux ressources de l'entreprise avec authentification multi-facteurs.",
        "solutionsVPN.besoinVPN": "Besoin d'une solution VPN sécurisée ?",
        "solutionsVPN.besoinVPNDescription":
      
        "Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière de VPN et découvrir comment nous pouvons sécuriser vos connexions distantes.",
  
  
  
  
    // section footer
    "footer.subtitle":"Solutions de réseau et système informatique pour entreprises. Expertise, fiabilité et innovation.",
    "footer.services.infrastructure":"Infrastructure Réseau",
    "footer.services.maintenance": "Maintenance Système",
    "footer.services.vpn": "Solutions VPN",
    "footer.services.cloud": "Cloud Computing",
    "footer.services.link":"Link",
    "footer.equipe":"Équipe",
    "footer.partenaire":"Parténaires",
    "footer.legal":"Mentions légales",
    "footer.Terms ":"Politique de confidentialité",
    "footer.policy":"Conditions utilisation",
  
  
    },
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.book_call": "Book a call",
      "nav.quote": "Request a quote",
  
      // Hero section
      "hero.title": "IT Solutions for your business",
      "hero.subtitle": "Network and IT systems expertise to optimize your infrastructure and secure your data.",
      "hero.services_btn": "Our services",
      "hero.contact_btn": "Contact us",
  
      // Services section
      "services.title": "Our Services",
      "services.subtitle": "Comprehensive solutions to meet all your IT needs",
      "services.infrastructure": "Network Infrastructure",
      "services.infrastructure_description": "Design, installation, and maintenance of secure and high-performance IT networks.",
      "services.cybersecurity": "Cybersecurity",
      "services.maintenance": "System Maintenance",
      "services.maintenance_description": "Preventive and corrective maintenance services to ensure business continuity.",
      "services.vpn": "VPN Solutions",
      "services.vpn_description": "Implementation of virtual private networks for secure remote access to your resources.",
      "services.cloud": "Cloud Computing",
      "services.cloud_description": "Migration and management of your services to the cloud for greater flexibility and scalability.",
      "services.support": "24/7 Support",
     "services.learn_more": "Learn more",
  
  
    // section footer
    "footer.subtitle":"Network and system solutions for businesses. Expertise, reliability and innovation.",
    "footer.services.infrastructure": "Network Infrastructure",
    "footer.services.maintenance": "System Maintenance",
    "footer.services.vpn": "VPN Solutions",
    "footer.services.cloud": "Cloud Computing",
    "footer.services.link":"Link",
    "footer.equipe":"Team",
    "footer.partenaire":"Partners",
    "footer.legal":"Legal",
    "footer.Terms":"Terms of use",
    "footer.policy":"Terms and conditions of use",
    
  
  
  
  
  
  
  
  
  
    
      // About section
     "about.title": "About Us",
      "about.description":
        "Infrans is a company specialized in network and IT system services. We support businesses in their digital transformation by offering solutions tailored to their specific needs.",
      "about.image_alt": "Our team of experts",
      "about.advantages.experience": "Over 10 years of experience in the industry",
      "about.advantages.team": "Certified and highly qualified team",
      "about.advantages.solutions": "Customized solutions according to your needs",
      "about.advantages.maintenance": "Proactive maintenance approach",
      "about.advantages.partnerships": "Partnerships with market leaders",
      "about.learn_more": "Learn more",
  
  
  
  // apropos de Infrans
  
  
  
  "apropos.title_infrans": "About - Infrans",
  "apropos.description_infrans": "Discover the history, mission and values of Infrans.",
  "apropos.heroTitle": "About - Infrans",
  "apropos.heroDescription": "About Infrans",
  "apropos.description_titre": "Discover our history, mission and values.",
  "apropos.h2_histoire": "Our History",
  "apropos.h2_description_histoire_1": "Founded in 2020 by a team of experts passionate about information technology, Infrans was born from the desire to offer superior IT services to businesses of all sizes.",
  "apropos.h2_description_histoire_2": "Over the years, we have developed our expertise and expanded our range of services to meet the growing needs of our clients in a constantly evolving technological environment.",
  "apropos.mission_h2": "Our Mission",
  "apropos.mission_h2_description": "To support businesses in their digital transformation by providing innovative, secure IT solutions tailored to their specific needs.",
  "apropos.innover": "Innovate",
  "apropos.Innover_description": "Offer cutting-edge solutions to optimize our clients' performance.",
  "apropos.securise": "Secure",
  "apropos.securise_description": "Protect our clients' infrastructure and data against IT threats.",
  "apropos.Accompagner": "Support",
  "apropos.Accompagner_description": "Provide personalized and responsive support to ensure client satisfaction.",
  "apropos.Valeurs": "Our Values",
  "apropos.Excellence": "Excellence",
  "apropos.Excellence_description": "We strive for excellence in all our services and projects, maintaining the highest quality standards.",
  "apropos.Integrite": "Integrity",
  "apropos.Integrite_descrption": "We act with honesty and transparency in all our professional relationships, honoring our commitments.",
  "apropos.Innovation": "Innovation",
  "apropos.Innovation_description": "We encourage creativity and innovation to develop solutions that address current and future technological challenges.",
  "apropos.Collaboration": "Collaboration",
  "apropos.Collaboration_description": "We believe in the power of teamwork and collaboration, both internally and with our clients and partners.",
  "apropos.Chiffres": "Key Figures",
  "apropos.Chiffres_description_1": "Satisfied clients",
  "apropos.Chiffres_description_2": "Completed projects",
  "apropos.Chiffres_description_3": "Certified experts",
  "apropos.Chiffres_description_4": "Years of experience",
  
  
      // Contact section
      "contact.title": "Contact Us",
      "contact.subtitle": "Need information or a quote? Our team is at your disposal.",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.address": "Address",
      "contact.opening_hours": "Opening Hours",
      "contact.weekdays": "Monday - Friday",
      "contact.saturday": "Saturday",
      "contact.sunday": "Sunday",
      "contact.closed": "Closed",
      "contact.name_label": "Name",
      "contact.name_placeholder": "Your name",
      "contact.email_label": "Email",
      "contact.email_placeholder": "Your email",
      "contact.subject_label": "Subject",
      "contact.subject_placeholder": "Subject of your message",
      "contact.message_label": "Message",
      "contact.message_placeholder": "Your message",
      "contact.submit_button": "Send",
      "contact.submitting": "Submitting...",
      "contact.success_message": "Your message has been sent successfully! We will contact you soon.",
      "contact.error_message": "An error occurred while sending your message. Please try again.",
    
  
      // Cloud Computing page
      
      "cloudComputing.title": "Cloud Computing - Infrans",
      "cloudComputing.description": "Flexible and secure cloud solutions to optimize your IT resources.",
      "cloudComputing.heroTitle": "Cloud Computing",
      "cloudComputing.heroDescription":
        "Flexible and secure cloud solutions to optimize your IT resources and accelerate your digital transformation.",
      "cloudComputing.demanderDevis":  "Request a quote",
      "cloudComputing.nousContacter": "Contact us",
      "cloudComputing.nosServices": "Our cloud computing services",
      "cloudComputing.iaas": "Infrastructure as a Service (IaaS)",
      "cloudComputing.iaasDescription":
        "Deployment and management of scalable and flexible cloud infrastructures tailored to your specific needs.",
      "cloudComputing.paas": "Platform as a Service (PaaS)",
      "cloudComputing.paasDescription":
        "Development and deployment environments for applications without having to manage the underlying infrastructure.",
      "cloudComputing.migrationCloud":"Cloud migration",
      "cloudComputing.migrationCloudDescription":
        "Support in migrating your applications and data to the cloud securely and efficiently.",
        "cloudComputing.securiteCloud": "Cloud security",
        "cloudComputing.securiteCloudDescription":
        "Protection of your data and applications in the cloud with advanced security solutions compliant with regulations.",
       "cloudComputing.optimisationCouts":  "Cost optimization",
       "cloudComputing.optimisationCoutsDescription":
        "Analysis and optimization of your cloud expenses to maximize your return on investment and reduce unnecessary costs.",
        "cloudComputing.cloudHybrideMultiCloud": "Hybrid and multi-cloud",
        "cloudComputing.cloudHybrideMultiCloudDescription":
        "Design and management of hybrid and multi-cloud architectures for maximum flexibility and resilience.",
        "cloudComputing.pourquoiChoisir": "Why choose Infrans?",
        "cloudComputing.expertiseMultiCloud":  "Multi-cloud expertise",
        "cloudComputing.expertiseMultiCloudDescription":
           "Our team is certified on major cloud platforms (AWS, Azure, Google Cloud) to provide you with the best solutions.",
        "cloudComputing.approchePersonnalisee": "Customized approach",
        "cloudComputing.approchePersonnaliseeDescription":
           "We design cloud solutions tailored to your specific needs, budget, and business goals.",
        "cloudComputing.securiteRenforcee": "Enhanced security",
        "cloudComputing.securiteRenforceeDescription":
           "We integrate security at every stage of your cloud journey to protect your data and applications.",
        "cloudComputing.supportContinu": "Continuous support",
        "cloudComputing.supportContinuDescription":
          "We support you throughout your cloud journey, from planning to maintenance, including migration.",
        "cloudComputing.nosRealisations": "Our achievements",
        "cloudComputing.migrationAWS": "Migration to AWS for an e-commerce company",
        "cloudComputing.migrationAWSDescription":
           "Complete migration of an e-commerce company's infrastructure to AWS, resulting in a 40% cost reduction and improved performance.",
        "cloudComputing.architectureMultiCloud": "Multi-cloud architecture for an industrial group",
        "cloudComputing.architectureMultiCloudDescription":
              "Design and implementation of a multi-cloud architecture (AWS and Azure) for an industrial group, offering high availability and maximum resilience.",
        "cloudComputing.pretAMigrer": "Ready to migrate to the cloud?",
        "cloudComputing.pretAMigrerDescription":
            "Contact us today to discuss your cloud computing needs and discover how we can help you optimize your IT resources.",
  
  
  
      // Maintenance Système page
      "maintenanceSysteme.title": "System Maintenance - Infrans",
              "maintenanceSysteme.description":
                "Preventive and corrective maintenance services to ensure the availability and optimal performance of your IT systems.",
              "maintenanceSysteme.heroTitle": "System Maintenance",
              "maintenanceSysteme.heroDescription":
                "Preventive and corrective maintenance services to ensure the availability and optimal performance of your IT systems.",
              "maintenanceSysteme.demanderDevis": "Request a quote",
              "maintenanceSysteme.nousContacter": "Contact us",
              "maintenanceSysteme.nosServices": "Our system maintenance services",
              "maintenanceSysteme.maintenancePreventive": "Preventive maintenance",
              "maintenanceSysteme.maintenancePreventiveDescription":
                "Proactive monitoring, regular updates, and system optimization to prevent issues before they affect your business.",
              "maintenanceSysteme.maintenanceCorrective": "Corrective maintenance",
              "maintenanceSysteme.maintenanceCorrectiveDescription":
                "Quick and effective resolution of incidents and technical issues to minimize downtime and restore normal operations.",
              "maintenanceSysteme.surveillanceReporting": "Monitoring and reporting",
              "maintenanceSysteme.surveillanceReportingDescription":
                "Continuous monitoring of your systems with real-time alerts and detailed reports on performance and infrastructure health.",
              "maintenanceSysteme.support24_7": "24/7 technical support",
              "maintenanceSysteme.support24_7Description":
               "Technical assistance available 24/7 to quickly resolve your issues and answer your questions.",
              "maintenanceSysteme.gestionMisesAJour": "Update management",
              "maintenanceSysteme.gestionMisesAJourDescription":
                "Planning, testing, and deployment of software and security updates to keep your systems up-to-date and secure.",
              "maintenanceSysteme.sauvegardeRestauration": "Backup and recovery",
              "maintenanceSysteme.sauvegardeRestaurationDescription":
                "Implementation and management of reliable backup solutions with regular recovery tests to ensure data recovery in case of incidents.",
              "maintenanceSysteme.pourquoiChoisir": "Why choose Infrans",
              "maintenanceSysteme.expertiseTechnique": "Technical expertise",
              "maintenanceSysteme.expertiseTechniqueDescription":
                "Our team consists of certified technicians with in-depth expertise in Windows, Linux, macOS systems, and virtualization technologies.",
              "maintenanceSysteme.approcheProactive": "Proactive approach",
              "maintenanceSysteme.approcheProactiveDescription":
                "We identify and resolve potential issues before they affect your business, minimizing downtime.",
              "maintenanceSysteme.reactivite": "Responsiveness",
              "maintenanceSysteme.reactiviteDescription":
                "Our teams are available 24/7 to quickly respond to your needs and resolve incidents in the shortest time possible.",
              "maintenanceSysteme.solutionsSurMesure": "Custom solutions",
              "maintenanceSysteme.solutionsSurMesureDescription":
                "We tailor our maintenance services to your specific needs and IT environment.",
              "maintenanceSysteme.nosRealisations": "Our achievements",
              "maintenanceSysteme.optimisationSystemes": "System optimization for an SME",
              "maintenanceSysteme.optimisationSystemesDescription":
               "Implementation of preventive maintenance and proactive monitoring for an SME, reducing incidents by 80% and improving productivity.",
              "maintenanceSysteme.support24_7Hotelier": "24/7 support for a hotel group",
              "maintenanceSysteme.support24_7HotelierDescription":
                "Implementation of a 24/7 technical support service for a hotel group, ensuring the continuity of essential IT services.",
              "maintenanceSysteme.besoinMaintenance": "Need reliable system maintenance?",
              "maintenanceSysteme.besoinMaintenanceDescription":
                "Contact us today to discuss your system maintenance needs and discover how we can help you ensure the continuity of your operations.",
            
  
  
  
        // infrastructure reseau
  "infrastructureReseau.title":"Network Infrastructure",
  "infrastructureReseau.description":"High-performance and secure network infrastructure solutions for your business.",
  "infrastructureReseau.heroTitle":"Network Infrastructure",
  "infrastructureReseau.heroDescription":"High-performance, scalable, and secure network solutions to effectively connect your business.",
  "infrastructureReseau.demanderDevis":"Request a quote",
  "infrastructureReseau.nousContacter":"Contact us",
  "infrastructureReseau.nosServices":"Our network infrastructure services",
  "infrastructureReseau.conceptionReseau":"Network design",
  "infrastructureReseau.conceptionReseauDescription":"Design and planning of network infrastructures tailored to your specific needs, whether for local (LAN), wide area (WAN), or wireless (WLAN) networks.",
  "infrastructureReseau.deploiementInstallation":"Deployment and installation",
  "infrastructureReseau.deploiementInstallationDescription":"Installation and configuration of all network components: routers, switches, firewalls, Wi-Fi access points, and other essential equipment.",
  "infrastructureReseau.securisationReseau":"Network security",
  "infrastructureReseau.securisationReseauDescription":"Implementation of robust network security solutions: next-generation firewalls, intrusion detection systems, secure VPNs, and network segmentation.",
  "infrastructureReseau.maintenanceSupport":"Maintenance and support",
  "infrastructureReseau.maintenanceSupportDescription":"Preventive and corrective maintenance services to ensure the availability and optimal performance of your network infrastructure.",
  "infrastructureReseau.optimisationPerformances": "Performance optimization",
  "infrastructureReseau.optimisationPerformancesDescription": "Analysis and optimization of your network to improve performance, reduce latency, and ensure adequate bandwidth for your critical applications.",
  "infrastructureReseau.evolutionMiseAJour":"Evolution and upgrade",
  "infrastructureReseau.evolutionMiseAJourDescription":"Support in the evolution of your network infrastructure to keep up with your business growth and the adoption of new technologies.",
  "infrastructureReseau.pourquoiChoisir":"Why choose Infrans?",
  "infrastructureReseau.expertiseCertifiee": "Certified expertise",
  "infrastructureReseau.expertiseCertifieeDescription": "Our team consists of certified engineers in Cisco, Juniper, HPE, and other leading network technologies.",
  "infrastructureReseau.solutionsSurMesure": "Custom solutions",
  "infrastructureReseau.solutionsSurMesureDescription": "We design network infrastructures tailored to your specific needs and budget.",
  "infrastructureReseau.support24_7": "24/7 support",
  "infrastructureReseau.support24_7Description":"Our support team is available 24/7 to quickly resolve any network issues.",
  "infrastructureReseau.approcheProactive": "Proactive approach",
  "infrastructureReseau.approcheProactiveDescription":"We continuously monitor your network to identify and resolve issues before they affect your business.",
  "infrastructureReseau.nosRealisations":"Our achievements",
  "infrastructureReseau.refonteReseau": "Network overhaul for a 32-employee company",
  "infrastructureReseau.refonteReseauDescription": "Design and deployment of a complete network infrastructure to improve performance and security while reducing operational costs.",
  "infrastructureReseau.deploiementMultiSites": "Multi-site network deployment for an industrial group",
  "infrastructureReseau.deploiementMultiSitesDescription":"Implementation of a secure network infrastructure connecting 12 sites worldwide with high availability.",
  "infrastructureReseau.pretAOptimiser": "Ready to optimize your network infrastructure?",
  "infrastructureReseau.pretAOptimiserDescription": "Contact us today to discuss your network infrastructure needs and discover how we can help you improve the performance and security of your network.",
  
  
      // VPN Solutions page
     
      "solutionsVPN.title": "VPN Solutions - Infrans",
      "solutionsVPN.description": "Secure VPN solutions for reliable remote access to your business resources.",
      "solutionsVPN.heroTitle": "VPN Solutions",
      "solutionsVPN.heroDescription":
        "Secure connections for reliable remote access to your business resources and optimal data protection.",
      "solutionsVPN.demanderDevis": "Request a quote",
      "solutionsVPN.nousContacter": "Contact us",
      "solutionsVPN.nosSolutions": "Our VPN solutions",
      "solutionsVPN.vpnSiteASite": "Site-to-Site VPN",
      "solutionsVPN.vpnSiteASiteDescription":
        "Securely connect your different sites and offices to create a unified and protected corporate network.",
      "solutionsVPN.vpnAccesDistant": "Remote Access VPN",
      "solutionsVPN.vpnAccesDistantDescription":
        "Allow your employees to securely access company resources from anywhere in the world.",
      "solutionsVPN.vpnSSL": "SSL VPN",
      "solutionsVPN.vpnSSLDescription":
        "Browser-based VPN solution that does not require client software installation, ideal for temporary access.",
      "solutionsVPN.vpnMPLS": "MPLS VPN",
      "solutionsVPN.vpnMPLSDescription":
        "Virtual private network based on MPLS technology for optimal performance and guaranteed quality of service.",
      "solutionsVPN.vpnHauteSecurite": "High-Security VPN",
      "solutionsVPN.vpnHauteSecuriteDescription":
        "VPN solutions with multi-factor authentication, advanced encryption, and continuous monitoring for high-security environments.",
      "solutionsVPN.gestionSupportVPN": "VPN Management and Support",
      "solutionsVPN.gestionSupportVPNDescription":
        "Comprehensive management, maintenance, and support services for your VPN solutions, with 24/7 monitoring and technical assistance.",
      "solutionsVPN.pourquoiChoisir": "Why choose Infrans",
      "solutionsVPN.expertiseTechnique": "Technical expertise",
      "solutionsVPN.expertiseTechniqueDescription":
        "Our team has in-depth expertise in designing, implementing, and managing VPN solutions for all types of businesses.",
      "solutionsVPN.securiteRenforcee": "Enhanced security",
      "solutionsVPN.securiteRenforceeDescription":
        "Our VPN solutions integrate the latest security technologies to protect your data and communications against threats.",
      "solutionsVPN.solutionsSurMesure": "Custom solutions",
      "solutionsVPN.solutionsSurMesureDescription":
        "We design VPN solutions tailored to your specific needs, existing infrastructure, and security goals.",
      "solutionsVPN.supportContinu": "Continuous support",
      "solutionsVPN.supportContinuDescription":
        "We provide 24/7 technical support to ensure the smooth operation of your VPN solutions and quickly resolve any issues.",
      "solutionsVPN.nosRealisations": "Our achievements",
      "solutionsVPN.vpnMultiSites": "Multi-site VPN for an international company",
      "solutionsVPN.vpnMultiSitesDescription":
        "Implementation of a site-to-site VPN solution to connect 15 international offices, enabling secure communication and effective collaboration.",
      "solutionsVPN.solutionAccesDistant": "Remote access solution for teleworking",
      "solutionsVPN.solutionAccesDistantDescription":
        "Deployment of a remote access VPN solution for 500 teleworking employees, ensuring secure access to company resources with multi-factor authentication.",
      "solutionsVPN.besoinVPN": "Need a secure VPN solution?",
      "solutionsVPN.besoinVPNDescription":
        "Contact us today to discuss your VPN needs and discover how we can secure your remote connections.",
  
        // api contact
        "matin": "Good morning",
        "soir": "Good evening",
        
        "api.contact_subject": "New contact message",
          "api.contact_text_name": "Name",
          "api.contact_mailoptionsubject": "Confirmation of receipt of your message",
          "api.contact_text_recap":
            "We have received your message. Here is a summary of your request:",
          "api.contact_text_bientot": "We will contact you soon.",
          "api.Cordialement": "Best regards,",
          "api.equipe": "The Infrans team.",
          "api.emailEnvoye": "Email sent successfully!",
          "api.erreurEmailSend": "Error sending email:",
          "api.erreurEmail": "An error occurred.",
  
  
          // api devis
  
   "api.devis_subject": "New quote request from",
  "api.devis_Name": "Name",
  "api.devis_Prenom": "First Name",
  "api.devis_Tel": "Phone",
  "api.devis_Entreprise": "Company",
  "api.devis_Non_renseignee": "Not specified",
  "api.devis_Poste": "Position",
  "api.devis_Taille_entreprise": "Company size",
  "api.devis_Services_souhaites": "Desired services",
  "api.devis_Description_projet": "Project description",
  "api.devis_Budget_estime": "Estimated budget",
  "api.devis_Date_souhaitee": "Desired date",
  "api.devis_Preference_contact": "Contact preference",
  "api.devis_mailoptionsubject": "Confirmation of receipt of your quote request",
  "api.devis_recap": "We have received your quote request. Here is a summary of your request:",
  "api.devis_bientot": "We will contact you soon to discuss your project.",
  "api.Devis_Reserverrdv":"Book now",
  
  
  // book a call
  "api.BookCall_title": "Book an appointment - Infrans",
  "api.BookCall_description": "Schedule an appointment with our experts to discuss your network and IT system needs.",
  "api.BookCall_heroTitle": "Schedule an appointment",
  "api.BookCall_heroTitleDescription": "Schedule an appointment with one of our experts to discuss your specific needs.",
  "api.BookCall_schemaVal_nom": "The name must contain at least 2 characters",
  "api.BookCall_schemaVal_prenom": "The first name must contain at least 5 characters",
  "api.BookCall_schemaVal_email": "Please enter a valid email address",
  "api.BookCall_schemaVal_tel": "Please enter a valid phone number",
  "api.BookCall_schemaVal_date": "Please select a date for the appointment",
  "api.BookCall_schemaVal_heure": "Please select a time for the appointment",
  "api.BookCall_schemaVal_sujet": "Please specify the subject of the appointment",
  "api.BookCall_apiEreur": "An error occurred. Please try again.",
  "api.BookCall_apiEreur_envoie": "Error sending the form:",
  "api.BookCall_apiEreur2": "An error occurred. Please try again.",
  "api.BookCall_succes_h2": "Appointment booked successfully!",
  "api.BookCall_desciption_succes": "Thank you for your request. Your appointment has been scheduled, and you will soon receive a confirmation email.",
  "api.BookCall_redirection": "You will be redirected to the homepage in a few seconds...",
  "api.BookCall_pageAccueil": "Return to homepage",
  "api.BookCall_Informations_personnelles": "Personal information",
  "api.BookCall_Nom": "Name",
  "api.BookCall_Prenoms": "First Name",
  "api.BookCall_Telephone": "Phone",
  "api.BookCall_Entreprise": "Company",
  "api.BookCall_plaholder_entreprise": "Name of your company",
  "api.BookCall_rdv": "Appointment details",
  "api.BookCall_daterdv": "Appointment date",
  "api.BookCall_selectDate": "Select a date",
  "api.BookCall_Descriptionrdv": "Company size",
  "api.BookCall_Heurerdv": "Appointment time",
  "api.BookCall_SelectHeurerdv": "Select a time",
  "api.BookCall_DescriptionHorairerdv": "All times are in Ivory Coast time.",
  "api.BookCall_Sujetrdv": "Appointment subject",
  "api.BookCall_PlaceholderSujetrdv": "Ex: Consultation on network infrastructure",
  "api.BookCall_Detailrdv": "Additional details or specific questions...",
  "api.BookCall_Informationrdv": "You will receive a confirmation email with the appointment details and a link to join the meeting.",
  "api.BookCall_Traitementrdv": "Processing...",
  "api.BookCall_Reserverrdv": "Book an appointment",
  "api.BookCall_Message": "Message",
  "api.BookCall_Overture": "Appointments are available from Monday to Friday.",
  // devis
  "api.Devis_title": "Request a quote - Infrans",
  "api.Devis_description": "Fill out our form to receive a personalized quote for your network and IT system needs.",
  "api.Devis_heroTitle": "Request a quote",
  "api.Devis_heroTitleDescription": "Fill out the form below to receive a personalized quote tailored to your specific needs.",
  "api.Devis_schemaVal_nom": "The name must contain at least 2 characters",
  "api.Devis_schemaVal_prenom": "The first name must contain at least 5 characters",
  "api.Devis_schemaVal_email": "Please enter a valid email address",
  "api.Devis_schemaVal_tel": "Please enter a valid phone number",
  "api.Devis_schemaVal_service": "Please select at least one service",
  "api.Devis_schemaVal_DescriptionProjet": "Please provide a description of at least 20 characters",
  "api.Devis_schemaVal_dateSouhaite": "Please select a desired date",
  "api.Devis_schemaVal_conditions": "You must accept the terms of use",
  "api.Devis_apiEreur": "Error sending the form.",
  "api.Devis_succes_h2": "Quote request sent successfully!",
  "api.Devis_desciption_succes": "Thank you for your request. Our team will review your project and contact you shortly.",
  "api.Devis_redirection": "You will be redirected to the homepage in a few seconds...",
  "api.Devis_pageAccueil": "Return to homepage",
  "api.Devis_Informations_personnelles": "Personal information",
  "api.Devis_Nom": "Name",
  "api.Devis_Prenoms": "First Name",
  "api.Devis_Telephone": "Phone",
  "api.Devis_Entreprise": "Company information",
  "api.Devis_plaholder_entreprise": "Name of your company",
  "api.Devis_plaholder_entreprise2": "ONMA Company",
  "api.Devis_poste": "Position / Role",
  "api.Devis_plaholderPoste": "IT Director",
  "api.Devis_Taillenentreprise": "Company size",
  "api.Devis_Taillenentrepriseplaceholder": "Select the size of your company",
  "api.Devis_employes": "employees",
  "api.Devis_Services_souhaite": "Desired services",
  "api.Devis_Details_du_projet": "Project details",
  "api.Devis_DescriptionProjet": "Project description / need*",
  "api.Devis_PlaceholderDescriptBesoin": "Describe your project or needs in detail...",
  "api.Devis_budget": "Estimated budget*",
  "api.Devis_Date_souhaitee_realisation": "Desired completion date*",
  "api.Devis_date": "Select a date",
  "api.Devis_delai": "Minimum 7 days from today",
  "api.Devis_Preferences_contact": "Contact preferences",
  "api.Devis_PreferencesTel": "Phone",
  "api.Devis_PreferencesConditionUtil": "I accept the terms of use and privacy policy*",
  "api.Devis_ConditionUtil": "By submitting this form, you agree that your data will be processed in accordance with our privacy policy.",
  "api.Devis_Information": "Fields marked with an asterisk (*) are mandatory.",
  "api.Devis_Traitement": "Processing...",
  "api.Devis_Reserver": "Submit my quote request",
  
  // equipe
  "equipe.donneeErreur": "An error occurred",
  "equipe.chargement": "Loading...",
  "equipe.chargement_Error": "Error:",
  "equipe.title": "Our Team",
  "equipe.membre": "Meet the experts who make up the Infrans team.",
  //partenaires
  "partenaires.donneeErreur": "An error occurred",
  "partenaires.chargement": "Loading...",
  "partenaires.chargement_Error": "Error:",
  "partenaires.title": "Our Partners",
  "partenaires.membre": "Discover the companies we collaborate with to provide you with high-quality IT solutions.",
  "partenaires.plus": "Learn more",
  
  // mentions legales
  "MentionLegale.title": "Legal Notice - Infrans",
  "MentionLegale.description": "Legal notice and legal information of Infrans.",
  "MentionLegale.Herotitle": "Legal Notice",
  "MentionLegale.subHerotitle": "1. Legal Information",
  "MentionLegale.subtitle": "The Infrans website is published by Infrans, a simplified joint-stock company with a capital of 50,000 euros, registered with the Paris Trade and Companies Register under number 123 456 789, whose registered office is located at Cocody 7th tranche.",
  "MentionLegale.numero": "VAT number: CI 901",
  "MentionLegale.direct": "Publication Director: Mr. President of Infrans",
  "MentionLegale.subHerotitleHebergement": "2. Hosting",
  "MentionLegale.subtitleHebergement": "The site is hosted by Onma., whose registered office is located at ROME Spienza, CA 91789, Italy.",
  "MentionLegale.proprieteIntellectuelle": "3. Intellectual Property",
  "MentionLegale.proprieteDescription": "All elements constituting the Infrans website (texts, images, logos, etc.) as well as the site itself are the exclusive property of Infrans or its partners. These elements are protected by intellectual property laws.",
  "MentionLegale.proprieteReprod": "Any reproduction, representation, modification, publication, or adaptation of all or part of the elements of the site, by any means or process, is prohibited without prior written authorization from Infrans.",
  
  // api send-email
  "api.sendemail_subject": "New appointment request",
  "api.sendemail_Name": "Name",
  "api.dsendemail_Prenom": "First Name",
  "api.dsendemail_Tel": "Phone",
  "api.sendemail_Entreprise": "Company",
  "api.sendemail_Non_renseignee": "Not specified",
  "api.sendemail_date": "Date",
  "api.sendemail_heure": "Time",
  "api.sendemail_sujet": "Subject",
  "api.sendemail_messageErreur": "No additional message",
  
  
    },
    
  }
  