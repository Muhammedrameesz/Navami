"use client";
import Image from "next/image";
import useTeam from "@/customHooks/useTeam";
import ErrorMessage from "../ui/ErrorMessage";
import Loader from "../ui/Loader";

export default function OurTeam() {
  const { Team, loading, error } = useTeam();

  return (
    <div className="bg-white text-gray-900 py-14">
      <h1 className="text-center lg:text-left px-4 lg:px-24 max-w-6xl w-full mb-10 text-2xl md:text-3xl lg:text-4xl font-semibold">
        Meet Our <span className="text-customYellow">Team</span>
      </h1>

      {error && <ErrorMessage message={error} />}

      {loading && <Loader />}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 px-6 md:px-10 mx-auto max-w-7xl  justify-items-center">
        {Team.map((item, i) => (
          <div key={i}>
            <div className="rounded-2xl w-full max-w-[300px] min-h-[350px] aspect-square overflow-hidden">
              <Image
                src={item.pic}
                alt={item.name}
                className="object-cover w-full h-full"
                width={300}
                height={300}
              />
            </div>

            <h1 className="text-gray-950 font-medium mt-3 ml-3">{item.name}</h1>
          </div>
        ))}
      </section>
    </div>
  );
}
