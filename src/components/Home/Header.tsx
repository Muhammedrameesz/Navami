"use client";
import Banner from "@/images/Home/Banner.jpg";
import Workers from "@/images/Home/workers.png";
import Image, { StaticImageData } from "next/image";
import MainImage from "@/images/Home/MainImage.png";
import image1 from "@/images/Home/whatWeDo/18835.jpg";
import image2 from "@/images/Home/whatWeDo/108577.jpg";
import image3 from "@/images/Home/whatWeDo/30163.jpg";
import image4 from "@/images/Home/whatWeDo/2148829296.jpg";
import image5 from "@/images/Home/whatWeDo/165.jpg";
import image6 from "@/images/Home/whatWeDo/30163.jpg";
import Group5 from "@/images/Home/whatWeDo/Group5.png";
import Group5white from "@/images/Home/whatWeDo/Group5White.png";

export default function Header() {
  interface cardTypes {
    title: string;
    image: StaticImageData;
  }

  const cardData: cardTypes[] = [
    { title: "*PLAN", image: image1 },
    { title: "*3D ELEVATION", image: image2 },
    { title: "*ESTIMATE", image: image3 },
    { title: "*VAASTHU", image: image4 },
    { title: "*CUNSTRUCTION", image: image5 },
    { title: "*PROJECT MANAGEMNET CONSULTANCY", image: image6 },
  ];

  return (
    <div className="relative bg-white text-gray-950 min-h-screen overflow-hidden">
      <div
        className="absolute -top-10 left-0 w-full h-screen  z-0"
        style={{ backgroundImage: `url(${Banner.src})` }}
      />

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-10  py-10 justify-items-center items-center">
        <div className="col-span-1 md:col-span-3 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            We <span className="text-customYellow">Design & Build</span>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 md:ml-36">
            The Way You Wish
          </h1>
        </div>

        <div className="relative lg:absolute lg:right-1/6 lg:top-1/6 lg:translate-x-1/2">
          <Image
            src={Workers}
            height={150}
            width={150}
            alt="workers image"
            className="mb-4"
         
            priority
          />
          <h1 className="text-2xl md:text-3xl text-gray-800 ">Build Your</h1>
          <h1 className="text-2xl md:text-3xl text-gray-800 ">Dream</h1>
          <h1 className="text-3xl md:text-4xl text-customYellow font-semibold ">
            House
          </h1>
        </div>
      </section>

      {/* Image section */}

      <section className="relative z-20 pb-56">
        <div className="flex justify-center items-center">
          <Image
            src={MainImage}
            alt="mainImage"
        
            className="w-full h-auto max-w-full"
            priority
          />
        </div>
        <p className="lg:absolute bg-white px-6  py-2  lg:top-1/7  lg:left-5 relative mb-20 lg:mb-0 z-30 text-lg max-w-xs text-customYellow text-right">
          “Good Architectural and Engineering Design is Based on Deep
          Understanding of the Users’ Needs “
        </p>
        <h1 className="lg:absolute bg-white/80 px-6 lg:px-[10%] py-2  lg:bottom-1/2 -translate-y-1/2 lg:left-0 relative z-30 text-3xl font-semibold">
          What <span className="text-customYellow">we</span> do?
        </h1>

        <section
          className="lg:absolute lg:top-1/2 lg:left-0 relative w-full p-5 grid grid-cols-1 md:grid-cols-2 
                      lg:grid-cols-3 bg-gray-200/70 gap-7 justify-items-center items-center mx-auto"
          style={{ overflowY: "visible" }}
        >
          {cardData.map((item, i) => (
            <div
              key={i}
              className=" relative w-full h-full max-w-[300px] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  i === 1 ? Group5.src : Group5white.src
                })`,
              }}
            >
              <div className="p-10 space-y-5">
                <h1
                  className={`${
                    i === 1 ? "text-white" : "text-gray-900"
                  } font-medium `}
                >
                  {item.title}
                </h1>
                <div className="w-full flex justify-center">
                  <Image
                    src={item.image}
                    alt="card image"
                    className="object-cover w-full h-auto rounded-xl"
                 
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
