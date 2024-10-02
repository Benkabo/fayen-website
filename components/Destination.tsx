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
    <>
      <div className="max-w-[1240px] mb-5 mx-auto">
        <div className="text-center py-5">
          <p className="mt-5 text-4xl font-bold text-[#01306A]">Destinations</p>

          <p className="mb-5 mt-8 tracking-wide font-extrabold text-[#01306A] text-5xl">
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
    </>
  );
}
