"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import * as yup from "yup";

const ValidationSchema = yup.object().shape({
  firstName: yup.string().required("Firstname is required.."),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .max(13, "Enter valid phone number")
    .min(10, "Enter valid phonenumber"),
  message: yup.string().required("Message is required"),
});

export default function Booking() {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      subject: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(values),
      })
        .then((response) => {
          setLoading(false);
          if (response?.status === 200) {
            setResponseMessage("Message sent successfully");
          }
          resetForm();
          setTimeout(() => {
            setResponseMessage("");
          }, 5000);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    },
  });

  return (
    <div className="max-w-screen-lg m-auto">
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
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <div className="flex flex-col">
                <label className="mb-1">FirstName</label>
                <input
                  name="firstName"
                  type="text"
                  className="py-2 px-2 rounded-sm border-[1px]"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-600 text-sm italic">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">LastName</label>
                <input
                  name="lastName"
                  type="text"
                  className="py-2 px-2 rounded-sm border-[1px]"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <div className="flex flex-col">
                <label className="mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  className="py-2 px-2 rounded-sm border-[1px]"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-600 text-sm italic">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">Phone Number</label>
                <input
                  name="phoneNumber"
                  className="py-2 px-2 rounded-sm border-[1px]"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className="text-red-600 text-sm italic">
                    {formik.errors.phoneNumber}
                  </div>
                )}
              </div>
            </div>
            <div className="grid mb-10">
              <label className="mb-1">Subject</label>
              <select
                name="subject"
                id="subjects"
                className="py-2 px-2 rounded-sm border-[1px] bg-white"
                value={formik.values.subject}
                onChange={formik.handleChange}
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
                name="message"
                rows={5}
                className="py-2 px-2 rounded-sm border-[1px]"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-600 text-sm italic">
                  {formik.errors.message}
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
