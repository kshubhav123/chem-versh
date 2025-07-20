import React from "react";
import FadeInSection from "../../components/FadeInSection";

function UseCases({ Details }) {
  return (
    <div className="p-4 mt-12 sm:px-8 lg:px-12 py-8">
      {/* Title and Subtitle */}
      <FadeInSection className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-[20rem]">
        <h2 className="text-2xl font-semibold mb-4 ml-4 custom-title">
          Key Applications Across Industries
        </h2>
        <p className="text-gray-500 mb-6 text-[18px]">{Details?.useCaseDesc}</p>
      </FadeInSection>

      {/* Use Cases Grid */}
      {Details ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-8">
          {Details.useCases.map((usecase, idx) => (
            <FadeInSection
              key={idx}
              className="flex flex-col m-0 rounded-md p-2 custom-box"
            >
              <div className="w-[70%] overflow-hidden rounded-md relative group">
                <img
                  src={usecase.image}
                  alt={usecase.title}
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute 
                    bottom-0 
                    left-0 
                    right-0 
                    group-hover:h-[50%] 
                    bg-primary/50 
                    text-white 
                    flex 
                    flex-col 
                    p-4 sm:p-8
                    overflow-hidden 
                    transition-[height] 
                    duration-300 
                    rounded-b-3xl
                  "
                >
                  {/* Title - positioned at the top, centered */}
                  {/* <div className="text-base sm:text-lg font-semibold text-center">
                    {usecase.title}
                  </div> */}
                  {/* Description - hidden initially, appears on hover */}
                  <div className="hidden group-hover:block text-sm sm:text-[1rem] leading-snug">
                    {usecase.description}
                  </div>
                  {/* Title Container - Keeps title at the bottom */}
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="text-base sm:text-lg font-semibold">
                      {usecase.title}
                    </div>
                  </div>
                </div>
                {/* Number - outside the overlay, lifts on hover, aligned left */}
                <div
                  className="
                  absolute 
                  bottom-[10%] 
                  group-hover:bottom-[50%] 
                  left-0 
                  pl-4 
                  sm:pl-8 
                  mb-8 
                  lg:mb-8
                  sm:mb-0 
                  text-white 
                  z-10 
                  transition-all 
                  duration-300
                "
                >
                  <span className="font-semibold text-[60px] text-[#ffffffa8]">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No Use Case found</div>
      )}
    </div>
  );
}

export default UseCases;
