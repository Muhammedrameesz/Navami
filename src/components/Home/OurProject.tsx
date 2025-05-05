"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BackgroundBanner from "@/images/Home/Banner.jpg";
import useProjects from "@/customHooks/useProjects";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";

export default function OurProject() {

  const {Projects,loading,error} = useProjects()
  const router = useRouter();
 

  if(loading) return <div><Loader/></div>
  if(error) return <div><ErrorMessage message={error}/></div>

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
        {Projects?.map((item, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center justify-center border-2 p-5 lg:p-0 border-customYellow rounded-br-2xl 
                rounded-tl-2xl w-full mx-auto min-h-[200px] ${
                  i === 1 ? "bg-customYellow" : "bg-white"
                }`}
          >
            <div className="lg:absolute lg:-right-1 lg:top-0 lg:-translate-y-1/2 ">
              <Image
                alt={item.name}
                src={item.pic}
                width={300}
                height={300}
                className="object-cover rounded-2xl"
              />
            </div>
            <h1
              className={`lg:absolute lg:bottom-1/6 lg:left-1/6 ${
                i === 1 ? "text-white" : "text-customYellow"
              } font-medium max-w-xs`}
            >
              {item.name}
            </h1>
          </div>
        ))}
      </section>

      <button
        onClick={() => router.push("/projects")}
        type="button"
        title="See All Our Projects"
        className="bg-customYellow my-5 px-6 py-2 rounded-full text-white  text-lg font-medium mx-auto flex justify-center items-center cursor-pointer hover:bg-customYellow/90 transition-colors duration-300"
      >
        See All Our Projects
      </button>
    </div>
  );
}
