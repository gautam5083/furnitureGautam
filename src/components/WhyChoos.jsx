import React from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaTools,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

const WhyChoos = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12 w-full font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* --- Left Content: Text --- */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-[1.15]">
            Why <br />
            choosing us
          </h2>
          <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-sm">
            Having a home you love means having furnishing that you’re proud of.
            We are proud to bring you trendy furniture for every room in the
            house, with the added bonus.
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="inline-flex items-center text-gray-600 font-medium hover:text-black transition-colors gap-2 text-sm"
            >
              Read More <FaArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* --- Right Content: Staggered Cards Grid --- */}
        <div className="md:w-1/2 grid grid-cols-2 gap-5 md:gap-6">
          {/* Column 1 (Shifted Down to create staggered look) */}
          <div className="flex flex-col gap-5 md:gap-6 mt-12">
            {/* Card 1: Free Delivery (Green) */}
            <div className="bg-[#547358] text-white p-6 md:p-8 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm h-44 md:h-52 w-full">
              <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-sm border border-white/5">
                <FaTruck size={22} />
              </div>
              <p className="font-medium text-base md:text-lg">FREE Delivery</p>
            </div>

            {/* Card 3: Free Installation (Black) */}
            <div className="bg-[#1F1F1F] text-white p-6 md:p-8 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm h-44 md:h-52 w-full">
              <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-sm border border-white/5">
                <FaTools size={22} />
              </div>
              <p className="font-medium text-base md:text-lg">
                FREE Installation
              </p>
            </div>
          </div>

          {/* Column 2 (Standard/Higher Position) */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Card 2: Safe & Reliable (Black) */}
            <div className="bg-[#1F1F1F] text-white p-6 md:p-8 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm h-44 md:h-52 w-full">
              <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-sm border border-white/5">
                <FaShieldAlt size={22} />
              </div>
              <p className="font-medium text-base md:text-lg">
                Safe & Reliable
              </p>
            </div>

            {/* Card 4: Guaranteed (Green) */}
            <div className="bg-[#547358] text-white p-6 md:p-8 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm h-44 md:h-52 w-full">
              <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-sm border border-white/5">
                <FaCertificate size={22} />
              </div>
              <p className="font-medium text-base md:text-lg">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoos;
