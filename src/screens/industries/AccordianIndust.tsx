"use client";

import React, { useRef, useEffect, useState } from "react";
import ProductButton from "../../components/productButton";
import FadeInSection from "../../components/FadeInSection";

const AccordionItem = ({
  id,
  title,
  lightText,
  content,
  isOpen,
  onClick,
  featuredProducts,
  largeImageSrc,
}) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="relative items-center w-full py-8 sm:py-[3rem] hover:text-[#00000]"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <FadeInSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 md:px-8">
          {/* ID */}
          <div className="flex text-3xl sm:text-[2rem] font-semibold text-gray-400 w-full sm:w-[21%]">
            0{id}
          </div>

          {/* Light text + Title */}
          <div className="flex flex-col items-start w-full sm:w-1/2">
            <div className="text-sm sm:text-base text-gray-400 uppercase mb-2">
              {lightText}
            </div>
            <div className="text-lg font-semibold sm:text-xl">{title}</div>
          </div>

          {/* Icon */}
          <div className="w-6 h-6 self-start sm:self-center">
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                isOpen ? "rotate-0" : "rotate-180"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </div>
        </FadeInSection>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight }}
      >
        <div className="pb-8 px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Image */}
            <div className="w-full md:w-1/3">
              <img
                src={`/${largeImageSrc}`}
                alt="Large Feature"
                className="rounded-[30px] object-cover w-full h-[100%]"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <p className="text-gray-500">{content}</p>

              {featuredProducts?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4 ml-2">
                    Featured Products:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {featuredProducts.map((product, idx) => (
                      <div key={idx} className="flex flex-col w-full">
                        <img
                          src={`/${product.image}`}
                          alt={product.name}
                          className="rounded-[20px] w-full h-[180px] sm:h-[200px] object-cover"
                        />
                        <div className="mt-4">
                          <ProductButton
                            name={product.name}
                            href={`/product/${product.id}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
