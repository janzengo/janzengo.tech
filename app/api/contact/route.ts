import { NextRequest, NextResponse } from 'next/server';
import { mailOptions, transporter } from '@/lib/nodemailer';
import { renderAdminEmail } from '@/lib/emailTemplate';
import { renderEmail as renderClientEmail } from '@/lib/clientEmailTemplate';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const msgHtml = message.replace(/\n/g, '<br/>');

    const ownerMail = {
      ...mailOptions,
      to: 'janzen@janzengo.tech',
      subject: `New contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: renderAdminEmail({
        logoUrl: 'https://janzen.is-a.dev/images/logo.ico',
        pill: 'New inquiry',
        headline: `Message from ${name}`,
        subhead: 'A new contact request was submitted on janzengo.tech',
        fromName: name,
        fromEmail: email,
        messageHtml: msgHtml,
        footer: 'You received this because someone submitted your contact form.',
      }),
    };

    const clientMail = {
      ...mailOptions,
      to: email,
      subject: 'Thanks for reaching out!',
      text: `Hi ${name},\n\nThanks for contacting Janzen. Your message was received:\n\n${message}\n\nHe will get back to you soon.\n\n— janzengo.tech`,
      html: renderClientEmail({
        logoUrl: 'https://janzen.is-a.dev/images/logo.ico',
        headline: 'Thanks for reaching out!',
        subhead: 'We received your message and will get back to you soon.',
        messageHtml: msgHtml,
        footer: 'You are receiving this because you submitted the contact form on janzengo.tech.',
      }),
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(clientMail);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact send error', error);
    return NextResponse.json({ ok: false, error: 'Failed to send' }, { status: 500 });
  }
}
