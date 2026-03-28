"use client";

import { faChalkboardTeacher, faLaptop, faSchoolCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { icon: faUsers,             target: 500,  suffix: "+", label: "Students" },
  { icon: faChalkboardTeacher, target: 20,   suffix: "+", label: "Teachers" },
  { icon: faLaptop,            target: 10,   suffix: "+", label: "Digital Classrooms" },
  { icon: faSchoolCircleCheck, target: 1000, suffix: "+", label: "Alumni" },
];

export default function Content() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Cards slide up
      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 90%",
        },
      });

      // Count-up for each number
      gsap.utils.toArray(".counter-value").forEach((el) => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          immediateRender: false,
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-[5vw] py-16 bg-gradient-to-b from-white to-orange-50/40">
      <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-card bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center gap-3 shadow-custom border border-gray-100 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FontAwesomeIcon icon={stat.icon} className="text-primary h-5" />
            </div>
            <span
              className="counter-value text-2xl md:text-3xl font-bold text-font-primary"
              data-target={stat.target}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </span>
            <span className="text-xs md:text-sm text-font-secondary text-center font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
