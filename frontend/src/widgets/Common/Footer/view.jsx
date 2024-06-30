import React from "react";
import "@styles/footer.scss";
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

export default function Footer() {
  return (
    <div className="mt-10">
      <hr />
      <div className="w-full px-5vw py-16">
        <div className="w-full flex gap-4">
          <div className="flex-1 pr-3">
            <div className="flex justify-start gap-4">
              <Image
                src={logos.nssLogoWebP}
                height={1000}
                width={1000}
                className="w-12"
                alt=""
              />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-font-primary">
                  NSS HIGHER SECONDARY SCHOOL
                </span>
                <span className="font-normal text-font-secondary">
                  Kavalam Alappuzha District, Kerala
                </span>
              </div>
            </div>
            <div className="pt-4 pr-8 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur at fugiat laboriosam aspernatur praesentium possimus
              repudiandae.
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
                  <a key={item?.title} href={item?.link} className="capitalize">
                    {item?.title}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                {navItems?.slice(6, 11).map((item) => (
                  <a key={item?.title} href={item?.link} className="capitalize">
                    {item?.title}
                  </a>
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
                  <span className="ml-2">nsskavalam@gmail.com</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-font-secondary h-4"
                  />
                  <span className="ml-2">7907247909</span>
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
