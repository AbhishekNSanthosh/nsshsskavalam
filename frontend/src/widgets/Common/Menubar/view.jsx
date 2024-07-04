import React from "react";
import { navItems } from "../../../common/Utils/utils";

export default function Menubar() {
  return (
    <div className='flex w-screen bg-primary py-3 px-5vw items-center justify-center'>
      <div className='flex'>
        {navItems?.map((item,index) => (
            <div className={`flex items-center justify-center px-6 ${item?.hr ? 'border-r border-primary-200' : ''}`} key={`${item?.title}_${index}`}>
              <a href={item?.link} className='text-white capitalize'>{item?.title}</a>
            </div>
        ))}
      </div>
    </div>
  );
}
