import React, { useState } from 'react';

import  whatsapp from "../assets/whatsapp.png"

function Navbar() {
  let [search, setSearch] = useState("");

  return (
    <div className="max-w-screen h-auto flex items-center justify-between  py-2">
      
      <input
        type="text"
        placeholder="Search"
        className="text-lg border-gray-400 border-2 py-1 rounded-lg pl-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

   
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold">Perfumes</h1>
        <h1 className='uppercase font-semibold'>online store</h1>
      </div>

 
      <div className="cursor-pointer animated w-[50px] h-[50px] hover:shadow-xl rounded-full text-green-700 ml-2">
        <img className='w-full h-full object-cover' src={whatsapp} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
