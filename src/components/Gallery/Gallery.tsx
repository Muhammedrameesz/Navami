"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useGallery from "@/customHooks/useGallery";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
export default function Gallery() {
  const { gallery, error, loading } = useGallery();

  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % gallery.length);
    setDirection("next");
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - itemsPerPage + gallery.length) % gallery.length
    );
    setDirection("prev");
  };

  const currentItems = gallery.slice(startIndex, startIndex + itemsPerPage);

  // Handle wrap-around
  if (currentItems.length < itemsPerPage) {
    currentItems.push(...gallery.slice(0, itemsPerPage - currentItems.length));
  }

  return (
    <div className="bg-white py-10 px-6 max-w-6xl mx-auto text-center">
      <h1 className="pb-10 pt-5 text-center text-customYellow font-semibold text-2xl md:text-3xl lg:text-4xl">
        Gallery
      </h1>

      {error && (
       <ErrorMessage message={error}/>
      )}

      {loading && (
        <Loader/>
      )}

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
           key={i}
           className="rounded-2xl overflow-hidden shadow-lg w-full max-w-sm mx-auto sm:max-w-md md:max-w-full"
         >
           <div className="aspect-[4/3] relative w-full">
             <Image
               src={img.pic}
               alt={`project-${i}`}
               fill
               className="object-cover"
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
             />
           </div>
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
