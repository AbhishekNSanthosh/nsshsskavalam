"use client";

import React from "react";
import { navItems } from "../../../common/Utils/utils";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Menubar({ handleClose }) {
  return (
    <div
      onClick={() => {
        handleClose(false);
      }}
      className="flex flex-col  w-screen bg-white_shade lg:bg-primary md:bg-primary py-3 px-5vw items-center justify-center lg:flex-row md:flex-row"
    >
      <div className="flex flex-col lg:flex-row md:flex-row gap-4 md:gap-0 lg:gap-0">
        {navItems?.map((item, index) => (
          <div key={`${item?.title}_${index}`}>
            <div
              className={`flex items-center justify-center px-0 md:px-6 lg:px-6 ${
                item?.hr ? " lg:border-r md:border-r border-primary-200" : ""
              }`}
            >
              <a
                href={item?.link}
                className="text-font-secondary text-base w-full items-center justify-between flex flex-row lg:text-white_shade md:text-white_shade capitalize"
              >
                {item?.title}
                <MdOutlineArrowForwardIos className="flex md:hidden lg:hidden text-font-secondary" />
              </a>
            </div>
            <div className="md:hidden lg:hidden flex w-[90vw] h-[1px] bg-primary-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
