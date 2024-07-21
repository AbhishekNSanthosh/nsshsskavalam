import React from 'react'
import Banner from '@widgets/Home/Banner'
import Message from '@widgets/Home/Message'
import About from '@widgets/Common/About'
import Counter from '@widgets/Home/Counter'
import Wish from '@widgets/Home/Wish'
import Founder from '@widgets/Home/Founder'
import { metadata } from '@app/layout'

export default function HomePage() {
  return (
    <div>
        <Banner/>
        <Founder/>
        <About/>
        <Message/>
        <Counter/>
        <Wish/>
    </div>
  )
}
