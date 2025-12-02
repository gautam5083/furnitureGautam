import React from 'react';
import { assets } from '../assets/assets';

const reviews = [
  {
    id: 1,
    name: "Andres Iniesta",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", // Living room
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", // Man
    rating: 5,
    text: "Amazing work team! I'm very happy to collab with you guys."
  },
  {
    id: 2,
    name: "Cadrino Maleto",
    image: assets.img8, // Darker room
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", // Man with glasses
    rating: 5,
    text: "Cooll, I hope we can collaboration again to create amazing room."
  },
  {
    id: 3,
    name: "Christina Pora",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800", // Window view
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", // Woman
    rating: 5,
    text: "Cute.. the result is perfect, looks elegant & comfortable nice..."
  }
];

const StarRating = ({ count }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${i < count ? 'text-[#f59e0b]' : 'text-gray-300'}`}
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
};

const OurClient = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          Our Clients Reviews
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* Left Arrow Button */}
        <button className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full border border-gray-300 items-center justify-center hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full border border-gray-300 items-center justify-center hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {reviews.map((review) => (
            <div key={review.id} className="group relative flex flex-col bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden shadow-xl h-[500px]">
              
              {/* Top Image Area */}
              <div className="h-[60%] w-full overflow-hidden">
                <img 
                  src={review.image} 
                  alt="Interior Design" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Bottom White Card (Floating Effect) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[1.5rem] p-6 pt-10 shadow-lg">
                
                {/* Floating Avatar */}
                <div className="absolute -top-8 left-6">
                  <div className="p-1 bg-white rounded-full">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
                    <StarRating count={review.rating} />
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Footer / Show More */}
      <div className="flex justify-center mt-12">
        <a href="#" className="flex items-center gap-2 text-gray-600 font-medium hover:text-black transition-colors">
          Show More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>

    </section>
  )
}

export default OurClient