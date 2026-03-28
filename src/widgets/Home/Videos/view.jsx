"use client";

import React, { useEffect, useRef, useState } from "react";
import TitleBar from "@widgets/Common/TitleBar";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VIDEO_ID = "kSj41OKrQhg";
const THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Section entrance
      gsap.from(".video-wrapper", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".video-wrapper",
          start: "top 82%",
        },
      });

      // Auto-play (muted) when scrolled into view
      ScrollTrigger.create({
        trigger: ".video-wrapper",
        start: "top 70%",
        once: true,
        onEnter: () => setPlaying(true),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-[5vw] py-16">
      <div className="flex flex-col gap-8">
        <TitleBar title="Champions of Veliyanadu Subdistrict Kalotsavam" />

        <div className="video-wrapper relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
          {playing ? (
            <div className="w-full aspect-video">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
                title="Champions of Veliyanadu Subdistrict Kalotsavam"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className="relative w-full aspect-video cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              {/* Thumbnail */}
              <img
                src={THUMB}
                alt="Champions of Veliyanadu Subdistrict Kalotsavam"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="text-white text-xl md:text-2xl ml-1" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
