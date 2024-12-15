import React, { useContext, useEffect } from 'react'
import Product from './Product'
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
                <li onClick={()=>setGender("women")} className={`uppercase cursor-pointer hover:text-gray-400 duration-300 ease-in-out transition-all`}>Women's</li>
                <li onClick={()=>setGender("men")} className={`uppercase cursor-pointer hover:text-gray-400 duration-300 ease-in-out transition-all `}>Men's</li>
                
            </ul>
           
            <div className='h-auto max-w-screen  bg-slate-100  p-7  rounded-xl'>
                 
                    {gender==="women"?<Women/>:
                    <Men/>}
                    
                     

               
            </div>

        </div>
    )
}

export default Products