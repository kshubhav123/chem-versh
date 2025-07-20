"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gallery from "../screens/Homepage/sections/GallerySection/GallerySection";
import Hero from "../screens/Homepage/sections/HeroSection/HeroSection";
import AboutUs from "../screens/Homepage/sections/aboutUsSlider/aboutUs";
import IndustriesServ from "../screens/Homepage/sections/industriesServe/industriesServ";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  return (
    <div >
      <Gallery />
      <AboutUs />
      <IndustriesServ />
      <Hero />
    </div>
  );
}
