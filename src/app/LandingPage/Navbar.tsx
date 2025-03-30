"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between items-center p-4 md:px-10 backdrop-blur-md transition-all duration-300 z-50 ${
        isScrolled ? "bg-[#1A1A1A]/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold text-[#F5F5F5]">Email Agent</h1>

      <ul className="hidden md:flex space-x-8 text-[#F5F5F5]">
        {["Home", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase()}`}
              className="relative text-lg font-medium transition-all hover:text-[#810CAB]"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#810CAB] transition-all duration-300 hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <button className="bg-[#810CAB] text-white px-5 py-2 rounded-lg text-lg shadow-md transition-all hover:scale-105 hover:shadow-lg">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
