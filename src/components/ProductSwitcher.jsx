import React,{useEffect, useState} from 'react'
import { products } from '../utils/products'
import right_cursor from '../assets/icon-next.svg'
import left_cursor from '../assets/icon-previous.svg'
import { handleSwitcher } from '../utils/switchPic'

const ProductSwitcher = ({setLightBox, mainImg,setMainImg}) => {
    const [activeImg, setActiveImg] = useState('thumbnail1')
    const [currentIndex, setCurrentIndex] = useState(0);


    const {product1,product2,product3,product4} = products
    const newProducts = [product1,product2,product3,product4]

    const handleSwitch=(e)=>{
        handleSwitcher(e,setCurrentIndex , newProducts)
      }
    
    const handleImg= (e)=>{
      switch (e.target.name) {
        case 'thumbnail1':
          setMainImg(products.product1)
          setActiveImg(e.target.name)
          break;
          case 'thumbnail2':
            setMainImg(products.product2)
            setActiveImg(e.target.name)
            break;
            case 'thumbnail3':
              setMainImg(products.product3)
              setActiveImg(e.target.name)
              break;
              case 'thumbnail4':
                setMainImg(products.product4)
                setActiveImg(e.target.name)
                break;
      
        default: setMainImg(products.product1)
          break;
      }
    }

    useEffect(() => {
      setMainImg(newProducts[currentIndex]);
    }, [currentIndex]);

  return (
    <>
     <div className='relative'>
     <div className='absolute left_cursor_mobile cursor cursor-pointer min-[1050px]:hidden' data-name='left' onClick={handleSwitch}>
        <img src={left_cursor} width={9} data-name='left'  alt="left_cursor" />
        </div>
        <div className='absolute right_cursor_mobile cursor mb-12 cursor-pointer min-[1050px]:hidden' data-name='right' onClick={handleSwitch}>
        <img src={right_cursor} width={9} data-name='right' alt="right_cursor " />
        </div>
      <img className='rounded-xl max-[1050px]:mobile-img cursor-pointer' onClick={()=>{setLightBox(true)}} src={mainImg} width={380} alt="thumbnail" />
      </div>

      <div className='flex gap-7 product h-[70px] max-[1050px]:hidden'>

      <div className={`cursor-pointer ${activeImg === 'thumbnail1'? 'active' : 'not-active'}`}>
      <img  src={products.thumbnail1} name='thumbnail1' onClick={handleImg} alt="thumbnail" />
      </div>
      <div className={`cursor-pointer ${activeImg === 'thumbnail2'? 'active' : 'not-active'}`}>
      <img  src={products.thumbnail2} name='thumbnail2' onClick={handleImg} alt="thumbnail" />
      </div>
      <div className={`cursor-pointer ${activeImg === 'thumbnail3'? 'active' : 'not-active'}`}>
      <img src={products.thumbnail3} name='thumbnail3' onClick={handleImg} alt="thumbnail" />

      </div>
      <div className={`cursor-pointer ${activeImg === 'thumbnail4'? 'active' : 'not-active'}`}>
      <img  src={products.thumbnail4} name='thumbnail4' onClick={handleImg} alt="thumbnail" />
      </div>

      </div>
      </>
  )
}

export default ProductSwitcher