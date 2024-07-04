"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { NssLogo } from "../../../common/Icons/NssLogo/NssLogo";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  const [isDrawerOpen, setOsIsDrawerOpen] = useState(false);
  return (
    <div className={`fixed bg-white_shade top-0 z-50 h-auto flex flex-col w-screen items-center justify-center`}>
      <div className="flex flex-col w-full px-5vw py-2 md:py-2 lg:py-2">
        <div className="flex w-full justify-between">
          <div className="flex sm:flex-1 lg:flex-1 p-0 items-center gap-4">
            <NssLogo />
            <div className="flex flex-col">
              <span className="text-base font-semibold md:text-xl lg:text-xl">
                NSS Higher Secondary School{" "}
              </span>
              <span className="text-xs md:text-base lg:text-base">
                Kavalam, Alappuzha{" "}
              </span>
            </div>
          </div>
          <div className="md:flex lg:flex flex-1 hidden items-center justify-end gap-8">
            <div className="flex gap-4 items-center justify-center">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="h-8 text-primary"
              />
              <div className="flex flex-col">
                <div className="flex">
                  <span className="">9:00</span>
                  <span className="">AM</span>
                  &nbsp;
                  <span className=""> - </span>
                  &nbsp;
                  <span className="">5:00</span>
                  <span className="">PM</span>
                </div>
                <span className="">Monday to Saturday</span>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="h-8 text-primary"
              />
              <div className="flex flex-col">
                <span className="">Call us</span>
                <span className="">
                  <a href="tel:04772746100" className="">
                    0477 2746100
                  </a>
                  &nbsp;
                  <a href="tel:+919747408039" className="">
                    +91 9747408039
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex md:hidden lg:hidden items-center justify-center text-3xl cursor-pointer">
            <HiMenuAlt2
              onClick={() => {
                setOsIsDrawerOpen(!isDrawerOpen);
              }}
            />
          </div>
        </div>
        <div className={`${isDrawerOpen ? 'flex' : 'hidden'} mt-[10vh] h-screen w-screen md:hidden lg:hidden bg-white_shade z-50 `}>
          h
        </div>
      </div>
    </div>
  );
}
