import React from "react";
import FadeInSection from "../../components/FadeInSection";

function content() {
  return (
    <FadeInSection className="px-12 bg-[#ffffff] customTransform">
      <div className="flex justify-center items-center bg-white rounded-lg text-center">
        <div className="max-w-4xl">
          <h4 className="text-[2rem] font-bold mb-4">
            Complete Range of Industrial & Specialty Chemicals
          </h4>
          <p className="text-lg text-gray-700">
            Whether you're sourcing for construction, pharma, or agro solutions,
            our products are engineered to deliver results across every
            formulation.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}

export default content;
