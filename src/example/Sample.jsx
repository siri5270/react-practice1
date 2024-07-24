
import React from 'react'
import TestComp from './TestComp'

const Mango=()=>{
    return(
        <h2>Mangoes are sweet</h2>
    )
}


function Sample() {
  return (
    <div>Sample
        <Mango />
        <TestComp />
    </div>
  )
}

export default Sample