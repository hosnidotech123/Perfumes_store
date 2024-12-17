import React from 'react'
import ProductW from './ProductW'
import ithraa from "../assets/perfumes/ithra2.png"
import malika_bordeaux from "../assets/perfumes/malika_bordeaux.png"
import malika_pink from "../assets/perfumes/malika_pink.png"


function Women() {
  return (
    <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 gap-y-7 products'>
      <div className='bg-white hover:shadow-2xl  min-h-24 p-4 w-full h-auto transition-all duration-200 ease-in-out rounded-lg '>
        <div className='w-full h-[300px] mb-2 overflow-hidden'>
          <img className='w-full h-full object-cover rounded-lg hover:scale-110 transition-all ease-in duration-300' src={ithraa} alt="" />
        </div>
        <div className='text-center font-semibold flex justify-center items-center flex-col space-y-2'>
          <h1 className='text-xl'>إثراء</h1>

          <h1 className='text-gray-600 text-lg'>99.00 dh</h1>
        </div>


      </div>


      <div className='bg-white hover:shadow-2xl  min-h-24 p-4 w-full h-auto transition-all duration-200 ease-in-out rounded-lg '>
        <div className='w-full h-[300px] mb-2 overflow-hidden'>
          <img className='w-full h-full object-cover rounded-lg hover:scale-110 transition-all ease-in duration-300' src={malika_bordeaux} alt="" />
        </div>
        <div className='text-center font-semibold flex justify-center items-center flex-col space-y-2'>
          <h1 className='text-xl'>ملكة العرب</h1>

          <h1 className='text-gray-600 text-lg'>99.00 dh</h1>
        </div>


      </div><div className='bg-white hover:shadow-2xl  min-h-24 p-4 w-full h-auto transition-all duration-200 ease-in-out rounded-lg '>
        <div className='w-full h-[300px] mb-2 overflow-hidden'>
          <img className='w-full h-full object-cover rounded-lg hover:scale-125 scale-110 transition-all ease-in duration-300' src={malika_pink} alt="" />
        </div>
        <div className='text-center font-semibold flex justify-center items-center flex-col space-y-2'>
          <h1 className='text-xl'>Rose ملكة العرب</h1>

          <h1 className='text-gray-600 text-lg'>99.00 dh</h1>
        </div>


      </div>
      <ProductW />
      <ProductW />
      <ProductW />
      <ProductW />
      <ProductW />
      <ProductW />
      <ProductW />
      <ProductW /></div>
  )
}

export default Women