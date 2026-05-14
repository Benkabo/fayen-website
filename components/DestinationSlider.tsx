"use client";

import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import { useState } from "react";

import { CiMaximize2 } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { urlFor } from "@/app/sanity/image";

export default function DestinationSlider({ destinations }: SanityDocument) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageUrl = destinations[currentSlide].image
    ? urlFor(destinations[currentSlide].image)?.url()
    : null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + destinations.length) % destinations.length,
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="destination" className="min-h-fit py-20">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-5xl font-bold text-[#01306A]">
            Destinations
          </p>
          <p className="mb-5 mt-8 tracking-wide font-extrabold text-[#01306A] text-4xl md:text-6xl">
            Explore Beautiful Places
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-[0_-8px_16px_-4px_rgba(1,48,106,0.8)] overflow-hidden border-[6px] border-[#01306A] p-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section - Left */}

              {imageUrl && (
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                  <Image
                    src={imageUrl}
                    alt={destinations[currentSlide].title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Expand Button */}
                  <button
                    onClick={openModal}
                    className="absolute top-4 right-4 bg-[#01306A] text-white p-2 rounded-full shadow-lg hover:bg-[#024b9c] transition-all duration-300 hover:scale-110 z-10 animate-bounce"
                    aria-label="View full image"
                  >
                    <CiMaximize2 size={20} />
                  </button>
                </div>
              )}

              {/* Details Section - Right */}
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl md:text-5xl font-bold text-[#01306A] mb-2">
                  {destinations[currentSlide].title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 font-medium">
                  {destinations[currentSlide].subtitle}
                </p>

                {/* Scrollable Details */}
                <div className="max-h-[320px] overflow-y-auto pr-4 space-y-3 custom-scrollbar">
                  {destinations[currentSlide].details.map(
                    (detail: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="min-w-[8px] h-[8px] rounded-full bg-[#01306A] mt-2"></div>
                        <p className="text-gray-700 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#01306A] text-white p-3 rounded-full shadow-lg hover:bg-[#024b9c] transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#01306A] text-white p-3 rounded-full shadow-lg hover:bg-[#024b9c] transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <FaChevronRight size={28} />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {destinations.map((_: unknown, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-12 h-3 bg-[#01306A]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-9999 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-[#01306A] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Close modal"
            >
              <IoMdClose size={28} />
            </button>

            {imageUrl && (
              <div
                className="relative w-full h-full max-w-7xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={imageUrl}
                  alt={destinations[currentSlide].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="text-[#01306A] font-bold text-lg">
                {destinations[currentSlide].title}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #01306a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #024b9c;
        }
      `}</style>
    </div>
  );
}
