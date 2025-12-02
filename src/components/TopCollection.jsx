import React from "react";

const images = [
  "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  "https://images.unsplash.com/photo-1600573472591-ee6c8f6c156d?w=800&q=80",
];

const TopCollection = () => {
  return (
    <section className="w-full px-[10%] py-16">
      {/* Heading */}
      <p className="text-sm text-gray-600">Top Furniture Picks</p>
      <h2 className="text-4xl font-extrabold">Top Collections</h2>

      {/* Filter Buttons */}
      <div className="flex gap-4 mt-6 flex-wrap">
        <button className="px-5 py-2 rounded-full bg-[#4C3A16] text-white text-sm">
          Living Room
        </button>
        <button className="px-5 py-2 rounded-full bg-[#F7E7CE] text-sm hover:bg-[#e6d7be]">
          Kitchen
        </button>
        <button className="px-5 py-2 rounded-full bg-[#F7E7CE] text-sm hover:bg-[#e6d7be]">
          Bathroom
        </button>
        <button className="px-5 py-2 rounded-full bg-[#F7E7CE] text-sm hover:bg-[#e6d7be]">
          Bedroom
        </button>
      </div>

      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
        {/* Left Images Group */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="collection"
              className="w-48 h-72 object-cover rounded-3xl shadow-md hover:scale-105 transition-all"
            />
          ))}
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/3 space-y-4 text-left">
          <h3 className="text-2xl font-bold">Vintage Wooden Armchair</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Maecenas libero eu ac dapibus
            vitae diam mauris eu.
          </p>

          <p className="text-xl font-bold">$199.99</p>

          <button className="bg-[#4C3A16] text-white px-6 py-2 rounded-full hover:bg-[#392a0f] transition-all">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCollection;
