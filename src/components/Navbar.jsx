import React, { useState } from 'react';

import  whatsapp from "../assets/whatsapp.png"

function Navbar() {
  let [search, setSearch] = useState("");

  return (
    <div className="max-w-screen h-auto flex items-center justify-between  py-2 mt-2">
      
      

   
      <div  className="flex flex-col items-center justify-center cursor-pointer hover:text-gray-400 duration-300 ease-in-out transition-all">
        <h1 className="md:text-5xl  text-4xl font-semibold">Perfumes</h1>
        <h1 className='uppercase font-semibold text-sm '>online store</h1>
        
      </div>
      
      <input
        type="text"
        placeholder="Get Your Perfume "
        className="text-lg hidden w-[28rem] lg:block border-gray-400 border-2 py-1 rounded-lg pl-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

 
      <div className="cursor-pointer animated w-[50px] h-[50px] hover:shadow-xl rounded-full text-green-700 ml-8">
        <img className='w-full h-full object-cover' src={whatsapp} alt="" />
      </div>

    

      
    </div>
  );
}

export default Navbar;
