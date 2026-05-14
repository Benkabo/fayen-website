import Image from "next/image";

import treeImage from "@/public/images/simba.jpg";

export default function About() {
  return (
    <div id="about" className="max-w-(--breakpoint-lg) mx-auto">
      <div className="flex items-center justify-center min-h-[600px] gap-4">
        <div className="hidden lg:flex gap-2">
          <Image
            src={treeImage}
            width={500}
            alt="tree images"
            className="rounded-md"
          />
        </div>
        <div className="sm:w-[500px] text-center sm:text-start sm:m-0">
          <div className="text-4xl text-center md:text-left font-bold text-[#01306A] mb-4">
            About us
          </div>
          <div className="leading-7 text-xl text-center md:text-justify">
            Fayen Travel is a Tanzania-based travel agency specializing in
            unforgettable experiences across the country. From the pristine
            beaches of Zanzibar to the breathtaking wildlife in Serengeti and
            Ngorongoro, we offer personalized travel packages that showcase
            Tanzania’s natural beauty and rich culture. Our office is located at
            Oyster Galleria, M Floor, Chole Road, Masaki. Whether you’re seeking
            a beach getaway, safari adventure, or a climb up Mount Kilimanjaro,
            we’re here to make your dream trip a reality. Let us guide you
            through the best of Tanzania
          </div>
        </div>
      </div>
    </div>
  );
}
