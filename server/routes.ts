import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import 'dotenv/config';


if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
  throw new Error("EMAIL and EMAIL_PASSWORD environment variables must be set");
}

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,         // Your Gmail address
    pass: process.env.EMAIL_PASSWORD // Your Gmail App Password
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      const mailOptions = {
        from: process.env.EMAIL, // Sender (your email)
        to: "rahulankam1234@gmail.com", // Recipient (your email)
        subject: `Portfolio Contact Form: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.json({ success: true, message: "Email sent successfully" });
      console.log("Email sent to:", "rahulankam1234@gmail.com");

    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ message: "Failed to send email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

