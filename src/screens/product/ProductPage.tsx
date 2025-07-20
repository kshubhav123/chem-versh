"use client";
import React, { Fragment, useRef, useEffect } from "react";
import { Download, Crown, Star, BadgeCheck } from "lucide-react";
import gsap from "gsap";
import ContentProduct from "./ContentProduct";
import CoaContent from "./CoaContent";
import CoaDesc from "./CoaDesc";
import UseCases from "./UseCases";
import FadeInSection from "../../components/FadeInSection";

function ProductPage({ productDetail }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationCtx = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate the badges content inside the track for seamless looping
    const badges = Array.from(track.children);
    badges.forEach((badge) => {
      const clone = badge?.cloneNode(true);
      track.appendChild(clone);
    });

    // Calculate width of one set of badges (before duplication)
    const singleSetWidth = badges.reduce((total, badge) => {
      return (
        total +
        badge.getBoundingClientRect().width +
        parseFloat(getComputedStyle(badge).marginRight)
      );
    }, 0);

    // Create GSAP timeline to animate the track from x: 0 to x: -singleSetWidth
    animationCtx.current = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });
    animationCtx.current.to(track, {
      x: -singleSetWidth,
      duration: 20, // adjust duration for speed
    });

    return () => {
      // Clean up GSAP context on unmount
      if (animationCtx.current) {
        animationCtx.current.kill();
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="cursor-pointer z-[50] absolute pl-2 xs:pl-3 sm:pl-4 top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 md:top-6 md:left-6">
        <a href="/" className="cursor-pointer z-[100] relative">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain logo-mobile w-[100px] xs:w-[120px] sm:w-[150px] md:w-[175px] h-auto"
          />
        </a>
      </div>

      <div className="relative mx-4 md:mx-12 mt-[5rem] md:mt-[10rem] h-screen overflow-hidden rounded-3xl">
        {/* Main background image - hidden on mobile */}
        <img
          src="/productPageBG.png"
          alt="Main page banner"
          className="w-full h-full object-cover absolute top-0 left-0 z-20 hidden md:block"
        />

        {/* Right 50% background image */}
        <img
          src={`/${productDetail?.productImagePrimary}`}
          alt="Sodium Banner"
          className="absolute top-0 right-0 w-full md:w-1/2 h-full object-cover z-10"
        />

        {/* Card - adjusted for mobile */}
        <div className="absolute w-[8rem] md:w-[11rem] h-[7rem] md:h-[10rem] bottom-5 md:bottom-10 right-3 md:right-5 z-30 bg-[#ffffff75] rounded-2xl shadow-md p-2 md:p-4 items-center">
          <div className="text-blue-500 mr-1 md:mr-2 mb-1 md:mb-2 text-sm md:text-base custom-hide">
            <img src="/scientificIcon.png" alt="iconscientific" />
          </div>
          <div className="text-gray-800 text-xs md:text-sm tracking-wider custom-marg">{`// ${productDetail?.scientificName}`}</div>
        </div>

        {/* Overlay container */}
        <div className="cusproductcont absolute z-20 inset-0 flex flex-col justify-center px-2 md:px-4 py-8 md:py-12 lg:py-20 mt-[20rem] md:mt-0">
          {/* Wrapper for heading, description, and slider */}
          <div className="w-full md:w-1/2 custom-mobile-card">
            <FadeInSection className="w-full max-w-[58rem]">
              <h1 className="text-black text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl ml-2 md:ml-4">
                <span>{productDetail?.productFullName}</span>
              </h1>
              <p className="text-black text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg mt-2 md:mt-4 max-w-xl md:max-w-2xl ml-2 md:ml-4">
                {productDetail?.listingShortDescription}
              </p>
            </FadeInSection>

            {/* Badge Slider */}
            <div className="mt-12 md:mt-24 overflow-hidden mobCust">
              <div
                ref={trackRef}
                className="flex flex-nowrap items-center space-x-2 sm:space-x-4"
                style={{ whiteSpace: "nowrap" }}
              >
                <span className="inline-flex items-center bg-opacity-20 text-black text-[10px] xs:text-xs sm:text-sm py-0.5 xs:py-1 px-1 xs:px-2 sm:px-3 rounded-full flex-shrink-0">
                  Multi-Industry Application
                </span>
                <span className="inline-flex items-center bg-[#5683AD] bg-opacity-20 text-black text-[10px] xs:text-xs sm:text-sm py-0.5 xs:py-1 px-1 xs:px-2 sm:px-3 rounded-full flex-shrink-0">
                  <Star className="w-3 xs:w-4 h-3 xs:h-4 mr-0.5 xs:mr-1" />
                  100% Purity
                </span>
                <span className="inline-flex items-center bg-opacity-20 text-black text-[10px] xs:text-xs sm:text-sm py-0.5 xs:py-1 px-1 xs:px-2 sm:px-3 rounded-full flex-shrink-0">
                  Multi-Industry Application
                </span>
                <span className="inline-flex items-center bg-[#5683AD] bg-opacity-20 text-black text-[10px] xs:text-xs sm:text-sm py-0.5 xs:py-1 px-1 xs:px-2 sm:px-3 rounded-full flex-shrink-0">
                  <BadgeCheck className="w-3 xs:w-4 h-3 xs:h-4 mr-0.5 xs:mr-1" />
                  Verified Global Sourcing
                </span>
                <span className="inline-flex items-center bg-opacity-20 text-black text-[10px] xs:text-xs sm:text-sm py-0.5 xs:py-1 px-1 xs:px-2 sm:px-3 rounded-full flex-shrink-0">
                  Compliant Quality Standards
                </span>
                <span className="inline-flex items-center bg-[#5683AD] bg-opacity-20 text-black text-[10px] xs:text-xs sm:text-sm py-0.5 xs:py-1 px-1 xs:px-2 sm:px-3 rounded-full flex-shrink-0">
                  <Star className="w-3 xs:w-4 h-3 xs:h-4 mr-0.5 xs:mr-1" />
                  Add Best Price Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentProduct Details={productDetail} />
      <CoaContent Details={productDetail} />
      <CoaDesc Details={productDetail} />
      <UseCases Details={productDetail} />
    </Fragment>
  );
}

export default ProductPage;
