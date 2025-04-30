import nodemailer from "nodemailer";

export async function sendResetPasswordEmail(email: string, resetLink: string) {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: `"Trackly Support" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Reset your Trackly password",
        html: `
      <p>Hello,</p>
      <p>You requested to reset your password. Click the link below to proceed:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link will expire in 1 hour.</p>
    `,
    }

    await transporter.sendMail(mailOptions)
};