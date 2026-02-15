import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const DEFAULT_CONTACT_TO_EMAIL = 'raiidemedia@gmail.com';

type ContactPayload = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const sanitize = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as ContactPayload;

        const name = sanitize(body.name || '');
        const email = sanitize(body.email || '');
        const subject = sanitize(body.subject || '');
        const message = (body.message || '').trim();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
        }

        const host = process.env.SMTP_HOST;
        const port = Number(process.env.SMTP_PORT || '587');
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;
        const toEmail = (process.env.CONTACT_TO_EMAIL || DEFAULT_CONTACT_TO_EMAIL).trim();
        const fromEmail = process.env.CONTACT_FROM_EMAIL || user;
        const fromName = process.env.CONTACT_FROM_NAME || 'Website Contact';

        if (!host || !user || !pass || !fromEmail) {
            return NextResponse.json(
                { error: 'Email service is not configured. Please set SMTP environment variables.' },
                { status: 500 }
            );
        }

        if (!isValidEmail(toEmail)) {
            return NextResponse.json(
                { error: 'Contact recipient email is invalid. Please check CONTACT_TO_EMAIL.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: {
                user,
                pass,
            },
        });

        await transporter.sendMail({
            from: `${fromName} <${fromEmail}>`,
            to: toEmail,
            replyTo: email,
            subject: `[Contact] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br />')}</p>
            `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unexpected error.';
        return NextResponse.json({ error: `Failed to send email: ${message}` }, { status: 500 });
    }
}
