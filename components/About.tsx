import Image from "next/image";

import treeImage from "@/public/images/tree-1.png";

export default function About() {
  return (
    <div className="max-w-screen-lg min-h-[500px] m-auto">
      <div className="flex items-center justify-center gap-4">
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
