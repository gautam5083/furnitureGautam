import React from "react";

const categories = [
  {
    title: "Coffee Tables",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
  },
  {
    title: "Chairs",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80",
  },
  {
    title: "Cabinets",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Kitchen Chairs",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    title: "Mirrors",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  },
];

const Category = () => {
  return (
    <section className="w-full py-12 text-center">
      <h1 className="text-3xl font-bold mb-10">Furniture Categories</h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-48 h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-all duration-300"
            />
            <p className="mt-3 font-medium text-lg text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
