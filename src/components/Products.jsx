import React from 'react'
import Product from './Product'

function Products() {
    return (
        <div className='max-w-screen h-auto flex gap-2 my-9'>
            <div className='h-auto w-1/4  '>
                <div className='border-gray-500 p-7 border-[1px] border-solid rounded-xl max-w-screen h-auto'>
                <h1 className='text-xl font-semibold text-gray-500 uppercase'>Categories</h1>
                  <ul className='text-black font-semibold mt-3 space-y-2'>
                    <li>For Men's</li>
                    <li>For Women's</li>
                  </ul>

                </div>

            </div>
            <div className='h-auto w-3/4 border-gray-500 border-[1px] p-4 border-solid rounded-xl'>
                <div className='grid grid-cols-3 gap-4 gap-y-7'>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    
                     

                </div>
            </div>

        </div>
    )
}

export default Products