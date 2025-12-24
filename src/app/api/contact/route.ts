import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, location, subject, message } = body;

    // Basic required input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Name, email, subject and message are required" }, { status: 400 });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ error: "Invalid input format" }, { status: 400 });
    }

    // Optional fields validation
    if (phone && typeof phone !== "string") {
      return NextResponse.json({ error: "Invalid phone format" }, { status: 400 });
    }
    if (location && typeof location !== "string") {
      return NextResponse.json({ error: "Invalid location format" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Build email HTML body with optional fields
    const sanitize = (s: string) => String(s).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${sanitize(name)}</p>
      <p><strong>Email:</strong> ${sanitize(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${sanitize(phone)}</p>` : ""}
      ${location ? `<p><strong>Location:</strong> ${sanitize(location)}</p>` : ""}
      <p><strong>Subject:</strong> ${sanitize(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitize(message).replace(/\n/g, "<br>")}</p>
    `;

    // If mail credentials are missing, log and respond (useful for local dev)
    const mailConfigured = Boolean(process.env.MAIL_USERNAME && process.env.MAIL_APP_PASSWORD);

    if (mailConfigured) {
      // Send email to admin
      await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: `New Contact Form Submission: ${subject}`,
        html: adminHtml,
        replyTo: email,
      });

      // Send confirmation email to user
      const userHtml = `
        <h2>Thank you for contacting TantraDOT</h2>
        <p>Hi ${sanitize(name)},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        ${phone ? `<p><strong>Phone provided:</strong> ${sanitize(phone)}</p>` : ""}
        ${location ? `<p><strong>Location provided:</strong> ${sanitize(location)}</p>` : ""}
        <p><strong>Your message:</strong></p>
        <p>${sanitize(message).replace(/\n/g, "<br>")}</p>
        <br>
        <p>Best regards,<br/>TantraDOT Team</p>
      `;

      await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: email,
        subject: "We received your message — TantraDOT",
        html: userHtml,
      });
    } else {
      console.warn("Mail not configured — skipping email send. Submission:", { name, email, phone, location, subject, message });
    }

    // Return richer JSON with timestamp and submitted fields (without exposing sensitive internals)
    const responsePayload = {
      message: mailConfigured ? "Email sent successfully" : "Received (mail not configured)",
      submitted: {
        name,
        email,
        phone: phone || null,
        location: location || null,
        subject,
        message,
      },
      receivedAt: new Date().toISOString(),
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to process contact submission",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
