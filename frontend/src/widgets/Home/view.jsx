import React from 'react'
import Banner from '@widgets/Home/Banner'
import Message from '@widgets/Home/Message'
import About from '@widgets/Common/About'
import Counter from '@widgets/Home/Counter'

export default function HomePage() {
  return (
    <div>
        <Banner/>
        <Message/>
        <About/>
        <Counter/>
    </div>
  )
}
