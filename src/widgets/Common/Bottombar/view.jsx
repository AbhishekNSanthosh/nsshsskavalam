import React from 'react'

export default function Bottombar() {
  return (
    <div className='w-full px-[5vw] py-4 flex items-center justify-center'>
        <div className="w-full flex gap-2 flex-col md:flex-row lg:flex-row items-center lg:justify-between border-t border-gray-300 pt-10 pb-5">
            <div className="flex md:flex-1 lg:flex-1">
            <span className="text-font-secondary text-xs md:text-base lg:text-base">© 2024 NSS HSS, Kavalam. All Rights Reserved.</span>
            </div>
            <div className="flex md:flex-1 lg:flex-1 items-center justify-end">
                <span className="text-font-secondary text-xs md:text-base lg:text-base">Crafted by Midnitcode Innovations</span>
            </div>
        </div>
    </div>
  )
}
