"use client";

import {
  Bird,
  Camera,
  PlayCircle,
  Briefcase,
  UserRound,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Twitter, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import FadeInSection from "../../../../components/FadeInSection";
import products from "../../../../productcopy.js";

export default function Footer() {
  return (
    <footer className="bg-[#5683AD] text-[#ffffff]">
      {/* Top section */}
      <FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 py-[5rem] px-4 md:px-12">
          {/* Get in touch */}
          <div className="mr-[8rem]">
            <h2 className="text-[2.5rem] font-bold mt-4">Enquire Now</h2>
            {/* Thick white bar with right-end dot */}
            <div className="relative w-full h-[0.4rem] bg-[#ffffff] my-8 rounded-full">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#ffffff] rounded-full"></div>
            </div>
            <p className="mb-8 xs:mb-0">
              Feel free to reach out to us through the contact form, and we’ll
              get back to you promptly.
            </p>
            {/* <a href="/contact">
              <Button className="w-[337px] bg-[#5683AD] h-[39px] text-black rounded-full border border-solid hover:bg-[#3f6d89] bg-[#ffffff]">
                <span className="font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)]">
                  Get in Touch
                </span>
              </Button>
            </a> */}
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold my-8">
              Discover Supercon Chemical Products
            </h3>
            <div className="grid grid-cols-3 gap-[3rem]">
              {Array.from({ length: Math.ceil(products.length / 5) }).map(
                (_, groupIndex) => (
                  <ul key={groupIndex} className="space-y-5">
                    {products
                      .slice(groupIndex * 5, groupIndex * 5 + 5)
                      .map((product, index) => (
                        <li key={groupIndex * 5 + index}>
                          <a
                            href={`/product/${product?.id}`}
                            className="hover:underline text-white"
                          >
                            {product?.productShortName}
                          </a>
                        </li>
                      ))}
                  </ul>
                )
              )}
            </div>
          </div>

          {/* Explore links */}
          <div className="md:ml-[8rem] xs:ml-0">
            <h3 className="font-semibold my-8 custom-footer">Explore</h3>
            <ul className="space-y-5">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/industries" className="hover:underline">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        {/* Divider */}
        <div className="border-t border-white opacity-30"></div>

        {/* Bottom section */}
        <div className="px-4 md:px-12 py-10 border-t border-gray-300">
          <div className="grid md:grid-cols-4">
            {/* Employee Login (left column) */}
            <div>
              <a
                href="http://webmail.superconchem.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2"
              >
                <span className="font-semibold">Employee Login</span>
                {/* Rotate the arrow 45° to match the picture */}
                <SquareArrowOutUpRight size={16} />
              </a>
            </div>

            {/* Contact Us (middle column) */}
            <div className="text-white">
              <h3 className="font-semibold mb-6 text-white custom-footer">
                Contact Us
              </h3>
              <p className="mb-4 text-sm text-white">sales@superconchem.com</p>
              <ul className="space-y-2 text-sm text-white">
                <li>+91 22 40147991</li>
                <li>+91 22 40165308</li>
              </ul>
            </div>

            {/* Address (right column) */}
            <div>
              <h3 className="font-semibold mb-6 custom-footer">Address</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-12 text-sm text-white">
                {/* Office */}
                <div>
                  <h4 className="font-medium mb-4">Office</h4>
                  <p className="leading-snug">
                    209, 2nd Floor, Conwood Paragon, Walbhat Rd,
                    <br />
                    Cama Industrial Estate, Goregaon, Mumbai,
                    <br />
                    Maharashtra 400063
                  </p>
                  <p className="mt-2">+91 22 40147991</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-12"></h3>
              <div className="flex flex-col sm:flex-row sm:space-x-12 text-sm text-white">
                {/* Warehouse */}
                <div>
                  <h4 className="font-medium mb-4">Warehouse</h4>
                  <p className="leading-snug">
                    Sri Ram Logistics
                    <br />
                    Godown No. 6, 2nd Line, Dropadichhaya Compound,
                    <br />
                    Behind Choudhary Compound, Near Anpurna Hotel,
                    <br />
                    Purna Village, Bhiwandi – 421302
                  </p>
                  <p className="mt-2">+91 22 40165308</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Bottom Bar */}
      <div className="border-t border-white opacity-30"></div>
      <div className="px-12 py-6 flex flex-col sm:flex-row justify-between items-center ">
        <div className="font-semibold footerLogocontainer">
          <img src="/footerLogo.png" alt="footerLogo" className="w-[70%]" />
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-[12px]">
          <a
            href="/term-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            T&amp;C
          </a>
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <span>Copyright © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
