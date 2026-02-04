import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize with a placeholder to prevent build errors if env var is missing
const apiKey = process.env.RESEND_API_KEY || 're_123456789';
const resend = new Resend(apiKey);

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { error: 'Resend API key is not configured' }, 
            { status: 500 }
        );
    }

    try {
        const { name, email, phone, service } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['your-email@example.com'], // Replace with your actual email
            subject: `New Contact Form Submission: ${service}`,
            html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
