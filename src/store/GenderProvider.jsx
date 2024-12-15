import React, { useState } from 'react'
import GenderContext from './GenderContext'

const  GenderProvider=({children})=> {

        let [gender,setGender]=useState("women")

        
  return (
    <GenderContext.Provider value={{gender,setGender}}>
        {children}
    </GenderContext.Provider>
  )
}

export default GenderProvider