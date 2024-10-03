import Image from "next/image";
import { CiBookmark } from "react-icons/ci";

import shape from "@/public/images/shape-4 1.svg";
import explore1 from "@/public/images/explore1.png";
import explore2 from "@/public/images/explore2.png";

export default function Explore() {
  return (
    <div className=" max-w-screen-md lg:max-w-screen-2xl min-h-[500px] mx-auto  py-10 ">
      <div className="flex gap-6">
        <div className="hidden lg:flex w-1/2 relative">
          <Image src={shape} alt="shape" />
          <div className="absolute left-0 ">
            <Image
              src={explore2}
              width={300}
              alt="explore-2"
              className="rounded-xl"
            />
          </div>
          <div className="absolute left-1/2 translate-y-2/4 ">
            <Image
              src={explore1}
              width={300}
              alt="explore-1"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className=" w-[1100px]">
          <article>
            <h1 className="text-6xl font-extrabold text-center md:text-left text-[#01306A]">
              Experience the World with our Company
            </h1>
          </article>
          <div className="leading-7 text-xl text-center md:text-left mt-5">
            Nam pretium urna ante, at viverra ipsum efficitur ac. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Pellentesque
            rutrum molestie laoreet. Sed hendrerit malesuada iaculis. Vivamus
            quis dolor pellentesque, pretium nunc et, vulputate nisl. Aenean vel
            augue maximus, dapibus sapien a, dictum dui. Suspendisse ut tempor
            libero. Etiam consequat ipsum vitae ex dignissim, sit amet commodo
            purus congue. Pellentesque lobortis quam vel rutrum viverra. Duis
            volutpat ullamcorper leo, Nam pretium urna ante, at viverra ipsum
            efficitur ac. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Pellentesque rutrum molestie laoreet. Sed hendrerit
            malesuada iaculis. Vivamus quis dolor pellentesque, pretium nunc et,
            vulputate nisl. Aenean vel augue maximus, dapibus sapien a, dictum
            dui. Suspendisse ut tempor libero. Etiam consequat ipsum vitae ex
            dignissim, sit amet commodo purus congue. Pellentesque lobortis quam
            vel rutrum viverra. Duis volutpat ullamcorper leo,
          </div>
          <div className="mt-8 text-white flex items-center justify-center md:justify-start">
            <button className=" bg-[#01306A] flex gap-5 text-4xl font-extrabold py-2 px-5 rounded-md hover:scale-105 transition duration-300 ease-in-out">
              Book Now
              <span>
                <CiBookmark />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
