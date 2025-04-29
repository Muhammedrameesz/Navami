"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mails, MapPin, Phone } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="bg-white text-gray-900 py-10">
      <section className="px-6 md:px-16 mx-auto max-w-7xl space-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl text-left leading-snug">
          Are you ready to make things happen?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 border-customYellow rounded-lg md:col-span-2 p-6 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName")}
                  className="w-full bg-[#EAEAEA] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-customYellow"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className="w-full bg-[#EAEAEA] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-customYellow"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full bg-[#EAEAEA] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-customYellow"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone")}
                  className="w-full bg-[#EAEAEA] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-customYellow"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                {...register("message")}
                className="w-full bg-[#EAEAEA] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-customYellow"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-customYellow hover:bg-customYellow/90  text-white font-medium py-3  rounded-md w-full transition-colors duration-300 cursor-pointer"
            >
              SUBMIT
            </button>
          </form>

          {/* Right */}

          <section className="bg-white rounded-lg p-6 flex flex-col justify-around gap-10 md:gap-0">
            <div className="flex gap-3">
              <MapPin size={28} className="text-black"/>
              <div className="">
                <h1 className="text-customYellow text-xl font-semibold mb-2">Address</h1>
                <p className="max-w-36 text-gray-800 ">10625 Eagle Crest Rd.Denham Springs, LA 70726</p>
              </div>
            </div>

            {/* contct */}

            <div className="flex gap-3">
              <Phone size={28} className="text-black"/>
              <div>
                <h1 className="text-customYellow text-xl font-semibold mb-2">Call Us</h1>
                <p>123467809</p>
                <p>123467809</p>
              </div>
            </div>

            {/* mail */}

            <div className="flex gap-3">
              <Mails size={28} className="text-black"/>
              <div>
                <h1 className="text-customYellow text-xl font-semibold mb-2">Mail Us</h1>
                <p>company@mail.id</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
