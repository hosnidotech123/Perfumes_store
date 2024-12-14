import React from 'react'

function Products() {
    return (
        <div className='max-w-screen h-auto flex gap-2 mt-9'>
            <div className='h-auto w-1/4 border-gray-500 border-[1px] border-solid rounded-xl p-4'>
                <h1 className='text-xl font-semibold text-gray-500 uppercase'>Categories</h1>

            </div>
            <div className='h-auto w-3/4 border-gray-500 border-[1px] p-4 border-solid rounded-xl'>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='bg-white min-h-24 p-4 w-full h-auto border-gray-300 rounded-lg border-[1px] border-solid'>
                        <div className='w-full h-[300px]'>
                            <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <h1>Product 1</h1>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <h1>500 mad</h1>


                    </div>
                     

                </div>
            </div>

        </div>
    )
}

export default Products