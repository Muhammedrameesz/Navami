"use client";

import Image from "next/image";
import useProjects from "@/customHooks/useProjects";
import DOMPurify from "isomorphic-dompurify";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import { CheckCircle, Clock, RefreshCw } from "lucide-react";

export default function Projects() {
  const { Projects, loading, error } = useProjects();

  return (
    <div className="bg-white text-gray-900 py-14">
      <h1 className="text-customYellow text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 tracking-wide">
        Delivering Best-In-Class Experiences
      </h1>
      <p className="text-gray-600 mt-2 text-center max-w-4xl mx-auto px-4">
        For nearly four decades, we’ve made some important community
        contributions. As part of our ‘Best in Class’ reputation, we tackle
        projects that make our Region a better place to learn, work, live, play,
        and grow.
      </p>

      {loading && (
        <div>
          <Loader />
        </div>
      )}

      {error && (
        <div>
          <ErrorMessage message={error} />
        </div>
      )}

      <section className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 mx-auto max-w-6xl mt-10 md:mt-16">
        {Projects?.map((item, i) => (
          <div
            key={i}
            className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.pic}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/90 to-transparent p-4">
                <h1 className="text-gray-900 font-semibold text-lg">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-700">{item.location}</p>
              </div>
            </div>

            <div  className=" hidden px-4 py-3">
              <div
                className="text-gray-800 text-sm space-y-1"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.description),
                }}
              />
              <p className="mt-3">
                {item.project_status === "Completed" && (
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </span>
                )}

                {item.project_status === "Ongoing" && (
                  <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    <RefreshCw className="w-4 h-4 text-yellow-600 animate-spin-slow" />
                    {/* Ongoing */}
                  </span>
                )}

                {item.project_status === "Upcoming" && (
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    {/* Upcoming */}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
