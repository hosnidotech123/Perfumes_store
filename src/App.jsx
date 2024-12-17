import React, { useEffect, useState } from 'react'
import Discount from './components/Discount'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Products from './components/Products'
import whatsapp from "./assets/whatsapp.png"
import VideoSection from './components/VideoSection'
 

function App() {


  let [display,setDisplay]=useState(false)


  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>300){
          setDisplay(true)
      }
      else{
        setDisplay(false)
      }
    })

    console.log(display)
  },[display])

 

   
  return (
    <div className='max-w-screen h-auto bg-white relative'>
      <div className={`cursor-pointer ${display?"":"hidden"}  w-[50px] h-[50px] hover:shadow-xl fixed right-0 bottom-0  z-40 rounded-full text-green-700 mx-2 my-4`}>
        <img className='w-full h-full object-cover' src={whatsapp} alt="" />
      </div>
      <Discount/>
      <div className='max-w-screen lg:w-[90%] mx-auto px-5 md:px-9 lg:px-0'>
        <Navbar/>
         <VideoSection/>
        
        <Products/>

      </div>
    </div>
  )
}

export default App