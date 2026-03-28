"use client";

import React, { useRef, useEffect } from "react";
import TitleBar from "@widgets/Common/TitleBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  "/images/moments/gallery.jpeg",
  "/images/moments/gallery1.jpeg",
  "/images/moments/gallery3.jpeg",
  "/images/moments/gallery4.jpeg",
];

// Triple the images for a seamless loop (-33.33% brings you back to start)
const row1 = [...images, ...images, ...images];
const row2 = [...images.slice().reverse(), ...images.slice().reverse(), ...images.slice().reverse()];

export default function GalleryView() {
  const sectionRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".gallery-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".gallery-header",
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const pause = () => {
    if (track1Ref.current) track1Ref.current.style.animationPlayState = "paused";
    if (track2Ref.current) track2Ref.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (track1Ref.current) track1Ref.current.style.animationPlayState = "running";
    if (track2Ref.current) track2Ref.current.style.animationPlayState = "running";
  };

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden">
      <div className="px-[5vw] mb-10 gallery-header">
        <TitleBar title="Golden Moments" />
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="relative mb-4"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-l from-white to-transparent" />
        <div className="overflow-hidden">
          <div ref={track1Ref} className="gallery-track-left flex gap-4 pr-4">
            {row1.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`moment-${i}`}
                className="h-48 md:h-60 w-auto rounded-xl object-cover flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="relative"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-l from-white to-transparent" />
        <div className="overflow-hidden">
          <div ref={track2Ref} className="gallery-track-right flex gap-4 pr-4">
            {row2.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`moment-${i}`}
                className="h-48 md:h-60 w-auto rounded-xl object-cover flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gallery-track-left {
          animation: scrollLeft 22s linear infinite;
        }
        .gallery-track-right {
          animation: scrollRight 22s linear infinite;
        }
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
