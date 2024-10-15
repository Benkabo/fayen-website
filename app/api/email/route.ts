import { Resend } from "resend";

import ContactEmail from "@/emails/Contact";

const resend = new Resend(String(process.env.RESEND_API_KEY));

export async function POST(request: Request) {
  const { firstName, lastName, email, phoneNumber, message } =
    await request.json();

  const results = await resend.emails.send({
    from: "delivered@resend.dev",
    to: "Info@fayentravel.co.tz",
    subject: "Your Space Jelly Login Code",
    react: ContactEmail({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    }),
  });

  return Response.json({
    data: results,
  });
}
