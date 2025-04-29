"use client";

import GImage from "@/images/getinTouch/97639 1.png";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className="relative w-full  py-16 min-h-screen">

        <Image
          src={GImage}
          alt="image"
          className="h-full w-full object-cover absolute inset-0 -z-10"
        />


        <div className="max-w-4xl mx-auto flex flex-col justify-center space-y-6 p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-customYellow">
            GET IN TOUCH
          </h1>

          <p className="text-gray-50 text-base md:text-lg leading-relaxed">
            There is no project too big or small. Our team puts 100% into all
            that we do and loves creating custom solutions for our clients.
          </p>

          <p className="text-gray-50 text-base md:text-lg leading-relaxed">
            If you’re looking to create an online presence, need assistance with
            digital marketing, or just want to chat about what we can do for
            your company — please fill out the form or reach out to us and
            someone will get in touch with you.
          </p>
        </div>
     
    </div>
  );
}
