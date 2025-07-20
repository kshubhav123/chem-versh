import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../../../../components/ui/button";
import { ArrowUpRight } from "lucide-react";
import FadeInSection from "../../../../components/FadeInSection";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  title: string;
  Subtitle?: string;
  value: number;
}

const stats: StatItem[] = [
  {
    title: "Products",
    Subtitle: "Curated Chemical Solutions for Diverse Industrial Applications",
    value: 10,
  },
  {
    title: "Industries",
    Subtitle: "Trusted across Key Manufacturing Sectors with Global Relevance",
    value: 5,
  },
  {
    title: "Customers",
    Subtitle:
      "Trusted by Long-Standing Partners Across India and Beyond for Our Reliability",
    value: 50,
  },
  {
    title: "Years of Delivering Expertise",
    Subtitle:
      "Backed by Decades of Domain Knowledge and Hands-On Sourcing Agility",
    value: 30,
  },
];

const AnimatedStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    stats.map(() => 0)
  );
  const [widths, setWidths] = useState<number[]>(stats.map(() => 0));
  const [isActive, setIsActive] = useState<boolean[]>(stats.map(() => false));

  useEffect(() => {
    if (!sectionRef.current) return;

    let tl: GSAPTimeline;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // For desktop
      tl = animateStats("top 80%");
    });

    mm.add("(max-width: 767px)", () => {
      // For mobile - start animation slightly later
      tl = animateStats("top 60%");
    });

    function animateStats(startPos: string): GSAPTimeline {
      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: startPos,
          toggleActions: "play none none none",
        },
      });

      // Animate all bars sequentially
      stats.forEach((stat, idx) => {
        tl.call(
          () => {
            setIsActive((prev) => {
              const newIsActive = [...prev];
              newIsActive[idx] = true;
              return newIsActive;
            });
          },
          null,
          "+=0.5"
        )
          .to(
            { val: 0 },
            {
              val: stat.value,
              duration: 2,
              onUpdate() {
                setAnimatedValues((prev) => {
                  const newValues = [...prev];
                  newValues[idx] = Math.floor((this.targets()[0] as any).val);
                  return newValues;
                });
              },
            },
            "<"
          )
          .to(
            { width: 0 },
            {
              width: 100,
              duration: 2,
              onUpdate() {
                setWidths((prev) => {
                  const newWidths = [...prev];
                  newWidths[idx] = (this.targets()[0] as any).width;
                  return newWidths;
                });
              },
            },
            "<"
          );
      });

      return tl;
    }

    return () => {
      mm.revert();
      tl?.scrollTrigger?.kill();
      tl?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-4 bg-white mt-12 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-4/12 w-full">
          <FadeInSection>
            <h2 className="text-[2.5rem] font-semibold text-left">
              Why Supercon <br /> Chemicals?
            </h2>
            <a href="/about-us" className="">
              <Button className="mt-11 border border-[#000000cc] bg-white text-white px-5 py-2 xs:px-3 xs:py-1 rounded-full text-sm xs:text-xs font-medium hover:bg-[#3f6d89] flex items-center text-black hover:text-white hover:border-transparent">
                <span className="xs:hidden">About Us</span>
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
          </FadeInSection>
        </div>
        <div className="md:w-7/12 w-full mt-6 md:mt-0 text-base font-normal">
          <FadeInSection>
            <p className="text-gray-600 text-justify xs:text-sm">
              With more than a decade of trusted service, we bring reliability,
              responsiveness, and product expertise to every order. Our
              customer-first approach and robust supply network help us serve
              growing businesses with consistent quality and transparent
              communication.
            </p>
            <br />
            <p className="text-base xs:text-sm">
              <strong className="mr-1 font-bold">Sourcing Capabilities:</strong>
              Import from China, Turkey, South Korea, Indonesia, UAE, Russia,
              Germany & other countries
            </p>
          </FadeInSection>
        </div>
      </div>

      <FadeInSection className="flex md:flex-row justify-center items-start my-12 xs:mx-2 mt-12">
        <div className="md:w-8/12 w-full">
          <img
            src="/worldMap.png"
            alt="World Map"
            className="w-full h-[70%] xs:w-3/4"
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6 xs:gap-3 xs:mx-3">
          {stats.map((stat, idx) => {
            const displayValue = isActive[idx] ? animatedValues[idx] : 0;
            const color = isActive[idx] ? "100%" : "30%";
            return (
              <div key={idx} className={`space-y-2 opacity-[${color}]`}>
                {/* <div className="text-[90px] font-semibold text-primary"> */}
                <div className="text-[50px] md:text-[90px] font-semibold text-primary">
                  {displayValue}+
                </div>
                <div className="h-2 bg-gray-200 rounded overflow-hidden">
                  <div
                    style={{ width: `${widths[idx]}%` }}
                    className="h-full bg-[#5683AD]"
                  ></div>
                </div>
                <div className="font-normal text-[0.75rem] md:text-[1rem] text-gray-700">
                  {stat.title}
                </div>
                <div className="text-primary font-semibold text-[14px] md:text-[20px]">
                  {stat.Subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
};

export default AnimatedStats;
