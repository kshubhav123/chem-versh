"use client";

import React, { useState } from "react";
import AccordionItem from "./AccordianIndust"; // Adjust the path if needed
import industriesData from "../../industries.js";
import FadeInSection from "../../components/FadeInSection";

const Accordion = () => {
  // State to track all open accordion indices
  const [openIndices, setOpenIndices] = useState(new Set());

  // Toggle function to add/remove index from openIndices
  const handleToggle = (idx) => {
    setOpenIndices((prev) => {
      const newOpenIndices = new Set(prev);
      if (newOpenIndices.has(idx)) {
        newOpenIndices.delete(idx); // Close if already open
      } else {
        newOpenIndices.add(idx); // Open if closed
      }
      return newOpenIndices;
    });
  };

  return (
    <div className="p-4 mt-12 md:p-12 bg-[#ffffff]">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg items-start lg:items-center gap-8">
        {/* Left: Number and Headings */}
        <div className="flex items-start gap-[20rem] lg:w-[30%]">
          <FadeInSection>
            <div className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-[#5683AD] leading-none">
              7
            </div>
            <div>
              <h2 className="text-[20px] sm:text-lg md:text-xl font-semibold text-gray-600 mt-1">
                Key Industries
              </h2>
              <h3 className="text-[20px] sm:text-lg md:text-xl font-semibold text-gray-600 mt-1">
                We Cater To:
              </h3>
            </div>
          </FadeInSection>
        </div>

        {/* Right: Description */}
        <FadeInSection className="w-full lg:w-[65%] space-y-4">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Serving the Backbone of Industrial Manufacturing
          </h4>
          <p className="text-[20px] text-gray-700 leading-relaxed">
            From large-scale infrastructure to high-precision pharmaceuticals,
            each industry has its own unique challenges — and chemical
            requirements to match. At Supercon Chemicals, we cater to seven key
            industrial sectors with products that are carefully sourced,
            quality-verified, and application-ready. Our deep understanding of
            sector-specific needs allows us to supply materials that not only
            meet compliance standards but also enhance productivity, improve
            formulation stability, and contribute to long-term operational
            efficiency.
          </p>
        </FadeInSection>
      </div>

      {/* Accordion Items */}
      <div className="mt-8">
        {industriesData.map((item, idx) => (
          <AccordionItem
            key={idx}
            id={item.id}
            title={item.industryName}
            lightText={item.lightText}
            content={item.industryDescription}
            isOpen={openIndices.has(idx)} // Check if this accordion is open
            onClick={() => handleToggle(idx)} // Toggle this accordion
            featuredProducts={item.featuredProducts}
            largeImageSrc={item.industryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
