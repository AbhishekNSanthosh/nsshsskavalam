"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faPhoneVolume,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NssLogo } from "../../../common/Icons/NssLogo/NssLogo";
import { HiMenuAlt2 } from "react-icons/hi";
import Menubar from "../Menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (location.includes("admin")) return null;

  return (
    <>
      {/* Fixed top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white_shade border-b border-gray-100 shadow-sm h-16 md:h-20 flex items-center px-[5vw]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
          <NssLogo />
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold md:text-base lg:text-lg leading-tight">
              NSS Higher Secondary School
            </span>
            <span className="text-xs md:text-sm text-font-secondary leading-tight">
              Kavalam, Alappuzha
            </span>
          </div>
        </Link>

        {/* Desktop right section */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 flex-shrink-0">
          <span className="text-sm text-font-secondary hidden lg:block">
            School Code:{" "}
            <span className="font-semibold text-font-primary">04066</span>
          </span>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="h-5 lg:h-6 text-primary flex-shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">9:00 AM – 5:00 PM</span>
              <span className="text-xs text-font-secondary">Monday to Friday</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="h-5 lg:h-6 text-primary flex-shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-font-secondary">Call us</span>
              <Link
                href="tel:04772746100"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                0477 274 6100
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`transition-all duration-300 ease-out inline-flex items-center justify-center ${
              isDrawerOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {isDrawerOpen ? (
              <FontAwesomeIcon icon={faTimes} className="h-5" />
            ) : (
              <HiMenuAlt2 className="text-2xl" />
            )}
          </span>
        </button>
      </header>

      {/* Spacer — pushes page content below the fixed header */}
      <div className="h-16 md:h-20" />

      {/* Backdrop — fades in/out */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile drawer — fades + drops in */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 z-50 md:hidden bg-white_shade overflow-y-auto transition-all duration-300 ease-out ${
          isDrawerOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col min-h-full">
          <div className="flex-1">
            <Menubar handleClose={() => setIsDrawerOpen(false)} />
          </div>
          <div className="px-[5vw] py-4 border-t border-gray-100 flex flex-col items-center gap-1">
            <span className="text-xs text-font-secondary">All rights reserved</span>
            <a href="https://beond.in" className="text-xs">
              Developed by{" "}
              <span className="text-primary font-semibold">Beond Innovations</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
