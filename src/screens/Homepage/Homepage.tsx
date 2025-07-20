import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] flex flex-col items-center w-full">
      <div className="bg-[#ffffff] w-full max-w-[1280px] relative">
        {/* Navigation Bar */}
        <div className="w-full flex justify-center mt-11 px-[60px] z-10 relative">
          <div className="flex w-full max-w-[1160px] items-center justify-between px-5 py-3 bg-[#ffffff] rounded-[1111px] border border-solid border-[#989898] shadow-[0px_4px_40px_#0000001a]">
            <div className="relative w-48 h-[26.04px]">
              <div className="absolute top-[3px] left-0 [font-family:'Inter',Helvetica] font-extrabold text-black text-[18.8px] tracking-[-0.94px] leading-[22.6px] whitespace-nowrap">
                Supercon Chemicals
              </div>
              <img
                className="absolute w-[13px] h-[13px] top-0 left-[179px]"
                alt="Registered regular"
                src="/registered-regular-1.svg"
              />
            </div>

            <NavigationMenu>
              <NavigationMenuList className="inline-flex items-center justify-end gap-[60px] relative">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="inline-flex items-center gap-[7px] relative flex-[0_0_auto] bg-transparent">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#4f2b2b] text-sm tracking-[-0.28px] leading-[normal]">
                      About Us
                    </span>
                    <ChevronDownIcon className="relative w-3 h-3" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Dropdown content would go here */}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#4f2b2b] text-sm tracking-[-0.28px] leading-[normal]">
                    Industries We Serve
                  </span>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="inline-flex items-center gap-[7px] relative flex-[0_0_auto] bg-transparent">
                    <span className="w-fit mt-[-1.00px] text-[#4f2b2b] text-sm tracking-[-0.28px] leading-[normal] relative [font-family:'Inter',Helvetica] font-bold">
                      Products
                    </span>
                    <ChevronDownIcon className="relative w-3 h-3" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Dropdown content would go here */}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button className="inline-flex flex-[0_0_auto] bg-app-primary h-[39px] items-center justify-center gap-2.5 px-4 py-2.5 relative rounded-[1111px] border border-solid border-[#ffffffcc]">
                    <span className="relative w-fit mt-[-1.00px] font-button font-[number:var(--button-font-weight)] text-[#ffffff] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)]">
                      Get in Touch
                    </span>
                    <div className="relative w-[25px] h-[25px] mt-[-3.00px] mb-[-3.00px] bg-[#ffffff] rounded-[1111px] overflow-hidden">
                      <img
                        className="absolute w-[15px] h-4 top-[5px] left-[5px]"
                        alt="Arrow right regular"
                        src="/arrow-right-regular--8--1.svg"
                      />
                    </div>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>


        {/* Testimonial Card */}
        <div className="relative w-full flex justify-end px-[60px] mt-[-229px]">
          <div className="w-[492px] h-[190px] bg-[#5683ad] rounded-[10px] border border-solid border-[#ffffff66] shadow-[0px_4px_40px_#00000026,inset_0px_4px_20px_#ffffff26] backdrop-blur-[200px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(200px)_brightness(100%)] opacity-75">
            <div className="flex flex-wrap w-[444px] items-start gap-[19px_3px] p-6">
              <div className="inline-flex items-center gap-[2.06px] relative flex-[0_0_auto]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    className="relative w-[18px] h-[18px] object-cover"
                    alt="Wired flat star"
                    src="/wired-flat-237-star-rating-hover-pinch--1--5-1.png"
                  />
                ))}
              </div>
              <div className="w-[444px] font-normal text-[#ffffff] text-base tracking-[-0.80px] leading-[22.4px] relative [font-family:'Inter',Helvetica]">
                &quot;Lorem ipsum dolor sit amet consectetur. Aenean elit velit
                sodales urna vel laoreet interdum sed. Feugiat bibendum
                tristique ut semper. Lorem ipsum dolor sit amet consectetur.
                &quot;
              </div>
              <div className="relative w-[444px] opacity-80 [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-sm tracking-[-0.70px] leading-[19.6px]">
                Avinash Gupta, VP @Medicos Ltd.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
