"use client";

import Image8 from "@/images/about-us/about-us-3.png";
import Image from "next/image";

export default function LastSection() {
  return (
    <div className="relative bg-white text-gray-900  py-0 md:py-24 mt-0 md:mt-10">

         {/* Absolute lines top and bottom */}
         <div className="hidden md:block absolute right-0 top-8 w-1/2 h-5 bg-[#1E1E1E]"/>
         <div className="hidden md:block absolute left-0 bottom-1/4 w-1/2 h-5 bg-[#1E1E1E]"/>


      <section className="grid grid-cols-1 md:grid-cols-2">

        <div>
          <div className="md:absolute md:w-[60%] md:h-[65%] md:top-0 md:left-0 bg-customBlack flex justify-center items-center py-10 md:py-0">
            <section className="flex flex-col justify-center items-center text-center gap-4">
              <h1 className=" text-xl md:text-3xl lg:text-4xl mb-4 text-white max-w-xs md:max-w-lg  text-center md:text-start">
                Let us show you how we can add value to your project.
              </h1>
              <button className="bg-white cursor-pointer px-6 py-2 text-customYellow rounded text-cubg-customBlack font-semibold hover:bg-gray-100 transition">
                Let&apos;s Build Together
              </button>
            </section>
          </div>
        </div>

        <div>
          <Image src={Image8} alt="Image" />
        </div>
      </section>
    </div>
  );
}
