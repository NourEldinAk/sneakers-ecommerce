import React from 'react'
import HeroContent from './HeroContent'
import Showcase from './Showcase'
const Hero = () => {
  return (
    <div className="h-[600px] max-[1050px]:mobile-design-container w-[1050px] flex items-center mx-auto">

    <div className='w-[1050px] flex justify-center gap-7 px-10 max-[1050px]:mobile-design'>
        <Showcase/>
        <HeroContent/>
    </div>
    </div>
  )
}

export default Hero