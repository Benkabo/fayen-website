"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import dubaiNewImg from "@/public/images/dubai-new.jpeg";
import satoguruImg from "@/public/images/sogturu-holiday.jpeg";
import londonImg from "@/public/images/london.jpeg";
import thailandImg from "@/public/images/thailand.png";
import DestinationDetails from "./DestinationDetails";

export default function Destination() {
  const images = [
    {
      src: dubaiNewImg,
      title: "Dubai",
      subtitle: "6 Nights / 7 Days",
      details: [
        "Premium Accommodation in Dubai and Abu Dhabi",
        "Daily Complimentary Breakfast",
        "Half-day Dubai city tour & Dhow cruise with Dinner (SIC basis)",
        "Desert Safari with BBQ dinner & Cultural Entertainment (SIC basis)",
        "Private Transfers to Dubai Frame",
        "Buri Khalifa 124th floor & Dubai Aquarium Tour",
        "Combo Ticket (SIC basis)",
        "Full-day tour of Abu Dhabi city & Yas",
        "Island theme park (SIC basis)",
        "Private Airport Transfers",
      ],
    },
    {
      src: satoguruImg,
      title: "Grand European Tour",
      subtitle: "13 Days / 8 Countries / 4-Stars Hotels",
      details: [
        " Flight, Visa Assistance and Travel Insurance",
        "Explore Paris with a city tour and a relaxing Seine River Cruise",
        "Visit the stunning Versailles Palace and ascend the Eiffel Tower",
        "Discover Mini Europe and enjoy free time at Grand Place, Brussels",
        "Experience the scenic Amsterdam Canal Cruise",
        "Witness the beauty of Rhine Falls and a Cuckoo Clock Demonstration in Titisee",
        "Take in the breathtaking views from Jungfraujoch & Mt. Titlis",
        "Enjoy a Gondola Ride in Venice and a guided tour of Florence",
        "Capture memories at the Leaning Tower of Pisa and Vatican City",
        "Stay in 4-star hotels with daily breakfast and dinners",
        "Guided sightseeing with an expert tour manager",
        "Tips for drivers included for a hassle-free experience",
      ],
    },
    {
      src: londonImg,
      title: "London",
      subtitle: "4 Nights",
      details: [
        "04 Nights in London + Breakfast",
        "Private Vehicle Return Transfer in London (Airport-Hotel-Airport )",
        "24 Hrs. Hop-on Hop-off London Bus Tours with Thames River Cruise 1 Hrs ( Pick up & Drop off from Dept. Point)",
        "London Eye - Tickets Only",
        "Day Trip: Bath & Stonehenge Tour from London including entrance to Roman Baths & Stonehenge Small Group ( Pick up and Drop off from Dept. Point)",
        "Day Trip: Oxford, Stratford-upon-Avon, Cotswolds & Warwick Castle from London including Warwick Castle & Shakespeare's Birthplace Included -Small Group ( Pick up & Drop off from Dept. Point )",
      ],
    },
    {
      src: thailandImg,
      title: "Thailand (2N Phuket & 2N Krabi) - 4N/5D",
      subtitle: "Price Starting at: USD 609 PP (On Double Sharing Basis)",
      details: [
        "Nights Stay in Premium Hotels in Krabi & Phuket",
        "Return Private Pickup & Drop from Phuket Intl. Airport",
        "Daily Buffet Breakfast at the Hotel",
        "Krabi 7 Islands Sunset Tour by Long Tail Boat with Dinner",
        "Return Transfers from Phuket to Krabi on Pvt. Basis",
        "Phuket Fantasea Show with Dinner",
        "Visit James Bond Island by Speedboat with Lunch",
        "All Applicable Taxes",
      ],
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

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          // TODO: Commented autoplay
          // loop={true}
          // autoplay={{
          //   delay: 3000, // 3000ms = 3 seconds
          //   disableOnInteraction: false, // Swiper will not stop autoplay after interactions
          // }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative group transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  sizes="full"
                  src={image.src}
                  alt={`Slide ${index}`}
                  loading="lazy"
                  className="rounded-lg shadow-lg object-contain w-full h-[500px]"
                />
                <DestinationDetails
                  title={image.title}
                  subtitle={image.subtitle}
                  details={image.details}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
