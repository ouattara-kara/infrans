
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
    
    const { name, email, subject, message, lang = 'en' } = await request.json();
    const t = translations[lang as keyof typeof translations] || translations['en']; 

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
        subject: `${t.contact_subject} : ${subject}`, 
        text: `
      ${t.contact_text_name}: ${name}
      Email: ${email}
      Sujet: ${subject}
      Message: ${message}
    `,
    };

    const mailOptionsToUser = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: t.contact_mailoptionsubject,
        text: `
      ${t[getGreeting()]} (Mr/Mme) ${name},

      ${t.contact_text_recap}

      Sujet: ${subject}
      Message: ${message}

      ${t.contact_text_bientot}

      ${t.contact_Cordialement}
      ${t.contact_equipe}
    `,
    };

    try {
        await transporter.sendMail(mailOptionsToEntreprise);
        await transporter.sendMail(mailOptionsToUser);

        return NextResponse.json({ message: t.contact_emailEnvoye }, { status: 200 });
    } catch (error) {
        console.error(t.contact_erreurEmailSend, error);
        return NextResponse.json({ message: t.contact_erreurEmail }, { status: 500 });
    }
}