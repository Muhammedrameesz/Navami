"use client";

import image1 from "@/images/projects/image1.png";
import image2 from "@/images/projects/image2.png";
import image3 from "@/images/projects/image3.png";
import image4 from "@/images/projects/image4.png";
import image5 from "@/images/projects/image5.png";
import image6 from "@/images/projects/image6.png";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import BackgroundBanner from "@/images/Home/Banner.jpg";

export default function OurProject() {
  const router = useRouter();
  interface projectTypes {
    title: string;
    image: StaticImageData;
  }

  const projectItems: projectTypes[] = [
    {
      title: "Residence for Mr.thomas pattimattom",
      image: image1,
    },
    {
      title: "Residence for Mr.rajesh punnorcode",
      image: image2,
    },
    {
      title: "Residence for Mr.subash punnorcode",
      image: image3,
    },

    {
      title: "Villa project pukkattupady",
      image: image4,
    },
    {
      title: "Residance for kamal",
      image: image5,
    },
    {
      title: "Residence for Mr. Ashok punnorcode ",
      image: image6,
    },
  ];

  return (
    <div className=" text-gray-900 min-h-screen ">
      <p className="relative z-20 text-start text-customYellow max-w-xs ml-auto mr-5 bg-white p-5 -mt-28 md:-mt-5">
        &quot;Good buildings come from good people, and all problems are solved
        by good design.&quot;
      </p>

      <h1 className="px-6 md:px-10 font-3xl md:text-4xl font-semibold mb-10 md:20 lg:mb-40 lg:ml-20">
        <span className="text-customYellow mr-1 ">Our</span> Projects
      </h1>
      <section
        className="grid grid-cols-1 md:grid-cols-3 justify-items-center  gap-10 lg:gap-20 items-center 
                          px-6 md:px-10 mx-auto max-w-7xl min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundBanner.src})` }}
      >
        {projectItems.map((item, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center justify-center border-2 p-5 lg:p-0 border-customYellow rounded-br-2xl 
                rounded-tl-2xl w-full mx-auto min-h-[200px] ${
                  i === 1 ? "bg-customYellow" : "bg-white"
                }`}
          >
            <div className="lg:absolute lg:-right-2 lg:top-0 lg:-translate-y-1/2 ">
              <Image
                alt={item.title}
                src={item.image}
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <h1
              className={`lg:absolute lg:bottom-1/6 lg:left-1/6 ${
                i === 1 ? "text-white" : "text-customYellow"
              } font-medium max-w-xs`}
            >
              {item.title}
            </h1>
          </div>
        ))}
      </section>

      <button
        onClick={() => router.push("/projects")}
        type="button"
        title="button"
        className="bg-customYellow my-5 px-6 py-2 rounded-full text-white  text-lg font-medium mx-auto flex justify-center items-center cursor-pointer hover:bg-customYellow/90 transition-colors duration-300"
      >
        See All Our Projects
      </button>
    </div>
  );
}
