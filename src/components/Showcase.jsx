import React, { useState } from 'react'
import sneakers from '../assets/image-product-1.jpg'


import LightBox from './LightBox'
import ProductSwitcher from './ProductSwitcher'
const Showcase = () => {
  const [lightBox, setLightBox ] = useState(false)
  const [mainImg, setMainImg] = useState(sneakers)


  return (
    <>
    <div className='flex flex-col gap-6 w-[450px]'>
     <ProductSwitcher mainImg={mainImg} setMainImg={setMainImg} setLightBox={setLightBox} />
    </div>
      {lightBox && <LightBox setLightBox={setLightBox} />}
    </>
  )
}

export default Showcase