import React from "react";
import { Button } from "../../components/ui/button";
import { ArrowUpRight } from "lucide-react";
import FadeInSection from "../../components/FadeInSection";

const ValuesSection = () => {
  return (
    <div className="bg-white mt-12 rounded-[10px] h-full p-4 sm:p-6 md:p-12">
      <div className="flex flex-col gap-[4rem] md:flex-row">
        {/* Left Column: Image */}
        <div className="md:flex items-stretch">
          <FadeInSection className="bg-gray-200 rounded-[10px] w-full h-full">
            <img
              src="/directors.png"
              alt="Leadership Team"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </FadeInSection>
        </div>

        {/* Right Column: Content */}
        <div className="md:w-3/5 flex flex-col">
          <FadeInSection>
            <h2 className="text-[2rem] font-bold text-gray-800 mb-4">
              Our Leadership
            </h2>
            <p className="text-[1.1rem] mb-[4rem]">
              The success and sustainability of Supercon Chemicals is rooted in
              the vision and operational excellence of its leadership. With a
              balance of legacy and strategy, our directors bring clarity,
              foresight, and deep accountability to every aspect of the
              business.
            </p>
          </FadeInSection>

          <div className="space-y-[4rem]">
            {/* Deepak Kedia Section */}
            <FadeInSection className="flex flex-col md:flex-row gap-[4rem]">
              {/* Wrap image in a relative container */}
              <div className="relative ">
                <img
                  src="/deepak.png"
                  alt="Deepak Kedia"
                  className="w-full md:w-[80rem] h-[25rem] rounded-[10px] customImg"
                />
                {/* Overlay label */}
                <span className="absolute top-2 left-2 bg-white rounded-[8px] text-[1rem] px-2 py-1">
                  Director, Supercon Chemicals
                </span>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[1.2rem] font-semibold">Deepak Kedia</h3>
                  <p className="text-[1.1rem] mt-2">
                    A commerce graduate with over 35 years in the chemical and
                    trading industry, Mr. Deepak Kedia brings unmatched
                    expertise in accounts, EXIM processes, procurement,
                    warehousing, logistics, and operational risk management. His
                    calm execution and process discipline have laid the
                    foundation for Supercon’s structured growth and reliable
                    delivery systems.
                  </p>
                </div>
                <div className="mt-4 self-start">
                  <a href="mailto:sales@superconchem.com" className="">
                    <Button className="bg-[#fffff] text-black border border-[#000000cc] md: px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3f6d89] hover:text-white flex items-center gap-2 sm:text-sm xs:text-xs">
                      Reach Out
                      <span
                        className="
                          ml-2
                          w-6 h-6
                          rounded-full
                          border
                          border-[#000000cc]
                          bg-[#ffffff]
                          flex items-center justify-center
                          transition-opacity duration-200
                        "
                      >
                        <ArrowUpRight size={16} color="black" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </FadeInSection>

            {/* Mohit Kedia Section */}
            <FadeInSection className="flex flex-col md:flex-row gap-[4rem]">
              {/* Wrap image in a relative container */}
              <div className="relative ">
                <img
                  src="/mohit.png"
                  alt="Mohit Kedia"
                  className="w-full md:w-[80rem] h-[25rem] rounded-[10px] customImg"
                />
                {/* Overlay label */}
                <span className="absolute top-2 left-2 bg-white rounded-[8px] text-[1rem] px-2 py-1">
                  Director, Supercon Chemicals
                </span>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[1.2rem] font-semibold">Mohit Kedia</h3>
                  <p className="text-[1.1rem] mt-2">
                    With a background in business administration and over a
                    decade of hands-on leadership, Mr. Mohit Kedia spearheads
                    strategy, financial planning, trade operations, and key
                    account management. His vision for scale, automation, and
                    client-first approach has positioned Supercon as a
                    forward-looking, competitive brand in the B2B chemical
                    space.
                  </p>
                </div>
                <div className="mt-4 self-start">
                  <a href="mailto:sales@superconchem.com" className="">
                    <Button className="bg-[#fffff] text-black border border-[#000000cc] md: px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3f6d89] hover:text-white flex items-center gap-2 sm:text-sm xs:text-xs">
                      Reach Out
                      <span
                        className="
                          ml-2
                          w-6 h-6
                          rounded-full
                          border
                          border-[#000000cc]
                          bg-[#ffffff]
                          flex items-center justify-center
                          transition-opacity duration-200
                        "
                      >
                        <ArrowUpRight size={16} color="black" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
