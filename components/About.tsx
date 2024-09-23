import Image from "next/image";

import lionsImage from "@/public/images/lions.jpeg";
import treeImage from "@/public/images/tree.jpeg";

export default function About() {
  return (
    <div className="max-w-[1240px] min-h-[500px] mx-auto ">
      <div className="flex items-center justify-center gap-4">
        <div className="hidden lg:flex gap-2">
          <div className="">
            <Image
              src={lionsImage}
              height={600}
              width={600}
              alt="lions images"
              placeholder="blur"
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="">
            <Image
              src={treeImage}
              alt="lions images"
              placeholder="blur"
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className="sm:w-[560px] text-center sm:text-start m-2 sm:m-0">
          <div className="text-4xl text-center font-bold text-[#01306A] mb-4">
            About us
          </div>
          <div className="leading-7 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et est
            non diam mattis condimentum nec quis enim. Nullam non mollis quam.
            Sed in cursus dui. Cras ultrices, quam at maximus vulputate, nisi
            lorem tempus tellus, vel pellentesque leo tellus a leo. Nunc sed
            metus sapien. Etiam dapibus ligula at pulvinar dapibus. Ut volutpat
            iaculis scelerisque. In lacinia luctus dolor mattis fringilla.
          </div>
        </div>
      </div>
    </div>
  );
}
