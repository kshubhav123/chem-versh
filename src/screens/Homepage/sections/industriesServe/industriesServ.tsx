import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import FadeInSection from "../../../../components/FadeInSection";
import industries from "../../../../industries.js";
import { Button } from "../../../../components/ui/button";

const IndustriesSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-[#5683AD1A] mt-12">
      <div className="text-center mb-8 sm:mb-12">
        <FadeInSection>
          <h2 className="text-xl sm:text-2xl md:text-[2rem] font-semibold">
            Delivering Chemical Solutions That Power Core Industries
          </h2>
          <p className="md:mt-2 text-[1.125rem] sm:text-base text-gray-600">
            Understanding the unique needs of each domain and delivering
            chemicals optimized for their processes
          </p>
        </FadeInSection>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:items-start">
        <FadeInSection>
          <img
            src={industries[selectedIndex].industryImage}
            alt={industries[selectedIndex].industryName}
            className="w-full h-auto lg:h-[39.5rem] rounded-xl shadow-md object-cover"
          />
        </FadeInSection>

        <FadeInSection className="grid grid-cols-2 sm:grid-cols-2 gap-[1rem] sm:gap-10">
          {industries.map((text, idx) => (
            <div
              key={idx}
              className={`w-full h-[8rem] items-center p-[1.25rem] cursor-pointer border border-transparent transition rounded-xl md:w-[17rem] ${
                idx === selectedIndex
                  ? "bg-[#5683AD] text-white"
                  : "bg-white text-[#2d3748]"
              }`}
              onMouseEnter={() => setSelectedIndex(idx)}
            >
              <div className="mb-4">{text.icon}</div>
              <p className="text-[12px] sm:text-[1.25rem] font-semibold">
                {text.industryName}
              </p>
            </div>
          ))}
        </FadeInSection>
      </div>

      <FadeInSection>
        <div className="text-center mt-12">
          <a href="/industries">
            <Button className="inline-flex items-center px-6 py-2 bg-white text-gray-800 border border-gray-600 rounded-full hover:bg-gray-100 transition">
              <span className="text-black">Explore Industry Applications</span>
              <span
                className="
                  ml-2
                  w-6 h-6
                  rounded-full
                  border
                  border-[#000000cc]
                  bg-[#ffffff]
                  flex items-center justify-center
                  transition-opacity duration-200
                "
              >
                <ArrowUpRight size={16} color="black" />
              </span>
            </Button>
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default IndustriesSection;
