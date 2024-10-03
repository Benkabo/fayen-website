"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import DestinationCard from "@/app/ui/DestinationCard";

import franceImg from "@/public/images/france-img.png";

export default function Destination() {
  return (
    <div className="min-h-fit py-20 lg:flex">
      <div className="max-w-screen-lg mx-auto md:max-w-screen-xl md:m-auto">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold text-[#01306A]">
            Destinations
          </p>

          <p className="mb-5 mt-8 tracking-wide font-extrabold text-[#01306A] text-4xl md:text-6xl">
            Explore Beautiful Places
          </p>
        </div>

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
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-full"
        >
          <SwiperSlide>
            <DestinationCard
              src={franceImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, Frances"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={franceImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={franceImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={franceImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={franceImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              src={franceImg}
              alt="France image"
              location="France"
              price={100}
              days={2}
              description="Paris, France"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
