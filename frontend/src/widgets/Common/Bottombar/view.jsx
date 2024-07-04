import React from 'react'

export default function Bottombar() {
  return (
    <div className='w-full px-5vw py-4 bg-primary flex items-center justify-center'>
        <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
            <div className="flex md:flex-1 lg:flex-1">
            <span className="text-white text-base">© 2024 NSS Higher Secondary School. All Rights Reserved.</span>
            </div>
            <div className="flex md:flex-1 lg:flex-1">
                <span className="text-white text-base">Crafted by MidnightCode Innovations</span>
            </div>
        </div>
    </div>
  )
}
