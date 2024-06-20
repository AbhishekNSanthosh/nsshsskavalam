import React from 'react'
import Banner from '@widgets/Home/Banner'
import Message from '@widgets/Home/Message'
import About from '@widgets/Common/About'

export default function HomePage() {
  return (
    <div>
        <Banner/>
        <Message/>
        <About/>
    </div>
  )
}
