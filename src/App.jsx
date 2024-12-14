import React from 'react'
import Discount from './components/Discount'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Products from './components/Products'

function App() {
  return (
    <div className='max-w-screen h-auto'>
      <Discount/>
      <div className='max-w-screen w-[80%] mx-auto'>
        <Navbar/>
        <Categories/>
        <Products/>

      </div>
    </div>
  )
}

export default App