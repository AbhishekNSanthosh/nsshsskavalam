import React from 'react'
import Image from 'next/image'

export const NssLogo = () => {
  return (
	<div>
		<Image src={"/images/logo.webp"} height={80} width={100} className='h-14 w-14'/>
	</div>
  )
}
