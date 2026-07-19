import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting en mémoire (best-effort, réinitialisé au cold start).
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

// Échappe le HTML pour empêcher toute injection dans l'email envoyé.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessaie dans une minute.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as {
    name?: unknown;
    email?: unknown;
    message?: unknown;
  };

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (trimmedName.length > MAX_NAME_LENGTH) {
    return NextResponse.json({ error: 'Nom trop long' }, { status: 400 });
  }

  if (trimmedEmail.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(trimmedEmail)) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
  }

  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'Message trop long' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY manquante');
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }

  const safeName = escapeHtml(trimmedName);
  const safeEmail = escapeHtml(trimmedEmail);
  const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br/>');

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Portfolio <contact@adriensudja.fr>',
      to: 'adriensudja.pro@outlook.fr',
      replyTo: trimmedEmail,
      subject: `[Portfolio] Message de ${safeName}`,
      html: `
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <hr/>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
