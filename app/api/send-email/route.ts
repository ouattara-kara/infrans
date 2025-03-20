import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { translations } from '@/lib/i18n/translations';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 13) {
    return 'matin'; 
  } else {
    return 'soir'; 
  }
}

export async function POST(request: Request) {
  const { nom, prenom, email, telephone, entreprise, date, heure, sujet, message, lang = 'fr' } = await request.json();

  // Valider la langue
  const supportedLanguages = ['fr', 'en']; 
  const defaultLanguage = 'fr';
  const t = supportedLanguages.includes(lang) ? translations[lang] : translations[defaultLanguage];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptionsToEntreprise = {
    from: `"${nom} ${prenom}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT,
    subject: `${t.sendemail_subject} : ${sujet}`,
    text: `
      ${t.sendemail_Name}: ${nom}
      ${t.dsendemail_Prenom}: ${prenom}
      Email: ${email}
      ${t.dsendemail_Tel}: ${telephone}
      ${t.sendemail_Entreprise}: ${entreprise || t.sendemail_Non_renseignee}
      ${t.sendemail_date}: ${new Date(date).toLocaleDateString('fr-FR')}
      ${t.sendemail_heure}: ${heure}
      ${t.sendemail_sujet}: ${sujet}
      ${t.sendemail_messageErreur}: ${message || t.sendemail_messageErreur}
    `,
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: t.sendemail_mailoptionsubject,
    text: `
      ${t[getGreeting()]} (Mr/Mme) ${prenom} ${nom},

      ${t.sendemail_recap}

      ${t.sendemail_date}: ${new Date(date).toLocaleDateString('fr-FR')}
      ${t.sendemail_heure}: ${heure}
      ${t.sendemail_sujet}: ${sujet}
      ${t.sendemail_messageErreur}: ${message || t.sendemail_messageErreur}

      ${t.sendemail_bientot}

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