import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { gsap } from "gsap";
import FadeInSection from "../../../../components/FadeInSection";
import products from "../../../../productcopy.js"; // Assuming this exports an array of products
import { ArrowUpRight } from "lucide-react";

const HeroSection = (): JSX.Element => {
  const featuredProduct = products[0]; // First product for the featured section
  const sliderProducts = products.slice(1); // Remaining products for the slider
  const totalSets = Math.ceil(sliderProducts.length / 4); // Calculate sets for 4 products per slide

  const [currentSet, setCurrentSet] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        xPercent: -currentSet * 100,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [currentSet]);

  return (
    <section className="relative w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-12 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <FadeInSection>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-[2rem] text-black tracking-tight leading-snug">
              Explore Our Extensive Range of Industrial-Grade Chemicals
            </h2>
          </FadeInSection>
        </div>
        <div className="lg:col-span-8">
          <FadeInSection>
            <p className="mt-2 text-base sm:text-lg md:text-[1.1rem] font-normal text-gray-800 opacity-80 leading-relaxed">
              From construction admixtures to textile dyes and pharmaceutical
              excipients, Supercon Chemicals delivers consistency, purity, and
              performance with every batch. Browse through our product
              categories to discover materials that power industries — across
              infrastructure, agriculture, ceramics, and beyond.
            </p>
          </FadeInSection>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
        <FadeInSection className="lg:col-span-6">
          <Card className="w-full h-auto sm:h-[500px] lg:h-[785px] rounded-2xl overflow-hidden border-none">
            <CardContent className="p-0 h-full relative group overflow-hidden">
              <img
                src={featuredProduct.productImagePrimary}
                alt={featuredProduct.productFullName}
                className="w-full h-full object-cover"
              />
              <a
                href={`/product/${featuredProduct.id}`}
                className="absolute inset-0 bg-[#5683AD]/70 flex items-center justify-center text-white text-lg font-semibold opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10"
              >
                Explore This Product
              </a>

              <Badge className="absolute top-4 left-4 bg-[#0000007a] text-white border border-[#b3b3b3cc] px-3 py-1 rounded-full flex items-center gap-2 z-20">
                <img
                  className="w-4 h-4"
                  src="/wired-flat-237-star-rating-hover-pinch--1--5-1.png"
                  alt="star"
                />
                <span className="font-medium text-xs sm:text-sm">Featured</span>
              </Badge>

              <a
                href={`/product/${featuredProduct.id}`}
                className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/70 border-black/20 p-0 z-20"
              >
                <img
                  className="w-8 h-4 mt-1"
                  src="/arrow-right-regular--8--1.svg"
                  alt="arrow"
                />
              </a>
            </CardContent>
          </Card>
          <div className="mt-3 py-4 rounded-[10px] flex flex-row justify-between gap-4">
            <FadeInSection className="flex-1">
              <h3 className="text-[1rem] font-normal text-grey-300 tracking-[-1px] leading-6">
                Product Name
              </h3>
              <p className="font-semibold text-[1.2rem] opacity-80">
                {featuredProduct.productFullName.length > 20
                  ? `${featuredProduct.productFullName.substring(0, 20)}...`
                  : featuredProduct.productFullName}
              </p>
            </FadeInSection>
            <FadeInSection className="flex-1 border-x-4 border-[#5683ad] px-4">
              <h3 className="text-[1rem] font-normal text-grey-300 tracking-[-1px] leading-6">
                Industry
              </h3>
              <p className="font-semibold text-[1.2rem] opacity-80">
                {featuredProduct.majorIndustries[0]}
              </p>
            </FadeInSection>
            <FadeInSection className="flex-1">
              <h3 className="text-[1rem] font-normal text-grey-300 tracking-[-1px] leading-6">
                Country
              </h3>
              <p className="font-semibold text-[1.2rem] opacity-80">
                {featuredProduct.countries[0]}
              </p>
            </FadeInSection>
          </div>
        </FadeInSection>

        <div className="lg:col-span-6">
          <div className="relative w-full overflow-hidden">
            <div className="overflow-hidden">
              <div ref={sliderRef} className="flex">
                {Array.from({ length: totalSets }).map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="grid grid-cols-2 grid-rows-2 gap-7 w-full flex-shrink-0"
                  >
                    {sliderProducts
                      .slice(setIndex * 4, (setIndex + 1) * 4)
                      .map((product, index) => {
                        const originalIndex = setIndex * 4 + index + 1; // Index in original array
                        const isFeatured = originalIndex < 3; // Featured if among first three (0, 1, 2; so 1, 2 in slider)
                        return (
                          <FadeInSection
                            key={product.id}
                            className="flex flex-col h-full"
                          >
                            <Card className="w-full h-auto sm:h-[150px] md:h-[200px] lg:h-[310px] rounded-2xl overflow-hidden border-none">
                              <CardContent className="p-0 h-full relative group overflow-hidden">
                                <img
                                  src={product.productImagePrimary}
                                  alt={product.productFullName}
                                  className="w-full h-full object-cover"
                                />
                                <a
                                  href={`/product/${product.id}`}
                                  className="absolute inset-0 bg-[#5683AD]/70 flex items-center justify-center text-white text-sm sm:text-base font-semibold opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10"
                                >
                                  Explore Product
                                </a>
                                {isFeatured && (
                                  <Badge className="absolute top-4 left-2 bg-[#0000007a] text-white border border-[#b3b3b3cc] px-3 py-1 rounded-full flex items-center gap-2 z-20 xs:mt-3 ">
                                    <img
                                      className="w-4 h-4"
                                      src="/wired-flat-237-star-rating-hover-pinch--1--5-1.png"
                                      alt="star"
                                    />
                                    <span className="font-medium text-xs sm:text-sm">
                                      Featured
                                    </span>
                                  </Badge>
                                )}
                                <a
                                  href={`/product/${product.id}`}
                                  className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/70 border-black/20 p-0 z-20"
                                >
                                  <img
                                    className="w-8 h-4 mt-1"
                                    src="/arrow-right-regular--8--1.svg"
                                    alt="arrow"
                                  />
                                </a>
                              </CardContent>
                            </Card>
                            <FadeInSection className="mt-2 p-3 flex-grow">
                              <h3 className="font-semibold text-[1.2rem] sm:text-lg leading-6">
                                {product.productFullName}
                              </h3>
                              <p className="text-[1rem] font-normal opacity-80">
                                {product.longTitle}
                              </p>
                            </FadeInSection>
                          </FadeInSection>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-col md:text-[1.1rem] font-normal lg:flex-row lg:justify-between lg:items-start gap-4 w-full">
          {/* Description — third on mobile and desktop */}
          <p className="hidden sm:block flex-1 text-center lg:text-left text-base sm:text-lg opacity-80 leading-relaxed max-w-3xl order-3 lg:order-1">
            {featuredProduct.listingShortDescription}
          </p>

          {/* Next/Prev Buttons — first on mobile and desktop */}
          <div className="flex items-center justify-center lg:justify-start gap-4 order-1 lg:order-2">
            <Button
              variant="link"
              className="font-bold text-base text-gray-500 hover:text-gray-800"
              onClick={() =>
                setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets)
              }
            >
              Prev
            </Button>

            <div className="w-40 sm:w-56 md:w-64 h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-[#5683AD] transition-all duration-500 ease-in-out"
                style={{
                  width: `${((currentSet + 1) / totalSets) * 100}%`,
                }}
              ></div>
            </div>

            <Button
              variant="link"
              className="font-bold text-base text-gray-500 hover:text-gray-800"
              onClick={() => setCurrentSet((prev) => (prev + 1) % totalSets)}
            >
              Next
            </Button>
          </div>

          {/* Explore All Products — second on mobile and desktop */}
          <a
            href="/products"
            className="order-2 lg:order-3 flex justify-center lg:justify-start"
          >
            <Button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-6 bg-white text-gray-800 border border-gray-600 rounded-full hover:bg-gray-100 transition whitespace-nowrap text-base sm:text-lg">
              <span className="text-black">Explore All Products</span>
              <span
                className="
                  ml-2
                  w-6 h-6
                  rounded-full
                  border
                  border-[#000000cc]
                  bg-[#ffffff]
                  flex items-center justify-center
                  transition-opacity duration-200
                "
              >
                <ArrowUpRight size={16} color="black" />
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
