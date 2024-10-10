"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import FayenWhiteLogo from "@/public/images/logo-white.png";
import FayenBlueLogo from "@/public/images/FAYEN.png";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logoColor, setLogoColor] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== "undefined" && window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#01306A");
        setLogoColor(true);
      } else {
        setColor("transparent");
        setTextColor("white");
        setLogoColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${color}`,
      }}
      className="fixed top-0 left-0 w-full z-[999] ease-in duration-300 "
    >
      <div className="max-w-screen-lg m-auto flex items-center justify-between p-4">
        <Link href="/">
          {logoColor ? (
            <Image src={FayenBlueLogo} alt="Fayen logo" width={175} />
          ) : (
            <Image src={FayenWhiteLogo} alt="Fayen logo" width={175} />
          )}
        </Link>
        <div className="">
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className="px-5 font-bold text-xl">
              <Link href="/">Home</Link>
            </li>
            <li className="px-5 font-bold text-xl">
              <Link href="/#about">About Us</Link>
            </li>
            <li className="px-5 font-bold text-xl">
              <Link href="/#service">Services</Link>
            </li>
            <li className="px-5 font-bold text-xl">
              <Link href="/#destination">Destination</Link>
            </li>
            <li className="px-5 font-bold text-xl">
              <Link href="/#testimonial">Testimonials</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={32} color="white" />
          ) : (
            <AiOutlineMenu
              size={32}
              color="white"
              style={{ color: `${textColor}` }}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-[#01306A] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul style={{ color: `${textColor}` }} className="">
            <li
              onClick={handleNav}
              className="p-4 hover:text-gray-500 text-white font-bold text-4xl"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-gray-500 text-white font-bold text-4xl"
            >
              <Link href="/#about">About Us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-gray-500 text-white font-bold text-4xl"
            >
              <Link href="/#service">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-gray-500 text-white font-bold text-4xl"
            >
              <Link href="/#destination">Destination</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-gray-500 text-white font-bold text-4xl"
            >
              <Link href="/#testimonial">Testimonials</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
