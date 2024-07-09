import About from '@widgets/Common/About'
import React from 'react'

export const metadata = {
  title: "About Us",
  description: "",
};

export default function page() {
  return (
    <div className=' flex items-center justify-center'>
        <About/>
    </div>
  )
}
