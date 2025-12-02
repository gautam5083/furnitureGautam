import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
       ${
         isScrolled || isMenuOpen
           ? "bg-white shadow-md text-black"
           : "bg-transparent text-white"
       }
      `}
    >
      <div className="px-6 md:px-12 mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <h2 className="text-xl font-semibold font-[Syne] z-50">Furniture</h2>

        {/* Desktop Menu Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          <li className="cursor-pointer hover:text-blue-500 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">Furniture</li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">Accessories</li>
          <li className="cursor-pointer border border-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition-all">
            About us
          </li>
        </ul>

        {/* Mobile Hamburger Button (Hidden on Desktop) */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white text-black shadow-lg flex flex-col items-center gap-6 py-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-y-16 opacity-100" : "-translate-y-[200%] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-sm font-medium w-full">
          <li 
            className="cursor-pointer hover:text-blue-500" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </li>
          <li 
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Furniture
          </li>
          <li 
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Accessories
          </li>
          <li 
            className="cursor-pointer border border-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;