import React from 'react'

function Product() {
  return (
    <div className='bg-white hover:shadow-2xl min-h-24 p-4 w-full h-auto transition-all duration-200 ease-in-out rounded-lg '>
      <div className='w-full h-[300px] mb-2'>
        <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='text-center font-semibold'>
        <h1 className='text-xl'>Product 1</h1>

        <h1 className='text-gray-600 '>50.00 dh</h1>
      </div>


    </div>
  )
}

export default Product