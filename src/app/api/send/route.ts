import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
const mailTo = process.env.MAIL_TO || 'hello@telesoftas.africa';

export async function POST(request: Request) {
    if (!smtpUser || !smtpPass) {
        return NextResponse.json(
            { error: 'SMTP credentials are not configured' },
            { status: 500 }
        );
    }

    try {
        const { name, email, phone, service } = await request.json();

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const info = await transporter.sendMail({
            from: `Contact Form <${smtpUser}>`,
            to: mailTo,
            subject: `New Contact Form Submission: ${service}`,
            html: `
                <h2>New Contact Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service Needed:</strong> ${service}</p>
            `,
        });

        return NextResponse.json({ success: true, id: info.messageId });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
