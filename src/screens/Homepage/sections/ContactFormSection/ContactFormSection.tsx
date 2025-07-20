import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

 const ContactFormSection = (): JSX.Element => {
  // Data for the stats cards
  const statsData = [
    {
      id: 1,
      title: "Stats Title 01",
      description: "Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum.",
      active: false,
    },
    {
      id: 2,
      title: "Stats Title 02",
      description: "Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum.",
      active: false,
    },
    {
      id: 3,
      title: "Stats Title 03",
      description: "Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum.",
      active: true,
    },
    {
      id: 4,
      title: "Stats Title 04",
      description: "Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum.",
      active: false,
    },
  ];

  return (
    <section className="relative w-full py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column with heading and button */}
          <div className="md:w-1/3 flex flex-col gap-8">
            <h2 className="font-semibold text-black text-[32px] tracking-[-1.60px] leading-[35.2px] font-['Inter',Helvetica]">
              Lorem ipsum dolor sit amet consectetur Diam.
            </h2>

            <Button
              variant="outline"
              className="w-fit flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[#000000cc] bg-white"
            >
              <span className="font-button text-black whitespace-nowrap">
                About Us
              </span>
              <div className="relative border-black w-[25px] h-[25px] rounded-full overflow-hidden border border-solid flex items-center justify-center">
                <ArrowRightIcon className="w-[15px] h-4" />
              </div>
            </Button>
          </div>

          {/* Vertical separator */}
          <Separator
            orientation="vertical"
            className="hidden md:block h-auto mx-4"
          />

          {/* Right column with text and stats */}
          <div className="md:w-2/3 flex flex-col gap-8">
            <p className="opacity-80 font-['Inter',Helvetica] font-normal text-black text-lg tracking-[-0.90px] leading-[25.2px]">
              Lorem ipsum dolor sit amet consectetur. Aenean elit velit sodales
              urna vel laoreet interdum sed. Feugiat bibendum tristique ut
              semper. Lorem ipsum dolor sit amet consectetur. Aenean elit velit
              sodales urna vel laoreet interdum sed. Feugiat bibendum tristique
              ut semper.Lorem ipsum dolor sit amet consectetur. Aenean elit
              velit sodales urna vel laoreet interdum sed. Feugiat bibendum
              tristique ut semper.Lorem ipsum dolor sit amet consectetur. Aenean
              elit velit sodales urna vel laoreet interdum sed. Feugiat bibendum
              tristique ut semper.
            </p>

            <div className="text-right">
              <span className="font-semibold text-app-primary text-[190px] tracking-[-9.50px] leading-[190px] font-['Inter',Helvetica] whitespace-nowrap">
                31+
              </span>
            </div>
          </div>
        </div>

        {/* Stats cards row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className={`flex flex-col gap-[25px] ${!stat.active ? "opacity-30" : ""}`}
            >
              <div className="relative w-full h-px bg-black">
                {stat.active && <div className="w-[177px] h-px bg-black" />}
              </div>

              <div className="flex flex-col gap-2">
                <p className="opacity-80 font-['Inter',Helvetica] font-normal text-black text-base tracking-[-0.80px] leading-[22.4px]">
                  {stat.title}
                </p>

                <p
                  className={`font-['Inter',Helvetica] font-semibold text-xl tracking-[-1.00px] leading-7 ${
                    stat.active ? "text-app-primary" : "opacity-80 text-black"
                  }`}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactFormSection;