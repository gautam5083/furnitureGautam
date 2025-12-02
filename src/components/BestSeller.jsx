import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets";

// Data matching the items in your screenshot
const products = [
  {
    id: 1,
    title: "LED Work Lamp",
    img: assets.img6, // Lamp
    price: "$40",
  },
  {
    id: 2,
    title: "FEJKA Potted Plant",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=500", // Plant
    price: "$24",
  },
  {
    id: 3,
    title: "Modern Black Chair", // Corrected the typo in the design (it was labeled 'Potted Plant')
    img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=500", // Chair
    price: "$80",
  },
  {
    id: 4,
    title: "MICKE Desk, Black",
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=500", // Desk
    price: "$120",
  },
];

const BestSeller = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1F1F1F] mb-12 md:mb-20">
          Best Selling Product
        </h2>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              {/* Using aspect-square to keep images uniform */}
              <div className="w-full aspect-square flex items-center justify-center overflow-hidden mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg text-[#1F1F1F] font-medium tracking-wide">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-medium text-[#1F1F1F]">
                    {item.price}
                  </span>
                  
                  {/* Star Ratings */}
                  <div className="flex text-[#F4993F] text-sm gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* --- Footer Link --- */}
        <div className="flex justify-center mt-20">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors font-medium text-sm md:text-base"
          >
            More Product <FaArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default BestSeller;