"use client";
import React from "react";
import FadeInSection from "../../components/FadeInSection";

// Circle component
const Circle = ({ title, description, hoverDescription, className = "" }) => {
  return (
    <div
      className={`
        relative 
        flex-shrink-0
        flex justify-center items-center 
        rounded-full border-4 border-gray-300 overflow-hidden group
        w-[17rem] h-[17rem]             /* base: 272px */
        sm:w-[21rem] sm:h-[21rem]       /* ≥640px: 336px */
        md:w-[24rem] md:h-[24rem]       /* ≥768px: 384px */
        lg:w-[24rem] lg:h-[24rem]       /* ≥1024px: 448px */
        transition-all
        ${className}
      `}
    >
      {/* Normal state */}
      <div className="z-10 text-center group-hover:opacity-0 transition-opacity duration-500 ease-in-out px-2">
        <p className="text-[1.5rem] text-gray-500 sm:text-[1.8rem] md:text-[2rem]">
          {description}
        </p>
        <h2 className="text-base sm:text-lg md:text-[18px] font-semibold">
          {title}
        </h2>
      </div>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0 
          bg-[#5683AD]/70 
          flex items-center justify-center 
          text-white text-xs sm:text-sm md:text-base 
          opacity-0 translate-y-full 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-in-out
          px-4
        "
      >
        <p className="text-center px-[2rem] sm:px-[3rem]">{hoverDescription}</p>
      </div>
    </div>
  );
};

// Main component
const CirclesComponent = () => {
  const values = [
    {
      title: "Reliability",
      description: "01",
      hoverDescription:
        "We deliver what we promise, when we promise — with unwavering focus on uptime and consistency.",
    },
    {
      title: "Precision",
      description: "02",
      hoverDescription:
        "Every product undergoes technical validation to ensure it performs as required in the intended industrial application.",
    },
    {
      title: "Partnership",
      description: "03",
      hoverDescription:
        "We grow with our clients, offering not just products, but proactive service, consultation, and support.",
    },
    {
      title: "Sustainability",
      description: "04",
      hoverDescription:
        "We’re building a responsible future with thoughtful sourcing, reduced waste, and lasting chemical performance.",
    },
  ];

  return (
    <div className="p-12 mt-12 sm:px-8 md:px-12 max-w-screen-xl mx-auto">
      {/* Heading */}
      <FadeInSection className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Our Values
        </h1>
        <p className="text-base sm:text-lg md:text-[18px]">
          Our core values aren’t just statements — they shape how we think, how
          we trade, and how we support our partners every single day
        </p>
      </FadeInSection>

      {/* Circles */}
      <FadeInSection
        className="
          flex flex-col items-center space-y-8
          md:flex-row md:justify-center md:space-y-0 md:space-x-[-2rem]
          lg:space-x-[-4rem]
        "
      >
        {values.map((val, idx) => (
          <Circle
            key={idx}
            title={val.title}
            description={val.description}
            hoverDescription={val.hoverDescription}
            className={idx > 0 ? "md:-ml-16 lg:-ml-24" : ""}
          />
        ))}
      </FadeInSection>
    </div>
  );
};

export default CirclesComponent;
