import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const StatisticsSection = (): JSX.Element => {
  // Product data for mapping
  const productColumns = [
    [
      "Product Name 01",
      "Product Name 02",
      "Product Name 03",
      "Product Name 04",
      "Product Name 05",
    ],
    [
      "Product Name 06",
      "Product Name 07",
      "Product Name 08",
      "Product Name 09",
      "Product Name 10",
    ],
    [
      "Product Name 11",
      "Product Name 12",
      "Product Name 13",
      "Product Name 14",
    ],
  ];

  // Navigation links
  const exploreLinks = [
    "Home",
    "About Us",
    "Industries We Serve",
    "Contact Us",
  ];

  // Contact information
  const contactInfo = [
    "vuhaithuongnute@gmail.com",
    "(702) 555-0122",
    "(480) 555-0103",
    "(629) 555-0129",
  ];

  // Address information
  const addresses = [
    {
      type: "Office",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      phone: "(406) 555-0120",
    },
    {
      type: "Warehouse",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      phone: "(603) 555-0123",
    },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/x-twitter-brands-1.svg", alt: "X twitter brands" },
    { src: "/instagram-brands-1.svg", alt: "Instagram brands" },
    { src: "/square-youtube-brands-1.svg", alt: "Square youtube" },
    { src: "/linkedin-in-brands-1.svg", alt: "Linkedin in brands" },
    { src: "/meta-brands-1.svg", alt: "Meta brands" },
  ];

  return (
    <footer className="w-full bg-dark-text overflow-hidden">
      <div className="relative w-full rounded-t-[10px] overflow-hidden shadow-[0px_-7px_40px_#ffffff40] p-[60px] pb-0">
        {/* Top Section */}
        <div className="flex flex-wrap gap-20">
          {/* Get in touch section */}
          <div className="flex flex-col items-start gap-6">
            <div className="relative">
              <h2 className="font-heading-01 font-[number:var(--heading-01-font-weight)] text-white text-[length:var(--heading-01-font-size)] tracking-[var(--heading-01-letter-spacing)] leading-[var(--heading-01-line-height)] whitespace-nowrap [font-style:var(--heading-01-font-style)]">
                Get in touch.
              </h2>
              <div className="relative mt-8">
                <img
                  className="w-[338px] h-1"
                  alt="Group"
                  src="/group-1000006746.png"
                />
                <div className="absolute w-[17px] h-[17px] -top-[7px] right-[5px] bg-white rounded-[8.44px]" />
              </div>
            </div>

            <div className="flex flex-col w-[387px] items-start gap-10">
              <p className="w-[376px] font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                Feel free to reach out to us through the contact form, and
                we&apos;ll get back to you promptly
              </p>
            </div>

            <Button className="w-[337px] bg-white h-[39px] text-black rounded-full border border-solid border-[#ffffffcc]">
              <span className="font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)]">
                Get in Touch
              </span>
            </Button>
          </div>

          {/* Products section */}
          <div className="flex gap-20">
            <div className="flex flex-col items-start gap-[27px]">
              <h3 className="w-[147px] text-white text-base tracking-[-0.40px] leading-6 [font-family:'Inter',Helvetica] font-bold">
                Products
              </h3>

              <div className="flex gap-[27px]">
                {productColumns.map((column, columnIndex) => (
                  <div
                    key={`column-${columnIndex}`}
                    className="flex flex-col w-[136px] items-start gap-6"
                  >
                    {column.map((product, productIndex) => (
                      <div
                        key={`product-${columnIndex}-${productIndex}`}
                        className="w-[193px] font-XS-text font-[number:var(--XS-text-font-weight)] text-white text-[length:var(--XS-text-font-size)] tracking-[var(--XS-text-letter-spacing)] leading-[var(--XS-text-line-height)] [font-style:var(--XS-text-font-style)]"
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Explore section */}
            <div className="flex flex-col w-[136px] items-start gap-[27px]">
              <h3 className="w-[147px] [font-family:'Inter',Helvetica] font-normal text-white text-base leading-4">
                <span className="font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] font-body [font-style:var(--body-font-style)] text-[length:var(--body-font-size)]">
                  Explore
                </span>
              </h3>

              <div className="flex flex-col items-start gap-6 w-full">
                {exploreLinks.map((link, index) => (
                  <a
                    key={`explore-${index}`}
                    href="#"
                    className="w-full font-XS-text font-[number:var(--XS-text-font-weight)] text-white text-[length:var(--XS-text-font-size)] tracking-[var(--XS-text-letter-spacing)] leading-[var(--XS-text-line-height)] [font-style:var(--XS-text-font-style)]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/30" />

        {/* Middle Section */}
        <div className="flex flex-wrap gap-20 mb-12">
          {/* Contact Us section */}
          <div className="flex flex-col items-start gap-[27px]">
            <h3 className="w-[147px] [font-family:'Inter',Helvetica] font-normal text-white text-base leading-4">
              <span className="font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] font-body [font-style:var(--body-font-style)] text-[length:var(--body-font-size)]">
                Contact Us
              </span>
            </h3>

            <div className="flex flex-col items-start gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={`contact-${index}`}
                  className="w-[193px] font-XS-text font-[number:var(--XS-text-font-weight)] text-white text-[length:var(--XS-text-font-size)] tracking-[var(--XS-text-letter-spacing)] leading-[var(--XS-text-line-height)] [font-style:var(--XS-text-font-style)]"
                >
                  {info}
                </div>
              ))}
            </div>
          </div>

          {/* Address section */}
          <div className="flex flex-col w-[579px] items-start gap-[27px]">
            <h3 className="w-[147px] [font-family:'Inter',Helvetica] font-normal text-white text-base leading-4">
              <span className="font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] font-body [font-style:var(--body-font-style)] text-[length:var(--body-font-size)]">
                Address
              </span>
            </h3>

            <div className="flex items-start gap-4 w-full">
              {addresses.map((address, index) => (
                <div
                  key={`address-${index}`}
                  className="flex flex-col items-start gap-1.5 flex-1"
                >
                  <h4 className="w-full [font-family:'Inter',Helvetica] font-normal text-white text-sm leading-[14px]">
                    <span className="font-[number:var(--XS-text-font-weight)] tracking-[var(--XS-text-letter-spacing)] leading-[var(--XS-text-line-height)] font-XS-text [font-style:var(--XS-text-font-style)] text-[length:var(--XS-text-font-size)]">
                      {address.type}
                    </span>
                  </h4>
                  <p className="w-full font-XS-text font-[number:var(--XS-text-font-weight)] text-white text-[length:var(--XS-text-font-size)] tracking-[var(--XS-text-letter-spacing)] leading-[var(--XS-text-line-height)] [font-style:var(--XS-text-font-style)]">
                    {address.address}
                  </p>
                  <p className="w-full font-XS-text font-[number:var(--XS-text-font-weight)] text-white text-[length:var(--XS-text-font-size)] tracking-[var(--XS-text-letter-spacing)] leading-[var(--XS-text-line-height)] [font-style:var(--XS-text-font-style)]">
                    {address.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Handles section */}
          <div className="flex flex-col items-start justify-center gap-[60px]">
            <div className="flex flex-col h-[95px] items-start gap-[22px]">
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-base leading-4">
                <span className="font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] font-body [font-style:var(--body-font-style)] text-[length:var(--body-font-size)]">
                  Social Handles
                </span>
              </h3>

              <div className="w-[193px] h-[49px]">
                <div className="flex items-center gap-[19px] mt-[13px]">
                  {socialIcons.map((icon, index) => (
                    <a key={`social-${index}`} href="#" aria-label={icon.alt}>
                      <img
                        className={`w-${
                          icon.alt.includes("Meta")
                            ? "[30px]"
                            : icon.alt.includes("X twitter")
                            ? "6"
                            : "[21px]"
                        } h-6`}
                        alt={icon.alt}
                        src={icon.src}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-4">
                <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base leading-4">
                  <span className="font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] font-body [font-style:var(--body-font-style)] text-[length:var(--body-font-size)]">
                    Employee Login
                  </span>
                </span>
                <img
                  className="w-4 h-4"
                  alt="Arrow up right from"
                  src="/arrow-up-right-from-square-regular-1.svg"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex items-center justify-between pt-[22.5px] pb-5 border-t-[1.13px] border-t-white">
          <div className="relative w-48 h-[26.04px]">
            <div className="absolute top-[3px] left-0 [font-family:'Inter',Helvetica] font-extrabold text-white text-[18.8px] tracking-[-0.94px] leading-[22.6px] whitespace-nowrap">
              Supercon Chemicals
            </div>
            <img
              className="absolute w-[13px] h-[13px] top-0 left-[179px]"
              alt="Registered regular"
              src="/registered-regular-1.svg"
            />
          </div>

          <div className="flex w-[258.75px] items-center justify-between">
            <a
              href="#"
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] whitespace-nowrap"
            >
              T&amp;C
            </a>
            <a
              href="#"
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <div className="flex items-center gap-[3.38px]">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
                Copyright
              </div>
              <div className="flex items-center gap-[2.25px]">
                <div className="relative w-[12.9px] h-[11.25px]">
                  <div className="relative w-[11px] h-[11px] rounded-[5.45px]">
                    <div className="absolute top-0 left-[3px] [font-family:'Inter',Helvetica] font-normal text-white text-[8.3px] tracking-[0] leading-[10.0px] whitespace-nowrap">
                      c
                    </div>
                    <div className="absolute w-[11px] h-[11px] top-0 left-0 rounded-[5.45px] border-[0.87px] border-solid border-white" />
                  </div>
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
                  2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StatisticsSection;
