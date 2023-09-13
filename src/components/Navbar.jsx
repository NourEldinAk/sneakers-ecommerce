import React, { useContext } from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import { toggleContext } from '../App'

const Navbar = () => {
    const {toggleMenu,setToggleMenu} = useContext(toggleContext)  

  return (
    <>
        <NavbarDesktop/>
        {toggleMenu &&<NavbarMobile/> }
        
    </>
  )
}

export default Navbar