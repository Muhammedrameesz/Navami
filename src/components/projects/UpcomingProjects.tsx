"use client";
import project1 from "@/images/projects/image1.png";
import project2 from "@/images/projects/image2.png";
import project3 from "@/images/projects/image3.png";
import Image, { StaticImageData } from "next/image";
export default function UpcomingProjects() {
  interface projectTypes {
    name: string;
    place: string;
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
    },
    {
      name: "Residence for Mr.thomas",
      place: "pattimattom",
      image: project3,
    },
  ];
  return (
    <div className="bg-white text-gray-900 pb-16">
      <section className="p-5 md:p-10">
        <h1 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4">
          Upcomig <span className="text-customYellow">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 mx-auto max-w-6xl mt-10 md:mt-16 ">
          {projects?.map((item, i) => (
            <div
              key={i}
              className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-md opacity-50"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/90 to-transparent p-4">
                <h1 className="text-gray-900 font-semibold text-lg">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-700">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
