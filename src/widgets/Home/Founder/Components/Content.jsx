"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Content() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Image: scale + fade in
      gsap.from(".founder-image", {
        scale: 0.7,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".founder-image",
          start: "top 85%",
        },
      });
      // Decorative ring spins in
      gsap.from(".founder-ring", {
        rotate: -45,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".founder-image",
          start: "top 85%",
        },
      });
      // Text stagger
      gsap.from(".founder-text > *", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".founder-text",
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-[5vw] overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-white"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/5" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/5" />

      <div className="relative flex flex-col items-center gap-8 max-w-2xl mx-auto text-center">
        {/* Photo with decorative ring */}
        <div className="founder-image relative flex items-center justify-center">
          <div className="founder-ring absolute inset-0 rounded-full border-2 border-dashed border-primary/40 scale-[1.18]" />
          <div className="w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-primary/20">
            <Image
              src="/images/mannam.webp"
              height={400}
              width={400}
              alt="Sri. Mannathu Padmanabhan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="founder-text flex flex-col items-center gap-3">
          <span className="text-xs font-semibold text-primary tracking-[0.22em] uppercase">
            Our Founder
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-font-primary">
            Sri. Mannathu Padmanabhan
          </h2>
          <div className="w-10 h-1 rounded-full bg-primary" />
          <p className="text-sm md:text-base text-font-secondary leading-relaxed max-w-xl">
            Our Founder instilled a sense of direction in the Nair Community by
            organizing people under the banner of Nair Service Society — a
            service organization committed to providing modern education, a
            positive outlook, and a competitive edge. The educational
            institutions spread across Kerala bear testimony to his visionary
            zeal, and he is remembered for the yeoman service he rendered to the
            state and its people.
          </p>
        </div>
      </div>
    </section>
  );
}
