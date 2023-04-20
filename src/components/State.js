import React from 'react'

const State = ({states,handleStateChange,stateIndex}) => {
  return <select value={stateIndex} onChange={(e)=>handleStateChange(e.target.value)}>
    {
        states.map((state,index)=>{
            return <option key={index} value={index}>{state.name}</option> 
        })
    }
  </select>
}

export default State