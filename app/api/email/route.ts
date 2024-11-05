import { Resend } from "resend";

import ContactEmail from "@/emails/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, phoneNumber, message, subject } =
    await request.json();

  const { data, error } = await resend.emails.send({
    from: "FAYEN <noreply@fayen.co.tz>",
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

  if (error) {
    return Response.json(error);
  }

  return Response.json({
    data: data,
    message: "Email sent successfully",
    status: 200,
  });
}
