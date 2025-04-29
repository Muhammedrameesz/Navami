"use client";

import Image2 from "@/images/Home/image 2.png";
import Image from "next/image";
import Vector from "@/images/Home/Vector.png";
import Banner from "@/images/Home/Banner.jpg";

export default function ThirdSection() {
  const features: string[] = [
    "Excellence in Every Detail",
    "Trusted Expertise, Proven Results",
    "Innovative Solutions Tailored for You",
    "Your Vision, Our Commitment",
  ];

  return (
    <div className="relative py-14 min-h-screen flex items-center">
      <div
        className="z-[-1] absolute top-0 left-0 bottom-1/2 w-full h-auto "
        style={{ backgroundImage: `url(${Banner.src})` }}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-10 max-w-7xl w-full mx-auto items-center">
        {/* Image Side */}
        <div className="flex justify-center">
          <Image
            alt="Quality Image"
            src={Image2}
            className="w-full max-w-[500px] h-auto object-cover"
            priority
          />
        </div>

        {/* Text Content Side */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight text-center md:text-left">
            <span className="text-customYellow">Quality</span> That Speaks For
            Itself
          </h1>

          <p className="text-base text-gray-500 leading-7 text-center md:text-left">
            Our craftsmanship and attention to detail are evident in every
            project, ensuring long-lasting results that reflect our commitment
            to excellence. We let our work stand as a testament to our
            dedication to quality.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  alt="Feature Icon"
                  src={Vector}
                  height={20}
                  width={20}
                  className="object-contain"
                />
                <p className="text-gray-800 text-base font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
