"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import StarBorder from "../../components/StarBorder/StarBorder";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-6 ${
          isScrolled ? "scale-[0.98]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between md:justify-center items-center">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="md:hidden flex items-center gap-2 text-xl font-semibold text-[#F5F5F5] hover:text-[#810CAB] transition-all"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/lollipop/48/message-bot.png"
              alt="message-bot"
            />
            <span>Email Agent</span>
          </Link>

          {/* Center Pill */}
          <div className="hidden md:flex items-center justify-center bg-[#1A1A1A]/80 backdrop-blur-md border-2 mt-2 border-[#444] rounded-full px-8 py-2 shadow-lg space-x-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-[#F5F5F5] hover:text-[#810CAB] transition-all"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/lollipop/48/message-bot.png"
                alt="message-bot"
              />
              <span>Email Agent</span>
            </Link>

            <ul className="flex items-center gap-4 text-[#F5F5F5]">
              {["Home", "Features", "Contact"].map((item) => (
                <li key={item} className="group relative">
                  <Link
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    scroll={true}
                    className="text-base transition-all duration-300 hover:text-[#810CAB] hover:tracking-wide"
                  >
                    <span className="relative inline-block">
                      {item}
                      <span className="absolute left-0 -bottom-1 h-0.5 bg-[#810CAB] transition-all duration-300 w-0 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <StarBorder
              as="button"
              className="custom-class rounded-full text-xs px-3 py-1 md:px-4 md:py-1.5"
              color="white"
              speed="3s"
            >
              Log in
            </StarBorder>
          </div>

          {/* Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <button className="text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - outside nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex overflow-hidden">
          <div
            className={`w-[70%] max-w-[280px] bg-[#2A2A2A]/90 backdrop-blur-md p-6 flex flex-col justify-between shadow-lg ${
              isClosing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            <ul className="flex flex-col gap-6 text-white text-lg font-semibold">
              {["Home", "Features", "Contact"].map((item) => (
                <li key={item} className="group relative">
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="inline-block transition-all duration-300 hover:text-[#810CAB]"
                    onClick={handleClose}
                  >
                    <span className="relative inline-block">
                      {item}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-[#810CAB] transition-all duration-300 w-0 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <StarBorder
                as="button"
                className="w-full text-sm px-4 py-2 rounded-full bg-[#1A1A1A] hover:bg-[#810CAB] text-white transition"
                color="inherit"
              >
                Log in
              </StarBorder>
            </div>
          </div>

          {/* Overlay */}
          <div className="flex-1 bg-black/30 cursor-pointer" onClick={handleClose} />
        </div>
      )}
    </>
  );
}
