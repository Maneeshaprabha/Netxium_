import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. Check for required environment variables early
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email environment variables!");
      return NextResponse.json(
        { error: "Server configuration error." }, 
        { status: 500 }
      );
    }

    // 2. Get the form data from the frontend request
    const { name, email, message } = await request.json();

    // 3. Add basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." }, 
        { status: 400 }
      );
    }

    // 4. Set up the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 5. Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email, 
      subject: `New Netxium Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    // 6. Send the email
    await transporter.sendMail(mailOptions);

    // 7. Tell the frontend it was a success
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}