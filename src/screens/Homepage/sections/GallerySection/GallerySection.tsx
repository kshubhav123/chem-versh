"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import FadeInSection from "../../../../components/FadeInSection";

gsap.registerPlugin(ScrollTrigger);

const GallerySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#e7e7e7]">
      <div className="relative w-full flex flex-col md:flex-row h-auto md:h-[832px] sm:h-[600px] xs:h-auto">
        {/* Left 60% Background */}
        <div className="w-full md:w-[60%] h-[460px] md:h-full bg-[#EEF3F7]"></div>

        {/* Right Graphic Panel */}
        <div
          className="md:block absolute top-0 right-0 h-full w-[50%] bg-cover bg-center rounded-l-[40px] z-10"
          style={{ backgroundImage: "url(/frame-13.png)" }}
        />

        {/* Responsive Logo in Top-Left Corner */}
        <a
          href="/"
          className="cursor-pointer absolute pl-2 xs:pl-3 sm:pl-4 top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 md:top-6 md:left-6 z-[100]"
        >
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain logo-mobile w-[100px] xs:w-[120px] sm:w-[150px] md:w-[175px] h-auto"
          />
        </a>

        <div className="absolute top-[15%] md:top-[20%] left-[5%] md:left-[60px] flex-col gap-8 md:gap-12 w-[90%] md:w-[554px] sm:w-[90%] z-20">
          <div className="flex flex-col gap-4 md:mt-8">
            <FadeInSection className="bg-[#5683ad21] custom-ty border border-solid border-[#b3b3b3cc] rounded-[1111px] p-0 w-max">
              <CardContent className="flex items-center gap-2.5 px-4 py-1.5">
                <div className="w-[7px] h-[7px] bg-black rounded-full" />
                <div className="text-sm font-medium text-black tracking-[-0.35px]">
                  Since 1994
                </div>
              </CardContent>
            </FadeInSection>
            <FadeInSection>
              <h2 className="font-['Inter',Helvetica] font-normal text-4xl md:text-6xl leading-tight md:leading-[66px] tracking-[-1.5px] md:tracking-[-3px] text-black">
                <span className="tracking-[-1.2px]">Delivering</span>
                <br />
                <span className="font-semibold text-[#5682ac] tracking-[-1.2px]">
                  Quality Chemicals
                </span>
                <br />
                <span className="tracking-[-1.2px]">Across Industries</span>
              </h2>
            </FadeInSection>

            <FadeInSection>
              <p className="mt-[1.5rem] text-base md:text-2xl tracking-[-0.5px] md:tracking-[-1.2px] leading-[26px] md:leading-[33.6px] text-black xs:mt-[0.2rem]">
                From specialty to commodity chemicals, Supercon Chemicals
                sources from trusted global suppliers to meet your unique
                industrial needs
              </p>
            </FadeInSection>
          </div>
          <FadeInSection>
            <a href="/products" className="">
              <Button className="bg-[#5683AD] md:mt-[3rem] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3f6d89] flex items-center gap-2 sm:text-sm xs:text-xs mt-[1rem]">
                <span className="xs:hidden">Explore Our Products</span>
                <span
                  className="
                          ml-2
                          w-6 h-6
                          rounded-full
                          bg-[#ffffff]
                          flex items-center justify-center
                          transition-opacity duration-200
                        "
                >
                  <ArrowUpRight size={16} color="black" />
                </span>
              </Button>
            </a>
          </FadeInSection>
        </div>

        {/* Testimonial Card - hidden on small screens */}
        <FadeInSection className="hidden md:block absolute bottom-10 md:bottom-10 right-4 md:right-[5%] z-30 w-[90%] md:w-[480px] bg-primary/50 backdrop-blur-md text-white rounded-xl p-6 shadow-xl border border-white/30">
          <div className="text-xl md:text-2xl font-semibold mb-4">★★★★★</div>
          <p className="text-sm md:text-base mb-4 leading-relaxed">
            "Supercon Chemicals has become a dependable partner for our sourcing
            needs. Their team is prompt, knowledgeable, and ensures timely
            delivery every time.”
          </p>
          <div className="text-[14px] opacity-[80%] font-normal">
            Procurement Head, Berger Paints
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default GallerySection;
