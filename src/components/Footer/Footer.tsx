"use client";
import { Facebook,InstagramIcon, Twitter } from "lucide-react";
import Logo from "@/images/Logo/NAVAMI 2.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 text-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
                           gap-8 mx-auto justify-center max-w-7xl px-4">
            {/* Grid Item 1 */}
            <div>
              <h3 className="text-xl font-semibold text-customYellow mb-4">
                Projects
              </h3>
              <ul className="space-y-2">
                <li>Residence for Mr. Thomas</li>
                <li>Residence for...</li>
                <li>Residence for Mr. Thomas</li>
                <li>Residence for...</li>
                <li>Residence for Mr. Thomas</li>
                <li>Residence for...</li>
              </ul>
            </div>

            {/* Grid Item 2 */}
            <div>
              <h3 className="text-xl font-semibold text-customYellow mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>Plan</li>
                <li>3D Elevation</li>
                <li>Estimate</li>
                <li>Vaasthu</li>
                <li>Supervision</li>
                <li>Construction</li>
                <li>Project Management Consultancy</li>
              </ul>
            </div>

            {/* Grid Item 3 */}
            <div>
              <h3 className="text-xl font-semibold text-customYellow mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
              </ul>
            </div>

            {/* Grid Item 4 */}
            <div>
              <h3 className="text-xl font-semibold text-customYellow mb-4">
                Policies
              </h3>
              <ul className="space-y-2">
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Grid Item 5 (Logo and Social Media) */}
            <div className="flex flex-col items-start">
              <Image
                src={Logo}
                alt="logo"
                height={150}
                width={150}
                className="object-cover"
              />
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <div className="flex items-center justify-center bg-gray-900 text-white h-10 w-10  rounded-full">
                  <Twitter />
                </div>

                <div className="flex items-center justify-center bg-gray-900 text-white h-10 w-10  rounded-full">
                  <Facebook />
                </div>
                <div className="flex items-center justify-center bg-gray-900 text-white h-10 w-10  rounded-full">
                  <InstagramIcon />
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <p className="text-sm text-gray-600 bg-white text-center py-3">
        www.cozaktechnologies.com
      </p>
    </div>
  );
}
