import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { translations } from '@/lib/i18n/translations'; // Importer les traductions

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 13) {
    return 'matin'; 
  } else {
    return 'soir'; 
  }
}

export async function POST(request: Request) {
  const {
    nom,
    prenom,
    email,
    telephone,
    entreprise,
    poste,
    taille,
    services,
    description,
    budget,
    delai,
    contact_preference,
    lang = 'fr', 
  } = await request.json();
  // Vérifier si la langue existe dans les traductions
  const t = translations[lang as keyof typeof translations] || translations['fr']; 

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptionsToEntreprise = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: `${t.devis_subject} ${nom} ${prenom}`,
    text: `
      ${t.devis_Name}: ${nom}
      ${t.devis_Prenom}: ${prenom}
      Email: ${email}
      ${t.devis_Tel}: ${telephone}
      ${t.devis_Entreprise}: ${entreprise || t.devis_Non_renseignee}
      ${t.devis_Poste}: ${poste || t.devis_Non_renseignee}
      ${t.devis_Taille_entreprise}: ${taille || t.devis_Non_renseignee}
      ${t.devis_Services_souhaites}: ${services.join(', ')}
      ${t.devis_Description_projet}: ${description}
      ${t.devis_Budget_estime}: ${budget}
      ${t.devis_Date_souhaitee}: ${new Date(delai).toLocaleDateString('fr-FR')}
      ${t.devis_Preference_contact}: ${contact_preference}
    `,
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: t.devis_mailoptionsubject,
    text: `
      ${t[getGreeting()]} (Mr/Mme) ${prenom} ${nom},

      ${t.devis_recap}

      ${t.devis_Services_souhaites}: ${services.join(', ')}
      ${t.devis_Description_projet}: ${description}
      ${t.devis_Budget_estime}: ${budget}
      ${t.devis_Date_souhaitee}: ${new Date(delai).toLocaleDateString('fr-FR')}
      ${t.devis_Preference_contact}: ${contact_preference}

      ${t.devis_bientot}

      ${t.Cordialement}
      ${t.equipe}
    `,
  };

  try {
    await transporter.sendMail(mailOptionsToEntreprise);
    await transporter.sendMail(mailOptionsToUser);

    return NextResponse.json({ message: t.emailEnvoye }, { status: 200 });
  } catch (error) {
    console.error(t.erreurEmailSend, error);
    return NextResponse.json({ message: t.erreurEmail }, { status: 500 });
  }
}