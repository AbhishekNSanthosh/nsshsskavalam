import React from "react";
import Image from "next/image";
import { logos, navItems } from "../../../common/Utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-10 md:mt-10 lg:mt-10">
      <hr />
      <div className="w-full px-5vw py-4 md:py-16 lg:py-16">
        <div className="w-full flex flex-col gap-8 md:gap-4 lg:gap-4 sm:flex-row md:flex-row lg:flex-row">
          <div className="flex-1 pr-0 md:pr-3 lg:pr-3">
            <div className="flex justify-start gap-4">
              <Image
                src={logos.nssLogoWebP}
                height={1000}
                width={1000}
                className="w-9 md:w-12 lg:w-12"
                alt="nsshsskavalam"
              />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-font-primary text-sm lg:text-base md:text-base">
                  NSS HIGHER SECONDARY SCHOOL
                </span>
                <span className="font-normal text-font-secondary text-xs lg:text-sm md:text-sm">
                  Kavalam Alappuzha District, Kerala
                </span>
              </div>
            </div>
            <div className="pt-4 pr-0 text-justify md:pr-8 lg:pr-8">
              At NSS Higher Secondary School, we provide quality education to
              help students grow and succeed. Our school focuses on academics,
              values, and preparing students for the future. With the support of
              our teachers, we help students become confident and responsible
              individuals.
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col justify-center gap-y-4">
            <div className="w-full flex flex-col justify-start">
              <span className="font-semibold text-font-secondary text-lg">
                Quick Links
              </span>
            </div>
            <div className="w-full flex justify-start pl-1 gap-16">
              <div className="flex flex-col gap-0.5">
                {navItems?.slice(0, 6).map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.link}
                    className="capitalize"
                  >
                    {"-> "}{item?.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                {navItems?.slice(6, 11).map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.link}
                    className="capitalize"
                  >
                    {"-> "}{item?.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="w-full justify-end flex flex-col  gap-y-4">
              <div className="flex">
                <span className="text-font-secondary font-semibold text-lg">
                  Get In Touch
                </span>
              </div>
              <div className="flex">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-font-secondary h-4"
                  />
                  <a
                    href="mailto:nsshsskavalam04066@gmail.com"
                    className="ml-2"
                  >
                    nsshsskavalam04066@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-font-secondary h-4"
                  />
                  <a href="tel:04772746100" className="">
                    0477 2746100
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-font-secondary h-4"
                  />
                  <span className="ml-2">
                    Kavalam Alappuzha District, Kerala 688506
                  </span>
                </div>
              </div>
              <div className="flex gap-4 mt-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-7 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="h-7 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-7 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
