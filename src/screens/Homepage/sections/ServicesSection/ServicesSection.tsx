import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Data for service items
  const serviceItems = [
    { id: 1, text: "Lorem ipsum dolor sit.", highlighted: true },
    { id: 2, text: "Lorem ipsum dolor sit." },
    { id: 3, text: "Lorem ipsum dolor sit." },
    { id: 4, text: "Lorem ipsum dolor sit." },
    { id: 5, text: "Lorem ipsum dolor sit." },
    { id: 6, text: "Lorem ipsum dolor sit." },
    { id: 7, text: "Lorem ipsum dolor sit." },
  ];

  return (
    <section className="w-full py-20 bg-[#5683ad1a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 max-w-[707px] mx-auto mb-16">
          <h2 className="font-semibold text-black text-[32px] text-center tracking-[-1.60px] leading-[35.2px] [font-family:'Inter',Helvetica]">
            Industries we serve
          </h2>
          <p className="opacity-80 font-normal text-black text-lg tracking-[-0.90px] leading-[25.2px] text-center [font-family:'Inter',Helvetica]">
            Lorem ipsum dolor sit amet consectetur. Aenean elit velit sodales
            urna vel laoreet interdum
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          {/* Left Image */}
          <div className="w-full md:w-[472px] h-[568px] rounded-[20px] " />

          {/* Right Service Items Grid */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {serviceItems.map((item) => (
                <Card
                  key={item.id}
                  className={`border-none ${
                    item.highlighted ? "bg-app-primary" : ""
                  }`}
                >
                  <CardContent className="p-5">
                    <div className="flex flex-col gap-3.5">
                      <CheckCircleIcon className="w-6 h-6" />
                      <p
                        className={`opacity-80 font-semibold text-xl tracking-[-1.00px] leading-7 whitespace-nowrap [font-family:'Inter',Helvetica] ${
                          item.highlighted ? "text-white" : "text-black"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border border-[#000000cc] bg-white"
          >
            <span className="font-button font-[number:var(--button-font-weight)] text-black text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)]">
              Explore All Industries
            </span>
            <div className="ml-2 border border-black w-[25px] h-[25px] rounded-full flex items-center justify-center">
              <ArrowRightIcon className="w-[15px] h-4" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
