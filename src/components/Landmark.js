import React from 'react'

const Landmark = ({landmarks,handleLandmarkChange,landmarkIndex}) => {
    return <select value={landmarkIndex} onChange={(e)=>handleLandmarkChange(e.target.value)}>
    {
        landmarks.map((landmark,index)=>{
            return <option key={index} value={index}>{landmark.name}</option> 
        })
    }
  </select>
}

export default Landmark