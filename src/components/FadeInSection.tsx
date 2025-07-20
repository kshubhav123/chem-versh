"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  contentKey?: string | number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = "",
  contentKey,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    // Create a GSAP context scoped to this component
    const ctx = gsap.context(() => {
      // From opacity 0 only if not already visible in viewport?
      // Here we always animate from autoAlpha: 0 → 1 when triggered.
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
    }, ref);

    // After adding new triggers, refresh positions
    ScrollTrigger.refresh();

    return () => {
      // Clean up GSAP animations and ScrollTrigger instances in this context
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [contentKey]); // re-run when data/key changes

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default FadeInSection;
