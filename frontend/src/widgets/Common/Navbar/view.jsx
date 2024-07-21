"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { NssLogo } from "../../../common/Icons/NssLogo/NssLogo";
import { HiMenuAlt2 } from "react-icons/hi";
import Menubar from "../Menubar";
import Link from "next/link";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div
        className={`fixed md:border-none lg:border-none border-b-1 border-b-primary-300 px-5vw py-2 md:py-2 lg:py-2 min-h-[11vh] md:h-[13vh] lg:h[13vh] md:relative lg:relative bg-white_shade top-0 z-50 flex flex-col w-screen items-center justify-center`}
      >
        <div className="flex flex-col md:flex-row lg:flex-row w-full">
          <div className="flex w-full justify-between">
            <Link href="/" className="">
              <div className="flex sm:flex-1 lg:flex-1 p-0 items-center gap-2 lg:gap-4 md:gap-4">
                <NssLogo />
                <div className="flex flex-col">
                  <span className="text-[0.9rem] font-semibold md:text-xl lg:text-xl">
                    NSS Higher Secondary School{" "}
                  </span>
                  <span className="text-xs md:text-base lg:text-base">
                    Kavalam, Alappuzha{" "}
                  </span>
                </div>
              </div>
            </Link>
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
            <div className="flex md:hidden lg:hidden items-center justify-center text-[1.8rem] cursor-pointer">
              <HiMenuAlt2
                onClick={() => {
                  setIsDrawerOpen(!isDrawerOpen);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isDrawerOpen ? "flex fixed" : "hidden"
        } h-[90vh] top-0 mt-[10vh] w-screen md:hidden lg:hidden bg-white_shade z-50 `}
      >
        <div className="w-full">
          <Menubar handleClose={handleClose} />
        </div>
        <div className="absolute bottom-4 w-full self-center px-[5vw] flex items-center justify-center flex-col">
          <span className="text-sm">All rights reserved</span>
          <a href="https://midnitcode.in" className="text-sm">
            Crafted by <span className="text-primary font-semibold">Midnitcode Innovations</span>
          </a>
        </div>
      </div>
    </>
  );
}
