import React from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Creation = () => {
  return (
    <section className="relative w-full bg-white py-20 md:py-24 px-4 md:px-12 font-sans overflow-hidden">

      {/* Decorative Shape */}
      <div className="absolute top-[45%] right-[10%] w-32 md:w-40 h-40 md:h-56 bg-[#4B5D51] rounded-[40px] -z-10 hidden md:block"></div>

      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row justify-between gap-10 md:gap-14 items-start md:items-center">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10 w-full md:w-[38%]">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] mb-4 md:mb-6">
              Our Creations
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              This is an example of our creations, we are very happy to be able
              to make something like this for you too
            </p>

            <button className="flex items-center text-gray-600 font-medium hover:text-black transition gap-2">
              Read More <ArrowRight size={18} />
            </button>
          </div>

          {/* Small Card */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-[25px] shadow-md w-[230px] md:w-[252px] h-40 md:h-48 mx-auto md:ml-0">
              <img
                src={assets.img9}
                alt="Exploration Concept"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#1F1F1F]">Exploration Concept</h3>
              <p className="text-sm text-gray-500 max-w-xs">
                exploration concept is just looking for a new layout to arrange furniture
              </p>
            </div>
          </div>
        </div>

        {/* CENTER OVERLAP IMAGE */}
        <img
          src={assets.img7}
          alt="Blue Room Interior"
          className="absolute md:left-1/2 md:top-[50%] md:-translate-x-1/2 md:-translate-y-1/2 
                     w-64 h-72 md:w-[350px] md:h-[430px] object-cover rounded-[30px] shadow-xl 
                     hover:scale-105 transition duration-500 z-20
                     static md:absolute mx-auto md:mx-0"
        />

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 md:gap-8 w-full md:w-[50%] pt-10 md:pt-0">
          <div className="overflow-hidden rounded-[30px] shadow-xl w-full h-72 md:h-[500px]">
            <img
              src={assets.img8}
              alt="Dark Room Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text with arrow */}
          <div className="flex gap-4 items-start justify-center md:justify-start">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
              <path d="M10 10 C 10 30, 10 40, 35 40 L 40 40" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
              <path d="M35 35 L 40 40 L 35 45" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-[#1F1F1F] mb-2">
                Interior exhibition <br /> in Italy
              </h3>
              <p className="text-sm text-gray-500 max-w-xs">
                We take part in several exhibitions around the world one of which is in Italy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creation;
