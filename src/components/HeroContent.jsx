import React, { useContext, useState } from 'react'
import {cartContext, numberContext} from '../App'
import cart from '../assets/icon-cart.svg'
import minus_icon from '../assets/icon-minus.svg'
import plus_icon from '../assets/icon-plus.svg'

const HeroContent = () => {
  const {number , setNumber} = useContext(numberContext)
  const {isCartActive , setIsCartActive} = useContext(cartContext)
  const handleNumber =(e)=>{
    const name = e.target.dataset.name
    if(name ==='minus' && number !==0){
      setNumber(number-1)
    }else if(name ==='plus'){
      setNumber(number+1)
    }
  }

  const handleCart= ()=>{
    if(number !== 0 ){
      setIsCartActive(true)
    }
  }
  return (
    <div className='w-[50%] py-10  flex flex-col gap-7 max-[1050px]:mobile-content-design'>
      <div className=''>
        <h1 className='text-primary text-xs tracking-widest  font-semibold uppercase mb-4'>sneaker company</h1>
        <h2 className='text-[42px] tracking-normal leading-[45px] font-bold '> Fall Limited Edition Sneakers</h2>
      </div> 
        <p className='text-base text-darkGrayish'>These low-profile
           sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='flex flex-col price max-[1050px]:flex-row max-[1050px]:justify-between '>
          <div className='flex gap-4'>  
          <p className='text-2xl font-semibold'>$125.00</p>
          <span className='text-sm my-auto rounded-lg bg-secondary text-primary font-semibold px-2 py-1'>50%</span>
          </div>
          <div>

          <span className='text-sm line-through text-lightGray'>$250.00</span>
          </div>
      </div>
      <div className='flex gap-4 w-full items-center max-[1050px]:flex max-[1050px]:flex-col'>
        <div className='w-2/5 flex items-center max-[1050px]:w-full max-[1050px]:justify-center'>
          <button className='add-button rounded-l-lg py-[23px] active:plus-minus-active' data-name='minus' onClick={handleNumber}>
            <img src={minus_icon} data-name='minus' className='mx-auto' width={12} alt="minus" />
          </button>
          <span className='add-button cursor-default text-xs max-[1050px]:text-md py-[17px]'>{number}</span>
          <button className='add-button rounded-r-lg py-5 active:plus-minus-active' data-name='plus' onClick={handleNumber}>
            <img src={plus_icon} data-name='plus' className='mx-auto' width={10} alt="plus" />
          </button>
        </div>
        <div className='w-4/5  max-[1050px]:w-full'>
        <button onClick={handleCart} className=' cart-button box-shadow'>
          <img className='cart-icon'  src={cart}  width={15}  alt="Cart" />
          Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default HeroContent