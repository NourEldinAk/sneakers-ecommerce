import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { createContext, useState } from 'react';

export const numberContext = createContext()
export const cartContext = createContext()
export const toggleContext = createContext()
function App() {
  const [number, setNumber] = useState(0)
  const [isCartActive, setIsCartActive] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <main className="mx-auto w-4/5 max-[1050px]:w-[100vw] h-full flex flex-col">
        <numberContext.Provider value={{number , setNumber}}>
        <cartContext.Provider value={{isCartActive,setIsCartActive}}>
        <toggleContext.Provider value={{toggleMenu,setToggleMenu}} >
        <Navbar/>
        <Hero/>
        </toggleContext.Provider>
        </cartContext.Provider>
        </numberContext.Provider>
      </main>
    </>
  )
}

export default App
