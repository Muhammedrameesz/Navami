"use client";
import Client1 from "@/images/Home/clients/image.png";
import Client2 from "@/images/Home/clients/image-1.png";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { TiMediaPlayReverse } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";
export default function Testimonials() {
  interface tTypes {
    title: string;
    place: string;
    quoteTitle: string;
    quote: string;
    image: StaticImageData;
  }

  const testimonials: tTypes[] = [
    {
      title: "Priya Sharma",
      place: "Chennai, Tamilnadu",
      quoteTitle: "Turning Dreams into Reality",
      quote:
        "We entrusted Navami with building our dream home, and they exceeded our expectations. Their attention to detail and commitment to quality made the entire process seamless.",
      image: Client1,
    },
    {
      title: "Amit",
      place: "Chennai, Tamilnadu",
      quoteTitle: "Turning Dreams into Reality",
      quote:
        "We entrusted Navami with building our dream home, and they exceeded our expectations. Their attention to detail and commitment to quality made the entire process seamless.",
      image: Client2,
    },
    {
      title: "Priya Sharma",
      place: "Chennai, Tamilnadu",
      quoteTitle: "Turning Dreams into Reality",
      quote:
        "We entrusted Navami with building our dream home, and they exceeded our expectations. Their attention to detail and commitment to quality made the entire process seamless.",
      image: Client1,
    },
    {
      title: "Amit",
      place: "Chennai, Tamilnadu",
      quoteTitle: "Turning Dreams into Reality",
      quote:
        "We entrusted Navami with building our dream home, and they exceeded our expectations. Their attention to detail and commitment to quality made the entire process seamless.",
      image: Client2,
    },
  ];

  const [current, setCurrent] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

  const prevSlide = () => {
    // setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    // setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    // const timer = setTimeout(() => setIsTransitioning(false), 500);
    // return () => clearTimeout(timer);
  }, [current]);

//   const getVisibleCards = () => {
//     const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
//     const nextIndex = (current + 1) % testimonials.length;
//     return [prevIndex, current, nextIndex];
//   };

  return (
    <div className="bg-white text-gray-900 py-20 min-h-screen">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center mb-6 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold">Clients <span className="text-customYellow">Testimonials</span></h1>
            <p className="text-gray-600 mt-4 ">Lets Hear what our clients say’s</p>
        </div>
        <motion.div
          className="relative overflow-hidden h-[360px] "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-full">
            {testimonials.map((testimonial, index) => {
              const position =
                (index - current + testimonials.length) % testimonials.length;
              const isActive = position === 0;
              const isLeft = position === testimonials.length - 1;
            //   const isRight = position === 1;

              if (![0, 1, testimonials.length - 1].includes(position)) return null;

              return (
                <motion.div
                  key={index}
                  className={`absolute top-0 w-full md:w-1/3 px-4 ${
                    isActive
                      ? "left-1/2 -translate-x-1/2 z-10"
                      : isLeft
                      ? "left-0 md:left-[10%] translate-x-[20%] md:translate-x-0"
                      : "right-0 md:right-[10%] -translate-x-[20%] md:translate-x-0"
                  }`}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.6,
                    x: isActive ? 0 : isLeft ? -100 : 100, 
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25, 
                    duration:1,
                    
                  }}
                >
                  <div
                    className={`border-2 ${
                      isActive ? "border-customYellow" : "border-gray-200"
                    } rounded-lg p-6 bg-white shadow-lg h-full flex flex-col justify-between`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      {/* <div className="relative w-16 h-16">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.title}
                          className="rounded-full object-cover"
                          fill
                          sizes="(max-width: 768px) 64px, 64px"
                        />
                      </div> */}
                      <div>
                        <h2 className="text-lg font-semibold text-customYellow">
                          {testimonial.title}
                        </h2>
                        <p className={`text-sm  ${isActive?"text-customYellow":"text-gray-500"}`}>
                          {testimonial.place}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      <h1 className="text-xl font-semibold">
                      &quot;{testimonial.quoteTitle}&quot;
                      </h1>
                      <p className="text-gray-900 text-sm lg:text-base leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex justify-center items-center gap-4 ">
          <button
            onClick={prevSlide}
            className="text-customYellow border border-customYellow  p-2 rounded-full hover:bg-customYellow hover:text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <TiMediaPlayReverse  className="" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="text-customYellow border border-customYellow  p-2 rounded-full hover:bg-customYellow hover:text-white transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <TiMediaPlay className="" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
