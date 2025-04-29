import Header from "@/components/Home/Header";
import OurProject from "@/components/Home/OurProject";
import ThirdSection from "@/components/Home/ThirdSection";
import WhyChoose from "@/components/Home/WhyChoose";
import Testimonials from "@/components/Home/Testimonials";
import LastSection from "@/components/Home/LastSection";
import ScrollToTopButton from "./ui/ScrollToTop";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
export default function Home() {
  return (
    <div>
      <Header />
      <OurProject />
      <ThirdSection />
      <WhyChoose />
      <Testimonials />
      <LastSection />

      <section className="z-30 fixed right-5 top-1/4  flex flex-col gap-5">
        <div className="h-10 w-10 rounded-full bg-gray-900 hover:bg-gray-900/80 text-white flex 
                         justify-center items-center cursor-pointer transition-colors duration-300">
          <FaXTwitter />
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-900 hover:bg-gray-900/80 text-white flex 
                         justify-center items-center cursor-pointer transition-colors duration-300">
          <FaFacebookF />
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-900 hover:bg-gray-900/80 text-white flex 
                         justify-center items-center cursor-pointer transition-colors duration-300">
          <FaInstagram />
        </div>
        <div className="h-10 w-10 rounded-full bg-customYellow hover:bg-customYellow/80 text-white flex 
                         justify-center items-center cursor-pointer transition-colors duration-300">
          <HiOutlineMail />
        </div>
      </section>

      <ScrollToTopButton/>
    </div>
  );
}
