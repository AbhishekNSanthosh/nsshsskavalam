"use client";

import React, { useEffect, useState, useRef } from "react";
import "@styles/banner.scss";
import Image from "@components/Image";

const images = [
  "/images/bg/bg5.webp",
  "/images/bg/bg1.jpeg",
  "/images/bg/bg2.jpeg",
  "/images/bg/bg3.jpeg",
  "/images/bg/bg4.jpeg",
  // Add more image paths as needed
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageCount = images.length;
  const timeoutRef = useRef(null);

  const startTransition = () => {
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
      setIsTransitioning(false);
    }, 2000); // Duration of the transition should match CSS duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startTransition();
    }, 3000); // Interval matches the desired auto-slide time

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearTimeout(timeoutRef.current); // Reset timeout on dot click
  };

  return (
    <div className="relative w-screen h-[92vh] md:h-[80vh] lg:h-[80vh] overflow-hidden mt-[-1px]">
      <div
        className={`absolute inset-0 flex transition-transform duration-2500 ease-in-out ${
          isTransitioning ? "" : "transition-none"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-screen h-[92vh] md:h-[80vh] lg:h-[80vh] flex-shrink-0 bg-cover bg-center flex items-center justify-center relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, #0000004a, #0000004a), url(${image})`,
            }}
          >
            <div className="flex justify-center w-[95vw] md:w-[80vw] lg:w-[80vw] items-center flex-col rounded-lg">
              <span className="bannerTitle text-white text-base md:text-5xl lg:text-5xl font-semibold m-4">
                NSS Higher Secondary School, Kavalam
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-primary-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
