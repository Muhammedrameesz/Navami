"use client"
import Banner from "@/images/about-us/about-us-bnner.png";
import AboutusText from "@/images/about-us/About Us-text.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="pb-10 lg:pb-16 min-h-[60vh]">
      <section
        className="flex justify-center items-center w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner.src})`,
        }}
      >
        <div className="">
          <Image src={AboutusText} alt="About us" height={220} width={220} />
        </div>
      </section>
    </div>
  );
}
