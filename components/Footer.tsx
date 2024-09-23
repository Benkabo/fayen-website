"use client";

import Image from "next/image";
import fayenWhiteLogo from "@/public/images/logo-white.png";
import Link from "next/link";
import { FaArrowCircleUp, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#013f86]  ">
      <div className="max-w-[1240px] m-auto">
        <div className="mt-16 text-white grid md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Image src={fayenWhiteLogo} alt="Fayen logo image" width={175} />
            </div>
            <div className="mb-2">
              <p>
                Fayen on a journey of unparalleled adventure with our travel
                agency, where every detail is curated to perfection, ensuring
                you not only explore the world.
              </p>
            </div>
            <div className="flex gap-6 mb-2">
              <Link
                href="https://www.google.com/"
                passHref={true}
                target="_blank"
              >
                <FaFacebook size={30} />
              </Link>
              <Link href={"#"} passHref={true} target="_blank">
                <RiInstagramFill size={30} />
              </Link>
              <Link href={"#"} passHref={true} target="_blank">
                <BsTwitterX size={30} />
              </Link>
              <Link href={"#"} passHref={true} target="_blank">
                <FaWhatsapp size={30} />
              </Link>
            </div>
            <div>
              <Link href={"#"}>
                <p className="font-semibold">Privacy Policy & Terms</p>
              </Link>
            </div>
          </div>
          <div></div>
          <div className="col-span-2">
            <p className="md:text-9xl text-5xl text-slate-500 tracking-wide mb-5">
              Let&apos;s Talk
            </p>
            <div className="md:flex gap-5">
              <div>
                <p className="text-slate-500">For more info:</p>
                <Link href="mailto:Info@fayentravel.co.tz">
                  <div className="flex items-center">
                    <MdEmail />
                    <p className="ml-2">Info@fayentravel.co.tz</p>
                  </div>
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
        <div className="py-2">
          <hr className="border-slate-500" />
          <p className="text-center mt-2 text-slate-500">
            @ {new Date().getFullYear()} Fayen Travel All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
