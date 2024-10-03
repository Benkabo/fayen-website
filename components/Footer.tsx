"use client";

import Image from "next/image";
import fayenWhiteLogo from "@/public/images/logo-white.png";
import Link from "next/link";
import { FaArrowCircleUp, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { useEffect } from "react";

export default function Footer() {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
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
              <div className="mb-5">
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
                <Link href={"#"}>
                  <p className="font-semibold ">Privacy Policy & Terms</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-5xl md:text-7xl lg:text-9xl text-slate-500 tracking-wide mb-5 text-center md:text-start">
                Let&apos;s Talk
              </p>
              <div className="flex flex-col md:flex-row text-center md:text-start gap-5">
                <div>
                  <p className="text-slate-500">For more info:</p>
                  <Link href="mailto:Info@fayentravel.co.tz">
                    <p className="ml-2">Info@fayentravel.co.tz</p>
                  </Link>
                </div>
                <div>
                  <p className="text-slate-500">Contact us Now</p>
                  <p>(255) 655 210 944</p>
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
  );
}
