"use client"; // this makes it a client component

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../screens/Homepage/sections/FooterSection/FooterSection";
import GetInTouch from "../screens/Homepage/sections/GetInTouchForm/GetInTouch";
import Map from "../screens/map/map";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // console.log("Current Pathname:", window.location.pathname);

      setPathname(window.location.pathname);
    }
  }, []);

  const hideFooterAndForm =
    pathname === "/term-conditions/" || pathname === "/privacy-policy/";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {!hideFooterAndForm && <Header />}
        <main>{children}</main>
        {!hideFooterAndForm && <GetInTouch />}
        {pathname === "/contact/" && <Map />}
        {!hideFooterAndForm && <Footer />}
      </body>
    </html>
  );
}
