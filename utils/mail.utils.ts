import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type sendEmailDTO = {
  to: Mail.Address;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
};

const transport = nodemailer.createTransport({
  host: "Gmail",
  auth: {
    user: "kabocides@gmail.com",
    pass: 123456,
  },
} as SMTPTransport.Options);

export const sendEmail = () => {};
