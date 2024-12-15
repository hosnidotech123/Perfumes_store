import React from 'react'
import Discount from './components/Discount'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Products from './components/Products'
 

function App() {

 

   
  return (
    <div className='max-w-screen h-auto bg-white'>
      <Discount/>
      <div className='max-w-screen lg:w-[90%] mx-auto px-5 md:px-9 lg:px-0'>
        <Navbar/>
         
        
        <Products/>

      </div>
    </div>
  )
}

export default App