"use client";
import React, { Fragment } from "react";
import FadeInSection from "../../components/FadeInSection";

const HeroSection = () => {
  return (
    <Fragment>
      {/* Logo */}
      <div className="cursor-pointer z-[50] absolute pl-2 xs:pl-3 sm:pl-4 top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 md:top-6 md:left-6">
        <a href="/" className="cursor-pointer z-[50] relative">
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
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-[5rem] sm:pt-20 md:pt-[10rem] py-6">
        <div className="relative flex justify-center">
          {/* Background image */}
          <img
            src="/industriesServeBG2.png"
            alt="Main page banner"
            className="w-full h-[83vh] rounded-3xl customObject"
            // sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
            loading="lazy"
          />

          {/* Overlay container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <div className="text-white text-center max-w-3xl z-10">
              <FadeInSection>
                <h1 className="leading-[1.2] text-[36px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-semibold">
                  Empowering Industries with
                  <br />
                  Reliable Chemical Solutions
                </h1>
              </FadeInSection>
              <FadeInSection>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-[80%] mx-auto">
                  At Supercon Chemicals, we don’t just supply chemicals — we
                  fuel manufacturing excellence. With globally sourced,
                  quality-tested raw materials, we help industries run cleaner,
                  stronger, and more efficiently.
                </p>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
