import React from 'react'

function ProductM() {
  return (
    <div className='bg-white hover:shadow-2xl min-h-24 p-4 w-full h-auto transition-all duration-200 ease-in-out rounded-lg '>
      <div className='w-full h-[300px] mb-2 overflow-hidden'>
        <img className='w-full h-full object-cover hover:scale- rounded-lg' src="https://images.pexels.com/photos/12580617/pexels-photo-12580617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='text-center font-semibold'>
        <h1 className='text-xl'>Productm 1</h1>

        <h1 className='text-gray-600 '>50.00 dh</h1>
      </div>


    </div>
  )
}

export default ProductM