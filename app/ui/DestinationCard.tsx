import Image, { StaticImageData } from "next/image";

import { FaLocationDot } from "react-icons/fa6";

type DestinationCardProps = {
  src: string | StaticImageData;
  location: string;
  days: number;
  description: string;
  price: number;
  alt: string;
};

export default function DestinationCard({
  src,
  alt,
  description,
  days,
  price,
  location,
}: DestinationCardProps) {
  return (
    <>
      <div className="pb-2 relative">
        <div className="bg-[#F4F4F4] w-fit rounded-xl ">
          <div className="absolute top-5 left-5 text-sm">
            <span className="bg-[#013F86] p-1 rounded-full text-white font-semibold">
              ${price} <span>Per Night</span>
            </span>
          </div>
          <Image
            src={src}
            alt={alt}
            width={300}
            height={584}
            style={{ objectFit: "cover" }}
          />
          <div className="relative">
            <div className="flex text-white text-sm font-semibold absolute left-5 -bottom-3">
              <span className="bg-[#013F86] flex items-center justify-center  px-3 py-1 rounded-full">
                <FaLocationDot size={15} />
                <span>{location}</span>
              </span>
            </div>
          </div>

          <div className="p-7">
            <article className="mb-2">
              <h3 className="font-semibold text-wrap ">{description}</h3>
            </article>
            <hr className="border" />
            <div className="mt-2">
              <p>
                {days} <span>days</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
