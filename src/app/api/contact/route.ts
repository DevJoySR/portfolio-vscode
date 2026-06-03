import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ error: 'Message trop long' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <contact@adriensudja.fr>',
      to: 'adriensudja.pro@outlook.fr',
      replyTo: email,
      subject: `[Portfolio] Message de ${name}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}