import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load variables from .env.local
dotenv.config({ path: '.env.local' }); 

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Allows Vite (port 5173) to talk to this server
app.use(express.json()); // Parses incoming JSON from the form

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Verify environment variables exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email environment variables!");
      return res.status(500).json({ error: "Server configuration error." });
    }

    // 2. Validate form data
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // 3. Configure the email transport (WITH ANTIVIRUS BYPASS)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Bypasses the "self-signed certificate" error
      }
    });

    // 4. Set up email details
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

    // 5. Send it
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send email. Check backend logs." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});