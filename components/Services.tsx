import ServiceCard from "@/app/ui/ServiceCard";
import service1 from "@/public/images/service1.png";
import service2 from "@/public/images/service2.jpeg";
import service3 from "@/public/images/service3.png";
import service4 from "@/public/images/service4.jpeg";
import service5 from "@/public/images/service5.png";
import service6 from "@/public/images/service6.jpeg";
import Link from "next/link";

export default function Services() {
  return (
    <div id="service" className="flex bg-center bg-cover service-img">
      <div className="max-w-screen-lg mb-5 mx-auto">
        <p className="text-white text-center text-4xl font-bold mt-28 mb-10">
          Our Services
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-10 lg:gap-x-36 gap-y-10">
          <Link href="/about">
            <ServiceCard
              src={service1}
              alt={"image 1"}
              text={"Flight Booking"}
            />
          </Link>

          <Link href="/about">
            <ServiceCard
              src={service2}
              alt={"image 2"}
              text={"Hotel Reservations"}
            />
          </Link>

          <Link href="/about">
            <ServiceCard
              src={service3}
              alt={"image 3"}
              text={"VISA Assistance"}
            />
          </Link>

          <Link href="/about">
            <ServiceCard src={service4} alt={"image 4"} text={"Car Rental"} />
          </Link>
          <Link href="/about">
            <ServiceCard src={service5} alt={"image 5"} text={"Guided Tour"} />
          </Link>
          <Link href="/about">
            <ServiceCard src={service6} alt={"image 6"} text={"TourPackage"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
