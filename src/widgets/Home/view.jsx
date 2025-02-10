"use client"
import React, { useEffect, useState } from 'react'
import Banner from '@widgets/Home/Banner'
import Message from '@widgets/Home/Message'
import About from '@widgets/Common/About'
import Counter from '@widgets/Home/Counter'
import Wish from '@widgets/Home/Wish'
import Founder from '@widgets/Home/Founder'
import OurTeam from './OurTeam'
import PreLoader from '@components/PreLoader'
import Video from './Videos'
import GalleryView from './Gallery'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
        {!isLoaded && <PreLoader />}
        <Banner/>
        <Founder/>
        <About/>
        <OurTeam/>
        <Message/>
        <Counter/>
        <Video/>
        <GalleryView/>
        <Wish/>
    </div>
  )
}
