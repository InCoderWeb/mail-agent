'use client';

import BlurText from "../../components/BlurText/BlurText";
import Particles from "../../components/Particles/Particles";
import StarBorder from "../../components/StarBorder/StarBorder";


const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-[#0D0D0D] text-[#F5F5F5] pt-20">
      {/* 👇 Background Particles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 👇 Foreground Content */}
      <div className="relative z-10">
        <BlurText
          text=" AI-powered Email Automation"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 md:text-7x font-bold text-[#810CAB]"
        />
        <p className="mt-4 text-lg md:text-2xl max-w-2xl text-gray-400">
          Streamline communication, improve efficiency, and save valuable time
          with intelligent email agents.
        </p>

        <StarBorder className="mt-6 bg-[#810CAB] text-white px-6 py-3 rounded-lg text-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg">
          Get Started
        </StarBorder>
      </div>
    </section>
  );
};

export default Hero; 
