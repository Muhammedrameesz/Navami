"use client";

import image1 from "@/images/Home/whyChoose/image1.png";
import image2 from "@/images/Home/whyChoose/image2.png";
import image3 from "@/images/Home/whyChoose/image3.png";
import image4 from "@/images/Home/whyChoose/image4.png";
import Image, { StaticImageData } from "next/image";
import WhyChoosebg from "@/images/Home/WhychhoseBg.png";

export default function WhyChoose() {
  interface WhyChooseTypes {
    title: string;
    des: string;
    image: StaticImageData;
  }

  const whyChooseCont: WhyChooseTypes[] = [
    {
      title: "Integrated Design & Construction",
      des: "End-to-end solutions from concept to completion.Seamless coordination between architects, engineers, and builders",
      image: image1,
    },
    {
      title: "Client-Centered Approach",
      des: "We listen, collaborate, and communicate at every stage to ensure your satisfaction.",
      image: image2,
    },
    {
      title: "On-Time, On-Budget Delivery",
      des: "Transparent planning and smart project management help us stay on schedule and within budget.",
      image: image3,
    },
    {
      title: "Sustainable & Future-Ready Design",
      des: "We build with tomorrow in mind — energy-efficient, eco-conscious, and low-maintenance solutions",
      image: image4,
    },
  ];
  return (
    <div className="relative bg-transparent text-gray-900 pb-14">
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10 px-4">
        Why choose{" "}
        <span className="text-customYellow">Navami Designers & Builders</span>?
      </h1>

      <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-6 md:px-10 mx-auto max-w-6xl bg-white rounded-3xl py-10 ">
        {whyChooseCont.map((item, i) => (
          <div
            key={i}
            className="border border-gray-400  rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-auto flex items-center justify-center mb-5">
              <Image
                alt={item.title}
                src={item.image}
                width={200}
                height={200}
                className="object-contain w-full h-auto"
              />
            </div>

            <h2 className="text-lg text-customYellow font-semibold mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm">{item.des}</p>
          </div>
        ))}
      </section>
      <div className="hidden md:block absolute left-0 top-1/2 z-[-1] w-full h-[300px] overflow-hidden">
        <Image
          src={WhyChoosebg}
          alt="Building"
          fill
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="hidden md:block absolute z-[-1] top-1/2 left-0 w-full h-[300px] bg-black/60 overflow-hidden"/>
    </div>
  );
}
