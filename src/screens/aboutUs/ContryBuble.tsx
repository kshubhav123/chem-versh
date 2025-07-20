"use client";

import React, { useState, useEffect } from "react";
import FadeInSection from "../../components/FadeInSection";
import BubbleData from "../../bubble.js";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import ProductButton from "../../components/productButton";
import { ArrowUpRight } from "lucide-react";
countries.registerLocale(enLocale);

const circlePositions = [
  { left: "65%", top: "18%" }, // China
  { left: "33%", top: "12%" }, // Indonesia
  { left: "75%", top: "64%" }, // South Korea
  { left: "87%", top: "22%" }, // UAE
  { left: "13%", top: "30%" }, // Germany
  { left: "57%", top: "86%" }, // Turkey
  { left: "31%", top: "84%" }, // more
  { left: "40%", top: "40%" }, // Russia
];

const GlobalSourcing = () => {
  // Initialize currentCountry to "Russia"
  const [currentCountry, setCurrentCountry] = useState("Russia");
  const [nextCountry, setNextCountry] = useState(null);
  const [opacity, setOpacity] = useState(1);

  // Find the data object for the current country
  const current = BubbleData.find((c) => c.name === currentCountry);
  const currentImageUrl = current.image;

  useEffect(() => {
    // Preload all country images for smooth transitions
    BubbleData.forEach((c) => {
      const img = new Image();
      img.src = c.image;
    });
  }, []);

  // Handle country change (used for both click and hover) with fade effect
  const handleCountryChange = (countryName) => {
    if (countryName === currentCountry) return;
    setNextCountry(countryName);
    setOpacity(0);
  };

  // Transition to next country after fade-out
  const onImageTransitionEnd = () => {
    if (opacity === 0 && nextCountry) {
      setCurrentCountry(nextCountry);
      setNextCountry(null);
      setOpacity(1);
    }
  };

  // Flag URL for the current country
  const isoCode = countries.getAlpha2Code(currentCountry, "en");
  const flagUrl = isoCode
    ? `https://flagcdn.com/w40/${isoCode.toLowerCase()}.png`
    : null;

  return (
    <div className="rounded-lg p-4 mt-12 md:p-12 flex flex-col md:flex-row gap-8 md:gap-[15rem]">
      <div className="w-full md:w-[29rem]">
        <div className="relative">
          {/* Country Image with Fade Effect */}
          <FadeInSection>
            <img
              src={currentImageUrl}
              alt={currentCountry}
              className="rounded-2xl w-full h-auto md:h-[30rem] transition-opacity duration-300"
              style={{ opacity }}
              onTransitionEnd={onImageTransitionEnd}
            />

            {flagUrl && (
              <div className="absolute top-4 left-4 flex items-center">
                <img
                  src={flagUrl}
                  alt={`${currentCountry} flag`}
                  className="h-6 rounded object-cover"
                />
                <span className="ml-2 font-bold text-sm md:text-base text-gray-800">
                  {currentCountry}
                </span>
              </div>
            )}

            {/* Product Links and "Explore More" */}
            <div className="absolute top-16 left-4">
              <div className="flex gap-2 mb-2">
                {current.products
                  .slice(0, 2)
                  .map((product) =>
                    product?.name ? (
                      <ProductButton
                        key={product.id}
                        name={product.name}
                        href={`/product/${product.id}`}
                      />
                    ) : null
                  )}
              </div>
              <a
                href={`/products`}
                className="
                  inline-flex items-center
                  bg-[#EEF3F7]
                  border border-gray-300
                  text-gray-800
                  text-sm
                  px-4 py-2
                  rounded-[8px]
                  shadow-sm
                  hover:bg-[#ffffff]
                "
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#5683AD] mr-2"></span>
                Explore More
                <span
                  className="
                    ml-2
                    w-6 h-6
                    rounded-full
                    bg-[#5683AD]
                    flex items-center justify-center
                  "
                >
                  <ArrowUpRight size={16} color="#ffffff" />
                </span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Right Side: Static Content and Country Bubbles */}
      <div className="w-full md:w-1/2 md:pl-4 mt-6 md:mt-0 flex flex-col">
        {/* Country Bubbles */}
        <FadeInSection className="relative h-48 md:h-64 mt-6 order-1 md:order-2">
          {BubbleData.map((country, idx) => {
            const isSelected = currentCountry === country.name;
            const fontSizeClass =
              country.name === "China" || country.name === "Germany"
                ? "text-[1.1rem]"
                : "text-sm";

            return (
              <div
                key={country.name}
                className={`
            absolute rounded-full font-semibold flex items-center justify-center
            shadow-md transition-colors duration-300 border
            ${fontSizeClass} ${country.size}
            ${
              isSelected
                ? "bg-[#5683AD] text-white"
                : "bg-white hover:bg-[#DBEEFF]"
            }
            cursor-pointer
          `}
                style={{
                  left: circlePositions[idx]?.left,
                  top: circlePositions[idx]?.top,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => handleCountryChange(country.name)}
                onClick={() => handleCountryChange(country.name)}
              >
                {country.name}
              </div>
            );
          })}
        </FadeInSection>

        {/* Static Content */}
        <FadeInSection className="rounded-lg p-4 custom-mt order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">
            A Global Sourcing Network That Delivers with Precision
          </h1>
          <p className="text-gray-600 mb-4 md:mb-5 text-sm md:text-base">
            With a robust network of suppliers across major chemical
            manufacturing hubs, Supercon Chemicals imports high-grade raw
            materials from China, Russia, Turkey, South Korea, Indonesia, UAE,
            Germany, and beyond. Every shipment is screened for compliance,
            consistency, and performance.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
};

export default GlobalSourcing;
