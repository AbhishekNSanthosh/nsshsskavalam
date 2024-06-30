"use client";

import React, { useEffect } from "react";
import Image from "@components/Image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Content() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="flex w-screen bg-primary-50 px-5vw py-20 bg-no-repeat bg-cover">
      <div className="flex w-full items-center justify-center flex-col gap-5 ">
        <Image
          src={"/images/mannam.webp"}
          height={1000}
          width={1000}
          alt="nsshsskavalam"
          className="h-full w-72 rounded-full"
          data-aos="fade-up"
        />
        <span
          className="text-2xl font-semibold text-primary"
          data-aos="fade-up"
        >
          Our Founder
        </span>
        <span
          className="text-4xl font-bold text-font-secondary"
          data-aos="fade-up"
        >
          Sri.Mannathu Padmanabhan
        </span>
        <p className="text-lg text-center" data-aos="fade-up">
          Our Founder, Sri Mannathu Padmanabhan instilled a sense of direction
          in the decadent Nair Community by organizing the people under the
          banner of Nair Service Society, a service organization equipped and
          committed to the cause of providing modern education, a positive
          outlook, a sense of purpose and a competitive edge. The educational
          institutions spread across the state bear testimony to his visionary
          zeal. He is remembered for the yeoman service he rendered to the state
          of Kerala and its people.
        </p>
      </div>
    </div>
  );
}
