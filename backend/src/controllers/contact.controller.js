import { resend } from "../config/resend.js";

export const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false });
    }
    await resend.emails.send({
      from: `${name} ${email}`,
      to: process.env.OWNER_EMAIL,
      subject: `Portfolio message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ success: false });
  }
};
