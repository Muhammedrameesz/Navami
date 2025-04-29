"use client";

import LocationI from "@/images/getinTouch/image 9.png";
import Image from "next/image";

export default function Location() {
  return (
    <div className="bg-white py-10">
      <section className="w-full">
        <Image
          src={LocationI}
          alt="Location image"
          className="w-full h-auto object-cover"
          priority
        />
      </section>
    </div>
  );
}
