import React from "react";
import { ArrowRight } from "lucide-react"; // Ensure you have lucide-react or use a different icon
import { assets } from "../assets/assets";

// Helper Component for the unique card style
const RoomCard = ({ title, image, color, rotation, translateClass }) => {
  return (
    <div
      className={`relative group cursor-pointer transition-transform hover:scale-105 duration-300 ${translateClass}`}
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* 1. The Pill Background (Text Container) */}
      <div
        className={`${color} text-white w-64 h-24 flex items-center justify-end pr-10 rounded-r-full rounded-l-[50px] ml-10 shadow-lg relative z-0`}
      >
        <span className="text-xl font-medium tracking-wide">{title}</span>
      </div>

      {/* 2. The Image (Overlaid on the left) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-28 h-28 bg-gray-200 rounded-[20px] border-[5px] border-white shadow-md z-10 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const ExploreSection = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-12 w-full overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
        
        {/* --- Left Side: Staggered Cards --- */}
        <div className="md:w-1/2 flex flex-col gap-8 md:pl-8">
          
          {/* Card 1: Living Room */}
          <RoomCard
            title="Living Room"
            image={assets.img3}
            color="bg-[#1F1F1F]"
            rotation="-3deg"
            translateClass=""
          />

          {/* Card 2: Dining Room (Shifted Right) */}
          <RoomCard
            title="Dining Room"
            image="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=200"
            color="bg-[#547358]"
            rotation="2deg"
            translateClass="md:translate-x-20" 
          />

          {/* Card 3: Office Room */}
          <RoomCard
            title="Office Room"
            image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=200"
            color="bg-[#1F1F1F]"
            rotation="-2deg"
            translateClass=""
          />
        </div>

        {/* --- Right Side: Text Content --- */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            Shop by room
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
            Having a home you love means having furnishing that you’re proud of.
            We are proud to bring you trendy furniture for every room in the
            house, with the added bonus.
          </p>
          
          <a
            href="#"
            className="group flex items-center text-gray-600 font-medium hover:text-[#547358] transition-colors gap-2"
          >
            Show all kinds
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ExploreSection;