import About from "@/components/About";
import Destination from "@/components/Destination";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Destination />
      <Explore />
      <Testimonials />
    </>
  );
}
