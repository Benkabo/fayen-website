"use client";

import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const schema = zod.object({
  firstName: zod.string().min(1, "Firstname is required.."),
  email: zod.string().email("Invalid email").min(1, "Email is required"),
  lastName: zod.string().min(1, "Lastname is required.."),
  phoneNumber: zod
    .string()
    .max(13, "Enter valid phone number")
    .min(10, "Enter valid phonenumber"),
  message: zod.string().min(1, "Message is required"),
  subject: zod.string().min(1, "Subject is required"),
});

type FormDataType = zod.infer<typeof schema>;

export default function Booking() {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formValue: FormDataType) => {
    setLoading(true);
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formValue),
    })
      .then((response) => {
        setLoading(false);
        if (response?.status === 200) {
          setResponseMessage("Message sent successfully");
        }
        setTimeout(() => {
          setResponseMessage("");
        }, 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="max-w-(--breakpoint-lg) m-auto">
      <div className="text-center mt-10">
        <p className="text-3xl font-bold text-[#01306A]">
          For bookings and Inquiries
        </p>
        <p className="mb-5 tracking-wide font-extrabold text-[#01306A] text-4xl">
          Contact Us
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 sm:mx-5 gap-4 mb-10">
        <div className="hidden lg:block bg-gray-100/50 px-10 py-5 ">
          <p className="text-center text-2xl font-semibold mb-5">
            How can we help you?
          </p>
          <div className="flex gap-2 mb-5">
            <FaPhoneAlt size={20} />
            <Link href="tel:+255779528442">(255) 779 528 442</Link>
          </div>

          <div className="flex gap-2 mb-5">
            <FaLocationDot />
            <p>Oysterbay, Dar es Salaam</p>
          </div>

          <div>
            <iframe
              title="google map"
              src="https://maps.google.com/maps?q=Oysetrbay&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-2 px-5 py-5 bg-[#f5f5f5]">
          <div className=" mb-2 italic flex items-center justify-center text-green-600">
            {responseMessage}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <div className="flex flex-col">
                <label className="mb-1">FirstName</label>
                <input
                  type="text"
                  className="py-2 px-2 rounded-xs border"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <div className="text-red-600 text-sm italic">
                    {errors.firstName.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">LastName</label>
                <input
                  type="text"
                  className="py-2 px-2 rounded-xs border"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <div className="flex flex-col">
                <label className="mb-1">Email</label>
                <input
                  type="email"
                  className="py-2 px-2 rounded-xs border"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-red-600 text-sm italic">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">Phone Number</label>
                <input
                  className="py-2 px-2 rounded-xs border"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <div className="text-red-600 text-sm italic">
                    {errors.phoneNumber.message}
                  </div>
                )}
              </div>
            </div>
            <div className="grid mb-10">
              <label className="mb-1">Subject</label>
              <select
                id="subjects"
                className="py-2 px-2 rounded-xs border bg-white"
                {...register("subject")}
              >
                <option value="" className="text-sm">
                  ---please select a subject---
                </option>
                <option value="Flight Booking">Flight Booking</option>
                <option value="Hotel Reservation">Hotel Reservation</option>
                <option value="VISA Assistance">VISA Assistance</option>
                <option value="Car Rental">Car Rental</option>
                <option value="Guided Tour">Guided Tour</option>
                <option value="Tour Package">Tour Package</option>
              </select>
            </div>
            <div className="grid mb-10">
              <label className="mb-1">Message</label>
              <textarea
                rows={5}
                className="py-2 px-2 rounded-xs border"
                {...register("message")}
              />
              {errors.message && (
                <div className="text-red-600 text-sm italic">
                  {errors.message.message}
                </div>
              )}
            </div>
            <div className="text-white">
              <button
                disabled={loading}
                type="submit"
                className="px-5 py-3 rounded-md bg-[#01306A]"
              >
                Send Inqury
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
