import React from "react";
import { navItems } from "../../../common/Utils/utils";

export default function Menubar() {
  return (
    <div className='flex flex-col w-screen bg-white_shade lg:bg-primary md:bg-primary py-3 px-5vw items-center justify-center lg:flex-row md:flex-row'>
      <div className='flex flex-col lg:flex-row md:flex-row'>
        {navItems?.map((item,index) => (
            <div className={`flex items-center justify-center px-6 ${item?.hr ? ' lg:border-r md:border-r border-primary-200' : ''}`} key={`${item?.title}_${index}`}>
              <a href={item?.link} className='text-font-secondary lg:text-white_shade md:text-white_shade capitalize'>{item?.title}</a>
            </div>
        ))}
      </div>
    </div>
  );
}
