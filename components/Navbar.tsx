"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import FayenWhiteLogo from "@/public/images/logo-white.png";
import FayenBlueLogo from "@/public/images/logo.png";
import { Links } from "@/lib/types/types";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const links: Links[] = [
    {
      id: 1,
      name: "Home",
      link: "home",
    },
    {
      id: 2,
      name: "About Us",
      link: "about",
    },
    {
      id: 3,
      name: "Services",
      link: "services",
    },
    {
      id: 4,
      name: "Destination",
      link: "destination",
    },
    {
      id: 5,
      name: "Testimonials",
      link: "testimonials",
    },
  ];

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
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 w-full z-10 ease-in duration-300 "
    >
      <div className="max-w-[1240px] m-auto flex items-center justify-between p-4">
        <div>
          {logoColor ? (
            <Image src={FayenBlueLogo} alt="Fayen logo" width={175} />
          ) : (
            <Image src={FayenWhiteLogo} alt="Fayen logo" width={175} />
          )}
        </div>
        <div className="">
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            {links.map(({ id, name }) => (
              <li key={id} className="px-5 font-bold text-xl">
                <Link href={"#"}>{name}</Link>
              </li>
            ))}
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
            {links.map(({ id, name }) => (
              <li
                key={id}
                className="p-4 hover:text-gray-500 text-white font-bold text-4xl"
              >
                <Link href={"#"}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
