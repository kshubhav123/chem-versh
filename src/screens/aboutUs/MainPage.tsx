import React from "react";
import FadeInSection from "../../components/FadeInSection";

const HeroSection = () => {
  return (
    <div className="mb-[1rem] md:mb-[8rem] relative w-full h-screen">
      {/* Background Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200">
        <div
          className="w-full h-full rounded-xl"
          style={{
            backgroundImage: `
              url('/aboutUsBG.png'),
              linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0.1) 75%,
                transparent 75%,
                transparent
              )
            `,
            backgroundSize: "cover, 40px 40px",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "center, 0 0",
          }}
        />
      </div>

      {/* Logo at top-left */}
      <div className="absolute p-10 pt-6 bg-[#ffffff] rounded-br-[90px] flex items-center justify-center custom-about-logo">
        <a href="/" className="cursor-pointer z-[100] relative">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain logo-mobile2 w-[100px] xs:w-[120px] sm:w-[150px] md:w-[175px] h-auto"
          />
        </a>
      </div>

      {/* White Curve Section - now on the bottom right */}
      <div
        className="
          p-8
          absolute bottom-0 right-0 
          w-full md:w-[60%]
          h-[50%]
          bg-[#ffffff] 
          rounded-t-[80px] 
        "
      >
        {/* Content Inside the Curve */}
        <div className="px-10 md:px-20 py-8">
          <FadeInSection>
            <h1 className="text-3xl lg:text-[3.7rem] leading-tight mb-6">
              Over{" "}
              <strong className="text-[#5683AD] font-semibold">30 Years</strong>{" "}
              of Trust in Chemical Sourcing & <br />
              Supply
            </h1>
            <p className="mt-3 text-base lg:text-[1.5rem] text-gray-700 leading-[140%]">
              Supercon Chemicals has been a reliable partner to industries
              across India — delivering globally sourced, quality-assured
              chemicals.
            </p>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
