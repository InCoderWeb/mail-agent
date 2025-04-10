'use client';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Contact from "./Contact";


export default function page() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <Features />
      <Contact />
    </>
  );
}
