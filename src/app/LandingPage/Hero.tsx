"use client";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-[#0D0D0D] text-[#F5F5F5] pt-20">
      <h1 className="text-5xl md:text-7xl font-bold">
        AI-powered <span className="text-[#810CAB]">Email Automation</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl max-w-2xl text-gray-400">
        Streamline communication, improve efficiency, and save valuable time with intelligent email agents.
      </p>

      <button className="mt-6 bg-[#810CAB] text-white px-6 py-3 rounded-lg text-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
