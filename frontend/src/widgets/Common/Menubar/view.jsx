"use client";

import React from "react";
import { navItems } from "../../../common/Utils/utils";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Menubar({ handleClose }) {
  const handleClick = () => {
    if (window.innerWidth < 768) {
      handleClose(false);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col w-full bg-white_shade lg:bg-primary md:bg-primary py-3 items-center justify-center lg:flex-row md:flex-row"
    >
      <div className="flex flex-col lg:flex-row md:flex-row gap-4 md:gap-0 lg:gap-0 w-full items-center justify-center px-[5vw]">
        {navItems?.map((item, index) => (
          <div
            className={`flex w-full md:w-auto lg:w-auto items-center pb-4 md:pb-0 lg:pb-0 justify-center px-0 md:px-[1.3vw] lg:px-[2vw] ${
              item?.hr ? "lg:border-r md:border-r border-primary-200" : ""
            }`}
            key={`${item?.title}_${index}`}
          >
            <a
              href={item?.link}
              className="text-font-secondary text-[1.5vw] md:text-[1.7vw] lg:text-[1.1vw] w-full md:w-auto lg:w-auto items-center justify-between flex flex-row lg:text-white_shade md:text-white_shade capitalize"
            >
              {item?.title}
              <MdOutlineArrowForwardIos className="flex md:hidden lg:hidden text-font-secondary" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
