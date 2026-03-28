"use client";

import React, { useEffect, useState, useRef } from "react";
import "@styles/banner.scss";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const images = [
  "/images/bg/bg5.webp",
  "/images/bg/bg1.jpeg",
  "/images/bg/bg2.jpeg",
  "/images/bg/bg3.jpeg",
  "/images/bg/bg4.jpeg",
];

const INTERVAL = 5000;

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
    startAutoPlay();
  };

  const prev = () => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
    startAutoPlay();
  };

  const next = () => {
    setCurrent((p) => (p + 1) % images.length);
    startAutoPlay();
  };

  return (
    <div className="relative w-full h-[85vh] md:h-[80vh] overflow-hidden bg-black group">

      {/* Slides — crossfade */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(105deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Content — key forces remount on slide change, replaying the animation */}
      <div className="relative z-10 h-full flex items-center px-[5vw]">
        <div key={current} className="banner-content flex flex-col gap-3 md:gap-4">
          <span className="text-white/60 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
            Kavalam, Alappuzha · Kerala
          </span>
          <h1 className="text-white text-[2rem] leading-[1.2] md:text-5xl lg:text-6xl font-bold max-w-[88vw] md:max-w-[55vw]">
            Welcome to{" "}
            <br className="hidden sm:block" />
            NSS Higher Secondary School
          </h1>
          <p className="text-white/75 text-sm md:text-base max-w-[80vw] md:max-w-[44vw] leading-relaxed">
            Nurturing minds and building futures through quality education in the heart of Kavalam.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link href="/about">
              <button className="px-5 py-2.5 rounded-lg bg-primary text-white flex items-center gap-2 font-semibold text-sm hover:bg-primary/90 active:scale-95 transition-all">
                Learn more <GoArrowRight />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-5 py-2.5 rounded-lg border border-white/40 text-white text-sm font-medium hover:bg-white/10 active:scale-95 transition-all backdrop-blur-sm">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <MdChevronLeft className="text-2xl md:text-3xl" />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <MdChevronRight className="text-2xl md:text-3xl" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "w-7 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress bar — CSS animation resets via key */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/20">
        <div
          key={current}
          className="banner-progress h-full bg-primary"
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>
    </div>
  );
};

export default Banner;
