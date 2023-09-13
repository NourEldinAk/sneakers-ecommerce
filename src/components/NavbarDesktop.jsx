import React, { useContext, useEffect, useState } from 'react'
import sneakers_logo from '../assets/logo.svg'
import cart from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'
import menu from '../assets/icon-menu.svg'
import CartMenu from './CartMenu'
import { cartContext, numberContext, toggleContext } from '../App'

const NavbarDesktop = () => {

    const {number} = useContext(numberContext)
    const [openCartMenu, setOpenCartMenu] = useState(false)
    const {isCartActive,setIsCartActive} = useContext(cartContext)
    const {toggleMenu , setToggleMenu} = useContext(toggleContext)

    const handleCartMenu = ()=>{
        if(openCartMenu){
            setOpenCartMenu(false)
        }else{
            setOpenCartMenu(true)
        }
    }

    const handleOpenMenu = ()=>{
        if(!toggleMenu){
            setToggleMenu(true)
        }
    }


  return (
    <>
    <div className='mx-auto max-[1050px]:py-9 border-b-2  max-[1050px]:w-[375px] max-[1050px]:border-none flex justify-between relative w-[90%] max-[1100px]:w-full '>
        <div className="flex items-center gap-10 max-[1050px]:gap-5  ">
            <img src={menu} onClick={handleOpenMenu} width={20} className='min-[1050px]:hidden cursor-pointer'  alt="menu" />
            <img src={sneakers_logo} width={130} alt="logo" />
            <ul className=' max-[1050px]:hidden flex gap-8 text-sm text-darkGrayish my-auto ml-2 h-full'>
                <a className='py-9 hover:border-b-2 border-primary cursor-pointer'>Collections</a>
                <a className='py-9 hover:border-b-2 border-primary cursor-pointer'>Men</a>
                <a className='py-9 hover:border-b-2 border-primary cursor-pointer'>Women</a>
                <a className='py-9 hover:border-b-2 border-primary cursor-pointer'>About</a>
                <a className='py-9 hover:border-b-2 border-primary cursor-pointer'>Contact</a>
            </ul>
        </div>
        <div className="flex mr-14 pr-6 relative items-center">
            {number>0 && isCartActive && (<span className=' flex z-20 absolute cart-number-position font-semibold px-[6px] rounded-full text-[8px] bg-primary text-white'>{number}</span>)}
            <img src={cart} width={19} className='cursor-pointer brightness-50' onClick={handleCartMenu} alt="cart" />
            {openCartMenu && <CartMenu/>}
        </div>
        <img src={avatar} width={35} className='absolute right-1 top-7 cursor-pointer hover:border-2 border-primary  rounded-full' alt="avatar" />
    </div>

        </>
  )
}

export default NavbarDesktop