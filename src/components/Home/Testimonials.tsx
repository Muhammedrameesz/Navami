"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TiMediaPlayReverse, TiMediaPlay } from "react-icons/ti";
import useTestimonials from "@/customHooks/useTestimonial";
import ErrorMessage from "../ui/ErrorMessage";
import Loader from "../ui/Loader";


export default function Testimonials() {
 
const {testimonials,loading,error} = useTestimonials()

  const [current, setCurrent] = useState(0);


  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-white text-gray-900 py-20 min-h-screen">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Clients <span className="text-customYellow">Testimonials</span>
          </h1>
          <p className="text-gray-600 mt-4">Let’s hear what our clients say</p>
        </div>

        {error && (
       <ErrorMessage message={error}/>
      )}

      {loading && (
        <Loader/>
      )}

        <motion.div
          className="relative overflow-hidden h-[360px]"
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
                  }}
                >
                  <div
                    className={`border-2 ${
                      isActive ? "border-customYellow" : "border-gray-200"
                    } rounded-lg p-6 bg-white shadow-lg h-full flex flex-col justify-between`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                    
                      <div>
                        <h2 className="text-lg font-semibold text-customYellow">
                          {testimonial.name}
                        </h2>
                        <p
                          className={`text-sm ${
                            isActive ? "text-customYellow" : "text-gray-500"
                          }`}
                        >
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      <h1 className=" text-lg lg:text-xl font-medium">
                        {testimonial.comment}
                      </h1>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="text-customYellow border border-customYellow p-2 rounded-full hover:bg-customYellow hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <TiMediaPlayReverse size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="text-customYellow border border-customYellow p-2 rounded-full hover:bg-customYellow hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <TiMediaPlay size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
