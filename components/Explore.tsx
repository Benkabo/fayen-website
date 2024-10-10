import Link from "next/link";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";

import shape from "@/public/images/shape-4 1.svg";
import explore1 from "@/public/images/explore1.png";
import explore2 from "@/public/images/explore2.png";

export default function Explore() {
  return (
    <div className=" max-w-screen-md lg:max-w-screen-2xl min-h-[500px] mx-auto  py-10 ">
      <div className="flex gap-6">
        <div className="hidden lg:flex w-1/2 relative">
          <Image src={shape} alt="shape" />
          <div className="absolute left-0 ">
            <Image
              src={explore2}
              width={300}
              alt="explore-2"
              className="rounded-xl"
            />
          </div>
          <div className="absolute left-1/2 translate-y-2/4 ">
            <Image
              src={explore1}
              width={300}
              alt="explore-1"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className=" w-[1100px]">
          <article>
            <h1 className="text-6xl font-extrabold text-center md:text-left text-[#01306A]">
              Why choose Fayen Travel Agency
            </h1>
          </article>
          <div className="leading-7 text-xl text-center md:text-left mt-5">
            At our company, we offer comprehensive travel services worldwide.
            Whether you’re dreaming of an adventure in Africa, exploring the
            stunning beaches of Zanzibar, or traveling to top global
            destinations like Thailand, South Africa, or Dubai, we’ve got you
            covered. Our services include flight bookings, visa assistance, car
            rentals, holiday packages, hotel reservations, and personalized
            itineraries tailored to your needs. With our experienced team and
            global network, we make travel seamless, ensuring you can explore
            the world with ease and confidence. Choose us for a hassle-free
            travel experience wherever you want to go.
          </div>
          <div className="mt-8 text-white flex items-center justify-center md:justify-start">
            <button className=" bg-[#01306A] flex gap-5 text-4xl font-extrabold py-2 px-5 rounded-md hover:scale-105 transition duration-300 ease-in-out">
              <Link href="/about">Book Now</Link>
              <span>
                <CiBookmark />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
