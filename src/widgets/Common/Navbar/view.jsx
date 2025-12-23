"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { NssLogo } from "../../../common/Icons/NssLogo/NssLogo";
import { HiMenuAlt2 } from "react-icons/hi";
import Menubar from "../Menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = usePathname();

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  if (location.includes("admin")) {
    return null; // hide navbar for admin routes
  }

  return (
    <>
      <div
        className={`fixed md:border-none lg:border-none border-b border-b-primary-300 px-[5vw] py-2 md:py-2 lg:py-2 min-h-[11vh] md:h-[13vh] lg:h-[13vh] md:relative lg:relative bg-white_shade top-0 z-50 flex flex-col w-screen items-center justify-center`}
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

            {/* Desktop Right Section */}
            <div className="md:flex lg:flex flex-1 hidden items-center justify-end gap-8">
              <div className="self-end mb-2">
                <span>
                  School Code:{" "}
                  <span className="font-sans font-semibold">04066</span>
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="h-8 text-primary"
                />
                <div className="flex flex-col">
                  <div className="flex font-sans">
                    <span className="font-sans">9:00</span>
                    <span>AM</span>
                    &nbsp;<span>-</span>&nbsp;
                    <span className="font-sans">5:00</span>
                    <span>PM</span>
                  </div>
                  <span>Monday to Friday</span>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="h-8 text-primary"
                />
                <div className="flex flex-col">
                  <span>Call us</span>
                  <span>
                    <Link href="tel:04772746100" className="font-sans">
                      0477 2746100
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex md:hidden lg:hidden items-center justify-center text-[1.8rem] cursor-pointer">
              <HiMenuAlt2
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Menu for Mobile */}
      <div
        className={`${
          isDrawerOpen ? "flex fixed" : "hidden"
        } h-[90vh] top-0 mt-[10vh] w-screen md:hidden lg:hidden bg-white_shade z-50`}
      >
        <div className="w-full">
          <Menubar handleClose={handleClose} />
        </div>
        <div className="absolute bottom-4 w-full self-center px-[5vw] flex items-center justify-center flex-col">
          <span className="text-sm">All rights reserved</span>
          <a href="https://midnitcode.in" className="text-sm">
            Crafted by{" "}
            <span className="text-primary font-semibold">
              Midnitcode Innovations
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
