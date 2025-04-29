"use client";

import project1 from "@/images/projects/image1.png";
import project2 from "@/images/projects/image2.png";
import project3 from "@/images/projects/image3.png";
import project4 from "@/images/projects/image4.png";
import project5 from "@/images/projects/image5.png";
import project6 from "@/images/projects/image6.png";
import Image, { StaticImageData } from "next/image";

export default function Projects() {
  interface projectTypes {
    name: string;
    place: string;
    des?: string;
    sq?: string;
    image: string | StaticImageData;
  }

  const projects: projectTypes[] = [
    {
      name: "Residence for Mr.thomas",
      place: "pattimattom",
      image: project1,
    },
    {
      name: "Residence for Mr.rajesh ",
      place: "punnorcode",
      image: project2,
      des: "This project showcased our capacity for both architectural vision and technical precision, involving the comprehensive demolition and reconstruction of one full floor and a significant segment of an adjoining level. The scope encompassed the development of a sophisticated executive suite, meticulously designed private offices, and advanced IT installations.",
      sq: "Sq. Ft. / 1000",
    },
    {
      name: "Residence for Mr.thomas",
      place: "pattimattom",
      image: project3,
    },
    {
      name: "Residence for Mr.thomas",
      place: "pattimattom",
      image: project4,
    },
    {
      name: "Residence for Mr.rajesh",
      place: "punnorcode",
      image: project5,
    },
    {
      name: "Residence for Mr.thomas",
      place: "pattimattom",
      image: project6,
    },
  ];

  return (
    <div className="bg-white text-gray-900 py-14">

      <h1 className="text-customYellow text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 tracking-wide">
        Delivering Best-In-Class Experiences
      </h1>
      <p className="text-gray-600 mt-2 text-sm text-center max-w-3xl mx-auto px-4 ">
        For nearly four decades, we’ve made some important community
        contributions. As part of our ‘Best in Class’ reputation, we tackle
        projects that make our Region a better place to learn, work, live, play,
        and grow.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 mx-auto max-w-6xl mt-10 md:mt-16">
        {projects?.map((item, i) => (
          <div
            key={i}
            className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-md"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                className={`w-full object-cover transition-all duration-300 ${
                  item.des && item.sq ? "h-48" : "h-64"
                }`}
              />

              {item.des && item.sq && (
                <div className="absolute bottom-0 rounded-b-2xl left-0 w-full bg-white/60 text-gray-950 p-2 px-5 tracking-tight">
                  <h1 className="font-semibold text-lg">{item.name}</h1>
                  <h2 className="text-lg">{item.place}</h2>
                </div>
              )}
            </div>

            {item.des && item.sq ? (
              <div className=" px-4 py-2 space-y-2 tracking-tight">
                <p className="text-gray-800 text-xs">{item.des}</p>
                <p className="text-customYellow text-lg font-medium">
                  {item.sq}
                </p>
              </div>
            ) : (
              <div className="p-4">
                <h1 className="text-customYellow font-semibold text-lg">
                  {item.name}
                </h1>
                <h2 className="text-customYellow text-lg">{item.place}</h2>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
