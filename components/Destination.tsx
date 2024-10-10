"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import dubaiImg from "@/public/images/dubai.jpg";
import capetownImg from "@/public/images/cape-town.jpg";
import thailandImg from "@/public/images/thailand.png";
import holidayImg from "@/public/images/holiday.jpg";
import Image from "next/image";

export default function Destination() {
  const images = [
    {
      src: thailandImg,
      title: "Thailand (2N Phuket & 2N Krabi) - 4N/5D",
      subtitle: "Price Starting at: USD 609 PP (On Double Sharing Basis)",
      description: `
         
      Inclusions:
      • 4 Nights Stay in Premium Hotels in Krabi & Phuket
      • Return Private Pickup & Drop from Phuket Intl. Airport
      • Daily Buffet Breakfast at the Hotel
      • Krabi 7 Islands Sunset Tour by Long Tail Boat with Dinner
      • Return Transfers from Phuket to Krabi on Pvt. Basis
      • Phuket Fantasea Show with Dinner
      • Visit James Bond Island by Speedboat with Lunch
      • All Applicable Taxes
    `,
    },
    {
      src: capetownImg,
      title: `4N/5D Price Starting at: USD 495 PP (Per Person on Twin Sharing Basis)`,
      subtitle: "Luxury Package: USD 835 PP (Per Person on Twin Sharing Basis)",
      description: "This is the description for Image 2",
    },
    {
      src: dubaiImg,
      title: `4N/5D `,
      subtitle: "Prices Starting from (Per Person on Double Sharing Basis)",
      description: "This is the description for Image 3",
    },
    {
      src: holidayImg,
      title: "",
      subtitle: "",
      description: "This is the description for Image 3",
    },
    {
      src: capetownImg,
      title: "",
      subtitle: "",
      description: "This is the description for Image 2",
    },
  ];
  return (
    <div id="destination" className="min-h-fit py-20 lg:flex">
      <div className="max-w-screen-lg mx-auto md:max-w-screen-xl md:m-auto">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold text-[#01306A]">
            Destinations
          </p>

          <p className="mb-5 mt-8 tracking-wide font-extrabold text-[#01306A] text-4xl md:text-6xl">
            Explore Beautiful Places
          </p>
        </div>
        {/* 
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
          className="max-w-[90%] lg:max-w-full"
        >
          <SwiperSlide>
            <DestinationCard
              src={dubaiImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, Frances"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={thailandImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={capetownImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={holidayImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
        </Swiper> */}

        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative group transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  sizes="full"
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="rounded-lg shadow-lg object-cover w-full h-[500px]"
                />
                <div className="p-20 absolute inset-0 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-4">
                  <div className="text-black text-left">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm font-semibold mb-4">
                      {image.subtitle}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-base">
                      <li>4 Nights Stay in Premium Hotels in Krabi & Phuket</li>
                      <li>
                        Return Private Pickup & Drop from Phuket Intl. Airport
                      </li>
                      <li>Daily Buffet Breakfast at the Hotel</li>
                      <li>
                        Krabi 7 Islands Sunset Tour by Long Tail Boat with
                        Dinner
                      </li>
                      <li>
                        Return Transfers from Phuket to Krabi on Pvt. Basis
                      </li>
                      <li>Phuket Fantasea Show with Dinner</li>
                      <li>Visit James Bond Island by Speedboat with Lunch</li>
                      <li>All Applicable Taxes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
