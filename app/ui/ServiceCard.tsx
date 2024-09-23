import Image, { StaticImageData } from "next/image";

type CardProps = {
  src: string | StaticImageData;
  alt: string;
  text: string;
};

export default function ServiceCard({ src, alt, text }: CardProps) {
  return (
    <div className="bg-white rounded-3xl p-3 hover:cursor-pointer hover:scale-110 ease-in-out duration-300">
      <Image
        src={src}
        alt={alt}
        width={300}
        style={{ objectFit: "cover" }}
        placeholder="blur"
        className="rounded-3xl"
      />
      <hr className="w-1/2 h-[5px] my-5 bg-[#01306A]" />
      <div className="mb-10">
        <p className="text-[#01306A] font-bold text-2xl capitalize">{text}</p>
      </div>
    </div>
  );
}
