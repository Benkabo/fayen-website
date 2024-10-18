"use client";

import Image from "next/image";
import fayenWhiteLogo from "@/public/images/Fayen-icon.png";
import Link from "next/link";
import { FaArrowCircleUp, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Footer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className="max-w-full min-h-min m-auto bg-[#013f86]">
        <div className="flex flex-col">
          <div className="mb-5 md:mx-20 lg:mx-52">
            <div className="mt-10 text-white md:flex gap-5">
              <div className="text-center md:text-start md:w-1/2">
                <div className="mb-5 flex items-center justify-center md:justify-start">
                  <Image
                    src={fayenWhiteLogo}
                    alt="Fayen logo image"
                    width={175}
                  />
                </div>
                <div className="mb-5 lg:w-[70%]">
                  Fayen on a journey of unparalleled adventure with our travel
                  agency, where every detail is curated to perfection, ensuring
                  you not only explore the world.
                </div>
                <div className="flex items-center justify-center md:justify-start gap-6 mb-5">
                  <Link
                    href="https://www.google.com/"
                    passHref={true}
                    target="_blank"
                  >
                    <FaFacebook
                      size={30}
                      className="hover:scale-125 duration-300 ease-in-out"
                    />
                  </Link>
                  <Link href={"#"} passHref={true} target="_blank">
                    <RiInstagramFill
                      size={30}
                      className="hover:scale-125 duration-300 ease-in-out"
                    />
                  </Link>
                  <Link href={"#"} passHref={true} target="_blank">
                    <BsTwitterX
                      size={30}
                      className="hover:scale-125 duration-300 ease-in-out"
                    />
                  </Link>
                  <Link href={"#"} passHref={true} target="_blank">
                    <FaWhatsapp
                      size={30}
                      className="hover:scale-125 duration-300 ease-in-out"
                    />
                  </Link>
                </div>
                <div>
                  <div
                    className="hover:cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <p className="font-semibold ">
                      Refund and Cancelleation Policy
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-5xl md:text-7xl lg:text-9xl text-slate-500 tracking-wide mb-5 text-center md:text-start">
                  Let&apos;s Talk
                </p>
                <div className="flex flex-col md:flex-row text-center md:text-start gap-5">
                  <div>
                    <p className="text-slate-500">For more info:</p>
                    <a href="mailto:Info@fayentravel.co.tz">
                      <p>Info@fayentravel.co.tz</p>
                    </a>
                  </div>
                  <div>
                    <p className="text-slate-500">Contact us Now</p>
                    <p>
                      <a href="tel:+255779528442">(255) 779 528 442</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="fixed bottom-5 sm:right-5 right-0"
                onClick={scrollToTop}
              >
                <FaArrowCircleUp
                  size={50}
                  className="border-white border-2 rounded-full bg-white "
                  color="#013F86"
                />
              </button>
            </div>
          </div>

          <div className="m-10">
            <hr className="border-slate-500 mb-5" />
            <p className="text-center mt-2 text-slate-500">
              @ {new Date().getFullYear()} Fayen Travel All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal box */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Modal header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-[#013f86]">
                FAYEN TRAVEL AGENCY REFUND AND CANCELLATION POLICY
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            {/* Modal body - Scrollable content */}

            <div className="px-6 py-4 overflow-y-auto h-[80vh]">
              <div className="p-6 space-y-8 bg-gray-100 text-gray-900">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    Flight Cancellations
                  </h2>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Customer:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Before 7 days of departure:</strong> 50% refund
                        on the ticket price.
                      </li>
                      <li>
                        <strong>Between 3-4 days of departure:</strong> 20%
                        refund on the ticket price.
                      </li>
                      <li>
                        <strong>Within 24 HOURS of departure:</strong> No
                        refund, unless the airline has a special policy (e.g.,
                        COVID-related) or flexible ticketing options.
                      </li>
                      <li>
                        <strong>Non-refundable tickets:</strong> No refund, but
                        some airlines may allow rebooking for a fee.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Airline:</h3>
                    <p>Full refund or rebooking at no extra cost.</p>
                    <p>
                      Compensation in accordance with local airline regulations
                      (e.g., EU261 for European airlines).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    Hotel Booking Cancellations
                  </h2>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Customer:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>More than 14 days before check-in:</strong> Full
                        refund.
                      </li>
                      <li>
                        <strong>Between 7-14 days before check-in:</strong> 50%
                        refund.
                      </li>
                      <li>
                        <strong>Less than 7 days before check-in:</strong> No
                        refund.
                      </li>
                      <li>
                        <strong>Non-refundable bookings:</strong> No refund.
                      </li>
                      <li>
                        <strong>
                          Force Majeure (unforeseen events, natural disasters):
                        </strong>{" "}
                        Refund or rebooking subject to hotel policies.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Hotel:</h3>
                    <p>
                      Full refund or rebooking at a similar or upgraded hotel.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    Package Holiday Cancellations
                  </h2>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Customer:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>14 days before USE OF SERVICE:</strong> 50%
                        refund of the total package price.
                      </li>
                      <li>
                        <strong>
                          Between 30-44 days before USE OF SERVICE:
                        </strong>{" "}
                        20% refund.
                      </li>
                      <li>
                        <strong>
                          Less than 30 days before USE OF SERVICE:
                        </strong>{" "}
                        No refund.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Agency:</h3>
                    <p>
                      Full refund or offer of a substitute package of equal or
                      higher value.
                    </p>
                    <p>
                      Compensation or assistance in case of significant
                      disruption (depending on the country’s consumer protection
                      laws).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    Visa and Service Fees
                  </h2>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Visa Application Fees:</strong> Non-refundable
                      once the application is submitted, as this is paid
                      directly to the embassy or consulate.
                    </li>
                    <li>
                      <strong>
                        Service Fees (consultation, special arrangements):
                      </strong>{" "}
                      Non-refundable after the service has been initiated or
                      delivered.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">Travel Insurance</h2>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Cancellation by Customer:</strong> Travel
                      insurance policies are generally non-refundable after
                      purchase, unless canceled within 24 hours, depending on
                      the insurer&apos;s policy.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    Excursions and Activities Cancellations
                  </h2>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Customer:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>More than 7 days before the excursion:</strong>{" "}
                        Full refund.
                      </li>
                      <li>
                        <strong>Between 3-7 days:</strong> 50% refund.
                      </li>
                      <li>
                        <strong>Less than 3 days:</strong> No refund.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <h3 className="font-semibold">Cancellation by Provider:</h3>
                    <p>
                      Full refund or offer of an alternative excursion or date.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    General Refund Guidelines
                  </h2>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Method of Refund:</strong> Refunds will be issued
                      using the original payment method (cash, debit card, bank
                      transfer, etc.).
                    </li>
                    <li>
                      <strong>Processing Time:</strong> Refunds will be
                      processed within 14 business days after confirmation of
                      cancellation.
                    </li>
                    <li>
                      <strong>Cancellation Fees:</strong> All refunds are
                      subject to a cancellation fee, typically a fixed
                      percentage of the total booking amount, depending on the
                      service provider’s policy.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    Exceptions & Special Circumstances
                  </h2>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Force Majeure Events:</strong> In case of events
                      like natural disasters, pandemics, or government
                      restrictions, refunds will be assessed based on the
                      specific supplier’s policy (e.g., airline, hotel) and
                      local regulations.
                    </li>
                    <li>
                      <strong>Flexible or Non-Refundable Bookings:</strong>{" "}
                      Refunds are subject to the terms and conditions agreed
                      upon at the time of booking. Non-refundable bookings may
                      not be eligible for refunds, but rebooking options may be
                      provided at an additional fee.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">
                    Customer Communication
                  </h2>

                  <p>
                    <strong>Cancellation Requests:</strong> All cancellations
                    must be requested in writing, via email, or through a
                    dedicated customer service line.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">Dispute Resolution</h2>
                  <p>
                    Any disputes arising from refunds will be addressed
                    according to the policies and legal guidelines of the
                    service provider and relevant authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
