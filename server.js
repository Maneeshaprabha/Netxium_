app.post('/api/contact', async (req, res) => {
  try {
    // 1. Added 'subject' to the desctructuring
    const { name, email, subject, message } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email environment variables!");
      return res.status(500).json({ error: "Server configuration error." });
    }

    // 2. Added 'subject' to validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false 
      }
    });

    // 3. Updated the subject line and body to include the user's custom subject
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Netxium Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send email. Check backend logs." });
  }
});