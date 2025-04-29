"use client";
import image from "@/images/about-us/about-us-1.png";

export default function OurVision() {
  interface contentTpe {
    title: string;
    des: string;
  }
  const contents: contentTpe[] = [
    {
      title: "*Design Excellence",
      des: "We are committed to creativity, innovation, and timeless design that reflects the unique vision of every client.",
    },
    {
      title: "*Quality & Craftsmanship",
      des: "We take pride in meticulous attention to detail, superior materials, and expert construction.",
    },
    {
      title: "*Sustainability",
      des: "We design and build with a deep respect for the environment, embracing eco-conscious solutions for a better future.",
    },
    {
      title: "*Innovation & Growth",
      des: "We constantly evolve, embracing new technologies and methodologies to stay ahead and deliver smarter solutions",
    },
    {
      title: "*Integrity & Transparency",
      des: "We believe in honest communication, ethical practices, and building trust through every phase of our work.",
    },
    {
      title: "*Client-Centered Approach",
      des: "Our clients are at the heart of everything we do — we listen, collaborate, and deliver beyond expectations.",
    },
  ];
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      {/* Absolute content */}
      <div className="lg:absolute z-10 lg:-top-5 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-5xl bg-white  p-6 sm:p-10  mx-auto">
        <h1 className=" ml-5 relative text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
          <div className=" absolute -left-4 top-1/2 h-[70%] w-1 bg-customYellow transform -translate-y-1/2  hidden md:block" />
          Who <span className="text-customYellow">We</span> Are
        </h1>
        <p>
          We’re the kind of construction company that hires people based on who
          they are, not what they’ve done. Training someone in our unique
          processes is easier than training someone to embody our core
          values—integrity, performance and relationships. Our team is friendly,
          hardworking and trustworthy.Our goal for each project is to deliver
          the best building experience and enhance the journey for our
          associates, clients, partners and community. zTo see more of who we
          are, learn about
        </p>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-0" />

      {/* Main Content Section */}
      <section className="relative mt-10 md:mt-20 lg:mt-36 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full max-w-6xl items-center justify-items-center py-12">
        {/* Mission */}
        <div className="flex flex-col gap-6 md:gap-10 text-center md:text-left px-4">
          <h1 className=" ml-4 relative text-3xl md:text-4xl font-bold text-white">
            <div className="absolute -left-4 top-1/2 h-[70%] w-1 bg-white -translate-y-1/2 hidden md:block rounded-4xl" />
            Our <span className="text-customYellow">Mission</span>
          </h1>
          <p className="text-white max-w-md mx-auto md:mx-0 text-base md:text-lg ">
            To design and build inspiring spaces that enrich lives, reflect
            individuality, and stand the test of time — combining creativity,
            craftsmanship, and client collaboration every step of the way.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col gap-6 md:gap-10 text-center md:text-left px-4">
          <h1 className="ml-4 relative text-3xl md:text-4xl font-bold text-white">
            <div className="absolute -left-4 top-1/2 h-[70%] w-1 bg-white -translate-y-1/2 hidden md:block rounded-4xl" />
            Our <span className="text-customYellow">Vision</span>
          </h1>
          <p className="text-white max-w-md mx-auto md:mx-0 text-base md:text-lg l">
            To be a leading force in architectural innovation and construction
            excellence, redefining modern living and working environments
            through sustainable, thoughtful design and reliable delivery.
          </p>
        </div>
      </section>

      <section className="relative z-10 w-full max-w-6xl bg-white  p-6 sm:p-10 md:p-16 mt-10">
        <h1 className=" md:ml-10 lg:ml-20 relative text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
          <div className=" absolute -left-4 top-1/2 h-[70%] w-1 bg-customYellow transform -translate-y-1/2  hidden md:block" />
          Our <span className="text-customYellow">Vision</span>
        </h1>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto justify-center">
          {contents.map((item, i) => (
            <div key={i} className="">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 ">
                {item.title}
              </h2>
              <p className="text-gray-600 text-base ">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
