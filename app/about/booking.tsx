import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function booking() {
  return (
    <div className="max-w-screen-lg m-auto ">
      <div className="text-center mt-10">
        <p className="text-3xl font-bold text-[#01306A]">
          For bookings and Inquiries
        </p>
        <p className="mb-5 tracking-wide font-extrabold text-[#01306A] text-4xl">
          Contact Us
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-gray-100/50 px-10 py-5 ">
          <p className="text-center text-2xl font-semibold mb-5">
            How can we help you?
          </p>
          <div className="flex gap-2 mb-5">
            <FaPhoneAlt size={20} />
            <Link href="tel:+255655210944">(255) 655 210 944</Link>
          </div>

          <div className="flex gap-2 mb-5">
            <FaLocationDot />
            <p>Location ya fayen group limited</p>
          </div>

          <div>
            <iframe
              title="google map"
              src="https://maps.google.com/maps?q=Oysetrbay&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-2 px-5 py-5 bg-[#f5f5f5]">
          <form>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <div className="flex flex-col">
                <label className="mb-1">FirstName</label>
                <input
                  type="text"
                  className="py-2 px-2 rounded-sm border-[1px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1">FirstName</label>
                <input
                  type="text"
                  className="py-2 px-2 rounded-sm border-[1px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <div className="flex flex-col">
                <label className="mb-1">Email</label>
                <input
                  type="email"
                  className="py-2 px-2 rounded-sm border-[1px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1">Phone Number</label>
                <input className="py-2 px-2 rounded-sm border-[1px]" />
              </div>
            </div>
            <div className="grid mb-10">
              <label className="mb-1">Subject</label>
              <input className="py-2 px-2 rounded-sm border-[1px]" />
            </div>
            <div className="grid mb-10">
              <label className="mb-1">Message</label>
              <textarea
                rows={5}
                className="py-2 px-2 rounded-sm border-[1px]"
              />
            </div>
            <div className="text-white">
              <button className="px-5 py-3 rounded-md bg-[#01306A]">
                Send Inqury
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
