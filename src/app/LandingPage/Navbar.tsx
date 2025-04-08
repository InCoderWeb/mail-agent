// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import StarBorder from "../../components/StarBorder/StarBorder";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setMenuOpen(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 ${isScrolled ? "scale-[0.98]" : ""}`}>
//       <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
//         {/* Left: Logo */}
//         <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[#F5F5F5] hover:text-[#810CAB] transition-all">
//           <img width="36" height="36" src="https://img.icons8.com/lollipop/48/message-bot.png" alt="message-bot" />
//           <span>Email Agent</span>
//         </Link>

//         {/* Center Nav (Desktop) */}
//         <div className="hidden md:flex bg-[#1A1A1A]/80 backdrop-blur-md border mt-2 border-[#333] rounded-full px-10 py-3 shadow-lg">
//           <ul className="flex space-x-8 text-[#F5F5F5]">
//             {["Home", "Features", "Contact"].map((item) => (
//               <li key={item} className="group relative">
//                 <Link
//                   href={`/${item.toLowerCase()}`}
//                   className="text-lg font-medium transition-all duration-300 hover:text-[#810CAB] hover:tracking-wider"
//                 >
//                   {item}
//                   <span className="absolute left-0 -bottom-1 h-0.5 bg-[#810CAB] transition-all duration-300 w-0 group-hover:w-full" />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right: Login + Hamburger */}
//         <div className="flex items-center gap-4">
//           <StarBorder
//             as="button"
//             className="custom-class rounded-full text-sm px-3 py-1 md:px-6 md:py-2 md:text-base"
//             color="white"
//             speed="3s"
//           >
//             Log in
//           </StarBorder>

//           <button
//             className="md:hidden text-white cursor-pointer"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           <div
//             className={`w-[65%] max-w-[260px] bg-[#2A2A2A]/90 backdrop-blur-md p-6 flex flex-col justify-center shadow-lg ${
//               isClosing ? "animate-slide-out" : "animate-slide-in"
//             }`}
//           >
//             <ul className="flex flex-col gap-6 text-white text-lg font-semibold">
//               {["Home", "Features", "About"].map((item) => (
//                 <li key={item} className="group relative">
//                   <Link
//                     href={`#${item.toLowerCase()}`}
//                     className="inline-block transition-all duration-300 hover:text-[#810CAB]"
//                     onClick={handleClose}
//                   >
//                     {item}
//                     <span className="absolute left-0 bottom-0 h-0.5 bg-[#810CAB] transition-all duration-300 w-0 group-hover:w-full" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex-1 bg-black/30 cursor-pointer" onClick={handleClose} />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import StarBorder from "../../components/StarBorder/StarBorder";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 ${
        isScrolled ? "scale-[0.98]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#F5F5F5] hover:text-[#810CAB] transition-all"
        >
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/lollipop/48/message-bot.png"
            alt="message-bot"
          />
          <span>Email Agent</span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex bg-[#1A1A1A]/80 backdrop-blur-md border mt-2 border-[#333] rounded-full px-10 py-3 shadow-lg">
          <ul className="flex space-x-8 text-[#F5F5F5]">
            {["Home", "Features", "Contact"].map((item) => (
              <li key={item} className="group relative">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-medium transition-all duration-300 hover:text-[#810CAB] hover:tracking-wider"
                >
                  <span className="relative inline-block">
                    {item}
                    <span className="absolute left-0 -bottom-1 h-0.5 bg-[#810CAB] transition-all duration-300 w-0 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Log in + Hamburger */}
        <div className="flex items-center gap-4">
          <StarBorder
            as="button"
            className="custom-class rounded-full text-sm px-4 py-1 md:px-6 md:py-2 md:text-base"
            color="white"
            speed="3s"
          >
            Log in
          </StarBorder>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className={`w-[65%] max-w-[260px] bg-[#2A2A2A]/90 backdrop-blur-md p-6 flex flex-col justify-center shadow-lg ${
              isClosing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            <ul className="flex flex-col gap-6 text-white text-lg font-semibold">
              {["Home", "Features", "About"].map((item) => (
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
          </div>

          {/* Overlay */}
          <div className="flex-1 bg-black/30 cursor-pointer" onClick={handleClose} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

