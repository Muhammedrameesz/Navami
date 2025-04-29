"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import project1 from "@/images/projects/image1.png";
import project2 from "@/images/projects/image2.png";
import project3 from "@/images/projects/image3.png";
import project4 from "@/images/projects/image4.png";
import project5 from "@/images/projects/image5.png";
import project6 from "@/images/projects/image6.png";

export default function Gallery() {
  const projects: StaticImageData[] = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,

    project6,
    project5,
    project4,
    project3,
    project2,
    project1,
  ];

  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % projects.length);
    setDirection("next");
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - itemsPerPage + projects.length) % projects.length
    );
    setDirection("prev");
  };

  const currentItems = projects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle wrap-around
  if (currentItems.length < itemsPerPage) {
    currentItems.push(
      ...projects.slice(0, itemsPerPage - currentItems.length)
    );
  }

  return (
    <div className="bg-white py-10 px-6 max-w-6xl mx-auto text-center">
         <h1 className="pb-10 pt-5 text-center text-customYellow font-semibold text-2xl md:text-3xl lg:text-4xl">Gallery</h1>
      <AnimatePresence mode="wait">
        <motion.div
          key={startIndex}
          initial={{ opacity: 0, x: direction === "next" ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === "next" ? 100 : -100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentItems.map((img, i) => (
            <div
              key={img.src + i}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={img}
                alt={`project-${i}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-6 mt-6">
        <button
          type="button"
          title="Previous"
          onClick={handlePrev}
          className="p-2 rounded-full bg-white shadow-base hover:shadow-custom transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          title="Next"
          onClick={handleNext}
          className="p-2 rounded-full bg-white shadow-base hover:shadow-custom transition-all duration-200 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
