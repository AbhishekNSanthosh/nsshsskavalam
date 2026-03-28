"use client";

import TitleBar from "@widgets/Common/TitleBar";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const teamMembers = [
  {
    title: "Principal's Message",
    name: "Smt. Jyothilekshmi",
    position: "Principal",
    image: "/heads/jyothitr.jpeg",
    message:
      "Dear Parents, Welcome to NSS Higher Secondary School, Kavalam, where we shape young minds and nurture their potential. Our education goes beyond knowledge, focusing on values, critical thinking, and responsibility to prepare students for the future. With a dedicated team of teachers, we create an inspiring, student-centered environment. Blending traditional values with modern practices, we develop well-rounded individuals equipped for success. We encourage excellence in academics, extracurriculars, sports, and community service.",
  },
  {
    title: "Headmistress's Message",
    name: "Smt. Priya C Nair",
    position: "Headmistress",
    image: "/heads/priyatr.jpeg",
    message:
      "Dear Parents, It is with great pleasure that I welcome you to NSS HSS Kavalam. As the Headmistress, I am honored to lead a school committed to nurturing the minds and hearts of our students. We encourage students to explore their interests, develop their talents, and engage in activities that foster a love of learning. Your dedication, curiosity, and hard work are the cornerstones of your success, and we are here to support you every step of the way.",
  },
];

export default function OurTeam() {
  const sectionRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-[5vw] py-16 bg-gray-50/60">
      <div className="flex flex-col gap-10">
        <TitleBar title="Our Team" />

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-white rounded-2xl overflow-hidden shadow-custom border border-gray-100 flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-orange-50 to-primary/10 px-6 pt-8 pb-6 flex flex-col items-center gap-3">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-primary/20">
                  <Image
                    src={member.image}
                    width={200}
                    height={200}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold text-font-primary">
                    {member.name}
                  </h3>
                  <span className="inline-block mt-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {member.position}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <FaQuoteLeft className="text-primary/30 text-lg flex-shrink-0" />
                  <span className="text-xs font-semibold text-font-secondary uppercase tracking-wide">
                    {member.title}
                  </span>
                </div>
                <p className="text-font-secondary text-sm leading-relaxed">
                  {expanded[index]
                    ? member.message
                    : member.message.slice(0, 180) + "..."}
                </p>
                <button
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                  className="self-start text-xs font-semibold text-primary hover:underline"
                >
                  {expanded[index] ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
