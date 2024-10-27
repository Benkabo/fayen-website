import { Resend } from "resend";

import ContactEmail from "@/emails/Contact";

const resend = new Resend(String(process.env.RESEND_API_KEY));

export async function POST(request: Request) {
  const { firstName, lastName, email, phoneNumber, message, subject } =
    await request.json();

  const results = await resend.emails.send({
    from: "delivered@resend.dev",
    to: "booking@fayen.co.tz",
    subject: "Booking and Inquiries from website",
    react: ContactEmail({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      subject,
    }),
  });

  return Response.json({
    data: results,
  });
}
