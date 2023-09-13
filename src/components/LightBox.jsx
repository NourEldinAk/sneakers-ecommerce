import React, { useEffect, useState } from 'react'
import ProductSwitcher from './ProductSwitcher'
import close_icon from '../assets/icon-close.svg'
import right_cursor from '../assets/icon-next.svg'
import left_cursor from '../assets/icon-previous.svg'
import sneakers from '../assets/image-product-1.jpg'

import { products } from '../utils/products'
import { handleSwitcher } from '../utils/switchPic'



const LightBox = ({setLightBox}) => {
const [mainImg, setMainImg] = useState(sneakers)
const {product1,product2,product3,product4} = products
const newProducts = [product1,product2,product3,product4]
const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwitch=(e)=>{
        handleSwitcher(e,setCurrentIndex , newProducts)
      }

    useEffect(() => {
        setMainImg(newProducts[currentIndex]);
      }, [currentIndex]);

  return (
    <div className='bg-lightbox flex z-30 absolute h-full w-full top-0 left-0 items-center max-[1050px]:hidden' >
        <div className='flex justify-center items-center flex-col gap-8 mx-auto z-50 h-3/5 relative' >
        <img className='ml-auto brightness-200 cursor-pointer' onClick={()=>{setLightBox(false)}} src={close_icon} alt="close" />
        <div className='absolute left_cursor cursor mb-12 cursor-pointer z-50' data-name='left' onClick={handleSwitch}>
        <img src={left_cursor} width={9} data-name='left'  alt="left_cursor" />
        </div>
        <div className='absolute right_cursor cursor mb-12 cursor-pointer z-50' data-name='right' onClick={handleSwitch}>
        <img src={right_cursor} width={9} data-name='right' alt="right_cursor" />
        </div>
        <ProductSwitcher setMainImg={setMainImg} mainImg={mainImg} setLightBox={setLightBox}/>
        </div>
        <div className='top-0 left-0 absolute h-full w-full flex z-0' onClick={()=>{setLightBox(false)}}></div>
    </div>
  )
}

export default LightBox