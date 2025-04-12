import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();
import { NextResponse } from 'next/server';

export async function POST(request) {
    let body = await request.json();
    let { name, email, message } = body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        }
    })

    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({
            message: 'Email sent successfully!'
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Error sending email',
            error: error.message
        }, { status: 500 });
    }
}