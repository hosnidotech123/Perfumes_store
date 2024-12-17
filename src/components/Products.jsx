import React, { useContext, useEffect } from 'react'
import Product from './ProductW'
import Women from './Women'
 
import GenderContext from '../store/GenderContext'
import Men from './Men'

function Products() {

    let {gender,setGender}=useContext(GenderContext)

    useEffect(()=>{

    },[gender])
    return (
        <div className='max-w-screen h-auto my-9'>

            <ul className='flex justify-center items-center font-bold  my-7 space-x-16'>
                <li onClick={()=>setGender("women")} className={`uppercase cursor-pointer  decoration-pink-600 decoration-double ${gender==="women"?"underline":""} underline-offset-8 hover:text-gray-400 duration-300 ease-in-out transition-all`}>Women's</li>
                <li onClick={()=>setGender("men")} className={`uppercase cursor-pointer decoration-pink-600 decoration-double ${gender==="men"?"underline":""} underline-offset-8 hover:text-gray-400 duration-300 ease-in-out transition-all `}>Men's</li>
                
            </ul>
           
            <div className={`h-auto max-w-screen  ${gender==="women"?"bg-pink-200 ":"bg-blue-200 "} p-7  rounded-xl`}>
                 
                    {gender==="women"?<Women/>:
                    <Men/>}
                    
                     

               
            </div>

        </div>
    )
}

export default Products