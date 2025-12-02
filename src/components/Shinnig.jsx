import React from "react";

const Shinnig = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Images & Shapes composition */}
        <div className="relative flex flex-col items-start">
          
          {/* Decorative Green Shape (Top Left) */}
          <div className="absolute -top-8 -left-8 md:-left-12 w-40 h-40 md:w-56 md:h-56 bg-[#4e5d50] rounded-tr-[3rem] rounded-bl-[2rem] z-0"></div>

          {/* Main Large Image */}
          <div className="relative z-10 w-[85%] h-auto">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
              alt="Modern interior with green wall"
              className="w-full h-[400px] md:h-[550px] object-cover rounded-[3rem] shadow-lg"
            />
          </div>

          {/* Secondary Overlapping Image */}
          <div className="absolute top-[40%] right-0 w-[45%] z-20">
             {/* Image wrapper for border effect */}
            <div className="p-2 bg-white rounded-[2.5rem] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                alt="Modern corporate lobby"
                className="w-full h-[200px] md:h-[280px] object-cover rounded-[2rem]"
              />
            </div>
          </div>

          {/* Decorative Gray Shape (Behind secondary image) */}
          <div className="absolute top-[50%] -right-[10%] w-[50%] h-[50%] bg-gray-100 rounded-[3rem] -z-10"></div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center pl-0 lg:pl-4 z-10">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            About us
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6">
            Shinning a light <br /> on furniture
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
            We have a passion to deliver furniture for all. Bringing you
            quality furniture at the best value, so you'll always be able to
            find something you adore at the right price.
          </p>

          <a
            href="#"
            className="group flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-black transition-colors duration-300"
          >
            Read More
            {/* SVG Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Shinnig;