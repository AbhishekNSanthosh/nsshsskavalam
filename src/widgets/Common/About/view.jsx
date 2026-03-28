"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import TitleBar from "../TitleBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const aboutText = `NSS HSS Kavalam, situated in the picturesque Kuttanad region along the Pampa River, boasts a distinguished legacy that dates back to 1927. The esteemed Chalayil family, recognizing the community's need for quality education, established a UP school for the residents of Kavalam. With Sri K.P. Panicker as manager and Headmaster Sri T.K. Parameswaran providing dedicated leadership, the institution thrived. Their steadfast efforts, along with the support of Sri Mannath Padmanabhan, founder of the Nair Service Society, culminated in the school coming under the esteemed NSS management.

Thanks to the contributions of Nair Service Society, Sri T.K. Parameswaran Pillai, and the unwavering support of the Chalayil family, the school was elevated to high school status. Notable alumni, including the renowned scholar Sri Kavalam Ayyappa Panicker and the distinguished author Sri Kavalam Viswanatha Kurup, have emerged from NSS HSS Kavalam. In 2000, the school was further upgraded to a higher secondary school, reinforcing its reputation for academic excellence.

Today, NSS HSS Kavalam stands as a cornerstone of education in the region, continuing to play a vital role in preserving and promoting the rich cultural heritage of Kavalam.`;

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".about-img-item", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".about-images",
          start: "top 80%",
        },
      });
      gsap.from(".about-text-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const truncated = aboutText.slice(0, 420);

  return (
    <section ref={sectionRef} className="w-full px-[5vw] py-8 pt-6 lg:pt-8">
      <div className="flex flex-col gap-10 md:gap-12">
        <TitleBar title="About Us" />

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "1927", label: "Established" },
            { value: "50+", label: "Faculty Members" },
            { value: "3", label: "Academic Streams" },
            { value: "04066", label: "School Code" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-white border border-gray-100 shadow-custom text-center"
            >
              <span className="text-2xl font-bold text-primary">{value}</span>
              <span className="text-xs text-font-secondary font-medium">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
          {/* Image grid */}
          <div className="about-images flex-1 grid grid-cols-2 gap-3">
            <div className="about-img-item col-span-2">
              <Image
                src="/images/banner.webp"
                width={900}
                height={500}
                alt="NSS HSS Kavalam"
                className="w-full h-52 md:h-64 object-cover rounded-xl shadow-sm"
              />
            </div>
            <div className="about-img-item">
              <Image
                src="/images/bg/bg1.jpeg"
                width={450}
                height={300}
                alt="NSS HSS Kavalam"
                className="w-full h-40 md:h-48 object-cover rounded-xl shadow-sm"
              />
            </div>
            <div className="about-img-item">
              <Image
                src="/images/bg/bg2.jpeg"
                width={450}
                height={300}
                alt="NSS HSS Kavalam"
                className="w-full h-40 md:h-48 object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Text */}
          <div className="about-text-content flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
                Est. 1958
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-font-primary">
                NSS Higher Secondary School
              </h3>
              <p className="text-sm text-font-secondary">Alappuzha, Kavalam P.O</p>
            </div>
            <div className="w-8 h-1 rounded-full bg-primary" />
            <p className="text-font-secondary leading-relaxed text-sm md:text-base whitespace-pre-line">
              {isExpanded ? aboutText : truncated + "..."}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="self-start px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
