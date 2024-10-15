import Booking from "@/app/about/booking";
import { FaArrowDownLong } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img-atcl">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]" />
        <div>
          <div className="text-white">
            <p className="text-4xl md:text-7xl lg:text-9xl font-bold text-center tracking-widest">
              To Continue Booking Fill the details Below
            </p>
          </div>
          <div className="animate-bounce flex justify-center mt-28">
            <FaArrowDownLong size={60} color="#fff" />
          </div>
        </div>
      </div>
      <Booking />
    </>
  );
}
