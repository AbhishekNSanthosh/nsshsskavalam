"use client";

import React, { useEffect, useState, useRef } from "react";
import "@styles/banner.scss";
import Image from "@components/Image";
import { GoArrowRight } from "react-icons/go";

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
    <div className="relative w-screen h-[92vh] md:h-[82vh] lg:h-[82vh] overflow-hidden mt-[-1px]">
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
            className="w-screen h-[92vh] md:h-[82vh] lg:h-[82vh] flex-shrink-0 bg-cover bg-center flex flex-col items-start justify-center relative px-[5vw] gap-4"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 70%),rgb(0 0 0 / 40%)), url(${image})`,
            }}
          >
            <div className="flex justify-center w-[95vw] md:w-[50vw] lg:w-[50vw] items-start flex-col rounded-lg">
              <span className="bannerTitle text-white text-3xl md:text-6xl lg:text-6xl font-semibold">
               Welcome to <br />NSS Higher Secondary School, Kavalam
              </span>
            </div>
              <div className="">
                <button className="px-3 py-2 rounded-md bg-primary text-white flex flex-row items-center justify-center gap-2 font-semibold">Learn more <GoArrowRight className="flex font-semibold"/></button>
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
