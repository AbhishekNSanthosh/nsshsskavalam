"use client";

import React, { useEffect, useRef } from "react";
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import TitleBar from "@widgets/Common/TitleBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const vision = [
  "To inculcate spontaneous willingness to savour pleasant and positive thoughts in young minds and enhance the meaning of life.",
  "To address the intellectual, emotional and educational needs of the society.",
  "To widen the mental and intellectual horizon of the younger generation for nation-building.",
  "To enlighten academic and non-academic endeavours to sensitise society.",
];

const mission = [
  "To provide quality education to every student.",
  "To enable the development of total personality through co-curricular and extra-curricular activities.",
  "To extend guidance and consultancy service.",
  "To motivate achievement of excellence in every field of life.",
];

export default function Content() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".vision-panel", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".mv-grid", start: "top 80%" },
      });
      gsap.from(".mission-panel", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".mv-grid", start: "top 80%" },
      });
      gsap.from(".mv-item", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".mv-grid", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-[5vw] pt-16 pb-4">
      <div className="flex flex-col gap-10">
        <TitleBar title="Vision & Mission" />

        <div className="mv-grid flex flex-col md:flex-row gap-5 md:gap-6">
          {/* Vision */}
          <div className="vision-panel flex-1 rounded-2xl border border-orange-100 bg-orange-50/50 p-6 md:p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FaEye className="text-primary text-base" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-font-primary">
                Our Vision
              </h3>
            </div>
            <div className="flex flex-col gap-3.5">
              {vision.map((item, i) => (
                <div key={i} className="mv-item flex gap-3 items-start">
                  <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0 text-sm" />
                  <p className="text-font-secondary text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="mission-panel flex-1 rounded-2xl bg-primary p-6 md:p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <FaBullseye className="text-white text-base" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Our Mission
              </h3>
            </div>
            <div className="flex flex-col gap-3.5">
              {mission.map((item, i) => (
                <div key={i} className="mv-item flex gap-3 items-start">
                  <FaCheckCircle className="text-white/60 mt-0.5 flex-shrink-0 text-sm" />
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
