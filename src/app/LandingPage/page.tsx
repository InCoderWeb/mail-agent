'use client';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Contact from "./Contact";
import { useEffect, useState } from "react";


export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add event listener for window resize
    console.log("Window resized:", window.innerWidth); // Log the window width on resize
    console.log("Is mobile:", isMobile); // Log the mobile state

    return () => {

      window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
    };

  }, []);
  return (
    <div className="flex flex-col relative w-screen overflow-x-hidden">
      <Navbar />
      <Hero isMobile={isMobile} />
      <Features isMobile={isMobile} />
      <Contact />
    </div>
  );
}
