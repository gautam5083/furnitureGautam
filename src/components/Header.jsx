import React from "react";
import { Search, ArrowRight, Check } from "lucide-react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans bg-slate-900">
      {/* 1. Background Image */}
      <div className="absolute inset-0">
        <img
          src={assets.bg}
          alt="Modern Room Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* 2. Main Content Overlay */}
      {/* Using min-h-screen ensures it fits content on small screens while filling screen on desktop */}
      <div className="relative z-10 w-full min-h-screen px-6 md:px-12 py-8 flex flex-col md:block justify-center">
        
        {/* --- Top Left Text (Desktop Only) --- */}
        <div className="hidden md:block absolute top-1/4 left-8 md:left-20 max-w-xs text-white/90">
          <p className="text-sm leading-relaxed mb-4">
            Having a home you love means having furnishing that you're proud of.
            We are proud to bring you trendy furniture for every room in the
            house, with the added bonus.
          </p>
          <a
            href="#"
            className="flex items-center text-[#C1DFA8] hover:text-white transition-colors text-sm font-semibold gap-2"
          >
            Read More <ArrowRight size={16} />
          </a>
        </div>

        {/* --- Center: Search & Title --- */}
        {/* Mobile: Flex center. Desktop: Absolute center. */}
        <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full z-20">
          {/* Search Bar */}
          <div className="flex items-center gap-2 border-b border-white/30 pb-2 mb-6 md:mb-8 w-64 text-white/80">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none placeholder-white/70 text-sm w-full"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Make a room <br />
            comfortable & <br />
            elegant
          </h1>
        </div>

        {/* --- Floating Interactive Elements --- */}

        {/* Color Picker */}
        {/* Mobile: Bottom Left. Desktop: Floating Left. */}
        <div className="absolute bottom-24 left-6 md:bottom-1/3 md:left-1/4 md:translate-y-12 z-30">
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full flex items-center gap-3 shadow-xl">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white">
              <Check size={14} />
            </div>
            <div className="w-6 h-6 rounded-full bg-teal-400 cursor-pointer hover:scale-110 transition"></div>
            <div className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer hover:scale-110 transition"></div>
          </div>
        </div>

        {/* --- Right Side: Featured Products --- */}
        {/* Mobile: Bottom Right (Row). Desktop: Top Right (Column). */}
        <div className="absolute bottom-6 right-6 md:top-20 md:right-16 md:bottom-auto w-auto md:w-48 flex flex-row md:flex-col gap-3 items-end md:items-stretch z-30">
          <h3 className="hidden md:block text-white text-xl font-semibold mb-2">Featured</h3>

          {/* Product Card 1 */}
          <div className="bg-white/20 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-2xl flex items-center gap-3 shadow-lg hover:bg-white/30 transition cursor-pointer">
            <div className="w-10 h-8 md:w-12 md:h-10 bg-black/50 rounded-md"></div>
            <div className="hidden sm:block">
              <p className="text-[10px] md:text-xs text-white/90">Black Sofa</p>
              <p className="text-xs md:text-sm font-bold text-white">$250</p>
            </div>
          </div>

          {/* Product Card 2 */}
          {/* Added 'md:ml-4' to keep the staggered look on desktop, removed on mobile for cleaner row */}
          <div className="bg-white/20 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-2xl flex items-center gap-3 shadow-lg hover:bg-white/30 transition cursor-pointer md:ml-4">
            <div className="w-10 h-8 md:w-12 md:h-10 bg-black/50 rounded-md"></div>
            <div className="hidden sm:block">
              <p className="text-[10px] md:text-xs text-white/90">Black Chair</p>
              <p className="text-xs md:text-sm font-bold text-white">$100</p>
            </div>
          </div>

          {/* More Product Button (Desktop Only usually, or simplified icon on mobile) */}
          <button className="hidden md:block bg-black/80 text-white py-3 rounded-xl mt-4 hover:bg-black transition shadow-xl text-sm">
            More Product
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;