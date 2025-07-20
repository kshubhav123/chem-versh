"use client";
import React from "react";
import FadeInSection from "../../components/FadeInSection";

const History: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-[#5683AD1A] mt-12">
      <div className="flex flex-col lg:flex-row gap-[4rem]">
        {/* Text Section */}
        <div className="lg:flex-1 p-2 sm:p-4">
          <FadeInSection>
            <h1 className="font-semibold text-[18px] sm:text-2xl lg:text-[2rem] mb-8 lg:mb-[4.5rem]">
              Driving Industrial Progress Through Consistent Quality & Long-Term
              Partnerships
            </h1>
          </FadeInSection>

          <div className="space-y-4 sm:space-y-[1.2rem]">
            <FadeInSection className="flex flex-col sm:flex-row sm:items-start">
              <strong className="text-base sm:text-[1.12rem] sm:w-32 sm:mr-8 mb-2 sm:mb-0">
                1994 - Present
              </strong>
              <div className="flex-1">
                <p className="font-normal text-base sm:text-[1.12rem]">
                  Established in 1994, Supercon Chemicals has grown into one of
                  India’s trusted chemical sourcing and distribution partners.
                  With a specialized product portfolio catering to key sectors
                  like construction, pharmaceuticals, agrochemicals, and
                  textiles, we combine{" "}
                  <strong className="text-base">global reach</strong> with deep
                  domain understanding to support large- and small-scale
                  manufacturers alike.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <p className="font-normal text-base sm:text-[1.12rem] sm:pl-40">
                Our promise extends beyond product quality — we’re known for
                offering{" "}
                <strong>competitive pricing, timely deliveries,</strong> and the
                <strong>
                  {" "}
                  capability to source a wide range of materials
                </strong>{" "}
                on demand. These strengths, built on decades of operational
                excellence and supplier trust, allow us to consistently deliver
                value — both in terms of cost and reliability.
              </p>
            </FadeInSection>
          </div>
        </div>

        {/* Image Section */}
        <FadeInSection>
          <img
            src="/aboutPIC.png"
            alt="about"
            className="h-[25rem] object-cover rounded-2xl lg:mx-0"
          />
        </FadeInSection>
      </div>
    </section>
  );
};

export default History;
