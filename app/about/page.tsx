import Booking from "@/app/about/booking";

export default function AboutPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img-atcl">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]" />
        <div className="text-white">
          <p className="text-4xl md:text-7xl lg:text-9xl font-bold text-center tracking-widest">
            Book Now with Fayen Travel Agency
          </p>
        </div>
      </div>
      <Booking />
    </>
  );
}
