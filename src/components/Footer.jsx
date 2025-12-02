import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-100">
      <div className="bg-[#2C332E] rounded-[3rem] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center">
            <span className="text-gray-300 uppercase tracking-wide text-sm font-medium mb-4">
              Contact With US
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Feel free to ask <br />
              Something <br />
              we are here
            </h2>
            
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              We have a passion to deliver furniture for all. Bringing you quality
              furniture at the best value, so you'll always be able to find something
              you adore at the right price.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#404843] text-white placeholder-gray-300 rounded-lg px-6 py-4 outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#404843] text-white placeholder-gray-300 rounded-lg px-6 py-4 outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              />
            </div>
            
            <textarea
              rows="6"
              placeholder="Question"
              className="w-full bg-[#404843] text-white placeholder-gray-300 rounded-lg px-6 py-4 outline-none resize-none focus:ring-2 focus:ring-gray-500 transition-all"
            ></textarea>
            
            {/* Optional Submit Button (Implied but not explicitly visible in crop, added for functionality) */}
            {/* <button className="self-start mt-2 px-8 py-3 bg-white text-[#2C332E] font-bold rounded-full hover:bg-gray-200 transition-colors">
              Send Message
            </button> */}
          </form>
        </div>

        {/* Bottom Section: Links & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-transparent md:border-none">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm md:text-base font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Furniture</a>
            <a href="#" className="hover:text-white transition-colors">Accessories</a>
            <a href="#" className="hover:text-white transition-colors">About us</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-300 text-xl">
            <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-white transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;