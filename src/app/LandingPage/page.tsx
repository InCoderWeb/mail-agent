'use client';
import Navbar from "./Navbar";
import Hero from "./Hero";


import dynamic from "next/dynamic";

// const Hero = dynamic(() => import("./Hero"), {
//   ssr: false,
// });

export default function page() {
  return (
    <>
    <Navbar/>
      <Hero/>
      
    </>
  );
}
