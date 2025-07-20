"use client";
import React, { Fragment } from "react";
import ProductButton from "../../components/productButton";
import { ArrowUpRight } from "lucide-react";
import FadeInSection from "../../components/FadeInSection";

function CoaContent({ Details }) {
  return (
    <Fragment>
      <div className="relative mx-4 sm:mx-12 mt-4 h-screen overflow-hidden rounded-3xl">
        {/* 1) Background image */}
        <img
          src="/products/CoaBGproduct.png"
          alt="Main page banner"
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        {/* 2) Card Overlay */}
        <FadeInSection
          className="absolute bg-white rounded-2xl shadow-lg p-4 sm:p-6 space-y-4
            w-11/12 sm:w-80 md:w-96
            left-1/2 sm:left-8 top-1/3 sm:top-1/4
            transform -translate-x-1/2 sm:translate-x-0"
        >
          {/* PDF icon */}
          <span className="inline-block p-2 bg-[#d7ddff] rounded-2xl w-8 h-8">
            <img
              src="/file-pdf-solid.png"
              alt="pdf-download"
              className="w-full h-full"
            />
          </span>

          {/* CoA Image */}
          <div className="w-full">
            <img
              src={`/${
                Details?.productImageSecondaryCoa ||
                Details?.productImagePrimary
              }`}
              alt="Product Powder"
              className="w-full object-cover h-40 sm:h-48 rounded-2xl"
            />
          </div>

          {/* Title */}
          <h2 className="text-gray-900 text-lg sm:text-xl font-semibold">
            {Details?.coaTitle}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
            {Details?.coaDescription}
          </p>

          {/* Download Button */}
          <div>
            <a
              download
              href={`/${Details?.downloadCoaLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2
                bg-black text-white text-sm sm:text-base font-medium
                px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              <span>Download CoA</span>
              <span
                className="
                          ml-2
                          w-6 h-6
                          rounded-full
                          border
                          border-white
                          flex items-center justify-center
                        "
              >
                <ArrowUpRight size={16} color="white" />
              </span>
            </a>
          </div>
        </FadeInSection>
      </div>
    </Fragment>
  );
}

export default CoaContent;
