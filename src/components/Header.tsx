"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Products from "../productcopy.js";
import gsap from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const productsContainerRef = useRef(null);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null); // Added ref for sidebar

  const isProductPage = pathname.startsWith("/product/");
  const currentProductId = isProductPage ? pathname.split("/")[2] : null;

  // Scroll handling for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }
      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  // Dropdown position and animation (unchanged)
  useEffect(() => {
    if (
      isProductsDropdownOpen &&
      dropdownRef.current &&
      productsContainerRef.current
    ) {
      const parentRect = productsContainerRef.current.getBoundingClientRect();
      const dropdownWidth = dropdownRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;

      if (parentRect.left + dropdownWidth > viewportWidth) {
        dropdownRef.current.style.left = "auto";
        dropdownRef.current.style.right = "0";
      } else {
        dropdownRef.current.style.left = "0";
        dropdownRef.current.style.right = "auto";
      }

      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isProductsDropdownOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-[50] transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex z-50 justify-end mt-4 px-4 sm:px-6">
        <div
          className={`shadow-lg flex items-center px-4 py-2 bg-[#F8FAFC] rounded-full border border-[#CBD5E1] transition-all duration-300 ${
            isScrolled
              ? "shadow-[0px_4px_40px_rgba(0,0,0,0.1)] md:w-[100%]"
              : "md:w-[60%]"
          }`}
        >
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between w-full font-bold text-sm space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10">
            <a
              href="/"
              className={`hover:text-primary pl-6 ${
                pathname === "/"
                  ? "text-primary font-semibold"
                  : "text-[#64748B]"
              }`}
            >
              Home
            </a>
            <a
              href="/about-us"
              className={`hover:text-primary ${
                pathname === "/about-us"
                  ? "text-primary font-semibold"
                  : "text-[#64748B]"
              }`}
            >
              About Us
            </a>
            <a
              href="/industries"
              className={`hover:text-primary ${
                pathname === "/industries"
                  ? "text-primary font-semibold"
                  : "text-[#64748B]"
              }`}
            >
              Industries We Serve
            </a>
            <div
              className="relative"
              ref={productsContainerRef}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <a
                href="/products"
                className={`hover:text-primary ${
                  pathname === "/products"
                    ? "text-primary font-semibold"
                    : "text-[#64748B]"
                }`}
              >
                Products
              </a>
              {isProductsDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full w-[24rem] p-2 bg-white shadow-lg rounded-b-[20px]"
                  style={{ left: "0" }}
                >
                  {Products.map((product) => (
                    <a
                      key={product.id}
                      href={`/product/${product.id}`}
                      className={`block px-4 py-2 text-sm ${
                        product.id === currentProductId
                          ? "text-black font-bold before:bg-black"
                          : "text-primary hover:bg-[#DBEEFF] before:bg-primary"
                      }`}
                    >
                      {product.productFullName}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden sm:flex">
              <a
                className="bg-[#5683AD] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3f6d89] flex items-center gap-2 sm:px-4 sm:py-2 sm:text-sm xs:px-3 xs:py-1.5 xs:text-xs"
                href="/contact"
              >
                <span className="xs:hidden">Enquire Now</span>
                <span className="ml-2 w-6 h-6 rounded-full bg-[#ffffff] flex items-center justify-center transition-opacity duration-200">
                  <ArrowUpRight size={16} color="black" />
                </span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#64748B] focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        ref={sidebarRef}
        className={`md:hidden z-50 fixed top-0 right-0 h-full w-64 bg-[#F8FAFC] border-l border-[#CBD5E1] z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 mt-4 bg-[#FFFFFF] overflow-y-auto">
          <a
            href="/"
            className={`text-sm font-medium ${
              pathname === "/"
                ? "text-primary font-semibold"
                : "text-[#64748B] hover:text-primary"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about-us"
            className={`text-sm font-medium ${
              pathname === "/about-us"
                ? "text-primary font-semibold"
                : "text-[#64748B] hover:text-primary"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="/industries"
            className={`text-sm font-medium ${
              pathname === "/industries"
                ? "text-primary font-semibold"
                : "text-[#64748B] hover:text-primary"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Industries We Serve
          </a>
          <button
            onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
            className="text-sm font-medium text-[#64748B] hover:text-primary text-left"
          >
            Products
          </button>
          {isMobileProductsOpen && (
            <div className="ml-4">
              <a
                href="/products"
                className={`block text-[11px] ${
                  pathname === "/products"
                    ? "text-black font-bold before:bg-black"
                    : "text-[#64748B] hover:text-primary before:bg-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                All Products
              </a>
              {Products.map((product) => (
                <a
                  key={product.id}
                  href={`/product/${product.id}`}
                  className={`block py-1 text-[11px] ${
                    product.id === currentProductId
                      ? "text-black font-bold before:bg-black"
                      : "text-[#64748B] hover:text-primary before:bg-primary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {product.productFullName}
                </a>
              ))}
            </div>
          )}
          <a
            className="mt-4 bg-primary text-white w-full py-2 rounded-full text-sm font-medium hover:bg-[#2563EB] flex items-center justify-center gap-2"
            onClick={() => setMenuOpen(false)}
            href="/contact"
          >
            Enquire Now{" "}
            <span className="ml-2 w-6 h-6 rounded-full bg-[#ffffff] flex items-center justify-center transition-opacity duration-200">
              <ArrowUpRight size={16} color="black" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
