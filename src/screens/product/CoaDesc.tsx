"use client";
import React, { useState, useEffect } from "react";
import variantsData from "../../useCases.js";
import FadeInSection from "../../components/FadeInSection";

const ProductDescription = ({ Details }) => {
  const [product, setProduct] = useState(null);
  const [selectedVariantName, setSelectedVariantName] = useState("");
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    if (Details && typeof Details.id !== "undefined") {
      const foundProduct = variantsData.find(
        (p) => Number(p.productid) === Number(Details.id)
      );
      setProduct(foundProduct || null);
      setSelectedVariantName(
        foundProduct && foundProduct.variants?.length > 0
          ? foundProduct.variants[0].variantname
          : ""
      );
    } else {
      setProduct(null);
      setSelectedVariantName("");
    }
  }, [Details]);

  useEffect(() => {
    if (product && selectedVariantName) {
      const currentVariant = product.variants.find(
        (v) => v.variantname === selectedVariantName
      );
      if (currentVariant?.variantTable?.length) {
        setTableHeaders(Object.keys(currentVariant.variantTable[0]));
        setTableRows(currentVariant.variantTable);
      } else {
        setTableHeaders([]);
        setTableRows([]);
      }
    } else {
      setTableHeaders([]);
      setTableRows([]);
    }
  }, [product, selectedVariantName]);

  if (!Details || typeof Details.id === "undefined") {
    return (
      <div className="flex items-center justify-center px-4 sm:px-12 py-8 text-center">
        Please provide a product ID to display details.
      </div>
    );
  }

  if (product === null) {
    return (
      <div className="flex items-center justify-center px-4 sm:px-12 py-8 text-center">
        Product with ID {Details.id} not found.
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center px-4 sm:px-12 py-8 text-center">
        Loading product data...
      </div>
    );
  }

  if (!product.variants?.length) {
    return (
      <div className="px-4 sm:px-12 py-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          {product.productname || `Product ID: ${Details.id}`} - Product
          Description
        </h2>
        <p className="text-gray-500">No variants available for this product.</p>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-12 mt-12 sm:px-12 py-8">
      <FadeInSection>
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
          Product Specifications & Quality Parameters
        </h2>
        <p className="text-center text-[18px] text-gray-500 mb-6 px-4 lg:px-[8rem]">
          {Details?.tableSectionDescription}
        </p>
      </FadeInSection>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {product.variants.map((variant) => (
          <button
            key={variant.variantname}
            onClick={() => setSelectedVariantName(variant.variantname)}
            className={`px-3 sm:px-4 py-2 rounded-full border focus:outline-none transition text-sm sm:text-base
              ${
                selectedVariantName === variant.variantname
                  ? "bg-gray-300 text-gray-900 font-semibold ring-2 ring-gray-400"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
          >
            {variant.variantname}
          </button>
        ))}
      </div>

      {selectedVariantName && tableRows.length > 0 ? (
        <FadeInSection className="overflow-x-auto">
          <h3 className="text-lg sm:text-xl font-medium text-center mb-4 capitalize">
            {/* Specifications for: {selectedVariantName} */}
          </h3>
          {/* <table className="min-w-[600px] w-full table-auto border-separate border-spacing-y-2"> */}
          <table className="min-w-[600px] w-full table-fixed border-separate border-spacing-y-2">
            <thead>
              <tr>
                {tableHeaders.map((heading, index) => (
                  <th
                    key={heading}
                    className={`px-4 py-8 border bg-[#5683AD] text-left font-medium text-white uppercase tracking-wider first:rounded-tl-md last:rounded-tr-md text-xs sm:text-sm ${
                      index === 0
                        ? "max-w-[200px] overflow-hidden text-ellipsis"
                        : ""
                    }`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {tableHeaders.map((key, cellIndex) => (
                    <td
                      key={`${rowIndex}-${key}`}
                      className={`px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 border-b border-gray-200
                        ${cellIndex === 0 ? "font-medium text-gray-900" : ""}
                        ${
                          rowIndex === tableRows.length - 1 && cellIndex === 0
                            ? "rounded-bl-md"
                            : ""
                        }
                        ${
                          rowIndex === tableRows.length - 1 &&
                          cellIndex === tableHeaders.length - 1
                            ? "rounded-br-md"
                            : ""
                        }`}
                    >
                      {row[key] !== undefined &&
                      row[key] !== null &&
                      String(row[key]).trim() !== ""
                        ? String(row[key])
                        : "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </FadeInSection>
      ) : selectedVariantName ? (
        <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
          No specification data available for{" "}
          <span className="font-semibold">{selectedVariantName}</span>.
        </p>
      ) : (
        <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
          Please select a variant to view its details.
        </p>
      )}
    </div>
  );
};

export default ProductDescription;
