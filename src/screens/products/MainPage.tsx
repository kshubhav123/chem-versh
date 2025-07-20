"use client";

import React, { Fragment } from "react";
import { Download, Crown } from "lucide-react";
import ProductButton from "../../components/productButton";
import ProductData from "../../productcopy.js";
import FadeInSection from "../../components/FadeInSection";

function MainPage() {
  return (
    <Fragment>
      <div className="cursor-pointer z-[50] absolute pl-2 xs:pl-3 sm:pl-4 top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 md:top-6 md:left-6">
        <a href="/" className="cursor-pointer relative z-[100]">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain logo-mobile w-[100px] xs:w-[120px] sm:w-[150px] md:w-[175px] h-auto"
          />
        </a>
      </div>

      {/* Page content wrapper */}
      <div className="px-4 pb-12 pt-[10rem] sm:px-8 lg:px-12 py-6 custom-pt">
        <div className="relative h-[100vh]">
          {/* Background image */}
          <img
            src="/productsBGimage.png"
            alt="Main page banner"
            className="w-full h-full rounded-3xl"
          />

          {/* Overlay container */}
          <div className="absolute inset-0 flex flex-col items-center py-8 sm:py-10 lg:py-10 md:mt-0">
            {/* Heading & description */}
            <FadeInSection className="w-full max-w-3xl text-center">
              <h1 className="text-black mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <div className="leading-[70px] customLeading">
                  Unlock the{" "}
                  <strong className="text-[#5683AD] font-semibold">
                    Chemistry
                  </strong>{" "}
                  Behind
                </div>
                <div className="leading-[70px] customLeading">
                  Manufacturing Excellence
                </div>
              </h1>

              <p className="text-black text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto">
                From construction to cosmetics, discover industrial-grade
                chemicals trusted by manufacturers across the globe. Our curated
                range is backed by global sourcing, strict checks, and
                industry-ready performance.
              </p>
              {/* <a
                href="/catalogue/ilovepdf_merged.pdf" // Replace with the actual path to your PDF
                download="catalogue.pdf" // Optional: specify the downloaded file name
                className="mt-12 inline-flex text-white hover:text-black items-center bg-primary border border-gray-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm hover:bg-white transition-all duration-200"
              >
                <span className="mr-2">Download Catalogue</span>
                <span className="w-6 h-6 rounded-full bg-white flex items-center text-black border justify-center">
                  <Download size={16} />
                </span>
              </a> */}
            </FadeInSection>

            {/* Featured Products Card */}
            <FadeInSection className="custom-center mt-10 w-full max-w-7xl bg-[#EEF3F7] rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-start">
              {/* Left section */}
              <div className="w-full lg:w-1/4 lg:pr-6 mb-6 lg:mb-0">
                <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-black mb-4" />
                <h2 className="flex items-center text-xl sm:text-2xl font-bold text-black">
                  Featured Products
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  Handpicked from our best-performing SKUs across industries,
                  these products reflect our commitment to quality, versatility,
                  and industrial reliability.
                </p>
              </div>

              {/* Products grid */}
              <div className="custom-card w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ProductData.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex flex-col items-center">
                    <div className="w-full relative pb-[75%]">
                      <img
                        src={`/${product.productImagePrimary}`}
                        alt={product.productShortName}
                        className="absolute inset-0 w-[85%] h-full rounded-2xl object-cover"
                      />
                    </div>
                    <div className="mt-4 w-full flex">
                      <ProductButton
                        name={product.productShortName}
                        href={`/product/${product.id}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;
