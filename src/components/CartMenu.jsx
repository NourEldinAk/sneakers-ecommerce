import React, { useContext, useEffect, useState } from 'react'
import sneakers from '../assets/image-product-1.jpg'
import trash_icon from '../assets/icon-delete.svg'
import { cartContext, numberContext } from '../App'


const CartMenu = () => {
    const {number , setNumber} = useContext(numberContext)
    const {isCartActive , setIsCartActive} = useContext(cartContext)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(number*125)
 
    },[number])

    const handleClose = ()=>{
        setIsCartActive(false)
        setNumber(0)
    }

  return (
    <div className='max-[1050px]:mobile-cart cart-menu absolute h-[190px] rounded-lg w-[300px] cart-menu-shadow z-30'>
        <div className='h-full w-full bg-white flex flex-col rounded-lg '>
            <div className='border-b-2  h-1/5 flex items-center p-4 py-6 text-xs font-semibold'>
                <span>Cart</span>
            </div>
            <div className='h-4/5 flex items-center justify-center text-sm '>
                {!isCartActive && (<span className='text-lightbox opacity-80'>Your cart is empty.</span>)}
                {isCartActive && (
                    <div className='flex items-center justify-center flex-col gap-6 w-full'>
                    <div className='flex gap-3 items-center px-4 ' >
                        <img src={sneakers} className='rounded-md' width={40} alt="product" />
                        <p className='text-sm  text-lightbox opacity-80 max-[1050px]:text-base'>Fall Limited Edition Sneakers
                        $125.00 x {number} <span className='text-darkBlue font-bold'>${total.toFixed(2)}</span>
                        </p>
                        <img src={trash_icon} onClick={handleClose} className='cursor-pointer' width={12}  alt="Delete" />
                    </div>
                    <button className='bg-primary text-white w-4/5 py-3 rounded-lg active:opacity-50' onClick={handleClose}>
                         Checkout</button>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default CartMenu