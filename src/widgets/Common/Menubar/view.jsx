"use client";

import React from "react";
import { navItems } from "../../../common/Utils/utils";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menubar({ handleClose }) {
  const location = usePathname();

  if (location.includes("admin")) return null;

  return (
    <nav className="w-full bg-white_shade md:bg-primary">
      <ul className="flex flex-col md:flex-row items-center justify-center px-[5vw] md:px-[5vw]">
        {navItems?.map((item, index) => {
          const isActive =
            location === item.link ||
            (item.link !== "/" && location.startsWith(item.link));
          return (
            <li
              key={`${item?.title}_${index}`}
              className={`w-full md:w-auto flex-shrink-0 ${
                item?.hr ? "md:border-r md:border-primary-300" : ""
              }`}
            >
              <Link
                href={item?.link}
                onClick={() => handleClose?.()}
                className={`flex items-center justify-between md:justify-center px-0 md:px-4 lg:px-5 py-3.5 md:py-3 text-sm md:text-xs lg:text-sm capitalize transition-colors border-b border-gray-100 md:border-none ${
                  isActive
                    ? "text-primary md:text-white font-semibold"
                    : "text-font-secondary md:text-white/90 hover:text-primary md:hover:text-white"
                }`}
              >
                {item?.title}
                <MdOutlineArrowForwardIos className="md:hidden text-xs opacity-40" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
