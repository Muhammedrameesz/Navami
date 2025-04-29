"use client";

import { StaticImageData } from "next/image";

export default function OurTeam() {
  interface teamType {
    name: string;
    image: string | StaticImageData;
  }
  const Team: teamType[] = [
    { name: "Rahul chandran", image: "" },
    { name: "Rajin raj k", image: "" },
    { name: "Arun R", image: "" },
    { name: "Nibin T u", image: "" },
  ];
  return (
    <div className="bg-white text-gray-900 py-14">
      <h1 className="text-center lg:text-left px-4 lg:px-24 max-w-6xl w-full mb-10 text-2xl md:text-3xl lg:text-4xl font-semibold">
        Meet Our <span className="text-customYellow">Team</span>
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 px-6 md:px-10 mx-auto max-w-7xl  justify-items-center">
        {Team.map((item, i) => (
          <div key={i}>
            <div className="bg-gray-200 rounded-2xl w-[250px] h-[250px]"></div>
            <h1 className="text-gray-950 font-medium mt-3 ml-3">{item.name}</h1>
          </div>
        ))}
      </section>
    </div>
  );
}
