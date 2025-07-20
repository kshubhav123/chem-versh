import React from "react";

function page() {
  return (
    <div className="cursor-pointer z-[50] absolute pl-2 xs:pl-3 sm:pl-4 top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 md:top-6 md:left-6">
      <a href="/" className="cursor-pointer relative z-[100]">
        <img
          src="/logo.png"
          alt="Logo"
          width={120}
          height={50}
          className="object-contain logo-mobile w-[100px] xs:w-[120px] sm:w-[150px] md:w-[175px] h-auto"
        />
      </a>
    </div>
  );
}

export default page;
