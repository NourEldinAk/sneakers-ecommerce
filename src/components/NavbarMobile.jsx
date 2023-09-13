import React, { useContext, useEffect, useState } from 'react'
import close_icon from '../assets/icon-close.svg'
import { toggleContext } from '../App'

const NavbarMobile = () => {

    const {toggleMenu , setToggleMenu} = useContext(toggleContext)
    const [appear, setAppear] = useState(false)
    const handleClose=()=>{
        if(toggleMenu){
            setToggleMenu(false)
        }
    }
    useEffect(()=>{
        setTimeout(() => {
            setAppear(true)
        }, 50);
    },[toggleMenu])

  return (
    <div className='absolute h-[985px] max-[650px]:w-[100vh] w-full  overflow-hidden bg-lightbox min-[1050px]:hidden z-40 flex'>
        <div className={` ${appear? 'bg-white h-full w-[300px] text-start z-50':'w-[0px]'} transition-all ease-in-out duration-300`}  >
            <div className='pt-10 flex flex-col gap-12 pl-12 fixed'>
            <img src={close_icon} width={17} alt="close" onClick={handleClose} className='cursor-pointer hover:brightness-200' />
                <ul className='flex flex-col gap-4 font-semibold transition-all ease-in-out duration-300 '>
                <a className=' pb-2 hover:opacity-60  cursor-pointer'>Collections</a>
                <a className=' pb-2 hover:opacity-60  cursor-pointer'>Men</a>
                <a className=' pb-2 hover:opacity-60  cursor-pointer'>Women</a>
                <a className=' pb-2 hover:opacity-60 cursor-pointer'>About</a>
                <a className=' pb-2 hover:opacity-60  cursor-pointer'>Contact</a>
                </ul>
            </div>
        </div>
        <div className='top-0 right-0 absolute h-full   flex z-0' onClick={handleClose}></div>

    </div>
  )
}

export default NavbarMobile