"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProductButton = ({ name, href = "#" }) => {
  return (
    <a
      href={href}
      className="
        group
        inline-flex items-center justify-between
        bg-[#EEF3F7]
        border border-gray-300
        text-gray-800 text-sm
        px-4 py-2
        rounded-[8px]
        shadow-sm
        hover:bg-[#ffffff]
        transition-all duration-200
        w-fit
      "
    >
      {/* Left: Dot */}
      <span className="w-2.5 h-2.5 rounded-full bg-[#5683AD] mr-2"></span>

      {/* Text */}
      <span>{name}</span>

      {/* Right: Icon with rounded bg, only visible on hover */}
      <span
        className="
          ml-2
          w-6 h-6
          rounded-full
          bg-[#5683AD]
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
        "
      >
        <ArrowUpRight size={16} color="#ffffff" />
      </span>
    </a>
  );
};

export default ProductButton;
