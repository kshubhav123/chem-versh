// src/pages/ProductsPage.jsx
"use client";
import React, { useState, useMemo } from "react";
import Products from "../../productcopy.js";
import ProductButton from "../../components/productButton";
import FadeInSection from "../../components/FadeInSection";
import { Button } from "../../components/ui/button";
import { ArrowUpRight } from "lucide-react";

function ProductsPage() {
  const filterLabels = [
    "All",
    "Textile",
    "Construction",
    "Dyes & Intermediates",
    "Agro Chemicals",
    "Ceramics",
    "Pharmaceuticals",
    "Paints",
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const normalize = (str) => {
    return str.toString().trim().toLowerCase().replace(/[\s&]/g, "");
  };

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return Products;
    }

    const normFilter = normalize(activeFilter);
    return Products.filter((product) => {
      if (!product.majorIndustries || product.majorIndustries.length === 0) {
        return false;
      }
      // See if any industry string on this product matches/includes the filter
      return product.majorIndustries.some((industry) => {
        return normalize(industry).includes(normFilter);
      });
    });
  }, [activeFilter]);

  return (
    <div className="p-4 sm:p-8 md:p-12 customTransformFilter">
      {/* ======== FILTER BUTTON BAR ======== */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {filterLabels.map((label) => {
          const isActive = label === activeFilter;
          return (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-colors duration-150 border
                ${
                  isActive
                    ? "bg-[#5683AD] text-[#ffffff]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ======== PRODUCTS GRID ======== */}
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-[6rem] custom-gap">
          {filteredProducts.map((product, idx) => (
            <FadeInSection
              key={idx}
              className="flex flex-col m-0 rounded-md p-2"
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
                <img
                  src={`/${product.productImagePrimary}`}
                  alt={product.productShortName}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="flex flex-col flex-grow gap-5 ml-2">
                <h3 className="text-[1.1rem] mt-4 font-semibold text-gray-700">
                  {product.productShortName}
                </h3>
                <div className="text-[1rem] text-gray-600">
                  {product.listingShortDescription}
                </div>

                {/* Spacer to push button to the bottom */}
                <div className="mt-auto">
                  <a
                    href={`/product/${product.id}`}
                    className="order-2 lg:order-3 flex"
                  >
                    <Button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-6 bg-white text-gray-800 border border-gray-600 rounded-full hover:bg-gray-100 transition whitespace-nowrap text-base sm:text-lg">
                      <span className="text-black">Know More</span>
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
              </div>
            </FadeInSection>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No products found in “{activeFilter}.”
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
